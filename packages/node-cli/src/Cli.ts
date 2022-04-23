import {ActionDefinition, default_state, IObject, State, StateActions, StateArg, StateArgs, StateOption, StateOptions} from './config'
import {arrayWrap, camelCase, isCallable, isNumber, isObject, kebabCase, objectClone, objectFindKey, typeOf} from '@snickbit/utilities'
import {out, Out} from '@snickbit/out'
import {chunkArguments, CliOption, CliOptions, default_options, extra_options, formatValue, hideBin, object_options, option_not_predicate, options_equal_predicate, parseDelimited} from './helpers'
import parser from 'yargs-parser'
import {fileExists, findUp, getFileJson} from '@snickbit/node-utilities'

/**
 * Simple Node.js CLI framework for creating command line applications.
 */
export class Cli {
	state: State
	#out: Out = new Out('node-cli')
	#appPrefix: string
	#appOut: Out

	/**
	 * Create a new Cli instance.
	 */
	constructor(name?: string) {
		this.state = objectClone(default_state) as State
		if (name) {
			this.name(name)
		}
	}

	get out() {
		return this.#appOut || this.#out
	}

	static #getMethod(opts) {
		let method
		if (isCallable(opts, true)) {
			method = opts
		} else if (isCallable(opts.method, true)) {
			method = opts.method
		} else if (isCallable(opts.default, true)) {
			method = opts.default
		} else if (isCallable(opts.run, true)) {
			method = opts.run
		} else if (isCallable(opts.handler, true)) {
			method = opts.handler
		}
		return method
	}

	static #taskName(opts, parent) {
		return opts.name || [(parent || ''), (opts.key || '')].filter(Boolean).join(':')
	}

	/**
	 * Set the name of the application
	 */
	name(name: string) {
		this.state.name = name
		this.#setOutName(name)
		return this
	}

	/**
	 * Set the version of the application
	 */
	version(version: string | number) {
		this.state.version = version
		return this
	}

	/**
	 * Set the description / banner message of the application
	 */
	banner(message: string) {
		this.state.banner = message
		return this
	}

	/**
	 * Hide the banner message
	 */
	hideBanner(value = true) {
		this.state.hide_banner = value !== false
		return this
	}

	/**
	 * Attempt to pull the name and version from the closest package.json file to the current working directory.
	 */
	includeWorkingPackage(value = true) {
		this.state.include_working_package = value !== false
		return this
	}

	/**
	 * Don't kill the process on error
	 */
	noBail(value = false) {
		this.state.bail = value !== true
		return this
	}

	/**
	 * Add a new flag/option
	 */
	option(key: string, option: Partial<StateOption>) {
		this.state.options[key] = option
		return this
	}

	/**
	 * Add new flags/options. Will override existing.
	 */
	options(options: StateOptions) {
		Object.assign(this.state.options, options)
		return this
	}

	/**
	 * Add new positional argument
	 */
	arg(key: string, arg: Partial<StateArg>) {
		this.state.args[key] = arg
		return this
	}

	/**
	 * Add new positional arguments. Will override existing.
	 */
	args(args: StateArgs) {
		Object.assign(this.state.args, args)
		return this
	}

	/**
	 * Add a new action
	 */
	action(action: ActionDefinition): this;

	action(name, description, method): this;

	action(nameOrAction: string | ActionDefinition, description?: string, method?: (argv) => any): this {
		if (isObject(nameOrAction)) {
			const action = nameOrAction as ActionDefinition
			this.#addAction({
				key: action.key || action.name,
				...action
			})
		} else {
			const name = nameOrAction as string
			this.#addAction({
				key: name,
				name,
				description,
				method
			})
		}
		return this
	}

	/**
	 * Add new actions. Will override existing.
	 */
	actions(actions: StateActions) {
		for (let [key, opt] of Object.entries(actions)) {
			this.#addAction({
				key,
				...opt
			})
		}
		return this
	}

	/**
	 * Set the default action
	 */
	defaultAction(name: string) {
		if (this.state.args?.action) {
			this.state.args.action.default = name
		}
		return this
	}

	/**
	 * Run the CLI program, parsing the argv, and running any defined actions
	 */
	async run(callback: Function): Promise<any> {
		const args = await this.#parseArgs()

		if (this.state.actions && Object.keys(this.state.actions).length && args.action) {
			this.#out.debug('Found action and action definitions, running action')
			return this.#runAction(args)
		} else if (callback) {
			this.#out.debug('Sending args to callback')
			this.#cleanState()
			return callback(args)
		}

		this.#out.debug('Run complete, returning args')
		this.#cleanState()

		return args
	}

	#addAction(action: ActionDefinition, parent = null) {
		if (Object.keys(action).length === 0) {
			return
		}

		const name = Cli.#taskName(action, parent)
		const description = action?.description || action?.describe
		let method = Cli.#getMethod(action)
		if (!method) {
			for (let [child_key, child] of Object.entries(action)) {
				if (isObject(child)) {
					child = {
						key: child_key,
						...child as object
					}
					this.#addAction(child, name)
				}
			}
		} else {
			this.state.actions[name] = {
				name,
				description,
				method
			}
		}

		if (!this.state.args.action) {
			this.state.args.action = {
				describe: 'Action to run',
				type: 'string',
				choices: Object.keys(this.state.actions)
			}
		}
	}

	/**
	 * Run an action defined in the CLI program
	 */
	async #runAction(args: IObject): Promise<any> {
		let action = args.action
		delete args.action
		if (typeOf(action) !== 'string') {
			this.out.fatal('Argument \'action\' must be a string.', args)
		}

		const _action = this.state.actions[action]
		if (!_action) {
			this.out.fatal(`Unknown action: ${action}`, 'Available actions:', Object.keys(this.state.actions).join(', '))
		}

		this.#out.debug('Running action: ' + action)
		this.#setOutName(action)

		try {
			let method = Cli.#getMethod(_action)
			if (!method) {
				this.#out.extra(_action).fatal(`Action ${action} does not have a default method`)
			}

			this.#cleanState()

			return await method(args)
		} catch (e) {
			if (this.state.bail) {
				this.out.fatal(`Action ${action} failed`, e)
			} else {
				this.out.error(`Action ${action} failed`, e)
				return false
			}
		}
	}

	#parseOptions() {
		let opts: Partial<CliOptions> = {...default_options}

		function pushOpts(key, value) {
			if (!opts[key]) opts[key] = []
			if (!opts[key].includes(value)) opts[key].push(value)
		}

		function pushKey(opt: CliOption) {
			if (!opts.keys) opts.keys = []
			if (!opts.keys.includes(opt)) opts.keys.push(opt)
		}

		// loop through all options
		for (let [opt, config] of Object.entries(this.state.options)) {
			// loop through all configuration entries
			if (!config.type) config.type = 'boolean'
			for (let [key, value] of Object.entries(config)) {
				if (opts.hasOwnProperty(key)) {
					if (object_options.includes(key)) {
						if (!opts[key]) {
							opts[key] = {}
						}
						opts[key][opt] = value
					} else {
						pushOpts(key, value)
						pushKey(opt)
					}
				} else if (key === 'type' && opts.hasOwnProperty(value)) {
					if (!opts[value]) {
						opts[value] = []
					}
					pushOpts(value, opt)
					pushKey(opt)
				} else if (!extra_options.includes(key)) {
					this.out.error('Unknown option: ' + key)
				}
			}
		}
		return opts
	}

	async #parseArgs(): Promise<IObject> {
		let argv: any[] = this.state.argv || hideBin(process.argv)
		let opts = this.#parseOptions()
		let preparsed: IObject = {}
		let overrides: IObject = {}

		if (typeOf(argv) === 'object') {
			preparsed = argv
			argv = []
			if (preparsed._) {
				argv.push(...preparsed._)
				delete preparsed._
			}
			if (preparsed['--']) {
				argv.push(...preparsed['--'])
				delete preparsed['--']
			}

			const override_options = Object.keys(default_state.options)
			for (let override_option of override_options) {
				if (preparsed[override_option] !== default_state.options[override_option].default) {
					overrides[override_option] = preparsed[override_option]
					delete preparsed[override_option]
				}
			}

			for (let [key, value] of Object.entries(preparsed)) {
				const alias = objectFindKey(opts.alias, key)
				if (alias) {
					delete preparsed[key]
					key = alias
					preparsed[key] = value
				}
				if (opts.keys.includes(key)) {
					delete preparsed[key]
					overrides[key] = value
				}
			}
		} else if (typeOf(argv) !== 'array') {
			out.extra('type: ' + typeOf(argv), argv).fatal('Argument \'argv\' must be an array of strings.')
		}

		// check for explicitly set count options
		if (Array.isArray(opts.count) && opts.count.length > 0) {
			for (let count of opts.count) {
				const count_aliases = [
					count,
					...arrayWrap(opts.alias[count])
				]
				if (camelCase(count) === count) {
					count_aliases.push(kebabCase(count))
				}

				const count_args = argv.filter(options_equal_predicate(count_aliases))
				if (count_args.length > 0) {
					argv = argv.filter(option_not_predicate(count_aliases))
					for (let count_arg of count_args) {
						const [count_arg_key, count_arg_value] = count_arg.split('=')
						const arg_index = argv.indexOf(count_arg)
						if (arg_index !== -1) {
							argv.splice(argv.indexOf(count_arg), 1)
						}
						const num_arg = parseInt(count_arg_value)
						if (isNumber(count_arg_value) && num_arg > 0) {
							// add count_arg_value number of count_arg to argv
							for (let i = 0; i < num_arg; i++) {
								argv.push(num_arg)
							}
						}
					}
				}
			}
		}

		let parsed = parser(argv, opts)

		let args = {...preparsed, ...parsed, ...overrides}
		args.__ = argv

		this.#out.debug({
			argv,
			opts,
			parsed,
			preparsed,
			overrides,
			args
		})

		// populate args
		let positional = args._.splice(0)
		if (args['--']) positional.push('--', ...args['--'].splice(0)) && delete args['--']
		this.#out.debug('Populated args positional args: ', positional)
		let argument_chunks = chunkArguments(positional)
		let positional_options = argument_chunks.shift()
		this.#out.verbose('positional_options: ', positional_options)
		let missing_required = []
		for (let [key, arg] of Object.entries(this.state.args)) {
			if (arg.type === 'array') {
				args[key] = []
				let values = positional_options.length ? positional_options.splice(0) : arg.default
				this.#out.verbose(`Setting ${key} to array from`, values)

				if (!values || !values.length) {
					continue
				}

				if (arg.delimited) {
					values = parseDelimited(values)
				}

				this.#out.verbose(`Setting ${key} to array from parsed`, values)
				for (let value of values) {
					args[key].push(formatValue(value))
				}
				this.#out.verbose(`Setting ${key} to array`, args[key])
			} else {
				let value = positional_options.shift()
				if (arg.delimited) {
					value = parseDelimited(value)
				}
				args[key] = value ? formatValue(value) : arg.default
				if (!value && arg.required) {
					missing_required.push(key)
				}
				this.#out.verbose(`Setting ${key} to`, args[key])
			}

			if (!positional_options.length && argument_chunks.length) {
				positional_options = argument_chunks.shift()
			}
		}

		if (missing_required.length) {
			out.fatal(`Missing required argument(s):`, missing_required.join(', '))
		}

		// get remaining positional options
		if (positional_options.length || argument_chunks.length) {
			// de-chunk argument_chunks
			for (let chunk of argument_chunks) {
				positional_options.push(...chunk)
			}

			args._ = positional_options.splice(0)
		}

		this.#out.info.debug('Double check default values')
		const needs_default_opts = opts.keys.filter(key => args[key] === undefined && opts.default[key] !== undefined)
		this.out.debug({needs_default_opts})
		for (const key of needs_default_opts) {
			args[key] = opts.default[key]
		}

		const needs_default_args = Object.keys(this.state.args).filter(key => args[key] === undefined && this.state.args[key].default !== undefined)
		this.out.debug({needs_default_args})
		for (const key of needs_default_args) {
			args[key] = this.state.args[key].default
		}

		this.#out.info.debug('Set environment variables')
		process.env.VERBOSE = args.verbose
		process.env.FORCE = args.force
		process.env.YES = args.yes
		process.env.DEBUG = args.debug

		if (!this.state.hide_banner && (this.state.name || this.state.include_working_package)) {
			let label
			if (this.state.name) {
				label = `{magenta}${this.state.name}{/magenta}`

				if (this.state.version) {
					label += ` {magenta}v${this.state.version}{/magenta}`
				}
			}

			let message = this.state.banner || ''
			if (this.state.include_working_package) {
				const workingPackageJsonFile = findUp('package.json')
				let workingPackageJson: IObject = {}
				if (workingPackageJsonFile && fileExists(workingPackageJsonFile)) {
					workingPackageJson = getFileJson(workingPackageJsonFile)
				}

				if (workingPackageJson.name) {
					message += ` {white}${workingPackageJson.name}{/white}`
					if (workingPackageJson.version) {
						if (!String(workingPackageJson.version).startsWith('v')) workingPackageJson.version = `v${workingPackageJson.version}`
						message += ` {cyan}${workingPackageJson.version}{/cyan}`
					}
				}
			}

			if (message) {
				this.out.block.title.label(label).info(message)
			} else if (label) {
				this.out.block.info(label)
			}
		}

		this.#out.label('args').verbose(args)
		this.#out.label('opts').verbose(opts)

		return args
	}

	#setOutName(name: string) {
		this.#appPrefix = (this.#appPrefix ? this.#appPrefix + ':' : '') + name
		this.#appOut = new Out(`[${this.#appPrefix}]`, {verbosity: 0})
		return this.#appOut
	}

	#cleanState() {
		this.state = objectClone(default_state) as State
	}
}
