export type IObject = { [key: string]: any }

export interface StateArgs {
	[key: string]: Partial<StateArg>;
}

export interface StateArg {
	describe: string;
	choices: string[] | StateArgChoice[];
	type: string;
	default: any;
	delimited: boolean;
	required: boolean;
}

export interface StateArgChoice {
	name: string;
	value: string | number;
}

export interface StateActions {
	help: (argv) => any
}

export interface StateAction {
	[key: string]: Object | Function;
}

export interface ActionDefinition {
	key?: string;
	name?: string;
	describe?: string;
	description?: string;
	method: (argv) => any;
}

export interface StateOptions {
	[key: string]: Partial<StateOption>;
}

export interface StateOption extends StateArg {
	alias: string | string[];
}

export interface State {
	name?: string;
	version?: string | number;
	banner?: string;
	include_working_package: boolean;
	hide_banner: boolean;
	bail: boolean;
	cwd: string;
	argv: string[];
	args: Partial<StateArgs>;
	actions: Partial<StateActions>;
	options: Partial<StateOptions>;
}

export const default_state: State = {
	name: undefined,
	version: undefined,
	banner: null,
	include_working_package: false,
	hide_banner: false,
	bail: true,
	cwd: process.cwd(),
	argv: null,

	args: {},

	actions: {},

	options: {
		verbose: {
			alias: 'v',
			describe: 'Allowed verbosity level',
			type: 'count',
			default: 0
		},
		debug: {
			alias: 'd',
			describe: 'Debug output',
			type: 'boolean',
			default: false
		},
		force: {
			alias: 'f',
			describe: 'Force command',
			type: 'boolean',
			default: false
		},
		yes: {
			alias: 'y',
			describe: 'Answer yes to all prompts',
			type: 'boolean',
			default: false
		},
		help: {
			alias: 'h',
			describe: 'Show help',
			type: 'boolean',
			default: false
		}
	}
}
