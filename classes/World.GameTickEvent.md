[@box/script-api](../README.md) / [Modules](../modules.md) / [World](../modules/World.md) / GameTickEvent

# Class: GameTickEvent

[World](../modules/World.md).GameTickEvent

An event which is fired each tick by [onTick](World.GameWorld.md#ontick).

## Properties

### elapsedTimeMS

• **elapsedTimeMS**: `number`

Wall clock time between ticks

___

### prevTick

• **prevTick**: `number`

Last tick which was handled

___

### skip

• **skip**: `boolean`

If we had to skip any ticks due to the scripts lagging

___

### tick

• **tick**: `number`

Tick at which the event was fired
