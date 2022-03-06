import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_speech_v1p1beta1_cloud_speech_pb from '../../../../google/cloud/speech/v1p1beta1/cloud_speech_pb';


export class SpeechClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  recognize(
    request: google_cloud_speech_v1p1beta1_cloud_speech_pb.RecognizeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_speech_v1p1beta1_cloud_speech_pb.RecognizeResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_speech_v1p1beta1_cloud_speech_pb.RecognizeResponse>;

  longRunningRecognize(
    request: google_cloud_speech_v1p1beta1_cloud_speech_pb.LongRunningRecognizeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class SpeechPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  recognize(
    request: google_cloud_speech_v1p1beta1_cloud_speech_pb.RecognizeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_speech_v1p1beta1_cloud_speech_pb.RecognizeResponse>;

  longRunningRecognize(
    request: google_cloud_speech_v1p1beta1_cloud_speech_pb.LongRunningRecognizeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

