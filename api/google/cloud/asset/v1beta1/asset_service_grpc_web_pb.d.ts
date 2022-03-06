import * as grpcWeb from 'grpc-web';

import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_asset_v1beta1_asset_service_pb from '../../../../google/cloud/asset/v1beta1/asset_service_pb';


export class AssetServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  exportAssets(
    request: google_cloud_asset_v1beta1_asset_service_pb.ExportAssetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

  batchGetAssetsHistory(
    request: google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse>;

}

export class AssetServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  exportAssets(
    request: google_cloud_asset_v1beta1_asset_service_pb.ExportAssetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

  batchGetAssetsHistory(
    request: google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_asset_v1beta1_asset_service_pb.BatchGetAssetsHistoryResponse>;

}

