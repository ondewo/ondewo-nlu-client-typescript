import * as grpcWeb from 'grpc-web';

import * as google_cloud_ml_v1_project_service_pb from '../../../../google/cloud/ml/v1/project_service_pb';


export class ProjectManagementServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getConfig(
    request: google_cloud_ml_v1_project_service_pb.GetConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_project_service_pb.GetConfigResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_project_service_pb.GetConfigResponse>;

}

export class ProjectManagementServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getConfig(
    request: google_cloud_ml_v1_project_service_pb.GetConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_project_service_pb.GetConfigResponse>;

}

