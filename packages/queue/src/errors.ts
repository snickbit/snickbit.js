export interface QueueErrorJSON {
	name: string
	message: string
	data?: any
	errors?: any
}

export type DynamicError = Error & Record<string, any>
export type ErrorMessage = any[] | DynamicError | Record<string, any> | string

interface ErrorProperties extends Omit<QueueErrorJSON, 'message'> {
	type: string
}

/**
 * @noInheritDoc
 */
export class QueueError extends Error {
	readonly type: string

	readonly data: any

	readonly errors: any

	constructor(err: ErrorMessage, name: string, _data: any) {
		let msg = typeof err === 'string' ? err : 'Error'
		const properties: ErrorProperties = {
			name,
			type: 'QueueError'
		}

		if (Array.isArray(_data)) {
			properties.data = _data
		} else if (typeof err === 'object' || _data !== undefined) {
			const {message, errors, ...rest} = typeof err === 'object' ? err : _data

			msg = message || msg
			properties.errors = errors
			properties.data = rest
		}

		super(msg)
		Object.assign(this, properties)
	}

	toJSON() {
		const result: QueueErrorJSON = {
			name: this.name,
			message: this.message
		}

		if (this.data !== undefined) {
			result.data = this.data
		}

		if (this.errors !== undefined) {
			result.errors = this.errors
		}

		return result
	}
}

/**
 * @noInheritDoc
 */
export class QueueException extends QueueError {
	constructor(message?: ErrorMessage, data?: any) {
		super(message || 'An exception has occurred', 'QueueException', data)
	}
}

/**
 * @noInheritDoc
 */
export class AbortQueueError extends QueueError {
	constructor(message?: ErrorMessage, data?: any) {
		super(message || 'The queue has been aborted', 'AbortQueueError', data)
	}
}
