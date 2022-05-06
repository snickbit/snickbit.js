import {QueueException} from './errors'

export interface QueueConfiguration {
	/** The maximum number of concurrent tasks to run. */
	concurrency: number

	/** The maximum number of calls within an interval */
	limit: number

	/** The timespan for limit in milliseconds. */
	interval: number

	/**
	 * Use a strict, more resource intensive, throttling algorithm. \
	 * The default algorithm uses a windowed approach that will work correctly in most cases, limiting the total number of calls at the specified limit per interval window. \
	 * The strict algorithm throttles each call individually, ensuring the limit is not exceeded for any interval.
	 * @see https://github.com/sindresorhus/p-throttle
	 */
	strict: boolean

	/** Stop the queue if a task fails. */
	abortOnError: boolean

	/**
	 * Queueing strategy to be used based on the lite-fifo package. The default strategy is "dynamic" or "DynamicCyclicQueue". \
	 * You can switch to "chunked" or "ChunkedQueue" for a slightly reduced memory footprint, but with a slightly slower performance.
	 * @see https://github.com/kleinron/lite-fifo
	 */
	strategy: 'dynamic' | 'chunked'

	/** `true` to the queue immediately, or `false` to wait for `run()` to be called. Default is `true` */
	autoStart: boolean

	/** @internal */
	throttle: boolean
}

export type QueueConfigurationValue = QueueConfiguration[keyof QueueConfiguration]
export type QueueOptions = Partial<QueueConfiguration>
export type QueueOption = keyof QueueConfiguration
export type QueueOptionsValue = QueueOptions[keyof QueueOptions]

export type QueueTaskPromise = Promise<any>
export type QueueTaskFunction = () => QueueTaskPromise | any
export type QueueTask = QueueTaskPromise | QueueTaskFunction

export type ThenCallback = (result: any) => any | Promise<any>
export type FinallyCallback = () => void | Promise<void>
export type CatchCallback = (error: QueueException) => any | Promise<any>
