import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_cloud_dataproc_v1_jobs_pb from '../../../../google/cloud/dataproc/v1/jobs_pb';


export class JobControllerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  submitJob(
    request: google_cloud_dataproc_v1_jobs_pb.SubmitJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1_jobs_pb.Job) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1_jobs_pb.Job>;

  getJob(
    request: google_cloud_dataproc_v1_jobs_pb.GetJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1_jobs_pb.Job) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1_jobs_pb.Job>;

  listJobs(
    request: google_cloud_dataproc_v1_jobs_pb.ListJobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1_jobs_pb.ListJobsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1_jobs_pb.ListJobsResponse>;

  updateJob(
    request: google_cloud_dataproc_v1_jobs_pb.UpdateJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1_jobs_pb.Job) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1_jobs_pb.Job>;

  cancelJob(
    request: google_cloud_dataproc_v1_jobs_pb.CancelJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1_jobs_pb.Job) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1_jobs_pb.Job>;

  deleteJob(
    request: google_cloud_dataproc_v1_jobs_pb.DeleteJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class JobControllerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  submitJob(
    request: google_cloud_dataproc_v1_jobs_pb.SubmitJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1_jobs_pb.Job>;

  getJob(
    request: google_cloud_dataproc_v1_jobs_pb.GetJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1_jobs_pb.Job>;

  listJobs(
    request: google_cloud_dataproc_v1_jobs_pb.ListJobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1_jobs_pb.ListJobsResponse>;

  updateJob(
    request: google_cloud_dataproc_v1_jobs_pb.UpdateJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1_jobs_pb.Job>;

  cancelJob(
    request: google_cloud_dataproc_v1_jobs_pb.CancelJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1_jobs_pb.Job>;

  deleteJob(
    request: google_cloud_dataproc_v1_jobs_pb.DeleteJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

