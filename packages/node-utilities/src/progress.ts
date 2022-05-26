import {formatBytes, parseOptions} from '@snickbit/utilities'
import {template} from 'ansi-styles-template'
import out, {Out} from '@snickbit/out'
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
	config: Partial<CLIProgressOptions>
}

export type ProgressOptions = Partial<ProgressConfig>

export type ProgressPayload = Record<string, any>

interface CLIProgressOptions {
	format: any
	etaBuffer: number
	fps: number
	barCompleteChar: string
	barIncompleteChar: string
	hideCursor: boolean
	linewrap: string
	formatValue?: (v, options, type) => any
}

const defaultCliProgressConfig = {
	format: undefined,
	etaBuffer: 10,
	fps: 10,
	barCompleteChar: '\u2588',
	barIncompleteChar: '\u2591',
	hideCursor: true
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
	config: {...defaultCliProgressConfig}
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
		...defaultCliProgressConfig,
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
	eta(): number | string {
		return this.bar ? this.bar.eta.getTime() : 0
	}

	/**
	 * Start the progress bar
	 */
	start(options?: ProgressOptions): this {
		const parsed: ProgressOptions = parseOptions(options, this.options)
		if (parsed.message) {
			this.out.debug(parsed.message)
		}
		if (this.bar) {
			this.bar.start(parsed.total, parsed.current, options)
		}
		return this
	}

	/**
	 * Tick the progress
	 */
	tick(payload: ProgressPayload): this
	tick(value?: number, payload?: ProgressPayload): this
	tick(message: string, payload?: ProgressPayload): this
	tick(valueMessageOrPayload?: ProgressPayload | number | string, payload?: ProgressPayload): this {
		let value = 1

		if (typeof valueMessageOrPayload === 'object') {
			payload = valueMessageOrPayload
			if ('value' in payload) {
				value = payload.value
				delete payload.value
			}
		} else if (typeof valueMessageOrPayload === 'string') {
			payload = {message: valueMessageOrPayload, ...payload || {}}
		} else if (typeof valueMessageOrPayload === 'number') {
			value = valueMessageOrPayload
		}

		if (this.bar) {
			this.bar.increment(value, payload)
		}
		if (payload) {
			this.out.verbose(`Increment progress by ${value} and payload to:`, payload)
		} else {
			this.out.verbose(`Increment progress by ${value}`)
		}
		return this
	}

	/**
	 * Set the progress bar current value
	 */
	set(value: number, payload?: ProgressPayload) {
		if (this.bar) {
			if (payload) {
				this.bar.update(value, payload)
				this.out.verbose(`Set progress current to ${value} and payload to:`, payload)
			} else {
				this.bar.update(value)
				this.out.verbose(`Set progress current to ${value}`)
			}
		}
	}

	/**
	 * Update the progress bar
	 */
	update(payload?: ProgressPayload): this {
		if (this.bar) {
			this.bar.update(null, payload)
		}
		return this
	}

	/**
	 * Set the progress bar message
	 * @param {string} message
	 */
	message(message: string) {
		return this.update({message})
	}

	/**
	 * Set the progress bar total
	 */
	setTotal(total: number): this {
		if (this.bar) {
			this.bar.setTotal(total)
		}
		this.out.verbose(`Set progress total to ${total}`)
		return this
	}

	/**
	 * Fail and stop the progress bar
	 */
	fail(...messages: any[]): this {
		if (this.bar) {
			this.bar.stop()
		}
		if (messages.length) {
			this.out.error(...messages)
		}
		return this
	}

	/**
	 * Stop the progress bar
	 */
	stop(...messages: any[]): this {
		if (this.bar) {
			this.bar.stop()
		}
		if (messages.length) {
			this.out.info(...messages)
		}
		return this
	}

	/**
	 * Succeed and stop the progress bar
	 */
	finish(...messages: any[]): this {
		if (this.bar) {
			this.bar.stop()
		}
		if (messages.length) {
			this.out.success(...messages)
		}
		return this
	}
}
