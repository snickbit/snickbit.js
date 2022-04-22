describe('parseOptions', () => {
	const {parseOptions} = require('../lib')
	test('parseOptions({test: true, two: false}, {test: false, other: false}) should return {test: true, other: false, two: false}', () => {
		const test_object = {
			test: true,
			two: false
		}
		const default_object = {
			test: false,
			other: false
		}
		const expected_object = {
			test: true,
			other: false,
			two: false
		}
		expect(parseOptions(test_object, default_object)).toEqual(expected_object)
	})

	test('parseOptions(true, {test: false, other: false}, "test") should return {test: true, other: false}', () => {
		const test_object = true
		const default_object = {
			test: false,
			other: false
		}
		const expected_object = {
			test: true,
			other: false
		}
		expect(parseOptions(test_object, default_object, 'test')).toEqual(expected_object)
	})

	test('parseOptions(undefined, true) should return throw a TypeError', () => {
		const test_object = undefined
		const default_object = true
		expect(() => parseOptions(test_object, default_object)).toThrow(TypeError)
	})

	test('parseOptions({test: true, two: false}, {test: false, other: false}) should return {test: true, other: false, two: false}', () => {
		const test_object = {
			test: undefined,
			two: false
		}
		const default_object = {
			test: false,
			other: false
		}
		const expected_object = {
			test: false,
			other: false,
			two: false
		}
		expect(parseOptions(test_object, default_object)).toEqual(expected_object)
	})
})

describe('overloadOptions', () => {
	const {overloadOptions} = require('../lib')

	const baseChannel = 'test'
	const baseContext = {
		test: false,
		other: false
	}
	const baseConfig = {
		test: true,
		other: false,
		two: false
	}
	const baseSchemas = [
		{
			channel: 'string',
			context: 'object',
			config: 'object'
		},
		{
			context: 'object',
			config: 'object'
		}
	]

	const baseExpected = {
		channel: 'test',
		context: {
			test: false,
			other: false
		},
		config: {
			test: true,
			other: false,
			two: false
		}
	}

	test('overloadOptions("test", {}, {}) = {channel: "test", context: {}, config: {}}', () => {
		expect(overloadOptions([baseChannel, baseContext, baseConfig], baseSchemas)).toEqual(baseExpected)
	})

	test('overloadOptions({}, {}) = {context: {}, config: {}}', () => {
		const expected = {
			context: baseExpected.context,
			config: baseExpected.config
		}
		expect(overloadOptions([baseContext, baseConfig], baseSchemas)).toEqual(expected)
	})

	test('overloadOptions("test", {}) = {channel: "test", context: {}, config: undefined}', () => {
		const expected = {
			channel: baseExpected.channel,
			context: baseExpected.context
		}
		expect(overloadOptions([baseChannel, baseContext], baseSchemas)).toEqual(expected)
	})

	test('overloadOptions("test") = ERROR', () => {
		const schemas = [
			{
				channel: 'object'
			},
			{
				context: 'object',
				config: 'object'
			}
		]
		expect(() => overloadOptions([baseChannel, baseContext, baseConfig], schemas)).toThrow()
	})
})
