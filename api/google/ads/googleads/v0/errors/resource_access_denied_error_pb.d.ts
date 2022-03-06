import * as jspb from 'google-protobuf'



export class ResourceAccessDeniedErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceAccessDeniedErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceAccessDeniedErrorEnum): ResourceAccessDeniedErrorEnum.AsObject;
  static serializeBinaryToWriter(message: ResourceAccessDeniedErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceAccessDeniedErrorEnum;
  static deserializeBinaryFromReader(message: ResourceAccessDeniedErrorEnum, reader: jspb.BinaryReader): ResourceAccessDeniedErrorEnum;
}

export namespace ResourceAccessDeniedErrorEnum {
  export type AsObject = {
  }

  export enum ResourceAccessDeniedError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    WRITE_ACCESS_DENIED = 3,
  }
}

