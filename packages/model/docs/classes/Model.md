# Class: Model

**`description`** @snickbit/model Create a simple object model

## Table of contents

### Constructors

- [constructor](Model.md#constructor)

### Properties

- [append](Model.md#append)
- [data](Model.md#data)

### Accessors

- [id](Model.md#id)

### Methods

- [coalesce](Model.md#coalesce)
- [count](Model.md#count)
- [decrement](Model.md#decrement)
- [empty](Model.md#empty)
- [ensureExists](Model.md#ensureexists)
- [find](Model.md#find)
- [findKey](Model.md#findkey)
- [first](Model.md#first)
- [get](Model.md#get)
- [has](Model.md#has)
- [increment](Model.md#increment)
- [insert](Model.md#insert)
- [keys](Model.md#keys)
- [last](Model.md#last)
- [patch](Model.md#patch)
- [pull](Model.md#pull)
- [push](Model.md#push)
- [remove](Model.md#remove)
- [set](Model.md#set)
- [toJSON](Model.md#tojson)
- [toString](Model.md#tostring)
- [validate](Model.md#validate)

## Constructors

### constructor

• **new Model**(`data?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `object` |
| `options?` | `Partial`<[`ModelOptions`](../interfaces/ModelOptions.md)\> |

## Properties

### append

• **append**: `string`[] = `[]`

___

### data

• **data**: `ObjectPathBound`<`object`\>

## Accessors

### id

• `get` **id**(): [`ModelId`](../README.md#modelid)

Get the model's id

#### Returns

[`ModelId`](../README.md#modelid)

## Methods

### coalesce

▸ **coalesce**(): `any`

Get the first non-undefined property of a set

#### Returns

`any`

▸ **coalesce**(`key`, `defaultValue?`): `any`

Get the first non-undefined property of a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `defaultValue?` | `any` |

#### Returns

`any`

___

### count

▸ **count**(): `number`

Count the items in a set

#### Returns

`number`

▸ **count**(`key`): `number`

Count the items in a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |

#### Returns

`number`

___

### decrement

▸ **decrement**(`key`, `value?`): [`Model`](Model.md)

Decrement a number path

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) | `undefined` |
| `value` | `number` | `1` |

#### Returns

[`Model`](Model.md)

___

### empty

▸ **empty**(): [`Model`](Model.md)

Remove all the items in a set

#### Returns

[`Model`](Model.md)

▸ **empty**(`key`): [`Model`](Model.md)

Remove all the items in a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |

#### Returns

[`Model`](Model.md)

___

### ensureExists

▸ **ensureExists**(`key`, `value`): [`Model`](Model.md)

Set a value if it doesn't exist, do nothing if it does

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `value` | `any` |

#### Returns

[`Model`](Model.md)

___

### find

▸ **find**(`predicate`): `any`

Find specific data in the model

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

▸ **find**(`key`, `predicate`): `any`

Find specific data in the model

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

___

### findKey

▸ **findKey**(`predicate`): `any`

Find a key/index matching a value

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

▸ **findKey**(`key`, `predicate`): `any`

Find a key/index matching a value

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `predicate` | `ObjectPredicate` |

#### Returns

`any`

___

### first

▸ **first**(): `any`

Get the first value in a set

#### Returns

`any`

▸ **first**(`key?`): `any`

Get the first value in a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | [`ModelKey`](../README.md#modelkey) |

#### Returns

`any`

___

### get

▸ **get**(): `any`

Get the entire model's data

#### Returns

`any`

▸ **get**(`key`): `any`

Get a path from an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |

#### Returns

`any`

___

### has

▸ **has**(`key`): `boolean`

Tests path existence

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |

#### Returns

`boolean`

___

### increment

▸ **increment**(`key`, `value?`): [`Model`](Model.md)

Increment a number path

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) | `undefined` |
| `value` | `number` | `1` |

#### Returns

[`Model`](Model.md)

___

### insert

▸ **insert**(`key`, `value`, `at?`): [`Model`](Model.md)

Insert an item in an array path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `value` | `any` |
| `at?` | `number` |

#### Returns

[`Model`](Model.md)

___

### keys

▸ **keys**(): `string`[]

Get the keys of the data

#### Returns

`string`[]

___

### last

▸ **last**(): `any`

Get the last value in a set

#### Returns

`any`

▸ **last**(`key`): `any`

Get the last value in a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |

#### Returns

`any`

___

### patch

▸ **patch**(`data`): [`Model`](Model.md)

Patch/merge the value of a path

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

[`Model`](Model.md)

▸ **patch**(`key`, `value`): [`Model`](Model.md)

Patch/merge the value of a path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `value` | `any` |

#### Returns

[`Model`](Model.md)

___

### pull

▸ **pull**(`key`, `defaultValue?`): `any`

Get the value of a path and remove it

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `defaultValue?` | `any` |

#### Returns

`any`

___

### push

▸ **push**(`key`, ...`values`): [`Model`](Model.md)

Push a value to an array path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `...values` | `any`[] |

#### Returns

[`Model`](Model.md)

___

### remove

▸ **remove**(`key`): [`Model`](Model.md)

Remove a value from a path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |

#### Returns

[`Model`](Model.md)

___

### set

▸ **set**(`data`): [`Model`](Model.md)

Overwrite the entire object

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

[`Model`](Model.md)

▸ **set**(`key`, `value`, `overwrite?`): [`Model`](Model.md)

Set the value of a key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `value` | `any` |
| `overwrite?` | `boolean` |

#### Returns

[`Model`](Model.md)

___

### toJSON

▸ **toJSON**(): `any`

Convert the model to a JSON object. This is the same as calling `.get()

#### Returns

`any`

___

### toString

▸ **toString**(): `string`

Convert the model to a JSON string

#### Returns

`string`

___

### validate

▸ **validate**(): `Promise`<``true`` \| `any`[]\>

Validate the model against the schema

#### Returns

`Promise`<``true`` \| `any`[]\>
