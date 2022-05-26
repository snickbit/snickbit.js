export type BasicVariableType = 'bigint' | 'boolean' | 'number' | 'string'
export const basic: BasicVariableType[] = [
	'bigint',
	'boolean',
	'number',
	'string'
]

export type EmptyVariableType = 'null' | 'undefined'
export const empty: EmptyVariableType[] = ['undefined', 'null']

export type AdvancedVariableType = 'array' | 'date' | 'object' | 'symbol'
export const advanced: AdvancedVariableType[] = [
	'array',
	'object',
	'symbol',
	'date'
]

export type CallableVariableType = 'asyncfunction' | 'function' | 'promise'
export const callable: CallableVariableType[] = ['promise', 'asyncfunction', 'function']

export type PrimitiveVariableType = BasicVariableType | EmptyVariableType
export const primitive: PrimitiveVariableType[] = [...basic, ...empty]

export type VariableType = AdvancedVariableType | CallableVariableType | PrimitiveVariableType
export const all: VariableType[] = [...primitive, ...advanced, ...callable]

export default {
	all,
	basic,
	empty,
	primitive,
	advanced,
	callable
}
