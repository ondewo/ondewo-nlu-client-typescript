/**
 * @fileoverview gRPC-Web generated client stub for google.logging.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_api_distribution_pb = require('../../../google/api/distribution_pb.js')

var google_api_metric_pb = require('../../../google/api/metric_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.logging = {};
proto.google.logging.v2 = require('./logging_metrics_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.logging.v2.MetricsServiceV2Client =
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
proto.google.logging.v2.MetricsServiceV2PromiseClient =
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
 *   !proto.google.logging.v2.ListLogMetricsRequest,
 *   !proto.google.logging.v2.ListLogMetricsResponse>}
 */
const methodDescriptor_MetricsServiceV2_ListLogMetrics = new grpc.web.MethodDescriptor(
  '/google.logging.v2.MetricsServiceV2/ListLogMetrics',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.ListLogMetricsRequest,
  proto.google.logging.v2.ListLogMetricsResponse,
  /**
   * @param {!proto.google.logging.v2.ListLogMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListLogMetricsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.ListLogMetricsRequest,
 *   !proto.google.logging.v2.ListLogMetricsResponse>}
 */
const methodInfo_MetricsServiceV2_ListLogMetrics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.ListLogMetricsResponse,
  /**
   * @param {!proto.google.logging.v2.ListLogMetricsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListLogMetricsResponse.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.ListLogMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.ListLogMetricsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.ListLogMetricsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.MetricsServiceV2Client.prototype.listLogMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/ListLogMetrics',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_ListLogMetrics,
      callback);
};


/**
 * @param {!proto.google.logging.v2.ListLogMetricsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.ListLogMetricsResponse>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.MetricsServiceV2PromiseClient.prototype.listLogMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/ListLogMetrics',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_ListLogMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.GetLogMetricRequest,
 *   !proto.google.logging.v2.LogMetric>}
 */
const methodDescriptor_MetricsServiceV2_GetLogMetric = new grpc.web.MethodDescriptor(
  '/google.logging.v2.MetricsServiceV2/GetLogMetric',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.GetLogMetricRequest,
  proto.google.logging.v2.LogMetric,
  /**
   * @param {!proto.google.logging.v2.GetLogMetricRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogMetric.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.GetLogMetricRequest,
 *   !proto.google.logging.v2.LogMetric>}
 */
const methodInfo_MetricsServiceV2_GetLogMetric = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.LogMetric,
  /**
   * @param {!proto.google.logging.v2.GetLogMetricRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogMetric.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.GetLogMetricRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.LogMetric)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.LogMetric>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.MetricsServiceV2Client.prototype.getLogMetric =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/GetLogMetric',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_GetLogMetric,
      callback);
};


/**
 * @param {!proto.google.logging.v2.GetLogMetricRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.LogMetric>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.MetricsServiceV2PromiseClient.prototype.getLogMetric =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/GetLogMetric',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_GetLogMetric);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.CreateLogMetricRequest,
 *   !proto.google.logging.v2.LogMetric>}
 */
const methodDescriptor_MetricsServiceV2_CreateLogMetric = new grpc.web.MethodDescriptor(
  '/google.logging.v2.MetricsServiceV2/CreateLogMetric',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.CreateLogMetricRequest,
  proto.google.logging.v2.LogMetric,
  /**
   * @param {!proto.google.logging.v2.CreateLogMetricRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogMetric.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.CreateLogMetricRequest,
 *   !proto.google.logging.v2.LogMetric>}
 */
const methodInfo_MetricsServiceV2_CreateLogMetric = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.LogMetric,
  /**
   * @param {!proto.google.logging.v2.CreateLogMetricRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogMetric.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.CreateLogMetricRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.LogMetric)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.LogMetric>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.MetricsServiceV2Client.prototype.createLogMetric =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/CreateLogMetric',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_CreateLogMetric,
      callback);
};


/**
 * @param {!proto.google.logging.v2.CreateLogMetricRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.LogMetric>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.MetricsServiceV2PromiseClient.prototype.createLogMetric =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/CreateLogMetric',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_CreateLogMetric);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.UpdateLogMetricRequest,
 *   !proto.google.logging.v2.LogMetric>}
 */
const methodDescriptor_MetricsServiceV2_UpdateLogMetric = new grpc.web.MethodDescriptor(
  '/google.logging.v2.MetricsServiceV2/UpdateLogMetric',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.UpdateLogMetricRequest,
  proto.google.logging.v2.LogMetric,
  /**
   * @param {!proto.google.logging.v2.UpdateLogMetricRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogMetric.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.UpdateLogMetricRequest,
 *   !proto.google.logging.v2.LogMetric>}
 */
const methodInfo_MetricsServiceV2_UpdateLogMetric = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.LogMetric,
  /**
   * @param {!proto.google.logging.v2.UpdateLogMetricRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.LogMetric.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.UpdateLogMetricRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.LogMetric)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.LogMetric>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.MetricsServiceV2Client.prototype.updateLogMetric =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/UpdateLogMetric',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_UpdateLogMetric,
      callback);
};


/**
 * @param {!proto.google.logging.v2.UpdateLogMetricRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.LogMetric>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.MetricsServiceV2PromiseClient.prototype.updateLogMetric =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/UpdateLogMetric',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_UpdateLogMetric);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.DeleteLogMetricRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_MetricsServiceV2_DeleteLogMetric = new grpc.web.MethodDescriptor(
  '/google.logging.v2.MetricsServiceV2/DeleteLogMetric',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.DeleteLogMetricRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.logging.v2.DeleteLogMetricRequest} request
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
 *   !proto.google.logging.v2.DeleteLogMetricRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_MetricsServiceV2_DeleteLogMetric = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.logging.v2.DeleteLogMetricRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.DeleteLogMetricRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.MetricsServiceV2Client.prototype.deleteLogMetric =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/DeleteLogMetric',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_DeleteLogMetric,
      callback);
};


/**
 * @param {!proto.google.logging.v2.DeleteLogMetricRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.MetricsServiceV2PromiseClient.prototype.deleteLogMetric =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.MetricsServiceV2/DeleteLogMetric',
      request,
      metadata || {},
      methodDescriptor_MetricsServiceV2_DeleteLogMetric);
};


module.exports = proto.google.logging.v2;

