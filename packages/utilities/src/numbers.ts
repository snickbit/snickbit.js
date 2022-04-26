/**
 * Pad a number with zeros.
 * @category Numbers
 */
export const numberPad = (n: number): string | number => (n < 10 ? '0' + n : n)

/**
 * Format a number as bytes.
 * @category Numbers
 */
export function formatBytes(bytes: number, decimals = 2): string {
	if (bytes === 0) return '0 Bytes'

	const k = 1000
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

/**
 * Format a number as currency.
 * @category Numbers
 */
export const formatCurrency = (amount: number, symbol = '$', decimals = 2) => symbol + parseFloat(String(amount || '0')).toFixed(decimals)

/**
 * Format a number as a percentage.
 * @category Numbers
 */
export const formatPercentage = (amount: number, decimals = 2) => parseFloat(String(amount || '0')).toFixed(decimals) + '%'

/**
 * limit the amount of decimals to the given number, default 2
 * @category Numbers
 */
export const maxDecimals = (value: number, max_places = 2) => +parseFloat(String(value)).toFixed(max_places)
