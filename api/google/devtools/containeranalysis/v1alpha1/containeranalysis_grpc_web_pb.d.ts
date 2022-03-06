import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_devtools_containeranalysis_v1alpha1_containeranalysis_pb from '../../../../google/devtools/containeranalysis/v1alpha1/containeranalysis_pb';


export class ContainerAnalysisClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOccurrence(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence>;

  listOccurrences(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesResponse>;

  deleteOccurrence(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteOccurrenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createOccurrence(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOccurrenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence>;

  updateOccurrence(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOccurrenceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence>;

  getOccurrenceNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note>;

  getNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note>;

  listNotes(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesResponse>;

  deleteNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note>;

  updateNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateNoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note>;

  listNoteOccurrences(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesResponse>;

  getVulnzOccurrencesSummary(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryResponse>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  createOperation(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateOperation(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOperationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  getScanConfig(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetScanConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig>;

  listScanConfigs(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsResponse>;

  updateScanConfig(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateScanConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig>;

}

export class ContainerAnalysisPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOccurrence(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence>;

  listOccurrences(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListOccurrencesResponse>;

  deleteOccurrence(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteOccurrenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createOccurrence(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOccurrenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence>;

  updateOccurrence(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOccurrenceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Occurrence>;

  getOccurrenceNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetOccurrenceNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note>;

  getNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note>;

  listNotes(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNotesResponse>;

  deleteNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.DeleteNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note>;

  updateNote(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateNoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.Note>;

  listNoteOccurrences(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListNoteOccurrencesResponse>;

  getVulnzOccurrencesSummary(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetVulnzOccurrencesSummaryResponse>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  createOperation(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.CreateOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateOperation(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateOperationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  getScanConfig(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.GetScanConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig>;

  listScanConfigs(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ListScanConfigsResponse>;

  updateScanConfig(
    request: google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.UpdateScanConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1alpha1_containeranalysis_pb.ScanConfig>;

}

