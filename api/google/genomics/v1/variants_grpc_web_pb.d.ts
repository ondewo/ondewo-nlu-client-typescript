import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_genomics_v1_variants_pb from '../../../google/genomics/v1/variants_pb';


export class StreamingVariantServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamVariants(
    request: google_genomics_v1_variants_pb.StreamVariantsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.StreamVariantsResponse>;

}

export class VariantServiceV1Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  importVariants(
    request: google_genomics_v1_variants_pb.ImportVariantsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  createVariantSet(
    request: google_genomics_v1_variants_pb.CreateVariantSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.VariantSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.VariantSet>;

  exportVariantSet(
    request: google_genomics_v1_variants_pb.ExportVariantSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getVariantSet(
    request: google_genomics_v1_variants_pb.GetVariantSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.VariantSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.VariantSet>;

  searchVariantSets(
    request: google_genomics_v1_variants_pb.SearchVariantSetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.SearchVariantSetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.SearchVariantSetsResponse>;

  deleteVariantSet(
    request: google_genomics_v1_variants_pb.DeleteVariantSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateVariantSet(
    request: google_genomics_v1_variants_pb.UpdateVariantSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.VariantSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.VariantSet>;

  searchVariants(
    request: google_genomics_v1_variants_pb.SearchVariantsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.SearchVariantsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.SearchVariantsResponse>;

  createVariant(
    request: google_genomics_v1_variants_pb.CreateVariantRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.Variant) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.Variant>;

  updateVariant(
    request: google_genomics_v1_variants_pb.UpdateVariantRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.Variant) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.Variant>;

  deleteVariant(
    request: google_genomics_v1_variants_pb.DeleteVariantRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getVariant(
    request: google_genomics_v1_variants_pb.GetVariantRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.Variant) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.Variant>;

  mergeVariants(
    request: google_genomics_v1_variants_pb.MergeVariantsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  searchCallSets(
    request: google_genomics_v1_variants_pb.SearchCallSetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.SearchCallSetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.SearchCallSetsResponse>;

  createCallSet(
    request: google_genomics_v1_variants_pb.CreateCallSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.CallSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.CallSet>;

  updateCallSet(
    request: google_genomics_v1_variants_pb.UpdateCallSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.CallSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.CallSet>;

  deleteCallSet(
    request: google_genomics_v1_variants_pb.DeleteCallSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getCallSet(
    request: google_genomics_v1_variants_pb.GetCallSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_variants_pb.CallSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.CallSet>;

}

export class StreamingVariantServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamVariants(
    request: google_genomics_v1_variants_pb.StreamVariantsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_genomics_v1_variants_pb.StreamVariantsResponse>;

}

export class VariantServiceV1PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  importVariants(
    request: google_genomics_v1_variants_pb.ImportVariantsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  createVariantSet(
    request: google_genomics_v1_variants_pb.CreateVariantSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.VariantSet>;

  exportVariantSet(
    request: google_genomics_v1_variants_pb.ExportVariantSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getVariantSet(
    request: google_genomics_v1_variants_pb.GetVariantSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.VariantSet>;

  searchVariantSets(
    request: google_genomics_v1_variants_pb.SearchVariantSetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.SearchVariantSetsResponse>;

  deleteVariantSet(
    request: google_genomics_v1_variants_pb.DeleteVariantSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  updateVariantSet(
    request: google_genomics_v1_variants_pb.UpdateVariantSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.VariantSet>;

  searchVariants(
    request: google_genomics_v1_variants_pb.SearchVariantsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.SearchVariantsResponse>;

  createVariant(
    request: google_genomics_v1_variants_pb.CreateVariantRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.Variant>;

  updateVariant(
    request: google_genomics_v1_variants_pb.UpdateVariantRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.Variant>;

  deleteVariant(
    request: google_genomics_v1_variants_pb.DeleteVariantRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getVariant(
    request: google_genomics_v1_variants_pb.GetVariantRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.Variant>;

  mergeVariants(
    request: google_genomics_v1_variants_pb.MergeVariantsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  searchCallSets(
    request: google_genomics_v1_variants_pb.SearchCallSetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.SearchCallSetsResponse>;

  createCallSet(
    request: google_genomics_v1_variants_pb.CreateCallSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.CallSet>;

  updateCallSet(
    request: google_genomics_v1_variants_pb.UpdateCallSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.CallSet>;

  deleteCallSet(
    request: google_genomics_v1_variants_pb.DeleteCallSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getCallSet(
    request: google_genomics_v1_variants_pb.GetCallSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_variants_pb.CallSet>;

}

