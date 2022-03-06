import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_iam_v1_policy_pb from '../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../google/iam/v1/iam_policy_pb';
import * as google_genomics_v1_datasets_pb from '../../../google/genomics/v1/datasets_pb';


export class DatasetServiceV1Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDatasets(
    request: google_genomics_v1_datasets_pb.ListDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_datasets_pb.ListDatasetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_datasets_pb.ListDatasetsResponse>;

  createDataset(
    request: google_genomics_v1_datasets_pb.CreateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_datasets_pb.Dataset) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_datasets_pb.Dataset>;

  getDataset(
    request: google_genomics_v1_datasets_pb.GetDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_datasets_pb.Dataset) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_datasets_pb.Dataset>;

  updateDataset(
    request: google_genomics_v1_datasets_pb.UpdateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_datasets_pb.Dataset) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_datasets_pb.Dataset>;

  deleteDataset(
    request: google_genomics_v1_datasets_pb.DeleteDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  undeleteDataset(
    request: google_genomics_v1_datasets_pb.UndeleteDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_genomics_v1_datasets_pb.Dataset) => void
  ): grpcWeb.ClientReadableStream<google_genomics_v1_datasets_pb.Dataset>;

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

}

export class DatasetServiceV1PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listDatasets(
    request: google_genomics_v1_datasets_pb.ListDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_datasets_pb.ListDatasetsResponse>;

  createDataset(
    request: google_genomics_v1_datasets_pb.CreateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_datasets_pb.Dataset>;

  getDataset(
    request: google_genomics_v1_datasets_pb.GetDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_datasets_pb.Dataset>;

  updateDataset(
    request: google_genomics_v1_datasets_pb.UpdateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_datasets_pb.Dataset>;

  deleteDataset(
    request: google_genomics_v1_datasets_pb.DeleteDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  undeleteDataset(
    request: google_genomics_v1_datasets_pb.UndeleteDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_genomics_v1_datasets_pb.Dataset>;

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

}

