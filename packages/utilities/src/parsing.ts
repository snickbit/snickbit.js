import {parseOptions} from './functions'
import {isJSONString} from './variables'
import {isDefined, isType} from './validations'

/**
 * Parse a string into it's primitive type if possible. If not, return the original variable.
 *
 * @example '123' => 123 | '123.456' => 123.456 | 'true' => true | 'false' => false | 'null' => null | 'undefined' => undefined
 * @category Parsing
 */
export function parse(value: any): any {
	if (typeof value !== 'string') {
		return value
	}

	switch (value) {
		case 'undefined':
			return undefined
		case 'null':
			return null
		case 'NaN':
			return NaN
		case 'Infinity':
			return Infinity
		case 'true':
			return true
		case 'false':
			return false
	}

	if (isJSONString(value)) {
		return JSONParse(value)
	}

	const num = parseFloat(value)
	if (!Number.isNaN(num) && isFinite(num)) {
		if (value.toLowerCase().indexOf('0x') === 0) {
			return parseInt(value, 16)
		}
		return num
	}

	return value
}

/**
 * Parse a string into JSON
 * @category Parsing
 */
export function JSONParse(json: string, strict?: boolean): object | any[] | undefined {
	if (!isDefined(json)) return json as undefined

	try {
		json = JSON.parse(json)
	} catch (e) {
		if (strict) {
			throw e
		} else {
			return undefined
		}
	}
	return json as unknown as object | any[]
}

type JSONStringifyOptions = boolean | { force?: boolean; pretty?: boolean | number }

/**
 * Parse a variable into a JSON string
 * @category Parsing
 */
export function JSONStringify(data: any, options: JSONStringifyOptions = false): string {
	if (!isDefined(data)) return data
	if(typeof options === 'boolean') options = {force: options}

	const parsedOptions = parseOptions(options, {force: false, pretty: undefined})

	parsedOptions.pretty = parsedOptions.pretty === true ? 2 : parsedOptions.pretty

	if (isType(data, 'object') || isType(data, 'array')) {
		try {
			data = JSON.stringify(data, null, parsedOptions.pretty)
		} catch (e) {
			return undefined
		}
	}

	return !isJSONString(data) && parsedOptions.force ? [data] : data
}

/**
 * Pretty print a JSON string
 * @category Parsing
 */
export const JSONPrettify = (data: any, spacer = 2): string => JSONStringify(data, {pretty: spacer})
