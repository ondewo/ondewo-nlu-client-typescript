import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_rpc_status_pb from '../../../google/rpc/status_pb';


export class AuditLog extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): AuditLog;

  getMethodName(): string;
  setMethodName(value: string): AuditLog;

  getResourceName(): string;
  setResourceName(value: string): AuditLog;

  getNumResponseItems(): number;
  setNumResponseItems(value: number): AuditLog;

  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): AuditLog;
  hasStatus(): boolean;
  clearStatus(): AuditLog;

  getAuthenticationInfo(): AuthenticationInfo | undefined;
  setAuthenticationInfo(value?: AuthenticationInfo): AuditLog;
  hasAuthenticationInfo(): boolean;
  clearAuthenticationInfo(): AuditLog;

  getAuthorizationInfoList(): Array<AuthorizationInfo>;
  setAuthorizationInfoList(value: Array<AuthorizationInfo>): AuditLog;
  clearAuthorizationInfoList(): AuditLog;
  addAuthorizationInfo(value?: AuthorizationInfo, index?: number): AuthorizationInfo;

  getRequestMetadata(): RequestMetadata | undefined;
  setRequestMetadata(value?: RequestMetadata): AuditLog;
  hasRequestMetadata(): boolean;
  clearRequestMetadata(): AuditLog;

  getRequest(): google_protobuf_struct_pb.Struct | undefined;
  setRequest(value?: google_protobuf_struct_pb.Struct): AuditLog;
  hasRequest(): boolean;
  clearRequest(): AuditLog;

  getResponse(): google_protobuf_struct_pb.Struct | undefined;
  setResponse(value?: google_protobuf_struct_pb.Struct): AuditLog;
  hasResponse(): boolean;
  clearResponse(): AuditLog;

  getServiceData(): google_protobuf_any_pb.Any | undefined;
  setServiceData(value?: google_protobuf_any_pb.Any): AuditLog;
  hasServiceData(): boolean;
  clearServiceData(): AuditLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditLog.AsObject;
  static toObject(includeInstance: boolean, msg: AuditLog): AuditLog.AsObject;
  static serializeBinaryToWriter(message: AuditLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditLog;
  static deserializeBinaryFromReader(message: AuditLog, reader: jspb.BinaryReader): AuditLog;
}

export namespace AuditLog {
  export type AsObject = {
    serviceName: string,
    methodName: string,
    resourceName: string,
    numResponseItems: number,
    status?: google_rpc_status_pb.Status.AsObject,
    authenticationInfo?: AuthenticationInfo.AsObject,
    authorizationInfoList: Array<AuthorizationInfo.AsObject>,
    requestMetadata?: RequestMetadata.AsObject,
    request?: google_protobuf_struct_pb.Struct.AsObject,
    response?: google_protobuf_struct_pb.Struct.AsObject,
    serviceData?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class AuthenticationInfo extends jspb.Message {
  getPrincipalEmail(): string;
  setPrincipalEmail(value: string): AuthenticationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationInfo): AuthenticationInfo.AsObject;
  static serializeBinaryToWriter(message: AuthenticationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationInfo;
  static deserializeBinaryFromReader(message: AuthenticationInfo, reader: jspb.BinaryReader): AuthenticationInfo;
}

export namespace AuthenticationInfo {
  export type AsObject = {
    principalEmail: string,
  }
}

export class AuthorizationInfo extends jspb.Message {
  getResource(): string;
  setResource(value: string): AuthorizationInfo;

  getPermission(): string;
  setPermission(value: string): AuthorizationInfo;

  getGranted(): boolean;
  setGranted(value: boolean): AuthorizationInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationInfo): AuthorizationInfo.AsObject;
  static serializeBinaryToWriter(message: AuthorizationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationInfo;
  static deserializeBinaryFromReader(message: AuthorizationInfo, reader: jspb.BinaryReader): AuthorizationInfo;
}

export namespace AuthorizationInfo {
  export type AsObject = {
    resource: string,
    permission: string,
    granted: boolean,
  }
}

export class RequestMetadata extends jspb.Message {
  getCallerIp(): string;
  setCallerIp(value: string): RequestMetadata;

  getCallerSuppliedUserAgent(): string;
  setCallerSuppliedUserAgent(value: string): RequestMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RequestMetadata): RequestMetadata.AsObject;
  static serializeBinaryToWriter(message: RequestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestMetadata;
  static deserializeBinaryFromReader(message: RequestMetadata, reader: jspb.BinaryReader): RequestMetadata;
}

export namespace RequestMetadata {
  export type AsObject = {
    callerIp: string,
    callerSuppliedUserAgent: string,
  }
}

