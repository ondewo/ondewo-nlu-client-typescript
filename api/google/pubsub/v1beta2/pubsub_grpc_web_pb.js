/**
 * @fileoverview gRPC-Web generated client stub for google.pubsub.v1beta2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.pubsub = {};
proto.google.pubsub.v1beta2 = require('./pubsub_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.pubsub.v1beta2.SubscriberClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.pubsub.v1beta2.SubscriberPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.Subscription,
 *   !proto.google.pubsub.v1beta2.Subscription>}
 */
const methodDescriptor_Subscriber_CreateSubscription = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Subscriber/CreateSubscription',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.Subscription,
  proto.google.pubsub.v1beta2.Subscription,
  /**
   * @param {!proto.google.pubsub.v1beta2.Subscription} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.Subscription.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.Subscription,
 *   !proto.google.pubsub.v1beta2.Subscription>}
 */
const methodInfo_Subscriber_CreateSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1beta2.Subscription,
  /**
   * @param {!proto.google.pubsub.v1beta2.Subscription} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.Subscription.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.Subscription} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1beta2.Subscription)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1beta2.Subscription>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.SubscriberClient.prototype.createSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/CreateSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_CreateSubscription,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.Subscription} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1beta2.Subscription>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.SubscriberPromiseClient.prototype.createSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/CreateSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_CreateSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.GetSubscriptionRequest,
 *   !proto.google.pubsub.v1beta2.Subscription>}
 */
const methodDescriptor_Subscriber_GetSubscription = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Subscriber/GetSubscription',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.GetSubscriptionRequest,
  proto.google.pubsub.v1beta2.Subscription,
  /**
   * @param {!proto.google.pubsub.v1beta2.GetSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.Subscription.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.GetSubscriptionRequest,
 *   !proto.google.pubsub.v1beta2.Subscription>}
 */
const methodInfo_Subscriber_GetSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1beta2.Subscription,
  /**
   * @param {!proto.google.pubsub.v1beta2.GetSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.Subscription.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.GetSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1beta2.Subscription)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1beta2.Subscription>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.SubscriberClient.prototype.getSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/GetSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_GetSubscription,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.GetSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1beta2.Subscription>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.SubscriberPromiseClient.prototype.getSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/GetSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_GetSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.ListSubscriptionsRequest,
 *   !proto.google.pubsub.v1beta2.ListSubscriptionsResponse>}
 */
const methodDescriptor_Subscriber_ListSubscriptions = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Subscriber/ListSubscriptions',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.ListSubscriptionsRequest,
  proto.google.pubsub.v1beta2.ListSubscriptionsResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.ListSubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.ListSubscriptionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.ListSubscriptionsRequest,
 *   !proto.google.pubsub.v1beta2.ListSubscriptionsResponse>}
 */
const methodInfo_Subscriber_ListSubscriptions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1beta2.ListSubscriptionsResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.ListSubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.ListSubscriptionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.ListSubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1beta2.ListSubscriptionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1beta2.ListSubscriptionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.SubscriberClient.prototype.listSubscriptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/ListSubscriptions',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ListSubscriptions,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.ListSubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1beta2.ListSubscriptionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.SubscriberPromiseClient.prototype.listSubscriptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/ListSubscriptions',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ListSubscriptions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.DeleteSubscriptionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Subscriber_DeleteSubscription = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Subscriber/DeleteSubscription',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.DeleteSubscriptionRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.DeleteSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.DeleteSubscriptionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Subscriber_DeleteSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.DeleteSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.DeleteSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.SubscriberClient.prototype.deleteSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/DeleteSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_DeleteSubscription,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.DeleteSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.SubscriberPromiseClient.prototype.deleteSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/DeleteSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_DeleteSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.ModifyAckDeadlineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Subscriber_ModifyAckDeadline = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Subscriber/ModifyAckDeadline',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.ModifyAckDeadlineRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.ModifyAckDeadlineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.ModifyAckDeadlineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Subscriber_ModifyAckDeadline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.ModifyAckDeadlineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.ModifyAckDeadlineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.SubscriberClient.prototype.modifyAckDeadline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/ModifyAckDeadline',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ModifyAckDeadline,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.ModifyAckDeadlineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.SubscriberPromiseClient.prototype.modifyAckDeadline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/ModifyAckDeadline',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ModifyAckDeadline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.AcknowledgeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Subscriber_Acknowledge = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Subscriber/Acknowledge',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.AcknowledgeRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.AcknowledgeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.AcknowledgeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Subscriber_Acknowledge = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.AcknowledgeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.AcknowledgeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.SubscriberClient.prototype.acknowledge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/Acknowledge',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Acknowledge,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.AcknowledgeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.SubscriberPromiseClient.prototype.acknowledge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/Acknowledge',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Acknowledge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.PullRequest,
 *   !proto.google.pubsub.v1beta2.PullResponse>}
 */
const methodDescriptor_Subscriber_Pull = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Subscriber/Pull',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.PullRequest,
  proto.google.pubsub.v1beta2.PullResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.PullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.PullResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.PullRequest,
 *   !proto.google.pubsub.v1beta2.PullResponse>}
 */
const methodInfo_Subscriber_Pull = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1beta2.PullResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.PullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.PullResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.PullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1beta2.PullResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1beta2.PullResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.SubscriberClient.prototype.pull =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/Pull',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Pull,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.PullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1beta2.PullResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.SubscriberPromiseClient.prototype.pull =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/Pull',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Pull);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.ModifyPushConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Subscriber_ModifyPushConfig = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Subscriber/ModifyPushConfig',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.ModifyPushConfigRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.ModifyPushConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.ModifyPushConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Subscriber_ModifyPushConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.ModifyPushConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.ModifyPushConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.SubscriberClient.prototype.modifyPushConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/ModifyPushConfig',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ModifyPushConfig,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.ModifyPushConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.SubscriberPromiseClient.prototype.modifyPushConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Subscriber/ModifyPushConfig',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ModifyPushConfig);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.pubsub.v1beta2.PublisherClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.pubsub.v1beta2.PublisherPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.Topic,
 *   !proto.google.pubsub.v1beta2.Topic>}
 */
const methodDescriptor_Publisher_CreateTopic = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Publisher/CreateTopic',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.Topic,
  proto.google.pubsub.v1beta2.Topic,
  /**
   * @param {!proto.google.pubsub.v1beta2.Topic} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.Topic.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.Topic,
 *   !proto.google.pubsub.v1beta2.Topic>}
 */
const methodInfo_Publisher_CreateTopic = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1beta2.Topic,
  /**
   * @param {!proto.google.pubsub.v1beta2.Topic} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.Topic.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.Topic} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1beta2.Topic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1beta2.Topic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.PublisherClient.prototype.createTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/CreateTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_CreateTopic,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.Topic} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1beta2.Topic>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.PublisherPromiseClient.prototype.createTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/CreateTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_CreateTopic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.PublishRequest,
 *   !proto.google.pubsub.v1beta2.PublishResponse>}
 */
const methodDescriptor_Publisher_Publish = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Publisher/Publish',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.PublishRequest,
  proto.google.pubsub.v1beta2.PublishResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.PublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.PublishResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.PublishRequest,
 *   !proto.google.pubsub.v1beta2.PublishResponse>}
 */
const methodInfo_Publisher_Publish = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1beta2.PublishResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.PublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.PublishResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.PublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1beta2.PublishResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1beta2.PublishResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.PublisherClient.prototype.publish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/Publish',
      request,
      metadata || {},
      methodDescriptor_Publisher_Publish,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.PublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1beta2.PublishResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.PublisherPromiseClient.prototype.publish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/Publish',
      request,
      metadata || {},
      methodDescriptor_Publisher_Publish);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.GetTopicRequest,
 *   !proto.google.pubsub.v1beta2.Topic>}
 */
const methodDescriptor_Publisher_GetTopic = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Publisher/GetTopic',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.GetTopicRequest,
  proto.google.pubsub.v1beta2.Topic,
  /**
   * @param {!proto.google.pubsub.v1beta2.GetTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.Topic.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.GetTopicRequest,
 *   !proto.google.pubsub.v1beta2.Topic>}
 */
const methodInfo_Publisher_GetTopic = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1beta2.Topic,
  /**
   * @param {!proto.google.pubsub.v1beta2.GetTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.Topic.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.GetTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1beta2.Topic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1beta2.Topic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.PublisherClient.prototype.getTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/GetTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_GetTopic,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.GetTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1beta2.Topic>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.PublisherPromiseClient.prototype.getTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/GetTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_GetTopic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.ListTopicsRequest,
 *   !proto.google.pubsub.v1beta2.ListTopicsResponse>}
 */
const methodDescriptor_Publisher_ListTopics = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Publisher/ListTopics',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.ListTopicsRequest,
  proto.google.pubsub.v1beta2.ListTopicsResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.ListTopicsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.ListTopicsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.ListTopicsRequest,
 *   !proto.google.pubsub.v1beta2.ListTopicsResponse>}
 */
const methodInfo_Publisher_ListTopics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1beta2.ListTopicsResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.ListTopicsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.ListTopicsResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.ListTopicsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1beta2.ListTopicsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1beta2.ListTopicsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.PublisherClient.prototype.listTopics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/ListTopics',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopics,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.ListTopicsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1beta2.ListTopicsResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.PublisherPromiseClient.prototype.listTopics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/ListTopics',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.ListTopicSubscriptionsRequest,
 *   !proto.google.pubsub.v1beta2.ListTopicSubscriptionsResponse>}
 */
const methodDescriptor_Publisher_ListTopicSubscriptions = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Publisher/ListTopicSubscriptions',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.ListTopicSubscriptionsRequest,
  proto.google.pubsub.v1beta2.ListTopicSubscriptionsResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.ListTopicSubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.ListTopicSubscriptionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.ListTopicSubscriptionsRequest,
 *   !proto.google.pubsub.v1beta2.ListTopicSubscriptionsResponse>}
 */
const methodInfo_Publisher_ListTopicSubscriptions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1beta2.ListTopicSubscriptionsResponse,
  /**
   * @param {!proto.google.pubsub.v1beta2.ListTopicSubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1beta2.ListTopicSubscriptionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.ListTopicSubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1beta2.ListTopicSubscriptionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1beta2.ListTopicSubscriptionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.PublisherClient.prototype.listTopicSubscriptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/ListTopicSubscriptions',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopicSubscriptions,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.ListTopicSubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1beta2.ListTopicSubscriptionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.PublisherPromiseClient.prototype.listTopicSubscriptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/ListTopicSubscriptions',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopicSubscriptions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1beta2.DeleteTopicRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Publisher_DeleteTopic = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1beta2.Publisher/DeleteTopic',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1beta2.DeleteTopicRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.DeleteTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1beta2.DeleteTopicRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Publisher_DeleteTopic = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1beta2.DeleteTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1beta2.DeleteTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1beta2.PublisherClient.prototype.deleteTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/DeleteTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_DeleteTopic,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1beta2.DeleteTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1beta2.PublisherPromiseClient.prototype.deleteTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1beta2.Publisher/DeleteTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_DeleteTopic);
};


module.exports = proto.google.pubsub.v1beta2;

