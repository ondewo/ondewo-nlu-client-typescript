import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_logging_v2_logging_pb from '../../../google/logging/v2/logging_pb';


export class LoggingServiceV2Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  deleteLog(
    request: google_logging_v2_logging_pb.DeleteLogRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  writeLogEntries(
    request: google_logging_v2_logging_pb.WriteLogEntriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_pb.WriteLogEntriesResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_pb.WriteLogEntriesResponse>;

  listLogEntries(
    request: google_logging_v2_logging_pb.ListLogEntriesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_pb.ListLogEntriesResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_pb.ListLogEntriesResponse>;

  listMonitoredResourceDescriptors(
    request: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse>;

  listLogs(
    request: google_logging_v2_logging_pb.ListLogsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_pb.ListLogsResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_pb.ListLogsResponse>;

}

export class LoggingServiceV2PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  deleteLog(
    request: google_logging_v2_logging_pb.DeleteLogRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  writeLogEntries(
    request: google_logging_v2_logging_pb.WriteLogEntriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_pb.WriteLogEntriesResponse>;

  listLogEntries(
    request: google_logging_v2_logging_pb.ListLogEntriesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_pb.ListLogEntriesResponse>;

  listMonitoredResourceDescriptors(
    request: google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_pb.ListMonitoredResourceDescriptorsResponse>;

  listLogs(
    request: google_logging_v2_logging_pb.ListLogsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_pb.ListLogsResponse>;

}

