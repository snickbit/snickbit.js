import {randomString} from "../src";

test('randomString should return a random 10 character string', function () {
	const result = randomString(10)
	expect(result.length).toBe(10)
})

test('randomString should return a random 32 character  string', function () {
	const result = randomString(32)
	expect(result.length).toBe(32)
})
