import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_devtools_remoteworkers_v1test2_bots_pb from '../../../../google/devtools/remoteworkers/v1test2/bots_pb';


export class BotsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createBotSession(
    request: google_devtools_remoteworkers_v1test2_bots_pb.CreateBotSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteworkers_v1test2_bots_pb.BotSession) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>;

  updateBotSession(
    request: google_devtools_remoteworkers_v1test2_bots_pb.UpdateBotSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteworkers_v1test2_bots_pb.BotSession) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>;

  postBotEventTemp(
    request: google_devtools_remoteworkers_v1test2_bots_pb.PostBotEventTempRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class BotsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createBotSession(
    request: google_devtools_remoteworkers_v1test2_bots_pb.CreateBotSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>;

  updateBotSession(
    request: google_devtools_remoteworkers_v1test2_bots_pb.UpdateBotSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteworkers_v1test2_bots_pb.BotSession>;

  postBotEventTemp(
    request: google_devtools_remoteworkers_v1test2_bots_pb.PostBotEventTempRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

