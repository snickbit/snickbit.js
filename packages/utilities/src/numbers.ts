/**
 * Pad a number with zeros.
 * @param num - The number to pad.
 * @param [length=2] - The length of the resulting string.
 * @category Numbers
 */
export function numberPad(num: number | string, length = 2): string {
	num = String(num)
	const pad_length = length - num.length
	return pad_length > 0 ? '0'.repeat(pad_length) + num : num
}

/**
 * Format a number in bytes.
 * @param bytes - The number of bytes.
 * @param [decimals=2] - The number of decimals.
 * @category Numbers
 */
export function formatBytes(bytes: number, decimals = 2): string {
	if (bytes === 0) {
		return '0 Bytes'
	}

	const k = 1000
	const dm = decimals < 0 ? 0 : decimals
	const sizes = [
		'Bytes',
		'KB',
		'MB',
		'GB',
		'TB',
		'PB',
		'EB',
		'ZB',
		'YB'
	]

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

/**
 * Format a number as currency.
 * @param amount - The number to format.
 * @param [symbol='$'] - The currency symbol.
 * @param [decimals=2] - The number of decimals.
 * @category Numbers
 */
export const formatCurrency = (amount: number, symbol = '$', decimals = 2) => symbol + parseFloat(String(amount || '0')).toFixed(decimals)

/**
 * Format a number as a percentage.
 * @param amount - The number to format.
 * @param [decimals=2] - The number of decimals to show.
 * @category Numbers
 */
export const formatPercentage = (amount: number, decimals = 2) => `${parseFloat(String(amount || '0')).toFixed(decimals)}%`

/**
 * limit the amount of decimals to the given number
 * @param value - the number to limit
 * @param [max_places=2] - the maximum number of decimals
 * @category Numbers
 */
export const maxDecimals = (value: number, max_places = 2) => +parseFloat(String(value)).toFixed(max_places)

/**
 * Generate a random number between min and max.
 * @param min - The minimum number.
 * @param max - The maximum number.
 * @param [inclusive=true] - Whether to include the max value in the range.
 * @category Numbers
 */
export function randomBetween(min: number, max: number, inclusive = true): number {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + (inclusive ? 1 : 0)) + min)
}
