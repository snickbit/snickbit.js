import upwords from '../src'

test('Upwords method is defined', () => expect(upwords).toBeDefined())

test('Upwords is a function', () => expect(typeof upwords).toBe('function'))

test('Upwords returns a string', () => expect(typeof upwords('hello')).toBe('string'))

test('hello should return Hello', () => expect(upwords('hello')).toBe('Hello'))

test('hello world should return Hello World', () => expect(upwords('hello world')).toBe('Hello World'))

test('iphone should return iPhone', () => expect(upwords('iphone')).toBe('iPhone'))

test('usd should return USD', () => expect(upwords('usd')).toBe('USD'))

test('d&d should return D&D', () => expect(upwords('d&d')).toBe('D&D'))

test('created_at should return Created at', () => expect(upwords('created_at')).toBe('Created at'))

test('created__at should return Created at', () => expect(upwords('created__at')).toBe('Created at'))

test('i-like-to--play--d&d-in-3d should return I Like to Play D&D in 3D', () => expect(upwords('i-like-to--play--d&d-in-3d')).toBe('I Like to Play D&D in 3D'))
