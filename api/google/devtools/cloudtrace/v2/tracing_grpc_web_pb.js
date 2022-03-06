/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.cloudtrace.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_devtools_cloudtrace_v2_trace_pb = require('../../../../google/devtools/cloudtrace/v2/trace_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.cloudtrace = {};
proto.google.devtools.cloudtrace.v2 = require('./tracing_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.cloudtrace.v2.TraceServiceClient =
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
proto.google.devtools.cloudtrace.v2.TraceServicePromiseClient =
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
 *   !proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_TraceService_BatchWriteSpans = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudtrace.v2.TraceService/BatchWriteSpans',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest} request
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
 *   !proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_TraceService_BatchWriteSpans = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudtrace.v2.TraceServiceClient.prototype.batchWriteSpans =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudtrace.v2.TraceService/BatchWriteSpans',
      request,
      metadata || {},
      methodDescriptor_TraceService_BatchWriteSpans,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudtrace.v2.BatchWriteSpansRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudtrace.v2.TraceServicePromiseClient.prototype.batchWriteSpans =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudtrace.v2.TraceService/BatchWriteSpans',
      request,
      metadata || {},
      methodDescriptor_TraceService_BatchWriteSpans);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudtrace.v2.Span,
 *   !proto.google.devtools.cloudtrace.v2.Span>}
 */
const methodDescriptor_TraceService_CreateSpan = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudtrace.v2.TraceService/CreateSpan',
  grpc.web.MethodType.UNARY,
  google_devtools_cloudtrace_v2_trace_pb.Span,
  google_devtools_cloudtrace_v2_trace_pb.Span,
  /**
   * @param {!proto.google.devtools.cloudtrace.v2.Span} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_cloudtrace_v2_trace_pb.Span.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudtrace.v2.Span,
 *   !proto.google.devtools.cloudtrace.v2.Span>}
 */
const methodInfo_TraceService_CreateSpan = new grpc.web.AbstractClientBase.MethodInfo(
  google_devtools_cloudtrace_v2_trace_pb.Span,
  /**
   * @param {!proto.google.devtools.cloudtrace.v2.Span} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_devtools_cloudtrace_v2_trace_pb.Span.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudtrace.v2.Span} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudtrace.v2.Span)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudtrace.v2.Span>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudtrace.v2.TraceServiceClient.prototype.createSpan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudtrace.v2.TraceService/CreateSpan',
      request,
      metadata || {},
      methodDescriptor_TraceService_CreateSpan,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudtrace.v2.Span} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudtrace.v2.Span>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudtrace.v2.TraceServicePromiseClient.prototype.createSpan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudtrace.v2.TraceService/CreateSpan',
      request,
      metadata || {},
      methodDescriptor_TraceService_CreateSpan);
};


module.exports = proto.google.devtools.cloudtrace.v2;

