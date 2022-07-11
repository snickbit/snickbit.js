# Class: QueueError

## Hierarchy

- `Error`

  ↳ **`QueueError`**

  ↳↳ [`QueueException`](QueueException.md)

  ↳↳ [`AbortQueueError`](AbortQueueError.md)

## Table of contents

### Constructors

- [constructor](QueueError.md#constructor)

### Properties

- [data](QueueError.md#data)
- [errors](QueueError.md#errors)
- [spread](QueueError.md#spread)
- [type](QueueError.md#type)

### Methods

- [toJSON](QueueError.md#tojson)

## Constructors

### constructor

• **new QueueError**(`err`, `name`, `_data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`ErrorMessage`](../README.md#errormessage) |
| `name` | `string` |
| `_data` | `any` |

#### Overrides

Error.constructor

## Properties

### data

• `Readonly` **data**: `any`

___

### errors

• `Readonly` **errors**: `any`

___

### spread

• `Readonly` **spread**: ``false``

___

### type

• `Readonly` **type**: `string`

## Methods

### toJSON

▸ **toJSON**(): [`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)

#### Returns

[`QueueErrorJSON`](../interfaces/QueueErrorJSON.md)
