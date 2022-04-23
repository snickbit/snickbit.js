import {Cli} from './Cli'

/**
 * Simple Node.js CLI framework for creating command line applications.
 */
export function cli(name?: string): Cli {
	return new Cli(name)
}

export {Cli} from './Cli'

export default cli
