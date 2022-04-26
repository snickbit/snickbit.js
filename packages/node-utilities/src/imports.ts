import {isObject, objectExcept} from '@snickbit/utilities'

/**
 * @internal
 */
const isImport = (data: any) => typeof data === 'function' || data?.constructor.name === 'AsyncFunction' || Array.isArray(data)

/** @internal */
const isImportDefinition = (data: any) => 'run' in data || 'handler' in data || 'default' in data

export type AnyFunction = (...args: any[]) => any

export type IObject = {
	[key: string]: any
}

/** @category Imports */
export interface ImportDefinition {
	default: IObject | AnyFunction | Array<any>
	name?: string

	[key: string]: any

	(...args: any[]): any
}

/** @category Imports */
export type ImportRecords = Record<string, ImportDefinition>

/** @category Imports */
export type RecordOfImportRecords = Record<string, ImportRecords>

/** @category Imports */
export type ImportRecord = Record<string, AnyFunction>

/**
 * Parse imports from `import * as name from 'path'` statements into a more manageable format.
 * @category Imports
 */
export function parseImports(imports: ImportRecords | RecordOfImportRecords, parent?: string): ImportRecord {
	const importRecords = {}
	for (const [importItem, data] of Object.entries(imports)) {
		const parent_name = parent ? parent : ''
		const importName = importItem !== 'default' ? importItem : ''
		if (isImport(data) || isImportDefinition(data)) {
			const subImportName = data.name || importName
			const t = isObject(data) ? objectExcept(data, ['run', 'handler', 'default']) : {}
			t.name = parent_name ? `${parent_name}:${subImportName}` : subImportName
			t.handler = data.run || data.handler || data.default || data
			importRecords[t.name] = t
		} else {
			const subtasks = parseImports(data, importName)
			Object.assign(importRecords, subtasks)
		}
	}
	return importRecords
}
