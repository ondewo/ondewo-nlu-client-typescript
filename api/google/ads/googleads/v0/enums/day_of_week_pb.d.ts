import * as jspb from 'google-protobuf'



export class DayOfWeekEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DayOfWeekEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DayOfWeekEnum): DayOfWeekEnum.AsObject;
  static serializeBinaryToWriter(message: DayOfWeekEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DayOfWeekEnum;
  static deserializeBinaryFromReader(message: DayOfWeekEnum, reader: jspb.BinaryReader): DayOfWeekEnum;
}

export namespace DayOfWeekEnum {
  export type AsObject = {
  }

  export enum DayOfWeek { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MONDAY = 2,
    TUESDAY = 3,
    WEDNESDAY = 4,
    THURSDAY = 5,
    FRIDAY = 6,
    SATURDAY = 7,
    SUNDAY = 8,
  }
}

