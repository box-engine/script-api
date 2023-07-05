/**
 * 可全局访问的对象
 * @module 全局对象
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
 * 此模块仅支持调用白名单域名
 * @internal
 */
declare const http: GameHttp;

/**
 * RTC模块，用于语音通信
 * @internal
 */
declare const rtc: GameRTC;

/**
 * 数据存储模块
 */
declare const storage: GameStorage;
