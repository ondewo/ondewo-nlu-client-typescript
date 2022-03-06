import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class ApiConfigHandler extends jspb.Message {
  getAuthFailAction(): AuthFailAction;
  setAuthFailAction(value: AuthFailAction): ApiConfigHandler;

  getLogin(): LoginRequirement;
  setLogin(value: LoginRequirement): ApiConfigHandler;

  getScript(): string;
  setScript(value: string): ApiConfigHandler;

  getSecurityLevel(): SecurityLevel;
  setSecurityLevel(value: SecurityLevel): ApiConfigHandler;

  getUrl(): string;
  setUrl(value: string): ApiConfigHandler;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiConfigHandler.AsObject;
  static toObject(includeInstance: boolean, msg: ApiConfigHandler): ApiConfigHandler.AsObject;
  static serializeBinaryToWriter(message: ApiConfigHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiConfigHandler;
  static deserializeBinaryFromReader(message: ApiConfigHandler, reader: jspb.BinaryReader): ApiConfigHandler;
}

export namespace ApiConfigHandler {
  export type AsObject = {
    authFailAction: AuthFailAction,
    login: LoginRequirement,
    script: string,
    securityLevel: SecurityLevel,
    url: string,
  }
}

export class ErrorHandler extends jspb.Message {
  getErrorCode(): ErrorHandler.ErrorCode;
  setErrorCode(value: ErrorHandler.ErrorCode): ErrorHandler;

  getStaticFile(): string;
  setStaticFile(value: string): ErrorHandler;

  getMimeType(): string;
  setMimeType(value: string): ErrorHandler;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorHandler.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorHandler): ErrorHandler.AsObject;
  static serializeBinaryToWriter(message: ErrorHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorHandler;
  static deserializeBinaryFromReader(message: ErrorHandler, reader: jspb.BinaryReader): ErrorHandler;
}

export namespace ErrorHandler {
  export type AsObject = {
    errorCode: ErrorHandler.ErrorCode,
    staticFile: string,
    mimeType: string,
  }

  export enum ErrorCode { 
    ERROR_CODE_UNSPECIFIED = 0,
    ERROR_CODE_DEFAULT = 0,
    ERROR_CODE_OVER_QUOTA = 1,
    ERROR_CODE_DOS_API_DENIAL = 2,
    ERROR_CODE_TIMEOUT = 3,
  }
}

export class UrlMap extends jspb.Message {
  getUrlRegex(): string;
  setUrlRegex(value: string): UrlMap;

  getStaticFiles(): StaticFilesHandler | undefined;
  setStaticFiles(value?: StaticFilesHandler): UrlMap;
  hasStaticFiles(): boolean;
  clearStaticFiles(): UrlMap;

  getScript(): ScriptHandler | undefined;
  setScript(value?: ScriptHandler): UrlMap;
  hasScript(): boolean;
  clearScript(): UrlMap;

  getApiEndpoint(): ApiEndpointHandler | undefined;
  setApiEndpoint(value?: ApiEndpointHandler): UrlMap;
  hasApiEndpoint(): boolean;
  clearApiEndpoint(): UrlMap;

  getSecurityLevel(): SecurityLevel;
  setSecurityLevel(value: SecurityLevel): UrlMap;

  getLogin(): LoginRequirement;
  setLogin(value: LoginRequirement): UrlMap;

  getAuthFailAction(): AuthFailAction;
  setAuthFailAction(value: AuthFailAction): UrlMap;

  getRedirectHttpResponseCode(): UrlMap.RedirectHttpResponseCode;
  setRedirectHttpResponseCode(value: UrlMap.RedirectHttpResponseCode): UrlMap;

  getHandlerTypeCase(): UrlMap.HandlerTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlMap.AsObject;
  static toObject(includeInstance: boolean, msg: UrlMap): UrlMap.AsObject;
  static serializeBinaryToWriter(message: UrlMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlMap;
  static deserializeBinaryFromReader(message: UrlMap, reader: jspb.BinaryReader): UrlMap;
}

export namespace UrlMap {
  export type AsObject = {
    urlRegex: string,
    staticFiles?: StaticFilesHandler.AsObject,
    script?: ScriptHandler.AsObject,
    apiEndpoint?: ApiEndpointHandler.AsObject,
    securityLevel: SecurityLevel,
    login: LoginRequirement,
    authFailAction: AuthFailAction,
    redirectHttpResponseCode: UrlMap.RedirectHttpResponseCode,
  }

  export enum RedirectHttpResponseCode { 
    REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED = 0,
    REDIRECT_HTTP_RESPONSE_CODE_301 = 1,
    REDIRECT_HTTP_RESPONSE_CODE_302 = 2,
    REDIRECT_HTTP_RESPONSE_CODE_303 = 3,
    REDIRECT_HTTP_RESPONSE_CODE_307 = 4,
  }

  export enum HandlerTypeCase { 
    HANDLER_TYPE_NOT_SET = 0,
    STATIC_FILES = 2,
    SCRIPT = 3,
    API_ENDPOINT = 4,
  }
}

export class StaticFilesHandler extends jspb.Message {
  getPath(): string;
  setPath(value: string): StaticFilesHandler;

  getUploadPathRegex(): string;
  setUploadPathRegex(value: string): StaticFilesHandler;

  getHttpHeadersMap(): jspb.Map<string, string>;
  clearHttpHeadersMap(): StaticFilesHandler;

  getMimeType(): string;
  setMimeType(value: string): StaticFilesHandler;

  getExpiration(): google_protobuf_duration_pb.Duration | undefined;
  setExpiration(value?: google_protobuf_duration_pb.Duration): StaticFilesHandler;
  hasExpiration(): boolean;
  clearExpiration(): StaticFilesHandler;

  getRequireMatchingFile(): boolean;
  setRequireMatchingFile(value: boolean): StaticFilesHandler;

  getApplicationReadable(): boolean;
  setApplicationReadable(value: boolean): StaticFilesHandler;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StaticFilesHandler.AsObject;
  static toObject(includeInstance: boolean, msg: StaticFilesHandler): StaticFilesHandler.AsObject;
  static serializeBinaryToWriter(message: StaticFilesHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StaticFilesHandler;
  static deserializeBinaryFromReader(message: StaticFilesHandler, reader: jspb.BinaryReader): StaticFilesHandler;
}

export namespace StaticFilesHandler {
  export type AsObject = {
    path: string,
    uploadPathRegex: string,
    httpHeadersMap: Array<[string, string]>,
    mimeType: string,
    expiration?: google_protobuf_duration_pb.Duration.AsObject,
    requireMatchingFile: boolean,
    applicationReadable: boolean,
  }
}

export class ScriptHandler extends jspb.Message {
  getScriptPath(): string;
  setScriptPath(value: string): ScriptHandler;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScriptHandler.AsObject;
  static toObject(includeInstance: boolean, msg: ScriptHandler): ScriptHandler.AsObject;
  static serializeBinaryToWriter(message: ScriptHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScriptHandler;
  static deserializeBinaryFromReader(message: ScriptHandler, reader: jspb.BinaryReader): ScriptHandler;
}

export namespace ScriptHandler {
  export type AsObject = {
    scriptPath: string,
  }
}

export class ApiEndpointHandler extends jspb.Message {
  getScriptPath(): string;
  setScriptPath(value: string): ApiEndpointHandler;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiEndpointHandler.AsObject;
  static toObject(includeInstance: boolean, msg: ApiEndpointHandler): ApiEndpointHandler.AsObject;
  static serializeBinaryToWriter(message: ApiEndpointHandler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiEndpointHandler;
  static deserializeBinaryFromReader(message: ApiEndpointHandler, reader: jspb.BinaryReader): ApiEndpointHandler;
}

export namespace ApiEndpointHandler {
  export type AsObject = {
    scriptPath: string,
  }
}

export class HealthCheck extends jspb.Message {
  getDisableHealthCheck(): boolean;
  setDisableHealthCheck(value: boolean): HealthCheck;

  getHost(): string;
  setHost(value: string): HealthCheck;

  getHealthyThreshold(): number;
  setHealthyThreshold(value: number): HealthCheck;

  getUnhealthyThreshold(): number;
  setUnhealthyThreshold(value: number): HealthCheck;

  getRestartThreshold(): number;
  setRestartThreshold(value: number): HealthCheck;

  getCheckInterval(): google_protobuf_duration_pb.Duration | undefined;
  setCheckInterval(value?: google_protobuf_duration_pb.Duration): HealthCheck;
  hasCheckInterval(): boolean;
  clearCheckInterval(): HealthCheck;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): HealthCheck;
  hasTimeout(): boolean;
  clearTimeout(): HealthCheck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheck.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheck): HealthCheck.AsObject;
  static serializeBinaryToWriter(message: HealthCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheck;
  static deserializeBinaryFromReader(message: HealthCheck, reader: jspb.BinaryReader): HealthCheck;
}

export namespace HealthCheck {
  export type AsObject = {
    disableHealthCheck: boolean,
    host: string,
    healthyThreshold: number,
    unhealthyThreshold: number,
    restartThreshold: number,
    checkInterval?: google_protobuf_duration_pb.Duration.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class Library extends jspb.Message {
  getName(): string;
  setName(value: string): Library;

  getVersion(): string;
  setVersion(value: string): Library;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Library.AsObject;
  static toObject(includeInstance: boolean, msg: Library): Library.AsObject;
  static serializeBinaryToWriter(message: Library, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Library;
  static deserializeBinaryFromReader(message: Library, reader: jspb.BinaryReader): Library;
}

export namespace Library {
  export type AsObject = {
    name: string,
    version: string,
  }
}

export enum AuthFailAction { 
  AUTH_FAIL_ACTION_UNSPECIFIED = 0,
  AUTH_FAIL_ACTION_REDIRECT = 1,
  AUTH_FAIL_ACTION_UNAUTHORIZED = 2,
}
export enum LoginRequirement { 
  LOGIN_UNSPECIFIED = 0,
  LOGIN_OPTIONAL = 1,
  LOGIN_ADMIN = 2,
  LOGIN_REQUIRED = 3,
}
export enum SecurityLevel { 
  SECURE_UNSPECIFIED = 0,
  SECURE_DEFAULT = 0,
  SECURE_NEVER = 1,
  SECURE_OPTIONAL = 2,
  SECURE_ALWAYS = 3,
}
