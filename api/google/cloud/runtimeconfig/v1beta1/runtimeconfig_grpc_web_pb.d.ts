import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_runtimeconfig_v1beta1_resources_pb from '../../../../google/cloud/runtimeconfig/v1beta1/resources_pb';
import * as google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb from '../../../../google/cloud/runtimeconfig/v1beta1/runtimeconfig_pb';


export class RuntimeConfigManagerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listConfigs(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse>;

  getConfig(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;

  createConfig(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;

  updateConfig(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;

  deleteConfig(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listVariables(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse>;

  getVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetVariableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;

  watchVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.WatchVariableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;

  createVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateVariableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;

  updateVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateVariableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Variable) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;

  deleteVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteVariableRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listWaiters(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse>;

  getWaiter(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetWaiterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter) => void
  ): grpcWeb.ClientReadableStream<google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter>;

  createWaiter(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateWaiterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteWaiter(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteWaiterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class RuntimeConfigManagerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listConfigs(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListConfigsResponse>;

  getConfig(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;

  createConfig(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;

  updateConfig(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_resources_pb.RuntimeConfig>;

  deleteConfig(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listVariables(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListVariablesResponse>;

  getVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetVariableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;

  watchVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.WatchVariableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;

  createVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateVariableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;

  updateVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.UpdateVariableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_resources_pb.Variable>;

  deleteVariable(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteVariableRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listWaiters(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.ListWaitersResponse>;

  getWaiter(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.GetWaiterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_runtimeconfig_v1beta1_resources_pb.Waiter>;

  createWaiter(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.CreateWaiterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteWaiter(
    request: google_cloud_runtimeconfig_v1beta1_runtimeconfig_pb.DeleteWaiterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

