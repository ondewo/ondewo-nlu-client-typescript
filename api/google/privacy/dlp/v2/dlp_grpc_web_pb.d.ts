import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_privacy_dlp_v2_dlp_pb from '../../../../google/privacy/dlp/v2/dlp_pb';


export class DlpServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  inspectContent(
    request: google_privacy_dlp_v2_dlp_pb.InspectContentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.InspectContentResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.InspectContentResponse>;

  redactImage(
    request: google_privacy_dlp_v2_dlp_pb.RedactImageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.RedactImageResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.RedactImageResponse>;

  deidentifyContent(
    request: google_privacy_dlp_v2_dlp_pb.DeidentifyContentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse>;

  reidentifyContent(
    request: google_privacy_dlp_v2_dlp_pb.ReidentifyContentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse>;

  listInfoTypes(
    request: google_privacy_dlp_v2_dlp_pb.ListInfoTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse>;

  createInspectTemplate(
    request: google_privacy_dlp_v2_dlp_pb.CreateInspectTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.InspectTemplate) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.InspectTemplate>;

  updateInspectTemplate(
    request: google_privacy_dlp_v2_dlp_pb.UpdateInspectTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.InspectTemplate) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.InspectTemplate>;

  getInspectTemplate(
    request: google_privacy_dlp_v2_dlp_pb.GetInspectTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.InspectTemplate) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.InspectTemplate>;

  listInspectTemplates(
    request: google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse>;

  deleteInspectTemplate(
    request: google_privacy_dlp_v2_dlp_pb.DeleteInspectTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createDeidentifyTemplate(
    request: google_privacy_dlp_v2_dlp_pb.CreateDeidentifyTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>;

  updateDeidentifyTemplate(
    request: google_privacy_dlp_v2_dlp_pb.UpdateDeidentifyTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>;

  getDeidentifyTemplate(
    request: google_privacy_dlp_v2_dlp_pb.GetDeidentifyTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>;

  listDeidentifyTemplates(
    request: google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse>;

  deleteDeidentifyTemplate(
    request: google_privacy_dlp_v2_dlp_pb.DeleteDeidentifyTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createJobTrigger(
    request: google_privacy_dlp_v2_dlp_pb.CreateJobTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.JobTrigger) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.JobTrigger>;

  updateJobTrigger(
    request: google_privacy_dlp_v2_dlp_pb.UpdateJobTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.JobTrigger) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.JobTrigger>;

  getJobTrigger(
    request: google_privacy_dlp_v2_dlp_pb.GetJobTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.JobTrigger) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.JobTrigger>;

  listJobTriggers(
    request: google_privacy_dlp_v2_dlp_pb.ListJobTriggersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse>;

  deleteJobTrigger(
    request: google_privacy_dlp_v2_dlp_pb.DeleteJobTriggerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createDlpJob(
    request: google_privacy_dlp_v2_dlp_pb.CreateDlpJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.DlpJob) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.DlpJob>;

  listDlpJobs(
    request: google_privacy_dlp_v2_dlp_pb.ListDlpJobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse>;

  getDlpJob(
    request: google_privacy_dlp_v2_dlp_pb.GetDlpJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.DlpJob) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.DlpJob>;

  deleteDlpJob(
    request: google_privacy_dlp_v2_dlp_pb.DeleteDlpJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  cancelDlpJob(
    request: google_privacy_dlp_v2_dlp_pb.CancelDlpJobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createStoredInfoType(
    request: google_privacy_dlp_v2_dlp_pb.CreateStoredInfoTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.StoredInfoType) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.StoredInfoType>;

  updateStoredInfoType(
    request: google_privacy_dlp_v2_dlp_pb.UpdateStoredInfoTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.StoredInfoType) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.StoredInfoType>;

  getStoredInfoType(
    request: google_privacy_dlp_v2_dlp_pb.GetStoredInfoTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.StoredInfoType) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.StoredInfoType>;

  listStoredInfoTypes(
    request: google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse) => void
  ): grpcWeb.ClientReadableStream<google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse>;

  deleteStoredInfoType(
    request: google_privacy_dlp_v2_dlp_pb.DeleteStoredInfoTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class DlpServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  inspectContent(
    request: google_privacy_dlp_v2_dlp_pb.InspectContentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.InspectContentResponse>;

  redactImage(
    request: google_privacy_dlp_v2_dlp_pb.RedactImageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.RedactImageResponse>;

  deidentifyContent(
    request: google_privacy_dlp_v2_dlp_pb.DeidentifyContentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse>;

  reidentifyContent(
    request: google_privacy_dlp_v2_dlp_pb.ReidentifyContentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse>;

  listInfoTypes(
    request: google_privacy_dlp_v2_dlp_pb.ListInfoTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse>;

  createInspectTemplate(
    request: google_privacy_dlp_v2_dlp_pb.CreateInspectTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.InspectTemplate>;

  updateInspectTemplate(
    request: google_privacy_dlp_v2_dlp_pb.UpdateInspectTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.InspectTemplate>;

  getInspectTemplate(
    request: google_privacy_dlp_v2_dlp_pb.GetInspectTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.InspectTemplate>;

  listInspectTemplates(
    request: google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse>;

  deleteInspectTemplate(
    request: google_privacy_dlp_v2_dlp_pb.DeleteInspectTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createDeidentifyTemplate(
    request: google_privacy_dlp_v2_dlp_pb.CreateDeidentifyTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>;

  updateDeidentifyTemplate(
    request: google_privacy_dlp_v2_dlp_pb.UpdateDeidentifyTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>;

  getDeidentifyTemplate(
    request: google_privacy_dlp_v2_dlp_pb.GetDeidentifyTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>;

  listDeidentifyTemplates(
    request: google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse>;

  deleteDeidentifyTemplate(
    request: google_privacy_dlp_v2_dlp_pb.DeleteDeidentifyTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createJobTrigger(
    request: google_privacy_dlp_v2_dlp_pb.CreateJobTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.JobTrigger>;

  updateJobTrigger(
    request: google_privacy_dlp_v2_dlp_pb.UpdateJobTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.JobTrigger>;

  getJobTrigger(
    request: google_privacy_dlp_v2_dlp_pb.GetJobTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.JobTrigger>;

  listJobTriggers(
    request: google_privacy_dlp_v2_dlp_pb.ListJobTriggersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse>;

  deleteJobTrigger(
    request: google_privacy_dlp_v2_dlp_pb.DeleteJobTriggerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createDlpJob(
    request: google_privacy_dlp_v2_dlp_pb.CreateDlpJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.DlpJob>;

  listDlpJobs(
    request: google_privacy_dlp_v2_dlp_pb.ListDlpJobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse>;

  getDlpJob(
    request: google_privacy_dlp_v2_dlp_pb.GetDlpJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.DlpJob>;

  deleteDlpJob(
    request: google_privacy_dlp_v2_dlp_pb.DeleteDlpJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  cancelDlpJob(
    request: google_privacy_dlp_v2_dlp_pb.CancelDlpJobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createStoredInfoType(
    request: google_privacy_dlp_v2_dlp_pb.CreateStoredInfoTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.StoredInfoType>;

  updateStoredInfoType(
    request: google_privacy_dlp_v2_dlp_pb.UpdateStoredInfoTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.StoredInfoType>;

  getStoredInfoType(
    request: google_privacy_dlp_v2_dlp_pb.GetStoredInfoTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.StoredInfoType>;

  listStoredInfoTypes(
    request: google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse>;

  deleteStoredInfoType(
    request: google_privacy_dlp_v2_dlp_pb.DeleteStoredInfoTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

