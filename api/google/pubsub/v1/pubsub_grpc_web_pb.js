/**
 * @fileoverview gRPC-Web generated client stub for google.pubsub.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.pubsub = {};
proto.google.pubsub.v1 = require('./pubsub_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.pubsub.v1.PublisherClient =
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
proto.google.pubsub.v1.PublisherPromiseClient =
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
 *   !proto.google.pubsub.v1.Topic,
 *   !proto.google.pubsub.v1.Topic>}
 */
const methodDescriptor_Publisher_CreateTopic = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Publisher/CreateTopic',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.Topic,
  proto.google.pubsub.v1.Topic,
  /**
   * @param {!proto.google.pubsub.v1.Topic} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Topic.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.Topic,
 *   !proto.google.pubsub.v1.Topic>}
 */
const methodInfo_Publisher_CreateTopic = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.Topic,
  /**
   * @param {!proto.google.pubsub.v1.Topic} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Topic.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.Topic} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.Topic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.Topic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.PublisherClient.prototype.createTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/CreateTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_CreateTopic,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.Topic} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.Topic>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.PublisherPromiseClient.prototype.createTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/CreateTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_CreateTopic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.UpdateTopicRequest,
 *   !proto.google.pubsub.v1.Topic>}
 */
const methodDescriptor_Publisher_UpdateTopic = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Publisher/UpdateTopic',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.UpdateTopicRequest,
  proto.google.pubsub.v1.Topic,
  /**
   * @param {!proto.google.pubsub.v1.UpdateTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Topic.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.UpdateTopicRequest,
 *   !proto.google.pubsub.v1.Topic>}
 */
const methodInfo_Publisher_UpdateTopic = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.Topic,
  /**
   * @param {!proto.google.pubsub.v1.UpdateTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Topic.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.UpdateTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.Topic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.Topic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.PublisherClient.prototype.updateTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/UpdateTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_UpdateTopic,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.UpdateTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.Topic>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.PublisherPromiseClient.prototype.updateTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/UpdateTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_UpdateTopic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.PublishRequest,
 *   !proto.google.pubsub.v1.PublishResponse>}
 */
const methodDescriptor_Publisher_Publish = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Publisher/Publish',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.PublishRequest,
  proto.google.pubsub.v1.PublishResponse,
  /**
   * @param {!proto.google.pubsub.v1.PublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.PublishResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.PublishRequest,
 *   !proto.google.pubsub.v1.PublishResponse>}
 */
const methodInfo_Publisher_Publish = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.PublishResponse,
  /**
   * @param {!proto.google.pubsub.v1.PublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.PublishResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.PublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.PublishResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.PublishResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.PublisherClient.prototype.publish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/Publish',
      request,
      metadata || {},
      methodDescriptor_Publisher_Publish,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.PublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.PublishResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.PublisherPromiseClient.prototype.publish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/Publish',
      request,
      metadata || {},
      methodDescriptor_Publisher_Publish);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.GetTopicRequest,
 *   !proto.google.pubsub.v1.Topic>}
 */
const methodDescriptor_Publisher_GetTopic = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Publisher/GetTopic',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.GetTopicRequest,
  proto.google.pubsub.v1.Topic,
  /**
   * @param {!proto.google.pubsub.v1.GetTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Topic.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.GetTopicRequest,
 *   !proto.google.pubsub.v1.Topic>}
 */
const methodInfo_Publisher_GetTopic = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.Topic,
  /**
   * @param {!proto.google.pubsub.v1.GetTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Topic.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.GetTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.Topic)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.Topic>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.PublisherClient.prototype.getTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/GetTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_GetTopic,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.GetTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.Topic>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.PublisherPromiseClient.prototype.getTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/GetTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_GetTopic);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.ListTopicsRequest,
 *   !proto.google.pubsub.v1.ListTopicsResponse>}
 */
const methodDescriptor_Publisher_ListTopics = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Publisher/ListTopics',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.ListTopicsRequest,
  proto.google.pubsub.v1.ListTopicsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListTopicsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListTopicsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.ListTopicsRequest,
 *   !proto.google.pubsub.v1.ListTopicsResponse>}
 */
const methodInfo_Publisher_ListTopics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.ListTopicsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListTopicsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListTopicsResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.ListTopicsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.ListTopicsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.ListTopicsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.PublisherClient.prototype.listTopics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/ListTopics',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopics,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.ListTopicsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.ListTopicsResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.PublisherPromiseClient.prototype.listTopics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/ListTopics',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.ListTopicSubscriptionsRequest,
 *   !proto.google.pubsub.v1.ListTopicSubscriptionsResponse>}
 */
const methodDescriptor_Publisher_ListTopicSubscriptions = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Publisher/ListTopicSubscriptions',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.ListTopicSubscriptionsRequest,
  proto.google.pubsub.v1.ListTopicSubscriptionsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListTopicSubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListTopicSubscriptionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.ListTopicSubscriptionsRequest,
 *   !proto.google.pubsub.v1.ListTopicSubscriptionsResponse>}
 */
const methodInfo_Publisher_ListTopicSubscriptions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.ListTopicSubscriptionsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListTopicSubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListTopicSubscriptionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.ListTopicSubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.ListTopicSubscriptionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.ListTopicSubscriptionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.PublisherClient.prototype.listTopicSubscriptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/ListTopicSubscriptions',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopicSubscriptions,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.ListTopicSubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.ListTopicSubscriptionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.PublisherPromiseClient.prototype.listTopicSubscriptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/ListTopicSubscriptions',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopicSubscriptions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.ListTopicSnapshotsRequest,
 *   !proto.google.pubsub.v1.ListTopicSnapshotsResponse>}
 */
const methodDescriptor_Publisher_ListTopicSnapshots = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Publisher/ListTopicSnapshots',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.ListTopicSnapshotsRequest,
  proto.google.pubsub.v1.ListTopicSnapshotsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListTopicSnapshotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListTopicSnapshotsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.ListTopicSnapshotsRequest,
 *   !proto.google.pubsub.v1.ListTopicSnapshotsResponse>}
 */
const methodInfo_Publisher_ListTopicSnapshots = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.ListTopicSnapshotsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListTopicSnapshotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListTopicSnapshotsResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.ListTopicSnapshotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.ListTopicSnapshotsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.ListTopicSnapshotsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.PublisherClient.prototype.listTopicSnapshots =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/ListTopicSnapshots',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopicSnapshots,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.ListTopicSnapshotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.ListTopicSnapshotsResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.PublisherPromiseClient.prototype.listTopicSnapshots =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/ListTopicSnapshots',
      request,
      metadata || {},
      methodDescriptor_Publisher_ListTopicSnapshots);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.DeleteTopicRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Publisher_DeleteTopic = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Publisher/DeleteTopic',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.DeleteTopicRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.DeleteTopicRequest} request
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
 *   !proto.google.pubsub.v1.DeleteTopicRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Publisher_DeleteTopic = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.DeleteTopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.DeleteTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.PublisherClient.prototype.deleteTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/DeleteTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_DeleteTopic,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.DeleteTopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.PublisherPromiseClient.prototype.deleteTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Publisher/DeleteTopic',
      request,
      metadata || {},
      methodDescriptor_Publisher_DeleteTopic);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.pubsub.v1.SubscriberClient =
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
proto.google.pubsub.v1.SubscriberPromiseClient =
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
 *   !proto.google.pubsub.v1.Subscription,
 *   !proto.google.pubsub.v1.Subscription>}
 */
const methodDescriptor_Subscriber_CreateSubscription = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/CreateSubscription',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.Subscription,
  proto.google.pubsub.v1.Subscription,
  /**
   * @param {!proto.google.pubsub.v1.Subscription} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Subscription.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.Subscription,
 *   !proto.google.pubsub.v1.Subscription>}
 */
const methodInfo_Subscriber_CreateSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.Subscription,
  /**
   * @param {!proto.google.pubsub.v1.Subscription} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Subscription.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.Subscription} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.Subscription)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.Subscription>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.createSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/CreateSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_CreateSubscription,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.Subscription} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.Subscription>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.createSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/CreateSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_CreateSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.GetSubscriptionRequest,
 *   !proto.google.pubsub.v1.Subscription>}
 */
const methodDescriptor_Subscriber_GetSubscription = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/GetSubscription',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.GetSubscriptionRequest,
  proto.google.pubsub.v1.Subscription,
  /**
   * @param {!proto.google.pubsub.v1.GetSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Subscription.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.GetSubscriptionRequest,
 *   !proto.google.pubsub.v1.Subscription>}
 */
const methodInfo_Subscriber_GetSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.Subscription,
  /**
   * @param {!proto.google.pubsub.v1.GetSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Subscription.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.GetSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.Subscription)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.Subscription>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.getSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/GetSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_GetSubscription,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.GetSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.Subscription>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.getSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/GetSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_GetSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.UpdateSubscriptionRequest,
 *   !proto.google.pubsub.v1.Subscription>}
 */
const methodDescriptor_Subscriber_UpdateSubscription = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/UpdateSubscription',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.UpdateSubscriptionRequest,
  proto.google.pubsub.v1.Subscription,
  /**
   * @param {!proto.google.pubsub.v1.UpdateSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Subscription.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.UpdateSubscriptionRequest,
 *   !proto.google.pubsub.v1.Subscription>}
 */
const methodInfo_Subscriber_UpdateSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.Subscription,
  /**
   * @param {!proto.google.pubsub.v1.UpdateSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Subscription.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.UpdateSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.Subscription)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.Subscription>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.updateSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/UpdateSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_UpdateSubscription,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.UpdateSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.Subscription>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.updateSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/UpdateSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_UpdateSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.ListSubscriptionsRequest,
 *   !proto.google.pubsub.v1.ListSubscriptionsResponse>}
 */
const methodDescriptor_Subscriber_ListSubscriptions = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/ListSubscriptions',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.ListSubscriptionsRequest,
  proto.google.pubsub.v1.ListSubscriptionsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListSubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListSubscriptionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.ListSubscriptionsRequest,
 *   !proto.google.pubsub.v1.ListSubscriptionsResponse>}
 */
const methodInfo_Subscriber_ListSubscriptions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.ListSubscriptionsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListSubscriptionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListSubscriptionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.ListSubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.ListSubscriptionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.ListSubscriptionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.listSubscriptions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/ListSubscriptions',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ListSubscriptions,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.ListSubscriptionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.ListSubscriptionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.listSubscriptions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/ListSubscriptions',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ListSubscriptions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.DeleteSubscriptionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Subscriber_DeleteSubscription = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/DeleteSubscription',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.DeleteSubscriptionRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.DeleteSubscriptionRequest} request
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
 *   !proto.google.pubsub.v1.DeleteSubscriptionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Subscriber_DeleteSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.DeleteSubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.DeleteSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.deleteSubscription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/DeleteSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_DeleteSubscription,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.DeleteSubscriptionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.deleteSubscription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/DeleteSubscription',
      request,
      metadata || {},
      methodDescriptor_Subscriber_DeleteSubscription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.ModifyAckDeadlineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Subscriber_ModifyAckDeadline = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/ModifyAckDeadline',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.ModifyAckDeadlineRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.ModifyAckDeadlineRequest} request
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
 *   !proto.google.pubsub.v1.ModifyAckDeadlineRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Subscriber_ModifyAckDeadline = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.ModifyAckDeadlineRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.ModifyAckDeadlineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.modifyAckDeadline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/ModifyAckDeadline',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ModifyAckDeadline,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.ModifyAckDeadlineRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.modifyAckDeadline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/ModifyAckDeadline',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ModifyAckDeadline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.AcknowledgeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Subscriber_Acknowledge = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/Acknowledge',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.AcknowledgeRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.AcknowledgeRequest} request
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
 *   !proto.google.pubsub.v1.AcknowledgeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Subscriber_Acknowledge = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.AcknowledgeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.AcknowledgeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.acknowledge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/Acknowledge',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Acknowledge,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.AcknowledgeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.acknowledge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/Acknowledge',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Acknowledge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.PullRequest,
 *   !proto.google.pubsub.v1.PullResponse>}
 */
const methodDescriptor_Subscriber_Pull = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/Pull',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.PullRequest,
  proto.google.pubsub.v1.PullResponse,
  /**
   * @param {!proto.google.pubsub.v1.PullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.PullResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.PullRequest,
 *   !proto.google.pubsub.v1.PullResponse>}
 */
const methodInfo_Subscriber_Pull = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.PullResponse,
  /**
   * @param {!proto.google.pubsub.v1.PullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.PullResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.PullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.PullResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.PullResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.pull =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/Pull',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Pull,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.PullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.PullResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.pull =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/Pull',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Pull);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.ModifyPushConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Subscriber_ModifyPushConfig = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/ModifyPushConfig',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.ModifyPushConfigRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.ModifyPushConfigRequest} request
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
 *   !proto.google.pubsub.v1.ModifyPushConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Subscriber_ModifyPushConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.ModifyPushConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.ModifyPushConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.modifyPushConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/ModifyPushConfig',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ModifyPushConfig,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.ModifyPushConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.modifyPushConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/ModifyPushConfig',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ModifyPushConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.GetSnapshotRequest,
 *   !proto.google.pubsub.v1.Snapshot>}
 */
const methodDescriptor_Subscriber_GetSnapshot = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/GetSnapshot',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.GetSnapshotRequest,
  proto.google.pubsub.v1.Snapshot,
  /**
   * @param {!proto.google.pubsub.v1.GetSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Snapshot.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.GetSnapshotRequest,
 *   !proto.google.pubsub.v1.Snapshot>}
 */
const methodInfo_Subscriber_GetSnapshot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.Snapshot,
  /**
   * @param {!proto.google.pubsub.v1.GetSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Snapshot.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.GetSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.Snapshot)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.Snapshot>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.getSnapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/GetSnapshot',
      request,
      metadata || {},
      methodDescriptor_Subscriber_GetSnapshot,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.GetSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.Snapshot>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.getSnapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/GetSnapshot',
      request,
      metadata || {},
      methodDescriptor_Subscriber_GetSnapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.ListSnapshotsRequest,
 *   !proto.google.pubsub.v1.ListSnapshotsResponse>}
 */
const methodDescriptor_Subscriber_ListSnapshots = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/ListSnapshots',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.ListSnapshotsRequest,
  proto.google.pubsub.v1.ListSnapshotsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListSnapshotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListSnapshotsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.ListSnapshotsRequest,
 *   !proto.google.pubsub.v1.ListSnapshotsResponse>}
 */
const methodInfo_Subscriber_ListSnapshots = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.ListSnapshotsResponse,
  /**
   * @param {!proto.google.pubsub.v1.ListSnapshotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.ListSnapshotsResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.ListSnapshotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.ListSnapshotsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.ListSnapshotsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.listSnapshots =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/ListSnapshots',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ListSnapshots,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.ListSnapshotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.ListSnapshotsResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.listSnapshots =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/ListSnapshots',
      request,
      metadata || {},
      methodDescriptor_Subscriber_ListSnapshots);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.CreateSnapshotRequest,
 *   !proto.google.pubsub.v1.Snapshot>}
 */
const methodDescriptor_Subscriber_CreateSnapshot = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/CreateSnapshot',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.CreateSnapshotRequest,
  proto.google.pubsub.v1.Snapshot,
  /**
   * @param {!proto.google.pubsub.v1.CreateSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Snapshot.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.CreateSnapshotRequest,
 *   !proto.google.pubsub.v1.Snapshot>}
 */
const methodInfo_Subscriber_CreateSnapshot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.Snapshot,
  /**
   * @param {!proto.google.pubsub.v1.CreateSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Snapshot.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.CreateSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.Snapshot)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.Snapshot>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.createSnapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/CreateSnapshot',
      request,
      metadata || {},
      methodDescriptor_Subscriber_CreateSnapshot,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.CreateSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.Snapshot>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.createSnapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/CreateSnapshot',
      request,
      metadata || {},
      methodDescriptor_Subscriber_CreateSnapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.UpdateSnapshotRequest,
 *   !proto.google.pubsub.v1.Snapshot>}
 */
const methodDescriptor_Subscriber_UpdateSnapshot = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/UpdateSnapshot',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.UpdateSnapshotRequest,
  proto.google.pubsub.v1.Snapshot,
  /**
   * @param {!proto.google.pubsub.v1.UpdateSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Snapshot.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.UpdateSnapshotRequest,
 *   !proto.google.pubsub.v1.Snapshot>}
 */
const methodInfo_Subscriber_UpdateSnapshot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.Snapshot,
  /**
   * @param {!proto.google.pubsub.v1.UpdateSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.Snapshot.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.UpdateSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.Snapshot)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.Snapshot>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.updateSnapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/UpdateSnapshot',
      request,
      metadata || {},
      methodDescriptor_Subscriber_UpdateSnapshot,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.UpdateSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.Snapshot>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.updateSnapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/UpdateSnapshot',
      request,
      metadata || {},
      methodDescriptor_Subscriber_UpdateSnapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.DeleteSnapshotRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Subscriber_DeleteSnapshot = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/DeleteSnapshot',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.DeleteSnapshotRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.DeleteSnapshotRequest} request
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
 *   !proto.google.pubsub.v1.DeleteSnapshotRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Subscriber_DeleteSnapshot = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.pubsub.v1.DeleteSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.DeleteSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.deleteSnapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/DeleteSnapshot',
      request,
      metadata || {},
      methodDescriptor_Subscriber_DeleteSnapshot,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.DeleteSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.deleteSnapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/DeleteSnapshot',
      request,
      metadata || {},
      methodDescriptor_Subscriber_DeleteSnapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.pubsub.v1.SeekRequest,
 *   !proto.google.pubsub.v1.SeekResponse>}
 */
const methodDescriptor_Subscriber_Seek = new grpc.web.MethodDescriptor(
  '/google.pubsub.v1.Subscriber/Seek',
  grpc.web.MethodType.UNARY,
  proto.google.pubsub.v1.SeekRequest,
  proto.google.pubsub.v1.SeekResponse,
  /**
   * @param {!proto.google.pubsub.v1.SeekRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.SeekResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.pubsub.v1.SeekRequest,
 *   !proto.google.pubsub.v1.SeekResponse>}
 */
const methodInfo_Subscriber_Seek = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.pubsub.v1.SeekResponse,
  /**
   * @param {!proto.google.pubsub.v1.SeekRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.pubsub.v1.SeekResponse.deserializeBinary
);


/**
 * @param {!proto.google.pubsub.v1.SeekRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.pubsub.v1.SeekResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.pubsub.v1.SeekResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.pubsub.v1.SubscriberClient.prototype.seek =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/Seek',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Seek,
      callback);
};


/**
 * @param {!proto.google.pubsub.v1.SeekRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.pubsub.v1.SeekResponse>}
 *     Promise that resolves to the response
 */
proto.google.pubsub.v1.SubscriberPromiseClient.prototype.seek =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.pubsub.v1.Subscriber/Seek',
      request,
      metadata || {},
      methodDescriptor_Subscriber_Seek);
};


module.exports = proto.google.pubsub.v1;

