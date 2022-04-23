import {Out} from '@snickbit/out'
import throttle from 'lodash.throttle'
import {createSpinner} from 'nanospinner'
import {isString} from '@snickbit/utilities'

/** @category Spinner */
export interface SpinnerOptions {
	text: string;
	color: string;
	stream: any;
	interval: number;
	frames: string[];
	mark: string;
}

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
export function spinner(options?: Partial<SpinnerOptions> | string) {
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

	constructor(options?: Partial<SpinnerOptions> | string) {
		options = this.#parseOptions(options)
		this.preload_message = options.text
		this.spinner = createSpinner(options.text, options)
		this.out = new Out('spinner')
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
	update(options: Partial<SpinnerOptions> | string): this {
		options = this.#parseOptions(options)
		updateSpinner(this.spinner, options)
		return this
	}

	/**
	 * Start the spinner
	 */
	start(options: Partial<SpinnerOptions> | string): this {
		options = this.#parseOptions(options)
		this.preload_message = options.text
		if (this.spinner) {
			this.spinner.start(options)
		} else if (options.text) {
			this.out.info(options.text)
		}
		return this
	}

	/**
	 * Fail and stop the spinner
	 */
	fail(options: Partial<SpinnerOptions> | string): this {
		return this.error(options)
	}

	/**
	 * Error and stop the spinner
	 */
	error(options: Partial<SpinnerOptions> | string): this {
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
	stop(options: Partial<SpinnerOptions> | string): this {
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
	finish(options: Partial<SpinnerOptions> | string): this {
		options = this.#parseOptions(options, 'Finished!')
		if (this.spinner) {
			this.spinner.success(options)
		} else if (options.text) {
			this.out.success(options.text)
		}
		return this
	}

	/**
	 * Parse the message, using the fallback if necessary
	 */
	#getMessage(message: string, fallback?: string): string {
		return message || this.preload_message || fallback || ''
	}

	/**
	 * Parse the options
	 */
	#parseOptions(options?: Partial<SpinnerOptions> | string, fallback_text?: string) {
		if (!options) {
			options = {}
		}

		if (isString(options)) {
			options = {text: options as string}
		}
		options = options as Partial<SpinnerOptions>

		if (options?.text) {
			options.text = this.#getMessage(options.text, fallback_text)
		}

		return options
	}
}