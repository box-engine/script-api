[@box/script-api](../README.md) / [Modules](../modules.md) / [HTTP](../modules/HTTP.md) / GameHttpFetchResponse

# Interface: GameHttpFetchResponse

[HTTP](../modules/HTTP.md).GameHttpFetchResponse

## Table of contents

### Properties

- [arrayBuffer](HTTP.GameHttpFetchResponse.md#arraybuffer)
- [close](HTTP.GameHttpFetchResponse.md#close)
- [headers](HTTP.GameHttpFetchResponse.md#headers)
- [json](HTTP.GameHttpFetchResponse.md#json)
- [status](HTTP.GameHttpFetchResponse.md#status)
- [statusText](HTTP.GameHttpFetchResponse.md#statustext)
- [text](HTTP.GameHttpFetchResponse.md#text)

### Accessors

- [ok](HTTP.GameHttpFetchResponse.md#ok)

## Properties

### arrayBuffer

• **arrayBuffer**: () => `Promise`<`ArrayBuffer`\>

#### Type declaration

▸ (): `Promise`<`ArrayBuffer`\>

##### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

[modules/http.d.ts:39](https://github.com/box-engine/script-api/blob/861e99e/server/modules/http.d.ts#L39)

___

### close

• **close**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

[modules/http.d.ts:40](https://github.com/box-engine/script-api/blob/861e99e/server/modules/http.d.ts#L40)

___

### headers

• **headers**: [`GameHttpFetchHeaders`](../modules/HTTP.md#gamehttpfetchheaders)

#### Defined in

[modules/http.d.ts:36](https://github.com/box-engine/script-api/blob/861e99e/server/modules/http.d.ts#L36)

___

### json

• **json**: () => `Promise`<`any`\>

#### Type declaration

▸ (): `Promise`<`any`\>

##### Returns

`Promise`<`any`\>

#### Defined in

[modules/http.d.ts:37](https://github.com/box-engine/script-api/blob/861e99e/server/modules/http.d.ts#L37)

___

### status

• **status**: `number`

#### Defined in

[modules/http.d.ts:34](https://github.com/box-engine/script-api/blob/861e99e/server/modules/http.d.ts#L34)

___

### statusText

• **statusText**: `string`

#### Defined in

[modules/http.d.ts:35](https://github.com/box-engine/script-api/blob/861e99e/server/modules/http.d.ts#L35)

___

### text

• **text**: () => `Promise`<`string`\>

#### Type declaration

▸ (): `Promise`<`string`\>

##### Returns

`Promise`<`string`\>

#### Defined in

[modules/http.d.ts:38](https://github.com/box-engine/script-api/blob/861e99e/server/modules/http.d.ts#L38)

## Accessors

### ok

• `get` **ok**(): `boolean`

#### Returns

`boolean`

#### Defined in

[modules/http.d.ts:41](https://github.com/box-engine/script-api/blob/861e99e/server/modules/http.d.ts#L41)
