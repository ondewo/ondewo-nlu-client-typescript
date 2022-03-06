import * as grpcWeb from 'grpc-web';

import * as google_cloud_dialogflow_v2beta1_session_pb from '../../../../google/cloud/dialogflow/v2beta1/session_pb';


export class SessionsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  detectIntent(
    request: google_cloud_dialogflow_v2beta1_session_pb.DetectIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dialogflow_v2beta1_session_pb.DetectIntentResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dialogflow_v2beta1_session_pb.DetectIntentResponse>;

}

export class SessionsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  detectIntent(
    request: google_cloud_dialogflow_v2beta1_session_pb.DetectIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dialogflow_v2beta1_session_pb.DetectIntentResponse>;

}

