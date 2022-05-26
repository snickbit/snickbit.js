import {Out} from '@snickbit/out'
import {isString} from '@snickbit/utilities'
import {createSpinner} from 'nanospinner'
import throttle from 'lodash.throttle'

/** @category Spinner */
export interface SpinnerConfig {
	text: string
	color: string
	stream: any
	interval: number
	frames: string[]
	mark: string
}

/** @category Spinner */
export type SpinnerOptions = Partial<SpinnerConfig>

const updateText = throttle((instance, text) => {
	instance.update({text})
}, 150)

const updateSpinner = throttle((instance, options) => {
	instance.update(options)
}, 150)

/**
 * Spinner. Uses nanospinner to show spinners in the terminal.
 * @see https://github.com/usmanyunusov/nanospinner
 * @category Spinner
 */
export function spinner(options?: SpinnerOptions | string) {
	return new Spinner(options)
}

/**
 * Spinner. Uses nanospinner to show spinners in the terminal.
 * @see https://github.com/usmanyunusov/nanospinner
 * @category Spinner
 */
export class Spinner {
	spinner

	preload_message = ''

	out: Out

	constructor(options?: SpinnerOptions | string) {
		const parsed = this.#parseOptions(options)
		this.preload_message = parsed.text
		this.spinner = createSpinner(parsed.text, parsed)
		this.out = new Out('spinner')
	}

	/**
	 * Parse the options
	 */
	#parseOptions(options?: SpinnerOptions | string, fallback_text?: string): SpinnerConfig {
		if (!options) {
			options = {}
		}

		if (isString(options)) {
			options = {text: options as string}
		}
		options = options as SpinnerOptions

		if (options?.text) {
			options.text = this.#getMessage(options.text, fallback_text)
		}

		return options as SpinnerConfig
	}

	/**
	 * Parse the message, using the fallback if necessary
	 */
	#getMessage(message: string, fallback?: string): string {
		return message || this.preload_message || fallback || ''
	}

	/**
	 * Set the spinner text
	 */
	text(message: string): this {
		updateText(this.spinner, this.#getMessage(message))
		return this
	}

	/**
	 * Update the spinner
	 */
	update(options: SpinnerOptions | string): this {
		options = this.#parseOptions(options)
		updateSpinner(this.spinner, options)
		return this
	}

	/**
	 * Start the spinner
	 */
	start(options?: SpinnerOptions | string): this {
		const parsed = this.#parseOptions(options)
		this.preload_message = parsed.text
		if (this.spinner) {
			this.spinner.start(parsed)
		} else if (parsed.text) {
			this.out.info(parsed.text)
		}
		return this
	}

	/**
	 * Fail and stop the spinner
	 */
	fail(options?: SpinnerOptions | string): this {
		return this.error(options)
	}

	/**
	 * Error and stop the spinner
	 */
	error(options?: SpinnerOptions | string): this {
		options = this.#parseOptions(options, 'Something went wrong.')
		if (this.spinner) {
			this.spinner.error(options.text)
		} else if (options.text) {
			this.out.error(options.text)
		}
		return this
	}

	/**
	 * Stop the spinner
	 */
	stop(options?: SpinnerOptions | string): this {
		options = this.#parseOptions(options)
		if (this.spinner) {
			this.spinner.stop(options.text)
		} else if (options.text) {
			this.out.warn(options.text)
		}
		return this
	}

	/**
	 * Succeed and stop the spinner
	 */
	finish(options?: SpinnerOptions | string): this {
		options = this.#parseOptions(options, 'Finished!')
		if (this.spinner) {
			this.spinner.success(options)
		} else if (options.text) {
			this.out.success(options.text)
		}
		return this
	}
}
