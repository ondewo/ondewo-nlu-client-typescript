import * as jspb from 'google-protobuf'



export class AuthorizationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationErrorEnum): AuthorizationErrorEnum.AsObject;
  static serializeBinaryToWriter(message: AuthorizationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationErrorEnum;
  static deserializeBinaryFromReader(message: AuthorizationErrorEnum, reader: jspb.BinaryReader): AuthorizationErrorEnum;
}

export namespace AuthorizationErrorEnum {
  export type AsObject = {
  }

  export enum AuthorizationError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    USER_PERMISSION_DENIED = 2,
    DEVELOPER_TOKEN_NOT_WHITELISTED = 3,
    DEVELOPER_TOKEN_PROHIBITED = 4,
    PROJECT_DISABLED = 5,
    AUTHORIZATION_ERROR = 6,
  }
}

