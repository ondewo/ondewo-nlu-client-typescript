import * as jspb from 'google-protobuf'



export class AdGroupAdErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdErrorEnum): AdGroupAdErrorEnum.AsObject;
  static serializeBinaryToWriter(message: AdGroupAdErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdErrorEnum;
  static deserializeBinaryFromReader(message: AdGroupAdErrorEnum, reader: jspb.BinaryReader): AdGroupAdErrorEnum;
}

export namespace AdGroupAdErrorEnum {
  export type AsObject = {
  }

  export enum AdGroupAdError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AD_GROUP_AD_LABEL_DOES_NOT_EXIST = 2,
    AD_GROUP_AD_LABEL_ALREADY_EXISTS = 3,
    AD_NOT_UNDER_ADGROUP = 4,
    CANNOT_OPERATE_ON_REMOVED_ADGROUPAD = 5,
    CANNOT_CREATE_DEPRECATED_ADS = 6,
    CANNOT_CREATE_TEXT_ADS = 7,
    EMPTY_FIELD = 8,
    RESOURCE_REFERENCED_IN_MULTIPLE_OPS = 9,
  }
}

