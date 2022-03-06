import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_functions_v1beta2_functions_pb from '../../../../google/cloud/functions/v1beta2/functions_pb';


export class CloudFunctionsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listFunctions(
    request: google_cloud_functions_v1beta2_functions_pb.ListFunctionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse>;

  getFunction(
    request: google_cloud_functions_v1beta2_functions_pb.GetFunctionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_functions_v1beta2_functions_pb.CloudFunction) => void
  ): grpcWeb.ClientReadableStream<google_cloud_functions_v1beta2_functions_pb.CloudFunction>;

  createFunction(
    request: google_cloud_functions_v1beta2_functions_pb.CreateFunctionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateFunction(
    request: google_cloud_functions_v1beta2_functions_pb.UpdateFunctionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteFunction(
    request: google_cloud_functions_v1beta2_functions_pb.DeleteFunctionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  callFunction(
    request: google_cloud_functions_v1beta2_functions_pb.CallFunctionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse>;

}

export class CloudFunctionsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listFunctions(
    request: google_cloud_functions_v1beta2_functions_pb.ListFunctionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse>;

  getFunction(
    request: google_cloud_functions_v1beta2_functions_pb.GetFunctionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_functions_v1beta2_functions_pb.CloudFunction>;

  createFunction(
    request: google_cloud_functions_v1beta2_functions_pb.CreateFunctionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateFunction(
    request: google_cloud_functions_v1beta2_functions_pb.UpdateFunctionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteFunction(
    request: google_cloud_functions_v1beta2_functions_pb.DeleteFunctionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  callFunction(
    request: google_cloud_functions_v1beta2_functions_pb.CallFunctionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse>;

}

