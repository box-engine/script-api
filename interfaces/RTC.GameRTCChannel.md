[@box/script-api](../README.md) / [Modules](../modules.md) / [RTC](../modules/RTC.md) / GameRTCChannel

# Interface: GameRTCChannel

[RTC](../modules/RTC.md).GameRTCChannel

RTC 频道，同频道内的用户可以通信
本质上是用户往频道发布音轨，所有用户自动订阅，对于开发者来说这一层表现被封装了，
以后可以考虑开放

## Table of contents

### Methods

- [add](RTC.GameRTCChannel.md#add)
- [destroy](RTC.GameRTCChannel.md#destroy)
- [getMicrophonePermission](RTC.GameRTCChannel.md#getmicrophonepermission)
- [getPlayers](RTC.GameRTCChannel.md#getplayers)
- [getVolume](RTC.GameRTCChannel.md#getvolume)
- [publishMicrophone](RTC.GameRTCChannel.md#publishmicrophone)
- [remove](RTC.GameRTCChannel.md#remove)
- [setVolume](RTC.GameRTCChannel.md#setvolume)
- [unpublish](RTC.GameRTCChannel.md#unpublish)

## Methods

### add

▸ **add**(`entity`): `Promise`<`void`\>

向频道内添加用户，一个用户允许同时进入多个频道

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) | 玩家实体 |

#### Returns

`Promise`<`void`\>

#### Defined in

[modules/rtc.d.ts:37](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L37)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

销毁频道

#### Returns

`Promise`<`void`\>

#### Defined in

[modules/rtc.d.ts:61](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L61)

___

### getMicrophonePermission

▸ **getMicrophonePermission**(`entity`): `Promise`<`boolean`\>

获取指定用户的麦克风权限状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) |

#### Returns

`Promise`<`boolean`\>

是否获取了麦克风状态

#### Defined in

[modules/rtc.d.ts:80](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L80)

___

### getPlayers

▸ **getPlayers**(): `Promise`<[`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md)[]\>

获取当前频道内所有用户

#### Returns

`Promise`<[`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md)[]\>

当前频道内所有玩家实体数组

#### Defined in

[modules/rtc.d.ts:57](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L57)

___

### getVolume

▸ **getVolume**(`entity`): `Promise`<`number`\>

获取频道内接收到指定用户音轨时的播放音量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) | 玩家实体 |

#### Returns

`Promise`<`number`\>

返回用户音量设置

#### Defined in

[modules/rtc.d.ts:67](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L67)

___

### publishMicrophone

▸ **publishMicrophone**(`entity`): `Promise`<`void`\>

指定用户发布麦克风音轨到此频道中，用户可以同时在不同频道中发布麦克风音轨

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) | 玩家实体 |

#### Returns

`Promise`<`void`\>

#### Defined in

[modules/rtc.d.ts:47](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L47)

___

### remove

▸ **remove**(`entity`): `Promise`<`void`\>

从频道内移除用户

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) | 玩家实体 |

#### Returns

`Promise`<`void`\>

#### Defined in

[modules/rtc.d.ts:42](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L42)

___

### setVolume

▸ **setVolume**(`entity`, `volume`): `Promise`<`void`\>

设定此频道内接受到指定用户音轨时的播放音量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) | 玩家实体 |
| `volume` | `number` | 音量设置，按百分比设置，默认100 |

#### Returns

`Promise`<`void`\>

#### Defined in

[modules/rtc.d.ts:73](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L73)

___

### unpublish

▸ **unpublish**(`entity`): `Promise`<`void`\>

指定用户取消在此频道发布的音轨

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) | 玩家实体 |

#### Returns

`Promise`<`void`\>

#### Defined in

[modules/rtc.d.ts:52](https://github.com/box-engine/script-api/blob/861e99e/server/modules/rtc.d.ts#L52)
