// option, Dayjs, dayjs
import {DateInput, Dates} from './index'

export interface LimitedRelativeOptions {
	max?: number
	maxUnit?: string
	withoutSuffix?: boolean
	format?: string
}

export interface RelativeTodayOptions {
	fallbackFormat?: string
	timeformat?: string
	preposition?: string
}

const defaultRelativeTodayOptions: RelativeTodayOptions = {
	fallbackFormat: 'shortdatetime',
	timeformat: 'shorttime',
	preposition: 'at'
}

const defaultOptions: LimitedRelativeOptions = {
	max: 1,
	maxUnit: 'week',
	withoutSuffix: false,
	format: 'shortdate'
}

export default (options, Dayjs, dayjs) => {
	/** @internal */
	const makeNow = thisDay => 'isUTC' in thisDay && thisDay.isUTC() ? dayjs.utc() : dayjs()

	/** @internal */
	function showRelative(from, to, options) {
		return Math.abs(dayjs(from).diff(dayjs(to), options.maxUnit, true)) < options.max
	}

	Dayjs.prototype.toLimited = function(this: Dates, input: DateInput, options: LimitedRelativeOptions = defaultOptions): string {
		options = {...defaultOptions, ...options}
		return showRelative(input, this, options) ? this.to(input, options.withoutSuffix) : this.format(options.format)
	}

	Dayjs.prototype.fromLimited = function(this: Dates, input: DateInput, options: LimitedRelativeOptions = defaultOptions): string {
		options = {...defaultOptions, ...options}
		return showRelative(this, input, options) ? this.from(input, options.withoutSuffix) : this.format(options.format)
	}

	Dayjs.prototype.toNowLimited = function(this: Dates, options: LimitedRelativeOptions = defaultOptions): string {
		return this.toLimited(makeNow(this), options)
	}

	Dayjs.prototype.fromNowLimited = function(this: Dates, options: LimitedRelativeOptions = defaultOptions): string {
		return this.fromLimited(makeNow(this), options)
	}

	Dayjs.prototype.relativeToday = function(this: Dates, options: RelativeTodayOptions = defaultRelativeTodayOptions): string {
		options = {...defaultRelativeTodayOptions, ...options}
		if (this.isTomorrow()) {
			return ['Tomorrow', options.preposition, this.format(options.timeformat)].filter(Boolean).join(' ')
		} else if (this.isYesterday()) {
			return ['Yesterday', options.preposition, this.format(options.timeformat)].filter(Boolean).join(' ')
		}
		return this.format(options.fallbackFormat)
	}
}
