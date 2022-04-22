import variableTypes, {BasicVariableType, PrimitiveVariableType, VariableType} from './data/variable-types'
import {parseOptions} from './functions'
import {IObject, objectFilter, objectMerge, objectMergeDeep} from './objects'
import {arrayMerge, arrayMergeDeep} from "./arrays";

/** @category Variables */
export type VariableTypeDefinition = { name: string }

/**
 * Check if a value is undefined
 * @category Variables
 */
export const isDefined = (value: any): boolean => typeof value !== 'undefined' && value !== undefined

/**
 * Check if a value is empty
 * @param value
 * @returns {boolean|any}
 * @category Variables
 */
export const isEmpty = (value: any): boolean => isNullDefined(value) || value === '' || (Array.isArray(value) && !value.length) || (isObject(value) && !Object.keys(value).length)

/**
 * Check if a value is null or undefined
 * @category Variables
 */
export const isNullDefined = (value: any): boolean => value === null || value === undefined

/**
 * Check if a variable is a promise
 * @category Variables
 */
export const isPromise = (value: any): boolean => value && typeof value.then === 'function' && typeof value.catch === 'function'

/**
 * Check if a variable is an async function
 * @category Variables
 */
export const isAsyncFunction = (value: any): boolean => typeof value === 'function' && value.constructor.name === 'AsyncFunction'

/**
 * Check if a variable can be used with await (a Promise or AsyncFunction)
 * @category Variables
 */
export const isAwaitable = (value: any): boolean => isAsyncFunction(value) || isPromise(value)

/**
 * Check if a variable is a primitive type. i.e. string, boolean, number, or bigint
 * @category Variables
 */
export const isPrimitive = (value: any, includeNullUndefined?: boolean): boolean => !includeNullUndefined ? variableTypes.basic.includes(<BasicVariableType>typeOf(value)) : variableTypes.primitive.includes(<PrimitiveVariableType>typeOf(value))

/**
 * Check if a variable is an object and is not null or undefined
 * @param value
 * @param {boolean} [strict=true]
 * @returns {boolean}
 * @category Variables
 */
export const isObject = (value: any, strict = true) => value && typeof value === 'object' && (!strict || !(isArray(value) || isFunction(value) || isDate(value)))

/**
 * Checks if variable is an array and is not empty
 * @param value - value to check
 * @returns {boolean}
 * @category Variables
 */
export const isArray = (value: any) => Array.isArray(value) && !!value.length

/**
 * Check if a variable is a string
 * @param value
 * @return {boolean}
 * @category Variables
 */
export const isString = (value: any) => typeof value === 'string'

/**
 * Check if a variable is a number
 * @param value
 * @return {boolean}
 * @category Variables
 */
export const isNumber = (value: any) => !isNaN(parseInt(value))

/**
 * Check if a variable is a function
 * @param value - value to check
 * @param [strict] - if true, will only return true if the value is a function and is not a constructor
 * @returns {boolean}
 * @category Variables
 */
export const isFunction = (value: any, strict?: boolean) => strict ? value instanceof Function : typeof value === 'function' || (typeof value?.call === 'function' && typeof value?.apply === 'function')

/**
 * Check if a variable is a class
 * @param {any} value
 * @return {boolean}
 * @category Variables
 */
export const isClass = (value: any) => isFunction(value) && /^\s*class\s+/.test(value.toString())

/**
 * Check if a variable is a Set
 * @param {any} value
 * @return {boolean}
 * @category Variables
 */
export const isSet = (value: any) => value instanceof Set

/**
 * Check if a variable is the given type
 * @category Variables
 */
export const isType = (value: any, type: VariableType | string | VariableTypeDefinition): boolean => typeOf(value) === (isObject(type) ? (type as VariableTypeDefinition).name.toLowerCase() : type)

/**
 * Check if a variable is a Base64 string
 * @param content
 * @return {boolean}
 * @category Variables
 */
export const isBase64 = (content: string) => /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(content)

/**
 * Check if a variable is a valid date
 * @category Variables
 */
export function isDate(value: any) {
	try {
		return value instanceof Date || (new Date(value)).toString() !== 'Invalid Date'
	} catch (e) {
		return false
	}
}

/**
 * Count the number of keys in an object
 * Count the number of entries in an array
 * Count the number of values in a Set
 * Get the length of a string
 * @category Variables
 */
export function count(value: any, strict: boolean = true): number {
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
export function typeOf(value: any): VariableType | string {
	const varType = typeof value
	if (variableTypes.primitive.includes(varType as PrimitiveVariableType)) return varType
	if (Array.isArray(value)) return 'array'
	if (value instanceof Date) return 'date'
	if (value instanceof Promise) return 'promise'
	if (varType === 'function' && value.constructor.name === 'AsyncFunction') return 'asyncfunction'
	return Object.prototype.toString?.call(value).slice(8, -1).toLowerCase()
}

interface isCallableOptions {
	strict: false,
	async: false
}

/**
 * Check if a variable is callable
 * @category Variables
 */
export function isCallable(value: any, options?: Partial<isCallableOptions>): boolean {
	if (!value) return false

	options = parseOptions(options, {
		strict: false,
		async: false
	}, 'async')

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
	for (let value of values) {
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
	for (let value of values) {
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
