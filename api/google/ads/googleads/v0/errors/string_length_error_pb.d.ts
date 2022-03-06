import * as jspb from 'google-protobuf'



export class StringLengthErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringLengthErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: StringLengthErrorEnum): StringLengthErrorEnum.AsObject;
  static serializeBinaryToWriter(message: StringLengthErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringLengthErrorEnum;
  static deserializeBinaryFromReader(message: StringLengthErrorEnum, reader: jspb.BinaryReader): StringLengthErrorEnum;
}

export namespace StringLengthErrorEnum {
  export type AsObject = {
  }

  export enum StringLengthError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    TOO_SHORT = 2,
    TOO_LONG = 3,
  }
}

