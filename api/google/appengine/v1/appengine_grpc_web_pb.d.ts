import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_appengine_v1_instance_pb from '../../../google/appengine/v1/instance_pb';
import * as google_appengine_v1_version_pb from '../../../google/appengine/v1/version_pb';
import * as google_appengine_v1_application_pb from '../../../google/appengine/v1/application_pb';
import * as google_appengine_v1_service_pb from '../../../google/appengine/v1/service_pb';
import * as google_appengine_v1_appengine_pb from '../../../google/appengine/v1/appengine_pb';


export class InstancesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listInstances(
    request: google_appengine_v1_appengine_pb.ListInstancesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_appengine_pb.ListInstancesResponse) => void
  ): grpcWeb.ClientReadableStream<google_appengine_v1_appengine_pb.ListInstancesResponse>;

  getInstance(
    request: google_appengine_v1_appengine_pb.GetInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_instance_pb.Instance) => void
  ): grpcWeb.ClientReadableStream<google_appengine_v1_instance_pb.Instance>;

  deleteInstance(
    request: google_appengine_v1_appengine_pb.DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  debugInstance(
    request: google_appengine_v1_appengine_pb.DebugInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class VersionsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listVersions(
    request: google_appengine_v1_appengine_pb.ListVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_appengine_pb.ListVersionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_appengine_v1_appengine_pb.ListVersionsResponse>;

  getVersion(
    request: google_appengine_v1_appengine_pb.GetVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_version_pb.Version) => void
  ): grpcWeb.ClientReadableStream<google_appengine_v1_version_pb.Version>;

  createVersion(
    request: google_appengine_v1_appengine_pb.CreateVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateVersion(
    request: google_appengine_v1_appengine_pb.UpdateVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteVersion(
    request: google_appengine_v1_appengine_pb.DeleteVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class ServicesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listServices(
    request: google_appengine_v1_appengine_pb.ListServicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_appengine_pb.ListServicesResponse) => void
  ): grpcWeb.ClientReadableStream<google_appengine_v1_appengine_pb.ListServicesResponse>;

  getService(
    request: google_appengine_v1_appengine_pb.GetServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_service_pb.Service) => void
  ): grpcWeb.ClientReadableStream<google_appengine_v1_service_pb.Service>;

  updateService(
    request: google_appengine_v1_appengine_pb.UpdateServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteService(
    request: google_appengine_v1_appengine_pb.DeleteServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class ApplicationsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getApplication(
    request: google_appengine_v1_appengine_pb.GetApplicationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_appengine_v1_application_pb.Application) => void
  ): grpcWeb.ClientReadableStream<google_appengine_v1_application_pb.Application>;

  repairApplication(
    request: google_appengine_v1_appengine_pb.RepairApplicationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class InstancesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listInstances(
    request: google_appengine_v1_appengine_pb.ListInstancesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_appengine_v1_appengine_pb.ListInstancesResponse>;

  getInstance(
    request: google_appengine_v1_appengine_pb.GetInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_appengine_v1_instance_pb.Instance>;

  deleteInstance(
    request: google_appengine_v1_appengine_pb.DeleteInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  debugInstance(
    request: google_appengine_v1_appengine_pb.DebugInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

export class VersionsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listVersions(
    request: google_appengine_v1_appengine_pb.ListVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_appengine_v1_appengine_pb.ListVersionsResponse>;

  getVersion(
    request: google_appengine_v1_appengine_pb.GetVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_appengine_v1_version_pb.Version>;

  createVersion(
    request: google_appengine_v1_appengine_pb.CreateVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateVersion(
    request: google_appengine_v1_appengine_pb.UpdateVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteVersion(
    request: google_appengine_v1_appengine_pb.DeleteVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

export class ServicesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listServices(
    request: google_appengine_v1_appengine_pb.ListServicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_appengine_v1_appengine_pb.ListServicesResponse>;

  getService(
    request: google_appengine_v1_appengine_pb.GetServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_appengine_v1_service_pb.Service>;

  updateService(
    request: google_appengine_v1_appengine_pb.UpdateServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteService(
    request: google_appengine_v1_appengine_pb.DeleteServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

export class ApplicationsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getApplication(
    request: google_appengine_v1_appengine_pb.GetApplicationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_appengine_v1_application_pb.Application>;

  repairApplication(
    request: google_appengine_v1_appengine_pb.RepairApplicationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

