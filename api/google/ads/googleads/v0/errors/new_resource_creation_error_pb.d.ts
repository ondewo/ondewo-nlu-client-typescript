import * as jspb from 'google-protobuf'



export class NewResourceCreationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewResourceCreationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: NewResourceCreationErrorEnum): NewResourceCreationErrorEnum.AsObject;
  static serializeBinaryToWriter(message: NewResourceCreationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewResourceCreationErrorEnum;
  static deserializeBinaryFromReader(message: NewResourceCreationErrorEnum, reader: jspb.BinaryReader): NewResourceCreationErrorEnum;
}

export namespace NewResourceCreationErrorEnum {
  export type AsObject = {
  }

  export enum NewResourceCreationError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_SET_ID_FOR_ADD = 2,
    DUPLICATE_TEMP_IDS = 3,
    TEMP_ID_RESOURCE_HAD_ERRORS = 4,
  }
}

