import * as jspb from 'google-protobuf'



export class BiddingSourceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingSourceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingSourceEnum): BiddingSourceEnum.AsObject;
  static serializeBinaryToWriter(message: BiddingSourceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingSourceEnum;
  static deserializeBinaryFromReader(message: BiddingSourceEnum, reader: jspb.BinaryReader): BiddingSourceEnum;
}

export namespace BiddingSourceEnum {
  export type AsObject = {
  }

  export enum BiddingSource { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ADGROUP = 2,
    CRITERION = 3,
    CAMPAIGN_BIDDING_STRATEGY = 5,
  }
}

