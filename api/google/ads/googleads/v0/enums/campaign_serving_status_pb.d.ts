import * as jspb from 'google-protobuf'



export class CampaignServingStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignServingStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignServingStatusEnum): CampaignServingStatusEnum.AsObject;
  static serializeBinaryToWriter(message: CampaignServingStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignServingStatusEnum;
  static deserializeBinaryFromReader(message: CampaignServingStatusEnum, reader: jspb.BinaryReader): CampaignServingStatusEnum;
}

export namespace CampaignServingStatusEnum {
  export type AsObject = {
  }

  export enum CampaignServingStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SERVING = 2,
    NONE = 3,
    ENDED = 4,
    PENDING = 5,
    SUSPENDED = 6,
  }
}

