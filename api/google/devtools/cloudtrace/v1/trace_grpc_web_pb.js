/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.cloudtrace.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.cloudtrace = {};
proto.google.devtools.cloudtrace.v1 = require('./trace_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.cloudtrace.v1.TraceServiceClient =
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
proto.google.devtools.cloudtrace.v1.TraceServicePromiseClient =
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
 *   !proto.google.devtools.cloudtrace.v1.ListTracesRequest,
 *   !proto.google.devtools.cloudtrace.v1.ListTracesResponse>}
 */
const methodDescriptor_TraceService_ListTraces = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudtrace.v1.TraceService/ListTraces',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudtrace.v1.ListTracesRequest,
  proto.google.devtools.cloudtrace.v1.ListTracesResponse,
  /**
   * @param {!proto.google.devtools.cloudtrace.v1.ListTracesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudtrace.v1.ListTracesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudtrace.v1.ListTracesRequest,
 *   !proto.google.devtools.cloudtrace.v1.ListTracesResponse>}
 */
const methodInfo_TraceService_ListTraces = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudtrace.v1.ListTracesResponse,
  /**
   * @param {!proto.google.devtools.cloudtrace.v1.ListTracesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudtrace.v1.ListTracesResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudtrace.v1.ListTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudtrace.v1.ListTracesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudtrace.v1.ListTracesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudtrace.v1.TraceServiceClient.prototype.listTraces =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudtrace.v1.TraceService/ListTraces',
      request,
      metadata || {},
      methodDescriptor_TraceService_ListTraces,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudtrace.v1.ListTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudtrace.v1.ListTracesResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudtrace.v1.TraceServicePromiseClient.prototype.listTraces =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudtrace.v1.TraceService/ListTraces',
      request,
      metadata || {},
      methodDescriptor_TraceService_ListTraces);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudtrace.v1.GetTraceRequest,
 *   !proto.google.devtools.cloudtrace.v1.Trace>}
 */
const methodDescriptor_TraceService_GetTrace = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudtrace.v1.TraceService/GetTrace',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudtrace.v1.GetTraceRequest,
  proto.google.devtools.cloudtrace.v1.Trace,
  /**
   * @param {!proto.google.devtools.cloudtrace.v1.GetTraceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudtrace.v1.Trace.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.cloudtrace.v1.GetTraceRequest,
 *   !proto.google.devtools.cloudtrace.v1.Trace>}
 */
const methodInfo_TraceService_GetTrace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.cloudtrace.v1.Trace,
  /**
   * @param {!proto.google.devtools.cloudtrace.v1.GetTraceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.cloudtrace.v1.Trace.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudtrace.v1.GetTraceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.cloudtrace.v1.Trace)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.cloudtrace.v1.Trace>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudtrace.v1.TraceServiceClient.prototype.getTrace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudtrace.v1.TraceService/GetTrace',
      request,
      metadata || {},
      methodDescriptor_TraceService_GetTrace,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudtrace.v1.GetTraceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.cloudtrace.v1.Trace>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudtrace.v1.TraceServicePromiseClient.prototype.getTrace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudtrace.v1.TraceService/GetTrace',
      request,
      metadata || {},
      methodDescriptor_TraceService_GetTrace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.cloudtrace.v1.PatchTracesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_TraceService_PatchTraces = new grpc.web.MethodDescriptor(
  '/google.devtools.cloudtrace.v1.TraceService/PatchTraces',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.cloudtrace.v1.PatchTracesRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.cloudtrace.v1.PatchTracesRequest} request
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
 *   !proto.google.devtools.cloudtrace.v1.PatchTracesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_TraceService_PatchTraces = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.cloudtrace.v1.PatchTracesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.devtools.cloudtrace.v1.PatchTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.cloudtrace.v1.TraceServiceClient.prototype.patchTraces =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.cloudtrace.v1.TraceService/PatchTraces',
      request,
      metadata || {},
      methodDescriptor_TraceService_PatchTraces,
      callback);
};


/**
 * @param {!proto.google.devtools.cloudtrace.v1.PatchTracesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.devtools.cloudtrace.v1.TraceServicePromiseClient.prototype.patchTraces =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.cloudtrace.v1.TraceService/PatchTraces',
      request,
      metadata || {},
      methodDescriptor_TraceService_PatchTraces);
};


module.exports = proto.google.devtools.cloudtrace.v1;

