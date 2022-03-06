import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_cloud_ml_v1_job_service_pb from '../../../../google/cloud/ml/v1/job_service_pb';


export class JobServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createJob(
    request: google_cloud_ml_v1_job_service_pb.CreateJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_job_service_pb.Job) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_job_service_pb.Job>;

  listJobs(
    request: google_cloud_ml_v1_job_service_pb.ListJobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_job_service_pb.ListJobsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_job_service_pb.ListJobsResponse>;

  getJob(
    request: google_cloud_ml_v1_job_service_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_ml_v1_job_service_pb.Job) => void
  ): grpcWeb.ClientReadableStream<google_cloud_ml_v1_job_service_pb.Job>;

  cancelJob(
    request: google_cloud_ml_v1_job_service_pb.CancelJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class JobServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createJob(
    request: google_cloud_ml_v1_job_service_pb.CreateJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_job_service_pb.Job>;

  listJobs(
    request: google_cloud_ml_v1_job_service_pb.ListJobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_job_service_pb.ListJobsResponse>;

  getJob(
    request: google_cloud_ml_v1_job_service_pb.GetJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_ml_v1_job_service_pb.Job>;

  cancelJob(
    request: google_cloud_ml_v1_job_service_pb.CancelJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

