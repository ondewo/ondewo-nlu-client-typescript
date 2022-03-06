import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_monitoring_v3_uptime_pb from '../../../google/monitoring/v3/uptime_pb';
import * as google_monitoring_v3_uptime_service_pb from '../../../google/monitoring/v3/uptime_service_pb';


export class UptimeCheckServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listUptimeCheckConfigs(
    request: google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse>;

  getUptimeCheckConfig(
    request: google_monitoring_v3_uptime_service_pb.GetUptimeCheckConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_uptime_pb.UptimeCheckConfig) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_uptime_pb.UptimeCheckConfig>;

  createUptimeCheckConfig(
    request: google_monitoring_v3_uptime_service_pb.CreateUptimeCheckConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_uptime_pb.UptimeCheckConfig) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_uptime_pb.UptimeCheckConfig>;

  updateUptimeCheckConfig(
    request: google_monitoring_v3_uptime_service_pb.UpdateUptimeCheckConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_uptime_pb.UptimeCheckConfig) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_uptime_pb.UptimeCheckConfig>;

  deleteUptimeCheckConfig(
    request: google_monitoring_v3_uptime_service_pb.DeleteUptimeCheckConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listUptimeCheckIps(
    request: google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse>;

}

export class UptimeCheckServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listUptimeCheckConfigs(
    request: google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_uptime_service_pb.ListUptimeCheckConfigsResponse>;

  getUptimeCheckConfig(
    request: google_monitoring_v3_uptime_service_pb.GetUptimeCheckConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_uptime_pb.UptimeCheckConfig>;

  createUptimeCheckConfig(
    request: google_monitoring_v3_uptime_service_pb.CreateUptimeCheckConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_uptime_pb.UptimeCheckConfig>;

  updateUptimeCheckConfig(
    request: google_monitoring_v3_uptime_service_pb.UpdateUptimeCheckConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_uptime_pb.UptimeCheckConfig>;

  deleteUptimeCheckConfig(
    request: google_monitoring_v3_uptime_service_pb.DeleteUptimeCheckConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listUptimeCheckIps(
    request: google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_uptime_service_pb.ListUptimeCheckIpsResponse>;

}

