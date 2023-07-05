[@box/script-api](../README.md) / [Modules](../modules.md) / [World](../modules/World.md) / GameInputEvent

# Class: GameInputEvent

[World](../modules/World.md).GameInputEvent

Input events are generated whenever a player presses a button.
The tick of an event occurs at the exact instant the button was pressed by the player.
Triggered by GameWorld.onPress, GameWorld.onRelease, [onPress](Players.GamePlayer.md#onpress), [onRelease](Players.GamePlayer.md#onrelease)

## Properties

### button

• **button**: [`GameButtonType`](../enums/World.GameButtonType.md)

The button which was input by the player

___

### entity

• **entity**: [`GamePlayerEntity`](Players.GamePlayerEntity.md)

A reference to the player which pressed the button

___

### position

• **position**: [`GameVector3`](Math.GameVector3.md)

The position of the entity at the time the pressed the button

___

### pressed

• **pressed**: `boolean`

If true; then this is a press event.  Otherwise if false this is a release event

___

### raycast

• **raycast**: [`GameRaycastResult`](World.GameRaycastResult.md)

The result of a raycast query initiated by the player at the exact instant they pressed the button from the perspective of their camera.

___

### tick

• **tick**: `number`

The time the button was pressed
