import * as jspb from 'google-protobuf'



export class ListingGroupTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingGroupTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ListingGroupTypeEnum): ListingGroupTypeEnum.AsObject;
  static serializeBinaryToWriter(message: ListingGroupTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingGroupTypeEnum;
  static deserializeBinaryFromReader(message: ListingGroupTypeEnum, reader: jspb.BinaryReader): ListingGroupTypeEnum;
}

export namespace ListingGroupTypeEnum {
  export type AsObject = {
  }

  export enum ListingGroupType { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SUBDIVISION = 2,
    UNIT = 3,
  }
}

