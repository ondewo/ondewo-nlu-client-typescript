import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_dataproc_v1beta2_workflow_templates_pb from '../../../../google/cloud/dataproc/v1beta2/workflow_templates_pb';


export class WorkflowTemplateServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.CreateWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>;

  getWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.GetWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>;

  instantiateWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  instantiateInlineWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateInlineWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.UpdateWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>;

  listWorkflowTemplates(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse>;

  deleteWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.DeleteWorkflowTemplateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class WorkflowTemplateServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.CreateWorkflowTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>;

  getWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.GetWorkflowTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>;

  instantiateWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateWorkflowTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  instantiateInlineWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.InstantiateInlineWorkflowTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.UpdateWorkflowTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1beta2_workflow_templates_pb.WorkflowTemplate>;

  listWorkflowTemplates(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_dataproc_v1beta2_workflow_templates_pb.ListWorkflowTemplatesResponse>;

  deleteWorkflowTemplate(
    request: google_cloud_dataproc_v1beta2_workflow_templates_pb.DeleteWorkflowTemplateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

