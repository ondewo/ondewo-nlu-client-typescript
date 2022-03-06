import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class Index extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): Index;

  getIndexId(): string;
  setIndexId(value: string): Index;

  getKind(): string;
  setKind(value: string): Index;

  getAncestor(): Index.AncestorMode;
  setAncestor(value: Index.AncestorMode): Index;

  getPropertiesList(): Array<Index.IndexedProperty>;
  setPropertiesList(value: Array<Index.IndexedProperty>): Index;
  clearPropertiesList(): Index;
  addProperties(value?: Index.IndexedProperty, index?: number): Index.IndexedProperty;

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
    projectId: string,
    indexId: string,
    kind: string,
    ancestor: Index.AncestorMode,
    propertiesList: Array<Index.IndexedProperty.AsObject>,
    state: Index.State,
  }

  export class IndexedProperty extends jspb.Message {
    getName(): string;
    setName(value: string): IndexedProperty;

    getDirection(): Index.Direction;
    setDirection(value: Index.Direction): IndexedProperty;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexedProperty.AsObject;
    static toObject(includeInstance: boolean, msg: IndexedProperty): IndexedProperty.AsObject;
    static serializeBinaryToWriter(message: IndexedProperty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexedProperty;
    static deserializeBinaryFromReader(message: IndexedProperty, reader: jspb.BinaryReader): IndexedProperty;
  }

  export namespace IndexedProperty {
    export type AsObject = {
      name: string,
      direction: Index.Direction,
    }
  }


  export enum AncestorMode { 
    ANCESTOR_MODE_UNSPECIFIED = 0,
    NONE = 1,
    ALL_ANCESTORS = 2,
  }

  export enum Direction { 
    DIRECTION_UNSPECIFIED = 0,
    ASCENDING = 1,
    DESCENDING = 2,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    DELETING = 3,
    ERROR = 4,
  }
}

