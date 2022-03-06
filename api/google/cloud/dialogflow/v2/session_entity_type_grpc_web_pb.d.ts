import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_cloud_dialogflow_v2_session_entity_type_pb from '../../../../google/cloud/dialogflow/v2/session_entity_type_pb';


export class SessionEntityTypesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listSessionEntityTypes(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesResponse>;

  getSessionEntityType(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.GetSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>;

  createSessionEntityType(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.CreateSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>;

  updateSessionEntityType(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.UpdateSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>;

  deleteSessionEntityType(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.DeleteSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class SessionEntityTypesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listSessionEntityTypes(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2_session_entity_type_pb.ListSessionEntityTypesResponse>;

  getSessionEntityType(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.GetSessionEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>;

  createSessionEntityType(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.CreateSessionEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>;

  updateSessionEntityType(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.UpdateSessionEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>;

  deleteSessionEntityType(
    request: google_cloud_dialogflow_v2_session_entity_type_pb.DeleteSessionEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

