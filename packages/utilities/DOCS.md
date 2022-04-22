# @snickbit/utilities

## Table of contents

### Arrays Type aliases

- [IArray](README.md#iarray)

### Generators Type aliases

- [CombinationOptions](README.md#combinationoptions)

### Objects Type aliases

- [IObject](README.md#iobject)

### Templating Type aliases

- [interpolateReplacements](README.md#interpolatereplacements)

### Variables Type aliases

- [VariableTypeDefinition](README.md#variabletypedefinition)

### Arrays Functions

- [arrayDuplicates](README.md#arrayduplicates)
- [arrayMerge](README.md#arraymerge)
- [arrayMergeDeep](README.md#arraymergedeep)
- [arrayRemove](README.md#arrayremove)
- [arrayShuffle](README.md#arrayshuffle)
- [arrayToObject](README.md#arraytoobject)
- [arrayUnique](README.md#arrayunique)
- [arrayUniqueInsensitive](README.md#arrayuniqueinsensitive)
- [arrayWrap](README.md#arraywrap)
- [isSingle](README.md#issingle)

### Buffer Functions

- [bufferStream](README.md#bufferstream)
- [makeBuffer](README.md#makebuffer)

### Functions Functions

- [functionClone](README.md#functionclone)
- [overloadOptions](README.md#overloadoptions)
- [parseOptions](README.md#parseoptions)
- [promiseAll](README.md#promiseall)
- [tryWait](README.md#trywait)

### Generators Functions

- [combinations](README.md#combinations)
- [makeRandomSegment](README.md#makerandomsegment)
- [randomString](README.md#randomstring)
- [uuid](README.md#uuid)

### Numbers Functions

- [formatBytes](README.md#formatbytes)
- [formatCurrency](README.md#formatcurrency)
- [formatPercentage](README.md#formatpercentage)
- [maxDecimals](README.md#maxdecimals)
- [numberPad](README.md#numberpad)

### Objects Functions

- [objectClone](README.md#objectclone)
- [objectCopy](README.md#objectcopy)
- [objectExcept](README.md#objectexcept)
- [objectFilter](README.md#objectfilter)
- [objectFind](README.md#objectfind)
- [objectFindEntry](README.md#objectfindentry)
- [objectFindKey](README.md#objectfindkey)
- [objectFlatten](README.md#objectflatten)
- [objectGetMethod](README.md#objectgetmethod)
- [objectHasMethod](README.md#objecthasmethod)
- [objectMerge](README.md#objectmerge)
- [objectMergeDeep](README.md#objectmergedeep)
- [objectMethods](README.md#objectmethods)
- [objectOnly](README.md#objectonly)
- [objectPull](README.md#objectpull)

### Parsing Functions

- [JSONParse](README.md#jsonparse)
- [JSONPrettify](README.md#jsonprettify)
- [JSONStringify](README.md#jsonstringify)
- [camelCase](README.md#camelcase)
- [initials](README.md#initials)
- [kebabCase](README.md#kebabcase)
- [limitString](README.md#limitstring)
- [limitWords](README.md#limitwords)
- [padString](README.md#padstring)
- [parse](README.md#parse)
- [plural](README.md#plural)
- [safeVarName](README.md#safevarname)
- [singular](README.md#singular)
- [sleep](README.md#sleep)
- [slugify](README.md#slugify)
- [snakeCase](README.md#snakecase)
- [spaceCase](README.md#spacecase)

### Templating Functions

- [escapeRegExp](README.md#escaperegexp)
- [escapeReplacement](README.md#escapereplacement)
- [interpolate](README.md#interpolate)

### Variables Functions

- [clone](README.md#clone)
- [count](README.md#count)
- [isArray](README.md#isarray)
- [isAsyncFunction](README.md#isasyncfunction)
- [isAwaitable](README.md#isawaitable)
- [isBase64](README.md#isbase64)
- [isCallable](README.md#iscallable)
- [isClass](README.md#isclass)
- [isDate](README.md#isdate)
- [isDefined](README.md#isdefined)
- [isEmpty](README.md#isempty)
- [isFunction](README.md#isfunction)
- [isJSONString](README.md#isjsonstring)
- [isNullDefined](README.md#isnulldefined)
- [isNumber](README.md#isnumber)
- [isObject](README.md#isobject)
- [isPrimitive](README.md#isprimitive)
- [isPromise](README.md#ispromise)
- [isSet](README.md#isset)
- [isString](README.md#isstring)
- [isType](README.md#istype)
- [merge](README.md#merge)
- [mergeDeep](README.md#mergedeep)
- [typeOf](README.md#typeof)

## Arrays Type aliases

### IArray

Ƭ **IArray**: `any`[]

___

## Generators Type aliases

### CombinationOptions

Ƭ **CombinationOptions**: `Object`

#### Index signature

▪ [key: `string`]: `any`[]

___

## Objects Type aliases

### IObject

Ƭ **IObject**: `Object`

#### Index signature

▪ [key: `string`]: `any`

___

## Templating Type aliases

### interpolateReplacements

Ƭ **interpolateReplacements**: `Object`

#### Index signature

▪ [key: `string`]: `string`

___

## Variables Type aliases

### VariableTypeDefinition

Ƭ **VariableTypeDefinition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |

## Arrays Functions

### arrayDuplicates

▸ **arrayDuplicates**(`arr`, `predicate?`): [`IArray`](README.md#iarray)

Return the duplicate values from an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`IArray`](README.md#iarray) |
| `predicate?` | (`item`: `any`) => `boolean` |

#### Returns

[`IArray`](README.md#iarray)

___

### arrayMerge

▸ **arrayMerge**(...`arrs`): [`IArray`](README.md#iarray)

Merge two or more arrays together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrs` | [`IArray`](README.md#iarray)[] |

#### Returns

[`IArray`](README.md#iarray)

___

### arrayMergeDeep

▸ **arrayMergeDeep**(...`arrs`): [`IArray`](README.md#iarray)

Merge two or more arrays together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrs` | [`IArray`](README.md#iarray)[] |

#### Returns

[`IArray`](README.md#iarray)

___

### arrayRemove

▸ **arrayRemove**(`arr`, `value`): [`IArray`](README.md#iarray)

Finds and returns an element from an array, removing it in the process

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`IArray`](README.md#iarray) |
| `value` | `any` |

#### Returns

[`IArray`](README.md#iarray)

___

### arrayShuffle

▸ **arrayShuffle**(`arr`): [`IArray`](README.md#iarray)

Shuffles/randomizes an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`IArray`](README.md#iarray) |

#### Returns

[`IArray`](README.md#iarray)

___

### arrayToObject

▸ **arrayToObject**(`arr`, `key`, `value`): `object`

Convert an array to an object using the given key as the property

**`example`**
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id', 'name')
// {1: 'John', 2: 'Jane'}

**`example`**
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'name')
// {John: {id: 1, name: 'John'}, Jane: {id: 2, name: 'Jane'}}

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`IArray`](README.md#iarray) |
| `key` | `string` \| `number` |
| `value` | `string` \| `number` |

#### Returns

`object`

___

### arrayUnique

▸ **arrayUnique**(`arr`, `key?`): [`IArray`](README.md#iarray)

Returns unique values from an array. Optionally pass a key when the array is an object array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`IArray`](README.md#iarray) |
| `key?` | `string` |

#### Returns

[`IArray`](README.md#iarray)

___

### arrayUniqueInsensitive

▸ **arrayUniqueInsensitive**(`arr`, `key?`): [`IArray`](README.md#iarray)

Returns unique values from an array, ignoring case. Optionally pass a key when the array is an object array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`IArray`](README.md#iarray) |
| `key?` | `string` |

#### Returns

[`IArray`](README.md#iarray)

___

### arrayWrap

▸ **arrayWrap**(`values`): [`IArray`](README.md#iarray)

Wrap a variable in an array if it is not already an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `any` |

#### Returns

[`IArray`](README.md#iarray)

___

### isSingle

▸ **isSingle**(`arr`, `value?`): `boolean`

Checks if the given array only contains a single value, optionally pass a value or predicate to check against

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`IArray`](README.md#iarray) |
| `value?` | `any` |

#### Returns

`boolean`

___

## Buffer Functions

### bufferStream

▸ **bufferStream**(`stream`): `Promise`<`Buffer`\>

Make a buffer from a file stream

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Readable` |

#### Returns

`Promise`<`Buffer`\>

___

### makeBuffer

▸ **makeBuffer**(`content`): `Buffer`

Make a buffer from a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`Buffer`

___

## Functions Functions

### functionClone

▸ **functionClone**(`fn`): `Function`

Clone a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |

#### Returns

`Function`

___

### overloadOptions

▸ **overloadOptions**(`options`, `schemas`): `object`

Parses an array of arguments for an overloaded function into an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IArray`](README.md#iarray) |
| `schemas` | `object`[] |

#### Returns

`object`

___

### parseOptions

▸ **parseOptions**(`given`, `defaults`, `non_object_key`): `object` \| `any`

Parse options for a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `given` | `any` |
| `defaults` | [`IObject`](README.md#iobject) |
| `non_object_key` | `string` |

#### Returns

`object` \| `any`

___

### promiseAll

▸ **promiseAll**(`arr`, `fn`): `Promise`<`Awaited`<`any`\>[]\>

Send each item in an array to a function, await the results

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | [`IArray`](README.md#iarray) |
| `fn` | (`value`: `any`, `index`: `number`, `array`: [`IArray`](README.md#iarray)) => `any` |

#### Returns

`Promise`<`Awaited`<`any`\>[]\>

___

### tryWait

▸ **tryWait**(`fn`, ...`args`): `Promise`<`any`\>

wrap an 'await' with a try catch, returns undefined if an error is thrown

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Function` |
| `...args` | [`IArray`](README.md#iarray)[] |

#### Returns

`Promise`<`any`\>

___

## Generators Functions

### combinations

▸ **combinations**(`options`): [`IArray`](README.md#iarray)

Generate an array of all possible property values. Provide an object with each property as a key and an array of possible values as the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CombinationOptions`](README.md#combinationoptions) |

#### Returns

[`IArray`](README.md#iarray)

___

### makeRandomSegment

▸ **makeRandomSegment**(): `string`

Generate a random string between 8 and 14 characters long

#### Returns

`string`

___

### randomString

▸ **randomString**(`length?`): `string`

Generate a random string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `10` |

#### Returns

`string`

___

### uuid

▸ **uuid**(`prefix?`): `string`

Create uuid

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `''` |

#### Returns

`string`

___

## Numbers Functions

### formatBytes

▸ **formatBytes**(`bytes`, `decimals?`): `string`

Format a number as bytes.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bytes` | `number` | `undefined` |
| `decimals` | `number` | `2` |

#### Returns

`string`

___

### formatCurrency

▸ **formatCurrency**(`amount`, `symbol?`, `decimals?`): `string`

Format a number as currency.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `number` | `undefined` |
| `symbol` | `string` | `'$'` |
| `decimals` | `number` | `2` |

#### Returns

`string`

___

### formatPercentage

▸ **formatPercentage**(`amount`, `decimals?`): `string`

Format a number as a percentage.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `number` | `undefined` |
| `decimals` | `number` | `2` |

#### Returns

`string`

___

### maxDecimals

▸ **maxDecimals**(`value`, `max_places?`): `number`

limit the amount of decimals to the given number, default 2

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `max_places` | `number` | `2` |

#### Returns

`number`

___

### numberPad

▸ **numberPad**(`n`): `string` \| `number`

Pad a number with zeros.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`string` \| `number`

___

## Objects Functions

### objectClone

▸ **objectClone**(...`objects`): [`IObject`](README.md#iobject)

Deep clones an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`IObject`](README.md#iobject)[] |

#### Returns

[`IObject`](README.md#iobject)

___

### objectCopy

▸ **objectCopy**(`obj`, `force?`): [`IObject`](README.md#iobject) \| [`IArray`](README.md#iarray) \| `undefined`

Copy object as JSON (uses JSON.parse/JSON.stringify but won't throw any errors)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |
| `force?` | `boolean` |

#### Returns

[`IObject`](README.md#iobject) \| [`IArray`](README.md#iarray) \| `undefined`

___

### objectExcept

▸ **objectExcept**(`obj`, `excluded`): [`IObject`](README.md#iobject)

Returns a new object without the excluded properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) | the object to filter |
| `excluded` | `string`[] | the allowed properties |

#### Returns

[`IObject`](README.md#iobject)

___

### objectFilter

▸ **objectFilter**(`obj`, `predicate?`): [`IObject`](README.md#iobject)

Filter an object by a given predicate

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |
| `predicate` | (`k`: `any`, `v`: `string`) => `boolean` |

#### Returns

[`IObject`](README.md#iobject)

___

### objectFind

▸ **objectFind**(`obj`, `predicate`): `any` \| `undefined`

Finds an object property's value that matches the given predicate

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |
| `predicate` | `string` \| `Function` |

#### Returns

`any` \| `undefined`

___

### objectFindEntry

▸ **objectFindEntry**(`obj`, `predicate`): `any` \| `undefined`

Finds an object property's entry [key, value] that matches the given predicate

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |
| `predicate` | `string` \| `Function` |

#### Returns

`any` \| `undefined`

___

### objectFindKey

▸ **objectFindKey**(`obj`, `predicate`): `string` \| `undefined`

Finds an object property's name that matches the given predicate

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |
| `predicate` | `string` \| `Function` |

#### Returns

`string` \| `undefined`

___

### objectFlatten

▸ **objectFlatten**(`obj`, `prefix?`): [`IObject`](README.md#iobject)

Flattens an object into a single level using dot notation for nested properties.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) | `undefined` |
| `prefix` | `string` | `''` |

#### Returns

[`IObject`](README.md#iobject)

___

### objectGetMethod

▸ **objectGetMethod**(`obj`, `method`, `strict?`): `any`

Checks if an object has a method with the given name, and returns the method

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |
| `method` | `string` |
| `strict?` | `boolean` |

#### Returns

`any`

___

### objectHasMethod

▸ **objectHasMethod**(`obj`, `method`, `strict?`): `boolean`

Checks if an object has a method with the given name

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |
| `method` | `string` |
| `strict?` | `boolean` |

#### Returns

`boolean`

___

### objectMerge

▸ **objectMerge**(...`objects`): [`IObject`](README.md#iobject)

Merge two or more objects together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`IObject`](README.md#iobject)[] |

#### Returns

[`IObject`](README.md#iobject)

___

### objectMergeDeep

▸ **objectMergeDeep**(...`objects`): [`IObject`](README.md#iobject)

Merge two or more objects together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | [`IObject`](README.md#iobject)[] |

#### Returns

[`IObject`](README.md#iobject)

___

### objectMethods

▸ **objectMethods**(`obj`): `string`[]

Returns an array of the given object's available method names

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |

#### Returns

`string`[]

___

### objectOnly

▸ **objectOnly**(`obj`, `allowed`): [`IObject`](README.md#iobject)

Returns a new object with only the allowed properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |
| `allowed` | `string`[] |

#### Returns

[`IObject`](README.md#iobject)

___

### objectPull

▸ **objectPull**(`obj`, `key`): `any`

Remove a property from an object and return the value

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`IObject`](README.md#iobject) |
| `key` | `string` |

#### Returns

`any`

___

## Parsing Functions

### JSONParse

▸ **JSONParse**(`json`, `strict?`): `object` \| [`IArray`](README.md#iarray) \| `undefined`

Parse a string into JSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |
| `strict?` | `boolean` |

#### Returns

`object` \| [`IArray`](README.md#iarray) \| `undefined`

___

### JSONPrettify

▸ **JSONPrettify**(`data`, `spacer?`): `string`

Pretty print a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `spacer` | `number` | `2` |

#### Returns

`string`

___

### JSONStringify

▸ **JSONStringify**(`data`, `options?`): `string`

Parse a variable into a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `options` | `Partial`<`JSONStringifyOptions`\> | `false` |

#### Returns

`string`

___

### camelCase

▸ **camelCase**(`text`): `string`

Convert a string to camelCase

**`see`** https://www.npmjs.com/package/just-camel-case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

___

### initials

▸ **initials**(`str`): `string`

Convert a string to initials

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### kebabCase

▸ **kebabCase**(`text`): `string`

Convert a string to kebab-case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The string to convert |

#### Returns

`string`

___

### limitString

▸ **limitString**(`str`, `limit?`, `suffix?`): `string`

Limit a string to a certain length

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `limit` | `number` | `100` |
| `suffix` | `string` | `'...'` |

#### Returns

`string`

___

### limitWords

▸ **limitWords**(`str`, `limit?`, `suffix?`): `string`

Limit a string to a certain amount of words

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `limit` | `number` | `100` |
| `suffix` | `string` | `'...'` |

#### Returns

`string`

___

### padString

▸ **padString**(`text`, `padding?`, `character?`): `string`

Pad a string on both sides with the given character and length

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `padding` | `number` | `2` |
| `character` | `string` | `' '` |

#### Returns

`string`

___

### parse

▸ **parse**(`value`): `any`

Parse a string into it's primitive type if possible. If not, return the original variable.

**`example`** '123' => 123 | '123.456' => 123.456 | 'true' => true | 'false' => false | 'null' => null | 'undefined' => undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### plural

▸ **plural**(`text`, `count?`, `inclusive?`): `string`

Create a pluralized string

**`see`** https://github.com/plurals/pluralize

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `count` | `number` | `2` |
| `inclusive?` | `boolean` | `undefined` |

#### Returns

`string`

___

### safeVarName

▸ **safeVarName**(`str`): `string`

Create a safe javascript variable name from a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### singular

▸ **singular**(`str`, `inclusive?`): `string`

Create a singularized string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `inclusive?` | `boolean` |

#### Returns

`string`

___

### sleep

▸ **sleep**(`ms`): `Promise`<`unknown`\>

sleep for a given time

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`unknown`\>

___

### slugify

▸ **slugify**(`text`, `replace?`): `string`

Create slug from string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `replace` | `string` | `'-'` |

#### Returns

`string`

___

### snakeCase

▸ **snakeCase**(`text`): `string`

Convert a string to snake_case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

___

### spaceCase

▸ **spaceCase**(`str`): `string`

Convert a string to space-case

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

## Templating Functions

### escapeRegExp

▸ **escapeRegExp**(`str`): `string`

escape regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### escapeReplacement

▸ **escapeReplacement**(`str`): `string`

escape regexp replacement string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### interpolate

▸ **interpolate**(`str`, `replacements`): `string`

interpolate string with data from object using {{key}} syntax or ${key} syntax

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `replacements` | [`interpolateReplacements`](README.md#interpolatereplacements) |

#### Returns

`string`

___

## Variables Functions

### clone

▸ **clone**(`value`): `any`

Clone a variable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

___

### count

▸ **count**(`value`, `strict?`): `number`

Count the number of keys in an object Count the number of entries in an array Count the number of values in a Set Get the length of a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `strict` | `boolean` | `true` |

#### Returns

`number`

___

### isArray

▸ **isArray**(`value`): `boolean`

Checks if variable is an array and is not empty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | value to check |

#### Returns

`boolean`

___

### isAsyncFunction

▸ **isAsyncFunction**(`value`): `boolean`

Check if a variable is an async function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isAwaitable

▸ **isAwaitable**(`value`): `boolean`

Check if a variable can be used with await (a Promise or AsyncFunction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isBase64

▸ **isBase64**(`content`): `boolean`

Check if a variable is a Base64 string

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`boolean`

___

### isCallable

▸ **isCallable**(`value`, `options?`): `boolean`

Check if a variable is callable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `Partial`<`isCallableOptions`\> |

#### Returns

`boolean`

___

### isClass

▸ **isClass**(`value`): `boolean`

Check if a variable is a class

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isDate

▸ **isDate**(`value`): `boolean`

Check if a variable is a valid date

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isDefined

▸ **isDefined**(`value`): `boolean`

Check if a value is undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isEmpty

▸ **isEmpty**(`value`): `boolean`

Check if a value is empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isFunction

▸ **isFunction**(`value`, `strict?`): `boolean`

Check if a variable is a function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | value to check |
| `strict?` | `boolean` | - |

#### Returns

`boolean`

___

### isJSONString

▸ **isJSONString**(`value`, `returnValue?`): `any`

Check if a variable is a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `returnValue` | `boolean` | `false` |

#### Returns

`any`

___

### isNullDefined

▸ **isNullDefined**(`value`): `boolean`

Check if a value is null or undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isNumber

▸ **isNumber**(`value`): `boolean`

Check if a variable is a number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isObject

▸ **isObject**(`value`, `strict?`): `boolean`

Check if a variable is an object and is not null or undefined

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `strict` | `boolean` | `true` |

#### Returns

`boolean`

___

### isPrimitive

▸ **isPrimitive**(`value`, `includeNullUndefined?`): `boolean`

Check if a variable is a primitive type. i.e. string, boolean, number, or bigint

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `includeNullUndefined?` | `boolean` |

#### Returns

`boolean`

___

### isPromise

▸ **isPromise**(`value`): `boolean`

Check if a variable is a promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isSet

▸ **isSet**(`value`): `boolean`

Check if a variable is a Set

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isString

▸ **isString**(`value`): `boolean`

Check if a variable is a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isType

▸ **isType**(`value`, `type`): `boolean`

Check if a variable is the given type

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `type` | `string` \| [`VariableTypeDefinition`](README.md#variabletypedefinition) |

#### Returns

`boolean`

___

### merge

▸ **merge**(...`values`): [`IObject`](README.md#iobject) \| [`IArray`](README.md#iarray)

Merge two or more variables together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | [`IArray`](README.md#iarray) \| [`IObject`](README.md#iobject)[] |

#### Returns

[`IObject`](README.md#iobject) \| [`IArray`](README.md#iarray)

___

### mergeDeep

▸ **mergeDeep**(...`values`): [`IObject`](README.md#iobject) \| [`IArray`](README.md#iarray)

Merge two or more variables together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | [`IArray`](README.md#iarray) \| [`IObject`](README.md#iobject)[] |

#### Returns

[`IObject`](README.md#iobject) \| [`IArray`](README.md#iarray)

___

### typeOf

▸ **typeOf**(`value`): `VariableType` \| `string`

Return a variable's type

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`VariableType` \| `string`
