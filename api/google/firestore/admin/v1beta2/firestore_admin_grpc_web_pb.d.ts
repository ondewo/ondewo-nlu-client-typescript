import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_firestore_admin_v1beta2_field_pb from '../../../../google/firestore/admin/v1beta2/field_pb';
import * as google_firestore_admin_v1beta2_firestore_admin_pb from '../../../../google/firestore/admin/v1beta2/firestore_admin_pb';


export class FirestoreAdminClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getField(
    request: google_firestore_admin_v1beta2_firestore_admin_pb.GetFieldRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_admin_v1beta2_field_pb.Field) => void
  ): grpcWeb.ClientReadableStream<google_firestore_admin_v1beta2_field_pb.Field>;

  updateField(
    request: google_firestore_admin_v1beta2_firestore_admin_pb.UpdateFieldRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  listFields(
    request: google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse) => void
  ): grpcWeb.ClientReadableStream<google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse>;

}

export class FirestoreAdminPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getField(
    request: google_firestore_admin_v1beta2_firestore_admin_pb.GetFieldRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_admin_v1beta2_field_pb.Field>;

  updateField(
    request: google_firestore_admin_v1beta2_firestore_admin_pb.UpdateFieldRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  listFields(
    request: google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse>;

}

