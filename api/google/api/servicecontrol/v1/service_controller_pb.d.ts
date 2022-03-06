import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_servicecontrol_v1_check_error_pb from '../../../../google/api/servicecontrol/v1/check_error_pb';
import * as google_api_servicecontrol_v1_operation_pb from '../../../../google/api/servicecontrol/v1/operation_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class CheckRequest extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): CheckRequest;

  getOperation(): google_api_servicecontrol_v1_operation_pb.Operation | undefined;
  setOperation(value?: google_api_servicecontrol_v1_operation_pb.Operation): CheckRequest;
  hasOperation(): boolean;
  clearOperation(): CheckRequest;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): CheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRequest): CheckRequest.AsObject;
  static serializeBinaryToWriter(message: CheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRequest;
  static deserializeBinaryFromReader(message: CheckRequest, reader: jspb.BinaryReader): CheckRequest;
}

export namespace CheckRequest {
  export type AsObject = {
    serviceName: string,
    operation?: google_api_servicecontrol_v1_operation_pb.Operation.AsObject,
    serviceConfigId: string,
  }
}

export class CheckResponse extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): CheckResponse;

  getCheckErrorsList(): Array<google_api_servicecontrol_v1_check_error_pb.CheckError>;
  setCheckErrorsList(value: Array<google_api_servicecontrol_v1_check_error_pb.CheckError>): CheckResponse;
  clearCheckErrorsList(): CheckResponse;
  addCheckErrors(value?: google_api_servicecontrol_v1_check_error_pb.CheckError, index?: number): google_api_servicecontrol_v1_check_error_pb.CheckError;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): CheckResponse;

  getCheckInfo(): CheckResponse.CheckInfo | undefined;
  setCheckInfo(value?: CheckResponse.CheckInfo): CheckResponse;
  hasCheckInfo(): boolean;
  clearCheckInfo(): CheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
  static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResponse;
  static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
  export type AsObject = {
    operationId: string,
    checkErrorsList: Array<google_api_servicecontrol_v1_check_error_pb.CheckError.AsObject>,
    serviceConfigId: string,
    checkInfo?: CheckResponse.CheckInfo.AsObject,
  }

  export class CheckInfo extends jspb.Message {
    getConsumerInfo(): CheckResponse.ConsumerInfo | undefined;
    setConsumerInfo(value?: CheckResponse.ConsumerInfo): CheckInfo;
    hasConsumerInfo(): boolean;
    clearConsumerInfo(): CheckInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CheckInfo): CheckInfo.AsObject;
    static serializeBinaryToWriter(message: CheckInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckInfo;
    static deserializeBinaryFromReader(message: CheckInfo, reader: jspb.BinaryReader): CheckInfo;
  }

  export namespace CheckInfo {
    export type AsObject = {
      consumerInfo?: CheckResponse.ConsumerInfo.AsObject,
    }
  }


  export class ConsumerInfo extends jspb.Message {
    getProjectNumber(): number;
    setProjectNumber(value: number): ConsumerInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsumerInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ConsumerInfo): ConsumerInfo.AsObject;
    static serializeBinaryToWriter(message: ConsumerInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsumerInfo;
    static deserializeBinaryFromReader(message: ConsumerInfo, reader: jspb.BinaryReader): ConsumerInfo;
  }

  export namespace ConsumerInfo {
    export type AsObject = {
      projectNumber: number,
    }
  }

}

export class ReportRequest extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): ReportRequest;

  getOperationsList(): Array<google_api_servicecontrol_v1_operation_pb.Operation>;
  setOperationsList(value: Array<google_api_servicecontrol_v1_operation_pb.Operation>): ReportRequest;
  clearOperationsList(): ReportRequest;
  addOperations(value?: google_api_servicecontrol_v1_operation_pb.Operation, index?: number): google_api_servicecontrol_v1_operation_pb.Operation;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): ReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportRequest): ReportRequest.AsObject;
  static serializeBinaryToWriter(message: ReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportRequest;
  static deserializeBinaryFromReader(message: ReportRequest, reader: jspb.BinaryReader): ReportRequest;
}

export namespace ReportRequest {
  export type AsObject = {
    serviceName: string,
    operationsList: Array<google_api_servicecontrol_v1_operation_pb.Operation.AsObject>,
    serviceConfigId: string,
  }
}

export class ReportResponse extends jspb.Message {
  getReportErrorsList(): Array<ReportResponse.ReportError>;
  setReportErrorsList(value: Array<ReportResponse.ReportError>): ReportResponse;
  clearReportErrorsList(): ReportResponse;
  addReportErrors(value?: ReportResponse.ReportError, index?: number): ReportResponse.ReportError;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): ReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportResponse): ReportResponse.AsObject;
  static serializeBinaryToWriter(message: ReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportResponse;
  static deserializeBinaryFromReader(message: ReportResponse, reader: jspb.BinaryReader): ReportResponse;
}

export namespace ReportResponse {
  export type AsObject = {
    reportErrorsList: Array<ReportResponse.ReportError.AsObject>,
    serviceConfigId: string,
  }

  export class ReportError extends jspb.Message {
    getOperationId(): string;
    setOperationId(value: string): ReportError;

    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): ReportError;
    hasStatus(): boolean;
    clearStatus(): ReportError;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportError.AsObject;
    static toObject(includeInstance: boolean, msg: ReportError): ReportError.AsObject;
    static serializeBinaryToWriter(message: ReportError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportError;
    static deserializeBinaryFromReader(message: ReportError, reader: jspb.BinaryReader): ReportError;
  }

  export namespace ReportError {
    export type AsObject = {
      operationId: string,
      status?: google_rpc_status_pb.Status.AsObject,
    }
  }

}

