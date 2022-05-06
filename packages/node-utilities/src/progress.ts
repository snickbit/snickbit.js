import out, {Out} from '@snickbit/out'
import {formatBytes, parseOptions} from '@snickbit/utilities'
import {template} from 'ansi-styles-template'
import cliProgress, {SingleBar} from 'cli-progress'

/** @category Progress */
export interface ProgressConfig {
	name?: string
	autoStart: boolean
	message: string
	valueFormat: string
	total: number
	current: number
	out?: Out
	config: CLIProgressOptions
}

export type ProgressOptions = Partial<ProgressConfig>

export interface ProgressPayload {
	[key: string]: any
}

interface CLIProgressOptions {
	format: any,
	etaBuffer: number,
	fps: number,
	barCompleteChar: string,
	barIncompleteChar: string,
	hideCursor: boolean,
	linewrap: string
	formatValue?: (v, options, type) => any
}

/**
 * @internal
 */
export const default_progress_options: ProgressConfig = {
	message: 'Working...',
	autoStart: true,
	total: 100,
	current: 0,
	valueFormat: 'number',
	config: {
		format: undefined,
		etaBuffer: 10,
		fps: 10,
		barCompleteChar: '\u2588',
		barIncompleteChar: '\u2591',
		hideCursor: true,
		linewrap: null
	}
}

/**
 * @internal
 */
export function makeProgressFormat(options) {
	let _format = '[{{white}}{bar}{{/white}}]{{reset}} {{magenta}}{percentage}%{{/magenta}} | {{yellow}}ETA: {eta}s{{/yellow}} | {{green}}{value}{{/green}}/{total} | {message}'
	if (options.config.format) {
		_format = options.config.format
	} else if (options.label) {
		_format = `${options.label} | ${_format}`
	}
	return template(_format, {
		leftBrace: '{{',
		rightBrace: '}}'
	})
}

/**
 * @internal
 */
export function makeProgressConfig(options) {
	return {
		...options.config,
		format: makeProgressFormat(options)
	}
}

/**
 * Progress bar. Uses cli-progress to create multiple progress bars.
 * @see https://github.com/npkgz/cli-progress
 * @category Progress
 */
export function progress(options?: ProgressOptions) {
	return new Progress(options)
}

/**
 * Progress bar. Uses cli-progress and @snickbit/out to output progress.
 * @see https://github.com/npkgz/cli-progress
 * @category Progress
 */
export class Progress {
	options: ProgressConfig
	out: Out
	bar: SingleBar

	constructor(options?: ProgressOptions) {
		this.options = parseOptions(options, {...default_progress_options})
		this.out = this.options.out || out.prefix(this.options.name || 'progress', 1)
		this.options.config.formatValue = this.#formatValue.bind(this)
		this.#create()
		if (this.options.autoStart) {
			this.start()
		}
	}

	#create(): this {
		if (!this.out.isVerbose()) {
			this.bar = new cliProgress.SingleBar(makeProgressConfig(this.options), cliProgress.Presets.shades_classic)
		}
		return this
	}

	#formatValue(v, options, type): any {
		switch (this.options.valueFormat) {
			case 'bytes':
			case 'byte':
				if (type === 'value' || type === 'total') {
					return formatBytes(v)
				}
		}
		return cliProgress.Format.ValueFormat(v, options, type)
	}

	/**
	 * Get the ETA
	 */
	eta(): string | number {
		return this.bar ? this.bar.eta.getTime() : 0
	}

	/**
	 * Start the progress bar
	 */
	start(options?: ProgressOptions): this {
		options = parseOptions(options, this.options)
		if (options.message) this.out.debug(options.message)
		if (this.bar) this.bar.start(options.total, options.current, options)
		return this
	}

	/**
	 * Tick the progress
	 */
	tick(payload: ProgressPayload): this;
	tick(value: number, payload?: ProgressPayload): this
	tick(message: string, payload?: ProgressPayload): this
	tick(valueMessageOrPayload: string | number | ProgressPayload, payload?: ProgressPayload): this {
		let value = 1

		if (typeof valueMessageOrPayload === 'object') {
			payload = valueMessageOrPayload
			if ('value' in payload) {
				value = payload.value
				delete payload.value
			}
		} else if (typeof valueMessageOrPayload === 'string') {
			payload = {message: valueMessageOrPayload, ...(payload || {})}
		} else if (typeof valueMessageOrPayload === 'number') {
			value = valueMessageOrPayload
		}

		if (this.bar) this.bar.increment(value, payload)
		if (payload) {
			this.out.verbose(`Increment progress by ${value} and payload to:`, payload)
		} else {
			this.out.verbose(`Increment progress by ${value}`)
		}
		return this
	}

	/**
	 * Update the progress bar
	 */
	update(current: number | object, payload?: object): this {
		if (this.bar) {
			if (payload) {
				this.bar.update(current, payload)
				this.out.verbose(`Set progress current to ${current} and payload to:`, payload)
			} else {
				this.bar.update(current)
				this.out.verbose(`Set progress current to ${current}`)
			}
		}
		return this
	}

	/**
	 * Set the progress bar total
	 */
	setTotal(total: number): this {
		if (this.bar) this.bar.setTotal(total)
		this.out.verbose(`Set progress total to ${total}`)
		return this
	}

	/**
	 * Fail and stop the progress bar
	 */
	fail(...messages: any[]): this {
		if (this.bar) this.bar.stop()
		if (messages.length) {
			this.out.error(...messages)
		}
		return this
	}

	/**
	 * Stop the progress bar
	 */
	stop(...messages: any[]): this {
		if (this.bar) this.bar.stop()
		if (messages.length) {
			this.out.info(...messages)
		}
		return this
	}

	/**
	 * Succeed and stop the progress bar
	 */
	finish(...messages: any[]): this {
		if (this.bar) this.bar.stop()
		if (messages.length) {
			this.out.success(...messages)
		}
		return this
	}
}
