/**
 * @module  Global Variables
 */

import type { GameStorage } from './modules/storage';
import { GameHttp } from './modules/http';
import { GameWorld } from './modules/world';
import { GameRTC } from './modules/rtc';

/**

 * 代表游戏世界的全局对象
 */
declare const world: GameWorld;

/**
 * 此模块不对外开放，并仅支持调用白名单域名
 * @private
 */
declare const http: GameHttp;

/**
 * RTC 模块，用于语音通信
 */
declare const rtc: GameRTC;

/**
 * Game Data Storage
 */
declare const storage: GameStorage;
