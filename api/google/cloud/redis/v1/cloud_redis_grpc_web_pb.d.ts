import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_redis_v1_cloud_redis_pb from '../../../../google/cloud/redis/v1/cloud_redis_pb';


export class CloudRedisClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listInstances(
    request: google_cloud_redis_v1_cloud_redis_pb.ListInstancesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_redis_v1_cloud_redis_pb.ListInstancesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_redis_v1_cloud_redis_pb.ListInstancesResponse>;

  getInstance(
    request: google_cloud_redis_v1_cloud_redis_pb.GetInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_redis_v1_cloud_redis_pb.Instance) => void
  ): grpcWeb.ClientReadableStream<google_cloud_redis_v1_cloud_redis_pb.Instance>;

  createInstance(
    request: google_cloud_redis_v1_cloud_redis_pb.CreateInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateInstance(
    request: google_cloud_redis_v1_cloud_redis_pb.UpdateInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteInstance(
    request: google_cloud_redis_v1_cloud_redis_pb.DeleteInstanceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class CloudRedisPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listInstances(
    request: google_cloud_redis_v1_cloud_redis_pb.ListInstancesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_redis_v1_cloud_redis_pb.ListInstancesResponse>;

  getInstance(
    request: google_cloud_redis_v1_cloud_redis_pb.GetInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_redis_v1_cloud_redis_pb.Instance>;

  createInstance(
    request: google_cloud_redis_v1_cloud_redis_pb.CreateInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateInstance(
    request: google_cloud_redis_v1_cloud_redis_pb.UpdateInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteInstance(
    request: google_cloud_redis_v1_cloud_redis_pb.DeleteInstanceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

