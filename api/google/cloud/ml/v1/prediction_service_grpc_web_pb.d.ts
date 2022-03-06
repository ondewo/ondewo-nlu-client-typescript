import * as grpcWeb from 'grpc-web';

import * as google_api_httpbody_pb from '../../../../google/api/httpbody_pb';
import * as google_cloud_ml_v1_prediction_service_pb from '../../../../google/cloud/ml/v1/prediction_service_pb';


export class OnlinePredictionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  predict(
    request: google_cloud_ml_v1_prediction_service_pb.PredictRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_api_httpbody_pb.HttpBody) => void
  ): grpcWeb.ClientReadableStream<google_api_httpbody_pb.HttpBody>;

}

export class OnlinePredictionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  predict(
    request: google_cloud_ml_v1_prediction_service_pb.PredictRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_api_httpbody_pb.HttpBody>;

}

