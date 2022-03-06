import * as jspb from 'google-protobuf'



export class AdGroupTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupTypeEnum): AdGroupTypeEnum.AsObject;
  static serializeBinaryToWriter(message: AdGroupTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupTypeEnum;
  static deserializeBinaryFromReader(message: AdGroupTypeEnum, reader: jspb.BinaryReader): AdGroupTypeEnum;
}

export namespace AdGroupTypeEnum {
  export type AsObject = {
  }

  export enum AdGroupType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEARCH_STANDARD = 2,
    HOTEL_ADS = 6,
  }
}

