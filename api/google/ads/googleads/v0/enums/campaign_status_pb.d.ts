import * as jspb from 'google-protobuf'



export class CampaignStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignStatusEnum): CampaignStatusEnum.AsObject;
  static serializeBinaryToWriter(message: CampaignStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignStatusEnum;
  static deserializeBinaryFromReader(message: CampaignStatusEnum, reader: jspb.BinaryReader): CampaignStatusEnum;
}

export namespace CampaignStatusEnum {
  export type AsObject = {
  }

  export enum CampaignStatus { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PAUSED = 3,
    REMOVED = 4,
  }
}

