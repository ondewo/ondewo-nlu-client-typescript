import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_home_graph_v1_homegraph_pb from '../../../../google/home/graph/v1/homegraph_pb';


export class HomeGraphApiServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  requestSyncDevices(
    request: google_home_graph_v1_homegraph_pb.RequestSyncDevicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse) => void
  ): grpcWeb.ClientReadableStream<google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse>;

  reportStateAndNotification(
    request: google_home_graph_v1_homegraph_pb.ReportStateAndNotificationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse) => void
  ): grpcWeb.ClientReadableStream<google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse>;

  deleteAgentUser(
    request: google_home_graph_v1_homegraph_pb.DeleteAgentUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  query(
    request: google_home_graph_v1_homegraph_pb.QueryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_home_graph_v1_homegraph_pb.QueryResponse) => void
  ): grpcWeb.ClientReadableStream<google_home_graph_v1_homegraph_pb.QueryResponse>;

  sync(
    request: google_home_graph_v1_homegraph_pb.SyncRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_home_graph_v1_homegraph_pb.SyncResponse) => void
  ): grpcWeb.ClientReadableStream<google_home_graph_v1_homegraph_pb.SyncResponse>;

}

export class HomeGraphApiServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  requestSyncDevices(
    request: google_home_graph_v1_homegraph_pb.RequestSyncDevicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_home_graph_v1_homegraph_pb.RequestSyncDevicesResponse>;

  reportStateAndNotification(
    request: google_home_graph_v1_homegraph_pb.ReportStateAndNotificationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_home_graph_v1_homegraph_pb.ReportStateAndNotificationResponse>;

  deleteAgentUser(
    request: google_home_graph_v1_homegraph_pb.DeleteAgentUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  query(
    request: google_home_graph_v1_homegraph_pb.QueryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_home_graph_v1_homegraph_pb.QueryResponse>;

  sync(
    request: google_home_graph_v1_homegraph_pb.SyncRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_home_graph_v1_homegraph_pb.SyncResponse>;

}

