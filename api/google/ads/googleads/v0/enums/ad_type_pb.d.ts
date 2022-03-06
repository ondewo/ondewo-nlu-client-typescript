import * as jspb from 'google-protobuf'



export class AdTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdTypeEnum): AdTypeEnum.AsObject;
  static serializeBinaryToWriter(message: AdTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdTypeEnum;
  static deserializeBinaryFromReader(message: AdTypeEnum, reader: jspb.BinaryReader): AdTypeEnum;
}

export namespace AdTypeEnum {
  export type AsObject = {
  }

  export enum AdType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    TEXT_AD = 2,
    EXPANDED_TEXT_AD = 3,
    DYNAMIC_SEARCH_AD = 4,
    RESPONSIVE_DISPLAY_AD = 5,
    CALL_ONLY_AD = 6,
    EXPANDED_DYNAMIC_SEARCH_AD = 7,
    HOTEL_AD = 8,
  }
}

