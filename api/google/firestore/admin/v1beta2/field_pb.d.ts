import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_firestore_admin_v1beta2_index_pb from '../../../../google/firestore/admin/v1beta2/index_pb';


export class Field extends jspb.Message {
  getName(): string;
  setName(value: string): Field;

  getIndexConfig(): Field.IndexConfig | undefined;
  setIndexConfig(value?: Field.IndexConfig): Field;
  hasIndexConfig(): boolean;
  clearIndexConfig(): Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Field.AsObject;
  static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Field;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
  export type AsObject = {
    name: string,
    indexConfig?: Field.IndexConfig.AsObject,
  }

  export class IndexConfig extends jspb.Message {
    getIndexesList(): Array<google_firestore_admin_v1beta2_index_pb.Index>;
    setIndexesList(value: Array<google_firestore_admin_v1beta2_index_pb.Index>): IndexConfig;
    clearIndexesList(): IndexConfig;
    addIndexes(value?: google_firestore_admin_v1beta2_index_pb.Index, index?: number): google_firestore_admin_v1beta2_index_pb.Index;

    getUsesAncestorConfig(): boolean;
    setUsesAncestorConfig(value: boolean): IndexConfig;

    getAncestorField(): string;
    setAncestorField(value: string): IndexConfig;

    getReverting(): boolean;
    setReverting(value: boolean): IndexConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexConfig.AsObject;
    static toObject(includeInstance: boolean, msg: IndexConfig): IndexConfig.AsObject;
    static serializeBinaryToWriter(message: IndexConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexConfig;
    static deserializeBinaryFromReader(message: IndexConfig, reader: jspb.BinaryReader): IndexConfig;
  }

  export namespace IndexConfig {
    export type AsObject = {
      indexesList: Array<google_firestore_admin_v1beta2_index_pb.Index.AsObject>,
      usesAncestorConfig: boolean,
      ancestorField: string,
      reverting: boolean,
    }
  }

}

