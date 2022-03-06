import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';


export class CheckError extends jspb.Message {
  getCode(): CheckError.Code;
  setCode(value: CheckError.Code): CheckError;

  getDetail(): string;
  setDetail(value: string): CheckError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckError.AsObject;
  static toObject(includeInstance: boolean, msg: CheckError): CheckError.AsObject;
  static serializeBinaryToWriter(message: CheckError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckError;
  static deserializeBinaryFromReader(message: CheckError, reader: jspb.BinaryReader): CheckError;
}

export namespace CheckError {
  export type AsObject = {
    code: CheckError.Code,
    detail: string,
  }

  export enum Code { 
    ERROR_CODE_UNSPECIFIED = 0,
    NOT_FOUND = 5,
    PERMISSION_DENIED = 7,
    RESOURCE_EXHAUSTED = 8,
    SERVICE_NOT_ACTIVATED = 104,
    BILLING_DISABLED = 107,
    PROJECT_DELETED = 108,
    PROJECT_INVALID = 114,
    IP_ADDRESS_BLOCKED = 109,
    REFERER_BLOCKED = 110,
    CLIENT_APP_BLOCKED = 111,
    API_KEY_INVALID = 105,
    API_KEY_EXPIRED = 112,
    API_KEY_NOT_FOUND = 113,
    NAMESPACE_LOOKUP_UNAVAILABLE = 300,
    SERVICE_STATUS_UNAVAILABLE = 301,
    BILLING_STATUS_UNAVAILABLE = 302,
  }
}

