import {dates} from '../src'
import {combinations} from '@snickbit/utilities'

describe('basics', () => {
	test('should be a function', () => expect(dates.duration).toBeInstanceOf(Function))
	test(`dates.duration(1) should return PT0.001S`, () => expect(dates.duration(1).toJSON()).toEqual('PT0.001S'))
	test(`dates.duration(25) should return PT0.025S`, () => expect(dates.duration(25).toJSON()).toEqual('PT0.025S'))
})

const duration = dates.duration(2500)

describe('inherited methods', () => {
	test(`dates.duration(2500) should return PT2.5S`, () => expect(duration.toJSON()).toEqual('PT2.5S'))

	test(`dates.duration(2500) should return 0000-00-00T00:00:02`, () => expect(duration.format()).toEqual('0000-00-00T00:00:02'))

	test(`duration.humanize() should return a few seconds`, () => expect(duration.humanize()).toEqual('a few seconds'))

	test(`duration.humanize() should return a few seconds`, () => expect(duration.humanize()).toEqual('a few seconds'))
})

describe('toWords', () => {
	describe('toWords.basics', () => {
		test(`duration.toWords() should return 2s and 500ms`, () => expect(duration.toWords()).toEqual('2.5s'))

		test(`duration.toWords({reduce: false}) should return 2s and 500ms`, () => expect(duration.toWords({reduce: false})).toEqual('2s and 500ms'))

		test(`duration.toWords(true) should return 2 seconds`, () => expect(duration.toWords(true)).toEqual('2 seconds'))
	})

	describe('toWords.options', () => {
		let options = combinations({
			reduce: [true, false],
			long: [true, false],
			milliseconds: [true, false]
		})

		for (let option of options) {
			let expected = {
				seconds: {
					value: '2',
					label: ' seconds'
				},
				milliseconds: {
					value: '500',
					label: ' milliseconds'
				}
			}
			if (!option.long) {
				expected.seconds.label = 's'
				expected.milliseconds.label = 'ms'
			}
			if (!option.milliseconds || option.reduce) {
				delete expected.milliseconds
				if (option.milliseconds) {
					expected.seconds.value = '2.5'
				}
			}

			const result = expected.seconds.value + expected.seconds.label +
				(expected.milliseconds ? ' and ' + expected.milliseconds.value + expected.milliseconds.label : '')

			test(`duration.toWords(${JSON.stringify(option)}) should return ${result}`, () => expect(duration.toWords(option)).toEqual(result))
		}
	})
})
