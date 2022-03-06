import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_ml_v1_model_service_pb from '../../../../google/cloud/ml/v1/model_service_pb';


export class ModelServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createModel(
    request: google_cloud_ml_v1_model_service_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_model_service_pb.Model) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_model_service_pb.Model>;

  listModels(
    request: google_cloud_ml_v1_model_service_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_model_service_pb.ListModelsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_model_service_pb.ListModelsResponse>;

  getModel(
    request: google_cloud_ml_v1_model_service_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_model_service_pb.Model) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_model_service_pb.Model>;

  deleteModel(
    request: google_cloud_ml_v1_model_service_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  createVersion(
    request: google_cloud_ml_v1_model_service_pb.CreateVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listVersions(
    request: google_cloud_ml_v1_model_service_pb.ListVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_model_service_pb.ListVersionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_model_service_pb.ListVersionsResponse>;

  getVersion(
    request: google_cloud_ml_v1_model_service_pb.GetVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_model_service_pb.Version) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_model_service_pb.Version>;

  deleteVersion(
    request: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  setDefaultVersion(
    request: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_model_service_pb.Version) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_model_service_pb.Version>;

}

export class ModelServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createModel(
    request: google_cloud_ml_v1_model_service_pb.CreateModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_model_service_pb.Model>;

  listModels(
    request: google_cloud_ml_v1_model_service_pb.ListModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_model_service_pb.ListModelsResponse>;

  getModel(
    request: google_cloud_ml_v1_model_service_pb.GetModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_model_service_pb.Model>;

  deleteModel(
    request: google_cloud_ml_v1_model_service_pb.DeleteModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  createVersion(
    request: google_cloud_ml_v1_model_service_pb.CreateVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listVersions(
    request: google_cloud_ml_v1_model_service_pb.ListVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_model_service_pb.ListVersionsResponse>;

  getVersion(
    request: google_cloud_ml_v1_model_service_pb.GetVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_model_service_pb.Version>;

  deleteVersion(
    request: google_cloud_ml_v1_model_service_pb.DeleteVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  setDefaultVersion(
    request: google_cloud_ml_v1_model_service_pb.SetDefaultVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_model_service_pb.Version>;

}

