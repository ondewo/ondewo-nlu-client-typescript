import * as jspb from 'google-protobuf'



export class AdGroupAdStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdStatusEnum): AdGroupAdStatusEnum.AsObject;
  static serializeBinaryToWriter(message: AdGroupAdStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdStatusEnum;
  static deserializeBinaryFromReader(message: AdGroupAdStatusEnum, reader: jspb.BinaryReader): AdGroupAdStatusEnum;
}

export namespace AdGroupAdStatusEnum {
  export type AsObject = {
  }

  export enum AdGroupAdStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PAUSED = 3,
    REMOVED = 4,
  }
}

