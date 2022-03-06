import * as grpcWeb from 'grpc-web';

import * as google_devtools_remoteworkers_v1test2_tasks_pb from '../../../../google/devtools/remoteworkers/v1test2/tasks_pb';


export class TasksClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTask(
    request: google_devtools_remoteworkers_v1test2_tasks_pb.GetTaskRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteworkers_v1test2_tasks_pb.Task) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteworkers_v1test2_tasks_pb.Task>;

  updateTaskResult(
    request: google_devtools_remoteworkers_v1test2_tasks_pb.UpdateTaskResultRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult>;

  addTaskLog(
    request: google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse>;

}

export class TasksPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTask(
    request: google_devtools_remoteworkers_v1test2_tasks_pb.GetTaskRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteworkers_v1test2_tasks_pb.Task>;

  updateTaskResult(
    request: google_devtools_remoteworkers_v1test2_tasks_pb.UpdateTaskResultRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult>;

  addTaskLog(
    request: google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse>;

}

