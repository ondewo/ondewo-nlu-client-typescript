import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_datastore_admin_v1_index_pb from '../../../../google/datastore/admin/v1/index_pb';
import * as google_datastore_admin_v1_datastore_admin_pb from '../../../../google/datastore/admin/v1/datastore_admin_pb';


export class DatastoreAdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  exportEntities(
    request: google_datastore_admin_v1_datastore_admin_pb.ExportEntitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  importEntities(
    request: google_datastore_admin_v1_datastore_admin_pb.ImportEntitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getIndex(
    request: google_datastore_admin_v1_datastore_admin_pb.GetIndexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_datastore_admin_v1_index_pb.Index) => void
  ): grpcWeb.ClientReadableStream<google_datastore_admin_v1_index_pb.Index>;

  listIndexes(
    request: google_datastore_admin_v1_datastore_admin_pb.ListIndexesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_datastore_admin_v1_datastore_admin_pb.ListIndexesResponse) => void
  ): grpcWeb.ClientReadableStream<google_datastore_admin_v1_datastore_admin_pb.ListIndexesResponse>;

}

export class DatastoreAdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  exportEntities(
    request: google_datastore_admin_v1_datastore_admin_pb.ExportEntitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  importEntities(
    request: google_datastore_admin_v1_datastore_admin_pb.ImportEntitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getIndex(
    request: google_datastore_admin_v1_datastore_admin_pb.GetIndexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_datastore_admin_v1_index_pb.Index>;

  listIndexes(
    request: google_datastore_admin_v1_datastore_admin_pb.ListIndexesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_datastore_admin_v1_datastore_admin_pb.ListIndexesResponse>;

}

