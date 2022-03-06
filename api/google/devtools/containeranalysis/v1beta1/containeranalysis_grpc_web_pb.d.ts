import * as grpcWeb from 'grpc-web';

import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_devtools_containeranalysis_v1beta1_containeranalysis_pb from '../../../../google/devtools/containeranalysis/v1beta1/containeranalysis_pb';


export class ContainerAnalysisV1Beta1Client {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

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

  getScanConfig(
    request: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.GetScanConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>;

  listScanConfigs(
    request: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsResponse>;

  updateScanConfig(
    request: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.UpdateScanConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig) => void
  ): grpcWeb.ClientReadableStream<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>;

}

export class ContainerAnalysisV1Beta1PromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

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

  getScanConfig(
    request: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.GetScanConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>;

  listScanConfigs(
    request: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ListScanConfigsResponse>;

  updateScanConfig(
    request: google_devtools_containeranalysis_v1beta1_containeranalysis_pb.UpdateScanConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_devtools_containeranalysis_v1beta1_containeranalysis_pb.ScanConfig>;

}

