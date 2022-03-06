import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_cloud_tasks_v2beta3_queue_pb from '../../../../google/cloud/tasks/v2beta3/queue_pb';
import * as google_cloud_tasks_v2beta3_task_pb from '../../../../google/cloud/tasks/v2beta3/task_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_cloud_tasks_v2beta3_cloudtasks_pb from '../../../../google/cloud/tasks/v2beta3/cloudtasks_pb';


export class CloudTasksClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listQueues(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.ListQueuesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_cloudtasks_pb.ListQueuesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_cloudtasks_pb.ListQueuesResponse>;

  getQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.GetQueueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  createQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.CreateQueueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  updateQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.UpdateQueueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  deleteQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.DeleteQueueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  purgeQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.PurgeQueueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  pauseQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.PauseQueueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  resumeQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.ResumeQueueRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_queue_pb.Queue) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_v1_policy_pb.Policy) => void
  ): grpcWeb.ClientReadableStream<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
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

  listTasks(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.ListTasksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_cloudtasks_pb.ListTasksResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_cloudtasks_pb.ListTasksResponse>;

  getTask(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.GetTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_task_pb.Task) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_task_pb.Task>;

  createTask(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.CreateTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_task_pb.Task) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_task_pb.Task>;

  deleteTask(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.DeleteTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  runTask(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.RunTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_tasks_v2beta3_task_pb.Task) => void
  ): grpcWeb.ClientReadableStream<google_cloud_tasks_v2beta3_task_pb.Task>;

}

export class CloudTasksPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listQueues(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.ListQueuesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_cloudtasks_pb.ListQueuesResponse>;

  getQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.GetQueueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  createQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.CreateQueueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  updateQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.UpdateQueueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  deleteQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.DeleteQueueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  purgeQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.PurgeQueueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  pauseQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.PauseQueueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  resumeQueue(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.ResumeQueueRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_queue_pb.Queue>;

  getIamPolicy(
    request: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  setIamPolicy(
    request: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_policy_pb.Policy>;

  testIamPermissions(
    request: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;

  listTasks(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.ListTasksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_cloudtasks_pb.ListTasksResponse>;

  getTask(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.GetTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_task_pb.Task>;

  createTask(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.CreateTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_task_pb.Task>;

  deleteTask(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.DeleteTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  runTask(
    request: google_cloud_tasks_v2beta3_cloudtasks_pb.RunTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_tasks_v2beta3_task_pb.Task>;

}

