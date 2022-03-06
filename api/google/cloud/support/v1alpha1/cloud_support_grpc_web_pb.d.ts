import * as grpcWeb from 'grpc-web';

import * as google_cloud_support_common_pb from '../../../../google/cloud/support/common_pb';
import * as google_cloud_support_v1alpha1_cloud_support_pb from '../../../../google/cloud/support/v1alpha1/cloud_support_pb';


export class CloudSupportClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSupportAccount(
    request: google_cloud_support_v1alpha1_cloud_support_pb.GetSupportAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.SupportAccount) => void
  ): grpcWeb.ClientReadableStream<google_cloud_support_common_pb.SupportAccount>;

  listSupportAccounts(
    request: google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse>;

  getCase(
    request: google_cloud_support_v1alpha1_cloud_support_pb.GetCaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.Case) => void
  ): grpcWeb.ClientReadableStream<google_cloud_support_common_pb.Case>;

  listCases(
    request: google_cloud_support_v1alpha1_cloud_support_pb.ListCasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse>;

  listComments(
    request: google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse>;

  createCase(
    request: google_cloud_support_v1alpha1_cloud_support_pb.CreateCaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.Case) => void
  ): grpcWeb.ClientReadableStream<google_cloud_support_common_pb.Case>;

  updateCase(
    request: google_cloud_support_v1alpha1_cloud_support_pb.UpdateCaseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.Case) => void
  ): grpcWeb.ClientReadableStream<google_cloud_support_common_pb.Case>;

  createComment(
    request: google_cloud_support_v1alpha1_cloud_support_pb.CreateCommentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.Comment) => void
  ): grpcWeb.ClientReadableStream<google_cloud_support_common_pb.Comment>;

  getIssueTaxonomy(
    request: google_cloud_support_v1alpha1_cloud_support_pb.GetIssueTaxonomyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_support_common_pb.IssueTaxonomy) => void
  ): grpcWeb.ClientReadableStream<google_cloud_support_common_pb.IssueTaxonomy>;

}

export class CloudSupportPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getSupportAccount(
    request: google_cloud_support_v1alpha1_cloud_support_pb.GetSupportAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_support_common_pb.SupportAccount>;

  listSupportAccounts(
    request: google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_support_v1alpha1_cloud_support_pb.ListSupportAccountsResponse>;

  getCase(
    request: google_cloud_support_v1alpha1_cloud_support_pb.GetCaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_support_common_pb.Case>;

  listCases(
    request: google_cloud_support_v1alpha1_cloud_support_pb.ListCasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_support_v1alpha1_cloud_support_pb.ListCasesResponse>;

  listComments(
    request: google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_support_v1alpha1_cloud_support_pb.ListCommentsResponse>;

  createCase(
    request: google_cloud_support_v1alpha1_cloud_support_pb.CreateCaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_support_common_pb.Case>;

  updateCase(
    request: google_cloud_support_v1alpha1_cloud_support_pb.UpdateCaseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_support_common_pb.Case>;

  createComment(
    request: google_cloud_support_v1alpha1_cloud_support_pb.CreateCommentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_support_common_pb.Comment>;

  getIssueTaxonomy(
    request: google_cloud_support_v1alpha1_cloud_support_pb.GetIssueTaxonomyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_support_common_pb.IssueTaxonomy>;

}

