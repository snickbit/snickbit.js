import {isBase64} from '@snickbit/utilities'
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
export function bufferStream(readable: Readable): Promise<Buffer> {
	return new Promise<Buffer>((resolve, reject) => {
		const chunks: Buffer[] = []
		readable.on('data', chunk => chunks.push(chunk))
		readable.once('end', () => resolve(Buffer.concat(chunks)))
		readable.once('error', reject)
	})
}
