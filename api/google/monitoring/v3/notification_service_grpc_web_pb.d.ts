import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_monitoring_v3_notification_pb from '../../../google/monitoring/v3/notification_pb';
import * as google_monitoring_v3_notification_service_pb from '../../../google/monitoring/v3/notification_service_pb';


export class NotificationChannelServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listNotificationChannelDescriptors(
    request: google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse>;

  getNotificationChannelDescriptor(
    request: google_monitoring_v3_notification_service_pb.GetNotificationChannelDescriptorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannelDescriptor) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_notification_pb.NotificationChannelDescriptor>;

  listNotificationChannels(
    request: google_monitoring_v3_notification_service_pb.ListNotificationChannelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse>;

  getNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.GetNotificationChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannel) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_notification_pb.NotificationChannel>;

  createNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.CreateNotificationChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannel) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_notification_pb.NotificationChannel>;

  updateNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.UpdateNotificationChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannel) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_notification_pb.NotificationChannel>;

  deleteNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.DeleteNotificationChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendNotificationChannelVerificationCode(
    request: google_monitoring_v3_notification_service_pb.SendNotificationChannelVerificationCodeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getNotificationChannelVerificationCode(
    request: google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse>;

  verifyNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.VerifyNotificationChannelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_monitoring_v3_notification_pb.NotificationChannel) => void
  ): grpcWeb.ClientReadableStream<google_monitoring_v3_notification_pb.NotificationChannel>;

}

export class NotificationChannelServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listNotificationChannelDescriptors(
    request: google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse>;

  getNotificationChannelDescriptor(
    request: google_monitoring_v3_notification_service_pb.GetNotificationChannelDescriptorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_notification_pb.NotificationChannelDescriptor>;

  listNotificationChannels(
    request: google_monitoring_v3_notification_service_pb.ListNotificationChannelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse>;

  getNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.GetNotificationChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_notification_pb.NotificationChannel>;

  createNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.CreateNotificationChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_notification_pb.NotificationChannel>;

  updateNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.UpdateNotificationChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_notification_pb.NotificationChannel>;

  deleteNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.DeleteNotificationChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  sendNotificationChannelVerificationCode(
    request: google_monitoring_v3_notification_service_pb.SendNotificationChannelVerificationCodeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getNotificationChannelVerificationCode(
    request: google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse>;

  verifyNotificationChannel(
    request: google_monitoring_v3_notification_service_pb.VerifyNotificationChannelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_monitoring_v3_notification_pb.NotificationChannel>;

}

