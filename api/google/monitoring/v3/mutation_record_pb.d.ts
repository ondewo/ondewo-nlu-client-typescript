import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class MutationRecord extends jspb.Message {
  getMutateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMutateTime(value?: google_protobuf_timestamp_pb.Timestamp): MutationRecord;
  hasMutateTime(): boolean;
  clearMutateTime(): MutationRecord;

  getMutatedBy(): string;
  setMutatedBy(value: string): MutationRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutationRecord.AsObject;
  static toObject(includeInstance: boolean, msg: MutationRecord): MutationRecord.AsObject;
  static serializeBinaryToWriter(message: MutationRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutationRecord;
  static deserializeBinaryFromReader(message: MutationRecord, reader: jspb.BinaryReader): MutationRecord;
}

export namespace MutationRecord {
  export type AsObject = {
    mutateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mutatedBy: string,
  }
}

