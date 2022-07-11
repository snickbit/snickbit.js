import {arrayUnique, isCallable} from '@snickbit/utilities'

/** @category Imports */
export const isImport = (data: any) => typeof data === 'function' || data?.constructor.name === 'AsyncFunction' || Array.isArray(data)

/** @category Imports */
export const isImportDefinition = (data: any) => data && data['run'] || data['handler'] || data['method']

export type ImportMethod<Args = any, Results = any> = (...args: Args[]) => Promise<Results> | Results

/** @category Imports */
export interface ImportDefinition<I extends ImportMethod = ImportMethod, Args = any, Results = any> extends ImportMethod<Args, Results> {
	default: Array<ImportDefinition> | I | ImportDefinition<I> | ImportMethod<Args, Results>
	name?: string
	description?: string
	aliases?: string[]

	[key: string]: any
}

/** @category Imports */
export type ImportRecords<I extends ImportMethod = ImportMethod> = Record<string, I | ImportDefinition<I>>

/** @category Imports */
export type RecordOfImportRecords<I extends ImportMethod = ImportMethod> = Record<string, ImportRecords<I>>

export type RawImports<I extends ImportMethod = ImportMethod> = ImportRecords<I> | RecordOfImportRecords<I> | any

/** @category Imports */
export interface ParsedImport<I extends ImportMethod = ImportMethod> {
	name: string
	aliases: string[]
	description?: string
	handler: I
}

export type ParsedImportRecords<I extends ImportMethod = ImportMethod> = Record<string, ParsedImport<I>>

export interface UnparsedImport<I extends ImportMethod = ImportMethod> {
	name?: string
	aliases?: string[]
	alias?: string
	description?: string
	describe?: string
	handler?: I
	method?: I
	default?: I
	run?: I
}

/**
 * Parse imports from `import * as name from 'path'` statements into a more manageable format.
 * @category Imports
 */
export function parseImports<I extends ImportMethod = ImportMethod>(imports: RawImports, parent?: string): ParsedImportRecords<I> {
	const importRecords = {}
	for (const [import_item, data] of Object.entries(imports)) {
		let parent_name = parent ? parent : ''
		let import_name: string

		if (import_item !== 'default') {
			import_name = import_item
		} else {
			import_name = parent_name
			parent_name = ''
		}

		if (isImport(data) || isImportDefinition(data)) {
			let unparsed = data as UnparsedImport

			const parsed = {} as ParsedImport
			let sub_import_name = isImportDefinition(data) && unparsed.name ? unparsed.name : import_name

			if (!sub_import_name || parent_name && sub_import_name === `${parent_name}_default`) {
				sub_import_name = parent_name
				parent_name = ''
			}

			parsed.name = parent_name ? `${parent_name}:${sub_import_name}` : sub_import_name
			parsed.aliases = arrayUnique([unparsed?.alias, ...unparsed.aliases || []].flat()).filter(Boolean)
			parsed.description = unparsed.description || unparsed.describe
			const handler = unparsed.handler || unparsed.method || unparsed.run || unparsed.default || unparsed
			if (handler && isCallable(handler)) {
				parsed.handler = handler as I
			} else {
				parsed.handler = () => {
					console.warn(`No handler found for ${parsed.name}`)
				}
			}
			importRecords[parsed.name] = parsed
		} else {
			const subtasks = parseImports(data, import_name)
			Object.assign(importRecords, subtasks)
		}
	}
	return importRecords
}
