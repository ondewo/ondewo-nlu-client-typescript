import * as jspb from 'google-protobuf'



export class QuotaErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaErrorEnum): QuotaErrorEnum.AsObject;
  static serializeBinaryToWriter(message: QuotaErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaErrorEnum;
  static deserializeBinaryFromReader(message: QuotaErrorEnum, reader: jspb.BinaryReader): QuotaErrorEnum;
}

export namespace QuotaErrorEnum {
  export type AsObject = {
  }

  export enum QuotaError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    RESOURCE_EXHAUSTED = 2,
    ACCESS_PROHIBITED = 3,
  }
}

