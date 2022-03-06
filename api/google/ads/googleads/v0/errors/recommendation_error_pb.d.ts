import * as jspb from 'google-protobuf'



export class RecommendationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationErrorEnum): RecommendationErrorEnum.AsObject;
  static serializeBinaryToWriter(message: RecommendationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationErrorEnum;
  static deserializeBinaryFromReader(message: RecommendationErrorEnum, reader: jspb.BinaryReader): RecommendationErrorEnum;
}

export namespace RecommendationErrorEnum {
  export type AsObject = {
  }

  export enum RecommendationError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BUDGET_AMOUNT_TOO_SMALL = 2,
    BUDGET_AMOUNT_TOO_LARGE = 3,
    INVALID_BUDGET_AMOUNT = 4,
    POLICY_ERROR = 5,
    INVALID_BID_AMOUNT = 6,
    ADGROUP_KEYWORD_LIMIT = 7,
  }
}

