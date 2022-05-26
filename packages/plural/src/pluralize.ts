import {irregularPlurals, IrregularRule, irregularSingles} from './rules/irregular-rules'
import pluralRules from './rules/plural-rules'
import singularRules from './rules/singular-rules'
import uncountableRules from './rules/uncountable-rules'

export type PluralRuleMatch = RegExp
export type PluralRuleReplacement = string
export type PluralRule = [PluralRuleMatch, PluralRuleReplacement]

/**
 * Pass in a word token to produce a function that can replicate the case on
 * another word.
 */
function restoreCase(word: string, token: string): string {
	// Tokens are an exact match.
	if (word.toLowerCase() === token.toLowerCase()) {
		return word
	}

	// Lower cased words. E.g. "hello".
	if (word === word.toLowerCase()) {
		return token.toLowerCase()
	}

	// Upper cased words. E.g. "WHISKY".
	if (word === word.toUpperCase()) {
		return token.toUpperCase()
	}

	const diff = findFirstDiff(word.toLowerCase(), token.toLowerCase())

	// starting at the index of diff, match casing of each character
	let result = word.slice(0, diff)
	let lowers = word.match(/[a-z]/) ? 1 : 0
	for (let i = diff; i < token.length; i++) {
		if (word[i] !== undefined) {
			// check the casing of the character in the original string
			if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
				result += token[i].toUpperCase()
			} else {
				lowers++
				result += token[i].toLowerCase()
			}
		} else if (token[i] !== undefined) {
			if (lowers === -1) {
				result += token[i].toUpperCase()
			} else {
				result += token[i].toLowerCase()
			}
		}
	}

	return result
}

function findFirstDiff(first, second): number {
	let i = 0
	if (first === second) {
		return -1
	}
	while (first[i] === second[i]) {
		i++
	}
	return i
}

/**
 * Sanitize a word by passing in the word and sanitization rules.
 */
function sanitizeWord(token: string, word: string, rules: PluralRule[]): string {
	// Empty string or doesn't need fixing.
	if (!token.length || uncountableRules.includes(token)) {
		return word
	}

	let len = rules.length

	// Iterate over the sanitization rules and use the first one to match.
	while (len--) {
		let rule = rules[len]
		const [matcher, replacer] = rule

		if (matcher.test(word)) {
			return restoreCase(word, word.replace(matcher, replacer))
		}
	}

	return word
}

function getRules(count: number) {
	let keep: IrregularRule
	let replace: IrregularRule
	let rules: PluralRule[]

	if (Math.abs(count) !== 1) {
		replace = irregularSingles
		keep = irregularPlurals
		rules = pluralRules
	} else {
		replace = irregularPlurals
		keep = irregularSingles
		rules = singularRules
	}

	return {
		keep,
		replace,
		rules
	}
}

export function replaceWord(word: string, count: number) {
	const {
		keep,
		replace,
		rules
	} = getRules(count)

	// Get the correct token and case restoration functions.
	let token = word.toLowerCase()

	// Check against the keep object map.
	if (Object.keys(keep).includes(token)) {
		return restoreCase(word, token)
	}

	// Check against the replacement map for a direct word replacement.
	if (Object.keys(replace).includes(token)) {
		return restoreCase(word, replace[token])
	}

	// Run all the rules against the word.
	return sanitizeWord(token, word, rules)
}

export function checkWord(word: string, count: number) {
	const {
		keep,
		replace,
		rules
	} = getRules(count)

	let token = word.toLowerCase()

	if (Object.keys(keep).includes(token)) {
		return true
	}

	if (Object.keys(replace).includes(token)) {
		return false
	}

	return sanitizeWord(token, token, rules) === token
}

