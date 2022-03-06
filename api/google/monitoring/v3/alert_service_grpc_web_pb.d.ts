import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_monitoring_v3_alert_pb from '../../../google/monitoring/v3/alert_pb';
import * as google_monitoring_v3_alert_service_pb from '../../../google/monitoring/v3/alert_service_pb';


export class AlertPolicyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listAlertPolicies(
    request: google_monitoring_v3_alert_service_pb.ListAlertPoliciesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse>;

  getAlertPolicy(
    request: google_monitoring_v3_alert_service_pb.GetAlertPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_alert_pb.AlertPolicy) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_alert_pb.AlertPolicy>;

  createAlertPolicy(
    request: google_monitoring_v3_alert_service_pb.CreateAlertPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_alert_pb.AlertPolicy) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_alert_pb.AlertPolicy>;

  deleteAlertPolicy(
    request: google_monitoring_v3_alert_service_pb.DeleteAlertPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateAlertPolicy(
    request: google_monitoring_v3_alert_service_pb.UpdateAlertPolicyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_alert_pb.AlertPolicy) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_alert_pb.AlertPolicy>;

}

export class AlertPolicyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listAlertPolicies(
    request: google_monitoring_v3_alert_service_pb.ListAlertPoliciesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_alert_service_pb.ListAlertPoliciesResponse>;

  getAlertPolicy(
    request: google_monitoring_v3_alert_service_pb.GetAlertPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_alert_pb.AlertPolicy>;

  createAlertPolicy(
    request: google_monitoring_v3_alert_service_pb.CreateAlertPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_alert_pb.AlertPolicy>;

  deleteAlertPolicy(
    request: google_monitoring_v3_alert_service_pb.DeleteAlertPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  updateAlertPolicy(
    request: google_monitoring_v3_alert_service_pb.UpdateAlertPolicyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_alert_pb.AlertPolicy>;

}

