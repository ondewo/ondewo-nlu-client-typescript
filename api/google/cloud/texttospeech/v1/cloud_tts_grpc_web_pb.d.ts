import * as grpcWeb from 'grpc-web';

import * as google_cloud_texttospeech_v1_cloud_tts_pb from '../../../../google/cloud/texttospeech/v1/cloud_tts_pb';


export class TextToSpeechClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listVoices(
    request: google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse>;

  synthesizeSpeech(
    request: google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse>;

}

export class TextToSpeechPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listVoices(
    request: google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_texttospeech_v1_cloud_tts_pb.ListVoicesResponse>;

  synthesizeSpeech(
    request: google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_texttospeech_v1_cloud_tts_pb.SynthesizeSpeechResponse>;

}

