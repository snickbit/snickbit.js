import {Cycle, cycle} from '../src'
import * as presets from '../src/presets'

describe('Cycle', () => {
	let instance

	beforeEach(() => instance = new Cycle())

	it('instance should be an instanceof Cycle', () => expect(instance).toBeInstanceOf(Cycle))

	it('should have a method next()', () => expect(instance.next).toBeTruthy())

	it('should have a method prev()', () => expect(instance.prev).toBeTruthy())

	it('should have a method first()', () => expect(instance.first).toBeTruthy())

	it('should have a method last()', () => expect(instance.last).toBeTruthy())

	it('should have a method current()', () => expect(instance.current).toBeTruthy())

	it('should have a method get()', () => expect(instance.get).toBeTruthy())

	it('should have a method set()', () => expect(instance.set).toBeTruthy())

	it('should have a method push()', () => expect(instance.push).toBeTruthy())

	it('should have a method remove()', () => expect(instance.remove).toBeTruthy())

	it('should have a method shuffle()', () => expect(instance.shuffle).toBeTruthy())
})

describe('cycle()', () => it('should return Cycle instance', () => expect(cycle()).toBeInstanceOf(Cycle)))

describe('Parameters', () => {
	it('[1,2,3] should have items [1,2,3]', () => expect(cycle([1, 2, 3])).toHaveProperty('items', [1, 2, 3]))

	for (let [name, values] of Object.entries(presets)) {
		it(`${name} should have items ${values.length} matching values`, () => expect(cycle(name)).toHaveProperty('items', values))

		it(`${name} ${values.length} supplied values should have items ${values.length} matching values`, () => expect(cycle(values)).toHaveProperty('items', values))
	}
})

describe('Values Forward', () => {
	let instance = cycle([1, 2, 3])

	for (let i = 0; i < 6; i++) {
		it(`${i + 1} next() should have value ${i % 3 + 1}`, () => expect(instance.next()).toBe(i % 3 + 1))
	}
})

describe('Values Backward', () => {
	let instance = cycle([1, 2, 3])

	for (let i = 6; i > 0; i--) {
		let num = i - 1
		it(`${num} prev() should have value ${num % 3 + 1}`, () => expect(instance.prev()).toBe(num % 3 + 1))
	}
})
