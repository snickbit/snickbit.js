/**
 * Pluralize a word.
 */
import {checkWord, replaceWord} from './pluralize'

export function plural(word: string, count?: number)
export function plural(word: string, pluralized: string, count?: number)
export function plural(word: string, countOrPluralized?: number | string, optionalCount?: number) {
	let count = 2
	let pluralized = ''
	if (typeof countOrPluralized === 'number') {
		count = countOrPluralized
	} else if (typeof countOrPluralized === 'string') {
		pluralized = countOrPluralized
		if (optionalCount !== undefined) {
			count = optionalCount
		}
	}

	// if count is 1, return original string
	if (Math.abs(count) === 1) {
		return singular(word, 1)
	}

	// if count is greater than 1 and the user provided a pluralized string, return that
	if (pluralized) {
		return pluralized
	}

	return replaceWord(word, count)
}

/**
 * Singularize a word.
 */
export function singular(word: string, count?: number)
export function singular(word: string, singularized: string, count?: number)
export function singular(word: string, countOrSingularized?: number | string, optionalCount?: number) {
	let count = 1
	let singularized = ''
	if (typeof countOrSingularized === 'number') {
		count = countOrSingularized
	} else if (typeof countOrSingularized === 'string') {
		singularized = countOrSingularized
		if (optionalCount !== undefined) {
			count = optionalCount
		}
	}

	// if count is 1, return original string
	if (Math.abs(count) !== 1) {
		return plural(word, count)
	}

	// if count is not 1 and the user provided a singularized string, return that
	if (singularized) {
		return singularized
	}

	return replaceWord(word, count)
}

/**
 * Check if a word is plural.
 */
export const isPlural = (word: string, count = 2) => checkWord(word, count)

/**
 * Check if a word is singular.
 */
export const isSingular = (word: string, count = 1) => checkWord(word, count)
