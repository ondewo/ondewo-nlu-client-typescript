import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_streetview_publish_v1_resources_pb from '../../../../google/streetview/publish/v1/resources_pb';
import * as google_streetview_publish_v1_rpcmessages_pb from '../../../../google/streetview/publish/v1/rpcmessages_pb';


export class StreetViewPublishServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startUpload(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_resources_pb.UploadRef) => void
  ): grpcWeb.ClientReadableStream<google_streetview_publish_v1_resources_pb.UploadRef>;

  createPhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_resources_pb.Photo) => void
  ): grpcWeb.ClientReadableStream<google_streetview_publish_v1_resources_pb.Photo>;

  getPhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_resources_pb.Photo) => void
  ): grpcWeb.ClientReadableStream<google_streetview_publish_v1_resources_pb.Photo>;

  batchGetPhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse) => void
  ): grpcWeb.ClientReadableStream<google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse>;

  listPhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse) => void
  ): grpcWeb.ClientReadableStream<google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse>;

  updatePhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_resources_pb.Photo) => void
  ): grpcWeb.ClientReadableStream<google_streetview_publish_v1_resources_pb.Photo>;

  batchUpdatePhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse) => void
  ): grpcWeb.ClientReadableStream<google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse>;

  deletePhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  batchDeletePhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse) => void
  ): grpcWeb.ClientReadableStream<google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse>;

}

export class StreetViewPublishServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startUpload(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_streetview_publish_v1_resources_pb.UploadRef>;

  createPhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.CreatePhotoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_streetview_publish_v1_resources_pb.Photo>;

  getPhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.GetPhotoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_streetview_publish_v1_resources_pb.Photo>;

  batchGetPhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_streetview_publish_v1_rpcmessages_pb.BatchGetPhotosResponse>;

  listPhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.ListPhotosRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_streetview_publish_v1_rpcmessages_pb.ListPhotosResponse>;

  updatePhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.UpdatePhotoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_streetview_publish_v1_resources_pb.Photo>;

  batchUpdatePhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_streetview_publish_v1_rpcmessages_pb.BatchUpdatePhotosResponse>;

  deletePhoto(
    request: google_streetview_publish_v1_rpcmessages_pb.DeletePhotoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  batchDeletePhotos(
    request: google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_streetview_publish_v1_rpcmessages_pb.BatchDeletePhotosResponse>;

}

