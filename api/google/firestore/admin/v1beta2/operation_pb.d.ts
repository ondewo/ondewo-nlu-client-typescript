import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_firestore_admin_v1beta2_index_pb from '../../../../google/firestore/admin/v1beta2/index_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class FieldOperationMetadata extends jspb.Message {
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): FieldOperationMetadata;
  hasStartTime(): boolean;
  clearStartTime(): FieldOperationMetadata;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): FieldOperationMetadata;
  hasEndTime(): boolean;
  clearEndTime(): FieldOperationMetadata;

  getField(): string;
  setField(value: string): FieldOperationMetadata;

  getIndexConfigDeltasList(): Array<FieldOperationMetadata.IndexConfigDelta>;
  setIndexConfigDeltasList(value: Array<FieldOperationMetadata.IndexConfigDelta>): FieldOperationMetadata;
  clearIndexConfigDeltasList(): FieldOperationMetadata;
  addIndexConfigDeltas(value?: FieldOperationMetadata.IndexConfigDelta, index?: number): FieldOperationMetadata.IndexConfigDelta;

  getState(): OperationState;
  setState(value: OperationState): FieldOperationMetadata;

  getDocumentProgress(): Progress | undefined;
  setDocumentProgress(value?: Progress): FieldOperationMetadata;
  hasDocumentProgress(): boolean;
  clearDocumentProgress(): FieldOperationMetadata;

  getBytesProgress(): Progress | undefined;
  setBytesProgress(value?: Progress): FieldOperationMetadata;
  hasBytesProgress(): boolean;
  clearBytesProgress(): FieldOperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FieldOperationMetadata): FieldOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: FieldOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldOperationMetadata;
  static deserializeBinaryFromReader(message: FieldOperationMetadata, reader: jspb.BinaryReader): FieldOperationMetadata;
}

export namespace FieldOperationMetadata {
  export type AsObject = {
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    field: string,
    indexConfigDeltasList: Array<FieldOperationMetadata.IndexConfigDelta.AsObject>,
    state: OperationState,
    documentProgress?: Progress.AsObject,
    bytesProgress?: Progress.AsObject,
  }

  export class IndexConfigDelta extends jspb.Message {
    getChangeType(): FieldOperationMetadata.IndexConfigDelta.ChangeType;
    setChangeType(value: FieldOperationMetadata.IndexConfigDelta.ChangeType): IndexConfigDelta;

    getIndex(): google_firestore_admin_v1beta2_index_pb.Index | undefined;
    setIndex(value?: google_firestore_admin_v1beta2_index_pb.Index): IndexConfigDelta;
    hasIndex(): boolean;
    clearIndex(): IndexConfigDelta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndexConfigDelta.AsObject;
    static toObject(includeInstance: boolean, msg: IndexConfigDelta): IndexConfigDelta.AsObject;
    static serializeBinaryToWriter(message: IndexConfigDelta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndexConfigDelta;
    static deserializeBinaryFromReader(message: IndexConfigDelta, reader: jspb.BinaryReader): IndexConfigDelta;
  }

  export namespace IndexConfigDelta {
    export type AsObject = {
      changeType: FieldOperationMetadata.IndexConfigDelta.ChangeType,
      index?: google_firestore_admin_v1beta2_index_pb.Index.AsObject,
    }

    export enum ChangeType { 
      CHANGE_TYPE_UNSPECIFIED = 0,
      ADD = 1,
      REMOVE = 2,
    }
  }

}

export class Progress extends jspb.Message {
  getEstimatedWork(): number;
  setEstimatedWork(value: number): Progress;

  getCompletedWork(): number;
  setCompletedWork(value: number): Progress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Progress.AsObject;
  static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
  static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Progress;
  static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
}

export namespace Progress {
  export type AsObject = {
    estimatedWork: number,
    completedWork: number,
  }
}

export enum OperationState { 
  OPERATION_STATE_UNSPECIFIED = 0,
  INITIALIZING = 1,
  PROCESSING = 2,
  CANCELLING = 3,
  FINALIZING = 4,
  SUCCESSFUL = 5,
  FAILED = 6,
  CANCELLED = 7,
}
