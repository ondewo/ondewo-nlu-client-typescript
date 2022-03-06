import * as jspb from 'google-protobuf'



export class DistinctErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistinctErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DistinctErrorEnum): DistinctErrorEnum.AsObject;
  static serializeBinaryToWriter(message: DistinctErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistinctErrorEnum;
  static deserializeBinaryFromReader(message: DistinctErrorEnum, reader: jspb.BinaryReader): DistinctErrorEnum;
}

export namespace DistinctErrorEnum {
  export type AsObject = {
  }

  export enum DistinctError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DUPLICATE_ELEMENT = 2,
    DUPLICATE_TYPE = 3,
  }
}

