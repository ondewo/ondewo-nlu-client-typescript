import * as jspb from 'google-protobuf'



export class AdCustomizerErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdCustomizerErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdCustomizerErrorEnum): AdCustomizerErrorEnum.AsObject;
  static serializeBinaryToWriter(message: AdCustomizerErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdCustomizerErrorEnum;
  static deserializeBinaryFromReader(message: AdCustomizerErrorEnum, reader: jspb.BinaryReader): AdCustomizerErrorEnum;
}

export namespace AdCustomizerErrorEnum {
  export type AsObject = {
  }

  export enum AdCustomizerError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    COUNTDOWN_INVALID_DATE_FORMAT = 2,
    COUNTDOWN_DATE_IN_PAST = 3,
    COUNTDOWN_INVALID_LOCALE = 4,
    COUNTDOWN_INVALID_START_DAYS_BEFORE = 5,
    UNKNOWN_USER_LIST = 6,
  }
}

