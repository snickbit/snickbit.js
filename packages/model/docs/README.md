# @snickbit/model

## Table of contents

### Classes

- [Model](classes/Model.md)

### Interfaces

- [ModelOptions](interfaces/ModelOptions.md)
- [ModelSchema](interfaces/ModelSchema.md)
- [ModelSchemaRecord](interfaces/ModelSchemaRecord.md)

### Type Aliases

- [ModelErrors](README.md#modelerrors)
- [ModelId](README.md#modelid)
- [ModelKey](README.md#modelkey)
- [ModelPath](README.md#modelpath)
- [ModelValidationMethod](README.md#modelvalidationmethod)
- [ModelValue](README.md#modelvalue)

### Functions

- [model](README.md#model)

## Type Aliases

### ModelErrors

Ƭ **ModelErrors**: `Record`<`string`, `string`\>

___

### ModelId

Ƭ **ModelId**: `number` \| `string` \| `undefined`

___

### ModelKey

Ƭ **ModelKey**: [`ModelPath`](README.md#modelpath)[] \| [`ModelPath`](README.md#modelpath)

___

### ModelPath

Ƭ **ModelPath**: `number` \| `string` \| `symbol`

___

### ModelValidationMethod

Ƭ **ModelValidationMethod**: (`key`: `string`, `value`: [`ModelValue`](README.md#modelvalue)) => `boolean`

#### Type declaration

▸ (`key`, `value`): `boolean`

Model Validation Method

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the property being validated |
| `value` | [`ModelValue`](README.md#modelvalue) | The value of the property being validated |

##### Returns

`boolean`

___

### ModelValue

Ƭ **ModelValue**: `any`

## Functions

### model

▸ **model**<`T`\>(`data`, `options?`): [`Model`](classes/Model.md)<`T`, `Partial`<`T`\>\>

Create a simple object model

**`description`** @snickbit/model

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `options?` | `Partial`<[`ModelOptions`](interfaces/ModelOptions.md)\> |

#### Returns

[`Model`](classes/Model.md)<`T`, `Partial`<`T`\>\>
