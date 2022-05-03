# Interface: ModelSchemaRecord

Model Schema Record

**`property`** {VariableType | VariableType[]} type - The variable type of the value

**`property`** {ModelValue} default - The default value

**`property`** {boolean} required - Whether the value is required

**`property`** {string} message - Message to display when validation fails

**`property`** {ModelValidationMethod} validate - Validation method

## Table of contents

### Properties

- [default](ModelSchemaRecord.md#default)
- [message](ModelSchemaRecord.md#message)
- [required](ModelSchemaRecord.md#required)
- [type](ModelSchemaRecord.md#type)
- [validate](ModelSchemaRecord.md#validate)

## Properties

### default

• `Optional` **default**: `any`

___

### message

• `Optional` **message**: `string`

___

### required

• `Optional` **required**: `boolean`

___

### type

• **type**: `VariableType` \| `VariableType`[]

___

### validate

• `Optional` **validate**: [`ModelValidationMethod`](../README.md#modelvalidationmethod)
