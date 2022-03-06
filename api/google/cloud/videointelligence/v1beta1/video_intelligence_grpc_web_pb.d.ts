import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_videointelligence_v1beta1_video_intelligence_pb from '../../../../google/cloud/videointelligence/v1beta1/video_intelligence_pb';


export class VideoIntelligenceServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  annotateVideo(
    request: google_cloud_videointelligence_v1beta1_video_intelligence_pb.AnnotateVideoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class VideoIntelligenceServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  annotateVideo(
    request: google_cloud_videointelligence_v1beta1_video_intelligence_pb.AnnotateVideoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

