import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_vision_v1p3beta1_image_annotator_pb from '../../../../google/cloud/vision/v1p3beta1/image_annotator_pb';


export class ImageAnnotatorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  batchAnnotateImages(
    request: google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesResponse>;

  asyncBatchAnnotateFiles(
    request: google_cloud_vision_v1p3beta1_image_annotator_pb.AsyncBatchAnnotateFilesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class ImageAnnotatorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  batchAnnotateImages(
    request: google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_image_annotator_pb.BatchAnnotateImagesResponse>;

  asyncBatchAnnotateFiles(
    request: google_cloud_vision_v1p3beta1_image_annotator_pb.AsyncBatchAnnotateFilesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

