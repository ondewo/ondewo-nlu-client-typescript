import * as jspb from 'google-protobuf'



export class ContextErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContextErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ContextErrorEnum): ContextErrorEnum.AsObject;
  static serializeBinaryToWriter(message: ContextErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContextErrorEnum;
  static deserializeBinaryFromReader(message: ContextErrorEnum, reader: jspb.BinaryReader): ContextErrorEnum;
}

export namespace ContextErrorEnum {
  export type AsObject = {
  }

  export enum ContextError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OPERATION_NOT_PERMITTED_FOR_CONTEXT = 2,
  }
}

