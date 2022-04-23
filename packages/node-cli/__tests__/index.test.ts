import {Cli, cli} from '../src'

describe('cli', () => {
	it('cli should be instance of function', () => expect(cli).toBeInstanceOf(Function))
	it('cli should be typeof function', () => expect(typeof cli).toBe('function'))
	it('cli() should instance of Cli', () => expect(cli()).toBeInstanceOf(Cli))
})
