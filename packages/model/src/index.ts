import {isArray, isCallable, isDate, isEmpty, isFunction, isObject, objectFind, objectFindKey, objectHasMethod, ObjectPredicate, typeOf, uuid, VariableType} from '@snickbit/utilities'
import objectPath, {ObjectPathBound} from 'object-path'
import {Out} from '@snickbit/out'

export type ModelId = number | string | undefined

export type Key = Array<number | string | symbol> | number | string | symbol;

export type ModelValue = any;

/**
 * Model Schema
 * @property {ModelValidationMethod | ModelSchemaRecord} [*]
 */
export interface ModelSchema {
	[key: string]: ModelValidationMethod | ModelSchemaRecord
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
	default: ModelValue
	required: boolean
	message: string
	validate: ModelValidationMethod
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
	id: ModelId
	name: string
	autoId: boolean
	schema: Partial<ModelSchema>
	strict: boolean
	timestamps: boolean
	root: string | null
}

/** @internal */
function defaultValues(schema: Partial<ModelSchema>) {
	const defaults = {}
	for (let [key, schemaItem] of Object.entries(schema)) {
		if (!isObject(schemaItem)) continue
		schemaItem = schemaItem as ModelSchemaRecord
		if (schemaItem.default !== undefined) {
			defaults[key] = schemaItem.default
		}
	}
	return defaults
}

/**
 * @description @snickbit/model
 * Create a simple object model
 */
export function model(data: object, options?: Partial<ModelOptions>) {
	return new Model(data, options)
}

/**
 * @description @snickbit/model
 * Create a simple object model
 */
export class Model {
	protected options: Partial<ModelOptions> = {}
	protected readonly defaults: { [key: string]: ModelValue }
	protected readonly is_new: boolean
	protected out: Out
	protected schema: Partial<ModelSchema>
	data: ObjectPathBound<object>
	append: string[] = []

	constructor(data?: object, options?: Partial<ModelOptions>) {
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

		this.defaults = defaultValues(this.options.schema)
		this.set({...this.defaults, ...(data || {})})

		this.is_new = !this.id
		if (this.is_new && this.options.autoId) this.set(`.${this.options.id}`, uuid())
		this.resetOut()
	}

	/**
	 * Get the model's id
	 */
	get id(): ModelId {
		const id_fields = [`.${this.options.id}`, '._id', '.id']
		for (let id_field of id_fields) {
			if (this.has(id_field)) return this.get(id_field)
		}
		return undefined
	}

	protected resetOut() {
		this.out = new Out(`${this.options.name}#${this.is_new || !this.id ? 'new' : this.id}`)
	}

	protected checkKey(key): string | undefined {
		if (typeOf(key) === 'string' && key.startsWith('.')) {
			key = key.substring(1)
		} else if (this.options.root) {
			if (typeOf(key) === 'string' && key !== this.options.root) {
				if (!key.startsWith(`${this.options.root}.`)) {
					key = `${this.options.root}.${key}`
				} else if (typeOf(key) === 'array' && key.slice().shift() !== this.options.root) {
					key = [this.options.root, key]
				}
			} else if (typeOf(key) === 'array' && key.slice().shift() !== this.options.root) {
				key = [this.options.root, key]
			} else {
				key = this.options.root
			}
		}
		if (!key) key = undefined
		return key
	}

	protected applyTimestamps() {
		if (this.options.timestamps) {
			this.set('_created', this.coalesce('_created', new Date()))
			this.set('_updated', new Date())
		}
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
	 * Get the entire model's data
	 */
	get(): ModelValue

	/**
	 * Get a path from an object
	 */
	get(key: Key): ModelValue;

	get(key?: Key): ModelValue {
		const parsedKey = this.checkKey(key)
		const data = this.data.get(parsedKey)
		if (!parsedKey && this.append && this.append.length) {
			for (let appendable of this.append) {
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
	find(predicate: ObjectPredicate): ModelValue;

	/**
	 * Find specific data in the model
	 */
	find(key: Key, predicate: ObjectPredicate): ModelValue;

	find(keyOrPredicate: Key | ObjectPredicate, predicate?: ObjectPredicate): ModelValue {
		let key: Key
		if (isFunction(keyOrPredicate)) {
			predicate = keyOrPredicate as ObjectPredicate
		} else {
			key = keyOrPredicate as Key
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
	findKey(predicate: ObjectPredicate): ModelValue;

	/**
	 * Find a key/index matching a value
	 */
	findKey(key: Key, predicate: ObjectPredicate): ModelValue;

	findKey(keyOrPredicate: Key | ObjectPredicate, predicate?: ObjectPredicate): string | symbol | number | undefined {
		let key: Key
		if (isFunction(keyOrPredicate)) {
			predicate = keyOrPredicate as ObjectPredicate
		} else {
			key = keyOrPredicate as Key
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
	first(): ModelValue;

	/**
	 * Get the first value in a set
	 */
	first(key?: Key): ModelValue;

	first(key?: Key): ModelValue {
		const value = this.get(key)
		if (isObject(value)) {
			return Object.values(value).shift()
		} else if (isArray(value)) {
			return value.slice().shift()
		}
		return undefined
	}

	/**
	 * Get the last value in a set
	 */
	last(): ModelValue;

	/**
	 * Get the last value in a set
	 */
	last(key: Key): ModelValue;

	last(key?: Key): ModelValue {
		const value = this.get(key)
		if (isObject(value)) {
			return Object.values(value).pop()
		} else if (isArray(value)) {
			return value.slice().pop()
		}
		return undefined
	}

	/**
	 * Overwrite the entire object
	 */
	set(data: object): this;

	/**
	 * Set the value of a key
	 */
	set(key: Key, value: ModelValue, overwrite?: boolean): this;

	set(keyOrData: object | Model | Key, value?: ModelValue, overwrite: boolean = true): this {
		if (isObject(keyOrData)) {
			let data = keyOrData as object | Model

			// warn if the value is set
			if (value !== undefined) this.out.extra({data, value}).warn('Cannot set an object and a value at the same time. Value is ignored.')

			// warn if overwrite is set
			if (overwrite !== true) this.out.extra({data, overwrite}).warn('Overwrite is ignored. All data will be overwritten.')

			// check if the data is a Model, parse if it is
			if (objectHasMethod(data, 'toJSON')) data = (data as Model).toJSON() as object

			// set the data
			if (this.options.root) {
				this.data = objectPath({[this.options.root]: data})
			} else {
				this.data = objectPath(data)
			}
		} else {
			let key = keyOrData as Key
			this.data.set(this.checkKey(key), value, !overwrite)
		}
		return this
	}

	/**
	 * Tests path existence
	 */
	has(key: Key): boolean {
		return this.data.has(this.checkKey(key))
	}

	/**
	 * Get the keys of the data
	 */
	keys(): string[];

	/**
	 * Get the keys under a specific path in the model
	 */
	keys(key?: Key): string[] {
		const data = this.get(key)
		return data ? Object.keys(data) : []
	}

	/**
	 * Count the items in a set
	 */
	count(): number;

	/**
	 * Count the items in a set
	 */
	count(key: Key): number;

	count(key?: Key): number {
		const value = this.get(key)
		if (isArray(value)) {
			return value.length
		} else if (isObject(value)) {
			return Object.keys(value).length
		} else {
			return (value || '').length
		}
	}

	/**
	 * Remove all the items in a set
	 */
	empty(): this

	/**
	 * Remove all the items in a set
	 */
	empty(key: Key): this

	empty(key?: Key): this {
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
	coalesce(key: Key, defaultValue?: ModelValue): ModelValue

	coalesce(key?: Key, defaultValue?: ModelValue): ModelValue {
		return this.data.coalesce(this.checkKey(key), defaultValue)
	}

	/**
	 * Insert an item in an array path
	 */
	insert(key: Key, value: ModelValue, at?: number) {
		this.data.insert(this.checkKey(key), value, at)
		return this
	}

	/**
	 * Push a value to an array path
	 */
	push(key: Key, ...values) {
		this.data.push(this.checkKey(key), ...values)
		return this
	}

	/**
	 * Get the value of a path and remove it
	 */
	pull(key: Key, defaultValue?: ModelValue): ModelValue {
		const value = this.get(key) || defaultValue
		this.remove(key)
		return value
	}

	/**
	 * Patch/merge the value of a path
	 */
	patch(data: object): this

	/**
	 * Patch/merge the value of a path
	 */
	patch(key: Key, value: ModelValue): this

	patch(keyOrData: object | Key, value?: ModelValue): this {
		let data
		let key: Key
		if (isObject(keyOrData)) {
			data = keyOrData
			key = null

			// warn if the value is set
			if (value !== undefined) this.out.extra({data, value}).warn('Cannot set an object and a value at the same time. Value is ignored.')
		} else {
			key = keyOrData as Key
			data = value
		}

		// check if the data is a Model, parse if it is
		if (objectHasMethod(data, 'toJSON')) data = (data as Model).toJSON() as object

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
	increment(key: Key, value: number = 1): this {
		let current = this.get(key)
		if (Number.isNaN(current)) current = 0
		return this.set(key, current + value)
	}

	/**
	 * Decrement a number path
	 */
	decrement(key: Key, value: number = 1): this {
		let current = this.get(key)
		if (Number.isNaN(current)) current = 0
		return this.set(key, current - value)
	}

	/**
	 * Set a value if it doesn't exist, do nothing if it does
	 */
	ensureExists(key: Key, value: ModelValue): this {
		this.data.ensureExists(this.checkKey(key), value)
		return this
	}

	/**
	 * Remove a value from a path
	 */
	remove(key: Key) {
		this.data.del(this.checkKey(key))
		return this
	}

	/**
	 * Validate the model against the schema
	 */
	async validate() {
		const errors = []
		const schema = this.options.schema

		for (let [key, definition] of Object.entries(schema)) {
			const value = this.get(key)

			if (isFunction(definition)) {
				const validate = definition as ModelValidationMethod
				const result = validate(key, value)
				if (result !== true) {
					errors.push(result)
				}
			} else if (isObject(definition)) {
				definition = definition as ModelSchemaRecord

				if ('validate' in definition && isFunction(definition.validate)) {
					const result = definition.validate(key, value)
					if (result !== true) {
						errors.push(result)
					}
				}

				const {type, message, required} = definition
				if (required && isEmpty(value)) {
					errors.push(message || `${key} is required`)
				}

				if (type === 'date') {
					if (!isDate(value)) {
						errors.push(message || `${key} is not a valid date`)
					}
				} else {
					const value_type = typeOf(value)
					if (value && !type.includes(value_type)) {
						errors.push(message || `${key} must be of type ${type}, got ${value_type}`)
					}
				}
			}
		}

		const schema_keys = Object.keys(schema)
		let has_extra_keys = false
		for (let key of this.keys()) {
			if (!schema_keys.includes(key)) {
				errors.push(`Unknown key ${key}`)
				has_extra_keys = true
			}
		}
		if (has_extra_keys) {
			errors.push('Allowed keys: ' + schema_keys.join(', '))
		}

		if (this.options.strict && errors.length > 0) {
			this.out.throw(...errors)
		} else {
			return errors.length ? errors : true
		}
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
}
