import {dates} from '../src'

const test_date = '2022-01-15'

describe('dates', () => {
	test('dates should be a Function', () => expect(dates).toBeInstanceOf(Function))
	test('dates.toString should return a string', () => expect(dates.toString()).toEqual(expect.any(String)))
	test(`(${test_date}) should return Sat, 15 Jan 2022 05:00:00 GMT`, () => expect(dates(test_date).toString()).toEqual('Sat, 15 Jan 2022 05:00:00 GMT'))

	test('dates().datestamp should be a Function', () => expect(dates().datestamp).toBeInstanceOf(Function))
	test(`(${test_date}) should return 2022-01-15`, () => expect(dates(test_date).datestamp()).toEqual('2022-01-15'))

	test('dates().timestamp should be a Function', () => expect(dates().timestamp).toBeInstanceOf(Function))
	test(`(${test_date}) should return 2022-01-15 00:00:00`, () => expect(dates(test_date).timestamp()).toEqual('2022-01-15 00:00:00'))

	test('dates().time should be a Function', () => expect(dates().time).toBeInstanceOf(Function))
	test(`(${test_date}) should return 00:00:00`, () => expect(dates(test_date).time()).toEqual('00:00:00'))

	test('dates().shortdate should be a Function', () => expect(dates().shortdate).toBeInstanceOf(Function))
	test(`(${test_date}) should return 01/15/2022`, () => expect(dates(test_date).shortdate()).toEqual('01/15/2022'))

	test('dates().shorttime should be a Function', () => expect(dates().shorttime).toBeInstanceOf(Function))
	test(`(${test_date}) should return 12:00 am`, () => expect(dates(test_date).shorttime()).toEqual('12:00 am'))

	test('dates().shortdatetime should be a Function', () => expect(dates().shortdatetime).toBeInstanceOf(Function))
	test(`(${test_date}) should return 01/15/2022 12:00 am`, () => expect(dates(test_date).shortdatetime()).toEqual('01/15/2022 12:00 am'))
})
