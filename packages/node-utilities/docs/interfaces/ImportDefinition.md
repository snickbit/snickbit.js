# Interface: ImportDefinition<I, Args, Results\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](../README.md#importmethod) = [`ImportMethod`](../README.md#importmethod) |
| `Args` | `any` |
| `Results` | `any` |

## Hierarchy

- [`ImportMethod`](../README.md#importmethod)<`Args`, `Results`\>

  ↳ **`ImportDefinition`**

## Callable

### ImportDefinition

▸ **ImportDefinition**(...`args`): `Results` \| `Promise`<`Results`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args`[] |

#### Returns

`Results` \| `Promise`<`Results`\>

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [aliases](ImportDefinition.md#aliases)
- [default](ImportDefinition.md#default)
- [description](ImportDefinition.md#description)
- [name](ImportDefinition.md#name)

## Properties

### aliases

• `Optional` **aliases**: `string`[]

___

### default

• **default**: `I` \| [`ImportMethod`](../README.md#importmethod)<`Args`, `Results`\> \| [`ImportDefinition`](ImportDefinition.md)<[`ImportMethod`](../README.md#importmethod)<`any`, `any`\>, `any`, `any`\>[] \| [`ImportDefinition`](ImportDefinition.md)<`I`, `any`, `any`\>

___

### description

• `Optional` **description**: `string`

___

### name

• `Optional` **name**: `string`
