import {Out} from '@snickbit/out'
import {isArray, isCallable, isDate, isEmpty, isFunction, isObject, objectFind, objectFindKey, objectHasMethod, ObjectPredicate, typeOf, uuid, VariableType} from '@snickbit/utilities'
import objectPath, {ObjectPathBound} from 'object-path'

export type ModelId = number | string | undefined

export type ModelKey = Array<ModelPath> | ModelPath

export type ModelPath = number | string | symbol

export type ModelValue = any

export type ModelErrors = Record<string, string>

/**
 * Model Schema
 * @property {ModelValidationMethod | ModelSchemaRecord} [*]
 */
export interface ModelSchema {
	[key: string]: ModelSchemaRecord | ModelValidationMethod
}

/**
 * Model Validation Method
 * @param {string} key - The key of the property being validated
 * @param {ModelValue} value - The value of the property being validated
 */
export type ModelValidationMethod = (key: string, value: ModelValue) => boolean

/**
 * Model Schema Record
 * @property {VariableType | VariableType[]} type - The variable type of the value
 * @property {ModelValue} default - The default value
 * @property {boolean} required - Whether the value is required
 * @property {string} message - Message to display when validation fails
 * @property {ModelValidationMethod} validate - Validation method
 */
export interface ModelSchemaRecord {
	type: VariableType | VariableType[]
	default?: ModelValue
	required?: boolean
	message?: string
	validate?: ModelValidationMethod
}

/**
 * Model Options
 * @property {ModelId} id - The id of the model. Stored separately from the model itself.
 * @property {string} name - The name of the model (class). Intended for extending the Model class, but can be used to identify the model.
 * @property {boolean} autoId - Automatically generate an id for the model.
 * @property {ModelSchema} schema - The schema of the model. Used to validate the model.
 * @property {boolean} strict - The schema of the model. Used to validate the model.
 * @property {boolean} timestamps - Automatically generate timestamps _created and _updated for the model. Stored with the model.
 * @property {string|null} root - Define a root path for the model. All paths/keys will be prefixed with this path unless they are prefixed with a dot ".".
 */
export interface ModelOptions {
	id?: ModelId
	name?: string
	autoId?: boolean
	schema?: Partial<ModelSchema>
	strict?: boolean
	timestamps?: boolean
	root?: string | null
}

/** @internal */
function defaultValues(schema: Partial<ModelSchema>) {
	const defaults = {}
	for (let [key, schemaItem] of Object.entries(schema)) {
		if (!isObject(schemaItem)) {
			continue
		}
		schemaItem = schemaItem as ModelSchemaRecord
		if (schemaItem.default !== undefined) {
			defaults[key] = schemaItem.default
		}
	}
	return defaults
}

/**
 * Create a simple object model
 * @description @snickbit/model
 */
export function model<T extends object>(data: T, options?: Partial<ModelOptions>) {
	return new Model<T>(data, options)
}

/**
 * Create a simple object model
 * @description @snickbit/model
 */
export class Model<T extends object = any, D = Partial<T>> {
	protected options: ModelOptions = {}

	protected readonly defaults: {[key: string]: ModelValue}

	protected is_new: boolean

	protected out: Out

	protected schema: Partial<ModelSchema>

	protected errors: ModelErrors = {}

	data: ObjectPathBound<T>

	append: string[] = []

	constructor(data?: T, options?: Partial<ModelOptions>) {
		this.options = {
			name: this.constructor.name,
			id: '_id',
			autoId: false,
			strict: false,
			timestamps: false,
			schema: {},
			root: null,
			...options
		}

		this.out = new Out(this.options.name)

		this.defaults = defaultValues(this.options.schema || {})
		this.set({...this.defaults, ...data || {}} as T)

		this.is_new = !this.id
		if (this.is_new && this.options.autoId) {
			this.set(`.${this.options.id}`, uuid())
		}
		this.resetOut()
	}

	/**
	 * Get the model's id
	 */
	get id(): ModelId {
		const id_fields = [`.${this.options.id}`, '._id', '.id']
		for (const id_field of id_fields) {
			if (this.has(id_field)) {
				return this.get(id_field)
			}
		}
		return undefined
	}

	protected resetOut() {
		this.out = new Out(`${this.options.name}#${this.is_new || !this.id ? 'new' : this.id}`)
	}

	protected checkKey(key): string {
		if (typeOf(key) === 'string' && key.startsWith('.')) {
			key = key.substring(1)
		} else if (this.options.root) {
			if (typeOf(key) === 'string' && key !== this.options.root) {
				if (!key.startsWith(`${this.options.root}.`)) {
					key = `${this.options.root}.${key}`
				} else if (typeOf(key) === 'array' && key.slice()
					.shift() !== this.options.root) {
					key = [this.options.root, key]
				}
			} else if (typeOf(key) === 'array' && key.slice()
				.shift() !== this.options.root) {
				key = [this.options.root, key]
			} else {
				key = this.options.root
			}
		}
		if (!key) {
			key = ''
		}
		return key
	}

	protected applyTimestamps() {
		if (this.options.timestamps) {
			this.set('_created', this.coalesce('_created', new Date()))
			this.set('_updated', new Date())
		}
	}

	/**
	 * Get the error for a key, if there is one
	 */
	getError(key: string): string {
		return this.errors[key] || ''
	}

	/**
	 * Check if a key has an error
	 */
	hasError(key: string): boolean {
		return key in this.errors
	}

	/**
	 * Get the entire model's data
	 */
	get(): ModelValue

	/**
	 * Get a path from an object
	 */
	get(key: ModelKey | undefined): ModelValue
	get(key?: ModelKey | undefined): ModelValue {
		const parsedKey = this.checkKey(key)
		const data = this.data.get(parsedKey)
		if (!parsedKey && this.append && this.append.length) {
			for (const appendable of this.append) {
				if (this[appendable]) {
					const value = this[appendable]
					if (isCallable(value)) {
						data[appendable] = value()
					} else {
						data[appendable] = value
					}
				}
			}
		}
		return data
	}

	/**
	 * Find specific data in the model
	 */
	find(predicate: ObjectPredicate): ModelValue

	/**
	 * Find specific data in the model
	 */
	find(key: ModelKey, predicate: ObjectPredicate): ModelValue
	find(keyOrPredicate: ModelKey | ObjectPredicate, optionalPredicate?: ObjectPredicate): ModelValue {
		let key: ModelKey = ''
		let predicate: ObjectPredicate

		if (isFunction(keyOrPredicate)) {
			predicate = keyOrPredicate
		} else if (optionalPredicate) {
			key = keyOrPredicate as ModelKey
			predicate = optionalPredicate
		} else {
			throw new Error('Missing predicate')
		}

		const value = this.get(key)

		if (isObject(value)) {
			return objectFind(value, predicate)
		} else if (isArray(value)) {
			return value.find(predicate)
		}
		return false
	}

	/**
	 * Find a key/index matching a value
	 */
	findKey(predicate: ObjectPredicate): ModelValue

	/**
	 * Find a key/index matching a value
	 */
	findKey(key: ModelKey, predicate: ObjectPredicate): ModelValue
	findKey(keyOrPredicate: ModelKey | ObjectPredicate, optionalPredicate?: ObjectPredicate): number | string | symbol | undefined {
		let key: ModelKey = ''
		let predicate: ObjectPredicate

		if (isFunction(keyOrPredicate)) {
			predicate = keyOrPredicate
		} else if (optionalPredicate) {
			key = keyOrPredicate as ModelKey
			predicate = optionalPredicate
		} else {
			throw new Error('Missing predicate')
		}

		const value = this.get(key)

		if (isObject(value)) {
			return objectFindKey(value, predicate)
		} else if (isArray(value)) {
			return value.findIndex(predicate)
		}

		return -1
	}

	/**
	 * Get the first value in a set
	 */
	first(): ModelValue

	/**
	 * Get the first value in a set
	 */
	first(key?: ModelKey): ModelValue
	first(key?: ModelKey): ModelValue {
		const value = this.get(key)
		if (isObject(value)) {
			return Object.values(value)
				.shift()
		} else if (isArray(value)) {
			return value.slice()
				.shift()
		}
		return undefined
	}

	/**
	 * Get the last value in a set
	 */
	last(): ModelValue

	/**
	 * Get the last value in a set
	 */
	last(key: ModelKey): ModelValue
	last(key?: ModelKey): ModelValue {
		const value = this.get(key)
		if (isObject(value)) {
			return Object.values(value)
				.pop()
		} else if (isArray(value)) {
			return value.slice()
				.pop()
		}
		return undefined
	}

	/**
	 * Overwrite the entire object
	 */
	set(data: D | T): this

	/**
	 * Set the value of a key
	 */
	set(key: ModelKey | undefined, value: ModelValue, overwrite?: boolean): this
	set(keyOrData: D | Model | ModelKey | T | undefined, value?: ModelValue, overwrite = true): this {
		if (isObject(keyOrData)) {
			let data = keyOrData as Model | T

			// warn if the value is set
			if (value !== undefined) {
				this.out.extra({
					data,
					value
				})
					.warn('Cannot set an object and a value at the same time. Value is ignored.')
			}

			// warn if overwrite is set
			if (overwrite !== true) {
				this.out.extra({
					data,
					overwrite
				})
					.warn('Overwrite is ignored. All data will be overwritten.')
			}

			// check if the data is a Model, parse if it is
			if (objectHasMethod(data, 'toJSON')) {
				data = (data as Model).toJSON() as T
			}

			// set the data
			if (this.options.root) {
				this.data = objectPath({[this.options.root]: data})
			} else {
				this.data = objectPath(data)
			}
		} else {
			const key = keyOrData as ModelKey
			this.data.set(this.checkKey(key), value, !overwrite)
		}
		return this
	}

	/**
	 * Tests path existence
	 */
	has(key: ModelKey): boolean {
		return this.data.has(this.checkKey(key))
	}

	/**
	 * Get the keys of the data
	 */
	keys(): string[]

	/**
	 * Get the keys under a specific path in the model
	 */
	keys(key?: ModelKey): string[] {
		const data = this.get(key)
		return data ? Object.keys(data) : []
	}

	/**
	 * Count the items in a set
	 */
	count(): number

	/**
	 * Count the items in a set
	 */
	count(key: ModelKey): number
	count(key?: ModelKey): number {
		const value = this.get(key)
		if (isArray(value)) {
			return value.length
		} else if (isObject(value)) {
			return Object.keys(value).length
		}
		return (value || '').length
	}

	/**
	 * Remove all the items in a set
	 */
	empty(): this

	/**
	 * Remove all the items in a set
	 */
	empty(key: ModelKey): this
	empty(key?: ModelKey): this {
		this.data.empty(this.checkKey(key))
		return this
	}

	/**
	 * Get the first non-undefined property of a set
	 */
	coalesce(): ModelValue

	/**
	 * Get the first non-undefined property of a set
	 */
	coalesce(key: ModelKey, defaultValue?: ModelValue): ModelValue
	coalesce(key?: ModelKey, defaultValue?: ModelValue): ModelValue {
		return this.data.coalesce(this.checkKey(key), defaultValue)
	}

	/**
	 * Insert an item in an array path
	 */
	insert(key: ModelKey, value: ModelValue, at?: number) {
		this.data.insert(this.checkKey(key), value, at)
		return this
	}

	/**
	 * Push a value to an array path
	 */
	push(key: ModelKey, ...values) {
		this.data.push(this.checkKey(key), ...values)
		return this
	}

	/**
	 * Get the value of a path and remove it
	 */
	pull(key: ModelKey, defaultValue?: ModelValue): ModelValue {
		const value = this.get(key) || defaultValue
		this.remove(key)
		return value
	}

	/**
	 * Patch/merge the value of a path
	 */
	patch(data: D): this

	/**
	 * Patch/merge the value of a path
	 */
	patch(key: ModelKey, value: ModelValue): this
	patch(keyOrData: D | ModelKey, value?: ModelValue): this {
		let data
		let key: ModelKey = ''
		if (isObject(keyOrData)) {
			data = keyOrData

			// warn if the value is set
			if (value !== undefined) {
				this.out.extra({
					data,
					value
				})
					.warn('Cannot set an object and a value at the same time. Value is ignored.')
			}
		} else {
			key = keyOrData as ModelKey
			data = value
		}

		// check if the data is a Model, parse if it is
		if (objectHasMethod(data, 'toJSON')) {
			data = (data as Model).toJSON() as T
		}

		// get the current value
		const current = this.get(key)
		const currentType = typeOf(current)
		const dataType = typeOf(data)
		if (currentType !== dataType) {
			this.out.warn(`Cannot patch a value of type ${currentType} with a value of type ${dataType}`, 'Overwriting.')
			this.set(key, value)
		} else if (currentType === 'object') {
			this.set(key, {...current, ...value})
		} else if (currentType === 'array') {
			this.set(key, [...current, ...value])
		}
		return this
	}

	/**
	 * Increment a number path
	 */
	increment(key: ModelKey, value = 1): this {
		let current = this.get(key)
		if (Number.isNaN(current)) {
			current = 0
		}
		return this.set(key, current + value)
	}

	/**
	 * Decrement a number path
	 */
	decrement(key: ModelKey, value = 1): this {
		let current = this.get(key)
		if (Number.isNaN(current)) {
			current = 0
		}
		return this.set(key, current - value)
	}

	/**
	 * Set a value if it doesn't exist, do nothing if it does
	 */
	ensureExists(key: ModelKey, value: ModelValue): this {
		this.data.ensureExists(this.checkKey(key), value)
		return this
	}

	/**
	 * Remove a value from a path
	 */
	remove(key: ModelKey) {
		this.data.del(this.checkKey(key))
		return this
	}

	/**
	 * Convert the model to a JSON string
	 */
	toString() {
		return JSON.stringify(this.toJSON())
	}

	/**
	 * Convert the model to a JSON object. This is the same as calling `.get()
	 */
	toJSON() {
		return this.get()
	}

	protected async prepareData() {
		if (!this.data) {
			throw new Error('No data to save')
		}

		if (this.options.strict) {
			await this.validate()
		}

		this.applyTimestamps()

		return this.toJSON()
	}

	/**
	 * Validate the model against the schema
	 * @throws {Error} If the model is invalid and strict mode is enabled
	 */
	async validate(): Promise<ModelErrors | true> {
		this.errors = {}
		const schema = this.options.schema as ModelSchema

		for (let [key, definition] of Object.entries(schema)) {
			const value = this.get(key)

			if (isFunction(definition)) {
				const validate = definition as ModelValidationMethod
				const result = validate(key, value)
				if (result !== true) {
					this.errors[key] = result || `${key} is invalid`
				}
			} else if (isObject(definition)) {
				definition = definition as ModelSchemaRecord

				if ('validate' in definition && typeof definition.validate === 'function') {
					const result = definition.validate(key, value)
					if (result !== true) {
						this.errors[key] = result || `${key} is invalid`
					}
				}

				const {type, message, required} = definition
				if (required && isEmpty(value)) {
					this.errors[key] = message || `${key} is required`
				}

				if (type === 'date') {
					if (!isDate(value)) {
						this.errors[key] = message || `${key} is not a valid date`
					}
				} else {
					const value_type = typeOf(value)
					if (value && !type.includes(value_type)) {
						this.errors[key] = message || `${key} must be of type ${type}, received ${value_type}`
					}
				}
			}
		}

		const schema_keys = Object.keys(schema)
		let extra_keys: string[] = []
		for (const key of this.keys()) {
			if (!schema_keys.includes(key)) {
				extra_keys.push(key)
			}
		}
		if (extra_keys.length) {
			this.errors.extra = `Found ${extra_keys.length} extra keys. Allowed keys: ${schema_keys.join(', ')}`
		}

		if (!isEmpty(this.errors)) {
			if (this.options.strict) {
				this.out.throw(this.errors)
			} else {
				return this.errors
			}
		}

		return true
	}
}
