import * as grpcWeb from 'grpc-web';

import * as google_cloud_billing_v1_cloud_billing_pb from '../../../../google/cloud/billing/v1/cloud_billing_pb';


export class CloudBillingClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getBillingAccount(
    request: google_cloud_billing_v1_cloud_billing_pb.GetBillingAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_billing_v1_cloud_billing_pb.BillingAccount) => void
  ): grpcWeb.ClientReadableStream<google_cloud_billing_v1_cloud_billing_pb.BillingAccount>;

  listBillingAccounts(
    request: google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse>;

  listProjectBillingInfo(
    request: google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse>;

  getProjectBillingInfo(
    request: google_cloud_billing_v1_cloud_billing_pb.GetProjectBillingInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo) => void
  ): grpcWeb.ClientReadableStream<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>;

  updateProjectBillingInfo(
    request: google_cloud_billing_v1_cloud_billing_pb.UpdateProjectBillingInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo) => void
  ): grpcWeb.ClientReadableStream<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>;

}

export class CloudBillingPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getBillingAccount(
    request: google_cloud_billing_v1_cloud_billing_pb.GetBillingAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_billing_v1_cloud_billing_pb.BillingAccount>;

  listBillingAccounts(
    request: google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_billing_v1_cloud_billing_pb.ListBillingAccountsResponse>;

  listProjectBillingInfo(
    request: google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_billing_v1_cloud_billing_pb.ListProjectBillingInfoResponse>;

  getProjectBillingInfo(
    request: google_cloud_billing_v1_cloud_billing_pb.GetProjectBillingInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>;

  updateProjectBillingInfo(
    request: google_cloud_billing_v1_cloud_billing_pb.UpdateProjectBillingInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_billing_v1_cloud_billing_pb.ProjectBillingInfo>;

}

