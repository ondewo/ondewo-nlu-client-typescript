import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_logging_v2_logging_config_pb from '../../../google/logging/v2/logging_config_pb';


export class ConfigServiceV2Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listSinks(
    request: google_logging_v2_logging_config_pb.ListSinksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_config_pb.ListSinksResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.ListSinksResponse>;

  getSink(
    request: google_logging_v2_logging_config_pb.GetSinkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_config_pb.LogSink) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogSink>;

  createSink(
    request: google_logging_v2_logging_config_pb.CreateSinkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_config_pb.LogSink) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogSink>;

  updateSink(
    request: google_logging_v2_logging_config_pb.UpdateSinkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_config_pb.LogSink) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogSink>;

  deleteSink(
    request: google_logging_v2_logging_config_pb.DeleteSinkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listExclusions(
    request: google_logging_v2_logging_config_pb.ListExclusionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_config_pb.ListExclusionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.ListExclusionsResponse>;

  getExclusion(
    request: google_logging_v2_logging_config_pb.GetExclusionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_config_pb.LogExclusion) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogExclusion>;

  createExclusion(
    request: google_logging_v2_logging_config_pb.CreateExclusionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_config_pb.LogExclusion) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogExclusion>;

  updateExclusion(
    request: google_logging_v2_logging_config_pb.UpdateExclusionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_logging_v2_logging_config_pb.LogExclusion) => void
  ): grpcWeb.ClientReadableStream<google_logging_v2_logging_config_pb.LogExclusion>;

  deleteExclusion(
    request: google_logging_v2_logging_config_pb.DeleteExclusionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class ConfigServiceV2PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listSinks(
    request: google_logging_v2_logging_config_pb.ListSinksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.ListSinksResponse>;

  getSink(
    request: google_logging_v2_logging_config_pb.GetSinkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogSink>;

  createSink(
    request: google_logging_v2_logging_config_pb.CreateSinkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogSink>;

  updateSink(
    request: google_logging_v2_logging_config_pb.UpdateSinkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogSink>;

  deleteSink(
    request: google_logging_v2_logging_config_pb.DeleteSinkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listExclusions(
    request: google_logging_v2_logging_config_pb.ListExclusionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.ListExclusionsResponse>;

  getExclusion(
    request: google_logging_v2_logging_config_pb.GetExclusionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogExclusion>;

  createExclusion(
    request: google_logging_v2_logging_config_pb.CreateExclusionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogExclusion>;

  updateExclusion(
    request: google_logging_v2_logging_config_pb.UpdateExclusionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_logging_v2_logging_config_pb.LogExclusion>;

  deleteExclusion(
    request: google_logging_v2_logging_config_pb.DeleteExclusionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

