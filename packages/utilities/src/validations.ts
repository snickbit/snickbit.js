import {typeOf} from './variables'
import variableTypes, {BasicVariableType, PrimitiveVariableType, VariableType} from './data/variable-types'

/** @category Validation */
export type VariableTypeDefinition = {name: string}

/** @category Validation */
export type EmptyObject = Record<any, never>

/** @category Validation */
export type EmptyArray = Array<never>

/** @category Validation */
export type ArrayWithValues = [any, ...any]

/** @category Validation */
export interface AnyFunction<T = any> {
	(...args: any[]): T
}

/** @category Validation */
export interface AsyncFunction<T = any> {
	(...args: any[]): Promise<T>
}

/** @category Validation */
export type AnyClass = {
	new (...args: any[]): AnyClass
}

/**
 * Check if a value is undefined
 * @category Validation
 */
export function isDefined(value: any): value is undefined {
	return typeof value !== 'undefined' && value !== undefined
}

/**
 * Check if a value is empty
 * @category Validation
 */
export function isEmpty(value: any): value is EmptyObject | null | undefined
export function isEmpty(value: string): value is ''
export function isEmpty(value: any[]): value is EmptyArray
export function isEmpty(value: any): value is EmptyArray | EmptyObject | '' | null | undefined {
	return isNullDefined(value) || value === '' || Array.isArray(value) && !value.length || isObject(value) && !Object.keys(value).length
}

/**
 * Check if a value is null or undefined
 * @category Validation
 */
export const isNullDefined = (value: any): value is null | undefined => value === null || value === undefined

/**
 * Check if a variable is a promise
 * @category Validation
 */
export const isPromise = <T = any>(value: any): value is Promise<T> => value && typeof value.then === 'function' && typeof value.catch === 'function'

/**
 * Check if a variable is an async function
 * @category Validation
 */
export const isAsyncFunction = <T = any>(value: any): value is AsyncFunction<T> => typeof value === 'function' && value.constructor.name === 'AsyncFunction'

/**
 * Check if a variable can be used with await (a Promise or AsyncFunction)
 * @category Validation
 */
export const isAwaitable = <T = any>(value: any): value is AsyncFunction<T> | Promise<T> => isAsyncFunction(value) || isPromise(value)

/**
 * Check if a variable is a primitive type. i.e. string, boolean, number, or bigint
 * @category Validation
 */
export function isPrimitive(value: any, includeNullUndefined: true): value is BasicVariableType
export function isPrimitive(value: any, includeNullUndefined?: false): value is PrimitiveVariableType
export function isPrimitive(value: any, includeNullUndefined?: boolean): value is BasicVariableType | PrimitiveVariableType {
	return !includeNullUndefined ? variableTypes.basic.includes(<BasicVariableType>typeOf(value)) : variableTypes.primitive.includes(<PrimitiveVariableType>typeOf(value))
}

/**
 * Check if a variable is an object and is not null or undefined
 * @category Validation
 */
export function isObject(value: any, strict?: true): value is Record<any, any>
export function isObject(value: any, strict: false): value is AnyFunction | ArrayWithValues | Date | Record<any, any>
export function isObject(value: any, strict = true): value is Record<any, any> {
	return value && typeof value === 'object' && (!strict || !(isArray(value) || isFunction(value) || isDate(value)))
}

/**
 * Checks if variable is an array and is not empty
 * @category Validation
 */
export const isArray = (value: any): value is ArrayWithValues => Array.isArray(value) && !!value.length

/**
 * Check if a variable is a string
 * @category Validation
 */
export const isString = (value: any): value is string => typeof value === 'string'

/**
 * Check if a variable is a number
 * @category Validation
 */
export const isNumber = (value: any): value is number => !isNaN(parseInt(value))

/**
 * Check if a variable is a boolean
 * @category Validation
 */
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'

/**
 * Check if a variable is a function
 * @category Validation
 */
export function isFunction(value: any, strict?: false): value is AnyFunction
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: any, strict: true): value is Function
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: any, strict?: boolean): value is AnyFunction | Function {
	return strict ? value instanceof Function : typeof value === 'function' || typeof value?.call === 'function' && typeof value?.apply === 'function'
}

/**
 * Check if a variable is a class
 * @category Validation
 */
export const isClass = (value: any): value is AnyClass => isFunction(value) && /^\s*class\s+/.test(value.toString())

/**
 * Check if a variable is a Set
 * @category Validation
 */
export const isSet = <T = any>(value: any): value is Set<T> => value instanceof Set

/**
 * Check if a variable is the given type
 * @category Validation
 */
export function isType(value: any, type: VariableType | VariableTypeDefinition | string): value is VariableType {
	return typeOf(value) === (isObject(type) ? (type as VariableTypeDefinition).name.toLowerCase() : type)
}

/**
 * Check if a variable is a Base64 string
 * @category Validation
 */
export const isBase64 = (content: string) => /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(content)

/**
 * Check if a variable is a valid date
 * @category Validation
 */
export function isDate(value: any): value is Date {
	try {
		return value instanceof Date || new Date(value).toString() !== 'Invalid Date'
	} catch (e) {
		return false
	}
}
