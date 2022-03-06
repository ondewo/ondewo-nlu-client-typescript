import * as jspb from 'google-protobuf'

import * as google_appengine_v1_appengine_pb from '../../../google/appengine/v1/appengine_pb';
import * as google_iam_v1_iam_policy_pb from '../../../google/iam/v1/iam_policy_pb';


export class AuditData extends jspb.Message {
  getUpdateService(): UpdateServiceMethod | undefined;
  setUpdateService(value?: UpdateServiceMethod): AuditData;
  hasUpdateService(): boolean;
  clearUpdateService(): AuditData;

  getCreateVersion(): CreateVersionMethod | undefined;
  setCreateVersion(value?: CreateVersionMethod): AuditData;
  hasCreateVersion(): boolean;
  clearCreateVersion(): AuditData;

  getMethodCase(): AuditData.MethodCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditData.AsObject;
  static toObject(includeInstance: boolean, msg: AuditData): AuditData.AsObject;
  static serializeBinaryToWriter(message: AuditData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditData;
  static deserializeBinaryFromReader(message: AuditData, reader: jspb.BinaryReader): AuditData;
}

export namespace AuditData {
  export type AsObject = {
    updateService?: UpdateServiceMethod.AsObject,
    createVersion?: CreateVersionMethod.AsObject,
  }

  export enum MethodCase { 
    METHOD_NOT_SET = 0,
    UPDATE_SERVICE = 1,
    CREATE_VERSION = 2,
  }
}

export class UpdateServiceMethod extends jspb.Message {
  getRequest(): google_appengine_v1_appengine_pb.UpdateServiceRequest | undefined;
  setRequest(value?: google_appengine_v1_appengine_pb.UpdateServiceRequest): UpdateServiceMethod;
  hasRequest(): boolean;
  clearRequest(): UpdateServiceMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceMethod.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceMethod): UpdateServiceMethod.AsObject;
  static serializeBinaryToWriter(message: UpdateServiceMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceMethod;
  static deserializeBinaryFromReader(message: UpdateServiceMethod, reader: jspb.BinaryReader): UpdateServiceMethod;
}

export namespace UpdateServiceMethod {
  export type AsObject = {
    request?: google_appengine_v1_appengine_pb.UpdateServiceRequest.AsObject,
  }
}

export class CreateVersionMethod extends jspb.Message {
  getRequest(): google_appengine_v1_appengine_pb.CreateVersionRequest | undefined;
  setRequest(value?: google_appengine_v1_appengine_pb.CreateVersionRequest): CreateVersionMethod;
  hasRequest(): boolean;
  clearRequest(): CreateVersionMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVersionMethod.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVersionMethod): CreateVersionMethod.AsObject;
  static serializeBinaryToWriter(message: CreateVersionMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVersionMethod;
  static deserializeBinaryFromReader(message: CreateVersionMethod, reader: jspb.BinaryReader): CreateVersionMethod;
}

export namespace CreateVersionMethod {
  export type AsObject = {
    request?: google_appengine_v1_appengine_pb.CreateVersionRequest.AsObject,
  }
}

