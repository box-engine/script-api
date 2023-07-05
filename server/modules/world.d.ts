/**
 * @module World
 */

import type { GameEntity } from './entity';
import type { GameEventChannel, GameEventFuture } from './events';
import type { GameVector3 } from './math';
import type { GamePlayer, GamePlayerEntity } from './player';

export declare class GameWorld {
  /**
   * @internal
   */
  constructor();

  /**
   
   * The entities in game can be searched using a jQuery selector-like syntax.
   * For more examples see {@link GameSelectorString}
   *
   * @param selector a selector search pattern
   * @returns the first entity which matches the selector/
   * @group Entity
   */
  querySelector<T extends GameSelectorString>(
    selector: T,
  ): EntitySelectorType[T] | null;

  /**
   
   * The entities in game can be searched using a jQuery selector-like syntax.
   * For more examples see {@link GameSelectorString}
   *
   * @param selector a selector search pattern
   * @returns All entities which match the selector
   * @group Entity
   */
  querySelectorAll<T extends GameSelectorString>(
    selector: T,
  ): EntitySelectorType[T][];

  /**
   * An event handler called each tick
   * @group Event
   */
  onTick: GameEventChannel<GameTickEvent>;
  /**
   * An event handler called each tick
   * @group Event
   */
  nextTick: GameEventFuture<GameTickEvent>;
}

/**
 * @ignore
 * @event
 */
export type WorldEventMap = {
  tick: GameTickEvent;
};

/**
 * Selectors are a powerful syntax for searching all of the objects in a game.  The interface for selectors in game is modeled after the DOM APIs.
 * 通过 {@link GameWorld.querySelector} 等方法来使用
 * ```javascript
 * const entities = world.querySelector('*');           // all entities in the world
 * const players = world.querySelectorAll('player');    // all players in the game
 * const localPlayer = world.querySelector('local-player');    // local player on the client (client-script only)
 * const theChair = world.querySelector('#chair');      // the first entity whose id is "chair"
 * const boxes = world.querySelectorAll('.box');        // all entities tagged with "box"
 * const boxChair = world.querySelector('.box .red');
 * ```
 */
export type GameSelectorString = keyof EntitySelectorType;
export type EntitySelectorType = {
  '*': GameEntity | GamePlayerEntity;
  'player': GamePlayerEntity;
  'local-player': GamePlayerEntity;
  [key: string]: GameEntity;
};

/**
 * An event which is fired each tick by {@link GameWorld.onTick}.
 * @event
 */
export class GameTickEvent {
  /**
   * Tick at which the event was fired
   */
  public tick: number;
  /**
   * Last tick which was handled
   */
  public prevTick: number;
  /**
   * If we had to skip any ticks due to the scripts lagging
   */
  public skip: boolean;
  /**
   * Wall clock time between ticks
   */
  public elapsedTimeMS: number;
  /**
   * @internal
   */
  constructor();
}

/**
 * Input events are generated whenever a player presses a button.
 * The tick of an event occurs at the exact instant the button was pressed by the player.
 * Triggered by {@link GameWorld.onPress}, {@link GameWorld.onRelease}, {@link GamePlayer.onPress}, {@link GamePlayer.onRelease}
 * @category events
 */
export class GameInputEvent {
  /**
   * @ignore
   */
  constructor();
  /**
   * The time the button was pressed
   */
  public tick: number;
  /**
   * A reference to the player which pressed the button
   */
  public entity: GamePlayerEntity;
  /**
   * The position of the entity at the time the pressed the button
   */
  public position: GameVector3;
  /**
   * The button which was input by the player
   */
  public button: GameButtonType;
  /**
   * If true; then this is a press event.  Otherwise if false this is a release event
   */
  public pressed: boolean;
  /**
   * The result of a raycast query initiated by the player at the exact instant they pressed the button from the perspective of their camera.
   */
  public raycast: GameRaycastResult;
}

/**
 * Type of a button pressed by a player
 * @category events
 */
export enum GameButtonType {
  WALK = 'walk',
  RUN = 'run',
  CROUCH = 'crouch',
  JUMP = 'jump',
  DOUBLE_JUMP = 'jump2',
  FLY = 'fly',
  ACTION0 = 'action0',
  ACTION1 = 'action1',
}

/**
 * Result of performing a raycast.  Contains information about the raycast and what it hit.
 */
export class GameRaycastResult {
  /**
   * @ignore
   */
  constructor();
  /**
   * If true; raycast hit an object
   */
  public hit: boolean;
  /**
   * The entity hit by the raycast
   */
  public hitEntity: GameEntity | null;
  /**
   * The voxel id hit by the raycast (0 if no voxel was hit)
   */
  public hitVoxel: number;

  /**
   * Start point of the ray cast
   */
  public origin: GameVector3;
  /**
   * Direction of the raycast
   */
  public direction: GameVector3;
  /**
   * Distance traveled along the ray
   */
  public distance: number;

  /**
   * Position of the ray intersection
   */
  public hitPosition: GameVector3;
  /**
   * Normal vector on surface at point of intersection
   */
  public normal: GameVector3;

  /**
   * If a voxel was hit; the grid coordinates of the hit voxel
   */
  public voxelIndex: GameVector3;
}
