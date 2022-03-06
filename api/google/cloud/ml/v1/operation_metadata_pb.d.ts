import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_ml_v1_model_service_pb from '../../../../google/cloud/ml/v1/model_service_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class OperationMetadata extends jspb.Message {
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasCreateTime(): boolean;
  clearCreateTime(): OperationMetadata;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasStartTime(): boolean;
  clearStartTime(): OperationMetadata;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasEndTime(): boolean;
  clearEndTime(): OperationMetadata;

  getIsCancellationRequested(): boolean;
  setIsCancellationRequested(value: boolean): OperationMetadata;

  getOperationType(): OperationMetadata.OperationType;
  setOperationType(value: OperationMetadata.OperationType): OperationMetadata;

  getModelName(): string;
  setModelName(value: string): OperationMetadata;

  getVersion(): google_cloud_ml_v1_model_service_pb.Version | undefined;
  setVersion(value?: google_cloud_ml_v1_model_service_pb.Version): OperationMetadata;
  hasVersion(): boolean;
  clearVersion(): OperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isCancellationRequested: boolean,
    operationType: OperationMetadata.OperationType,
    modelName: string,
    version?: google_cloud_ml_v1_model_service_pb.Version.AsObject,
  }

  export enum OperationType { 
    OPERATION_TYPE_UNSPECIFIED = 0,
    CREATE_VERSION = 1,
    DELETE_VERSION = 2,
    DELETE_MODEL = 3,
  }
}

