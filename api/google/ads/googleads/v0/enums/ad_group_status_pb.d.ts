import * as jspb from 'google-protobuf'



export class AdGroupStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupStatusEnum): AdGroupStatusEnum.AsObject;
  static serializeBinaryToWriter(message: AdGroupStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupStatusEnum;
  static deserializeBinaryFromReader(message: AdGroupStatusEnum, reader: jspb.BinaryReader): AdGroupStatusEnum;
}

export namespace AdGroupStatusEnum {
  export type AsObject = {
  }

  export enum AdGroupStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PAUSED = 3,
    REMOVED = 4,
  }
}

