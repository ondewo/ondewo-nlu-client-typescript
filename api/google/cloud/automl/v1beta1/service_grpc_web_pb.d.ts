import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_automl_v1beta1_model_pb from '../../../../google/cloud/automl/v1beta1/model_pb';
import * as google_cloud_automl_v1beta1_model_evaluation_pb from '../../../../google/cloud/automl/v1beta1/model_evaluation_pb';
import * as google_cloud_automl_v1beta1_dataset_pb from '../../../../google/cloud/automl/v1beta1/dataset_pb';
import * as google_cloud_automl_v1beta1_service_pb from '../../../../google/cloud/automl/v1beta1/service_pb';


export class AutoMlClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createDataset(
    request: google_cloud_automl_v1beta1_service_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_dataset_pb.Dataset) => void
  ): grpcWeb.ClientReadableStream<google_cloud_automl_v1beta1_dataset_pb.Dataset>;

  getDataset(
    request: google_cloud_automl_v1beta1_service_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_dataset_pb.Dataset) => void
  ): grpcWeb.ClientReadableStream<google_cloud_automl_v1beta1_dataset_pb.Dataset>;

  listDatasets(
    request: google_cloud_automl_v1beta1_service_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse>;

  deleteDataset(
    request: google_cloud_automl_v1beta1_service_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  importData(
    request: google_cloud_automl_v1beta1_service_pb.ImportDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  exportData(
    request: google_cloud_automl_v1beta1_service_pb.ExportDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  createModel(
    request: google_cloud_automl_v1beta1_service_pb.CreateModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getModel(
    request: google_cloud_automl_v1beta1_service_pb.GetModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_model_pb.Model) => void
  ): grpcWeb.ClientReadableStream<google_cloud_automl_v1beta1_model_pb.Model>;

  listModels(
    request: google_cloud_automl_v1beta1_service_pb.ListModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_service_pb.ListModelsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_automl_v1beta1_service_pb.ListModelsResponse>;

  deleteModel(
    request: google_cloud_automl_v1beta1_service_pb.DeleteModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deployModel(
    request: google_cloud_automl_v1beta1_service_pb.DeployModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  undeployModel(
    request: google_cloud_automl_v1beta1_service_pb.UndeployModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getModelEvaluation(
    request: google_cloud_automl_v1beta1_service_pb.GetModelEvaluationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation) => void
  ): grpcWeb.ClientReadableStream<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>;

  listModelEvaluations(
    request: google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse>;

}

export class AutoMlPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createDataset(
    request: google_cloud_automl_v1beta1_service_pb.CreateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_automl_v1beta1_dataset_pb.Dataset>;

  getDataset(
    request: google_cloud_automl_v1beta1_service_pb.GetDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_automl_v1beta1_dataset_pb.Dataset>;

  listDatasets(
    request: google_cloud_automl_v1beta1_service_pb.ListDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_automl_v1beta1_service_pb.ListDatasetsResponse>;

  deleteDataset(
    request: google_cloud_automl_v1beta1_service_pb.DeleteDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  importData(
    request: google_cloud_automl_v1beta1_service_pb.ImportDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  exportData(
    request: google_cloud_automl_v1beta1_service_pb.ExportDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  createModel(
    request: google_cloud_automl_v1beta1_service_pb.CreateModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getModel(
    request: google_cloud_automl_v1beta1_service_pb.GetModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_automl_v1beta1_model_pb.Model>;

  listModels(
    request: google_cloud_automl_v1beta1_service_pb.ListModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_automl_v1beta1_service_pb.ListModelsResponse>;

  deleteModel(
    request: google_cloud_automl_v1beta1_service_pb.DeleteModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deployModel(
    request: google_cloud_automl_v1beta1_service_pb.DeployModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  undeployModel(
    request: google_cloud_automl_v1beta1_service_pb.UndeployModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getModelEvaluation(
    request: google_cloud_automl_v1beta1_service_pb.GetModelEvaluationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_automl_v1beta1_model_evaluation_pb.ModelEvaluation>;

  listModelEvaluations(
    request: google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_automl_v1beta1_service_pb.ListModelEvaluationsResponse>;

}

