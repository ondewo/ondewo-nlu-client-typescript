import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../google/longrunning/operations_pb';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';


export class IntentsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listIntents(
    request: ondewo_nlu_intent_pb.ListIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_intent_pb.ListIntentsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.ListIntentsResponse>;

  getIntent(
    request: ondewo_nlu_intent_pb.GetIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_intent_pb.Intent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.Intent>;

  createIntent(
    request: ondewo_nlu_intent_pb.CreateIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_intent_pb.Intent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.Intent>;

  updateIntent(
    request: ondewo_nlu_intent_pb.UpdateIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_intent_pb.Intent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.Intent>;

  deleteIntent(
    request: ondewo_nlu_intent_pb.DeleteIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  batchUpdateIntents(
    request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  batchDeleteIntents(
    request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class IntentsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listIntents(
    request: ondewo_nlu_intent_pb.ListIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.ListIntentsResponse>;

  getIntent(
    request: ondewo_nlu_intent_pb.GetIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.Intent>;

  createIntent(
    request: ondewo_nlu_intent_pb.CreateIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.Intent>;

  updateIntent(
    request: ondewo_nlu_intent_pb.UpdateIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.Intent>;

  deleteIntent(
    request: ondewo_nlu_intent_pb.DeleteIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  batchUpdateIntents(
    request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  batchDeleteIntents(
    request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

