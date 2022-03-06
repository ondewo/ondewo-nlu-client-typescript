import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_dialogflow_v2beta1_entity_type_pb from '../../../../google/cloud/dialogflow/v2beta1/entity_type_pb';


export class EntityTypesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listEntityTypes(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesResponse>;

  getEntityType(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.GetEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType>;

  createEntityType(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.CreateEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType>;

  updateEntityType(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.UpdateEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType>;

  deleteEntityType(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.DeleteEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  batchUpdateEntityTypes(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntityTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  batchDeleteEntityTypes(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntityTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  batchCreateEntities(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchCreateEntitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  batchUpdateEntities(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  batchDeleteEntities(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class EntityTypesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listEntityTypes(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_entity_type_pb.ListEntityTypesResponse>;

  getEntityType(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.GetEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType>;

  createEntityType(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.CreateEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType>;

  updateEntityType(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.UpdateEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType>;

  deleteEntityType(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.DeleteEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  batchUpdateEntityTypes(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntityTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  batchDeleteEntityTypes(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntityTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  batchCreateEntities(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchCreateEntitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  batchUpdateEntities(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchUpdateEntitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  batchDeleteEntities(
    request: google_cloud_dialogflow_v2beta1_entity_type_pb.BatchDeleteEntitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

