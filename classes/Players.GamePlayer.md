[@box/script-api](../README.md) / [Modules](../modules.md) / [Players](../modules/Players.md) / GamePlayer

# Class: GamePlayer

[Players](../modules/Players.md).GamePlayer

玩家组件，实体中负责控制玩家行为的组件，仅在玩家实体中存在
针对玩家的所有行为都会挂在这里

## Table of contents

### Properties

- [browser](Players.GamePlayer.md#browser)

### Methods

- [transportToGame](Players.GamePlayer.md#transporttogame)

### Camera

- [cameraEntity](Players.GamePlayer.md#cameraentity)
- [cameraMode](Players.GamePlayer.md#cameramode)
- [cameraPitch](Players.GamePlayer.md#camerapitch)
- [cameraPosition](Players.GamePlayer.md#cameraposition)
- [cameraTarget](Players.GamePlayer.md#cameratarget)
- [cameraUp](Players.GamePlayer.md#cameraup)
- [cameraYaw](Players.GamePlayer.md#camerayaw)
- [setCameraPitch](Players.GamePlayer.md#setcamerapitch)
- [setCameraYaw](Players.GamePlayer.md#setcamerayaw)

### Input

- [onPress](Players.GamePlayer.md#onpress)
- [onRelease](Players.GamePlayer.md#onrelease)

## Properties

### browser

• **browser**: [`PlayerNavigator`](../interfaces/modules_navigator.PlayerNavigator.md)

#### Defined in

[modules/player.d.ts:49](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L49)

## Methods

### transportToGame

▸ **transportToGame**(`contentID`): `void`

将玩家传送到另一个游戏

```typescript
const door = world.querySelector('#door');
door.enableInteract = true;
door.interactHint = `Go to XXX`;
door.interactRadius = 3;
door.onInteract(async ({entity}) => {
   entity.player.transportToGame('CONTENT_ID')
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contentID` | `string` | 目的地游戏的 Content ID |

#### Returns

`void`

#### Defined in

[modules/player.d.ts:47](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L47)

## Camera

### cameraEntity

• **cameraEntity**: ``null`` \| [`GameEntity`](-2.GameEntity.md)

In FPS or FOLLOW mode, the entity which the player's camera follows

#### Defined in

[modules/player.d.ts:66](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L66)

___

### cameraMode

• **cameraMode**: [`GameCameraMode`](../enums/Players.GameCameraMode.md)

Camera behavior mode.
 + `"FPS"` - First person camera
 + `"FOLLOW"` - Third person follow camera (default)
 + `"FIXED"` - Third person fixed camera
 + `"RELATIVE"` - Third person camera relative to player position

#### Defined in

[modules/player.d.ts:59](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L59)

___

### cameraPitch

• `Readonly` **cameraPitch**: `number`

[-PI/2, PI/2]

#### Defined in

[modules/player.d.ts:91](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L91)

___

### cameraPosition

• **cameraPosition**: [`GameVector3`](Math.GameVector3.md)

Eye position of camera in FIXED mode

#### Defined in

[modules/player.d.ts:85](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L85)

___

### cameraTarget

• **cameraTarget**: [`GameVector3`](Math.GameVector3.md)

Target point for the camera in FIXED mode

#### Defined in

[modules/player.d.ts:73](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L73)

___

### cameraUp

• **cameraUp**: [`GameVector3`](Math.GameVector3.md)

Up vector for camera in FIXED mode

#### Defined in

[modules/player.d.ts:79](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L79)

___

### cameraYaw

• `Readonly` **cameraYaw**: `number`

[0, 2PI)

#### Defined in

[modules/player.d.ts:96](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L96)

___

### setCameraPitch

▸ **setCameraPitch**(`pitch`): `void`

由于使用Uint8存值（性能考量），精度为 PI / 255

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pitch` | `number` | [-PI/2, PI/2] 超出范围以 PI 为周期取值 |

#### Returns

`void`

#### Defined in

[modules/player.d.ts:102](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L102)

___

### setCameraYaw

▸ **setCameraYaw**(`yaw`): `void`

由于使用Uint8存值（性能考量），精度为 2PI / 256（可能会出现差1度但存进去变成同一个值的情况）

#### Parameters

| Name | Type |
| :------ | :------ |
| `yaw` | `number` |

#### Returns

`void`

#### Defined in

[modules/player.d.ts:108](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L108)

## Input

### onPress

▸ **onPress**(`handler`): [`GameEventHandlerToken`](../interfaces/.GameEventHandlerToken.md)

Called whenever player presses a button

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`event`: [`GameInputEvent`](World.GameInputEvent.md)) => `void` |

#### Returns

[`GameEventHandlerToken`](../interfaces/.GameEventHandlerToken.md)

#### Defined in

[modules/player.d.ts:114](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L114)

___

### onRelease

▸ **onRelease**(`handler`): [`GameEventHandlerToken`](../interfaces/.GameEventHandlerToken.md)

Called whenever a player releases a buttin

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`event`: [`GameInputEvent`](World.GameInputEvent.md)) => `void` |

#### Returns

[`GameEventHandlerToken`](../interfaces/.GameEventHandlerToken.md)

#### Defined in

[modules/player.d.ts:123](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L123)
