import * as jspb from 'google-protobuf'



export class IdErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: IdErrorEnum): IdErrorEnum.AsObject;
  static serializeBinaryToWriter(message: IdErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdErrorEnum;
  static deserializeBinaryFromReader(message: IdErrorEnum, reader: jspb.BinaryReader): IdErrorEnum;
}

export namespace IdErrorEnum {
  export type AsObject = {
  }

  export enum IdError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NOT_FOUND = 2,
  }
}

