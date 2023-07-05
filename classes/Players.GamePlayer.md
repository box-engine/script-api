[@box/script-api](../README.md) / [Modules](../modules.md) / [Players](../modules/Players.md) / GamePlayer

# Class: GamePlayer

[Players](../modules/Players.md).GamePlayer

玩家组件，实体中负责控制玩家行为的组件，仅在玩家实体中存在
针对玩家的所有行为都会挂在这里

## Properties

### browser

• **browser**: [`PlayerNavigator`](../interfaces/modules_navigator.PlayerNavigator.md)

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

## Camera

### cameraEntity

• **cameraEntity**: ``null`` \| [`GameEntity`](-2.GameEntity.md)

In FPS or FOLLOW mode, the entity which the player's camera follows

___

### cameraMode

• **cameraMode**: [`GameCameraMode`](../enums/Players.GameCameraMode.md)

Camera behavior mode.
 + `"FPS"` - First person camera
 + `"FOLLOW"` - Third person follow camera (default)
 + `"FIXED"` - Third person fixed camera
 + `"RELATIVE"` - Third person camera relative to player position

___

### cameraPitch

• `Readonly` **cameraPitch**: `number`

[-PI/2, PI/2]

___

### cameraPosition

• **cameraPosition**: [`GameVector3`](Math.GameVector3.md)

Eye position of camera in FIXED mode

___

### cameraTarget

• **cameraTarget**: [`GameVector3`](Math.GameVector3.md)

Target point for the camera in FIXED mode

___

### cameraUp

• **cameraUp**: [`GameVector3`](Math.GameVector3.md)

Up vector for camera in FIXED mode

___

### cameraYaw

• `Readonly` **cameraYaw**: `number`

[0, 2PI)

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
