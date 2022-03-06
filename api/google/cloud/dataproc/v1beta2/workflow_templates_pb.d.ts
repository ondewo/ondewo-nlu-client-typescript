import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_cloud_dataproc_v1beta2_clusters_pb from '../../../../google/cloud/dataproc/v1beta2/clusters_pb';
import * as google_cloud_dataproc_v1beta2_jobs_pb from '../../../../google/cloud/dataproc/v1beta2/jobs_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class WorkflowTemplate extends jspb.Message {
  getId(): string;
  setId(value: string): WorkflowTemplate;

  getName(): string;
  setName(value: string): WorkflowTemplate;

  getVersion(): number;
  setVersion(value: number): WorkflowTemplate;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): WorkflowTemplate;
  hasCreateTime(): boolean;
  clearCreateTime(): WorkflowTemplate;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): WorkflowTemplate;
  hasUpdateTime(): boolean;
  clearUpdateTime(): WorkflowTemplate;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): WorkflowTemplate;

  getPlacement(): WorkflowTemplatePlacement | undefined;
  setPlacement(value?: WorkflowTemplatePlacement): WorkflowTemplate;
  hasPlacement(): boolean;
  clearPlacement(): WorkflowTemplate;

  getJobsList(): Array<OrderedJob>;
  setJobsList(value: Array<OrderedJob>): WorkflowTemplate;
  clearJobsList(): WorkflowTemplate;
  addJobs(value?: OrderedJob, index?: number): OrderedJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTemplate): WorkflowTemplate.AsObject;
  static serializeBinaryToWriter(message: WorkflowTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTemplate;
  static deserializeBinaryFromReader(message: WorkflowTemplate, reader: jspb.BinaryReader): WorkflowTemplate;
}

export namespace WorkflowTemplate {
  export type AsObject = {
    id: string,
    name: string,
    version: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    labelsMap: Array<[string, string]>,
    placement?: WorkflowTemplatePlacement.AsObject,
    jobsList: Array<OrderedJob.AsObject>,
  }
}

export class WorkflowTemplatePlacement extends jspb.Message {
  getManagedCluster(): ManagedCluster | undefined;
  setManagedCluster(value?: ManagedCluster): WorkflowTemplatePlacement;
  hasManagedCluster(): boolean;
  clearManagedCluster(): WorkflowTemplatePlacement;

  getClusterSelector(): ClusterSelector | undefined;
  setClusterSelector(value?: ClusterSelector): WorkflowTemplatePlacement;
  hasClusterSelector(): boolean;
  clearClusterSelector(): WorkflowTemplatePlacement;

  getPlacementCase(): WorkflowTemplatePlacement.PlacementCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowTemplatePlacement.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowTemplatePlacement): WorkflowTemplatePlacement.AsObject;
  static serializeBinaryToWriter(message: WorkflowTemplatePlacement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowTemplatePlacement;
  static deserializeBinaryFromReader(message: WorkflowTemplatePlacement, reader: jspb.BinaryReader): WorkflowTemplatePlacement;
}

export namespace WorkflowTemplatePlacement {
  export type AsObject = {
    managedCluster?: ManagedCluster.AsObject,
    clusterSelector?: ClusterSelector.AsObject,
  }

  export enum PlacementCase { 
    PLACEMENT_NOT_SET = 0,
    MANAGED_CLUSTER = 1,
    CLUSTER_SELECTOR = 2,
  }
}

export class ManagedCluster extends jspb.Message {
  getClusterName(): string;
  setClusterName(value: string): ManagedCluster;

  getConfig(): google_cloud_dataproc_v1beta2_clusters_pb.ClusterConfig | undefined;
  setConfig(value?: google_cloud_dataproc_v1beta2_clusters_pb.ClusterConfig): ManagedCluster;
  hasConfig(): boolean;
  clearConfig(): ManagedCluster;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ManagedCluster;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedCluster.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedCluster): ManagedCluster.AsObject;
  static serializeBinaryToWriter(message: ManagedCluster, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedCluster;
  static deserializeBinaryFromReader(message: ManagedCluster, reader: jspb.BinaryReader): ManagedCluster;
}

export namespace ManagedCluster {
  export type AsObject = {
    clusterName: string,
    config?: google_cloud_dataproc_v1beta2_clusters_pb.ClusterConfig.AsObject,
    labelsMap: Array<[string, string]>,
  }
}

export class ClusterSelector extends jspb.Message {
  getZone(): string;
  setZone(value: string): ClusterSelector;

  getClusterLabelsMap(): jspb.Map<string, string>;
  clearClusterLabelsMap(): ClusterSelector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterSelector.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterSelector): ClusterSelector.AsObject;
  static serializeBinaryToWriter(message: ClusterSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterSelector;
  static deserializeBinaryFromReader(message: ClusterSelector, reader: jspb.BinaryReader): ClusterSelector;
}

export namespace ClusterSelector {
  export type AsObject = {
    zone: string,
    clusterLabelsMap: Array<[string, string]>,
  }
}

export class OrderedJob extends jspb.Message {
  getStepId(): string;
  setStepId(value: string): OrderedJob;

  getHadoopJob(): google_cloud_dataproc_v1beta2_jobs_pb.HadoopJob | undefined;
  setHadoopJob(value?: google_cloud_dataproc_v1beta2_jobs_pb.HadoopJob): OrderedJob;
  hasHadoopJob(): boolean;
  clearHadoopJob(): OrderedJob;

  getSparkJob(): google_cloud_dataproc_v1beta2_jobs_pb.SparkJob | undefined;
  setSparkJob(value?: google_cloud_dataproc_v1beta2_jobs_pb.SparkJob): OrderedJob;
  hasSparkJob(): boolean;
  clearSparkJob(): OrderedJob;

  getPysparkJob(): google_cloud_dataproc_v1beta2_jobs_pb.PySparkJob | undefined;
  setPysparkJob(value?: google_cloud_dataproc_v1beta2_jobs_pb.PySparkJob): OrderedJob;
  hasPysparkJob(): boolean;
  clearPysparkJob(): OrderedJob;

  getHiveJob(): google_cloud_dataproc_v1beta2_jobs_pb.HiveJob | undefined;
  setHiveJob(value?: google_cloud_dataproc_v1beta2_jobs_pb.HiveJob): OrderedJob;
  hasHiveJob(): boolean;
  clearHiveJob(): OrderedJob;

  getPigJob(): google_cloud_dataproc_v1beta2_jobs_pb.PigJob | undefined;
  setPigJob(value?: google_cloud_dataproc_v1beta2_jobs_pb.PigJob): OrderedJob;
  hasPigJob(): boolean;
  clearPigJob(): OrderedJob;

  getSparkSqlJob(): google_cloud_dataproc_v1beta2_jobs_pb.SparkSqlJob | undefined;
  setSparkSqlJob(value?: google_cloud_dataproc_v1beta2_jobs_pb.SparkSqlJob): OrderedJob;
  hasSparkSqlJob(): boolean;
  clearSparkSqlJob(): OrderedJob;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): OrderedJob;

  getScheduling(): google_cloud_dataproc_v1beta2_jobs_pb.JobScheduling | undefined;
  setScheduling(value?: google_cloud_dataproc_v1beta2_jobs_pb.JobScheduling): OrderedJob;
  hasScheduling(): boolean;
  clearScheduling(): OrderedJob;

  getPrerequisiteStepIdsList(): Array<string>;
  setPrerequisiteStepIdsList(value: Array<string>): OrderedJob;
  clearPrerequisiteStepIdsList(): OrderedJob;
  addPrerequisiteStepIds(value: string, index?: number): OrderedJob;

  getJobTypeCase(): OrderedJob.JobTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedJob.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedJob): OrderedJob.AsObject;
  static serializeBinaryToWriter(message: OrderedJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedJob;
  static deserializeBinaryFromReader(message: OrderedJob, reader: jspb.BinaryReader): OrderedJob;
}

export namespace OrderedJob {
  export type AsObject = {
    stepId: string,
    hadoopJob?: google_cloud_dataproc_v1beta2_jobs_pb.HadoopJob.AsObject,
    sparkJob?: google_cloud_dataproc_v1beta2_jobs_pb.SparkJob.AsObject,
    pysparkJob?: google_cloud_dataproc_v1beta2_jobs_pb.PySparkJob.AsObject,
    hiveJob?: google_cloud_dataproc_v1beta2_jobs_pb.HiveJob.AsObject,
    pigJob?: google_cloud_dataproc_v1beta2_jobs_pb.PigJob.AsObject,
    sparkSqlJob?: google_cloud_dataproc_v1beta2_jobs_pb.SparkSqlJob.AsObject,
    labelsMap: Array<[string, string]>,
    scheduling?: google_cloud_dataproc_v1beta2_jobs_pb.JobScheduling.AsObject,
    prerequisiteStepIdsList: Array<string>,
  }

  export enum JobTypeCase { 
    JOB_TYPE_NOT_SET = 0,
    HADOOP_JOB = 2,
    SPARK_JOB = 3,
    PYSPARK_JOB = 4,
    HIVE_JOB = 5,
    PIG_JOB = 6,
    SPARK_SQL_JOB = 7,
  }
}

export class WorkflowMetadata extends jspb.Message {
  getTemplate(): string;
  setTemplate(value: string): WorkflowMetadata;

  getVersion(): number;
  setVersion(value: number): WorkflowMetadata;

  getCreateCluster(): ClusterOperation | undefined;
  setCreateCluster(value?: ClusterOperation): WorkflowMetadata;
  hasCreateCluster(): boolean;
  clearCreateCluster(): WorkflowMetadata;

  getGraph(): WorkflowGraph | undefined;
  setGraph(value?: WorkflowGraph): WorkflowMetadata;
  hasGraph(): boolean;
  clearGraph(): WorkflowMetadata;

  getDeleteCluster(): ClusterOperation | undefined;
  setDeleteCluster(value?: ClusterOperation): WorkflowMetadata;
  hasDeleteCluster(): boolean;
  clearDeleteCluster(): WorkflowMetadata;

  getState(): WorkflowMetadata.State;
  setState(value: WorkflowMetadata.State): WorkflowMetadata;

  getClusterName(): string;
  setClusterName(value: string): WorkflowMetadata;

  getParametersMap(): jspb.Map<string, string>;
  clearParametersMap(): WorkflowMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowMetadata): WorkflowMetadata.AsObject;
  static serializeBinaryToWriter(message: WorkflowMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowMetadata;
  static deserializeBinaryFromReader(message: WorkflowMetadata, reader: jspb.BinaryReader): WorkflowMetadata;
}

export namespace WorkflowMetadata {
  export type AsObject = {
    template: string,
    version: number,
    createCluster?: ClusterOperation.AsObject,
    graph?: WorkflowGraph.AsObject,
    deleteCluster?: ClusterOperation.AsObject,
    state: WorkflowMetadata.State,
    clusterName: string,
    parametersMap: Array<[string, string]>,
  }

  export enum State { 
    UNKNOWN = 0,
    PENDING = 1,
    RUNNING = 2,
    DONE = 3,
  }
}

export class ClusterOperation extends jspb.Message {
  getOperationId(): string;
  setOperationId(value: string): ClusterOperation;

  getError(): string;
  setError(value: string): ClusterOperation;

  getDone(): boolean;
  setDone(value: boolean): ClusterOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClusterOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ClusterOperation): ClusterOperation.AsObject;
  static serializeBinaryToWriter(message: ClusterOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClusterOperation;
  static deserializeBinaryFromReader(message: ClusterOperation, reader: jspb.BinaryReader): ClusterOperation;
}

export namespace ClusterOperation {
  export type AsObject = {
    operationId: string,
    error: string,
    done: boolean,
  }
}

export class WorkflowGraph extends jspb.Message {
  getNodesList(): Array<WorkflowNode>;
  setNodesList(value: Array<WorkflowNode>): WorkflowGraph;
  clearNodesList(): WorkflowGraph;
  addNodes(value?: WorkflowNode, index?: number): WorkflowNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowGraph.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowGraph): WorkflowGraph.AsObject;
  static serializeBinaryToWriter(message: WorkflowGraph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowGraph;
  static deserializeBinaryFromReader(message: WorkflowGraph, reader: jspb.BinaryReader): WorkflowGraph;
}

export namespace WorkflowGraph {
  export type AsObject = {
    nodesList: Array<WorkflowNode.AsObject>,
  }
}

export class WorkflowNode extends jspb.Message {
  getStepId(): string;
  setStepId(value: string): WorkflowNode;

  getPrerequisiteStepIdsList(): Array<string>;
  setPrerequisiteStepIdsList(value: Array<string>): WorkflowNode;
  clearPrerequisiteStepIdsList(): WorkflowNode;
  addPrerequisiteStepIds(value: string, index?: number): WorkflowNode;

  getJobId(): string;
  setJobId(value: string): WorkflowNode;

  getState(): WorkflowNode.NodeState;
  setState(value: WorkflowNode.NodeState): WorkflowNode;

  getError(): string;
  setError(value: string): WorkflowNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowNode.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowNode): WorkflowNode.AsObject;
  static serializeBinaryToWriter(message: WorkflowNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowNode;
  static deserializeBinaryFromReader(message: WorkflowNode, reader: jspb.BinaryReader): WorkflowNode;
}

export namespace WorkflowNode {
  export type AsObject = {
    stepId: string,
    prerequisiteStepIdsList: Array<string>,
    jobId: string,
    state: WorkflowNode.NodeState,
    error: string,
  }

  export enum NodeState { 
    NODE_STATUS_UNSPECIFIED = 0,
    BLOCKED = 1,
    RUNNABLE = 2,
    RUNNING = 3,
    COMPLETED = 4,
    FAILED = 5,
  }
}

export class CreateWorkflowTemplateRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateWorkflowTemplateRequest;

  getTemplate(): WorkflowTemplate | undefined;
  setTemplate(value?: WorkflowTemplate): CreateWorkflowTemplateRequest;
  hasTemplate(): boolean;
  clearTemplate(): CreateWorkflowTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkflowTemplateRequest): CreateWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: CreateWorkflowTemplateRequest, reader: jspb.BinaryReader): CreateWorkflowTemplateRequest;
}

export namespace CreateWorkflowTemplateRequest {
  export type AsObject = {
    parent: string,
    template?: WorkflowTemplate.AsObject,
  }
}

export class GetWorkflowTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetWorkflowTemplateRequest;

  getVersion(): number;
  setVersion(value: number): GetWorkflowTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowTemplateRequest): GetWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: GetWorkflowTemplateRequest, reader: jspb.BinaryReader): GetWorkflowTemplateRequest;
}

export namespace GetWorkflowTemplateRequest {
  export type AsObject = {
    name: string,
    version: number,
  }
}

export class InstantiateWorkflowTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): InstantiateWorkflowTemplateRequest;

  getVersion(): number;
  setVersion(value: number): InstantiateWorkflowTemplateRequest;

  getInstanceId(): string;
  setInstanceId(value: string): InstantiateWorkflowTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantiateWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstantiateWorkflowTemplateRequest): InstantiateWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: InstantiateWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantiateWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: InstantiateWorkflowTemplateRequest, reader: jspb.BinaryReader): InstantiateWorkflowTemplateRequest;
}

export namespace InstantiateWorkflowTemplateRequest {
  export type AsObject = {
    name: string,
    version: number,
    instanceId: string,
  }
}

export class InstantiateInlineWorkflowTemplateRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): InstantiateInlineWorkflowTemplateRequest;

  getTemplate(): WorkflowTemplate | undefined;
  setTemplate(value?: WorkflowTemplate): InstantiateInlineWorkflowTemplateRequest;
  hasTemplate(): boolean;
  clearTemplate(): InstantiateInlineWorkflowTemplateRequest;

  getInstanceId(): string;
  setInstanceId(value: string): InstantiateInlineWorkflowTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantiateInlineWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstantiateInlineWorkflowTemplateRequest): InstantiateInlineWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: InstantiateInlineWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantiateInlineWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: InstantiateInlineWorkflowTemplateRequest, reader: jspb.BinaryReader): InstantiateInlineWorkflowTemplateRequest;
}

export namespace InstantiateInlineWorkflowTemplateRequest {
  export type AsObject = {
    parent: string,
    template?: WorkflowTemplate.AsObject,
    instanceId: string,
  }
}

export class UpdateWorkflowTemplateRequest extends jspb.Message {
  getTemplate(): WorkflowTemplate | undefined;
  setTemplate(value?: WorkflowTemplate): UpdateWorkflowTemplateRequest;
  hasTemplate(): boolean;
  clearTemplate(): UpdateWorkflowTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkflowTemplateRequest): UpdateWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: UpdateWorkflowTemplateRequest, reader: jspb.BinaryReader): UpdateWorkflowTemplateRequest;
}

export namespace UpdateWorkflowTemplateRequest {
  export type AsObject = {
    template?: WorkflowTemplate.AsObject,
  }
}

export class ListWorkflowTemplatesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListWorkflowTemplatesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListWorkflowTemplatesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListWorkflowTemplatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowTemplatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowTemplatesRequest): ListWorkflowTemplatesRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkflowTemplatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowTemplatesRequest;
  static deserializeBinaryFromReader(message: ListWorkflowTemplatesRequest, reader: jspb.BinaryReader): ListWorkflowTemplatesRequest;
}

export namespace ListWorkflowTemplatesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListWorkflowTemplatesResponse extends jspb.Message {
  getTemplatesList(): Array<WorkflowTemplate>;
  setTemplatesList(value: Array<WorkflowTemplate>): ListWorkflowTemplatesResponse;
  clearTemplatesList(): ListWorkflowTemplatesResponse;
  addTemplates(value?: WorkflowTemplate, index?: number): WorkflowTemplate;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListWorkflowTemplatesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkflowTemplatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkflowTemplatesResponse): ListWorkflowTemplatesResponse.AsObject;
  static serializeBinaryToWriter(message: ListWorkflowTemplatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkflowTemplatesResponse;
  static deserializeBinaryFromReader(message: ListWorkflowTemplatesResponse, reader: jspb.BinaryReader): ListWorkflowTemplatesResponse;
}

export namespace ListWorkflowTemplatesResponse {
  export type AsObject = {
    templatesList: Array<WorkflowTemplate.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteWorkflowTemplateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteWorkflowTemplateRequest;

  getVersion(): number;
  setVersion(value: number): DeleteWorkflowTemplateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkflowTemplateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkflowTemplateRequest): DeleteWorkflowTemplateRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkflowTemplateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkflowTemplateRequest;
  static deserializeBinaryFromReader(message: DeleteWorkflowTemplateRequest, reader: jspb.BinaryReader): DeleteWorkflowTemplateRequest;
}

export namespace DeleteWorkflowTemplateRequest {
  export type AsObject = {
    name: string,
    version: number,
  }
}

