[@box/script-api](../README.md) / [Modules](../modules.md) / World

# Module: World

## Table of contents

### events Enumerations

- [GameButtonType](../enums/World.GameButtonType.md)

### Other Classes

- [GameRaycastResult](../classes/World.GameRaycastResult.md)
- [GameWorld](../classes/World.GameWorld.md)

### events Classes

- [GameInputEvent](../classes/World.GameInputEvent.md)

### Type Aliases

- [EntitySelectorType](World.md#entityselectortype)
- [GameSelectorString](World.md#gameselectorstring)

### Events

- [GameTickEvent](../classes/World.GameTickEvent.md)

## Type Aliases

### EntitySelectorType

Ƭ **EntitySelectorType**: `Object`

#### Index signature

▪ [key: `string`]: [`GameEntity`](../classes/-2.GameEntity.md)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `*` | [`GameEntity`](../classes/-2.GameEntity.md) \| [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) |
| `local-player` | [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) |
| `player` | [`GamePlayerEntity`](../classes/Players.GamePlayerEntity.md) |

#### Defined in

[modules/world.d.ts:75](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L75)

___

### GameSelectorString

Ƭ **GameSelectorString**: keyof [`EntitySelectorType`](World.md#entityselectortype)

Selectors are a powerful syntax for searching all of the objects in a game.  The interface for selectors in game is modeled after the DOM APIs.
通过 [querySelector](../classes/World.GameWorld.md#queryselector) 等方法来使用
```javascript
const entities = world.querySelector('*');           // all entities in the world
const players = world.querySelectorAll('player');    // all players in the game
const localPlayer = world.querySelector('local-player');    // local player on the client (client-script only)
const theChair = world.querySelector('#chair');      // the first entity whose id is "chair"
const boxes = world.querySelectorAll('.box');        // all entities tagged with "box"
const boxChair = world.querySelector('.box .red');
```

#### Defined in

[modules/world.d.ts:74](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L74)
