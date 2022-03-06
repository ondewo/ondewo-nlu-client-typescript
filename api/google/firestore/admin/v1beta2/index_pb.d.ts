import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class Index extends jspb.Message {
  getName(): string;
  setName(value: string): Index;

  getQueryScope(): Index.QueryScope;
  setQueryScope(value: Index.QueryScope): Index;

  getFieldsList(): Array<Index.IndexField>;
  setFieldsList(value: Array<Index.IndexField>): Index;
  clearFieldsList(): Index;
  addFields(value?: Index.IndexField, index?: number): Index.IndexField;

  getState(): Index.State;
  setState(value: Index.State): Index;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Index.AsObject;
  static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
  static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Index;
  static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
}

export namespace Index {
  export type AsObject = {
    name: string,
    queryScope: Index.QueryScope,
    fieldsList: Array<Index.IndexField.AsObject>,
    state: Index.State,
  }

  export class IndexField extends jspb.Message {
    getFieldPath(): string;
    setFieldPath(value: string): IndexField;

    getOrder(): Index.IndexField.Order;
    setOrder(value: Index.IndexField.Order): IndexField;

    getArrayConfig(): Index.IndexField.ArrayConfig;
    setArrayConfig(value: Index.IndexField.ArrayConfig): IndexField;

    getValueModeCase(): IndexField.ValueModeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexField.AsObject;
    static toObject(includeInstance: boolean, msg: IndexField): IndexField.AsObject;
    static serializeBinaryToWriter(message: IndexField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexField;
    static deserializeBinaryFromReader(message: IndexField, reader: jspb.BinaryReader): IndexField;
  }

  export namespace IndexField {
    export type AsObject = {
      fieldPath: string,
      order: Index.IndexField.Order,
      arrayConfig: Index.IndexField.ArrayConfig,
    }

    export enum Order { 
      ORDER_UNSPECIFIED = 0,
      ASCENDING = 1,
      DESCENDING = 2,
    }

    export enum ArrayConfig { 
      ARRAY_CONFIG_UNSPECIFIED = 0,
      CONTAINS = 1,
    }

    export enum ValueModeCase { 
      VALUE_MODE_NOT_SET = 0,
      ORDER = 2,
      ARRAY_CONFIG = 3,
    }
  }


  export enum QueryScope { 
    QUERY_SCOPE_UNSPECIFIED = 0,
    COLLECTION = 1,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    NEEDS_REPAIR = 3,
  }
}

