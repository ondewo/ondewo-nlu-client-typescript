import * as grpcWeb from 'grpc-web';

import * as google_devtools_resultstore_v2_file_set_pb from '../../../../google/devtools/resultstore/v2/file_set_pb';
import * as google_devtools_resultstore_v2_target_pb from '../../../../google/devtools/resultstore/v2/target_pb';
import * as google_devtools_resultstore_v2_invocation_pb from '../../../../google/devtools/resultstore/v2/invocation_pb';
import * as google_devtools_resultstore_v2_configuration_pb from '../../../../google/devtools/resultstore/v2/configuration_pb';
import * as google_devtools_resultstore_v2_action_pb from '../../../../google/devtools/resultstore/v2/action_pb';
import * as google_devtools_resultstore_v2_configured_target_pb from '../../../../google/devtools/resultstore/v2/configured_target_pb';
import * as google_devtools_resultstore_v2_resultstore_download_pb from '../../../../google/devtools/resultstore/v2/resultstore_download_pb';


export class ResultStoreDownloadClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getInvocation(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_invocation_pb.Invocation) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_invocation_pb.Invocation>;

  searchInvocations(
    request: google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse>;

  getConfiguration(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetConfigurationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_configuration_pb.Configuration) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_configuration_pb.Configuration>;

  listConfigurations(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse>;

  getTarget(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetTargetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_target_pb.Target) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_target_pb.Target>;

  listTargets(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse>;

  getConfiguredTarget(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetConfiguredTargetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>;

  listConfiguredTargets(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse>;

  getAction(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetActionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_action_pb.Action) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_action_pb.Action>;

  listActions(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListActionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse>;

  getFileSet(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetFileSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_file_set_pb.FileSet) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_file_set_pb.FileSet>;

  listFileSets(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse>;

}

export class ResultStoreDownloadPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getInvocation(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetInvocationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_invocation_pb.Invocation>;

  searchInvocations(
    request: google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_resultstore_download_pb.SearchInvocationsResponse>;

  getConfiguration(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetConfigurationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_configuration_pb.Configuration>;

  listConfigurations(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_resultstore_download_pb.ListConfigurationsResponse>;

  getTarget(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetTargetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_target_pb.Target>;

  listTargets(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_resultstore_download_pb.ListTargetsResponse>;

  getConfiguredTarget(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetConfiguredTargetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_configured_target_pb.ConfiguredTarget>;

  listConfiguredTargets(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_resultstore_download_pb.ListConfiguredTargetsResponse>;

  getAction(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetActionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_action_pb.Action>;

  listActions(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListActionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_resultstore_download_pb.ListActionsResponse>;

  getFileSet(
    request: google_devtools_resultstore_v2_resultstore_download_pb.GetFileSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_file_set_pb.FileSet>;

  listFileSets(
    request: google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_resultstore_v2_resultstore_download_pb.ListFileSetsResponse>;

}

