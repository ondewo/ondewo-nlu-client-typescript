import * as jspb from 'google-protobuf'



export class AdGroupBidModifierErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupBidModifierErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupBidModifierErrorEnum): AdGroupBidModifierErrorEnum.AsObject;
  static serializeBinaryToWriter(message: AdGroupBidModifierErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupBidModifierErrorEnum;
  static deserializeBinaryFromReader(message: AdGroupBidModifierErrorEnum, reader: jspb.BinaryReader): AdGroupBidModifierErrorEnum;
}

export namespace AdGroupBidModifierErrorEnum {
  export type AsObject = {
  }

  export enum AdGroupBidModifierError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CRITERION_ID_NOT_SUPPORTED = 2,
    CANNOT_OVERRIDE_OPTED_OUT_CAMPAIGN_CRITERION_BID_MODIFIER = 3,
  }
}

