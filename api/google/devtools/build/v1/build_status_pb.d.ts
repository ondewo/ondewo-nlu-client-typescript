import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class BuildStatus extends jspb.Message {
  getResult(): BuildStatus.Result;
  setResult(value: BuildStatus.Result): BuildStatus;

  getDetails(): google_protobuf_any_pb.Any | undefined;
  setDetails(value?: google_protobuf_any_pb.Any): BuildStatus;
  hasDetails(): boolean;
  clearDetails(): BuildStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildStatus.AsObject;
  static toObject(includeInstance: boolean, msg: BuildStatus): BuildStatus.AsObject;
  static serializeBinaryToWriter(message: BuildStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildStatus;
  static deserializeBinaryFromReader(message: BuildStatus, reader: jspb.BinaryReader): BuildStatus;
}

export namespace BuildStatus {
  export type AsObject = {
    result: BuildStatus.Result,
    details?: google_protobuf_any_pb.Any.AsObject,
  }

  export enum Result { 
    UNKNOWN_STATUS = 0,
    COMMAND_SUCCEEDED = 1,
    COMMAND_FAILED = 2,
    USER_ERROR = 3,
    SYSTEM_ERROR = 4,
    RESOURCE_EXHAUSTED = 5,
    INVOCATION_DEADLINE_EXCEEDED = 6,
    REQUEST_DEADLINE_EXCEEDED = 8,
    CANCELLED = 7,
  }
}

