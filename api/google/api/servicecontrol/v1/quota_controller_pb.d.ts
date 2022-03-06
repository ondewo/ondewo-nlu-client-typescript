import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_servicecontrol_v1_metric_value_pb from '../../../../google/api/servicecontrol/v1/metric_value_pb';


export class AllocateQuotaRequest extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): AllocateQuotaRequest;

  getAllocateOperation(): QuotaOperation | undefined;
  setAllocateOperation(value?: QuotaOperation): AllocateQuotaRequest;
  hasAllocateOperation(): boolean;
  clearAllocateOperation(): AllocateQuotaRequest;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): AllocateQuotaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllocateQuotaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllocateQuotaRequest): AllocateQuotaRequest.AsObject;
  static serializeBinaryToWriter(message: AllocateQuotaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllocateQuotaRequest;
  static deserializeBinaryFromReader(message: AllocateQuotaRequest, reader: jspb.BinaryReader): AllocateQuotaRequest;
}

export namespace AllocateQuotaRequest {
  export type AsObject = {
    serviceName: string,
    allocateOperation?: QuotaOperation.AsObject,
    serviceConfigId: string,
  }
}

export class QuotaOperation extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): QuotaOperation;

  getMethodName(): string;
  setMethodName(value: string): QuotaOperation;

  getConsumerId(): string;
  setConsumerId(value: string): QuotaOperation;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): QuotaOperation;

  getQuotaMetricsList(): Array<google_api_servicecontrol_v1_metric_value_pb.MetricValueSet>;
  setQuotaMetricsList(value: Array<google_api_servicecontrol_v1_metric_value_pb.MetricValueSet>): QuotaOperation;
  clearQuotaMetricsList(): QuotaOperation;
  addQuotaMetrics(value?: google_api_servicecontrol_v1_metric_value_pb.MetricValueSet, index?: number): google_api_servicecontrol_v1_metric_value_pb.MetricValueSet;

  getQuotaMode(): QuotaOperation.QuotaMode;
  setQuotaMode(value: QuotaOperation.QuotaMode): QuotaOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaOperation.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaOperation): QuotaOperation.AsObject;
  static serializeBinaryToWriter(message: QuotaOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaOperation;
  static deserializeBinaryFromReader(message: QuotaOperation, reader: jspb.BinaryReader): QuotaOperation;
}

export namespace QuotaOperation {
  export type AsObject = {
    operationId: string,
    methodName: string,
    consumerId: string,
    labelsMap: Array<[string, string]>,
    quotaMetricsList: Array<google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.AsObject>,
    quotaMode: QuotaOperation.QuotaMode,
  }

  export enum QuotaMode { 
    UNSPECIFIED = 0,
    NORMAL = 1,
    BEST_EFFORT = 2,
    CHECK_ONLY = 3,
  }
}

export class AllocateQuotaResponse extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): AllocateQuotaResponse;

  getAllocateErrorsList(): Array<QuotaError>;
  setAllocateErrorsList(value: Array<QuotaError>): AllocateQuotaResponse;
  clearAllocateErrorsList(): AllocateQuotaResponse;
  addAllocateErrors(value?: QuotaError, index?: number): QuotaError;

  getQuotaMetricsList(): Array<google_api_servicecontrol_v1_metric_value_pb.MetricValueSet>;
  setQuotaMetricsList(value: Array<google_api_servicecontrol_v1_metric_value_pb.MetricValueSet>): AllocateQuotaResponse;
  clearQuotaMetricsList(): AllocateQuotaResponse;
  addQuotaMetrics(value?: google_api_servicecontrol_v1_metric_value_pb.MetricValueSet, index?: number): google_api_servicecontrol_v1_metric_value_pb.MetricValueSet;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): AllocateQuotaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllocateQuotaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllocateQuotaResponse): AllocateQuotaResponse.AsObject;
  static serializeBinaryToWriter(message: AllocateQuotaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllocateQuotaResponse;
  static deserializeBinaryFromReader(message: AllocateQuotaResponse, reader: jspb.BinaryReader): AllocateQuotaResponse;
}

export namespace AllocateQuotaResponse {
  export type AsObject = {
    operationId: string,
    allocateErrorsList: Array<QuotaError.AsObject>,
    quotaMetricsList: Array<google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.AsObject>,
    serviceConfigId: string,
  }
}

export class QuotaError extends jspb.Message {
  getCode(): QuotaError.Code;
  setCode(value: QuotaError.Code): QuotaError;

  getSubject(): string;
  setSubject(value: string): QuotaError;

  getDescription(): string;
  setDescription(value: string): QuotaError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaError.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaError): QuotaError.AsObject;
  static serializeBinaryToWriter(message: QuotaError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaError;
  static deserializeBinaryFromReader(message: QuotaError, reader: jspb.BinaryReader): QuotaError;
}

export namespace QuotaError {
  export type AsObject = {
    code: QuotaError.Code,
    subject: string,
    description: string,
  }

  export enum Code { 
    UNSPECIFIED = 0,
    RESOURCE_EXHAUSTED = 8,
    BILLING_NOT_ACTIVE = 107,
    PROJECT_DELETED = 108,
    API_KEY_INVALID = 105,
    API_KEY_EXPIRED = 112,
  }
}

