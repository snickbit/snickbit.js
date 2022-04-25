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
export function bufferStream(blob: Blob): Promise<Buffer>;
export function bufferStream(readable: Blob | Readable | ReadableStream): Promise<Buffer>;
export function bufferStream(readable: ReadableStream): Promise<Buffer>;
export function bufferStream(inputData: Blob | Readable | ReadableStream): Promise<Buffer> {
	const chunks: any[] = []
	let _stream: Readable
	if (inputData instanceof Blob) {
		_stream = inputData.stream() as Readable
	} else {
		_stream = inputData as Readable
	}

	return new Promise((resolve, reject) => {
		_stream.on('data', chunk => chunks.push(Buffer.from(chunk)))
		_stream.on('error', err => reject(err))
		_stream.on('end', () => resolve(Buffer.concat(chunks)))
	})
}
