import {template} from 'ansi-styles-template'
import chalk from 'chalk'
import {out} from '../src'
import {styles} from '../src/config'
import {getIcon} from '../src/icons'
import {_inspect} from '../src/render'

const consoleSpy = jest.spyOn(console, 'log')

const to = 'test output'
const colorize = (str, style) => chalk.hex(styles[style].accent)(str)
const icon = (style) => colorize(getIcon(style), style)
const testOut = (style, message) => icon(style) + ' ' + message

beforeEach(() => {
	consoleSpy.mockClear()
	process.env.VERBOSITY = '0'
})

function expectOut(...expected) {
	if (expected.length === 0) {
		expect(consoleSpy).not.toHaveBeenCalled()
	} else {
		expect(consoleSpy).toHaveBeenCalledWith(...expected)
	}

	const inspected = _inspect(consoleSpy.mock.calls)
	console.log(inspected)
}


test(`out = ${to}`, () => {
	out(to)
	expectOut(to)
})

test(`out.log : > ${to}`, () => {
	out.log(to)
	expectOut('> ' + to)
})


for (let style in styles) {
	const $style = styles[style]
	if ('exit' in $style || 'block' in $style) continue
	test(`out.${style}(${to})`, () => {
		out.v(-1)[style](to)
		expectOut(template(icon(style) + ' ' + to))
	})
}

test(`out.warn | verbosity: 0 should not output`, () => {
	out.warn(to)
	expectOut()
})
