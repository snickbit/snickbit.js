import {nanoid} from 'nanoid'
import {clone} from './variables'
import {IObject} from './objects'

/**
 * Create uuid
 * @category Generators
 */
export function uuid(prefix: string = ''): string {
	return `${prefix}${nanoid()}`
}

/**
 * Generate a random string
 * @category Generators
 */
export function randomString(length: number = 10): string {
	let text = ''
	while (text.length < length) {
		text += makeRandomSegment()
	}
	return text.substring(0, length)
}

/**
 * Generate a random string between 8 and 14 characters long
 * @category Generators
 */
export function makeRandomSegment(): string {
	return Math.random().toString(36).substring(2, 16)
}

/** @category Generators */
export type CombinationOptions = {
	[key: string]: any[]
}

/**
 * Generate an array of all possible property values. Provide an object with each property as a key and an array of possible values as the value.
 * @category Generators
 */
export function combinations(options: CombinationOptions): any[] {
	return combinationsLoop(options)
}

function combinationsLoop(options: CombinationOptions, optionIndex: number = 0, current: IObject = {}): any[] {
	const allKeys = Object.keys(options)
	const optionKey = allKeys[optionIndex]
	const values = options[optionKey]
	const results = []

	for (let i = 0; i < values.length; i++) {
		current[optionKey] = values[i]

		if (optionIndex + 1 < allKeys.length) {
			results.push(...combinationsLoop(options, optionIndex + 1, current))
		} else {
			const res = clone(current)
			results.push(res)
		}
	}

	return results
}
