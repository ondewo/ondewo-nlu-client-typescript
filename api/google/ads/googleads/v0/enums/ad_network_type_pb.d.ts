import * as jspb from 'google-protobuf'



export class AdNetworkTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdNetworkTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdNetworkTypeEnum): AdNetworkTypeEnum.AsObject;
  static serializeBinaryToWriter(message: AdNetworkTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdNetworkTypeEnum;
  static deserializeBinaryFromReader(message: AdNetworkTypeEnum, reader: jspb.BinaryReader): AdNetworkTypeEnum;
}

export namespace AdNetworkTypeEnum {
  export type AsObject = {
  }

  export enum AdNetworkType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEARCH = 2,
    SEARCH_PARTNERS = 3,
    CONTENT = 4,
    YOUTUBE_SEARCH = 5,
    YOUTUBE_WATCH = 6,
  }
}

