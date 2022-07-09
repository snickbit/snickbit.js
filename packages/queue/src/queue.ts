import {sleep} from '@snickbit/utilities'
import {ChunkedQueue, DynamicCyclicQueue} from 'lite-fifo'
import {CatchCallback, FinallyCallback, QueueConfiguration, QueueOption, QueueOptions, QueueOptionsValue, QueueTask, QueueTaskFunction, QueueTaskPromise, ThenCallback} from './definitions'
import {AbortQueueError, QueueException} from './errors'
import {QueuePromise} from './queue.promise'

interface QueueTaskDefinition {
	task: QueueTask
	thisArg?: any
	args?: any[]
}

interface QueueTicks {
	current: number
	active: number
	strict: number[]
}

type Waiting = {
	resolve(value: unknown): void
	reject(error: unknown): void
}

interface QueueHandlers {
	then?: ThenCallback
	thenEach?: ThenCallback
	finally?: FinallyCallback
	finallyEach?: FinallyCallback
	catch?: CatchCallback
	catchEach?: CatchCallback
}

const defaultOptions: QueueConfiguration = {
	concurrency: 4,
	limit: 0,
	interval: 0,
	strict: false,
	abortOnError: false,
	strategy: 'dynamic',
	throttle: false,
	autoStart: true
}

export class Queue {
	static readonly defaultOptions: QueueConfiguration = {...defaultOptions}

	private stopped: boolean

	private tasks = 0

	#results: any[] = []

	private queue: ChunkedQueue | DynamicCyclicQueue

	private aborted = false

	private processes = 0

	private process: QueuePromise<any>

	private handlers = {} as QueueHandlers

	private ticks: QueueTicks = {
		current: 0,
		active: 0,
		strict: []
	}

	private waiting: Waiting | null

	#reject: ((error: QueueException) => void) | ((reason?: any) => void) | undefined

	readonly options: QueueConfiguration

	constructor(options?: QueueOptions) {
		this.options = {
			...Queue.defaultOptions,
			...options || {}
		}
		this.options.throttle = !!this.options.limit && !!this.options.interval
		this.makeQueue()
	}

	/**
	 * Set the default options for the queue
	 * @param {QueueOptions} options
	 */
	static config(options: QueueOptions): void

	/**
	 * Set a default option for the queue
	 * @param {QueueOption} option
	 * @param {QueueOptionsValue} value
	 */
	static config(option: QueueOption, value: QueueOptionsValue): void
	static config(optionOrOptions: QueueOption | QueueOptions, value?: QueueOptionsValue): void {
		const options: any = typeof optionOrOptions === 'string' ? {[optionOrOptions]: value} : optionOrOptions
		for (const option in options) {
			if (option in Queue.defaultOptions) {
				Queue.defaultOptions[option] = options[option]
			} else {
				throw new QueueException(`Invalid configuration option: ${option}. Valid options are: ${Object.keys(Queue.defaultOptions).join(', ')}`)
			}
		}
	}

	get length(): number {
		return this.tasks
	}

	get active(): number {
		return this.processes
	}

	get pending() {
		return this.queue.size()
	}

	private makeQueue() {
		if (this.queue && this.queue.size() > 0) {
			throw new QueueException('Cannot change queue strategy after queue has been started. Either create a new queue or clear the current one.')
		}

		if (this.options.strategy === 'dynamic') {
			this.queue = new DynamicCyclicQueue()
		} else if (this.options.strategy === 'chunked') {
			this.queue = new ChunkedQueue()
		} else {
			throw new QueueException(`Invalid strategy: ${this.options.strategy}. Valid strategies are: dynamic, chunked`)
		}
	}

	private windowedDelay() {
		const now = Date.now()

		if (now - this.ticks.current > this.options.interval) {
			this.ticks.active = 1
			this.ticks.current = now
			return 0
		}

		if (this.ticks.active < this.options.limit) {
			this.ticks.active++
		} else {
			this.ticks.current += this.options.interval
			this.ticks.active = 1
		}

		return this.ticks.current - now
	}

	private strictDelay() {
		const now = Date.now()

		if (this.ticks.strict.length < this.options.limit) {
			this.ticks.strict.push(now)
			return 0
		}

		const earliestTime = (this.ticks.strict?.shift() || 0) + this.options.interval

		if (now >= earliestTime) {
			this.ticks.strict.push(now)
			return 0
		}

		this.ticks.strict.push(earliestTime)
		return earliestTime - now
	}

	/**
	 * Wait for the next task to complete.
	 */
	wait(): Promise<any> {
		return new Promise((resolve, reject) => this.waiting = {resolve, reject})
	}

	/**
	 * Push a task or set of tasks to the queue.
	 * @param {...QueueTask[]} tasks
	 */
	push(...tasks: QueueTask[]): this {
		for (let key in tasks) {
			const taskDefinition: QueueTaskDefinition = {task: tasks[key]}
			this.tasks++
			this.queue.enqueue(taskDefinition)
		}

		if (this.options.autoStart) {
			this.run()
		}

		return this
	}

	/**
	 * Add a task to the queue.
	 * @param {QueueTask} task
	 */
	add(task: QueueTask): this

	/**
	 * Add a promise to the queue.
	 * @param {QueueTaskPromise} task
	 */
	add(task: QueueTaskPromise): this

	/**
	 * Add a Function to the queue, along with its arguments.
	 * @param {QueueTaskFunction} task
	 * @param {any[]} args
	 */
	add(task: QueueTaskFunction, args: any[]): this

	/**
	 * Add a Function to the queue, with its "this" context and arguments.
	 * @param {QueueTaskFunction} task
	 * @param {any} thisArg
	 * @param {any[]} args
	 */
	add(task: QueueTaskFunction, thisArg: any, args: any[]): this
	add(task: QueueTask, thisArgOrArgs?: any[] | any, args?: any[]): this {
		if (!task) {
			throw new QueueException('Task must be a function or object')
		}

		const taskDefinition: QueueTaskDefinition = {task}

		if (Array.isArray(thisArgOrArgs)) {
			taskDefinition.args = thisArgOrArgs as any[]
		} else {
			taskDefinition.args = args
			taskDefinition.thisArg = thisArgOrArgs
		}

		this.tasks++
		this.queue.enqueue(taskDefinition)

		if (this.options.autoStart) {
			this.run()
		}

		return this
	}

	/**
	 * Clear the queue.
	 */
	clear(): void {
		this.queue.clear()
	}

	/**
	 * Abort the queue.
	 * @param {string} [reason]
	 */
	abort(reason?: string): void {
		this.aborted = true
		this.ticks.strict.splice(0)
		this.queue.clear()

		if (this.#reject) {
			this.#reject(new AbortQueueError(reason))
		}
	}

	/**
	 * Enable (or disable) the queue's abortOnError option.
	 * @param {boolean} [abortOnError]
	 */
	abortOnError(abortOnError: boolean): this {
		this.options.abortOnError = abortOnError
		return this
	}

	/**
	 * Set the queue's concurrency.
	 * @param {number} concurrency - The maximum number of tasks to run at the same time.
	 */
	concurrency(concurrency: number): this {
		this.options.concurrency = concurrency
		return this
	}

	/**
	 * Set the queue's throttling
	 * @param {number} limit - The maximum number of tasks to run per interval
	 * @param {number} interval - The interval in milliseconds
	 * @param {boolean} [strict] - Use strict throttling (more accurate, but could be more resource intensive)
	 *
	 * @example
	 * // 1 task per second
	 * myQueue.throttle(1, 1000)
	 */
	throttle(limit: number, interval: number, strict?: boolean): this {
		this.options.limit = limit
		this.options.interval = interval
		this.options.throttle = !!this.options.limit && !!this.options.interval
		if (strict !== undefined) {
			this.options.strict = strict
		}
		return this
	}

	/**
	 * Set the queueing strategy. Dynamic uses slightly more resources but tends to be faster, chunked uses slightly less resources but tends to be slower. Dynamic is the default.
	 * @see https://github.com/kleinron/lite-fifo lite-fifo for benchmarks
	 * @param {'dynamic' | 'chunked'} strategy
	 */
	strategy(strategy: 'chunked' | 'dynamic'): this {
		this.options.strategy = strategy
		return this
	}

	/**
	 * Run your queue.
	 */
	run(): QueuePromise<any> {
		if (!this.process) {
			this.process = new QueuePromise(async (resolve, reject) => {
				this.#reject = reject
				this.processes = 0
				const promises: Promise<any>[] = []
				while (this.queue.size() > 0) {
					const task = this.queue.dequeue()
					if (this.aborted || !task) {
						break
					}
					if (this.options.concurrency >= 0 && this.processes >= this.options.concurrency) {
						// queue is full, wait for the next promise to finish
						await this.wait()
					}

					this.processes++
					promises.push(this.executeTask(task))

					while (this.queue.size() === 0 && this.processes > 0) {
						// while the queue is empty and there are processes running, wait for the next promise to finish
						await this.wait()
					}
				}

				// Double check that there are no more promises to wait for
				await Promise.all(promises)

				resolve(this.#results)
			}, this)
		}
		return this.process
	}

	/**
	 * Callback called for each task that successfully completes.
	 * @param {ThenCallback} callback
	 */
	thenEach(callback: ThenCallback): this {
		this.handlers.thenEach = callback
		return this
	}

	/**
	 * Callback called for each task that throws an error.
	 * @param {CatchCallback} callback
	 */
	catchEach(callback: CatchCallback): this {
		this.handlers.catchEach = callback
		return this
	}

	/**
	 * Callback called for each task that when it is finished.
	 * @param {FinallyCallback} callback
	 */
	finallyEach(callback: FinallyCallback): this {
		this.handlers.finallyEach = callback
		return this
	}

	private async executeTask(taskDefinition: QueueTaskDefinition): Promise<void> {
		let result: any

		if (!taskDefinition) {
			throw new QueueException('Task definition is undefined')
		}

		const abortTask = (e?: any) => {
			if (this.waiting) {
				this.waiting.reject(new QueueException('Queue has been aborted'))
			}

			throw new AbortQueueError(e)
		}

		if (this.options.throttle) {
			await sleep(this.options.strict ? this.strictDelay() : this.windowedDelay())
		}

		if (this.aborted) {
			abortTask()
		}

		try {
			if (typeof taskDefinition.task === 'function') {
				result = await Promise.resolve(taskDefinition.task.apply(taskDefinition.thisArg, taskDefinition.args))
			} else {
				result = await Promise.resolve(taskDefinition.task)
			}
			this.processes--

			if (this.handlers.thenEach) {
				await Promise.resolve(this.handlers.thenEach(result))
			}

			if (this.handlers.finallyEach) {
				await this.handlers.finallyEach()
			}
		} catch (e) {
			if (this.handlers.catchEach) {
				await Promise.resolve(this.handlers.catchEach(new QueueException(e)))
			}

			if (this.handlers.finallyEach) {
				await this.handlers.finallyEach()
			}

			if (this.options.abortOnError) {
				abortTask(e)
			}
		}

		if (this.waiting) {
			this.waiting.resolve(result)
		}

		this.#results.push(result)
	}
}

export function queue(options?: QueueOptions): Queue {
	return new Queue(options)
}

