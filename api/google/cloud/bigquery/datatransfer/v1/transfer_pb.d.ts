import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';


export class TransferConfig extends jspb.Message {
  getName(): string;
  setName(value: string): TransferConfig;

  getDestinationDatasetId(): string;
  setDestinationDatasetId(value: string): TransferConfig;

  getDisplayName(): string;
  setDisplayName(value: string): TransferConfig;

  getDataSourceId(): string;
  setDataSourceId(value: string): TransferConfig;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): TransferConfig;
  hasParams(): boolean;
  clearParams(): TransferConfig;

  getSchedule(): string;
  setSchedule(value: string): TransferConfig;

  getDataRefreshWindowDays(): number;
  setDataRefreshWindowDays(value: number): TransferConfig;

  getDisabled(): boolean;
  setDisabled(value: boolean): TransferConfig;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferConfig;
  hasUpdateTime(): boolean;
  clearUpdateTime(): TransferConfig;

  getNextRunTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNextRunTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferConfig;
  hasNextRunTime(): boolean;
  clearNextRunTime(): TransferConfig;

  getState(): TransferState;
  setState(value: TransferState): TransferConfig;

  getUserId(): number;
  setUserId(value: number): TransferConfig;

  getDatasetRegion(): string;
  setDatasetRegion(value: string): TransferConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TransferConfig): TransferConfig.AsObject;
  static serializeBinaryToWriter(message: TransferConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferConfig;
  static deserializeBinaryFromReader(message: TransferConfig, reader: jspb.BinaryReader): TransferConfig;
}

export namespace TransferConfig {
  export type AsObject = {
    name: string,
    destinationDatasetId: string,
    displayName: string,
    dataSourceId: string,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    schedule: string,
    dataRefreshWindowDays: number,
    disabled: boolean,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextRunTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: TransferState,
    userId: number,
    datasetRegion: string,
  }
}

export class TransferRun extends jspb.Message {
  getName(): string;
  setName(value: string): TransferRun;

  getScheduleTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferRun;
  hasScheduleTime(): boolean;
  clearScheduleTime(): TransferRun;

  getRunTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRunTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferRun;
  hasRunTime(): boolean;
  clearRunTime(): TransferRun;

  getErrorStatus(): google_rpc_status_pb.Status | undefined;
  setErrorStatus(value?: google_rpc_status_pb.Status): TransferRun;
  hasErrorStatus(): boolean;
  clearErrorStatus(): TransferRun;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferRun;
  hasStartTime(): boolean;
  clearStartTime(): TransferRun;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferRun;
  hasEndTime(): boolean;
  clearEndTime(): TransferRun;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferRun;
  hasUpdateTime(): boolean;
  clearUpdateTime(): TransferRun;

  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): TransferRun;
  hasParams(): boolean;
  clearParams(): TransferRun;

  getDestinationDatasetId(): string;
  setDestinationDatasetId(value: string): TransferRun;

  getDataSourceId(): string;
  setDataSourceId(value: string): TransferRun;

  getState(): TransferState;
  setState(value: TransferState): TransferRun;

  getUserId(): number;
  setUserId(value: number): TransferRun;

  getSchedule(): string;
  setSchedule(value: string): TransferRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRun.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRun): TransferRun.AsObject;
  static serializeBinaryToWriter(message: TransferRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRun;
  static deserializeBinaryFromReader(message: TransferRun, reader: jspb.BinaryReader): TransferRun;
}

export namespace TransferRun {
  export type AsObject = {
    name: string,
    scheduleTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    runTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    errorStatus?: google_rpc_status_pb.Status.AsObject,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    params?: google_protobuf_struct_pb.Struct.AsObject,
    destinationDatasetId: string,
    dataSourceId: string,
    state: TransferState,
    userId: number,
    schedule: string,
  }
}

export class TransferMessage extends jspb.Message {
  getMessageTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMessageTime(value?: google_protobuf_timestamp_pb.Timestamp): TransferMessage;
  hasMessageTime(): boolean;
  clearMessageTime(): TransferMessage;

  getSeverity(): TransferMessage.MessageSeverity;
  setSeverity(value: TransferMessage.MessageSeverity): TransferMessage;

  getMessageText(): string;
  setMessageText(value: string): TransferMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TransferMessage): TransferMessage.AsObject;
  static serializeBinaryToWriter(message: TransferMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferMessage;
  static deserializeBinaryFromReader(message: TransferMessage, reader: jspb.BinaryReader): TransferMessage;
}

export namespace TransferMessage {
  export type AsObject = {
    messageTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    severity: TransferMessage.MessageSeverity,
    messageText: string,
  }

  export enum MessageSeverity { 
    MESSAGE_SEVERITY_UNSPECIFIED = 0,
    INFO = 1,
    WARNING = 2,
    ERROR = 3,
  }
}

export enum TransferType { 
  TRANSFER_TYPE_UNSPECIFIED = 0,
  BATCH = 1,
  STREAMING = 2,
}
export enum TransferState { 
  TRANSFER_STATE_UNSPECIFIED = 0,
  PENDING = 2,
  RUNNING = 3,
  SUCCEEDED = 4,
  FAILED = 5,
  CANCELLED = 6,
}
