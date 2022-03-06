import * as jspb from 'google-protobuf'



export class RecommendationTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationTypeEnum): RecommendationTypeEnum.AsObject;
  static serializeBinaryToWriter(message: RecommendationTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationTypeEnum;
  static deserializeBinaryFromReader(message: RecommendationTypeEnum, reader: jspb.BinaryReader): RecommendationTypeEnum;
}

export namespace RecommendationTypeEnum {
  export type AsObject = {
  }

  export enum RecommendationType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CAMPAIGN_BUDGET = 2,
    KEYWORD = 3,
    TEXT_AD = 4,
    TARGET_CPA_OPT_IN = 5,
  }
}

