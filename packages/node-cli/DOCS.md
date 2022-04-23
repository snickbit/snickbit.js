# Class: Cli

## Table of contents

### Constructors

- [constructor](Cli.md#constructor)

### Properties

- [state](Cli.md#state)

### Accessors

- [out](Cli.md#out)

### Methods

- [action](Cli.md#action)
- [actions](Cli.md#actions)
- [addAction](Cli.md#addaction)
- [addActionArgument](Cli.md#addactionargument)
- [arg](Cli.md#arg)
- [args](Cli.md#args)
- [banner](Cli.md#banner)
- [#cleanState](Cli.md#cleanstate)
- [defaultAction](Cli.md#defaultaction)
- [getMethod](Cli.md#getmethod)
- [hideBanner](Cli.md#hidebanner)
- [includeWorkingPackage](Cli.md#includeworkingpackage)
- [name](Cli.md#name)
- [noBail](Cli.md#nobail)
- [option](Cli.md#option)
- [options](Cli.md#options)
- [run](Cli.md#run)
- [#runAction](Cli.md#runaction)
- [version](Cli.md#version)

## Constructors

### constructor

• **new Cli**(`name?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

## Properties

### state

• **state**: `State`

## Accessors

### out

• `get` **out**(): `Out`

#### Returns

`Out`

## Methods

### action

▸ **action**(`action`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `ActionDefinition` |

#### Returns

[`Cli`](Cli.md)

▸ **action**(`name`, `description`, `method`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `description` | `any` |
| `method` | `any` |

#### Returns

[`Cli`](Cli.md)

___

### actions

▸ **actions**(`opts`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `any` |

#### Returns

[`Cli`](Cli.md)

___

### addAction

▸ **addAction**(`opts`, `parent?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `opts` | `any` | `undefined` |
| `parent` | `any` | `null` |

#### Returns

`void`

___

### addActionArgument

▸ **addActionArgument**(): `void`

#### Returns

`void`

___

### arg

▸ **arg**(`key`, `opt`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `opt` | `any` |

#### Returns

[`Cli`](Cli.md)

___

### args

▸ **args**(`opts`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `any` |

#### Returns

[`Cli`](Cli.md)

___

### banner

▸ **banner**(`message`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

[`Cli`](Cli.md)

___

### #cleanState

▸ **#cleanState**(): `void`

#### Returns

`void`

___

### defaultAction

▸ **defaultAction**(`name`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Cli`](Cli.md)

___

### getMethod

▸ **getMethod**(`opts`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `any` |

#### Returns

`any`

___

### hideBanner

▸ **hideBanner**(`value?`): [`Cli`](Cli.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `true` |

#### Returns

[`Cli`](Cli.md)

___

### includeWorkingPackage

▸ **includeWorkingPackage**(`value?`): [`Cli`](Cli.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `true` |

#### Returns

[`Cli`](Cli.md)

___

### name

▸ **name**(`name`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

[`Cli`](Cli.md)

___

### noBail

▸ **noBail**(`value?`): [`Cli`](Cli.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `false` |

#### Returns

[`Cli`](Cli.md)

___

### option

▸ **option**(`key`, `opt`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `opt` | `any` |

#### Returns

[`Cli`](Cli.md)

___

### options

▸ **options**(`opts`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `any` |

#### Returns

[`Cli`](Cli.md)

___

### run

▸ **run**(`callback`): `Promise`<`any`\>

Run the CLI program, parsing the argv, and running any defined actions

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`Promise`<`any`\>

___

### #runAction

▸ **#runAction**(`args`): `Promise`<`any`\>

Run an action defined in the CLI program

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `IObject` |

#### Returns

`Promise`<`any`\>

___

### version

▸ **version**(`version`): [`Cli`](Cli.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `any` |

#### Returns

[`Cli`](Cli.md)
