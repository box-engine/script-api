[@box/script-api](../README.md) / [Modules](../modules.md) / [World](../modules/World.md) / GameRaycastResult

# Class: GameRaycastResult

[World](../modules/World.md).GameRaycastResult

Result of performing a raycast.  Contains information about the raycast and what it hit.

## Table of contents

### Properties

- [direction](World.GameRaycastResult.md#direction)
- [distance](World.GameRaycastResult.md#distance)
- [hit](World.GameRaycastResult.md#hit)
- [hitEntity](World.GameRaycastResult.md#hitentity)
- [hitPosition](World.GameRaycastResult.md#hitposition)
- [hitVoxel](World.GameRaycastResult.md#hitvoxel)
- [normal](World.GameRaycastResult.md#normal)
- [origin](World.GameRaycastResult.md#origin)
- [voxelIndex](World.GameRaycastResult.md#voxelindex)

## Properties

### direction

• **direction**: [`GameVector3`](Math.GameVector3.md)

Direction of the raycast

#### Defined in

[modules/world.d.ts:189](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L189)

___

### distance

• **distance**: `number`

Distance traveled along the ray

#### Defined in

[modules/world.d.ts:193](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L193)

___

### hit

• **hit**: `boolean`

If true; raycast hit an object

#### Defined in

[modules/world.d.ts:172](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L172)

___

### hitEntity

• **hitEntity**: ``null`` \| [`GameEntity`](-2.GameEntity.md)

The entity hit by the raycast

#### Defined in

[modules/world.d.ts:176](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L176)

___

### hitPosition

• **hitPosition**: [`GameVector3`](Math.GameVector3.md)

Position of the ray intersection

#### Defined in

[modules/world.d.ts:198](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L198)

___

### hitVoxel

• **hitVoxel**: `number`

The voxel id hit by the raycast (0 if no voxel was hit)

#### Defined in

[modules/world.d.ts:180](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L180)

___

### normal

• **normal**: [`GameVector3`](Math.GameVector3.md)

Normal vector on surface at point of intersection

#### Defined in

[modules/world.d.ts:202](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L202)

___

### origin

• **origin**: [`GameVector3`](Math.GameVector3.md)

Start point of the ray cast

#### Defined in

[modules/world.d.ts:185](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L185)

___

### voxelIndex

• **voxelIndex**: [`GameVector3`](Math.GameVector3.md)

If a voxel was hit; the grid coordinates of the hit voxel

#### Defined in

[modules/world.d.ts:207](https://github.com/box-engine/script-api/blob/861e99e/server/modules/world.d.ts#L207)
