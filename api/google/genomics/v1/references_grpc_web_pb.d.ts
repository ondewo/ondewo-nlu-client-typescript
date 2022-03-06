import * as grpcWeb from 'grpc-web';

import * as google_genomics_v1_references_pb from '../../../google/genomics/v1/references_pb';


export class ReferenceServiceV1Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  searchReferenceSets(
    request: google_genomics_v1_references_pb.SearchReferenceSetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_references_pb.SearchReferenceSetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_references_pb.SearchReferenceSetsResponse>;

  getReferenceSet(
    request: google_genomics_v1_references_pb.GetReferenceSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_references_pb.ReferenceSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_references_pb.ReferenceSet>;

  searchReferences(
    request: google_genomics_v1_references_pb.SearchReferencesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_references_pb.SearchReferencesResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_references_pb.SearchReferencesResponse>;

  getReference(
    request: google_genomics_v1_references_pb.GetReferenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_references_pb.Reference) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_references_pb.Reference>;

  listBases(
    request: google_genomics_v1_references_pb.ListBasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_references_pb.ListBasesResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_references_pb.ListBasesResponse>;

}

export class ReferenceServiceV1PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  searchReferenceSets(
    request: google_genomics_v1_references_pb.SearchReferenceSetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_references_pb.SearchReferenceSetsResponse>;

  getReferenceSet(
    request: google_genomics_v1_references_pb.GetReferenceSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_references_pb.ReferenceSet>;

  searchReferences(
    request: google_genomics_v1_references_pb.SearchReferencesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_references_pb.SearchReferencesResponse>;

  getReference(
    request: google_genomics_v1_references_pb.GetReferenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_references_pb.Reference>;

  listBases(
    request: google_genomics_v1_references_pb.ListBasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_references_pb.ListBasesResponse>;

}

