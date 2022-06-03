import {arrayUnique, isObject} from '@snickbit/utilities'

/** @category Imports */
export const isImport = (data: any) => typeof data === 'function' || data?.constructor.name === 'AsyncFunction' || Array.isArray(data)

/** @category Imports */
export const isImportDefinition = (data: any) => data && data['run'] || data['handler'] || data['method']

export type AnyFunction = (...args: any[]) => Promise<any> | any

export type IObject = Record<string, any>

/** @category Imports */
export interface ImportDefinition {
	default: AnyFunction | Array<any> | IObject
	name?: string
	description?: string
	describe?: string

	[key: string]: any

	(...args: any[]): any
}

/** @category Imports */
export type ImportRecords = Record<string, AnyFunction | ImportDefinition>

/** @category Imports */
export type RecordOfImportRecords = Record<string, ImportRecords>

/** @category Imports */
export interface ParsedImport {
	name: string
	aliases: string[]
	description?: string
	handler: AnyFunction
}

export type ParsedImportRecords = Record<string, ParsedImport>

export interface UnparsedImport {
	name?: string
	aliases?: string[]
	alias?: string
	description?: string
	describe?: string
	handler?: AnyFunction
	method?: AnyFunction
	default?: AnyFunction
	run?: AnyFunction
}

/**
 * Parse imports from `import * as name from 'path'` statements into a more manageable format.
 * @category Imports
 */
export function parseImports(imports: ImportRecords | RecordOfImportRecords, parent?: string): ParsedImportRecords {
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
			const handler = unparsed.handler || unparsed.method || unparsed.run || unparsed.default
			if (handler) {
				parsed.handler = handler
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
