import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class IndexField extends jspb.Message {
  getFieldPath(): string;
  setFieldPath(value: string): IndexField;

  getMode(): IndexField.Mode;
  setMode(value: IndexField.Mode): IndexField;

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
    mode: IndexField.Mode,
  }

  export enum Mode { 
    MODE_UNSPECIFIED = 0,
    ASCENDING = 2,
    DESCENDING = 3,
    ARRAY_CONTAINS = 4,
  }
}

export class Index extends jspb.Message {
  getName(): string;
  setName(value: string): Index;

  getCollectionId(): string;
  setCollectionId(value: string): Index;

  getFieldsList(): Array<IndexField>;
  setFieldsList(value: Array<IndexField>): Index;
  clearFieldsList(): Index;
  addFields(value?: IndexField, index?: number): IndexField;

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
    collectionId: string,
    fieldsList: Array<IndexField.AsObject>,
    state: Index.State,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    CREATING = 3,
    READY = 2,
    ERROR = 5,
  }
}

