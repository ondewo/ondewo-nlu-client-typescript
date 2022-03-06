import * as jspb from 'google-protobuf'



export class AdxErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdxErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdxErrorEnum): AdxErrorEnum.AsObject;
  static serializeBinaryToWriter(message: AdxErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdxErrorEnum;
  static deserializeBinaryFromReader(message: AdxErrorEnum, reader: jspb.BinaryReader): AdxErrorEnum;
}

export namespace AdxErrorEnum {
  export type AsObject = {
  }

  export enum AdxError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    UNSUPPORTED_FEATURE = 2,
  }
}

