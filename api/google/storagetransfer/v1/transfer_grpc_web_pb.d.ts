import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_storagetransfer_v1_transfer_types_pb from '../../../google/storagetransfer/v1/transfer_types_pb';
import * as google_storagetransfer_v1_transfer_pb from '../../../google/storagetransfer/v1/transfer_pb';


export class StorageTransferServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGoogleServiceAccount(
    request: google_storagetransfer_v1_transfer_pb.GetGoogleServiceAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount) => void
  ): grpcWeb.ClientReadableStream<google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount>;

  createTransferJob(
    request: google_storagetransfer_v1_transfer_pb.CreateTransferJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_storagetransfer_v1_transfer_types_pb.TransferJob) => void
  ): grpcWeb.ClientReadableStream<google_storagetransfer_v1_transfer_types_pb.TransferJob>;

  updateTransferJob(
    request: google_storagetransfer_v1_transfer_pb.UpdateTransferJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_storagetransfer_v1_transfer_types_pb.TransferJob) => void
  ): grpcWeb.ClientReadableStream<google_storagetransfer_v1_transfer_types_pb.TransferJob>;

  getTransferJob(
    request: google_storagetransfer_v1_transfer_pb.GetTransferJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_storagetransfer_v1_transfer_types_pb.TransferJob) => void
  ): grpcWeb.ClientReadableStream<google_storagetransfer_v1_transfer_types_pb.TransferJob>;

  listTransferJobs(
    request: google_storagetransfer_v1_transfer_pb.ListTransferJobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse) => void
  ): grpcWeb.ClientReadableStream<google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse>;

  pauseTransferOperation(
    request: google_storagetransfer_v1_transfer_pb.PauseTransferOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  resumeTransferOperation(
    request: google_storagetransfer_v1_transfer_pb.ResumeTransferOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class StorageTransferServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getGoogleServiceAccount(
    request: google_storagetransfer_v1_transfer_pb.GetGoogleServiceAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount>;

  createTransferJob(
    request: google_storagetransfer_v1_transfer_pb.CreateTransferJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_storagetransfer_v1_transfer_types_pb.TransferJob>;

  updateTransferJob(
    request: google_storagetransfer_v1_transfer_pb.UpdateTransferJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_storagetransfer_v1_transfer_types_pb.TransferJob>;

  getTransferJob(
    request: google_storagetransfer_v1_transfer_pb.GetTransferJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_storagetransfer_v1_transfer_types_pb.TransferJob>;

  listTransferJobs(
    request: google_storagetransfer_v1_transfer_pb.ListTransferJobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse>;

  pauseTransferOperation(
    request: google_storagetransfer_v1_transfer_pb.PauseTransferOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  resumeTransferOperation(
    request: google_storagetransfer_v1_transfer_pb.ResumeTransferOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

