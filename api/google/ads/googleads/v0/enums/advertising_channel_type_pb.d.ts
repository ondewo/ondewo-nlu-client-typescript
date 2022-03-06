import * as jspb from 'google-protobuf'



export class AdvertisingChannelTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdvertisingChannelTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdvertisingChannelTypeEnum): AdvertisingChannelTypeEnum.AsObject;
  static serializeBinaryToWriter(message: AdvertisingChannelTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdvertisingChannelTypeEnum;
  static deserializeBinaryFromReader(message: AdvertisingChannelTypeEnum, reader: jspb.BinaryReader): AdvertisingChannelTypeEnum;
}

export namespace AdvertisingChannelTypeEnum {
  export type AsObject = {
  }

  export enum AdvertisingChannelType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEARCH = 2,
    HOTEL = 5,
  }
}

