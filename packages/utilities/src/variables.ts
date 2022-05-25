import variableTypes, {PrimitiveVariableType, VariableType} from './data/variable-types'
import {parseOptions} from './functions'
import {IObject, objectFilter, objectMerge, objectMergeDeep} from './objects'
import {arrayMerge, arrayMergeDeep} from './arrays'
import {isArray, isAsyncFunction, isFunction, isNullDefined, isNumber, isObject, isSet} from './validations'

/**
 * Count the number of keys in an object \
 * Count the number of entries in an array \
 * Count the number of values in a Set \
 * Get the length of a string
 * @category Variables
 */
export function count(value: any, strict = true): number {
	if (isNumber(value)) {
		return value
	} else if (isSet(value)) {
		return value.size
	} else if (isObject(value)) {
		if (strict) {
			value = objectFilter(value, v => !isFunction(v))
		}
		return Object.keys(value).length
	} else {
		return value.length
	}
}

/**
 * Check if a variable is a JSON string
 * @category Variables
 */
export function isJSONString(value: any, returnValue = false) {
	try {
		const result = JSON.parse(value)
		return returnValue ? result : true
	} catch (e) {
		return false
	}
}

/**
 * Return a variable's type
 * @category Variables
 */
export function typeOf(value: any): VariableType {
	const varType = typeof value
	if (variableTypes.primitive.includes(varType as PrimitiveVariableType)) return varType
	if (Array.isArray(value)) return 'array'
	if (value instanceof Date) return 'date'
	if (value instanceof Promise) return 'promise'
	if (varType === 'function' && value.constructor.name === 'AsyncFunction') return 'asyncfunction'
	return Object.prototype.toString?.call(value).slice(8, -1).toLowerCase()
}

interface isCallableOptions {
	strict: false
	async: false
}

/**
 * Check if a variable is callable
 * @category Variables
 */
export function isCallable(value: any, options?: Partial<isCallableOptions> | boolean): boolean {
	if (!value) return false

	options = parseOptions(
		options,
		{
			strict: false,
			async: false
		},
		'async'
	) as Partial<isCallableOptions>

	if (options.async) {
		return isAsyncFunction(value) || isFunction(value, options.strict)
	} else {
		return isFunction(value, options.strict)
	}
}

/**
 * Merge two or more variables together
 * @category Variables
 */
export function merge(...values: IObject[] | any[]): IObject | any[] {
	let toReturn
	let returnType
	for (const value of values) {
		if (!isNullDefined(value)) {
			if (!returnType || typeOf(value) !== returnType) {
				toReturn = value
				returnType = typeOf(value)
			} else if (returnType === 'array') {
				toReturn = toReturn || []
				toReturn = arrayMerge(toReturn, value)
			} else if (returnType === 'object') {
				toReturn = toReturn || {}
				toReturn = objectMerge(toReturn, value)
			} else {
				toReturn = value
			}
		}
	}
	return toReturn
}

/**
 * Merge two or more variables together, recursing child values
 * @category Variables
 */
export function mergeDeep(...values: IObject[] | any[]): IObject | any[] {
	let toReturn
	let returnType
	for (const value of values) {
		if (!isNullDefined(value)) {
			if (!returnType || typeOf(value) !== returnType) {
				toReturn = value
				returnType = typeOf(value)
			} else if (returnType === 'array') {
				toReturn = toReturn || []
				toReturn = arrayMergeDeep(toReturn, value)
			} else if (returnType === 'object') {
				toReturn = toReturn || {}
				toReturn = objectMergeDeep(toReturn, value)
			} else {
				toReturn = value
			}
		}
	}
	return toReturn
}

/**
 * Clone a variable
 * @category Variables
 */
export function clone(value: any): any {
	if (isArray(value)) {
		return value.slice()
	} else if (isObject(value)) {
		return Object.assign({}, value)
	} else {
		return value
	}
}
