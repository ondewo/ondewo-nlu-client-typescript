import * as grpcWeb from 'grpc-web';

import * as google_cloud_automl_v1beta1_prediction_service_pb from '../../../../google/cloud/automl/v1beta1/prediction_service_pb';


export class PredictionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  predict(
    request: google_cloud_automl_v1beta1_prediction_service_pb.PredictRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_automl_v1beta1_prediction_service_pb.PredictResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_automl_v1beta1_prediction_service_pb.PredictResponse>;

}

export class PredictionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  predict(
    request: google_cloud_automl_v1beta1_prediction_service_pb.PredictRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_automl_v1beta1_prediction_service_pb.PredictResponse>;

}

