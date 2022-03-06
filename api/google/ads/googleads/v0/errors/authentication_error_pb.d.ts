import * as jspb from 'google-protobuf'



export class AuthenticationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationErrorEnum): AuthenticationErrorEnum.AsObject;
  static serializeBinaryToWriter(message: AuthenticationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationErrorEnum;
  static deserializeBinaryFromReader(message: AuthenticationErrorEnum, reader: jspb.BinaryReader): AuthenticationErrorEnum;
}

export namespace AuthenticationErrorEnum {
  export type AsObject = {
  }

  export enum AuthenticationError { 
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AUTHENTICATION_ERROR = 2,
    CLIENT_CUSTOMER_ID_INVALID = 5,
    CUSTOMER_NOT_FOUND = 8,
    GOOGLE_ACCOUNT_DELETED = 9,
    GOOGLE_ACCOUNT_COOKIE_INVALID = 10,
    FAILED_TO_AUTHENTICATE_GOOGLE_ACCOUNT = 11,
    GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH = 12,
    LOGIN_COOKIE_REQUIRED = 13,
    NOT_ADS_USER = 14,
    OAUTH_TOKEN_INVALID = 15,
    OAUTH_TOKEN_EXPIRED = 16,
    OAUTH_TOKEN_DISABLED = 17,
    OAUTH_TOKEN_REVOKED = 18,
    OAUTH_TOKEN_HEADER_INVALID = 19,
    LOGIN_COOKIE_INVALID = 20,
    FAILED_TO_RETRIEVE_LOGIN_COOKIE = 21,
    USER_ID_INVALID = 22,
  }
}

