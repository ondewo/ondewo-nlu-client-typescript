import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_devtools_sourcerepo_v1_sourcerepo_pb from '../../../../google/devtools/sourcerepo/v1/sourcerepo_pb';


export class SourceRepoClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRepos(
    request: google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse>;

  getRepo(
    request: google_devtools_sourcerepo_v1_sourcerepo_pb.GetRepoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_sourcerepo_v1_sourcerepo_pb.Repo) => void
  ): grpcWeb.ClientReadableStream<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>;

  createRepo(
    request: google_devtools_sourcerepo_v1_sourcerepo_pb.CreateRepoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_sourcerepo_v1_sourcerepo_pb.Repo) => void
  ): grpcWeb.ClientReadableStream<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>;

  deleteRepo(
    request: google_devtools_sourcerepo_v1_sourcerepo_pb.DeleteRepoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

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

export class SourceRepoPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listRepos(
    request: google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_sourcerepo_v1_sourcerepo_pb.ListReposResponse>;

  getRepo(
    request: google_devtools_sourcerepo_v1_sourcerepo_pb.GetRepoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>;

  createRepo(
    request: google_devtools_sourcerepo_v1_sourcerepo_pb.CreateRepoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_sourcerepo_v1_sourcerepo_pb.Repo>;

  deleteRepo(
    request: google_devtools_sourcerepo_v1_sourcerepo_pb.DeleteRepoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

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

