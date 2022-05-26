import {default as justCamelCase} from 'just-camel-case'
import plur from 'plur'
import reserved from './data/reserved'

/**
 * @internal
 * @category Parsing
 */
export const capital_plus_lower = /[A-ZÀ-Ý\u00C0-\u00D6\u00D9-\u00DD][a-zà-ÿ]/g

/**
 * @internal
 * @category Parsing
 */
export const capitals = /[A-ZÀ-Ý\u00C0-\u00D6\u00D9-\u00DD]+/g

/**
 * Convert a string to snake_case
 * @category Parsing
 */
export const snakeCase = (text: string) => slugify(text, '_')

/**
 * Convert a string to kebab-case
 *
 * @param text - The string to convert
 * @returns {string}
 * @category Parsing
 */
export const kebabCase = (text: string) => slugify(text)

/**
 * Convert a string to camelCase
 *
 * @see https://www.npmjs.com/package/just-camel-case
 * @category Parsing
 */
export const camelCase = (text: string): string => justCamelCase(text)

/**
 * Create a pluralized string
 * @see https://github.com/sindresorhus/plur
 * @category Parsing
 */
export const plural = (text: string, count = 2) => plur(text, count)

/**
 * Create a singularized string
 * @see https://github.com/sindresorhus/plur
 * @category Parsing
 */
export const singular = (str: string) => plur(str, 1)

/**
 * Convert a string to initials
 * @category Parsing
 */
export const initials = (str: string): string => str
	.split(/[^a-zA-Z]/)
	.filter(Boolean)
	.map(word => word[0].toUpperCase())
	.join('')

/**
 * Limit a string to a certain length
 * @category Parsing
 */
export const limitString = (str: string, limit = 100, suffix = '...'): string => str.length > limit ? str.substring(0, limit) + suffix : str

/**
 * Limit a string to a certain amount of words
 * @category Parsing
 */
export function limitWords(str: string, limit = 100, suffix = '...'): string {
	const words = str.split(/\s+/)
	return words.length > limit ? words.slice(0, limit).join(' ') + suffix : str
}

/**
 * Pad a string on both sides with the given character and length
 * @category Parsing
 */
export function padString(text: string, padding = 2, character = ' '): string {
	const pad = !Number.isNaN(padding) && padding > 0 ? character.repeat(padding) : ''
	return pad + text + pad
}

/**
 * Create a safe javascript variable name from a string
 * @category Parsing
 */
export function safeVarName(str: string, replacer = ''): string {
	// check that replacer itself is valid
	replacer = replacer.split(/[\W\s_-]/).join('')

	str = str.split(/[\W\s_-]/) // Split on non-word characters
		.join(replacer) // Join words with replacer
		.replace(new RegExp(replacer + replacer, 'g'), replacer) // Replace double replacer with single replacer

	// If the first character is a number or if full str is a reserved word, add a replacer in front
	if (/^\d/.test(str) || reserved.includes(str)) {
		// if replacer is empty, use an underscore
		str = (replacer || '_') + str
	}

	return str
}

/**
 * Convert a string to space-case
 * @category Parsing
 */
export function spaceCase(str: string): string {
	// force the variable to be a string
	str = String(str)
	// treat cap + lower as the start of new word
	str = str.replace(capital_plus_lower, match => ` ${match[0].toLowerCase() || match[0]}${match[1]}`) // the match is one cap followed by one non-cap
	// treat all remaining capitals as words
	str = str.replace(capitals, match => ` ${match.toLowerCase()}`) // match is a series of caps
	return str.trim() // trim leading and trailing spaces
}

/**
 * Create slug from string
 * @category Parsing
 */
export function slugify(text: string, replace = '-'): string {
	return spaceCase(text)
		.toLowerCase()
		.replace(/\s+/g, replace) // Replace spaces with -
		.replace(/[^\w-]+/g, replace) // Remove all non-word chars
		.replace(new RegExp(`${replace}${replace}+`, 'g'), replace) // Replace - with a single -
		.replace(new RegExp(`^${replace}+`), '') // Trim - from start of text
		.replace(new RegExp(`${replace}+$`), '') // Trim - from end of text
}
