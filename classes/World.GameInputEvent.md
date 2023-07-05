[@box/script-api](../README.md) / [Modules](../modules.md) / [World](../modules/World.md) / GameInputEvent

# Class: GameInputEvent

[World](../modules/World.md).GameInputEvent

Input events are generated whenever a player presses a button.
The tick of an event occurs at the exact instant the button was pressed by the player.
Triggered by GameWorld.onPress, GameWorld.onRelease, [onPress](Players.GamePlayer.md#onpress), [onRelease](Players.GamePlayer.md#onrelease)

## Table of contents

### Properties

- [button](World.GameInputEvent.md#button)
- [entity](World.GameInputEvent.md#entity)
- [position](World.GameInputEvent.md#position)
- [pressed](World.GameInputEvent.md#pressed)
- [raycast](World.GameInputEvent.md#raycast)
- [tick](World.GameInputEvent.md#tick)

## Properties

### button

• **button**: [`GameButtonType`](../enums/World.GameButtonType.md)

The button which was input by the player

#### Defined in

[modules/world.d.ts:135](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L135)

___

### entity

• **entity**: [`GamePlayerEntity`](Players.GamePlayerEntity.md)

A reference to the player which pressed the button

#### Defined in

[modules/world.d.ts:127](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L127)

___

### position

• **position**: [`GameVector3`](Math.GameVector3.md)

The position of the entity at the time the pressed the button

#### Defined in

[modules/world.d.ts:131](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L131)

___

### pressed

• **pressed**: `boolean`

If true; then this is a press event.  Otherwise if false this is a release event

#### Defined in

[modules/world.d.ts:139](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L139)

___

### raycast

• **raycast**: [`GameRaycastResult`](World.GameRaycastResult.md)

The result of a raycast query initiated by the player at the exact instant they pressed the button from the perspective of their camera.

#### Defined in

[modules/world.d.ts:143](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L143)

___

### tick

• **tick**: `number`

The time the button was pressed

#### Defined in

[modules/world.d.ts:123](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L123)
