import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_devtools_remoteexecution_v1test_remote_execution_pb from '../../../../google/devtools/remoteexecution/v1test/remote_execution_pb';


export class ExecutionClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  execute(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.ExecuteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class ActionCacheClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getActionResult(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.GetActionResultRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteexecution_v1test_remote_execution_pb.ActionResult) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteexecution_v1test_remote_execution_pb.ActionResult>;

  updateActionResult(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.UpdateActionResultRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteexecution_v1test_remote_execution_pb.ActionResult) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteexecution_v1test_remote_execution_pb.ActionResult>;

}

export class ContentAddressableStorageClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  findMissingBlobs(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.FindMissingBlobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteexecution_v1test_remote_execution_pb.FindMissingBlobsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteexecution_v1test_remote_execution_pb.FindMissingBlobsResponse>;

  batchUpdateBlobs(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.BatchUpdateBlobsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteexecution_v1test_remote_execution_pb.BatchUpdateBlobsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteexecution_v1test_remote_execution_pb.BatchUpdateBlobsResponse>;

  getTree(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.GetTreeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_remoteexecution_v1test_remote_execution_pb.GetTreeResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_remoteexecution_v1test_remote_execution_pb.GetTreeResponse>;

}

export class ExecutionPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  execute(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.ExecuteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

export class ActionCachePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getActionResult(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.GetActionResultRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteexecution_v1test_remote_execution_pb.ActionResult>;

  updateActionResult(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.UpdateActionResultRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteexecution_v1test_remote_execution_pb.ActionResult>;

}

export class ContentAddressableStoragePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  findMissingBlobs(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.FindMissingBlobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteexecution_v1test_remote_execution_pb.FindMissingBlobsResponse>;

  batchUpdateBlobs(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.BatchUpdateBlobsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteexecution_v1test_remote_execution_pb.BatchUpdateBlobsResponse>;

  getTree(
    request: google_devtools_remoteexecution_v1test_remote_execution_pb.GetTreeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_remoteexecution_v1test_remote_execution_pb.GetTreeResponse>;

}

