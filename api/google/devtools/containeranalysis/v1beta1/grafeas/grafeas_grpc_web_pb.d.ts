import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb from '../../../../../google/devtools/containeranalysis/v1beta1/grafeas/grafeas_pb';


export class GrafeasV1Beta1Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOccurrence(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>;

  listOccurrences(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesResponse>;

  deleteOccurrence(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteOccurrenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createOccurrence(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateOccurrenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>;

  batchCreateOccurrences(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesResponse>;

  updateOccurrence(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateOccurrenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>;

  getOccurrenceNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;

  getNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;

  listNotes(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesResponse>;

  deleteNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;

  batchCreateNotes(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesResponse>;

  updateNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;

  listNoteOccurrences(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesResponse>;

  getVulnerabilityOccurrencesSummary(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetVulnerabilityOccurrencesSummaryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.VulnerabilityOccurrencesSummary) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.VulnerabilityOccurrencesSummary>;

}

export class GrafeasV1Beta1PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOccurrence(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>;

  listOccurrences(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesResponse>;

  deleteOccurrence(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteOccurrenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createOccurrence(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateOccurrenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>;

  batchCreateOccurrences(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesResponse>;

  updateOccurrence(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateOccurrenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>;

  getOccurrenceNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;

  getNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;

  listNotes(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesResponse>;

  deleteNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;

  batchCreateNotes(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesResponse>;

  updateNote(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;

  listNoteOccurrences(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesResponse>;

  getVulnerabilityOccurrencesSummary(
    request: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetVulnerabilityOccurrencesSummaryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.VulnerabilityOccurrencesSummary>;

}

