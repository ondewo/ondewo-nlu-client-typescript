import * as jspb from 'google-protobuf'



export class StringFormatErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringFormatErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: StringFormatErrorEnum): StringFormatErrorEnum.AsObject;
  static serializeBinaryToWriter(message: StringFormatErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringFormatErrorEnum;
  static deserializeBinaryFromReader(message: StringFormatErrorEnum, reader: jspb.BinaryReader): StringFormatErrorEnum;
}

export namespace StringFormatErrorEnum {
  export type AsObject = {
  }

  export enum StringFormatError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ILLEGAL_CHARS = 2,
    INVALID_FORMAT = 3,
  }
}

