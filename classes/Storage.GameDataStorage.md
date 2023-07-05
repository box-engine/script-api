[@box/script-api](../README.md) / [Modules](../modules.md) / [Storage](../modules/Storage.md) / GameDataStorage

# Class: GameDataStorage

[Storage](../modules/Storage.md).GameDataStorage

A Data storage class

**`Export`**

## Table of contents

### Constructors

- [constructor](Storage.GameDataStorage.md#constructor)

### Properties

- [get](Storage.GameDataStorage.md#get)
- [getVersion](Storage.GameDataStorage.md#getversion)
- [key](Storage.GameDataStorage.md#key)
- [remove](Storage.GameDataStorage.md#remove)
- [set](Storage.GameDataStorage.md#set)
- [update](Storage.GameDataStorage.md#update)

### Methods

- [list](Storage.GameDataStorage.md#list)

## Constructors

### constructor

• **new GameDataStorage**()

#### Defined in

[modules/storage.d.ts:29](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L29)

## Properties

### get

• **get**: (`key`: `string`) => `Promise`<[`ReturnValue`](../modules/Storage.md#returnvalue)\>

#### Type declaration

▸ (`key`): `Promise`<[`ReturnValue`](../modules/Storage.md#returnvalue)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

`Promise`<[`ReturnValue`](../modules/Storage.md#returnvalue)\>

#### Defined in

[modules/storage.d.ts:24](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L24)

___

### getVersion

• **getVersion**: (`key`: `string`, `version`: `string`) => `Promise`<[`ReturnValue`](../modules/Storage.md#returnvalue)\>

#### Type declaration

▸ (`key`, `version`): `Promise`<[`ReturnValue`](../modules/Storage.md#returnvalue)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `version` | `string` |

##### Returns

`Promise`<[`ReturnValue`](../modules/Storage.md#returnvalue)\>

#### Defined in

[modules/storage.d.ts:26](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L26)

___

### key

• `Readonly` **key**: `string`

#### Defined in

[modules/storage.d.ts:16](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L16)

___

### remove

• **remove**: (`key`: `string`) => `Promise`<[`ReturnValue`](../modules/Storage.md#returnvalue)\>

#### Type declaration

▸ (`key`): `Promise`<[`ReturnValue`](../modules/Storage.md#returnvalue)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

`Promise`<[`ReturnValue`](../modules/Storage.md#returnvalue)\>

#### Defined in

[modules/storage.d.ts:28](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L28)

___

### set

• **set**: (`key`: `string`, `value`: [`JSONValue`](../modules/Storage.md#jsonvalue)) => `Promise`<`void`\>

#### Type declaration

▸ (`key`, `value`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`JSONValue`](../modules/Storage.md#jsonvalue) |

##### Returns

`Promise`<`void`\>

#### Defined in

[modules/storage.d.ts:18](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L18)

___

### update

• **update**: (`key`: `string`, `handler`: (`prevValue`: [`ReturnValue`](../modules/Storage.md#returnvalue)) => [`JSONValue`](../modules/Storage.md#jsonvalue)) => `Promise`<`void`\>

#### Type declaration

▸ (`key`, `handler`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `handler` | (`prevValue`: [`ReturnValue`](../modules/Storage.md#returnvalue)) => [`JSONValue`](../modules/Storage.md#jsonvalue) |

##### Returns

`Promise`<`void`\>

#### Defined in

[modules/storage.d.ts:20](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L20)

## Methods

### list

▸ **list**(`options`): `Promise`<[`QueryList`](Storage.QueryList.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ListPageOptions`](../modules/Storage.md#listpageoptions) |

#### Returns

`Promise`<[`QueryList`](Storage.QueryList.md)\>

#### Defined in

[modules/storage.d.ts:27](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L27)
