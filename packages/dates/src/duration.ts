import {maxDecimals, plural} from '@snickbit/utilities'
import {Dates} from './index'
import duration from 'dayjs/plugin/duration'

export interface DatesDuration extends Dates {
	toWords: (() => string) & ((long: boolean) => string) & ((options: ToWordsOptions) => string)

	toObject(): DurationObject

	humanize(withSuffix?: boolean): string

	format(formatStr?: string): string

	toJSON(): string
}

export interface DurationObject {
	years: number
	months: number
	weeks: number
	days: number
	hours: number
	minutes: number
	seconds: number
	milliseconds: number
}

interface DateAbbreviations {
	millisecond: string
	second: string
	minute: string
	hour: string
	day: string
	week: string
	month: string
	year: string
}

const abbreviations: DateAbbreviations = {
	millisecond: 'ms',
	second: 's',
	minute: 'm',
	hour: 'h',
	day: 'd',
	week: 'w',
	month: 'mo',
	year: 'y'
}

type DateWords = Record<string, DateWordsRecord>

interface DateWordsRecord {
	label: string
	value: number
}

export interface ToWordsOptions {
	long?: boolean
	reduce?: boolean
	milliseconds?: boolean
}

function toWords(long: boolean): string
function toWords(options: ToWordsOptions): string
function toWords(longOrOptions?: ToWordsOptions | boolean): string {
	let options: ToWordsOptions = {long: false, reduce: true, milliseconds: true}
	if (longOrOptions === true || longOrOptions === false) {
		options = {
			long: !!longOrOptions,
			reduce: !longOrOptions,
			milliseconds: !longOrOptions
		}
	} else {
		Object.assign(options, longOrOptions)
	}
	const values: DateWords = {}
	for (const key in abbreviations) {
		const value = this.get(key)
		const label = options.long ? ` ${plural(key, value)}` : abbreviations[key]
		values[key] = {
			value,
			label
		} as DateWordsRecord
	}
	if (values.millisecond.value) {
		if (options.milliseconds === false) {
			delete values.millisecond
		} else if (values.second.value && options.reduce) {
			const ms = Math.round(values.millisecond.value / 10) / 100
			values.second.value += ms
			values.millisecond.value = 0
		}
	}

	const output = Object.values(values).reverse()
		.filter(v => v.value > 0)
		.map(v => `${maxDecimals(v.value, 2)}${v.label}`)
	const last = output.pop() || ''
	return output.length ? `${output.join(', ')} and ${last}` : last
}

function toObject(): object {
	const obj = {}
	for (const key in abbreviations) {
		obj[key] = this.get(key)
	}
	return obj
}

export default (option, Dayjs, dayjs) => {
	dayjs.extend(duration)

	/**
	 * Converts the duration to words
	 */
	dayjs.toWords = toWords

	/**
	 * Converts the duration to an object
	 */
	dayjs.toObject = toObject

	/** @internal */
	dayjs._duration = dayjs.duration

	/**
	 * Create a new duration
	 * @see https://day.js.org/docs/en/durations/durations
	 */
	dayjs.duration = function(input: number | object | string, unit?: string): DatesDuration {
		const _duration = this._duration(input, unit)
		_duration.toWords = toWords
		_duration.toObject = toObject
		return _duration
	}
}
