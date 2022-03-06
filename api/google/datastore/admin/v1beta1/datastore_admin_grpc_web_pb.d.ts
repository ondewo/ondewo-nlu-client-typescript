import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_datastore_admin_v1beta1_datastore_admin_pb from '../../../../google/datastore/admin/v1beta1/datastore_admin_pb';


export class DatastoreAdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  exportEntities(
    request: google_datastore_admin_v1beta1_datastore_admin_pb.ExportEntitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  importEntities(
    request: google_datastore_admin_v1beta1_datastore_admin_pb.ImportEntitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class DatastoreAdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  exportEntities(
    request: google_datastore_admin_v1beta1_datastore_admin_pb.ExportEntitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  importEntities(
    request: google_datastore_admin_v1beta1_datastore_admin_pb.ImportEntitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

