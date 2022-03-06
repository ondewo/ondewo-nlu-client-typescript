import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_genomics_v1_readgroupset_pb from '../../../google/genomics/v1/readgroupset_pb';
import * as google_genomics_v1_reads_pb from '../../../google/genomics/v1/reads_pb';


export class StreamingReadServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamReads(
    request: google_genomics_v1_reads_pb.StreamReadsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_genomics_v1_reads_pb.StreamReadsResponse>;

}

export class ReadServiceV1Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  importReadGroupSets(
    request: google_genomics_v1_reads_pb.ImportReadGroupSetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  exportReadGroupSet(
    request: google_genomics_v1_reads_pb.ExportReadGroupSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  searchReadGroupSets(
    request: google_genomics_v1_reads_pb.SearchReadGroupSetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_reads_pb.SearchReadGroupSetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_reads_pb.SearchReadGroupSetsResponse>;

  updateReadGroupSet(
    request: google_genomics_v1_reads_pb.UpdateReadGroupSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_readgroupset_pb.ReadGroupSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_readgroupset_pb.ReadGroupSet>;

  deleteReadGroupSet(
    request: google_genomics_v1_reads_pb.DeleteReadGroupSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getReadGroupSet(
    request: google_genomics_v1_reads_pb.GetReadGroupSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_readgroupset_pb.ReadGroupSet) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_readgroupset_pb.ReadGroupSet>;

  listCoverageBuckets(
    request: google_genomics_v1_reads_pb.ListCoverageBucketsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_reads_pb.ListCoverageBucketsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_reads_pb.ListCoverageBucketsResponse>;

  searchReads(
    request: google_genomics_v1_reads_pb.SearchReadsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_reads_pb.SearchReadsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_reads_pb.SearchReadsResponse>;

}

export class StreamingReadServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamReads(
    request: google_genomics_v1_reads_pb.StreamReadsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<google_genomics_v1_reads_pb.StreamReadsResponse>;

}

export class ReadServiceV1PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  importReadGroupSets(
    request: google_genomics_v1_reads_pb.ImportReadGroupSetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  exportReadGroupSet(
    request: google_genomics_v1_reads_pb.ExportReadGroupSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  searchReadGroupSets(
    request: google_genomics_v1_reads_pb.SearchReadGroupSetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_reads_pb.SearchReadGroupSetsResponse>;

  updateReadGroupSet(
    request: google_genomics_v1_reads_pb.UpdateReadGroupSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_readgroupset_pb.ReadGroupSet>;

  deleteReadGroupSet(
    request: google_genomics_v1_reads_pb.DeleteReadGroupSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getReadGroupSet(
    request: google_genomics_v1_reads_pb.GetReadGroupSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_readgroupset_pb.ReadGroupSet>;

  listCoverageBuckets(
    request: google_genomics_v1_reads_pb.ListCoverageBucketsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_reads_pb.ListCoverageBucketsResponse>;

  searchReads(
    request: google_genomics_v1_reads_pb.SearchReadsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_reads_pb.SearchReadsResponse>;

}

