# @snickbit/node-utilities

## Table of contents

### Progress Classes

- [MultiProgress](classes/MultiProgress.md)
- [Progress](classes/Progress.md)

### Spinner Classes

- [Spinner](classes/Spinner.md)

### Files Interfaces

- [FindUpOptions](interfaces/FindUpOptions.md)

### Imports Interfaces

- [ImportDefinition](interfaces/ImportDefinition.md)

### Progress Interfaces

- [ProgressOptions](interfaces/ProgressOptions.md)

### Prompt Interfaces

- [PromptSchema](interfaces/PromptSchema.md)
- [PromptSchemaRecord](interfaces/PromptSchemaRecord.md)
- [QuestionOptions](interfaces/QuestionOptions.md)

### Spinner Interfaces

- [SpinnerOptions](interfaces/SpinnerOptions.md)

### Imports Type aliases

- [ImportRecord](README.md#importrecord)
- [ImportRecords](README.md#importrecords)
- [RecordOfImportRecords](README.md#recordofimportrecords)

### Environment Variables

- [app\_data\_dir](README.md#app_data_dir)
- [bashrc\_path](README.md#bashrc_path)
- [home\_dir](README.md#home_dir)
- [is\_wsl](README.md#is_wsl)
- [platform](README.md#platform)
- [temp\_dir](README.md#temp_dir)
- [user\_config\_dir](README.md#user_config_dir)
- [user\_data\_dir](README.md#user_data_dir)
- [verbose](README.md#verbose)

### Before Exit Functions

- [beforeExit](README.md#beforeexit)

### Environment Functions

- [interpolateEnv](README.md#interpolateenv)
- [isBundledElectronApp](README.md#isbundledelectronapp)
- [isElectronApp](README.md#iselectronapp)

### Files Functions

- [fileExists](README.md#fileexists)
- [findUp](README.md#findup)
- [getFile](README.md#getfile)
- [getFileJson](README.md#getfilejson)
- [isDirectory](README.md#isdirectory)
- [mkdir](README.md#mkdir)
- [saveFile](README.md#savefile)
- [saveFileJson](README.md#savefilejson)
- [unlink](README.md#unlink)

### Imports Functions

- [parseImports](README.md#parseimports)

### Progress Functions

- [multiprogress](README.md#multiprogress)
- [progress](README.md#progress)

### Prompt Functions

- [ask](README.md#ask)
- [confirm](README.md#confirm)
- [prompt](README.md#prompt)

### Spinner Functions

- [spinner](README.md#spinner)

## Imports Type aliases

### ImportRecord

Ƭ **ImportRecord**: `Record`<`string`, `Function`\>

___

### ImportRecords

Ƭ **ImportRecords**: `Record`<`string`, [`ImportDefinition`](interfaces/ImportDefinition.md)\>

___

### RecordOfImportRecords

Ƭ **RecordOfImportRecords**: `Record`<`string`, [`ImportRecords`](README.md#importrecords)\>

## Environment Variables

### app\_data\_dir

• `Const` **app\_data\_dir**: `string`

___

### bashrc\_path

• `Const` **bashrc\_path**: `string`

___

### home\_dir

• `Const` **home\_dir**: `string`

___

### is\_wsl

• `Const` **is\_wsl**: `boolean` = `isWsl`

___

### platform

• `Const` **platform**: `string`

___

### temp\_dir

• `Const` **temp\_dir**: `string`

___

### user\_config\_dir

• `Const` **user\_config\_dir**: `string`

___

### user\_data\_dir

• `Const` **user\_data\_dir**: `string` = `app_data_dir`

___

### verbose

• `Const` **verbose**: `number`

## Before Exit Functions

### beforeExit

▸ **beforeExit**(`callback`): `void`

Add a function to be called before the process exits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

___

## Environment Functions

### interpolateEnv

▸ **interpolateEnv**(`str`, `defaultValues?`): `string`

interpolate string with env variables, optionally pass an object of default values

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `defaultValues` | `Object` |

#### Returns

`string`

___

### isBundledElectronApp

▸ **isBundledElectronApp**(): `boolean`

Check if the current process is a bundled Electron app.

#### Returns

`boolean`

___

### isElectronApp

▸ **isElectronApp**(): `boolean`

Check if the current process is a Electron app

#### Returns

`boolean`

___

## Files Functions

### fileExists

▸ **fileExists**(`filepath`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |

#### Returns

`boolean`

___

### findUp

▸ **findUp**(`name`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `PathLike` |
| `options?` | `string` \| `boolean` \| `Partial`<[`FindUpOptions`](interfaces/FindUpOptions.md)\> |

#### Returns

`any`

___

### getFile

▸ **getFile**(`filepath`, `fallback?`): `any`

Get file content

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |
| `fallback?` | `any` |

#### Returns

`any`

___

### getFileJson

▸ **getFileJson**(`filepath`, `fallback?`): `any`

Get JSON from file

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |
| `fallback?` | `any` |

#### Returns

`any`

___

### isDirectory

▸ **isDirectory**(`filepath`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |

#### Returns

`boolean`

___

### mkdir

▸ **mkdir**(`dir_path`, `options?`): `void`

Make a directory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dir_path` | `PathLike` | `undefined` |
| `options` | `Object` | `undefined` |
| `options.recursive` | `boolean` | `true` |

#### Returns

`void`

___

### saveFile

▸ **saveFile**(`filepath`, `content`, `options?`): `void`

Save file to disk

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filepath` | `PathOrFileDescriptor` | `undefined` |
| `content` | `string` \| `ArrayBufferView` | `undefined` |
| `options` | `WriteFileOptions` | `'utf8'` |

#### Returns

`void`

___

### saveFileJson

▸ **saveFileJson**(`filepath`, `content`, `options?`): `void`

Save file to disk as JSON

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filepath` | `PathOrFileDescriptor` | `undefined` |
| `content` | `string` \| `ArrayBufferView` | `undefined` |
| `options` | `WriteFileOptions` | `'utf8'` |

#### Returns

`void`

___

### unlink

▸ **unlink**(`filepath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |

#### Returns

`void`

___

## Imports Functions

### parseImports

▸ **parseImports**(`imports`, `parent?`): [`ImportRecord`](README.md#importrecord)

Parse imports from `import * as name from 'path'` statements into a more manageable format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `imports` | [`ImportRecords`](README.md#importrecords) \| [`RecordOfImportRecords`](README.md#recordofimportrecords) |
| `parent?` | `string` |

#### Returns

[`ImportRecord`](README.md#importrecord)

___

## Progress Functions

### multiprogress

▸ **multiprogress**(`options?`): [`MultiProgress`](classes/MultiProgress.md)

Multi-Progress bar. Uses cli-progress to create multiple progress bars.

**`see`** https://github.com/npkgz/cli-progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressOptions`](interfaces/ProgressOptions.md)\> |

#### Returns

[`MultiProgress`](classes/MultiProgress.md)

___

### progress

▸ **progress**(`options?`): [`Progress`](classes/Progress.md)

Progress bar. Uses cli-progress to create multiple progress bars.

**`see`** https://github.com/npkgz/cli-progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressOptions`](interfaces/ProgressOptions.md)\> |

#### Returns

[`Progress`](classes/Progress.md)

___

## Prompt Functions

### ask

▸ **ask**(`question`, `options?`): `Promise`<`IObject`\>

Prompt the user for input using Inquirer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `options?` | `Partial`<[`QuestionOptions`](interfaces/QuestionOptions.md)\> |

#### Returns

`Promise`<`IObject`\>

___

### confirm

▸ **confirm**(`question`, `options?`): `Promise`<`IObject`\>

Prompt the user for confirmation using Inquirer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `options` | `Partial`<[`QuestionOptions`](interfaces/QuestionOptions.md)\> |

#### Returns

`Promise`<`IObject`\>

___

### prompt

▸ **prompt**(`schema`, `defaults?`): `Promise`<`PromptModule`\>

Prompts the user for input using Inquirer (advanced).

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`PromptSchema`](interfaces/PromptSchema.md) |
| `defaults` | `IObject` |

#### Returns

`Promise`<`PromptModule`\>

___

## Spinner Functions

### spinner

▸ **spinner**(`options?`): [`Spinner`](classes/Spinner.md)

Spinner. Uses nanospinner to show spinners in the terminal.

**`see`** https://github.com/usmanyunusov/nanospinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerOptions`](interfaces/SpinnerOptions.md)\> |

#### Returns

[`Spinner`](classes/Spinner.md)
