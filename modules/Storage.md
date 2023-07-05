[@box/script-api](../README.md) / [Modules](../modules.md) / Storage

# Module: Storage

## Table of contents

### Classes

- [GameDataStorage](../classes/Storage.GameDataStorage.md)
- [GameStorage](../classes/Storage.GameStorage.md)
- [QueryList](../classes/Storage.QueryList.md)

### Type Aliases

- [DB\_ERROR\_STATUS](Storage.md#db_error_status)
- [JSONValue](Storage.md#jsonvalue)
- [ListPageOptions](Storage.md#listpageoptions)
- [ReturnValue](Storage.md#returnvalue)

## Type Aliases

### DB\_ERROR\_STATUS

Ƭ **DB\_ERROR\_STATUS**: ``"PARAMS_INVALID"`` \| ``"DB_NAME_INVALID"`` \| ``"KEY_INVALID"`` \| ``"VALUE_INVALID"`` \| ``"SERVER_FETCH_ERROR"`` \| ``"UNKNOWN"``

#### Defined in

[modules/storage.d.ts:39](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L39)

___

### JSONValue

Ƭ **JSONValue**: `string` \| `number` \| `boolean` \| { `[x: string]`: [`JSONValue`](Storage.md#jsonvalue);  } \| [`JSONValue`](Storage.md#jsonvalue)[]

#### Defined in

[modules/storage.d.ts:47](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L47)

___

### ListPageOptions

Ƭ **ListPageOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor` | `number` |
| `pageSize?` | `number` |

#### Defined in

[modules/storage.d.ts:64](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L64)

___

### ReturnValue

Ƭ **ReturnValue**: { `createTime`: `number` ; `key`: ``"string"`` ; `updateTime`: `number` ; `value`: [`JSONValue`](Storage.md#jsonvalue) ; `version`: `string`  } \| `undefined`

#### Defined in

[modules/storage.d.ts:54](https://github.com/box-engine/script-api/blob/861e99e/server/modules/storage.d.ts#L54)
