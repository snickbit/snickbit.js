import {arrayReject} from '../src'

describe('arrays', () => {
	it('arrayReject(arr, callback) should return opposite of callback', () => {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		const callback = (...args: any[]) => args[0] > 5
		expect(arrayReject(arr, callback)).toEqual([1, 2, 3, 4, 5])
	})
})
