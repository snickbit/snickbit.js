import {arrayWrap, isNumber} from '@snickbit/utilities'
import {isBundledElectronApp} from '@snickbit/node-utilities'
import {Options} from 'yargs-parser'

/** @internal */
export const options_equal_predicate = options => x => arrayWrap(options).some(option => String(x).startsWith(`--${option}=`))

/** @internal */
export const option_not_predicate = options => x => !arrayWrap(options).some(option => String(x).startsWith(`--${option}`))

/**
 * Get the index of the node bin file
 * @internal
 */
export const getProcessArgvBinIndex = (): number => isBundledElectronApp() ? 0 : 1

/**
 * Remove the node bin file from the process argv
 * @internal
 */
export const hideBin = (argv: string[]): string[] => argv.slice(getProcessArgvBinIndex() + 1)

export interface CliOptions extends Options {
	[key: string]: any
}

export type CliOption = string | keyof CliOptions

export const default_options: CliOptions = {
	alias: undefined,
	array: undefined,
	boolean: undefined,
	config: undefined,
	configObjects: undefined,
	configuration: {
		'boolean-negation': true,
		'camel-case-expansion': true,
		'combine-arrays': false,
		'dot-notation': true,
		'duplicate-arguments-array': true,
		'flatten-duplicate-arrays': true,
		'greedy-arrays': false,
		'halt-at-non-option': false,
		'nargs-eats-options': false,
		'negation-prefix': 'no-',
		'parse-numbers': true,
		'parse-positional-numbers': true,
		'populate--': true,
		'set-placeholder-key': false,
		'short-option-groups': true,
		'strip-aliased': true,
		'strip-dashed': true,
		'unknown-options-as-args': false
	},
	coerce: undefined,
	count: undefined,
	default: undefined,
	envPrefix: undefined,
	narg: undefined,
	normalize: undefined,
	string: undefined,
	number: undefined,
	__: undefined,
	key: undefined
}

export const object_options = [
	'alias',
	'default'
]

export const extra_options = [
	'describe',
	'description',
	'delimited'
]

/**
 * Reverts the args/options back into an argv array
 * @param args
 * @param opts
 * @return {any[]}
 * @deprecated
 */
export function unparse(args, opts) {
	const argv = []

	for (let [key, value] of Object.entries(argv)) {
		let parsed_key = key
		if (key === '--') {
			parsed_key = '--'
		} else if (key !== '_') {
			parsed_key = `--${key}`
		}

		if (opts.boolean.includes(key)) {
			value = value ? key : ''
		} else if (!opts.count || !opts.count.includes(key)) {
			if (!Array.isArray(value)) {
				value = arrayWrap(value)
			}
		} else if (isNumber(value) && value > 0) {
			value = `${parsed_key} `.repeat(parseInt(value)).split(' ')
		} else {
			continue
		}

		argv.push(...value)
	}

	return argv.filter(arg => arg !== '')
}

export function parseDelimited(value) {
	let results = []
	if (Array.isArray(value)) {
		for (let v of value) {
			results.push(...parseDelimited(v))
		}
	} else {
		const split: string[] = value && String(value).split(/[\s,]+/g) || []
		results.push(...split.map(v => formatValue(v)))
	}
	return results
}

/**
 * Split arguments by --
 * @param {array} args
 */
export function chunkArguments(args) {
	if (!args.find(x => x === '--')) {
		return [args]
	}

	let chunks = []
	let chunk = []
	for (let arg of args) {
		if (arg === '--') {
			chunks.push(chunk)
			chunk = []
		} else {
			chunk.push(arg)
		}
	}
	chunks.push(chunk)
	return chunks
}

export function formatValue(value: any, type?: string) {
	switch (type) {
		case 'boolean':
			return String(value) === 'true'
		case 'number':
			return Number(value)
		case 'string':
			return String(value)
		default:
			if (isNumber(value)) {
				return Number(value)
			} else if (value === 'true' || value === 'false') {
				return String(value) === 'true'
			} else if (Array.isArray(value)) {
				return value.map(v => formatValue(v))
			} else if (value === undefined || value === null) {
				return value
			} else {
				return String(value)
			}
	}
}
