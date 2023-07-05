[@box/script-api](../README.md) / [Modules](../modules.md) / [World](../modules/World.md) / GameRaycastResult

# Class: GameRaycastResult

[World](../modules/World.md).GameRaycastResult

Result of performing a raycast.  Contains information about the raycast and what it hit.

## Properties

### direction

• **direction**: [`GameVector3`](Math.GameVector3.md)

Direction of the raycast

___

### distance

• **distance**: `number`

Distance traveled along the ray

___

### hit

• **hit**: `boolean`

If true; raycast hit an object

___

### hitEntity

• **hitEntity**: ``null`` \| [`GameEntity`](-2.GameEntity.md)

The entity hit by the raycast

___

### hitPosition

• **hitPosition**: [`GameVector3`](Math.GameVector3.md)

Position of the ray intersection

___

### hitVoxel

• **hitVoxel**: `number`

The voxel id hit by the raycast (0 if no voxel was hit)

___

### normal

• **normal**: [`GameVector3`](Math.GameVector3.md)

Normal vector on surface at point of intersection

___

### origin

• **origin**: [`GameVector3`](Math.GameVector3.md)

Start point of the ray cast

___

### voxelIndex

• **voxelIndex**: [`GameVector3`](Math.GameVector3.md)

If a voxel was hit; the grid coordinates of the hit voxel
