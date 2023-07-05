[@box/script-api](../README.md) / [Modules](../modules.md) / [World](../modules/World.md) / GameTickEvent

# Class: GameTickEvent

[World](../modules/World.md).GameTickEvent

An event which is fired each tick by [onTick](World.GameWorld.md#ontick).

## Table of contents

### Properties

- [elapsedTimeMS](World.GameTickEvent.md#elapsedtimems)
- [prevTick](World.GameTickEvent.md#prevtick)
- [skip](World.GameTickEvent.md#skip)
- [tick](World.GameTickEvent.md#tick)

## Properties

### elapsedTimeMS

• **elapsedTimeMS**: `number`

Wall clock time between ticks

#### Defined in

[modules/world.d.ts:102](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L102)

___

### prevTick

• **prevTick**: `number`

Last tick which was handled

#### Defined in

[modules/world.d.ts:94](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L94)

___

### skip

• **skip**: `boolean`

If we had to skip any ticks due to the scripts lagging

#### Defined in

[modules/world.d.ts:98](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L98)

___

### tick

• **tick**: `number`

Tick at which the event was fired

#### Defined in

[modules/world.d.ts:90](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L90)
