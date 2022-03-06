import * as jspb from 'google-protobuf'



export class ResourceCountLimitExceededErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceCountLimitExceededErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceCountLimitExceededErrorEnum): ResourceCountLimitExceededErrorEnum.AsObject;
  static serializeBinaryToWriter(message: ResourceCountLimitExceededErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceCountLimitExceededErrorEnum;
  static deserializeBinaryFromReader(message: ResourceCountLimitExceededErrorEnum, reader: jspb.BinaryReader): ResourceCountLimitExceededErrorEnum;
}

export namespace ResourceCountLimitExceededErrorEnum {
  export type AsObject = {
  }

  export enum ResourceCountLimitExceededError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ACCOUNT_LIMIT = 2,
    CAMPAIGN_LIMIT = 3,
    ADGROUP_LIMIT = 4,
    AD_GROUP_AD_LIMIT = 5,
    AD_GROUP_CRITERION_LIMIT = 6,
    SHARED_SET_LIMIT = 7,
    MATCHING_FUNCTION_LIMIT = 8,
  }
}

