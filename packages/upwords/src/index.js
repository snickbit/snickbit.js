import words from './words'

const default_options = {
	fast: false
}

function convertCase(word, i) {
	const manualWord = words.find(w => String(w).toLowerCase() === String(word).toLowerCase())
	if (manualWord) {
		return i === 0 && !manualWord.match(/[^a-z]/) ? upperFirst(manualWord) : manualWord
	}
	return upperFirst(word)
}

function upperFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

const stripPseudoSpaces = string => string.replace(/[_\-]+$/, ' ').replace(/^[_\-]+/, ' ').replace(/(\s)+/g, '$1')

const upwords = function (str, options = {fast: false}) {
	options = Object.assign({}, default_options, options || {})

	if (str && typeof str === 'string') {
		const regex = /[a-zA-Z0-9&]+/g
		let m
		let i = 0
		while ((m = regex.exec(str)) !== null) {
			if (m.index === regex.lastIndex) {
				regex.lastIndex++
			}

			const match = m.slice().shift()
			const index = m.index
			const converted = options.fast ? upperFirst(match) : convertCase(match, i)
			const prefix = str.substring(0, index)
			const suffix = str.substring(index + match.length)
			str = stripPseudoSpaces(prefix) + stripPseudoSpaces(converted) + stripPseudoSpaces(suffix)
			i++
		}

		return str
	} else {
		return str
	}
}

export default upwords
