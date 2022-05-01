import {sleep} from '@snickbit/utilities'
import Denque from 'denque'

/** @internal */
export class AbortError extends Error {
	constructor() {
		super('Throttled function aborted')
		this.name = 'AbortError'
	}
}

export interface QueueOptions {
	/** The maximum number of concurrent tasks to run. */
	concurrency: number
	/** The maximum number of calls within an interval */
	limit?: number
	/** The timespan for limit in milliseconds. */
	interval?: number
	/** Use a strict, more resource intensive, throttling algorithm. The default algorithm uses a windowed approach that will work correctly in most cases, limiting the total number of calls at the specified limit per interval window. The strict algorithm throttles each call individually, ensuring the limit is not exceeded for any interval. */
	strict?: boolean
}

export type AnyFunction = (...args: any[]) => any | Promise<any>

/**
 * Simple function queueing & throttling
 * @param {QueueOptions} options
 */
export default function queue(options: QueueOptions = {concurrency: 1}) {
	const {concurrency = 1, limit, interval, strict} = (options || {})

	const queue = new Denque()
	let running = 0

	let throttle = limit && interval
	let currentTick = 0
	let activeCount = 0
	let aborted = false

	const next = () => {
		running--

		if (queue.length > 0) {
			queue.shift()()
		}
	}

	function windowedDelay() {
		const now = Date.now()

		if ((now - currentTick) > interval) {
			activeCount = 1
			currentTick = now
			return 0
		}

		if (activeCount < limit) {
			activeCount++
		} else {
			currentTick += interval
			activeCount = 1
		}

		return currentTick - now
	}

	const strictTicks = []

	function strictDelay() {
		const now = Date.now()

		if (strictTicks.length < limit) {
			strictTicks.push(now)
			return 0
		}

		const earliestTime = strictTicks.shift() + interval

		if (now >= earliestTime) {
			strictTicks.push(now)
			return 0
		}

		strictTicks.push(earliestTime)
		return earliestTime - now
	}

	const getDelay = strict ? strictDelay : windowedDelay

	const run = async (fn, resolve, args) => {
		running++

		if (throttle) {
			await sleep(getDelay())
		}

		if (aborted) {
			throw new AbortError()
		}

		const result = (async () => fn(...args))()

		resolve(result)

		result.catch(() => {
			// ignore this error
		}).finally(() => next())
	}

	const push = (fn, resolve, args) => {
		queue.push(run.bind(undefined, fn, resolve, args));

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `running` to `concurrency`, because `running` is updated asynchronously
			// when the run function is shifted and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `running`.
			await Promise.resolve()

			// if it can be run now, run it
			if (concurrency < 0 || running < concurrency && queue.length > 0) {
				queue.shift()()
			}
		})()
	}

	/**
	 * Add a task to the queue
	 * @param {AnyFunction} fn - The function to call
	 * @param {...any} args - The arguments to pass to the function
	 * @return {Promise<any>}
	 */
	const generator = (fn: AnyFunction, ...args: any[]): Promise<any> => new Promise(resolve => push(fn, resolve, args))

	Object.defineProperties(generator, {
		active: {
			get: () => running
		},
		pending: {
			get: () => queue.length
		},
		/**
		 * Clear the queue
		 * @return {void}
		 */
		clear: {
			value: (): void => queue.clear()
		},

		abort: {
			value: (): void => {
				aborted = true
				strictTicks.splice(0, strictTicks.length)
			}
		}
	})

	return generator
}
