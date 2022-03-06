import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_api_service_pb from '../../../../google/api/service_pb';
import * as google_api_servicemanagement_v1_resources_pb from '../../../../google/api/servicemanagement/v1/resources_pb';
import * as google_api_servicemanagement_v1_servicemanager_pb from '../../../../google/api/servicemanagement/v1/servicemanager_pb';


export class ServiceManagerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listServices(
    request: google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse>;

  getService(
    request: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_servicemanagement_v1_resources_pb.ManagedService) => void
  ): grpcWeb.ClientReadableStream<google_api_servicemanagement_v1_resources_pb.ManagedService>;

  createService(
    request: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteService(
    request: google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  undeleteService(
    request: google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listServiceConfigs(
    request: google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse>;

  getServiceConfig(
    request: google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_service_pb.Service) => void
  ): grpcWeb.ClientReadableStream<google_api_service_pb.Service>;

  createServiceConfig(
    request: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_service_pb.Service) => void
  ): grpcWeb.ClientReadableStream<google_api_service_pb.Service>;

  submitConfigSource(
    request: google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listServiceRollouts(
    request: google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse>;

  getServiceRollout(
    request: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_servicemanagement_v1_resources_pb.Rollout) => void
  ): grpcWeb.ClientReadableStream<google_api_servicemanagement_v1_resources_pb.Rollout>;

  createServiceRollout(
    request: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  generateConfigReport(
    request: google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse) => void
  ): grpcWeb.ClientReadableStream<google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse>;

  enableService(
    request: google_api_servicemanagement_v1_servicemanager_pb.EnableServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  disableService(
    request: google_api_servicemanagement_v1_servicemanager_pb.DisableServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class ServiceManagerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listServices(
    request: google_api_servicemanagement_v1_servicemanager_pb.ListServicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_servicemanagement_v1_servicemanager_pb.ListServicesResponse>;

  getService(
    request: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_servicemanagement_v1_resources_pb.ManagedService>;

  createService(
    request: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteService(
    request: google_api_servicemanagement_v1_servicemanager_pb.DeleteServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  undeleteService(
    request: google_api_servicemanagement_v1_servicemanager_pb.UndeleteServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listServiceConfigs(
    request: google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_servicemanagement_v1_servicemanager_pb.ListServiceConfigsResponse>;

  getServiceConfig(
    request: google_api_servicemanagement_v1_servicemanager_pb.GetServiceConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_service_pb.Service>;

  createServiceConfig(
    request: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_service_pb.Service>;

  submitConfigSource(
    request: google_api_servicemanagement_v1_servicemanager_pb.SubmitConfigSourceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listServiceRollouts(
    request: google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_servicemanagement_v1_servicemanager_pb.ListServiceRolloutsResponse>;

  getServiceRollout(
    request: google_api_servicemanagement_v1_servicemanager_pb.GetServiceRolloutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_servicemanagement_v1_resources_pb.Rollout>;

  createServiceRollout(
    request: google_api_servicemanagement_v1_servicemanager_pb.CreateServiceRolloutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  generateConfigReport(
    request: google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_servicemanagement_v1_servicemanager_pb.GenerateConfigReportResponse>;

  enableService(
    request: google_api_servicemanagement_v1_servicemanager_pb.EnableServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  disableService(
    request: google_api_servicemanagement_v1_servicemanager_pb.DisableServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

