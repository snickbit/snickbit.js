# Interface: ModelOptions

Model Options

**`property`** {ModelId} id - The id of the model. Stored separately from the model itself.

**`property`** {string} name - The name of the model (class). Intended for extending the Model class, but can be used to identify the model.

**`property`** {boolean} autoId - Automatically generate an id for the model.

**`property`** {ModelSchema} schema - The schema of the model. Used to validate the model.

**`property`** {boolean} strict - The schema of the model. Used to validate the model.

**`property`** {boolean} timestamps - Automatically generate timestamps _created and _updated for the model. Stored with the model.

**`property`** {string|null} root - Define a root path for the model. All paths/keys will be prefixed with this path unless they are prefixed with a dot ".".

## Table of contents

### Properties

- [autoId](ModelOptions.md#autoid)
- [id](ModelOptions.md#id)
- [name](ModelOptions.md#name)
- [root](ModelOptions.md#root)
- [schema](ModelOptions.md#schema)
- [strict](ModelOptions.md#strict)
- [timestamps](ModelOptions.md#timestamps)

## Properties

### autoId

• **autoId**: `boolean`

___

### id

• **id**: [`ModelId`](../README.md#modelid)

___

### name

• **name**: `string`

___

### root

• **root**: `string`

___

### schema

• **schema**: `Partial`<[`ModelSchema`](ModelSchema.md)\>

___

### strict

• **strict**: `boolean`

___

### timestamps

• **timestamps**: `boolean`
