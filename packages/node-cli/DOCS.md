# Class: Cli

Simple Node.js CLI framework for creating command line applications.

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
- [arg](Cli.md#arg)
- [args](Cli.md#args)
- [banner](Cli.md#banner)
- [defaultAction](Cli.md#defaultaction)
- [hideBanner](Cli.md#hidebanner)
- [includeWorkingPackage](Cli.md#includeworkingpackage)
- [name](Cli.md#name)
- [noBail](Cli.md#nobail)
- [option](Cli.md#option)
- [options](Cli.md#options)
- [run](Cli.md#run)
- [version](Cli.md#version)

## Constructors

### constructor

• **new Cli**(`name?`)

Create a new Cli instance.

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

Add a new action

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

▸ **actions**(`actions`): [`Cli`](Cli.md)

Add new actions. Will override existing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `StateActions` |

#### Returns

[`Cli`](Cli.md)

___

### arg

▸ **arg**(`key`, `arg`): [`Cli`](Cli.md)

Add new positional argument

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `arg` | `Partial`<`StateArg`\> |

#### Returns

[`Cli`](Cli.md)

___

### args

▸ **args**(`args`): [`Cli`](Cli.md)

Add new positional arguments. Will override existing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `StateArgs` |

#### Returns

[`Cli`](Cli.md)

___

### banner

▸ **banner**(`message`): [`Cli`](Cli.md)

Set the description / banner message of the application

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Cli`](Cli.md)

___

### defaultAction

▸ **defaultAction**(`name`): [`Cli`](Cli.md)

Set the default action

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Cli`](Cli.md)

___

### hideBanner

▸ **hideBanner**(`value?`): [`Cli`](Cli.md)

Hide the banner message

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `true` |

#### Returns

[`Cli`](Cli.md)

___

### includeWorkingPackage

▸ **includeWorkingPackage**(`value?`): [`Cli`](Cli.md)

Attempt to pull the name and version from the closest package.json file to the current working directory.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `true` |

#### Returns

[`Cli`](Cli.md)

___

### name

▸ **name**(`name`): [`Cli`](Cli.md)

Set the name of the application

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Cli`](Cli.md)

___

### noBail

▸ **noBail**(`value?`): [`Cli`](Cli.md)

Don't kill the process on error

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `boolean` | `false` |

#### Returns

[`Cli`](Cli.md)

___

### option

▸ **option**(`key`, `option`): [`Cli`](Cli.md)

Add a new flag/option

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `option` | `Partial`<`StateOption`\> |

#### Returns

[`Cli`](Cli.md)

___

### options

▸ **options**(`options`): [`Cli`](Cli.md)

Add new flags/options. Will override existing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `StateOptions` |

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

### version

▸ **version**(`version`): [`Cli`](Cli.md)

Set the version of the application

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` \| `number` |

#### Returns

[`Cli`](Cli.md)
