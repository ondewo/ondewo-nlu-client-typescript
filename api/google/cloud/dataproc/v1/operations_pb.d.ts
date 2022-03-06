import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ClusterOperationStatus extends jspb.Message {
  getState(): ClusterOperationStatus.State;
  setState(value: ClusterOperationStatus.State): ClusterOperationStatus;

  getInnerState(): string;
  setInnerState(value: string): ClusterOperationStatus;

  getDetails(): string;
  setDetails(value: string): ClusterOperationStatus;

  getStateStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ClusterOperationStatus;
  hasStateStartTime(): boolean;
  clearStateStartTime(): ClusterOperationStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterOperationStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterOperationStatus): ClusterOperationStatus.AsObject;
  static serializeBinaryToWriter(message: ClusterOperationStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterOperationStatus;
  static deserializeBinaryFromReader(message: ClusterOperationStatus, reader: jspb.BinaryReader): ClusterOperationStatus;
}

export namespace ClusterOperationStatus {
  export type AsObject = {
    state: ClusterOperationStatus.State,
    innerState: string,
    details: string,
    stateStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum State { 
    UNKNOWN = 0,
    PENDING = 1,
    RUNNING = 2,
    DONE = 3,
  }
}

export class ClusterOperationMetadata extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): ClusterOperationMetadata;

  getClusterUuid(): string;
  setClusterUuid(value: string): ClusterOperationMetadata;

  getStatus(): ClusterOperationStatus | undefined;
  setStatus(value?: ClusterOperationStatus): ClusterOperationMetadata;
  hasStatus(): boolean;
  clearStatus(): ClusterOperationMetadata;

  getStatusHistoryList(): Array<ClusterOperationStatus>;
  setStatusHistoryList(value: Array<ClusterOperationStatus>): ClusterOperationMetadata;
  clearStatusHistoryList(): ClusterOperationMetadata;
  addStatusHistory(value?: ClusterOperationStatus, index?: number): ClusterOperationStatus;

  getOperationType(): string;
  setOperationType(value: string): ClusterOperationMetadata;

  getDescription(): string;
  setDescription(value: string): ClusterOperationMetadata;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ClusterOperationMetadata;

  getWarningsList(): Array<string>;
  setWarningsList(value: Array<string>): ClusterOperationMetadata;
  clearWarningsList(): ClusterOperationMetadata;
  addWarnings(value: string, index?: number): ClusterOperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterOperationMetadata): ClusterOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: ClusterOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterOperationMetadata;
  static deserializeBinaryFromReader(message: ClusterOperationMetadata, reader: jspb.BinaryReader): ClusterOperationMetadata;
}

export namespace ClusterOperationMetadata {
  export type AsObject = {
    clusterName: string,
    clusterUuid: string,
    status?: ClusterOperationStatus.AsObject,
    statusHistoryList: Array<ClusterOperationStatus.AsObject>,
    operationType: string,
    description: string,
    labelsMap: Array<[string, string]>,
    warningsList: Array<string>,
  }
}

