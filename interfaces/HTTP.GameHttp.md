[@box/script-api](../README.md) / [Modules](../modules.md) / [HTTP](../modules/HTTP.md) / GameHttp

# Interface: GameHttp

[HTTP](../modules/HTTP.md).GameHttp

HTTP 请求相关的API

## Table of contents

### Properties

- [fetch](HTTP.GameHttp.md#fetch)

## Properties

### fetch

• **fetch**: (`url`: `string`, `options?`: [`GameHttpFetchRequestOptions`](HTTP.GameHttpFetchRequestOptions.md)) => `Promise`<[`GameHttpFetchResponse`](HTTP.GameHttpFetchResponse.md)\>

#### Type declaration

▸ (`url`, `options?`): `Promise`<[`GameHttpFetchResponse`](HTTP.GameHttpFetchResponse.md)\>

发起一个HTTP请求

```typescript
const res = await http.fetch('https://your.site');
console.log(await res.text())
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 请求的URL,支持HTTP与HTTPS，仅允许白名单内的域名访问 |
| `options?` | [`GameHttpFetchRequestOptions`](HTTP.GameHttpFetchRequestOptions.md) | 请求的选项 |

##### Returns

`Promise`<[`GameHttpFetchResponse`](HTTP.GameHttpFetchResponse.md)\>

请求的响应，以Promise形式返回

#### Defined in

[modules/http.d.ts:20](https://github.com/box-engine/script-api/blob/861e99e/server/modules/http.d.ts#L20)
