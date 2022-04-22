import {mergeDeep, typeOf} from "./variables";

/**
 * Checks if the given array only contains a single value, optionally pass a value or predicate to check against
 * @category Arrays
 */
export function isSingle(arr: any[], value?: any): boolean;
export function isSingle(arr: any[], predicate?: (item: any) => boolean): boolean {
	if (arr.length !== 1) {
		return false;
	}

	return !predicate || (
		typeof predicate === 'function'
			? predicate(arr[0])
			: arr.includes(predicate)
	)
}

/**
 * Returns unique values from an array. Optionally pass a key when the array is an object array.
 * @category Arrays
 */
export const arrayUnique = (arr: any[], key?: string): any[] => arr.filter((value, index, self) => (key ? self.findIndex(item => item[key] === value[key]) : self.indexOf(value)) === index)

/**
 * Returns unique values from an array, ignoring case. Optionally pass a key when the array is an object array.
 * @category Arrays
 */
export const arrayUniqueInsensitive = (arr: any[], key?: string): any[] => arr.filter((value, index, self) => (key ? self.findIndex(item => item[key].toLowerCase() === value[key].toLowerCase()) : self.findIndex(item => item.toLowerCase() === value.toLowerCase())) === index)


/**
 * Convert an array to an object using the given key as the property
 * @category Arrays
 *
 * @example
 * arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id', 'name')
 * // {1: 'John', 2: 'Jane'}
 * @example
 * arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'name')
 * // {John: {id: 1, name: 'John'}, Jane: {id: 2, name: 'Jane'}}
 */
export const arrayToObject = (arr: any[], key: string | number, value: string | number): object => arr.reduce((obj, item) => Object.assign(obj, {[item[key]]: (value ? item[value] : item)}), {})

/**
 * Wrap a variable in an array if it is not already an array
 * @category Arrays
 */
export const arrayWrap = (values: any[] | any): any[] => Array.isArray(values) ? values : [values]


/**
 * Return the duplicate values from an array
 * @category Arrays
 */
export function arrayDuplicates(arr: any[], predicate?: (item: any) => boolean): any[] {
	const unique: any[] = [], duplicates: any[] = [];
	for (const item of arr) {
		if (unique.includes(predicate(item))) {
			duplicates.push(item)
		} else {
			unique.push(predicate(item))
		}
	}
	return duplicates
}

/**
 * Finds and returns an element from an array, removing it in the process
 * @category Arrays
 */
export function arrayRemove(arr: any[], value: any): any[] {
	if (!arr || !value) return arr
	let index = arr.indexOf(value)
	if (index >= 0) {
		arr.splice(index, 1)
	}
	return arr
}


/**
 * Shuffles/randomizes an array
 * @category Arrays
 */
export function arrayShuffle(arr: any[]): any[] {
	let currentIndex = arr.length, randomIndex

	// While there remain elements to shuffle.
	while (currentIndex !== 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--;
		// And swap it with the current element.
		[arr[currentIndex], arr[randomIndex]] = [
			arr[randomIndex], arr[currentIndex]]
	}

	return arr
}


/**
 * Merge two or more arrays together
 * @category Arrays
 */
export function arrayMerge(...arrs: any[][]): any[] {
	let toReturn: any[] = []
	for (let arr of arrs) {
		if (arr && typeOf(arr) === 'array') {
			toReturn = [...toReturn, ...arr]
		}
	}
	return toReturn
}

/**
 * Merge two or more arrays together, recursing child values
 * @category Arrays
 */
export function arrayMergeDeep(...arrs: any[][]): any[] {
	const toReturn: any[] = []
	for (const arr of arrs) {
		for (const [key, value] of arr.entries()) {
			toReturn[key] = mergeDeep(toReturn[key], value)
		}
	}
	return toReturn
}
