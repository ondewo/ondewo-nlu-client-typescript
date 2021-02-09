import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_qa_qa_pb from '../../ondewo/qa/qa_pb';


export class QAClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAnswer(
    request: ondewo_qa_qa_pb.GetAnswerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_qa_qa_pb.GetAnswerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.GetAnswerResponse>;

  runScraper(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_qa_qa_pb.RunScraperResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.RunScraperResponse>;

  runTraining(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_qa_qa_pb.RunTrainingResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_qa_qa_pb.RunTrainingResponse>;

}

export class QAPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAnswer(
    request: ondewo_qa_qa_pb.GetAnswerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_qa_qa_pb.GetAnswerResponse>;

  runScraper(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_qa_qa_pb.RunScraperResponse>;

  runTraining(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_qa_qa_pb.RunTrainingResponse>;

}

