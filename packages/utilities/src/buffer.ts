// noinspection JSUnusedGlobalSymbols

import {isBase64} from './variables'
import {Readable} from 'stream'


/**
 * Make a buffer from a string.
 * @category Buffer
 */
export const makeBuffer = (content: string): Buffer => Buffer.from(content, isBase64(content) ? 'base64' : 'utf8')

/**
 * Make a buffer from a file stream
 * @category Buffer
 */
export function bufferStream(stream: Readable): Promise<Buffer> {
	const chunks: any[] = []
	return new Promise((resolve, reject) => {
		stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
		stream.on('error', (err) => reject(err))
		stream.on('end', () => resolve(Buffer.concat(chunks)))
	})
}

