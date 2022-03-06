import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ScanRun extends jspb.Message {
  getName(): string;
  setName(value: string): ScanRun;

  getExecutionState(): ScanRun.ExecutionState;
  setExecutionState(value: ScanRun.ExecutionState): ScanRun;

  getResultState(): ScanRun.ResultState;
  setResultState(value: ScanRun.ResultState): ScanRun;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ScanRun;
  hasStartTime(): boolean;
  clearStartTime(): ScanRun;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ScanRun;
  hasEndTime(): boolean;
  clearEndTime(): ScanRun;

  getUrlsCrawledCount(): number;
  setUrlsCrawledCount(value: number): ScanRun;

  getUrlsTestedCount(): number;
  setUrlsTestedCount(value: number): ScanRun;

  getHasVulnerabilities(): boolean;
  setHasVulnerabilities(value: boolean): ScanRun;

  getProgressPercent(): number;
  setProgressPercent(value: number): ScanRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanRun.AsObject;
  static toObject(includeInstance: boolean, msg: ScanRun): ScanRun.AsObject;
  static serializeBinaryToWriter(message: ScanRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanRun;
  static deserializeBinaryFromReader(message: ScanRun, reader: jspb.BinaryReader): ScanRun;
}

export namespace ScanRun {
  export type AsObject = {
    name: string,
    executionState: ScanRun.ExecutionState,
    resultState: ScanRun.ResultState,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    urlsCrawledCount: number,
    urlsTestedCount: number,
    hasVulnerabilities: boolean,
    progressPercent: number,
  }

  export enum ExecutionState { 
    EXECUTION_STATE_UNSPECIFIED = 0,
    QUEUED = 1,
    SCANNING = 2,
    FINISHED = 3,
  }

  export enum ResultState { 
    RESULT_STATE_UNSPECIFIED = 0,
    SUCCESS = 1,
    ERROR = 2,
    KILLED = 3,
  }
}

