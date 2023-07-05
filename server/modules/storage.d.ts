/**
 * 数据存储模块，管理游戏中的数据。
 * @module 数据存储
 */

/**
 * 数据存储模块，用于创建{@link GameDataStorage | 数据存储空间}。
 */
export class GameStorage {
  /**
   * @internal
   */
  constructor();
  /**
   * 连接指定数据存储空间，如果不存在则创建一个新的空间。
   *
   *
   * @param key 指定空间的名称，长度不超过50个字符
   * @returns 返回一个{@link GameDataStorage | 数据存储空间}对象
   */
  public getDataStorage(key: string): GameDataStorage;
}

/**
 * 代表数据存储空间的类。仅能通过 {@link GameStorage.getDataStorage} 创建。能够以键值对的形式存储数据，提供方法处理空间内键值对相关的操作。
 *
 * #### 存储空间隔离
 * - 存储空间按地图隔离，且编辑模式与游玩模式的空间默认隔离，即当游戏服务器尝试连接指定名称的空间时：
 *   - 同一地图不同服务器，连接到的空间相同
 *   - 不同地图的服务器，连接到的空间不同
 *   - 编辑模式与游戏服务器连接的空间不同
 * @class GameDataStorage
 */
export class GameDataStorage {
  /**
   * 空间名称
   */
  public readonly key: string;

  /**
   * 传入指定键与值，无论该键是否存在，均将值设置到此键上。
   * @param key 需要设置的键
   * @param value 需要设置的值
   * @return 返回 Promise 对象，当设置完成时 resolve，否则 reject。
   */
  public set(key: string, value: JSONValue): Promise<void>;

  /**
   * 使用传入的方法更新键值对。
   * @param key 需要更新的键
   * @param handler 处理更新的方法，接受一个参数，为当前键的值，返回一个更新后的值
   * @return 返回 Promise 对象，当更新完成时 resolve，否则 reject。
   */
  public update(
    key: string,
    handler: (prevValue: ReturnValue) => JSONValue,
  ): Promise<void>;

  /**
   * 获取指定键对应的值
   * @param key 指定的键
   * @return 返回 Promise 对象，当获取完成时 resolve，否则 reject，resolve 时返回对应{@link ReturnValue | 键值对内容}。
   */
  public get(key: string): Promise<ReturnValue>;

  /**
   * 获取指定键的对应版本的值，由于缺少查询版本的方法，暂不公开
   * @internal
   * @param key 指定的键
   * @param version 指定的版本
   * @return 返回 Promise 对象，当获取完成时 resolve，否则 reject，resolve 时返回键对应{@link ReturnValue | 键值对内容}。
   */
  public getVersion(key: string, version: string): Promise<ReturnValue>;
  /**
   * 批量获取键值对
   * @param options 批量获取键值对的配置项
   * @return 返回 Promise 对象，resolve 时返回{@link QueryList | 键值对查询表}。
   */
  public list(options: ListPageOptions): Promise<QueryList>;

  /**
   * 删除指定键值对
   * @param key 指定的键
   * @return 返回 Promise 对象，resolve 时返回被删除的 {@link ReturnValue | 键值对内容}。
   */
  public remove(key: string): Promise<ReturnValue>;
  /**
   * @internal
   */
  constructor();
}

/**
 * 键值对查询列表，用于批量获取键值对，通过 {@link GameDataStorage.list} 方法返回。
 * 列表根据配置项被划分为一个或多个分页，每个分页最多包含 {@link ListPageOptions | pageSize} 个键值对。
 */
export class QueryList {
  /**
   * 按 {@link ListPageOptions | pageSize} 获取当前页的键值对
   * @returns 返回当前页的键值对内容
   */
  public getCurrentPage(): ReturnValue[];
  /**
   * 翻到下一页，执行后 {@link getCurrentPage} 将返回下一页的键值对内容
   * @returns 返回 Promise 对象，resolve表示翻页成功，reject 后表示翻页失败
   */
  public nextPage(): Promise<void>;

  /**
   * 是否为最后一页，如果翻过头了，也会为 true
   */
  public readonly isLastPage: boolean;
  /**
   * @internal
   */
  constructor();
}

/**
 * 允许存储的值类型
 */
export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

/**
 * 键值对内容
 */
export type ReturnValue =
  | {
      key: 'string';
      value: JSONValue;
      version: string;
      updateTime: number;
      createTime: number;
    }
  | undefined;

/**
 * 批量获取键值对的配置项
 */
export type ListPageOptions = {
  cursor: number;
  pageSize?: number;
};
