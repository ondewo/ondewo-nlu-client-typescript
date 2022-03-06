import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_cloud_bigquery_datatransfer_v1_transfer_pb from '../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb';
import * as google_cloud_bigquery_datatransfer_v1_datatransfer_pb from '../../../../../google/cloud/bigquery/datatransfer/v1/datatransfer_pb';


export class DataTransferServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDataSource(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetDataSourceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource>;

  listDataSources(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesResponse>;

  createTransferConfig(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CreateTransferConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig>;

  updateTransferConfig(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.UpdateTransferConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig>;

  deleteTransferConfig(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getTransferConfig(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig>;

  listTransferConfigs(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsResponse>;

  scheduleTransferRuns(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsResponse>;

  getTransferRun(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferRunRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>;

  deleteTransferRun(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferRunRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listTransferRuns(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsResponse>;

  listTransferLogs(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsResponse>;

  checkValidCreds(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsResponse>;

}

export class DataTransferServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDataSource(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetDataSourceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DataSource>;

  listDataSources(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListDataSourcesResponse>;

  createTransferConfig(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CreateTransferConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig>;

  updateTransferConfig(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.UpdateTransferConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig>;

  deleteTransferConfig(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getTransferConfig(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig>;

  listTransferConfigs(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferConfigsResponse>;

  scheduleTransferRuns(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ScheduleTransferRunsResponse>;

  getTransferRun(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.GetTransferRunRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun>;

  deleteTransferRun(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.DeleteTransferRunRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listTransferRuns(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferRunsResponse>;

  listTransferLogs(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.ListTransferLogsResponse>;

  checkValidCreds(
    request: google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_bigquery_datatransfer_v1_datatransfer_pb.CheckValidCredsResponse>;

}

