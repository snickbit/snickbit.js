import {isObject, objectExcept} from '@snickbit/utilities'

/**
 * @internal
 */
const isImport = (data: any) => typeof data === 'function' || data?.constructor.name === 'AsyncFunction' || Array.isArray(data)

/**
 * @internal
 */
const isImportDefinition = (data: any) => data?.hasOwnProperty('run') || data?.hasOwnProperty('handler') || data?.hasOwnProperty('default')

/** @category Imports */
export interface ImportDefinition {
	default: Object | Function | Array<any>
	name?: string

	[key: string]: Object | Function | Array<any>
}

/** @category Imports */
export type ImportRecords = Record<string, ImportDefinition>

/** @category Imports */
export type RecordOfImportRecords = Record<string, ImportRecords>

/** @category Imports */
export type ImportRecord = Record<string, Function>

/**
 * Parse imports from `import * as name from 'path'` statements into a more manageable format.
 * @category Imports
 */
export function parseImports(imports: ImportRecords | RecordOfImportRecords, parent?: string): ImportRecord {
	let importRecords = {}
	for (let [importItem, data] of Object.entries(imports)) {
		let parent_name = parent ? parent : ''
		let importName = importItem !== 'default' ? importItem : ''
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
