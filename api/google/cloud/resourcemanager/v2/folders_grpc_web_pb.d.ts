import * as grpcWeb from 'grpc-web';

import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_resourcemanager_v2_folders_pb from '../../../../google/cloud/resourcemanager/v2/folders_pb';


export class FoldersClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listFolders(
    request: google_cloud_resourcemanager_v2_folders_pb.ListFoldersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse>;

  searchFolders(
    request: google_cloud_resourcemanager_v2_folders_pb.SearchFoldersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse>;

  getFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.GetFolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_resourcemanager_v2_folders_pb.Folder) => void
  ): grpcWeb.ClientReadableStream<google_cloud_resourcemanager_v2_folders_pb.Folder>;

  createFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.CreateFolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  updateFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.UpdateFolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_resourcemanager_v2_folders_pb.Folder) => void
  ): grpcWeb.ClientReadableStream<google_cloud_resourcemanager_v2_folders_pb.Folder>;

  moveFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.MoveFolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  deleteFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.DeleteFolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_resourcemanager_v2_folders_pb.Folder) => void
  ): grpcWeb.ClientReadableStream<google_cloud_resourcemanager_v2_folders_pb.Folder>;

  undeleteFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.UndeleteFolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_resourcemanager_v2_folders_pb.Folder) => void
  ): grpcWeb.ClientReadableStream<google_cloud_resourcemanager_v2_folders_pb.Folder>;

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

}

export class FoldersPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listFolders(
    request: google_cloud_resourcemanager_v2_folders_pb.ListFoldersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_resourcemanager_v2_folders_pb.ListFoldersResponse>;

  searchFolders(
    request: google_cloud_resourcemanager_v2_folders_pb.SearchFoldersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_resourcemanager_v2_folders_pb.SearchFoldersResponse>;

  getFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.GetFolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_resourcemanager_v2_folders_pb.Folder>;

  createFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.CreateFolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  updateFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.UpdateFolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_resourcemanager_v2_folders_pb.Folder>;

  moveFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.MoveFolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  deleteFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.DeleteFolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_resourcemanager_v2_folders_pb.Folder>;

  undeleteFolder(
    request: google_cloud_resourcemanager_v2_folders_pb.UndeleteFolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_resourcemanager_v2_folders_pb.Folder>;

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

}

