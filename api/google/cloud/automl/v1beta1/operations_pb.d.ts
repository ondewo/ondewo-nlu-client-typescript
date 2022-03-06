import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_model_pb from '../../../../google/cloud/automl/v1beta1/model_pb';
import * as google_cloud_automl_v1beta1_model_evaluation_pb from '../../../../google/cloud/automl/v1beta1/model_evaluation_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class OperationMetadata extends jspb.Message {
  getCreateModelDetails(): CreateModelOperationMetadata | undefined;
  setCreateModelDetails(value?: CreateModelOperationMetadata): OperationMetadata;
  hasCreateModelDetails(): boolean;
  clearCreateModelDetails(): OperationMetadata;

  getProgressPercent(): number;
  setProgressPercent(value: number): OperationMetadata;

  getPartialFailuresList(): Array<google_rpc_status_pb.Status>;
  setPartialFailuresList(value: Array<google_rpc_status_pb.Status>): OperationMetadata;
  clearPartialFailuresList(): OperationMetadata;
  addPartialFailures(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasCreateTime(): boolean;
  clearCreateTime(): OperationMetadata;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
  hasUpdateTime(): boolean;
  clearUpdateTime(): OperationMetadata;

  getDetailsCase(): OperationMetadata.DetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
  static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationMetadata;
  static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
  export type AsObject = {
    createModelDetails?: CreateModelOperationMetadata.AsObject,
    progressPercent: number,
    partialFailuresList: Array<google_rpc_status_pb.Status.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum DetailsCase { 
    DETAILS_NOT_SET = 0,
    CREATE_MODEL_DETAILS = 10,
  }
}

export class CreateModelOperationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelOperationMetadata): CreateModelOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: CreateModelOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelOperationMetadata;
  static deserializeBinaryFromReader(message: CreateModelOperationMetadata, reader: jspb.BinaryReader): CreateModelOperationMetadata;
}

export namespace CreateModelOperationMetadata {
  export type AsObject = {
  }
}

