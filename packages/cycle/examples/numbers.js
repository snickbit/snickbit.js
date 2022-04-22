const {cycle} = require('../dist')

let instance = cycle([1, 2, 3])
for (let i = 0; i < 6; i++) {
	const expected = i % 3 + 1
	const actual = instance.next()

	console.log(`${i + 1} next() should have value ${expected}`, actual, expected === actual)
}

instance = cycle([1, 2, 3])
for (let i = 6; i > 0; i--) {
	let num = i - 1

	const expected = num % 3 + 1
	const actual = instance.prev()
	console.log(`${num} prev() should have value ${expected}`, actual, expected === actual)
}
