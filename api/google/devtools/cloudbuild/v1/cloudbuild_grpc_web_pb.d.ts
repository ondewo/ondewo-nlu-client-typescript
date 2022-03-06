import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_devtools_cloudbuild_v1_cloudbuild_pb from '../../../../google/devtools/cloudbuild/v1/cloudbuild_pb';


export class CloudBuildClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createBuild(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getBuild(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudbuild_v1_cloudbuild_pb.Build) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>;

  listBuilds(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse>;

  cancelBuild(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.CancelBuildRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudbuild_v1_cloudbuild_pb.Build) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>;

  retryBuild(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.RetryBuildRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  createBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>;

  getBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>;

  listBuildTriggers(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse>;

  deleteBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteBuildTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateBuildTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger) => void
  ): grpcWeb.ClientReadableStream<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>;

  runBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.RunBuildTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class CloudBuildPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createBuild(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getBuild(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>;

  listBuilds(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildsResponse>;

  cancelBuild(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.CancelBuildRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudbuild_v1_cloudbuild_pb.Build>;

  retryBuild(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.RetryBuildRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  createBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.CreateBuildTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>;

  getBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.GetBuildTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>;

  listBuildTriggers(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudbuild_v1_cloudbuild_pb.ListBuildTriggersResponse>;

  deleteBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.DeleteBuildTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  updateBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.UpdateBuildTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_cloudbuild_v1_cloudbuild_pb.BuildTrigger>;

  runBuildTrigger(
    request: google_devtools_cloudbuild_v1_cloudbuild_pb.RunBuildTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

