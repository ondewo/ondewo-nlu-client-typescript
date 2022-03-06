import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dialogflow_v2beta1_audio_config_pb from '../../../../google/cloud/dialogflow/v2beta1/audio_config_pb';
import * as google_cloud_dialogflow_v2beta1_context_pb from '../../../../google/cloud/dialogflow/v2beta1/context_pb';
import * as google_cloud_dialogflow_v2beta1_intent_pb from '../../../../google/cloud/dialogflow/v2beta1/intent_pb';
import * as google_cloud_dialogflow_v2beta1_session_entity_type_pb from '../../../../google/cloud/dialogflow/v2beta1/session_entity_type_pb';
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

  getOutputAudioConfig(): google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig | undefined;
  setOutputAudioConfig(value?: google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig): DetectIntentRequest;
  hasOutputAudioConfig(): boolean;
  clearOutputAudioConfig(): DetectIntentRequest;

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
    outputAudioConfig?: google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig.AsObject,
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

  getAlternativeQueryResultsList(): Array<QueryResult>;
  setAlternativeQueryResultsList(value: Array<QueryResult>): DetectIntentResponse;
  clearAlternativeQueryResultsList(): DetectIntentResponse;
  addAlternativeQueryResults(value?: QueryResult, index?: number): QueryResult;

  getWebhookStatus(): google_rpc_status_pb.Status | undefined;
  setWebhookStatus(value?: google_rpc_status_pb.Status): DetectIntentResponse;
  hasWebhookStatus(): boolean;
  clearWebhookStatus(): DetectIntentResponse;

  getOutputAudio(): Uint8Array | string;
  getOutputAudio_asU8(): Uint8Array;
  getOutputAudio_asB64(): string;
  setOutputAudio(value: Uint8Array | string): DetectIntentResponse;

  getOutputAudioConfig(): google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig | undefined;
  setOutputAudioConfig(value?: google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig): DetectIntentResponse;
  hasOutputAudioConfig(): boolean;
  clearOutputAudioConfig(): DetectIntentResponse;

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
    alternativeQueryResultsList: Array<QueryResult.AsObject>,
    webhookStatus?: google_rpc_status_pb.Status.AsObject,
    outputAudio: Uint8Array | string,
    outputAudioConfig?: google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig.AsObject,
  }
}

export class QueryParameters extends jspb.Message {
  getTimeZone(): string;
  setTimeZone(value: string): QueryParameters;

  getGeoLocation(): google_type_latlng_pb.LatLng | undefined;
  setGeoLocation(value?: google_type_latlng_pb.LatLng): QueryParameters;
  hasGeoLocation(): boolean;
  clearGeoLocation(): QueryParameters;

  getContextsList(): Array<google_cloud_dialogflow_v2beta1_context_pb.Context>;
  setContextsList(value: Array<google_cloud_dialogflow_v2beta1_context_pb.Context>): QueryParameters;
  clearContextsList(): QueryParameters;
  addContexts(value?: google_cloud_dialogflow_v2beta1_context_pb.Context, index?: number): google_cloud_dialogflow_v2beta1_context_pb.Context;

  getResetContexts(): boolean;
  setResetContexts(value: boolean): QueryParameters;

  getSessionEntityTypesList(): Array<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>;
  setSessionEntityTypesList(value: Array<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType>): QueryParameters;
  clearSessionEntityTypesList(): QueryParameters;
  addSessionEntityTypes(value?: google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType, index?: number): google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType;

  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): QueryParameters;
  hasPayload(): boolean;
  clearPayload(): QueryParameters;

  getKnowledgeBaseNamesList(): Array<string>;
  setKnowledgeBaseNamesList(value: Array<string>): QueryParameters;
  clearKnowledgeBaseNamesList(): QueryParameters;
  addKnowledgeBaseNames(value: string, index?: number): QueryParameters;

  getSentimentAnalysisRequestConfig(): SentimentAnalysisRequestConfig | undefined;
  setSentimentAnalysisRequestConfig(value?: SentimentAnalysisRequestConfig): QueryParameters;
  hasSentimentAnalysisRequestConfig(): boolean;
  clearSentimentAnalysisRequestConfig(): QueryParameters;

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
    contextsList: Array<google_cloud_dialogflow_v2beta1_context_pb.Context.AsObject>,
    resetContexts: boolean,
    sessionEntityTypesList: Array<google_cloud_dialogflow_v2beta1_session_entity_type_pb.SessionEntityType.AsObject>,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
    knowledgeBaseNamesList: Array<string>,
    sentimentAnalysisRequestConfig?: SentimentAnalysisRequestConfig.AsObject,
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

  getFulfillmentMessagesList(): Array<google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message>;
  setFulfillmentMessagesList(value: Array<google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message>): QueryResult;
  clearFulfillmentMessagesList(): QueryResult;
  addFulfillmentMessages(value?: google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message, index?: number): google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message;

  getWebhookSource(): string;
  setWebhookSource(value: string): QueryResult;

  getWebhookPayload(): google_protobuf_struct_pb.Struct | undefined;
  setWebhookPayload(value?: google_protobuf_struct_pb.Struct): QueryResult;
  hasWebhookPayload(): boolean;
  clearWebhookPayload(): QueryResult;

  getOutputContextsList(): Array<google_cloud_dialogflow_v2beta1_context_pb.Context>;
  setOutputContextsList(value: Array<google_cloud_dialogflow_v2beta1_context_pb.Context>): QueryResult;
  clearOutputContextsList(): QueryResult;
  addOutputContexts(value?: google_cloud_dialogflow_v2beta1_context_pb.Context, index?: number): google_cloud_dialogflow_v2beta1_context_pb.Context;

  getIntent(): google_cloud_dialogflow_v2beta1_intent_pb.Intent | undefined;
  setIntent(value?: google_cloud_dialogflow_v2beta1_intent_pb.Intent): QueryResult;
  hasIntent(): boolean;
  clearIntent(): QueryResult;

  getIntentDetectionConfidence(): number;
  setIntentDetectionConfidence(value: number): QueryResult;

  getDiagnosticInfo(): google_protobuf_struct_pb.Struct | undefined;
  setDiagnosticInfo(value?: google_protobuf_struct_pb.Struct): QueryResult;
  hasDiagnosticInfo(): boolean;
  clearDiagnosticInfo(): QueryResult;

  getSentimentAnalysisResult(): SentimentAnalysisResult | undefined;
  setSentimentAnalysisResult(value?: SentimentAnalysisResult): QueryResult;
  hasSentimentAnalysisResult(): boolean;
  clearSentimentAnalysisResult(): QueryResult;

  getKnowledgeAnswers(): KnowledgeAnswers | undefined;
  setKnowledgeAnswers(value?: KnowledgeAnswers): QueryResult;
  hasKnowledgeAnswers(): boolean;
  clearKnowledgeAnswers(): QueryResult;

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
    fulfillmentMessagesList: Array<google_cloud_dialogflow_v2beta1_intent_pb.Intent.Message.AsObject>,
    webhookSource: string,
    webhookPayload?: google_protobuf_struct_pb.Struct.AsObject,
    outputContextsList: Array<google_cloud_dialogflow_v2beta1_context_pb.Context.AsObject>,
    intent?: google_cloud_dialogflow_v2beta1_intent_pb.Intent.AsObject,
    intentDetectionConfidence: number,
    diagnosticInfo?: google_protobuf_struct_pb.Struct.AsObject,
    sentimentAnalysisResult?: SentimentAnalysisResult.AsObject,
    knowledgeAnswers?: KnowledgeAnswers.AsObject,
  }
}

export class KnowledgeAnswers extends jspb.Message {
  getAnswersList(): Array<KnowledgeAnswers.Answer>;
  setAnswersList(value: Array<KnowledgeAnswers.Answer>): KnowledgeAnswers;
  clearAnswersList(): KnowledgeAnswers;
  addAnswers(value?: KnowledgeAnswers.Answer, index?: number): KnowledgeAnswers.Answer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeAnswers.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeAnswers): KnowledgeAnswers.AsObject;
  static serializeBinaryToWriter(message: KnowledgeAnswers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeAnswers;
  static deserializeBinaryFromReader(message: KnowledgeAnswers, reader: jspb.BinaryReader): KnowledgeAnswers;
}

export namespace KnowledgeAnswers {
  export type AsObject = {
    answersList: Array<KnowledgeAnswers.Answer.AsObject>,
  }

  export class Answer extends jspb.Message {
    getSource(): string;
    setSource(value: string): Answer;

    getFaqQuestion(): string;
    setFaqQuestion(value: string): Answer;

    getAnswer(): string;
    setAnswer(value: string): Answer;

    getMatchConfidenceLevel(): KnowledgeAnswers.Answer.MatchConfidenceLevel;
    setMatchConfidenceLevel(value: KnowledgeAnswers.Answer.MatchConfidenceLevel): Answer;

    getMatchConfidence(): number;
    setMatchConfidence(value: number): Answer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Answer.AsObject;
    static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
    static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Answer;
    static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
  }

  export namespace Answer {
    export type AsObject = {
      source: string,
      faqQuestion: string,
      answer: string,
      matchConfidenceLevel: KnowledgeAnswers.Answer.MatchConfidenceLevel,
      matchConfidence: number,
    }

    export enum MatchConfidenceLevel { 
      MATCH_CONFIDENCE_LEVEL_UNSPECIFIED = 0,
      LOW = 1,
      MEDIUM = 2,
      HIGH = 3,
    }
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

  getOutputAudioConfig(): google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig | undefined;
  setOutputAudioConfig(value?: google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig): StreamingDetectIntentRequest;
  hasOutputAudioConfig(): boolean;
  clearOutputAudioConfig(): StreamingDetectIntentRequest;

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
    outputAudioConfig?: google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig.AsObject,
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

  getAlternativeQueryResultsList(): Array<QueryResult>;
  setAlternativeQueryResultsList(value: Array<QueryResult>): StreamingDetectIntentResponse;
  clearAlternativeQueryResultsList(): StreamingDetectIntentResponse;
  addAlternativeQueryResults(value?: QueryResult, index?: number): QueryResult;

  getWebhookStatus(): google_rpc_status_pb.Status | undefined;
  setWebhookStatus(value?: google_rpc_status_pb.Status): StreamingDetectIntentResponse;
  hasWebhookStatus(): boolean;
  clearWebhookStatus(): StreamingDetectIntentResponse;

  getOutputAudio(): Uint8Array | string;
  getOutputAudio_asU8(): Uint8Array;
  getOutputAudio_asB64(): string;
  setOutputAudio(value: Uint8Array | string): StreamingDetectIntentResponse;

  getOutputAudioConfig(): google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig | undefined;
  setOutputAudioConfig(value?: google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig): StreamingDetectIntentResponse;
  hasOutputAudioConfig(): boolean;
  clearOutputAudioConfig(): StreamingDetectIntentResponse;

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
    alternativeQueryResultsList: Array<QueryResult.AsObject>,
    webhookStatus?: google_rpc_status_pb.Status.AsObject,
    outputAudio: Uint8Array | string,
    outputAudioConfig?: google_cloud_dialogflow_v2beta1_audio_config_pb.OutputAudioConfig.AsObject,
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

  getModel(): string;
  setModel(value: string): InputAudioConfig;

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
    model: string,
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

export class SentimentAnalysisRequestConfig extends jspb.Message {
  getAnalyzeQueryTextSentiment(): boolean;
  setAnalyzeQueryTextSentiment(value: boolean): SentimentAnalysisRequestConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentimentAnalysisRequestConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SentimentAnalysisRequestConfig): SentimentAnalysisRequestConfig.AsObject;
  static serializeBinaryToWriter(message: SentimentAnalysisRequestConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentimentAnalysisRequestConfig;
  static deserializeBinaryFromReader(message: SentimentAnalysisRequestConfig, reader: jspb.BinaryReader): SentimentAnalysisRequestConfig;
}

export namespace SentimentAnalysisRequestConfig {
  export type AsObject = {
    analyzeQueryTextSentiment: boolean,
  }
}

export class SentimentAnalysisResult extends jspb.Message {
  getQueryTextSentiment(): Sentiment | undefined;
  setQueryTextSentiment(value?: Sentiment): SentimentAnalysisResult;
  hasQueryTextSentiment(): boolean;
  clearQueryTextSentiment(): SentimentAnalysisResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentimentAnalysisResult.AsObject;
  static toObject(includeInstance: boolean, msg: SentimentAnalysisResult): SentimentAnalysisResult.AsObject;
  static serializeBinaryToWriter(message: SentimentAnalysisResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentimentAnalysisResult;
  static deserializeBinaryFromReader(message: SentimentAnalysisResult, reader: jspb.BinaryReader): SentimentAnalysisResult;
}

export namespace SentimentAnalysisResult {
  export type AsObject = {
    queryTextSentiment?: Sentiment.AsObject,
  }
}

export class Sentiment extends jspb.Message {
  getScore(): number;
  setScore(value: number): Sentiment;

  getMagnitude(): number;
  setMagnitude(value: number): Sentiment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sentiment.AsObject;
  static toObject(includeInstance: boolean, msg: Sentiment): Sentiment.AsObject;
  static serializeBinaryToWriter(message: Sentiment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sentiment;
  static deserializeBinaryFromReader(message: Sentiment, reader: jspb.BinaryReader): Sentiment;
}

export namespace Sentiment {
  export type AsObject = {
    score: number,
    magnitude: number,
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
