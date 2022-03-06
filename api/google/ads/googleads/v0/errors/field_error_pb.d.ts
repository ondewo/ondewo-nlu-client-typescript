import * as jspb from 'google-protobuf'



export class FieldErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FieldErrorEnum): FieldErrorEnum.AsObject;
  static serializeBinaryToWriter(message: FieldErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldErrorEnum;
  static deserializeBinaryFromReader(message: FieldErrorEnum, reader: jspb.BinaryReader): FieldErrorEnum;
}

export namespace FieldErrorEnum {
  export type AsObject = {
  }

  export enum FieldError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    REQUIRED = 2,
    IMMUTABLE_FIELD = 3,
    INVALID_VALUE = 4,
    VALUE_MUST_BE_UNSET = 5,
    REQUIRED_NONEMPTY_LIST = 6,
  }
}

