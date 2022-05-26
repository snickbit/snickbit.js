# Class: Model<T, D\>

Create a simple object model

**`description`** @snickbit/model

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |
| `D` | `Partial`<`T`\> |

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
- [getError](Model.md#geterror)
- [has](Model.md#has)
- [hasError](Model.md#haserror)
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

• **new Model**<`T`, `D`\>(`data?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `any` |
| `D` | `Partial`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `T` |
| `options?` | `Partial`<[`ModelOptions`](../interfaces/ModelOptions.md)\> |

## Properties

### append

• **append**: `string`[] = `[]`

___

### data

• **data**: `ObjectPathBound`<`T`\>

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

▸ **decrement**(`key`, `value?`): [`Model`](Model.md)<`T`, `D`\>

Decrement a number path

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) | `undefined` |
| `value` | `number` | `1` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

___

### empty

▸ **empty**(): [`Model`](Model.md)<`T`, `D`\>

Remove all the items in a set

#### Returns

[`Model`](Model.md)<`T`, `D`\>

▸ **empty**(`key`): [`Model`](Model.md)<`T`, `D`\>

Remove all the items in a set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

___

### ensureExists

▸ **ensureExists**(`key`, `value`): [`Model`](Model.md)<`T`, `D`\>

Set a value if it doesn't exist, do nothing if it does

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `value` | `any` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

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
| `key` | `undefined` \| [`ModelKey`](../README.md#modelkey) |

#### Returns

`any`

___

### getError

▸ **getError**(`key`): `string`

Get the error for a key, if there is one

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

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

### hasError

▸ **hasError**(`key`): `boolean`

Check if a key has an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

___

### increment

▸ **increment**(`key`, `value?`): [`Model`](Model.md)<`T`, `D`\>

Increment a number path

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) | `undefined` |
| `value` | `number` | `1` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

___

### insert

▸ **insert**(`key`, `value`, `at?`): [`Model`](Model.md)<`T`, `D`\>

Insert an item in an array path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `value` | `any` |
| `at?` | `number` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

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

▸ **patch**(`data`): [`Model`](Model.md)<`T`, `D`\>

Patch/merge the value of a path

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `D` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

▸ **patch**(`key`, `value`): [`Model`](Model.md)<`T`, `D`\>

Patch/merge the value of a path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `value` | `any` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

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

▸ **push**(`key`, ...`values`): [`Model`](Model.md)<`T`, `D`\>

Push a value to an array path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |
| `...values` | `any`[] |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

___

### remove

▸ **remove**(`key`): [`Model`](Model.md)<`T`, `D`\>

Remove a value from a path

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ModelKey`](../README.md#modelkey) |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

___

### set

▸ **set**(`data`): [`Model`](Model.md)<`T`, `D`\>

Overwrite the entire object

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` \| `D` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

▸ **set**(`key`, `value`, `overwrite?`): [`Model`](Model.md)<`T`, `D`\>

Set the value of a key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `undefined` \| [`ModelKey`](../README.md#modelkey) |
| `value` | `any` |
| `overwrite?` | `boolean` |

#### Returns

[`Model`](Model.md)<`T`, `D`\>

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

▸ **validate**(): `Promise`<``true`` \| [`ModelErrors`](../README.md#modelerrors)\>

Validate the model against the schema

**`throws`** {Error} If the model is invalid and strict mode is enabled

#### Returns

`Promise`<``true`` \| [`ModelErrors`](../README.md#modelerrors)\>
