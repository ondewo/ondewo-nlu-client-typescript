import * as jspb from 'google-protobuf'



export class MediaErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MediaErrorEnum): MediaErrorEnum.AsObject;
  static serializeBinaryToWriter(message: MediaErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaErrorEnum;
  static deserializeBinaryFromReader(message: MediaErrorEnum, reader: jspb.BinaryReader): MediaErrorEnum;
}

export namespace MediaErrorEnum {
  export type AsObject = {
  }

  export enum MediaError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_ADD_STANDARD_ICON = 2,
    CANNOT_SELECT_STANDARD_ICON_WITH_OTHER_TYPES = 3,
    CANNOT_SPECIFY_MEDIA_ID_AND_DATA = 4,
    DUPLICATE_MEDIA = 5,
    EMPTY_FIELD = 6,
    RESOURCE_REFERENCED_IN_MULTIPLE_OPS = 7,
    FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE = 8,
    INVALID_MEDIA_ID = 9,
    INVALID_MEDIA_SUB_TYPE = 10,
    INVALID_MEDIA_TYPE = 11,
    INVALID_MIME_TYPE = 12,
    INVALID_REFERENCE_ID = 13,
    INVALID_YOU_TUBE_ID = 14,
    MEDIA_FAILED_TRANSCODING = 15,
    MEDIA_NOT_TRANSCODED = 16,
    MEDIA_TYPE_DOES_NOT_MATCH_OBJECT_TYPE = 17,
    NO_FIELDS_SPECIFIED = 18,
    NULL_REFERENCE_ID_AND_MEDIA_ID = 19,
    TOO_LONG = 20,
    UNSUPPORTED_OPERATION = 21,
    UNSUPPORTED_TYPE = 22,
    YOU_TUBE_SERVICE_UNAVAILABLE = 23,
    YOU_TUBE_VIDEO_HAS_NON_POSITIVE_DURATION = 24,
    YOU_TUBE_VIDEO_NOT_FOUND = 25,
  }
}

