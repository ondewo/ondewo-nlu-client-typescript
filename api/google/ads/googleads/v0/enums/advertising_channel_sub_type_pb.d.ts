import * as jspb from 'google-protobuf'



export class AdvertisingChannelSubTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdvertisingChannelSubTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdvertisingChannelSubTypeEnum): AdvertisingChannelSubTypeEnum.AsObject;
  static serializeBinaryToWriter(message: AdvertisingChannelSubTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdvertisingChannelSubTypeEnum;
  static deserializeBinaryFromReader(message: AdvertisingChannelSubTypeEnum, reader: jspb.BinaryReader): AdvertisingChannelSubTypeEnum;
}

export namespace AdvertisingChannelSubTypeEnum {
  export type AsObject = {
  }

  export enum AdvertisingChannelSubType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEARCH_MOBILE_APP = 2,
    SEARCH_EXPRESS = 4,
  }
}

