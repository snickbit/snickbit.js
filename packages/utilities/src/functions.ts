import {arrayUnique} from './arrays'
import {isArray, isEmpty, isObject, isType} from './variables'
import {IObject} from './objects'
import {VariableType} from './data/variable-types'

/**
 * Parse options for a function
 * @category Functions
 *
 * @param {IObject | any} given - The given options
 * @param {IObject} defaults - The default options
 * @param {string} [non_object_key] - Optional key to use if the given options are not an object, will be added to the defaults object
 *
 * @example
 * const options = parseOptions(true, {param: 'default'}, 'my_param')
 * // {param: 'default', my_param: true}
 */
export function parseOptions(given: IObject | any, defaults: IObject, non_object_key?: string): object | any {
	if (!isObject(defaults)) {
		throw new TypeError('defaults must be an object')
	}

	// if given is undefined, just return the defaults
	if (given === undefined) {
		return {...defaults}
	}

	// if given is not an object, assign it to the non_object_key
	if (!isObject(given)) {
		given = {[non_object_key]: given}
	}

	// merge the given options with the defaults
	for (const key of arrayUnique(Object.keys(defaults).concat(Object.keys(given)))) {
		if (given[key] === undefined) {
			given[key] = defaults[key]
		}
	}

	return given
}

export type FunctionType = (...args: any[]) => any

export type TryWaitFunction = (...args: any[]) => Promise<any> | any

/**
 * Catch an async function or promise and force it to resolve, returning undefined if it fails
 * @category Functions
 */
export function tryWait(fn: TryWaitFunction, ...args: any[][]): Promise<any> {
	/* eslint no-async-promise-executor: off */
	return new Promise(async resolve => {
		try {
			const result = await fn(...args)
			resolve(result)
		} catch (e) {
			resolve(undefined)
		}
	})
}

/**
 * Clone a function
 * @category Functions
 */
export function functionClone(fn: FunctionType): FunctionType {
	return function (...args: any[]): any {
		return fn.apply(this, ...args)
	}
}

/**
 * Send each item in an array to a function, await the results
 * @category Functions
 */
export function promiseAll(arr: any[], fn: (value: any, index: number, array: any[]) => any): Promise<Awaited<any>[]> {
	return isArray(arr) && !isEmpty(arr) && Promise.all(arr.map(fn))
}

export interface OverloadSchema {
	[key: string]: VariableType
}

/**
 * Parses an array of arguments for an overloaded function into an object
 * @category Functions
 */
export function overloadOptions(options: any[], schemas: OverloadSchema[]): object {
	let matches

	// check for schemas that have the same length and same first type
	matches = schemas.filter(schema => Object.keys(schema).length === options.length && isType(options[0], Object.values(schema)[0]))

	if (matches.length !== 1) {
		// check for type matches only
		matches = matches.length ? matches : schemas.slice()
		for (const [index, option] of options.entries()) {
			matches = matches.filter((schema: OverloadSchema) => isType(option, Object.values(schema)[index]))
			if (matches.length === 1) {
				break
			}
		}
	}

	// get first match with same first type
	if (matches.length !== 1) {
		matches = [schemas.find(schema => isType(options[0], Object.values(schema)[0]))]
	}

	const schema = matches[0] || schemas[0] || {}
	const results: IObject = {}
	for (const name in schema) {
		results[name] = options.shift()
	}

	return results
}
