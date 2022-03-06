import * as grpcWeb from 'grpc-web';

import * as google_cloud_language_v1_language_service_pb from '../../../../google/cloud/language/v1/language_service_pb';


export class LanguageServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  analyzeSentiment(
    request: google_cloud_language_v1_language_service_pb.AnalyzeSentimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_language_v1_language_service_pb.AnalyzeSentimentResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_language_v1_language_service_pb.AnalyzeSentimentResponse>;

  analyzeEntities(
    request: google_cloud_language_v1_language_service_pb.AnalyzeEntitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_language_v1_language_service_pb.AnalyzeEntitiesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_language_v1_language_service_pb.AnalyzeEntitiesResponse>;

  analyzeEntitySentiment(
    request: google_cloud_language_v1_language_service_pb.AnalyzeEntitySentimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_language_v1_language_service_pb.AnalyzeEntitySentimentResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_language_v1_language_service_pb.AnalyzeEntitySentimentResponse>;

  analyzeSyntax(
    request: google_cloud_language_v1_language_service_pb.AnalyzeSyntaxRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_language_v1_language_service_pb.AnalyzeSyntaxResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_language_v1_language_service_pb.AnalyzeSyntaxResponse>;

  classifyText(
    request: google_cloud_language_v1_language_service_pb.ClassifyTextRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_language_v1_language_service_pb.ClassifyTextResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_language_v1_language_service_pb.ClassifyTextResponse>;

  annotateText(
    request: google_cloud_language_v1_language_service_pb.AnnotateTextRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_language_v1_language_service_pb.AnnotateTextResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_language_v1_language_service_pb.AnnotateTextResponse>;

}

export class LanguageServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  analyzeSentiment(
    request: google_cloud_language_v1_language_service_pb.AnalyzeSentimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_language_v1_language_service_pb.AnalyzeSentimentResponse>;

  analyzeEntities(
    request: google_cloud_language_v1_language_service_pb.AnalyzeEntitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_language_v1_language_service_pb.AnalyzeEntitiesResponse>;

  analyzeEntitySentiment(
    request: google_cloud_language_v1_language_service_pb.AnalyzeEntitySentimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_language_v1_language_service_pb.AnalyzeEntitySentimentResponse>;

  analyzeSyntax(
    request: google_cloud_language_v1_language_service_pb.AnalyzeSyntaxRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_language_v1_language_service_pb.AnalyzeSyntaxResponse>;

  classifyText(
    request: google_cloud_language_v1_language_service_pb.ClassifyTextRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_language_v1_language_service_pb.ClassifyTextResponse>;

  annotateText(
    request: google_cloud_language_v1_language_service_pb.AnnotateTextRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_language_v1_language_service_pb.AnnotateTextResponse>;

}

