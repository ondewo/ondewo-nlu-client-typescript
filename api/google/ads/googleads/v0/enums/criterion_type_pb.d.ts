import * as jspb from 'google-protobuf'



export class CriterionTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionTypeEnum): CriterionTypeEnum.AsObject;
  static serializeBinaryToWriter(message: CriterionTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionTypeEnum;
  static deserializeBinaryFromReader(message: CriterionTypeEnum, reader: jspb.BinaryReader): CriterionTypeEnum;
}

export namespace CriterionTypeEnum {
  export type AsObject = {
  }

  export enum CriterionType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    KEYWORD = 2,
    PLATFORM = 6,
    LOCATION = 7,
    LISTING_GROUP = 8,
  }
}

