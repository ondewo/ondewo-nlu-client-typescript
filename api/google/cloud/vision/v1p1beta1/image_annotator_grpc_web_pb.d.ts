import * as grpcWeb from 'grpc-web';

import * as google_cloud_vision_v1p1beta1_image_annotator_pb from '../../../../google/cloud/vision/v1p1beta1/image_annotator_pb';


export class ImageAnnotatorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  batchAnnotateImages(
    request: google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesResponse>;

}

export class ImageAnnotatorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  batchAnnotateImages(
    request: google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p1beta1_image_annotator_pb.BatchAnnotateImagesResponse>;

}

