import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../google/longrunning/operations_pb';


export class OperationsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listOperations(
    request: google_longrunning_operations_pb.ListOperationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.ListOperationsResponse) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.ListOperationsResponse>;

  getOperation(
    request: google_longrunning_operations_pb.GetOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteOperation(
    request: google_longrunning_operations_pb.DeleteOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  cancelOperation(
    request: google_longrunning_operations_pb.CancelOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class OperationsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listOperations(
    request: google_longrunning_operations_pb.ListOperationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.ListOperationsResponse>;

  getOperation(
    request: google_longrunning_operations_pb.GetOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteOperation(
    request: google_longrunning_operations_pb.DeleteOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  cancelOperation(
    request: google_longrunning_operations_pb.CancelOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

