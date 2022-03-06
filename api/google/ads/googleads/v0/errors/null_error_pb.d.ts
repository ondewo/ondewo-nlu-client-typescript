import * as jspb from 'google-protobuf'



export class NullErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: NullErrorEnum): NullErrorEnum.AsObject;
  static serializeBinaryToWriter(message: NullErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullErrorEnum;
  static deserializeBinaryFromReader(message: NullErrorEnum, reader: jspb.BinaryReader): NullErrorEnum;
}

export namespace NullErrorEnum {
  export type AsObject = {
  }

  export enum NullError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NULL_CONTENT = 2,
  }
}

