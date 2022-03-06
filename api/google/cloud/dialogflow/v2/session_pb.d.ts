import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dialogflow_v2_context_pb from '../../../../google/cloud/dialogflow/v2/context_pb';
import * as google_cloud_dialogflow_v2_intent_pb from '../../../../google/cloud/dialogflow/v2/intent_pb';
import * as google_cloud_dialogflow_v2_session_entity_type_pb from '../../../../google/cloud/dialogflow/v2/session_entity_type_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';
import * as google_type_latlng_pb from '../../../../google/type/latlng_pb';


export class DetectIntentRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): DetectIntentRequest;

  getQueryParams(): QueryParameters | undefined;
  setQueryParams(value?: QueryParameters): DetectIntentRequest;
  hasQueryParams(): boolean;
  clearQueryParams(): DetectIntentRequest;

  getQueryInput(): QueryInput | undefined;
  setQueryInput(value?: QueryInput): DetectIntentRequest;
  hasQueryInput(): boolean;
  clearQueryInput(): DetectIntentRequest;

  getInputAudio(): Uint8Array | string;
  getInputAudio_asU8(): Uint8Array;
  getInputAudio_asB64(): string;
  setInputAudio(value: Uint8Array | string): DetectIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetectIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DetectIntentRequest): DetectIntentRequest.AsObject;
  static serializeBinaryToWriter(message: DetectIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetectIntentRequest;
  static deserializeBinaryFromReader(message: DetectIntentRequest, reader: jspb.BinaryReader): DetectIntentRequest;
}

export namespace DetectIntentRequest {
  export type AsObject = {
    session: string,
    queryParams?: QueryParameters.AsObject,
    queryInput?: QueryInput.AsObject,
    inputAudio: Uint8Array | string,
  }
}

export class DetectIntentResponse extends jspb.Message {
  getResponseId(): string;
  setResponseId(value: string): DetectIntentResponse;

  getQueryResult(): QueryResult | undefined;
  setQueryResult(value?: QueryResult): DetectIntentResponse;
  hasQueryResult(): boolean;
  clearQueryResult(): DetectIntentResponse;

  getWebhookStatus(): google_rpc_status_pb.Status | undefined;
  setWebhookStatus(value?: google_rpc_status_pb.Status): DetectIntentResponse;
  hasWebhookStatus(): boolean;
  clearWebhookStatus(): DetectIntentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetectIntentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DetectIntentResponse): DetectIntentResponse.AsObject;
  static serializeBinaryToWriter(message: DetectIntentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetectIntentResponse;
  static deserializeBinaryFromReader(message: DetectIntentResponse, reader: jspb.BinaryReader): DetectIntentResponse;
}

export namespace DetectIntentResponse {
  export type AsObject = {
    responseId: string,
    queryResult?: QueryResult.AsObject,
    webhookStatus?: google_rpc_status_pb.Status.AsObject,
  }
}

export class QueryParameters extends jspb.Message {
  getTimeZone(): string;
  setTimeZone(value: string): QueryParameters;

  getGeoLocation(): google_type_latlng_pb.LatLng | undefined;
  setGeoLocation(value?: google_type_latlng_pb.LatLng): QueryParameters;
  hasGeoLocation(): boolean;
  clearGeoLocation(): QueryParameters;

  getContextsList(): Array<google_cloud_dialogflow_v2_context_pb.Context>;
  setContextsList(value: Array<google_cloud_dialogflow_v2_context_pb.Context>): QueryParameters;
  clearContextsList(): QueryParameters;
  addContexts(value?: google_cloud_dialogflow_v2_context_pb.Context, index?: number): google_cloud_dialogflow_v2_context_pb.Context;

  getResetContexts(): boolean;
  setResetContexts(value: boolean): QueryParameters;

  getSessionEntityTypesList(): Array<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>;
  setSessionEntityTypesList(value: Array<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType>): QueryParameters;
  clearSessionEntityTypesList(): QueryParameters;
  addSessionEntityTypes(value?: google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType, index?: number): google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType;

  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): QueryParameters;
  hasPayload(): boolean;
  clearPayload(): QueryParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParameters.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParameters): QueryParameters.AsObject;
  static serializeBinaryToWriter(message: QueryParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParameters;
  static deserializeBinaryFromReader(message: QueryParameters, reader: jspb.BinaryReader): QueryParameters;
}

export namespace QueryParameters {
  export type AsObject = {
    timeZone: string,
    geoLocation?: google_type_latlng_pb.LatLng.AsObject,
    contextsList: Array<google_cloud_dialogflow_v2_context_pb.Context.AsObject>,
    resetContexts: boolean,
    sessionEntityTypesList: Array<google_cloud_dialogflow_v2_session_entity_type_pb.SessionEntityType.AsObject>,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class QueryInput extends jspb.Message {
  getAudioConfig(): InputAudioConfig | undefined;
  setAudioConfig(value?: InputAudioConfig): QueryInput;
  hasAudioConfig(): boolean;
  clearAudioConfig(): QueryInput;

  getText(): TextInput | undefined;
  setText(value?: TextInput): QueryInput;
  hasText(): boolean;
  clearText(): QueryInput;

  getEvent(): EventInput | undefined;
  setEvent(value?: EventInput): QueryInput;
  hasEvent(): boolean;
  clearEvent(): QueryInput;

  getInputCase(): QueryInput.InputCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryInput.AsObject;
  static toObject(includeInstance: boolean, msg: QueryInput): QueryInput.AsObject;
  static serializeBinaryToWriter(message: QueryInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryInput;
  static deserializeBinaryFromReader(message: QueryInput, reader: jspb.BinaryReader): QueryInput;
}

export namespace QueryInput {
  export type AsObject = {
    audioConfig?: InputAudioConfig.AsObject,
    text?: TextInput.AsObject,
    event?: EventInput.AsObject,
  }

  export enum InputCase { 
    INPUT_NOT_SET = 0,
    AUDIO_CONFIG = 1,
    TEXT = 2,
    EVENT = 3,
  }
}

export class QueryResult extends jspb.Message {
  getQueryText(): string;
  setQueryText(value: string): QueryResult;

  getLanguageCode(): string;
  setLanguageCode(value: string): QueryResult;

  getSpeechRecognitionConfidence(): number;
  setSpeechRecognitionConfidence(value: number): QueryResult;

  getAction(): string;
  setAction(value: string): QueryResult;

  getParameters(): google_protobuf_struct_pb.Struct | undefined;
  setParameters(value?: google_protobuf_struct_pb.Struct): QueryResult;
  hasParameters(): boolean;
  clearParameters(): QueryResult;

  getAllRequiredParamsPresent(): boolean;
  setAllRequiredParamsPresent(value: boolean): QueryResult;

  getFulfillmentText(): string;
  setFulfillmentText(value: string): QueryResult;

  getFulfillmentMessagesList(): Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message>;
  setFulfillmentMessagesList(value: Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message>): QueryResult;
  clearFulfillmentMessagesList(): QueryResult;
  addFulfillmentMessages(value?: google_cloud_dialogflow_v2_intent_pb.Intent.Message, index?: number): google_cloud_dialogflow_v2_intent_pb.Intent.Message;

  getWebhookSource(): string;
  setWebhookSource(value: string): QueryResult;

  getWebhookPayload(): google_protobuf_struct_pb.Struct | undefined;
  setWebhookPayload(value?: google_protobuf_struct_pb.Struct): QueryResult;
  hasWebhookPayload(): boolean;
  clearWebhookPayload(): QueryResult;

  getOutputContextsList(): Array<google_cloud_dialogflow_v2_context_pb.Context>;
  setOutputContextsList(value: Array<google_cloud_dialogflow_v2_context_pb.Context>): QueryResult;
  clearOutputContextsList(): QueryResult;
  addOutputContexts(value?: google_cloud_dialogflow_v2_context_pb.Context, index?: number): google_cloud_dialogflow_v2_context_pb.Context;

  getIntent(): google_cloud_dialogflow_v2_intent_pb.Intent | undefined;
  setIntent(value?: google_cloud_dialogflow_v2_intent_pb.Intent): QueryResult;
  hasIntent(): boolean;
  clearIntent(): QueryResult;

  getIntentDetectionConfidence(): number;
  setIntentDetectionConfidence(value: number): QueryResult;

  getDiagnosticInfo(): google_protobuf_struct_pb.Struct | undefined;
  setDiagnosticInfo(value?: google_protobuf_struct_pb.Struct): QueryResult;
  hasDiagnosticInfo(): boolean;
  clearDiagnosticInfo(): QueryResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResult): QueryResult.AsObject;
  static serializeBinaryToWriter(message: QueryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResult;
  static deserializeBinaryFromReader(message: QueryResult, reader: jspb.BinaryReader): QueryResult;
}

export namespace QueryResult {
  export type AsObject = {
    queryText: string,
    languageCode: string,
    speechRecognitionConfidence: number,
    action: string,
    parameters?: google_protobuf_struct_pb.Struct.AsObject,
    allRequiredParamsPresent: boolean,
    fulfillmentText: string,
    fulfillmentMessagesList: Array<google_cloud_dialogflow_v2_intent_pb.Intent.Message.AsObject>,
    webhookSource: string,
    webhookPayload?: google_protobuf_struct_pb.Struct.AsObject,
    outputContextsList: Array<google_cloud_dialogflow_v2_context_pb.Context.AsObject>,
    intent?: google_cloud_dialogflow_v2_intent_pb.Intent.AsObject,
    intentDetectionConfidence: number,
    diagnosticInfo?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StreamingDetectIntentRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): StreamingDetectIntentRequest;

  getQueryParams(): QueryParameters | undefined;
  setQueryParams(value?: QueryParameters): StreamingDetectIntentRequest;
  hasQueryParams(): boolean;
  clearQueryParams(): StreamingDetectIntentRequest;

  getQueryInput(): QueryInput | undefined;
  setQueryInput(value?: QueryInput): StreamingDetectIntentRequest;
  hasQueryInput(): boolean;
  clearQueryInput(): StreamingDetectIntentRequest;

  getSingleUtterance(): boolean;
  setSingleUtterance(value: boolean): StreamingDetectIntentRequest;

  getInputAudio(): Uint8Array | string;
  getInputAudio_asU8(): Uint8Array;
  getInputAudio_asB64(): string;
  setInputAudio(value: Uint8Array | string): StreamingDetectIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingDetectIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingDetectIntentRequest): StreamingDetectIntentRequest.AsObject;
  static serializeBinaryToWriter(message: StreamingDetectIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingDetectIntentRequest;
  static deserializeBinaryFromReader(message: StreamingDetectIntentRequest, reader: jspb.BinaryReader): StreamingDetectIntentRequest;
}

export namespace StreamingDetectIntentRequest {
  export type AsObject = {
    session: string,
    queryParams?: QueryParameters.AsObject,
    queryInput?: QueryInput.AsObject,
    singleUtterance: boolean,
    inputAudio: Uint8Array | string,
  }
}

export class StreamingDetectIntentResponse extends jspb.Message {
  getResponseId(): string;
  setResponseId(value: string): StreamingDetectIntentResponse;

  getRecognitionResult(): StreamingRecognitionResult | undefined;
  setRecognitionResult(value?: StreamingRecognitionResult): StreamingDetectIntentResponse;
  hasRecognitionResult(): boolean;
  clearRecognitionResult(): StreamingDetectIntentResponse;

  getQueryResult(): QueryResult | undefined;
  setQueryResult(value?: QueryResult): StreamingDetectIntentResponse;
  hasQueryResult(): boolean;
  clearQueryResult(): StreamingDetectIntentResponse;

  getWebhookStatus(): google_rpc_status_pb.Status | undefined;
  setWebhookStatus(value?: google_rpc_status_pb.Status): StreamingDetectIntentResponse;
  hasWebhookStatus(): boolean;
  clearWebhookStatus(): StreamingDetectIntentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingDetectIntentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingDetectIntentResponse): StreamingDetectIntentResponse.AsObject;
  static serializeBinaryToWriter(message: StreamingDetectIntentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingDetectIntentResponse;
  static deserializeBinaryFromReader(message: StreamingDetectIntentResponse, reader: jspb.BinaryReader): StreamingDetectIntentResponse;
}

export namespace StreamingDetectIntentResponse {
  export type AsObject = {
    responseId: string,
    recognitionResult?: StreamingRecognitionResult.AsObject,
    queryResult?: QueryResult.AsObject,
    webhookStatus?: google_rpc_status_pb.Status.AsObject,
  }
}

export class StreamingRecognitionResult extends jspb.Message {
  getMessageType(): StreamingRecognitionResult.MessageType;
  setMessageType(value: StreamingRecognitionResult.MessageType): StreamingRecognitionResult;

  getTranscript(): string;
  setTranscript(value: string): StreamingRecognitionResult;

  getIsFinal(): boolean;
  setIsFinal(value: boolean): StreamingRecognitionResult;

  getConfidence(): number;
  setConfidence(value: number): StreamingRecognitionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognitionResult.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRecognitionResult): StreamingRecognitionResult.AsObject;
  static serializeBinaryToWriter(message: StreamingRecognitionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognitionResult;
  static deserializeBinaryFromReader(message: StreamingRecognitionResult, reader: jspb.BinaryReader): StreamingRecognitionResult;
}

export namespace StreamingRecognitionResult {
  export type AsObject = {
    messageType: StreamingRecognitionResult.MessageType,
    transcript: string,
    isFinal: boolean,
    confidence: number,
  }

  export enum MessageType { 
    MESSAGE_TYPE_UNSPECIFIED = 0,
    TRANSCRIPT = 1,
    END_OF_SINGLE_UTTERANCE = 2,
  }
}

export class InputAudioConfig extends jspb.Message {
  getAudioEncoding(): AudioEncoding;
  setAudioEncoding(value: AudioEncoding): InputAudioConfig;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): InputAudioConfig;

  getLanguageCode(): string;
  setLanguageCode(value: string): InputAudioConfig;

  getPhraseHintsList(): Array<string>;
  setPhraseHintsList(value: Array<string>): InputAudioConfig;
  clearPhraseHintsList(): InputAudioConfig;
  addPhraseHints(value: string, index?: number): InputAudioConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputAudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InputAudioConfig): InputAudioConfig.AsObject;
  static serializeBinaryToWriter(message: InputAudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputAudioConfig;
  static deserializeBinaryFromReader(message: InputAudioConfig, reader: jspb.BinaryReader): InputAudioConfig;
}

export namespace InputAudioConfig {
  export type AsObject = {
    audioEncoding: AudioEncoding,
    sampleRateHertz: number,
    languageCode: string,
    phraseHintsList: Array<string>,
  }
}

export class TextInput extends jspb.Message {
  getText(): string;
  setText(value: string): TextInput;

  getLanguageCode(): string;
  setLanguageCode(value: string): TextInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextInput.AsObject;
  static toObject(includeInstance: boolean, msg: TextInput): TextInput.AsObject;
  static serializeBinaryToWriter(message: TextInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextInput;
  static deserializeBinaryFromReader(message: TextInput, reader: jspb.BinaryReader): TextInput;
}

export namespace TextInput {
  export type AsObject = {
    text: string,
    languageCode: string,
  }
}

export class EventInput extends jspb.Message {
  getName(): string;
  setName(value: string): EventInput;

  getParameters(): google_protobuf_struct_pb.Struct | undefined;
  setParameters(value?: google_protobuf_struct_pb.Struct): EventInput;
  hasParameters(): boolean;
  clearParameters(): EventInput;

  getLanguageCode(): string;
  setLanguageCode(value: string): EventInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventInput.AsObject;
  static toObject(includeInstance: boolean, msg: EventInput): EventInput.AsObject;
  static serializeBinaryToWriter(message: EventInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventInput;
  static deserializeBinaryFromReader(message: EventInput, reader: jspb.BinaryReader): EventInput;
}

export namespace EventInput {
  export type AsObject = {
    name: string,
    parameters?: google_protobuf_struct_pb.Struct.AsObject,
    languageCode: string,
  }
}

export enum AudioEncoding { 
  AUDIO_ENCODING_UNSPECIFIED = 0,
  AUDIO_ENCODING_LINEAR_16 = 1,
  AUDIO_ENCODING_FLAC = 2,
  AUDIO_ENCODING_MULAW = 3,
  AUDIO_ENCODING_AMR = 4,
  AUDIO_ENCODING_AMR_WB = 5,
  AUDIO_ENCODING_OGG_OPUS = 6,
  AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = 7,
}
