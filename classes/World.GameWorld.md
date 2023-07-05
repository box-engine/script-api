[@box/script-api](../README.md) / [Modules](../modules.md) / [World](../modules/World.md) / GameWorld

# Class: GameWorld

[World](../modules/World.md).GameWorld

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

## Event

### nextTick

• **nextTick**: [`GameEventFuture`](../modules/_.md#gameeventfuture)<[`GameTickEvent`](World.GameTickEvent.md)\>

An event handler called each tick

___

### onTick

• **onTick**: [`GameEventChannel`](../modules/_.md#gameeventchannel)<[`GameTickEvent`](World.GameTickEvent.md)\>

An event handler called each tick
