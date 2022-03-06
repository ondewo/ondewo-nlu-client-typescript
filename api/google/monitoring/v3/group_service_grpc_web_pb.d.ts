import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_monitoring_v3_group_pb from '../../../google/monitoring/v3/group_pb';
import * as google_monitoring_v3_group_service_pb from '../../../google/monitoring/v3/group_service_pb';


export class GroupServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listGroups(
    request: google_monitoring_v3_group_service_pb.ListGroupsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_group_service_pb.ListGroupsResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_group_service_pb.ListGroupsResponse>;

  getGroup(
    request: google_monitoring_v3_group_service_pb.GetGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_group_pb.Group) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_group_pb.Group>;

  createGroup(
    request: google_monitoring_v3_group_service_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_group_pb.Group) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_group_pb.Group>;

  updateGroup(
    request: google_monitoring_v3_group_service_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_group_pb.Group) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_group_pb.Group>;

  deleteGroup(
    request: google_monitoring_v3_group_service_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listGroupMembers(
    request: google_monitoring_v3_group_service_pb.ListGroupMembersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_group_service_pb.ListGroupMembersResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_group_service_pb.ListGroupMembersResponse>;

}

export class GroupServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listGroups(
    request: google_monitoring_v3_group_service_pb.ListGroupsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_group_service_pb.ListGroupsResponse>;

  getGroup(
    request: google_monitoring_v3_group_service_pb.GetGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_group_pb.Group>;

  createGroup(
    request: google_monitoring_v3_group_service_pb.CreateGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_group_pb.Group>;

  updateGroup(
    request: google_monitoring_v3_group_service_pb.UpdateGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_group_pb.Group>;

  deleteGroup(
    request: google_monitoring_v3_group_service_pb.DeleteGroupRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listGroupMembers(
    request: google_monitoring_v3_group_service_pb.ListGroupMembersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_group_service_pb.ListGroupMembersResponse>;

}

