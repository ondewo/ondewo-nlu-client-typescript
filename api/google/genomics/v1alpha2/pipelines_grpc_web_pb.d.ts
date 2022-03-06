import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_genomics_v1alpha2_pipelines_pb from '../../../google/genomics/v1alpha2/pipelines_pb';


export class PipelinesV1Alpha2Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPipeline(
    request: google_genomics_v1alpha2_pipelines_pb.CreatePipelineRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1alpha2_pipelines_pb.Pipeline) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1alpha2_pipelines_pb.Pipeline>;

  runPipeline(
    request: google_genomics_v1alpha2_pipelines_pb.RunPipelineRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getPipeline(
    request: google_genomics_v1alpha2_pipelines_pb.GetPipelineRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1alpha2_pipelines_pb.Pipeline) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1alpha2_pipelines_pb.Pipeline>;

  listPipelines(
    request: google_genomics_v1alpha2_pipelines_pb.ListPipelinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse>;

  deletePipeline(
    request: google_genomics_v1alpha2_pipelines_pb.DeletePipelineRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getControllerConfig(
    request: google_genomics_v1alpha2_pipelines_pb.GetControllerConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1alpha2_pipelines_pb.ControllerConfig) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1alpha2_pipelines_pb.ControllerConfig>;

  setOperationStatus(
    request: google_genomics_v1alpha2_pipelines_pb.SetOperationStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class PipelinesV1Alpha2PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPipeline(
    request: google_genomics_v1alpha2_pipelines_pb.CreatePipelineRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1alpha2_pipelines_pb.Pipeline>;

  runPipeline(
    request: google_genomics_v1alpha2_pipelines_pb.RunPipelineRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getPipeline(
    request: google_genomics_v1alpha2_pipelines_pb.GetPipelineRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1alpha2_pipelines_pb.Pipeline>;

  listPipelines(
    request: google_genomics_v1alpha2_pipelines_pb.ListPipelinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse>;

  deletePipeline(
    request: google_genomics_v1alpha2_pipelines_pb.DeletePipelineRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getControllerConfig(
    request: google_genomics_v1alpha2_pipelines_pb.GetControllerConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1alpha2_pipelines_pb.ControllerConfig>;

  setOperationStatus(
    request: google_genomics_v1alpha2_pipelines_pb.SetOperationStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

