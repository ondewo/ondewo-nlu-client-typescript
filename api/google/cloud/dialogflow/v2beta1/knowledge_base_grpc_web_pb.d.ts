import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_cloud_dialogflow_v2beta1_knowledge_base_pb from '../../../../google/cloud/dialogflow/v2beta1/knowledge_base_pb';


export class KnowledgeBasesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listKnowledgeBases(
    request: google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse>;

  getKnowledgeBase(
    request: google_cloud_dialogflow_v2beta1_knowledge_base_pb.GetKnowledgeBaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>;

  createKnowledgeBase(
    request: google_cloud_dialogflow_v2beta1_knowledge_base_pb.CreateKnowledgeBaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>;

  deleteKnowledgeBase(
    request: google_cloud_dialogflow_v2beta1_knowledge_base_pb.DeleteKnowledgeBaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class KnowledgeBasesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listKnowledgeBases(
    request: google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_knowledge_base_pb.ListKnowledgeBasesResponse>;

  getKnowledgeBase(
    request: google_cloud_dialogflow_v2beta1_knowledge_base_pb.GetKnowledgeBaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>;

  createKnowledgeBase(
    request: google_cloud_dialogflow_v2beta1_knowledge_base_pb.CreateKnowledgeBaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_knowledge_base_pb.KnowledgeBase>;

  deleteKnowledgeBase(
    request: google_cloud_dialogflow_v2beta1_knowledge_base_pb.DeleteKnowledgeBaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

