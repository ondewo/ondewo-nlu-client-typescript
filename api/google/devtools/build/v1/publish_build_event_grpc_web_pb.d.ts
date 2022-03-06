import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_devtools_build_v1_publish_build_event_pb from '../../../../google/devtools/build/v1/publish_build_event_pb';


export class PublishBuildEventClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publishLifecycleEvent(
    request: google_devtools_build_v1_publish_build_event_pb.PublishLifecycleEventRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class PublishBuildEventPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  publishLifecycleEvent(
    request: google_devtools_build_v1_publish_build_event_pb.PublishLifecycleEventRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

