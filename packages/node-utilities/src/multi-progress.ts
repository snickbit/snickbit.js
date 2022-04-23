import out from '@snickbit/out'
import {parseOptions, uuid} from '@snickbit/utilities'
import cliProgress, {MultiBar} from 'cli-progress'
import {makeProgressConfig, Progress, ProgressOptions} from './progress'

const _instances = {}

/** @category Progress */
interface MultiProgressBars {
	[key: string]: MultiProgressChild
}

/**
 * Multi-Progress bar. Uses cli-progress to create multiple progress bars.
 * @see https://github.com/npkgz/cli-progress
 * @category Progress
 */
export function multiprogress(options?: Partial<ProgressOptions>): MultiProgress {
	return new MultiProgress(options)
}

/**
 * Multi-Progress bar. Uses cli-progress to create multiple progress bars.
 * @see https://github.com/npkgz/cli-progress
 * @category Progress
 */
export class MultiProgress extends Progress {
	id: string
	bars: MultiProgressBars
	multibar: MultiBar

	constructor(options?: Partial<ProgressOptions>) {
		super(options)
		this.id = uuid()
		_instances[this.id] = this
		this.bars = {}
		this.out = this.options.out || out.prefix(this.options.name || 'multi-progress', 1)
	}

	/**
	 * Create a child progress bar
	 */
	create(options?: Partial<ProgressOptions>): MultiProgressChild {
		options = parseOptions(options, this.options)
		const id = uuid()
		this.bars[id] = new MultiProgressChild({
			...options,
			parent: this.id,
			id
		})

		this.bars[id].start()
		return this.bars[id]
	}

	/**
	 * Stop all child progress bars
	 */
	stop(...messages: any[]): this {
		this.multibar.stop()
		if (messages.length) {
			this.out.info(...messages)
		}
		return this
	}

	/**
	 * Remove a child progress bar
	 */
	remove(instance: MultiProgressChild): this {
		this.multibar.remove(instance.bar)
		delete this.bars[instance.id]
		return this
	}

	#create() {
		if (!this.out.isVerbose()) {
			this.multibar = new cliProgress.MultiBar(makeProgressConfig(this.options), cliProgress.Presets.shades_classic)
		}
	}
}

/** @category Progress */
class MultiProgressChild extends Progress {
	id: string

	constructor(options?: Partial<ProgressOptions>) {
		super(options)
	}

	/**
	 * Remove this child progress bar
	 */
	remove() {
		if (_instances[this.options.parent]) _instances[this.options.parent].remove(this)
	}

	#create() {
		if (!this.out.isVerbose()) {
			this.bar = _instances[this.options.parent].create()
		}
	}
}