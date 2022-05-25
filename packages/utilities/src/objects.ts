import {JSONParse, JSONStringify} from './parsing'
import {isFunction, isObject} from './validations'
import {mergeDeep, typeOf} from './variables'

/** @category Objects */
export type IObject = {
	[key: string]: any
}

/** @category Objects */
export type ObjectPredicate = (key: string | symbol, value?: any, obj?: object) => unknown

/**
 * Finds an object property's name that matches the given predicate
 * @category Objects
 */
export function objectFindKey(obj: IObject, predicate: string | ObjectPredicate): string | undefined {
	const results = objectFindEntry(obj, predicate)
	return results ? results[0] : undefined
}

/**
 * Finds an object property's value that matches the given predicate
 * @param {object} obj
 * @param {string|function} [predicate] - A string or function that returns a boolean
 * @returns {any}
 * @category Objects
 */
export function objectFind(obj: IObject, predicate: string | ObjectPredicate): any | undefined {
	const results = objectFindEntry(obj, predicate)
	return results ? results[1] : undefined
}

/**
 * Finds an object property's entry [key, value] that matches the given predicate
 * @category Objects
 */
export function objectFindEntry(obj: IObject, predicate: string | ObjectPredicate): any | undefined {
	if (!isFunction(predicate)) {
		const value = predicate
		predicate = (v: any) => v === value
	}

	return Object.entries(obj).find(([k, v]) => (predicate as ObjectPredicate)(k, v, obj))
}

/**
 * Checks if an object has a method with the given name
 * @category Objects
 */
export function objectHasMethod(obj: IObject, method: string, strict?: boolean): boolean {
	return !!objectGetMethod(obj, method, strict)
}

/**
 * Checks if an object has a method with the given name, and returns the method
 * @category Objects
 */
export function objectGetMethod(obj: IObject, method: string, strict?: boolean): any {
	if (!obj || !isObject(obj)) return undefined
	if (typeOf(method) !== 'string') throw new Error(`Method name must be a string, got ${typeOf(method)}`)
	return objectMethods(obj)
	.map(method_name => ({original: method_name, lower: method_name.toLowerCase()}))
	.filter(method_def => (strict ? method_def.original === method : method_def.lower === method.toLowerCase()))
	.map(method_def => obj[method_def.original]).pop()
}

/**
 * Filter an object by a given predicate
 * @category Objects
 */
export function objectFilter(obj: IObject, predicate: ObjectPredicate = () => true): IObject {
	if (!isObject(obj)) throw new TypeError('objectFilter: obj must be an object')
	if (!isFunction(predicate)) throw new TypeError('objectFilter: predicate must be a function')

	const toReturn: IObject = {}

	for (const key of Object.keys(obj)) {
		const value = obj[key]
		if ((predicate as ObjectPredicate)(key, value, obj)) {
			toReturn[key] = value
		}
	}

	return toReturn
}

/**
 * Returns a new object with only the allowed properties.
 * @category Objects
 */
export function objectOnly(obj: IObject, allowed: string[]): IObject {
	const toReturn: IObject = {}

	for (const key of allowed) {
		if (obj[key]) {
			toReturn[key] = obj[key]
		}
	}

	return toReturn
}

/**
 * Returns a new object without the excluded properties.
 * @param obj - the object to filter
 * @param {array} excluded - the allowed properties
 * @returns {object}
 * @category Objects
 */
export function objectExcept(obj: IObject, excluded: string[]): IObject {
	const toReturn: IObject = {}

	for (const key of Object.keys(obj)) {
		if (!excluded.includes(key)) {
			toReturn[key] = obj[key]
		}
	}

	return toReturn
}

/**
 * Flattens an object into a single level using dot notation for nested properties.
 * @category Objects
 */
export function objectFlatten(obj: IObject, prefix = ''): IObject {
	const toReturn: IObject = {}
	for (const [key, value] of Object.entries(obj)) {
		if (isObject(value)) {
			Object.assign(toReturn, objectFlatten(value, `${prefix}${key}.`))
		} else {
			toReturn[`${prefix}${key}`] = value
		}
	}
	return toReturn
}

/**
 * Deep clones an object
 * @category Objects
 */
export const objectClone = (...objects: IObject[]): IObject => {
	const toReturn: IObject = {}
	for (const obj of objects) {
		for (const [key, value] of Object.entries(obj)) {
			toReturn[key] = typeOf(value) === 'object' ? objectClone(value) : value
		}
	}
	return toReturn
}

/**
 * Copy object as JSON (uses JSON.parse/JSON.stringify but won't throw any errors)
 * @category Objects
 */
export function objectCopy(obj: IObject, force?: boolean): IObject | any[] | undefined {
	return JSONParse(JSONStringify(obj, force))
}

/**
 * Merge two or more objects together
 * @category Objects
 */
export function objectMerge(...objects: IObject[]): IObject {
	let toReturn: IObject = {}
	for (const obj of objects) {
		if (obj && typeOf(obj) === 'object') {
			toReturn = {...toReturn, ...obj}
		}
	}
	return toReturn
}

/**
 * Merge two or more objects together, recursing child values
 * @category Objects
 */
export function objectMergeDeep(...objects: IObject[]): IObject {
	const toReturn: IObject = {}
	const keys: string[] = []
	for (const obj of objects) {
		keys.push(...Object.keys(obj))
	}

	for (const obj of objects) {
		for (const key of keys) {
			toReturn[key] = mergeDeep(toReturn[key], obj[key])
		}
	}
	return toReturn
}

/**
 * Returns an array of the given object's available method names
 * @category Objects
 */
export function objectMethods(obj: IObject): string[] {
	const properties = new Set()
	let currentObj = obj
	do {
		Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
	} while ((currentObj = Object.getPrototypeOf(currentObj)))

	const keys: string[] = Array.from(properties.keys()).map(item => item.toString())

	return keys.filter((item: keyof IObject) => isFunction(obj[item]))
}

/**
 * Remove a property from an object and return the value
 * @category Objects
 */
export function objectPull(obj: IObject, key: string): any {
	if (!obj || !key || !isObject(obj) || !(key in obj)) return undefined
	const value = obj[key]
	delete obj[key]
	return value
}
