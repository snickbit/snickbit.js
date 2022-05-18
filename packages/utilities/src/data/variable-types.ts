export type BasicVariableType = 'bigint' | 'boolean' | 'number' | 'string';
export const basic: BasicVariableType[] = [
	'bigint',
	'boolean',
	'number',
	'string'
]

export type EmptyVariableType = 'undefined' | 'null';
export const empty: EmptyVariableType[] = [
	'undefined',
	'null'
]

export type AdvancedVariableType = 'array' | 'object' | 'symbol' | 'date';
export const advanced: AdvancedVariableType[] = [
	'array',
	'object',
	'symbol',
	'date'
]

export type CallableVariableType = 'promise' | 'asyncfunction' | 'function';
export const callable: CallableVariableType[] = [
	'promise',
	'asyncfunction',
	'function'
]

export type PrimitiveVariableType = BasicVariableType | EmptyVariableType;
export const primitive: PrimitiveVariableType[] = [
	...basic,
	...empty
]

export type VariableType = PrimitiveVariableType | AdvancedVariableType | CallableVariableType;
export const all: VariableType[] = [
	...primitive,
	...advanced,
	...callable
]

export default {
	all,
	basic,
	empty,
	primitive,
	advanced,
	callable
}
