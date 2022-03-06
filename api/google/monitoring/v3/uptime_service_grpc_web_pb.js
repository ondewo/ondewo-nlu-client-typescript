/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_monitoring_v3_uptime_pb = require('../../../google/monitoring/v3/uptime_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.monitoring = {};
proto.google.monitoring.v3 = require('./uptime_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.monitoring.v3.UptimeCheckServiceClient =
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
proto.google.monitoring.v3.UptimeCheckServicePromiseClient =
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
 *   !proto.google.monitoring.v3.ListUptimeCheckConfigsRequest,
 *   !proto.google.monitoring.v3.ListUptimeCheckConfigsResponse>}
 */
const methodDescriptor_UptimeCheckService_ListUptimeCheckConfigs = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckConfigs',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListUptimeCheckConfigsRequest,
  proto.google.monitoring.v3.ListUptimeCheckConfigsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListUptimeCheckConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListUptimeCheckConfigsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListUptimeCheckConfigsRequest,
 *   !proto.google.monitoring.v3.ListUptimeCheckConfigsResponse>}
 */
const methodInfo_UptimeCheckService_ListUptimeCheckConfigs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListUptimeCheckConfigsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListUptimeCheckConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListUptimeCheckConfigsResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListUptimeCheckConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListUptimeCheckConfigsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListUptimeCheckConfigsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.UptimeCheckServiceClient.prototype.listUptimeCheckConfigs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckConfigs',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_ListUptimeCheckConfigs,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListUptimeCheckConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListUptimeCheckConfigsResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.UptimeCheckServicePromiseClient.prototype.listUptimeCheckConfigs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckConfigs',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_ListUptimeCheckConfigs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.GetUptimeCheckConfigRequest,
 *   !proto.google.monitoring.v3.UptimeCheckConfig>}
 */
const methodDescriptor_UptimeCheckService_GetUptimeCheckConfig = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.UptimeCheckService/GetUptimeCheckConfig',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.GetUptimeCheckConfigRequest,
  google_monitoring_v3_uptime_pb.UptimeCheckConfig,
  /**
   * @param {!proto.google.monitoring.v3.GetUptimeCheckConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.GetUptimeCheckConfigRequest,
 *   !proto.google.monitoring.v3.UptimeCheckConfig>}
 */
const methodInfo_UptimeCheckService_GetUptimeCheckConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_uptime_pb.UptimeCheckConfig,
  /**
   * @param {!proto.google.monitoring.v3.GetUptimeCheckConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.GetUptimeCheckConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.UptimeCheckConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.UptimeCheckConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.UptimeCheckServiceClient.prototype.getUptimeCheckConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/GetUptimeCheckConfig',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_GetUptimeCheckConfig,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.GetUptimeCheckConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.UptimeCheckConfig>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.UptimeCheckServicePromiseClient.prototype.getUptimeCheckConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/GetUptimeCheckConfig',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_GetUptimeCheckConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.CreateUptimeCheckConfigRequest,
 *   !proto.google.monitoring.v3.UptimeCheckConfig>}
 */
const methodDescriptor_UptimeCheckService_CreateUptimeCheckConfig = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.UptimeCheckService/CreateUptimeCheckConfig',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.CreateUptimeCheckConfigRequest,
  google_monitoring_v3_uptime_pb.UptimeCheckConfig,
  /**
   * @param {!proto.google.monitoring.v3.CreateUptimeCheckConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.CreateUptimeCheckConfigRequest,
 *   !proto.google.monitoring.v3.UptimeCheckConfig>}
 */
const methodInfo_UptimeCheckService_CreateUptimeCheckConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_uptime_pb.UptimeCheckConfig,
  /**
   * @param {!proto.google.monitoring.v3.CreateUptimeCheckConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.CreateUptimeCheckConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.UptimeCheckConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.UptimeCheckConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.UptimeCheckServiceClient.prototype.createUptimeCheckConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/CreateUptimeCheckConfig',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_CreateUptimeCheckConfig,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.CreateUptimeCheckConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.UptimeCheckConfig>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.UptimeCheckServicePromiseClient.prototype.createUptimeCheckConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/CreateUptimeCheckConfig',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_CreateUptimeCheckConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.UpdateUptimeCheckConfigRequest,
 *   !proto.google.monitoring.v3.UptimeCheckConfig>}
 */
const methodDescriptor_UptimeCheckService_UpdateUptimeCheckConfig = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.UptimeCheckService/UpdateUptimeCheckConfig',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.UpdateUptimeCheckConfigRequest,
  google_monitoring_v3_uptime_pb.UptimeCheckConfig,
  /**
   * @param {!proto.google.monitoring.v3.UpdateUptimeCheckConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.UpdateUptimeCheckConfigRequest,
 *   !proto.google.monitoring.v3.UptimeCheckConfig>}
 */
const methodInfo_UptimeCheckService_UpdateUptimeCheckConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_uptime_pb.UptimeCheckConfig,
  /**
   * @param {!proto.google.monitoring.v3.UpdateUptimeCheckConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_uptime_pb.UptimeCheckConfig.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.UpdateUptimeCheckConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.UptimeCheckConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.UptimeCheckConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.UptimeCheckServiceClient.prototype.updateUptimeCheckConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/UpdateUptimeCheckConfig',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_UpdateUptimeCheckConfig,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.UpdateUptimeCheckConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.UptimeCheckConfig>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.UptimeCheckServicePromiseClient.prototype.updateUptimeCheckConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/UpdateUptimeCheckConfig',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_UpdateUptimeCheckConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.DeleteUptimeCheckConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UptimeCheckService_DeleteUptimeCheckConfig = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.UptimeCheckService/DeleteUptimeCheckConfig',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.DeleteUptimeCheckConfigRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteUptimeCheckConfigRequest} request
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
 *   !proto.google.monitoring.v3.DeleteUptimeCheckConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UptimeCheckService_DeleteUptimeCheckConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteUptimeCheckConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.DeleteUptimeCheckConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.UptimeCheckServiceClient.prototype.deleteUptimeCheckConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/DeleteUptimeCheckConfig',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_DeleteUptimeCheckConfig,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.DeleteUptimeCheckConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.UptimeCheckServicePromiseClient.prototype.deleteUptimeCheckConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/DeleteUptimeCheckConfig',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_DeleteUptimeCheckConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.ListUptimeCheckIpsRequest,
 *   !proto.google.monitoring.v3.ListUptimeCheckIpsResponse>}
 */
const methodDescriptor_UptimeCheckService_ListUptimeCheckIps = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckIps',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListUptimeCheckIpsRequest,
  proto.google.monitoring.v3.ListUptimeCheckIpsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListUptimeCheckIpsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListUptimeCheckIpsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListUptimeCheckIpsRequest,
 *   !proto.google.monitoring.v3.ListUptimeCheckIpsResponse>}
 */
const methodInfo_UptimeCheckService_ListUptimeCheckIps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListUptimeCheckIpsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListUptimeCheckIpsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListUptimeCheckIpsResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListUptimeCheckIpsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListUptimeCheckIpsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListUptimeCheckIpsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.UptimeCheckServiceClient.prototype.listUptimeCheckIps =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckIps',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_ListUptimeCheckIps,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListUptimeCheckIpsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListUptimeCheckIpsResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.UptimeCheckServicePromiseClient.prototype.listUptimeCheckIps =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.UptimeCheckService/ListUptimeCheckIps',
      request,
      metadata || {},
      methodDescriptor_UptimeCheckService_ListUptimeCheckIps);
};


module.exports = proto.google.monitoring.v3;

