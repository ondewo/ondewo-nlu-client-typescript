import * as jspb from 'google-protobuf'

import * as google_devtools_containeranalysis_v1beta1_common_common_pb from '../../../../../google/devtools/containeranalysis/v1beta1/common/common_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../../../../google/rpc/status_pb';


export class Discovery extends jspb.Message {
  getAnalysisKind(): google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind;
  setAnalysisKind(value: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind): Discovery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discovery.AsObject;
  static toObject(includeInstance: boolean, msg: Discovery): Discovery.AsObject;
  static serializeBinaryToWriter(message: Discovery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discovery;
  static deserializeBinaryFromReader(message: Discovery, reader: jspb.BinaryReader): Discovery;
}

export namespace Discovery {
  export type AsObject = {
    analysisKind: google_devtools_containeranalysis_v1beta1_common_common_pb.NoteKind,
  }
}

export class Details extends jspb.Message {
  getDiscovered(): Discovered | undefined;
  setDiscovered(value?: Discovered): Details;
  hasDiscovered(): boolean;
  clearDiscovered(): Details;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    discovered?: Discovered.AsObject,
  }
}

export class Discovered extends jspb.Message {
  getContinuousAnalysis(): Discovered.ContinuousAnalysis;
  setContinuousAnalysis(value: Discovered.ContinuousAnalysis): Discovered;

  getLastAnalysisTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAnalysisTime(value?: google_protobuf_timestamp_pb.Timestamp): Discovered;
  hasLastAnalysisTime(): boolean;
  clearLastAnalysisTime(): Discovered;

  getAnalysisStatus(): Discovered.AnalysisStatus;
  setAnalysisStatus(value: Discovered.AnalysisStatus): Discovered;

  getAnalysisStatusError(): google_rpc_status_pb.Status | undefined;
  setAnalysisStatusError(value?: google_rpc_status_pb.Status): Discovered;
  hasAnalysisStatusError(): boolean;
  clearAnalysisStatusError(): Discovered;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discovered.AsObject;
  static toObject(includeInstance: boolean, msg: Discovered): Discovered.AsObject;
  static serializeBinaryToWriter(message: Discovered, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discovered;
  static deserializeBinaryFromReader(message: Discovered, reader: jspb.BinaryReader): Discovered;
}

export namespace Discovered {
  export type AsObject = {
    continuousAnalysis: Discovered.ContinuousAnalysis,
    lastAnalysisTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    analysisStatus: Discovered.AnalysisStatus,
    analysisStatusError?: google_rpc_status_pb.Status.AsObject,
  }

  export enum ContinuousAnalysis { 
    CONTINUOUS_ANALYSIS_UNSPECIFIED = 0,
    ACTIVE = 1,
    INACTIVE = 2,
  }

  export enum AnalysisStatus { 
    ANALYSIS_STATUS_UNSPECIFIED = 0,
    PENDING = 1,
    SCANNING = 2,
    FINISHED_SUCCESS = 3,
    FINISHED_FAILED = 4,
    FINISHED_UNSUPPORTED = 5,
  }
}

