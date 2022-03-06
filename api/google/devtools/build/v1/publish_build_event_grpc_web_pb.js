/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.build.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_devtools_build_v1_build_events_pb = require('../../../../google/devtools/build/v1/build_events_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.build = {};
proto.google.devtools.build.v1 = require('./publish_build_event_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.build.v1.PublishBuildEventClient =
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
proto.google.devtools.build.v1.PublishBuildEventPromiseClient =
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
 *   !proto.google.devtools.build.v1.PublishLifecycleEventRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PublishBuildEvent_PublishLifecycleEvent = new grpc.web.MethodDescriptor(
  '/google.devtools.build.v1.PublishBuildEvent/PublishLifecycleEvent',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.build.v1.PublishLifecycleEventRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.build.v1.PublishLifecycleEventRequest} request
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
 *   !proto.google.devtools.build.v1.PublishLifecycleEventRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PublishBuildEvent_PublishLifecycleEvent = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.build.v1.PublishLifecycleEventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.devtools.build.v1.PublishLifecycleEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.build.v1.PublishBuildEventClient.prototype.publishLifecycleEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.build.v1.PublishBuildEvent/PublishLifecycleEvent',
      request,
      metadata || {},
      methodDescriptor_PublishBuildEvent_PublishLifecycleEvent,
      callback);
};


/**
 * @param {!proto.google.devtools.build.v1.PublishLifecycleEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.devtools.build.v1.PublishBuildEventPromiseClient.prototype.publishLifecycleEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.build.v1.PublishBuildEvent/PublishLifecycleEvent',
      request,
      metadata || {},
      methodDescriptor_PublishBuildEvent_PublishLifecycleEvent);
};


module.exports = proto.google.devtools.build.v1;

