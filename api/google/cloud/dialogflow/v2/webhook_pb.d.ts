import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dialogflow_v2_context_pb from '../../../../google/cloud/dialogflow/v2/context_pb';
import * as google_cloud_dialogflow_v2_intent_pb from '../../../../google/cloud/dialogflow/v2/intent_pb';
import * as google_cloud_dialogflow_v2_session_pb from '../../../../google/cloud/dialogflow/v2/session_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class WebhookRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): WebhookRequest;

  getResponseId(): string;
  setResponseId(value: string): WebhookRequest;

  getQueryResult(): google_cloud_dialogflow_v2_session_pb.QueryResult | undefined;
  setQueryResult(value?: google_cloud_dialogflow_v2_session_pb.QueryResult): WebhookRequest;
  hasQueryResult(): boolean;
  clearQueryResult(): WebhookRequest;

  getOriginalDetectIntentRequest(): OriginalDetectIntentRequest | undefined;
  setOriginalDetectIntentRequest(value?: OriginalDetectIntentRequest): WebhookRequest;
  hasOriginalDetectIntentRequest(): boolean;
  clearOriginalDetectIntentRequest(): WebhookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookRequest): WebhookRequest.AsObject;
  static serializeBinaryToWriter(message: WebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookRequest;
  static deserializeBinaryFromReader(message: WebhookRequest, reader: jspb.BinaryReader): WebhookRequest;
}

export namespace WebhookRequest {
  export type AsObject = {
    session: string,
    responseId: string,
    queryResult?: google_cloud_dialogflow_v2_session_pb.QueryResult.AsObject,
    originalDetectIntentRequest?: OriginalDetectIntentRequest.AsObject,
  }
}

export class WebhookResponse extends jspb.Message {
  getFulfillmentText(): string;
  setFulfillmentText(value: string): WebhookResponse;

  getFulfillmentMessagesList(): Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message>;
  setFulfillmentMessagesList(value: Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message>): WebhookResponse;
  clearFulfillmentMessagesList(): WebhookResponse;
  addFulfillmentMessages(value?: google_cloud_dialogflow_v2_intent_pb.Intent.Message, index?: number): google_cloud_dialogflow_v2_intent_pb.Intent.Message;

  getSource(): string;
  setSource(value: string): WebhookResponse;

  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): WebhookResponse;
  hasPayload(): boolean;
  clearPayload(): WebhookResponse;

  getOutputContextsList(): Array<google_cloud_dialogflow_v2_context_pb.Context>;
  setOutputContextsList(value: Array<google_cloud_dialogflow_v2_context_pb.Context>): WebhookResponse;
  clearOutputContextsList(): WebhookResponse;
  addOutputContexts(value?: google_cloud_dialogflow_v2_context_pb.Context, index?: number): google_cloud_dialogflow_v2_context_pb.Context;

  getFollowupEventInput(): google_cloud_dialogflow_v2_session_pb.EventInput | undefined;
  setFollowupEventInput(value?: google_cloud_dialogflow_v2_session_pb.EventInput): WebhookResponse;
  hasFollowupEventInput(): boolean;
  clearFollowupEventInput(): WebhookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookResponse): WebhookResponse.AsObject;
  static serializeBinaryToWriter(message: WebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookResponse;
  static deserializeBinaryFromReader(message: WebhookResponse, reader: jspb.BinaryReader): WebhookResponse;
}

export namespace WebhookResponse {
  export type AsObject = {
    fulfillmentText: string,
    fulfillmentMessagesList: Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message.AsObject>,
    source: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
    outputContextsList: Array<google_cloud_dialogflow_v2_context_pb.Context.AsObject>,
    followupEventInput?: google_cloud_dialogflow_v2_session_pb.EventInput.AsObject,
  }
}

export class OriginalDetectIntentRequest extends jspb.Message {
  getSource(): string;
  setSource(value: string): OriginalDetectIntentRequest;

  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): OriginalDetectIntentRequest;
  hasPayload(): boolean;
  clearPayload(): OriginalDetectIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OriginalDetectIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OriginalDetectIntentRequest): OriginalDetectIntentRequest.AsObject;
  static serializeBinaryToWriter(message: OriginalDetectIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OriginalDetectIntentRequest;
  static deserializeBinaryFromReader(message: OriginalDetectIntentRequest, reader: jspb.BinaryReader): OriginalDetectIntentRequest;
}

export namespace OriginalDetectIntentRequest {
  export type AsObject = {
    source: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

