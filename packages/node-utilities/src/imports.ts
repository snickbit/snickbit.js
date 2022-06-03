import {arrayUnique, isCallable} from '@snickbit/utilities'

/** @category Imports */
export const isImport = (data: any) => typeof data === 'function' || data?.constructor.name === 'AsyncFunction' || Array.isArray(data)

/** @category Imports */
export const isImportDefinition = (data: any) => data && data['run'] || data['handler'] || data['method']

export type AnyFunction<Args = any, Results = any> = (...args: Args[]) => Promise<Results> | Results

export type ImportMethod<Args = any, Results = any> = (...args: Args[]) => Promise<Results> | Results

export type IObject<T = any> = Record<string, T>

/** @category Imports */
export interface ImportDefinition<Args = any, Results = any> {
	default: Array<ImportDefinition> | ImportDefinition<Args, Results> | ImportMethod<Args, Results>
	name?: string
	description?: string
	aliases?: string[]

	[key: string]: any

	(...args: Args[]): Promise<Results> | Results
}

/** @category Imports */
export type ImportRecords<Args = any, Results = any> = Record<string, ImportDefinition | ImportMethod<Args, Results>>

/** @category Imports */
export type RecordOfImportRecords<Args = any, Results = any> = Record<string, ImportRecords<Args, Results>>

export type RawImports<Args = any, Results = any> = ImportRecords<Args, Results> | RecordOfImportRecords<Args, Results> | any

/** @category Imports */
export interface ParsedImport<Args = any, Results = any> {
	name: string
	aliases: string[]
	description?: string
	handler: ImportMethod<Args, Results>
}

export type ParsedImportRecords<Args = any, Results = any> = Record<string, ParsedImport<Args, Results>>

export interface UnparsedImport {
	name?: string
	aliases?: string[]
	alias?: string
	description?: string
	describe?: string
	handler?: ImportMethod
	method?: ImportMethod
	default?: ImportMethod
	run?: ImportMethod
}

/**
 * Parse imports from `import * as name from 'path'` statements into a more manageable format.
 * @category Imports
 */
export function parseImports<Args = any, Results = any>(imports: RawImports, parent?: string): ParsedImportRecords<Args, Results> {
	const importRecords = {}
	for (const [importItem, data] of Object.entries(imports)) {
		let parent_name = parent ? parent : ''
		let importName = importItem !== 'default' ? importItem : ''

		if (isImport(data) || isImportDefinition(data)) {
			let unparsed = data as UnparsedImport

			const parsed = {} as ParsedImport
			let subImportName = unparsed.name || importName

			if (!subImportName || parent_name && subImportName === `${parent_name}_default`) {
				subImportName = parent_name
				parent_name = ''
			}

			parsed.name = parent_name ? `${parent_name}:${subImportName}` : subImportName
			parsed.aliases = arrayUnique([unparsed?.alias, ...unparsed.aliases || []].flat()).filter(Boolean)
			parsed.description = unparsed.description || unparsed.describe
			const handler = unparsed.handler || unparsed.method || unparsed.run || unparsed.default || unparsed
			if (handler && isCallable(handler)) {
				parsed.handler = handler as ImportMethod<Args, Results>
			} else {
				parsed.handler = () => {
					console.warn(`No handler found for ${parsed.name}`)
				}
			}
			importRecords[parsed.name] = parsed
		} else {
			const subtasks = parseImports(data, importName)
			Object.assign(importRecords, subtasks)
		}
	}
	return importRecords
}
