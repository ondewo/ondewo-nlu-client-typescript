import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_cloud_websecurityscanner_v1alpha_scan_run_pb from '../../../../google/cloud/websecurityscanner/v1alpha/scan_run_pb';
import * as google_cloud_websecurityscanner_v1alpha_finding_pb from '../../../../google/cloud/websecurityscanner/v1alpha/finding_pb';
import * as google_cloud_websecurityscanner_v1alpha_scan_config_pb from '../../../../google/cloud/websecurityscanner/v1alpha/scan_config_pb';
import * as google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb from '../../../../google/cloud/websecurityscanner/v1alpha/web_security_scanner_pb';


export class WebSecurityScannerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createScanConfig(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.CreateScanConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig>;

  deleteScanConfig(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.DeleteScanConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getScanConfig(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig>;

  listScanConfigs(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsResponse>;

  updateScanConfig(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.UpdateScanConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig>;

  startScanRun(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StartScanRunRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun>;

  getScanRun(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanRunRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun>;

  listScanRuns(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsResponse>;

  stopScanRun(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StopScanRunRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun>;

  listCrawledUrls(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsResponse>;

  getFinding(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetFindingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_finding_pb.Finding) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_finding_pb.Finding>;

  listFindings(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsResponse>;

  listFindingTypeStats(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsResponse>;

}

export class WebSecurityScannerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createScanConfig(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.CreateScanConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig>;

  deleteScanConfig(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.DeleteScanConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getScanConfig(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig>;

  listScanConfigs(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanConfigsResponse>;

  updateScanConfig(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.UpdateScanConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_scan_config_pb.ScanConfig>;

  startScanRun(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StartScanRunRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun>;

  getScanRun(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetScanRunRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun>;

  listScanRuns(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListScanRunsResponse>;

  stopScanRun(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.StopScanRunRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_scan_run_pb.ScanRun>;

  listCrawledUrls(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListCrawledUrlsResponse>;

  getFinding(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.GetFindingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_finding_pb.Finding>;

  listFindings(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingsResponse>;

  listFindingTypeStats(
    request: google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_websecurityscanner_v1alpha_web_security_scanner_pb.ListFindingTypeStatsResponse>;

}

