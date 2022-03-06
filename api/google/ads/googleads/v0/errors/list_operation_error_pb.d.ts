import * as jspb from 'google-protobuf'



export class ListOperationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationErrorEnum): ListOperationErrorEnum.AsObject;
  static serializeBinaryToWriter(message: ListOperationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationErrorEnum;
  static deserializeBinaryFromReader(message: ListOperationErrorEnum, reader: jspb.BinaryReader): ListOperationErrorEnum;
}

export namespace ListOperationErrorEnum {
  export type AsObject = {
  }

  export enum ListOperationError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    REQUIRED_FIELD_MISSING = 7,
    DUPLICATE_VALUES = 8,
  }
}

