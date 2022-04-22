// noinspection JSUnusedGlobalSymbols
import {objectFlatten} from './objects'

/**
 * escape regexp
 * @param str
 * @returns {any}
 * @category Templating
 */
export const escapeRegExp = (str: string) => String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/**
 * escape regexp replacement string
 * @param str
 * @returns {any}
 * @category Templating
 */
export const escapeReplacement = (str: string) => String(str).replace(/\$/g, '$$$$')

/** @category Templating */
export type interpolateReplacements = { [key: string]: string }

/**
 * interpolate string with data from object using {{key}} syntax or ${key} syntax
 * @category Templating
 */
export function interpolate(str: string, replacements: interpolateReplacements): string {
	for (let [from, to] of Object.entries(objectFlatten(replacements))) {
		to = escapeReplacement(to)
		if (!from.startsWith('{{')) {
			str = str.replace(new RegExp(escapeRegExp('{{' + from + '}}'), 'g'), to)
		}
		if (!from.startsWith('${')) {
			str = str.replace(new RegExp(escapeRegExp('${' + from + '}'), 'g'), to)
		}
	}
	return str
}
