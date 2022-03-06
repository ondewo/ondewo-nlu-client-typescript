import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_dialogflow_v2beta1_intent_pb from '../../../../google/cloud/dialogflow/v2beta1/intent_pb';


export class IntentsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listIntents(
    request: google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse>;

  getIntent(
    request: google_cloud_dialogflow_v2beta1_intent_pb.GetIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_intent_pb.Intent) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_intent_pb.Intent>;

  createIntent(
    request: google_cloud_dialogflow_v2beta1_intent_pb.CreateIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_intent_pb.Intent) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_intent_pb.Intent>;

  updateIntent(
    request: google_cloud_dialogflow_v2beta1_intent_pb.UpdateIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_intent_pb.Intent) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_intent_pb.Intent>;

  deleteIntent(
    request: google_cloud_dialogflow_v2beta1_intent_pb.DeleteIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  batchUpdateIntents(
    request: google_cloud_dialogflow_v2beta1_intent_pb.BatchUpdateIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  batchDeleteIntents(
    request: google_cloud_dialogflow_v2beta1_intent_pb.BatchDeleteIntentsRequest,
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
    request: google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse>;

  getIntent(
    request: google_cloud_dialogflow_v2beta1_intent_pb.GetIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_intent_pb.Intent>;

  createIntent(
    request: google_cloud_dialogflow_v2beta1_intent_pb.CreateIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_intent_pb.Intent>;

  updateIntent(
    request: google_cloud_dialogflow_v2beta1_intent_pb.UpdateIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_intent_pb.Intent>;

  deleteIntent(
    request: google_cloud_dialogflow_v2beta1_intent_pb.DeleteIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  batchUpdateIntents(
    request: google_cloud_dialogflow_v2beta1_intent_pb.BatchUpdateIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  batchDeleteIntents(
    request: google_cloud_dialogflow_v2beta1_intent_pb.BatchDeleteIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

