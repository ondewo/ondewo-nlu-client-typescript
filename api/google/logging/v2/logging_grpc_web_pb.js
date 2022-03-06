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

var google_api_monitored_resource_pb = require('../../../google/api/monitored_resource_pb.js')

var google_logging_v2_log_entry_pb = require('../../../google/logging/v2/log_entry_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.logging = {};
proto.google.logging.v2 = require('./logging_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.logging.v2.LoggingServiceV2Client =
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
proto.google.logging.v2.LoggingServiceV2PromiseClient =
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
 *   !proto.google.logging.v2.DeleteLogRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_LoggingServiceV2_DeleteLog = new grpc.web.MethodDescriptor(
  '/google.logging.v2.LoggingServiceV2/DeleteLog',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.DeleteLogRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.logging.v2.DeleteLogRequest} request
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
 *   !proto.google.logging.v2.DeleteLogRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_LoggingServiceV2_DeleteLog = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.logging.v2.DeleteLogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.DeleteLogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.LoggingServiceV2Client.prototype.deleteLog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/DeleteLog',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_DeleteLog,
      callback);
};


/**
 * @param {!proto.google.logging.v2.DeleteLogRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.LoggingServiceV2PromiseClient.prototype.deleteLog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/DeleteLog',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_DeleteLog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.WriteLogEntriesRequest,
 *   !proto.google.logging.v2.WriteLogEntriesResponse>}
 */
const methodDescriptor_LoggingServiceV2_WriteLogEntries = new grpc.web.MethodDescriptor(
  '/google.logging.v2.LoggingServiceV2/WriteLogEntries',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.WriteLogEntriesRequest,
  proto.google.logging.v2.WriteLogEntriesResponse,
  /**
   * @param {!proto.google.logging.v2.WriteLogEntriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.WriteLogEntriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.WriteLogEntriesRequest,
 *   !proto.google.logging.v2.WriteLogEntriesResponse>}
 */
const methodInfo_LoggingServiceV2_WriteLogEntries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.WriteLogEntriesResponse,
  /**
   * @param {!proto.google.logging.v2.WriteLogEntriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.WriteLogEntriesResponse.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.WriteLogEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.WriteLogEntriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.WriteLogEntriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.LoggingServiceV2Client.prototype.writeLogEntries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/WriteLogEntries',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_WriteLogEntries,
      callback);
};


/**
 * @param {!proto.google.logging.v2.WriteLogEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.WriteLogEntriesResponse>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.LoggingServiceV2PromiseClient.prototype.writeLogEntries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/WriteLogEntries',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_WriteLogEntries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.ListLogEntriesRequest,
 *   !proto.google.logging.v2.ListLogEntriesResponse>}
 */
const methodDescriptor_LoggingServiceV2_ListLogEntries = new grpc.web.MethodDescriptor(
  '/google.logging.v2.LoggingServiceV2/ListLogEntries',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.ListLogEntriesRequest,
  proto.google.logging.v2.ListLogEntriesResponse,
  /**
   * @param {!proto.google.logging.v2.ListLogEntriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListLogEntriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.ListLogEntriesRequest,
 *   !proto.google.logging.v2.ListLogEntriesResponse>}
 */
const methodInfo_LoggingServiceV2_ListLogEntries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.ListLogEntriesResponse,
  /**
   * @param {!proto.google.logging.v2.ListLogEntriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListLogEntriesResponse.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.ListLogEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.ListLogEntriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.ListLogEntriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.LoggingServiceV2Client.prototype.listLogEntries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/ListLogEntries',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_ListLogEntries,
      callback);
};


/**
 * @param {!proto.google.logging.v2.ListLogEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.ListLogEntriesResponse>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.LoggingServiceV2PromiseClient.prototype.listLogEntries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/ListLogEntries',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_ListLogEntries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.ListMonitoredResourceDescriptorsRequest,
 *   !proto.google.logging.v2.ListMonitoredResourceDescriptorsResponse>}
 */
const methodDescriptor_LoggingServiceV2_ListMonitoredResourceDescriptors = new grpc.web.MethodDescriptor(
  '/google.logging.v2.LoggingServiceV2/ListMonitoredResourceDescriptors',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.ListMonitoredResourceDescriptorsRequest,
  proto.google.logging.v2.ListMonitoredResourceDescriptorsResponse,
  /**
   * @param {!proto.google.logging.v2.ListMonitoredResourceDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListMonitoredResourceDescriptorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.ListMonitoredResourceDescriptorsRequest,
 *   !proto.google.logging.v2.ListMonitoredResourceDescriptorsResponse>}
 */
const methodInfo_LoggingServiceV2_ListMonitoredResourceDescriptors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.ListMonitoredResourceDescriptorsResponse,
  /**
   * @param {!proto.google.logging.v2.ListMonitoredResourceDescriptorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListMonitoredResourceDescriptorsResponse.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.ListMonitoredResourceDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.ListMonitoredResourceDescriptorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.ListMonitoredResourceDescriptorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.LoggingServiceV2Client.prototype.listMonitoredResourceDescriptors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/ListMonitoredResourceDescriptors',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_ListMonitoredResourceDescriptors,
      callback);
};


/**
 * @param {!proto.google.logging.v2.ListMonitoredResourceDescriptorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.ListMonitoredResourceDescriptorsResponse>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.LoggingServiceV2PromiseClient.prototype.listMonitoredResourceDescriptors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/ListMonitoredResourceDescriptors',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_ListMonitoredResourceDescriptors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.logging.v2.ListLogsRequest,
 *   !proto.google.logging.v2.ListLogsResponse>}
 */
const methodDescriptor_LoggingServiceV2_ListLogs = new grpc.web.MethodDescriptor(
  '/google.logging.v2.LoggingServiceV2/ListLogs',
  grpc.web.MethodType.UNARY,
  proto.google.logging.v2.ListLogsRequest,
  proto.google.logging.v2.ListLogsResponse,
  /**
   * @param {!proto.google.logging.v2.ListLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListLogsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.logging.v2.ListLogsRequest,
 *   !proto.google.logging.v2.ListLogsResponse>}
 */
const methodInfo_LoggingServiceV2_ListLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.logging.v2.ListLogsResponse,
  /**
   * @param {!proto.google.logging.v2.ListLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.logging.v2.ListLogsResponse.deserializeBinary
);


/**
 * @param {!proto.google.logging.v2.ListLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.logging.v2.ListLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.logging.v2.ListLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.logging.v2.LoggingServiceV2Client.prototype.listLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/ListLogs',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_ListLogs,
      callback);
};


/**
 * @param {!proto.google.logging.v2.ListLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.logging.v2.ListLogsResponse>}
 *     Promise that resolves to the response
 */
proto.google.logging.v2.LoggingServiceV2PromiseClient.prototype.listLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.logging.v2.LoggingServiceV2/ListLogs',
      request,
      metadata || {},
      methodDescriptor_LoggingServiceV2_ListLogs);
};


module.exports = proto.google.logging.v2;

