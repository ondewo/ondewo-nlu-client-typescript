import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Topic extends jspb.Message {
  getName(): string;
  setName(value: string): Topic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    name: string,
  }
}

export class PubsubMessage extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): PubsubMessage;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): PubsubMessage;

  getMessageId(): string;
  setMessageId(value: string): PubsubMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubsubMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PubsubMessage): PubsubMessage.AsObject;
  static serializeBinaryToWriter(message: PubsubMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubsubMessage;
  static deserializeBinaryFromReader(message: PubsubMessage, reader: jspb.BinaryReader): PubsubMessage;
}

export namespace PubsubMessage {
  export type AsObject = {
    data: Uint8Array | string,
    attributesMap: Array<[string, string]>,
    messageId: string,
  }
}

export class GetTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): GetTopicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTopicRequest): GetTopicRequest.AsObject;
  static serializeBinaryToWriter(message: GetTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTopicRequest;
  static deserializeBinaryFromReader(message: GetTopicRequest, reader: jspb.BinaryReader): GetTopicRequest;
}

export namespace GetTopicRequest {
  export type AsObject = {
    topic: string,
  }
}

export class PublishRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): PublishRequest;

  getMessagesList(): Array<PubsubMessage>;
  setMessagesList(value: Array<PubsubMessage>): PublishRequest;
  clearMessagesList(): PublishRequest;
  addMessages(value?: PubsubMessage, index?: number): PubsubMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
  static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishRequest;
  static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
  export type AsObject = {
    topic: string,
    messagesList: Array<PubsubMessage.AsObject>,
  }
}

export class PublishResponse extends jspb.Message {
  getMessageIdsList(): Array<string>;
  setMessageIdsList(value: Array<string>): PublishResponse;
  clearMessageIdsList(): PublishResponse;
  addMessageIds(value: string, index?: number): PublishResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishResponse): PublishResponse.AsObject;
  static serializeBinaryToWriter(message: PublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishResponse;
  static deserializeBinaryFromReader(message: PublishResponse, reader: jspb.BinaryReader): PublishResponse;
}

export namespace PublishResponse {
  export type AsObject = {
    messageIdsList: Array<string>,
  }
}

export class ListTopicsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): ListTopicsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTopicsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTopicsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicsRequest): ListTopicsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTopicsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicsRequest;
  static deserializeBinaryFromReader(message: ListTopicsRequest, reader: jspb.BinaryReader): ListTopicsRequest;
}

export namespace ListTopicsRequest {
  export type AsObject = {
    project: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTopicsResponse extends jspb.Message {
  getTopicsList(): Array<Topic>;
  setTopicsList(value: Array<Topic>): ListTopicsResponse;
  clearTopicsList(): ListTopicsResponse;
  addTopics(value?: Topic, index?: number): Topic;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTopicsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicsResponse): ListTopicsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTopicsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicsResponse;
  static deserializeBinaryFromReader(message: ListTopicsResponse, reader: jspb.BinaryReader): ListTopicsResponse;
}

export namespace ListTopicsResponse {
  export type AsObject = {
    topicsList: Array<Topic.AsObject>,
    nextPageToken: string,
  }
}

export class ListTopicSubscriptionsRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): ListTopicSubscriptionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTopicSubscriptionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTopicSubscriptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSubscriptionsRequest): ListTopicSubscriptionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTopicSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListTopicSubscriptionsRequest, reader: jspb.BinaryReader): ListTopicSubscriptionsRequest;
}

export namespace ListTopicSubscriptionsRequest {
  export type AsObject = {
    topic: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTopicSubscriptionsResponse extends jspb.Message {
  getSubscriptionsList(): Array<string>;
  setSubscriptionsList(value: Array<string>): ListTopicSubscriptionsResponse;
  clearSubscriptionsList(): ListTopicSubscriptionsResponse;
  addSubscriptions(value: string, index?: number): ListTopicSubscriptionsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTopicSubscriptionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTopicSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTopicSubscriptionsResponse): ListTopicSubscriptionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTopicSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTopicSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListTopicSubscriptionsResponse, reader: jspb.BinaryReader): ListTopicSubscriptionsResponse;
}

export namespace ListTopicSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<string>,
    nextPageToken: string,
  }
}

export class DeleteTopicRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): DeleteTopicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTopicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTopicRequest): DeleteTopicRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTopicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTopicRequest;
  static deserializeBinaryFromReader(message: DeleteTopicRequest, reader: jspb.BinaryReader): DeleteTopicRequest;
}

export namespace DeleteTopicRequest {
  export type AsObject = {
    topic: string,
  }
}

export class Subscription extends jspb.Message {
  getName(): string;
  setName(value: string): Subscription;

  getTopic(): string;
  setTopic(value: string): Subscription;

  getPushConfig(): PushConfig | undefined;
  setPushConfig(value?: PushConfig): Subscription;
  hasPushConfig(): boolean;
  clearPushConfig(): Subscription;

  getAckDeadlineSeconds(): number;
  setAckDeadlineSeconds(value: number): Subscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    name: string,
    topic: string,
    pushConfig?: PushConfig.AsObject,
    ackDeadlineSeconds: number,
  }
}

export class PushConfig extends jspb.Message {
  getPushEndpoint(): string;
  setPushEndpoint(value: string): PushConfig;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): PushConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PushConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PushConfig): PushConfig.AsObject;
  static serializeBinaryToWriter(message: PushConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PushConfig;
  static deserializeBinaryFromReader(message: PushConfig, reader: jspb.BinaryReader): PushConfig;
}

export namespace PushConfig {
  export type AsObject = {
    pushEndpoint: string,
    attributesMap: Array<[string, string]>,
  }
}

export class ReceivedMessage extends jspb.Message {
  getAckId(): string;
  setAckId(value: string): ReceivedMessage;

  getMessage(): PubsubMessage | undefined;
  setMessage(value?: PubsubMessage): ReceivedMessage;
  hasMessage(): boolean;
  clearMessage(): ReceivedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceivedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ReceivedMessage): ReceivedMessage.AsObject;
  static serializeBinaryToWriter(message: ReceivedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceivedMessage;
  static deserializeBinaryFromReader(message: ReceivedMessage, reader: jspb.BinaryReader): ReceivedMessage;
}

export namespace ReceivedMessage {
  export type AsObject = {
    ackId: string,
    message?: PubsubMessage.AsObject,
  }
}

export class GetSubscriptionRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): GetSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionRequest): GetSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: GetSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionRequest;
  static deserializeBinaryFromReader(message: GetSubscriptionRequest, reader: jspb.BinaryReader): GetSubscriptionRequest;
}

export namespace GetSubscriptionRequest {
  export type AsObject = {
    subscription: string,
  }
}

export class ListSubscriptionsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): ListSubscriptionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListSubscriptionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListSubscriptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsRequest): ListSubscriptionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsRequest;
  static deserializeBinaryFromReader(message: ListSubscriptionsRequest, reader: jspb.BinaryReader): ListSubscriptionsRequest;
}

export namespace ListSubscriptionsRequest {
  export type AsObject = {
    project: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSubscriptionsResponse extends jspb.Message {
  getSubscriptionsList(): Array<Subscription>;
  setSubscriptionsList(value: Array<Subscription>): ListSubscriptionsResponse;
  clearSubscriptionsList(): ListSubscriptionsResponse;
  addSubscriptions(value?: Subscription, index?: number): Subscription;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSubscriptionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSubscriptionsResponse): ListSubscriptionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSubscriptionsResponse;
  static deserializeBinaryFromReader(message: ListSubscriptionsResponse, reader: jspb.BinaryReader): ListSubscriptionsResponse;
}

export namespace ListSubscriptionsResponse {
  export type AsObject = {
    subscriptionsList: Array<Subscription.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteSubscriptionRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): DeleteSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSubscriptionRequest): DeleteSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSubscriptionRequest;
  static deserializeBinaryFromReader(message: DeleteSubscriptionRequest, reader: jspb.BinaryReader): DeleteSubscriptionRequest;
}

export namespace DeleteSubscriptionRequest {
  export type AsObject = {
    subscription: string,
  }
}

export class ModifyPushConfigRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): ModifyPushConfigRequest;

  getPushConfig(): PushConfig | undefined;
  setPushConfig(value?: PushConfig): ModifyPushConfigRequest;
  hasPushConfig(): boolean;
  clearPushConfig(): ModifyPushConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyPushConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyPushConfigRequest): ModifyPushConfigRequest.AsObject;
  static serializeBinaryToWriter(message: ModifyPushConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyPushConfigRequest;
  static deserializeBinaryFromReader(message: ModifyPushConfigRequest, reader: jspb.BinaryReader): ModifyPushConfigRequest;
}

export namespace ModifyPushConfigRequest {
  export type AsObject = {
    subscription: string,
    pushConfig?: PushConfig.AsObject,
  }
}

export class PullRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): PullRequest;

  getReturnImmediately(): boolean;
  setReturnImmediately(value: boolean): PullRequest;

  getMaxMessages(): number;
  setMaxMessages(value: number): PullRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PullRequest): PullRequest.AsObject;
  static serializeBinaryToWriter(message: PullRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullRequest;
  static deserializeBinaryFromReader(message: PullRequest, reader: jspb.BinaryReader): PullRequest;
}

export namespace PullRequest {
  export type AsObject = {
    subscription: string,
    returnImmediately: boolean,
    maxMessages: number,
  }
}

export class PullResponse extends jspb.Message {
  getReceivedMessagesList(): Array<ReceivedMessage>;
  setReceivedMessagesList(value: Array<ReceivedMessage>): PullResponse;
  clearReceivedMessagesList(): PullResponse;
  addReceivedMessages(value?: ReceivedMessage, index?: number): ReceivedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PullResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PullResponse): PullResponse.AsObject;
  static serializeBinaryToWriter(message: PullResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PullResponse;
  static deserializeBinaryFromReader(message: PullResponse, reader: jspb.BinaryReader): PullResponse;
}

export namespace PullResponse {
  export type AsObject = {
    receivedMessagesList: Array<ReceivedMessage.AsObject>,
  }
}

export class ModifyAckDeadlineRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): ModifyAckDeadlineRequest;

  getAckId(): string;
  setAckId(value: string): ModifyAckDeadlineRequest;

  getAckDeadlineSeconds(): number;
  setAckDeadlineSeconds(value: number): ModifyAckDeadlineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyAckDeadlineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyAckDeadlineRequest): ModifyAckDeadlineRequest.AsObject;
  static serializeBinaryToWriter(message: ModifyAckDeadlineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyAckDeadlineRequest;
  static deserializeBinaryFromReader(message: ModifyAckDeadlineRequest, reader: jspb.BinaryReader): ModifyAckDeadlineRequest;
}

export namespace ModifyAckDeadlineRequest {
  export type AsObject = {
    subscription: string,
    ackId: string,
    ackDeadlineSeconds: number,
  }
}

export class AcknowledgeRequest extends jspb.Message {
  getSubscription(): string;
  setSubscription(value: string): AcknowledgeRequest;

  getAckIdsList(): Array<string>;
  setAckIdsList(value: Array<string>): AcknowledgeRequest;
  clearAckIdsList(): AcknowledgeRequest;
  addAckIds(value: string, index?: number): AcknowledgeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcknowledgeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcknowledgeRequest): AcknowledgeRequest.AsObject;
  static serializeBinaryToWriter(message: AcknowledgeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcknowledgeRequest;
  static deserializeBinaryFromReader(message: AcknowledgeRequest, reader: jspb.BinaryReader): AcknowledgeRequest;
}

export namespace AcknowledgeRequest {
  export type AsObject = {
    subscription: string,
    ackIdsList: Array<string>,
  }
}

