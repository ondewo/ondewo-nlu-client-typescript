import * as jspb from 'google-protobuf'



export class SlotEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlotEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SlotEnum): SlotEnum.AsObject;
  static serializeBinaryToWriter(message: SlotEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlotEnum;
  static deserializeBinaryFromReader(message: SlotEnum, reader: jspb.BinaryReader): SlotEnum;
}

export namespace SlotEnum {
  export type AsObject = {
  }

  export enum Slot { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEARCH_SIDE = 2,
    SEARCH_TOP = 3,
    SEARCH_OTHER = 4,
    CONTENT = 5,
    SEARCH_PARTNER_TOP = 6,
    SEARCH_PARTNER_OTHER = 7,
  }
}

