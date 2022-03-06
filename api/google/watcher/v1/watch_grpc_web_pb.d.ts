import * as grpcWeb from 'grpc-web';

import * as google_watcher_v1_watch_pb from '../../../google/watcher/v1/watch_pb';


export class WatcherClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  watch(
    request: google_watcher_v1_watch_pb.Request,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_watcher_v1_watch_pb.ChangeBatch>;

}

export class WatcherPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  watch(
    request: google_watcher_v1_watch_pb.Request,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_watcher_v1_watch_pb.ChangeBatch>;

}

