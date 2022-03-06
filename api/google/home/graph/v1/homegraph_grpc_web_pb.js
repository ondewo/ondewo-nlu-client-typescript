/**
 * @fileoverview gRPC-Web generated client stub for google.home.graph.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_home_graph_v1_device_pb = require('../../../../google/home/graph/v1/device_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.google = {};
proto.google.home = {};
proto.google.home.graph = {};
proto.google.home.graph.v1 = require('./homegraph_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.home.graph.v1.HomeGraphApiServiceClient =
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
proto.google.home.graph.v1.HomeGraphApiServicePromiseClient =
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
 *   !proto.google.home.graph.v1.RequestSyncDevicesRequest,
 *   !proto.google.home.graph.v1.RequestSyncDevicesResponse>}
 */
const methodDescriptor_HomeGraphApiService_RequestSyncDevices = new grpc.web.MethodDescriptor(
  '/google.home.graph.v1.HomeGraphApiService/RequestSyncDevices',
  grpc.web.MethodType.UNARY,
  proto.google.home.graph.v1.RequestSyncDevicesRequest,
  proto.google.home.graph.v1.RequestSyncDevicesResponse,
  /**
   * @param {!proto.google.home.graph.v1.RequestSyncDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.home.graph.v1.RequestSyncDevicesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.home.graph.v1.RequestSyncDevicesRequest,
 *   !proto.google.home.graph.v1.RequestSyncDevicesResponse>}
 */
const methodInfo_HomeGraphApiService_RequestSyncDevices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.home.graph.v1.RequestSyncDevicesResponse,
  /**
   * @param {!proto.google.home.graph.v1.RequestSyncDevicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.home.graph.v1.RequestSyncDevicesResponse.deserializeBinary
);


/**
 * @param {!proto.google.home.graph.v1.RequestSyncDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.home.graph.v1.RequestSyncDevicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.home.graph.v1.RequestSyncDevicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.home.graph.v1.HomeGraphApiServiceClient.prototype.requestSyncDevices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/RequestSyncDevices',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_RequestSyncDevices,
      callback);
};


/**
 * @param {!proto.google.home.graph.v1.RequestSyncDevicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.home.graph.v1.RequestSyncDevicesResponse>}
 *     Promise that resolves to the response
 */
proto.google.home.graph.v1.HomeGraphApiServicePromiseClient.prototype.requestSyncDevices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/RequestSyncDevices',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_RequestSyncDevices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.home.graph.v1.ReportStateAndNotificationRequest,
 *   !proto.google.home.graph.v1.ReportStateAndNotificationResponse>}
 */
const methodDescriptor_HomeGraphApiService_ReportStateAndNotification = new grpc.web.MethodDescriptor(
  '/google.home.graph.v1.HomeGraphApiService/ReportStateAndNotification',
  grpc.web.MethodType.UNARY,
  proto.google.home.graph.v1.ReportStateAndNotificationRequest,
  proto.google.home.graph.v1.ReportStateAndNotificationResponse,
  /**
   * @param {!proto.google.home.graph.v1.ReportStateAndNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.home.graph.v1.ReportStateAndNotificationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.home.graph.v1.ReportStateAndNotificationRequest,
 *   !proto.google.home.graph.v1.ReportStateAndNotificationResponse>}
 */
const methodInfo_HomeGraphApiService_ReportStateAndNotification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.home.graph.v1.ReportStateAndNotificationResponse,
  /**
   * @param {!proto.google.home.graph.v1.ReportStateAndNotificationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.home.graph.v1.ReportStateAndNotificationResponse.deserializeBinary
);


/**
 * @param {!proto.google.home.graph.v1.ReportStateAndNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.home.graph.v1.ReportStateAndNotificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.home.graph.v1.ReportStateAndNotificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.home.graph.v1.HomeGraphApiServiceClient.prototype.reportStateAndNotification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/ReportStateAndNotification',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_ReportStateAndNotification,
      callback);
};


/**
 * @param {!proto.google.home.graph.v1.ReportStateAndNotificationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.home.graph.v1.ReportStateAndNotificationResponse>}
 *     Promise that resolves to the response
 */
proto.google.home.graph.v1.HomeGraphApiServicePromiseClient.prototype.reportStateAndNotification =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/ReportStateAndNotification',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_ReportStateAndNotification);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.home.graph.v1.DeleteAgentUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_HomeGraphApiService_DeleteAgentUser = new grpc.web.MethodDescriptor(
  '/google.home.graph.v1.HomeGraphApiService/DeleteAgentUser',
  grpc.web.MethodType.UNARY,
  proto.google.home.graph.v1.DeleteAgentUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.home.graph.v1.DeleteAgentUserRequest} request
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
 *   !proto.google.home.graph.v1.DeleteAgentUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_HomeGraphApiService_DeleteAgentUser = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.home.graph.v1.DeleteAgentUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.home.graph.v1.DeleteAgentUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.home.graph.v1.HomeGraphApiServiceClient.prototype.deleteAgentUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/DeleteAgentUser',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_DeleteAgentUser,
      callback);
};


/**
 * @param {!proto.google.home.graph.v1.DeleteAgentUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.home.graph.v1.HomeGraphApiServicePromiseClient.prototype.deleteAgentUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/DeleteAgentUser',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_DeleteAgentUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.home.graph.v1.QueryRequest,
 *   !proto.google.home.graph.v1.QueryResponse>}
 */
const methodDescriptor_HomeGraphApiService_Query = new grpc.web.MethodDescriptor(
  '/google.home.graph.v1.HomeGraphApiService/Query',
  grpc.web.MethodType.UNARY,
  proto.google.home.graph.v1.QueryRequest,
  proto.google.home.graph.v1.QueryResponse,
  /**
   * @param {!proto.google.home.graph.v1.QueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.home.graph.v1.QueryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.home.graph.v1.QueryRequest,
 *   !proto.google.home.graph.v1.QueryResponse>}
 */
const methodInfo_HomeGraphApiService_Query = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.home.graph.v1.QueryResponse,
  /**
   * @param {!proto.google.home.graph.v1.QueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.home.graph.v1.QueryResponse.deserializeBinary
);


/**
 * @param {!proto.google.home.graph.v1.QueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.home.graph.v1.QueryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.home.graph.v1.QueryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.home.graph.v1.HomeGraphApiServiceClient.prototype.query =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/Query',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_Query,
      callback);
};


/**
 * @param {!proto.google.home.graph.v1.QueryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.home.graph.v1.QueryResponse>}
 *     Promise that resolves to the response
 */
proto.google.home.graph.v1.HomeGraphApiServicePromiseClient.prototype.query =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/Query',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_Query);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.home.graph.v1.SyncRequest,
 *   !proto.google.home.graph.v1.SyncResponse>}
 */
const methodDescriptor_HomeGraphApiService_Sync = new grpc.web.MethodDescriptor(
  '/google.home.graph.v1.HomeGraphApiService/Sync',
  grpc.web.MethodType.UNARY,
  proto.google.home.graph.v1.SyncRequest,
  proto.google.home.graph.v1.SyncResponse,
  /**
   * @param {!proto.google.home.graph.v1.SyncRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.home.graph.v1.SyncResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.home.graph.v1.SyncRequest,
 *   !proto.google.home.graph.v1.SyncResponse>}
 */
const methodInfo_HomeGraphApiService_Sync = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.home.graph.v1.SyncResponse,
  /**
   * @param {!proto.google.home.graph.v1.SyncRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.home.graph.v1.SyncResponse.deserializeBinary
);


/**
 * @param {!proto.google.home.graph.v1.SyncRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.home.graph.v1.SyncResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.home.graph.v1.SyncResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.home.graph.v1.HomeGraphApiServiceClient.prototype.sync =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/Sync',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_Sync,
      callback);
};


/**
 * @param {!proto.google.home.graph.v1.SyncRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.home.graph.v1.SyncResponse>}
 *     Promise that resolves to the response
 */
proto.google.home.graph.v1.HomeGraphApiServicePromiseClient.prototype.sync =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.home.graph.v1.HomeGraphApiService/Sync',
      request,
      metadata || {},
      methodDescriptor_HomeGraphApiService_Sync);
};


module.exports = proto.google.home.graph.v1;

