[@box/script-api](../README.md) / [Modules](../modules.md) / [RTC](../modules/RTC.md) / GameRTC

# Interface: GameRTC

[RTC](../modules/RTC.md).GameRTC

全局变量rtc

## Table of contents

### Methods

- [createChannel](RTC.GameRTC.md#createchannel)

## Methods

### createChannel

▸ **createChannel**(`channelId?`): `Promise`<[`GameRTCChannel`](RTC.GameRTCChannel.md)\>

创建频道

```typescript
const ch = await rtc.createChannel();
world.onPlayerJoin(async ({entity}) => {
    await ch.add(entity);
    await ch.publishMicrophone(entity);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `channelId?` | `string` | 可选，频道的唯一标识，地图内跨服共用，不指定则生成UUID |

#### Returns

`Promise`<[`GameRTCChannel`](RTC.GameRTCChannel.md)\>

#### Defined in

[modules/rtc.d.ts:24](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L24)
