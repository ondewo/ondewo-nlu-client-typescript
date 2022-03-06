/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.clouderrorreporting.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_devtools_clouderrorreporting_v1beta1_common_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/common_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.clouderrorreporting = {};
proto.google.devtools.clouderrorreporting.v1beta1 = require('./error_stats_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorStatsServiceClient =
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
proto.google.devtools.clouderrorreporting.v1beta1.ErrorStatsServicePromiseClient =
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
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse>}
 */
const methodDescriptor_ErrorStatsService_ListGroupStats = new grpc.web.MethodDescriptor(
  '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListGroupStats',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest,
  proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse>}
 */
const methodInfo_ErrorStatsService_ListGroupStats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorStatsServiceClient.prototype.listGroupStats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListGroupStats',
      request,
      metadata || {},
      methodDescriptor_ErrorStatsService_ListGroupStats,
      callback);
};


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouderrorreporting.v1beta1.ListGroupStatsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorStatsServicePromiseClient.prototype.listGroupStats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListGroupStats',
      request,
      metadata || {},
      methodDescriptor_ErrorStatsService_ListGroupStats);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ListEventsRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ListEventsResponse>}
 */
const methodDescriptor_ErrorStatsService_ListEvents = new grpc.web.MethodDescriptor(
  '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListEvents',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouderrorreporting.v1beta1.ListEventsRequest,
  proto.google.devtools.clouderrorreporting.v1beta1.ListEventsResponse,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ListEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouderrorreporting.v1beta1.ListEventsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ListEventsRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ListEventsResponse>}
 */
const methodInfo_ErrorStatsService_ListEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouderrorreporting.v1beta1.ListEventsResponse,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ListEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouderrorreporting.v1beta1.ListEventsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ListEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouderrorreporting.v1beta1.ListEventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouderrorreporting.v1beta1.ListEventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorStatsServiceClient.prototype.listEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListEvents',
      request,
      metadata || {},
      methodDescriptor_ErrorStatsService_ListEvents,
      callback);
};


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ListEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouderrorreporting.v1beta1.ListEventsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorStatsServicePromiseClient.prototype.listEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/ListEvents',
      request,
      metadata || {},
      methodDescriptor_ErrorStatsService_ListEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse>}
 */
const methodDescriptor_ErrorStatsService_DeleteEvents = new grpc.web.MethodDescriptor(
  '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/DeleteEvents',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsRequest,
  proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse>}
 */
const methodInfo_ErrorStatsService_DeleteEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorStatsServiceClient.prototype.deleteEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/DeleteEvents',
      request,
      metadata || {},
      methodDescriptor_ErrorStatsService_DeleteEvents,
      callback);
};


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouderrorreporting.v1beta1.DeleteEventsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouderrorreporting.v1beta1.ErrorStatsServicePromiseClient.prototype.deleteEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ErrorStatsService/DeleteEvents',
      request,
      metadata || {},
      methodDescriptor_ErrorStatsService_DeleteEvents);
};


module.exports = proto.google.devtools.clouderrorreporting.v1beta1;

