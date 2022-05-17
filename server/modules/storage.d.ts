/**
 * @module Storage
 */

export class GameStorage {
  public getDataStorage: (key: string) => GameDataStorage;
}

/**
 *
 * A Data storage class
 * @export
 * @class GameDataStorage
 */
export class GameDataStorage {
  public readonly key: string;
  // set value
  public set: (key: string, value: JSONValue) => Promise<void>;
  // update value
  public update: (
    key: string,
    handler: (prevValue: ReturnValue) => JSONValue,
  ) => Promise<void>;
  public get: (key: string) => Promise<ReturnValue>;
  // get a value of specific version with key
  public getVersion: (key: string, version: string) => Promise<ReturnValue>;
  public list(options: ListPageOptions): Promise<QueryList>;
  public remove: (key: string) => Promise<ReturnValue>;
  constructor();
}

export class QueryList {
  public getCurrentPage: () => ReturnValue[];
  public nextPage: () => Promise<void>;
  public isLastPage: boolean;
  constructor();
}

export type DB_ERROR_STATUS =
  | 'PARAMS_INVALID'
  | 'DB_NAME_INVALID'
  | 'KEY_INVALID'
  | 'VALUE_INVALID'
  | 'SERVER_FETCH_ERROR'
  | 'UNKNOWN';

export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export type ReturnValue =
  | {
      key: 'string';
      value: JSONValue;
      version: string;
      updateTime: number;
      createTime: number;
    }
  | undefined;

export type ListPageOptions = {
  cursor: number;
  pageSize?: number;
};
