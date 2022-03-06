import * as jspb from 'google-protobuf'



export class TargetCpaOptInRecommendationGoalEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetCpaOptInRecommendationGoalEnum.AsObject;
  static toObject(includeInstance: boolean, msg: TargetCpaOptInRecommendationGoalEnum): TargetCpaOptInRecommendationGoalEnum.AsObject;
  static serializeBinaryToWriter(message: TargetCpaOptInRecommendationGoalEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetCpaOptInRecommendationGoalEnum;
  static deserializeBinaryFromReader(message: TargetCpaOptInRecommendationGoalEnum, reader: jspb.BinaryReader): TargetCpaOptInRecommendationGoalEnum;
}

export namespace TargetCpaOptInRecommendationGoalEnum {
  export type AsObject = {
  }

  export enum TargetCpaOptInRecommendationGoal { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SAME_COST = 2,
    SAME_CONVERSIONS = 3,
    SAME_CPA = 4,
    CLOSEST_CPA = 5,
  }
}

