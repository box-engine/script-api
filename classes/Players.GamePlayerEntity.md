[@box/script-api](../README.md) / [Modules](../modules.md) / [Players](../modules/Players.md) / GamePlayerEntity

# Class: GamePlayerEntity

[Players](../modules/Players.md).GamePlayerEntity

实体的一种，比 GameEntity 多了一个控制玩家的组件

## Hierarchy

- [`GameEntity`](-2.GameEntity.md)

  ↳ **`GamePlayerEntity`**

## Table of contents

### Components

- [motion](Players.GamePlayerEntity.md#motion)
- [player](Players.GamePlayerEntity.md#player)

### Physics

- [position](Players.GamePlayerEntity.md#position)

## Components

### motion

• **motion**: [`GameMotionController`](-1.GameMotionController.md)

控制 Entity 动作

#### Inherited from

[GameEntity](-2.GameEntity.md).[motion](-2.GameEntity.md#motion)

#### Defined in

[modules/entity.d.ts:20](https://github.com/box-engine/script-api/blob/861e99e/server/modules/entity.d.ts#L20)

___

### player

• `Readonly` **player**: [`GamePlayer`](Players.GamePlayer.md)

#### Defined in

[modules/player.d.ts:19](https://github.com/box-engine/script-api/blob/861e99e/server/modules/player.d.ts#L19)

## Physics

### position

• **position**: [`GameVector3`](Math.GameVector3.md)

#### Inherited from

[GameEntity](-2.GameEntity.md).[position](-2.GameEntity.md#position)

#### Defined in

[modules/entity.d.ts:25](https://github.com/box-engine/script-api/blob/861e99e/server/modules/entity.d.ts#L25)
