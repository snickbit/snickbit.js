import {isObject, objectExcept} from '@snickbit/utilities'

/** @category Imports */
export const isImport = (data: any) => typeof data === 'function' || data?.constructor.name === 'AsyncFunction' || Array.isArray(data)

/** @category Imports */
export const isImportDefinition = (data: any) => 'run' in data || 'handler' in data || 'default' in data

export type AnyFunction = (...args: any[]) => any

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
	description?: string
	handler: AnyFunction
}

export type ParsedImportRecords = Record<string, ParsedImport>

/**
 * Parse imports from `import * as name from 'path'` statements into a more manageable format.
 * @category Imports
 */
export function parseImports(imports: ImportRecords | RecordOfImportRecords, parent?: string): ParsedImportRecords {
	const importRecords = {}
	for (const [importItem, data] of Object.entries(imports)) {
		const parent_name = parent ? parent : ''
		const importName = importItem !== 'default' ? importItem : ''
		if (isImport(data) || isImportDefinition(data)) {
			const subImportName = data.name || importName
			const t = isObject(data) ? objectExcept(data, ['run', 'handler', 'default']) : {}
			t.name = parent_name ? `${parent_name}:${subImportName}` : subImportName
			t.description = t.description || t.describe
			t.handler = data.run || data.handler || data.default || data
			importRecords[t.name] = t
		} else {
			const subtasks = parseImports(data, importName)
			Object.assign(importRecords, subtasks)
		}
	}
	return importRecords
}
