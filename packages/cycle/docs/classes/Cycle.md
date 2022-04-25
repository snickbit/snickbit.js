# Class: Cycle

## Table of contents

### Constructors

- [constructor](Cycle.md#constructor)

### Properties

- [index](Cycle.md#index)
- [items](Cycle.md#items)

### Accessors

- [currentIndex](Cycle.md#currentindex)
- [firstIndex](Cycle.md#firstindex)
- [lastIndex](Cycle.md#lastindex)
- [nextIndex](Cycle.md#nextindex)
- [prevIndex](Cycle.md#previndex)

### Methods

- [current](Cycle.md#current)
- [first](Cycle.md#first)
- [get](Cycle.md#get)
- [getIndex](Cycle.md#getindex)
- [last](Cycle.md#last)
- [next](Cycle.md#next)
- [prev](Cycle.md#prev)
- [push](Cycle.md#push)
- [remove](Cycle.md#remove)
- [set](Cycle.md#set)
- [shuffle](Cycle.md#shuffle)

## Constructors

### constructor

• **new Cycle**(`items?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `items?` | `any`[] |

• **new Cycle**(`preset?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `preset?` | `string` |

• **new Cycle**(`itemsOrPreset?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemsOrPreset?` | `string` \| `any`[] |

## Properties

### index

• **index**: `number`

___

### items

• **items**: `any`[] = `[]`

## Accessors

### currentIndex

• `get` **currentIndex**(): `number`

#### Returns

`number`

___

### firstIndex

• `get` **firstIndex**(): `number`

#### Returns

`number`

___

### lastIndex

• `get` **lastIndex**(): `number`

#### Returns

`number`

___

### nextIndex

• `get` **nextIndex**(): `number`

#### Returns

`number`

___

### prevIndex

• `get` **prevIndex**(): `number`

#### Returns

`number`

## Methods

### current

▸ **current**(): `any`

#### Returns

`any`

___

### first

▸ **first**(`save?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `save` | `boolean` | `false` |

#### Returns

`any`

___

### get

▸ **get**(`index`, `save?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `save` | `boolean` | `false` |

#### Returns

`any`

___

### getIndex

▸ **getIndex**(`index`, `save?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `save` | `boolean` | `true` |

#### Returns

`any`

___

### last

▸ **last**(`save?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `save` | `boolean` | `false` |

#### Returns

`any`

___

### next

▸ **next**(`save?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `save?` | `boolean` |

#### Returns

`any`

___

### prev

▸ **prev**(`save?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `save?` | `boolean` |

#### Returns

`any`

___

### push

▸ **push**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

___

### remove

▸ **remove**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

___

### set

▸ **set**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `any` |

#### Returns

`void`

___

### shuffle

▸ **shuffle**(): `void`

#### Returns

`void`
