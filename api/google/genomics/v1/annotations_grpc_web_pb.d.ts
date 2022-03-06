import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_genomics_v1_annotations_pb from '../../../google/genomics/v1/annotations_pb';


export class AnnotationServiceV1Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createAnnotationSet(
    request: google_genomics_v1_annotations_pb.CreateAnnotationSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_annotations_pb.AnnotationSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_annotations_pb.AnnotationSet>;

  getAnnotationSet(
    request: google_genomics_v1_annotations_pb.GetAnnotationSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_annotations_pb.AnnotationSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_annotations_pb.AnnotationSet>;

  updateAnnotationSet(
    request: google_genomics_v1_annotations_pb.UpdateAnnotationSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_annotations_pb.AnnotationSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_annotations_pb.AnnotationSet>;

  deleteAnnotationSet(
    request: google_genomics_v1_annotations_pb.DeleteAnnotationSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  searchAnnotationSets(
    request: google_genomics_v1_annotations_pb.SearchAnnotationSetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse>;

  createAnnotation(
    request: google_genomics_v1_annotations_pb.CreateAnnotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_annotations_pb.Annotation) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_annotations_pb.Annotation>;

  batchCreateAnnotations(
    request: google_genomics_v1_annotations_pb.BatchCreateAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse>;

  getAnnotation(
    request: google_genomics_v1_annotations_pb.GetAnnotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_annotations_pb.Annotation) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_annotations_pb.Annotation>;

  updateAnnotation(
    request: google_genomics_v1_annotations_pb.UpdateAnnotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_annotations_pb.Annotation) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_annotations_pb.Annotation>;

  deleteAnnotation(
    request: google_genomics_v1_annotations_pb.DeleteAnnotationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  searchAnnotations(
    request: google_genomics_v1_annotations_pb.SearchAnnotationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_annotations_pb.SearchAnnotationsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_annotations_pb.SearchAnnotationsResponse>;

}

export class AnnotationServiceV1PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createAnnotationSet(
    request: google_genomics_v1_annotations_pb.CreateAnnotationSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_annotations_pb.AnnotationSet>;

  getAnnotationSet(
    request: google_genomics_v1_annotations_pb.GetAnnotationSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_annotations_pb.AnnotationSet>;

  updateAnnotationSet(
    request: google_genomics_v1_annotations_pb.UpdateAnnotationSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_annotations_pb.AnnotationSet>;

  deleteAnnotationSet(
    request: google_genomics_v1_annotations_pb.DeleteAnnotationSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  searchAnnotationSets(
    request: google_genomics_v1_annotations_pb.SearchAnnotationSetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_annotations_pb.SearchAnnotationSetsResponse>;

  createAnnotation(
    request: google_genomics_v1_annotations_pb.CreateAnnotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_annotations_pb.Annotation>;

  batchCreateAnnotations(
    request: google_genomics_v1_annotations_pb.BatchCreateAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_annotations_pb.BatchCreateAnnotationsResponse>;

  getAnnotation(
    request: google_genomics_v1_annotations_pb.GetAnnotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_annotations_pb.Annotation>;

  updateAnnotation(
    request: google_genomics_v1_annotations_pb.UpdateAnnotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_annotations_pb.Annotation>;

  deleteAnnotation(
    request: google_genomics_v1_annotations_pb.DeleteAnnotationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  searchAnnotations(
    request: google_genomics_v1_annotations_pb.SearchAnnotationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_annotations_pb.SearchAnnotationsResponse>;

}

