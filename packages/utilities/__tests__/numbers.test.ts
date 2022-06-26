import {numberPad} from '../src'

describe('numbers', () => {
	it('numberPad(5) should return 05', () => {
		expect(numberPad(5)).toEqual('05')
	})

	it('numberPad(5, 2) should return 05', () => {
		expect(numberPad(5, 2)).toEqual('05')
	})

	it('numberPad(50, 2) should return 50', () => {
		expect(numberPad(50, 2)).toEqual('50')
	})

	it('numberPad(500, 2) should return 500', () => {
		expect(numberPad(500, 2)).toEqual('500')
	})

	it('numberPad(5, 3) should return 005', () => {
		expect(numberPad(5, 3)).toEqual('005')
	})

	it('numberPad(50, 3) should return 050', () => {
		expect(numberPad(50, 3)).toEqual('050')
	})

	it('numberPad(500, 3) should return 500', () => {
		expect(numberPad(500, 3)).toEqual('500')
	})
})
