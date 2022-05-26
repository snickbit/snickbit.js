import {typeOf} from './variables'
import variableTypes, {BasicVariableType, PrimitiveVariableType, VariableType} from './data/variable-types'

/** @category Validation */
export type VariableTypeDefinition = {name: string}

/**
 * Check if a value is undefined
 * @category Validation
 */
export const isDefined = (value: any): boolean => typeof value !== 'undefined' && value !== undefined

/**
 * Check if a value is empty
 * @category Validation
 */
export const isEmpty = (value: any): boolean => isNullDefined(value) || value === '' || Array.isArray(value) && !value.length || isObject(value) && !Object.keys(value).length

/**
 * Check if a value is null or undefined
 * @category Validation
 */
export const isNullDefined = (value: any): boolean => value === null || value === undefined

/**
 * Check if a variable is a promise
 * @category Validation
 */
export const isPromise = (value: any): boolean => value && typeof value.then === 'function' && typeof value.catch === 'function'

/**
 * Check if a variable is an async function
 * @category Validation
 */
export const isAsyncFunction = (value: any): boolean => typeof value === 'function' && value.constructor.name === 'AsyncFunction'

/**
 * Check if a variable can be used with await (a Promise or AsyncFunction)
 * @category Validation
 */
export const isAwaitable = (value: any): boolean => isAsyncFunction(value) || isPromise(value)

/**
 * Check if a variable is a primitive type. i.e. string, boolean, number, or bigint
 * @category Validation
 */
export const isPrimitive = (value: any, includeNullUndefined?: boolean): boolean => !includeNullUndefined ? variableTypes.basic.includes(<BasicVariableType>typeOf(value)) : variableTypes.primitive.includes(<PrimitiveVariableType>typeOf(value))

/**
 * Check if a variable is an object and is not null or undefined
 * @category Validation
 */
export const isObject = (value: any, strict = true) => value && typeof value === 'object' && (!strict || !(isArray(value) || isFunction(value) || isDate(value)))

/**
 * Checks if variable is an array and is not empty
 * @category Validation
 */
export const isArray = (value: any) => Array.isArray(value) && !!value.length

/**
 * Check if a variable is a string
 * @category Validation
 */
export const isString = (value: any) => typeof value === 'string'

/**
 * Check if a variable is a number
 * @category Validation
 */
export const isNumber = (value: any) => !isNaN(parseInt(value))

/**
 * Check if a variable is a function
 * @category Validation
 */
export const isFunction = (value: any, strict?: boolean) => strict ? value instanceof Function : typeof value === 'function' || typeof value?.call === 'function' && typeof value?.apply === 'function'

/**
 * Check if a variable is a class
 * @category Validation
 */
export const isClass = (value: any) => isFunction(value) && /^\s*class\s+/.test(value.toString())

/**
 * Check if a variable is a Set
 * @category Validation
 */
export const isSet = (value: any) => value instanceof Set

/**
 * Check if a variable is the given type
 * @category Validation
 */
export const isType = (value: any, type: VariableType | VariableTypeDefinition | string): boolean => typeOf(value) === (isObject(type) ? (type as VariableTypeDefinition).name.toLowerCase() : type)

/**
 * Check if a variable is a Base64 string
 * @category Validation
 */
export const isBase64 = (content: string) => /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(content)

/**
 * Check if a variable is a valid date
 * @category Validation
 */
export function isDate(value: any) {
	try {
		return value instanceof Date || new Date(value).toString() !== 'Invalid Date'
	} catch (e) {
		return false
	}
}
