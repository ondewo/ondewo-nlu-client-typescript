import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_pubsub_v1_pubsub_pb from '../../../google/pubsub/v1/pubsub_pb';


export class PublisherClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTopic(
    request: google_pubsub_v1_pubsub_pb.Topic,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.Topic>;

  updateTopic(
    request: google_pubsub_v1_pubsub_pb.UpdateTopicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.Topic>;

  publish(
    request: google_pubsub_v1_pubsub_pb.PublishRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.PublishResponse) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.PublishResponse>;

  getTopic(
    request: google_pubsub_v1_pubsub_pb.GetTopicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.Topic) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.Topic>;

  listTopics(
    request: google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.ListTopicsResponse) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.ListTopicsResponse>;

  listTopicSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse>;

  listTopicSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse>;

  deleteTopic(
    request: google_pubsub_v1_pubsub_pb.DeleteTopicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class SubscriberClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSubscription(
    request: google_pubsub_v1_pubsub_pb.Subscription,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.Subscription>;

  getSubscription(
    request: google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.Subscription>;

  updateSubscription(
    request: google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.Subscription) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.Subscription>;

  listSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse>;

  deleteSubscription(
    request: google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  modifyAckDeadline(
    request: google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  acknowledge(
    request: google_pubsub_v1_pubsub_pb.AcknowledgeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  pull(
    request: google_pubsub_v1_pubsub_pb.PullRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.PullResponse) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.PullResponse>;

  modifyPushConfig(
    request: google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getSnapshot(
    request: google_pubsub_v1_pubsub_pb.GetSnapshotRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.Snapshot>;

  listSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.ListSnapshotsResponse) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.ListSnapshotsResponse>;

  createSnapshot(
    request: google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.Snapshot>;

  updateSnapshot(
    request: google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.Snapshot) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.Snapshot>;

  deleteSnapshot(
    request: google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  seek(
    request: google_pubsub_v1_pubsub_pb.SeekRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_pubsub_v1_pubsub_pb.SeekResponse) => void
  ): grpcWeb.ClientReadableStream<google_pubsub_v1_pubsub_pb.SeekResponse>;

}

export class PublisherPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createTopic(
    request: google_pubsub_v1_pubsub_pb.Topic,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.Topic>;

  updateTopic(
    request: google_pubsub_v1_pubsub_pb.UpdateTopicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.Topic>;

  publish(
    request: google_pubsub_v1_pubsub_pb.PublishRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.PublishResponse>;

  getTopic(
    request: google_pubsub_v1_pubsub_pb.GetTopicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.Topic>;

  listTopics(
    request: google_pubsub_v1_pubsub_pb.ListTopicsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.ListTopicsResponse>;

  listTopicSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.ListTopicSubscriptionsResponse>;

  listTopicSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListTopicSnapshotsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.ListTopicSnapshotsResponse>;

  deleteTopic(
    request: google_pubsub_v1_pubsub_pb.DeleteTopicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

export class SubscriberPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSubscription(
    request: google_pubsub_v1_pubsub_pb.Subscription,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.Subscription>;

  getSubscription(
    request: google_pubsub_v1_pubsub_pb.GetSubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.Subscription>;

  updateSubscription(
    request: google_pubsub_v1_pubsub_pb.UpdateSubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.Subscription>;

  listSubscriptions(
    request: google_pubsub_v1_pubsub_pb.ListSubscriptionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.ListSubscriptionsResponse>;

  deleteSubscription(
    request: google_pubsub_v1_pubsub_pb.DeleteSubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  modifyAckDeadline(
    request: google_pubsub_v1_pubsub_pb.ModifyAckDeadlineRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  acknowledge(
    request: google_pubsub_v1_pubsub_pb.AcknowledgeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  pull(
    request: google_pubsub_v1_pubsub_pb.PullRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.PullResponse>;

  modifyPushConfig(
    request: google_pubsub_v1_pubsub_pb.ModifyPushConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getSnapshot(
    request: google_pubsub_v1_pubsub_pb.GetSnapshotRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.Snapshot>;

  listSnapshots(
    request: google_pubsub_v1_pubsub_pb.ListSnapshotsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.ListSnapshotsResponse>;

  createSnapshot(
    request: google_pubsub_v1_pubsub_pb.CreateSnapshotRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.Snapshot>;

  updateSnapshot(
    request: google_pubsub_v1_pubsub_pb.UpdateSnapshotRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.Snapshot>;

  deleteSnapshot(
    request: google_pubsub_v1_pubsub_pb.DeleteSnapshotRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  seek(
    request: google_pubsub_v1_pubsub_pb.SeekRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_pubsub_v1_pubsub_pb.SeekResponse>;

}

