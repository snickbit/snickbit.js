import {JSONParse, parseOptions} from '@snickbit/utilities'
import fs, {PathLike, PathOrFileDescriptor, WriteFileOptions} from 'fs'
import path from 'path'

/**
 * Save file to disk as JSON
 * @category Files
 */
export const saveFileJson = (filepath: PathOrFileDescriptor, content: any, options: WriteFileOptions = 'utf8') => saveFile(filepath, `${JSON.stringify(content, null, '\t')}\n`, options)

/** @category Files */
export const fileExists = (filepath: PathLike) => fs.existsSync(filepath)

/** @category Files */
export const isDirectory = (filepath: PathLike) => fileExists(filepath) && fs.lstatSync(filepath).isDirectory()

/**
 * Save file to disk
 * @category Files
 */
export function saveFile(filepath: PathOrFileDescriptor, content: NodeJS.ArrayBufferView | string, options: WriteFileOptions = 'utf8') {
	if (!fs.existsSync(path.dirname(filepath as string))) {
		fs.mkdirSync(path.dirname(filepath as string), {recursive: true})
	}
	return fs.writeFileSync(filepath, content, options)
}

/**
 * Get file content
 * @category Files
 */
export function getFile(filepath: PathLike, fallback?: any) {
	filepath = path.normalize(filepath as string)
	return fs.existsSync(filepath) ? fs.readFileSync(filepath, 'utf8') : fallback
}

/**
 * Make a directory
 * @category Files
 */
export function mkdir(dir_path: PathLike, options = {recursive: true}) {
	dir_path = path.normalize(dir_path as string)
	if (!fs.existsSync(dir_path)) {
		fs.mkdirSync(dir_path, options)
	}
}

/** @category Files */
export function unlink(filepath: PathLike) {
	filepath = path.normalize(filepath as string)
	if (fs.existsSync(filepath)) {
		fs.unlinkSync(filepath)
	}
}

/**
 * Get JSON from file
 * @category Files
 */
export function getFileJson(filepath: PathLike, fallback?: any) {
	const content = getFile(filepath)
	return content ? JSONParse(content, fallback) : fallback
}

/** @category Files */
export interface FindUpOptions {
	distance: number
	d: number
	cwd: string
}

/** @category Files */
export function findUp(name: PathLike | string, options?: Partial<FindUpOptions> | boolean | string): any {
	options = parseOptions(options, {
		cwd: process.cwd(),
		distance: false
	}, 'cwd') as FindUpOptions
	options.d = options.d || 0

	const directory = path.resolve(options.cwd || '')
	const parsed = path.parse(directory)
	const resolved = path.join(directory, name as string)
	if (fileExists(resolved)) {
		return options.distance ? {
			path: resolved,
			distance: options.d
		} : resolved
	} else if (parsed.root === directory) {
		return null
	}
	options.d++
	options.cwd = path.dirname(directory)
	return findUp(name, options)
}
