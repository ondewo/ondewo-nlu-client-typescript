import * as jspb from 'google-protobuf'



export class MutateErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MutateErrorEnum): MutateErrorEnum.AsObject;
  static serializeBinaryToWriter(message: MutateErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateErrorEnum;
  static deserializeBinaryFromReader(message: MutateErrorEnum, reader: jspb.BinaryReader): MutateErrorEnum;
}

export namespace MutateErrorEnum {
  export type AsObject = {
  }

  export enum MutateError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    RESOURCE_NOT_FOUND = 3,
    ID_EXISTS_IN_MULTIPLE_MUTATES = 7,
  }
}

