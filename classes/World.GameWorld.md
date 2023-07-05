[@box/script-api](../README.md) / [Modules](../modules.md) / [World](../modules/World.md) / GameWorld

# Class: GameWorld

[World](../modules/World.md).GameWorld

## Table of contents

### Entity

- [querySelector](World.GameWorld.md#queryselector)
- [querySelectorAll](World.GameWorld.md#queryselectorall)

### Event

- [nextTick](World.GameWorld.md#nexttick)
- [onTick](World.GameWorld.md#ontick)

## Entity

### querySelector

▸ **querySelector**<`T`\>(`selector`): ``null`` \| [`EntitySelectorType`](../modules/World.md#entityselectortype)[`T`]

The entities in game can be searched using a jQuery selector-like syntax.
For more examples see [GameSelectorString](../modules/World.md#gameselectorstring)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`EntitySelectorType`](../modules/World.md#entityselectortype) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `T` | a selector search pattern |

#### Returns

``null`` \| [`EntitySelectorType`](../modules/World.md#entityselectortype)[`T`]

the first entity which matches the selector/

#### Defined in

[modules/world.d.ts:25](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L25)

___

### querySelectorAll

▸ **querySelectorAll**<`T`\>(`selector`): [`EntitySelectorType`](../modules/World.md#entityselectortype)[`T`][]

The entities in game can be searched using a jQuery selector-like syntax.
For more examples see [GameSelectorString](../modules/World.md#gameselectorstring)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`EntitySelectorType`](../modules/World.md#entityselectortype) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `T` | a selector search pattern |

#### Returns

[`EntitySelectorType`](../modules/World.md#entityselectortype)[`T`][]

All entities which match the selector

#### Defined in

[modules/world.d.ts:38](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L38)

## Event

### nextTick

• **nextTick**: [`GameEventFuture`](../modules/_.md#gameeventfuture)<[`GameTickEvent`](World.GameTickEvent.md)\>

An event handler called each tick

#### Defined in

[modules/world.d.ts:51](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L51)

___

### onTick

• **onTick**: [`GameEventChannel`](../modules/_.md#gameeventchannel)<[`GameTickEvent`](World.GameTickEvent.md)\>

An event handler called each tick

#### Defined in

[modules/world.d.ts:46](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L46)
