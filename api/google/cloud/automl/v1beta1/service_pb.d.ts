import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_automl_v1beta1_annotation_payload_pb from '../../../../google/cloud/automl/v1beta1/annotation_payload_pb';
import * as google_cloud_automl_v1beta1_dataset_pb from '../../../../google/cloud/automl/v1beta1/dataset_pb';
import * as google_cloud_automl_v1beta1_io_pb from '../../../../google/cloud/automl/v1beta1/io_pb';
import * as google_cloud_automl_v1beta1_model_pb from '../../../../google/cloud/automl/v1beta1/model_pb';
import * as google_cloud_automl_v1beta1_model_evaluation_pb from '../../../../google/cloud/automl/v1beta1/model_evaluation_pb';
import * as google_cloud_automl_v1beta1_operations_pb from '../../../../google/cloud/automl/v1beta1/operations_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class CreateDatasetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateDatasetRequest;

  getDataset(): google_cloud_automl_v1beta1_dataset_pb.Dataset | undefined;
  setDataset(value?: google_cloud_automl_v1beta1_dataset_pb.Dataset): CreateDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): CreateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetRequest): CreateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetRequest;
  static deserializeBinaryFromReader(message: CreateDatasetRequest, reader: jspb.BinaryReader): CreateDatasetRequest;
}

export namespace CreateDatasetRequest {
  export type AsObject = {
    parent: string,
    dataset?: google_cloud_automl_v1beta1_dataset_pb.Dataset.AsObject,
  }
}

export class GetDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetRequest): GetDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetRequest;
  static deserializeBinaryFromReader(message: GetDatasetRequest, reader: jspb.BinaryReader): GetDatasetRequest;
}

export namespace GetDatasetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListDatasetsRequest;

  getFilter(): string;
  setFilter(value: string): ListDatasetsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDatasetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsRequest): ListDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsRequest;
  static deserializeBinaryFromReader(message: ListDatasetsRequest, reader: jspb.BinaryReader): ListDatasetsRequest;
}

export namespace ListDatasetsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatasetsResponse extends jspb.Message {
  getDatasetsList(): Array<google_cloud_automl_v1beta1_dataset_pb.Dataset>;
  setDatasetsList(value: Array<google_cloud_automl_v1beta1_dataset_pb.Dataset>): ListDatasetsResponse;
  clearDatasetsList(): ListDatasetsResponse;
  addDatasets(value?: google_cloud_automl_v1beta1_dataset_pb.Dataset, index?: number): google_cloud_automl_v1beta1_dataset_pb.Dataset;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDatasetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsResponse): ListDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsResponse;
  static deserializeBinaryFromReader(message: ListDatasetsResponse, reader: jspb.BinaryReader): ListDatasetsResponse;
}

export namespace ListDatasetsResponse {
  export type AsObject = {
    datasetsList: Array<google_cloud_automl_v1beta1_dataset_pb.Dataset.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetRequest): DeleteDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetRequest, reader: jspb.BinaryReader): DeleteDatasetRequest;
}

export namespace DeleteDatasetRequest {
  export type AsObject = {
    name: string,
  }
}

export class ImportDataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ImportDataRequest;

  getInputConfig(): google_cloud_automl_v1beta1_io_pb.InputConfig | undefined;
  setInputConfig(value?: google_cloud_automl_v1beta1_io_pb.InputConfig): ImportDataRequest;
  hasInputConfig(): boolean;
  clearInputConfig(): ImportDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportDataRequest): ImportDataRequest.AsObject;
  static serializeBinaryToWriter(message: ImportDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportDataRequest;
  static deserializeBinaryFromReader(message: ImportDataRequest, reader: jspb.BinaryReader): ImportDataRequest;
}

export namespace ImportDataRequest {
  export type AsObject = {
    name: string,
    inputConfig?: google_cloud_automl_v1beta1_io_pb.InputConfig.AsObject,
  }
}

export class ExportDataRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ExportDataRequest;

  getOutputConfig(): google_cloud_automl_v1beta1_io_pb.OutputConfig | undefined;
  setOutputConfig(value?: google_cloud_automl_v1beta1_io_pb.OutputConfig): ExportDataRequest;
  hasOutputConfig(): boolean;
  clearOutputConfig(): ExportDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExportDataRequest): ExportDataRequest.AsObject;
  static serializeBinaryToWriter(message: ExportDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportDataRequest;
  static deserializeBinaryFromReader(message: ExportDataRequest, reader: jspb.BinaryReader): ExportDataRequest;
}

export namespace ExportDataRequest {
  export type AsObject = {
    name: string,
    outputConfig?: google_cloud_automl_v1beta1_io_pb.OutputConfig.AsObject,
  }
}

export class CreateModelRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateModelRequest;

  getModel(): google_cloud_automl_v1beta1_model_pb.Model | undefined;
  setModel(value?: google_cloud_automl_v1beta1_model_pb.Model): CreateModelRequest;
  hasModel(): boolean;
  clearModel(): CreateModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelRequest): CreateModelRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelRequest;
  static deserializeBinaryFromReader(message: CreateModelRequest, reader: jspb.BinaryReader): CreateModelRequest;
}

export namespace CreateModelRequest {
  export type AsObject = {
    parent: string,
    model?: google_cloud_automl_v1beta1_model_pb.Model.AsObject,
  }
}

export class GetModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListModelsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListModelsRequest;

  getFilter(): string;
  setFilter(value: string): ListModelsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelsResponse extends jspb.Message {
  getModelList(): Array<google_cloud_automl_v1beta1_model_pb.Model>;
  setModelList(value: Array<google_cloud_automl_v1beta1_model_pb.Model>): ListModelsResponse;
  clearModelList(): ListModelsResponse;
  addModel(value?: google_cloud_automl_v1beta1_model_pb.Model, index?: number): google_cloud_automl_v1beta1_model_pb.Model;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
  static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
  export type AsObject = {
    modelList: Array<google_cloud_automl_v1beta1_model_pb.Model.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeployModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeployModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployModelRequest): DeployModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeployModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployModelRequest;
  static deserializeBinaryFromReader(message: DeployModelRequest, reader: jspb.BinaryReader): DeployModelRequest;
}

export namespace DeployModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class UndeployModelRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UndeployModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeployModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeployModelRequest): UndeployModelRequest.AsObject;
  static serializeBinaryToWriter(message: UndeployModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeployModelRequest;
  static deserializeBinaryFromReader(message: UndeployModelRequest, reader: jspb.BinaryReader): UndeployModelRequest;
}

export namespace UndeployModelRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetModelEvaluationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetModelEvaluationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelEvaluationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelEvaluationRequest): GetModelEvaluationRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelEvaluationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelEvaluationRequest;
  static deserializeBinaryFromReader(message: GetModelEvaluationRequest, reader: jspb.BinaryReader): GetModelEvaluationRequest;
}

export namespace GetModelEvaluationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListModelEvaluationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListModelEvaluationsRequest;

  getFilter(): string;
  setFilter(value: string): ListModelEvaluationsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelEvaluationsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelEvaluationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelEvaluationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelEvaluationsRequest): ListModelEvaluationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelEvaluationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelEvaluationsRequest;
  static deserializeBinaryFromReader(message: ListModelEvaluationsRequest, reader: jspb.BinaryReader): ListModelEvaluationsRequest;
}

export namespace ListModelEvaluationsRequest {
  export type AsObject = {
    parent: string,
    filter: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelEvaluationsResponse extends jspb.Message {
  getModelEvaluationList(): Array<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>;
  setModelEvaluationList(value: Array<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>): ListModelEvaluationsResponse;
  clearModelEvaluationList(): ListModelEvaluationsResponse;
  addModelEvaluation(value?: google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation, index?: number): google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelEvaluationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelEvaluationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelEvaluationsResponse): ListModelEvaluationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelEvaluationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelEvaluationsResponse;
  static deserializeBinaryFromReader(message: ListModelEvaluationsResponse, reader: jspb.BinaryReader): ListModelEvaluationsResponse;
}

export namespace ListModelEvaluationsResponse {
  export type AsObject = {
    modelEvaluationList: Array<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation.AsObject>,
    nextPageToken: string,
  }
}

