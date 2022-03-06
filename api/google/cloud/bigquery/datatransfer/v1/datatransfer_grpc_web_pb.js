/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.bigquery.datatransfer.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_cloud_bigquery_datatransfer_v1_transfer_pb = require('../../../../../google/cloud/bigquery/datatransfer/v1/transfer_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.bigquery = {};
proto.google.cloud.bigquery.datatransfer = {};
proto.google.cloud.bigquery.datatransfer.v1 = require('./datatransfer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient =
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
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient =
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
 *   !proto.google.cloud.bigquery.datatransfer.v1.GetDataSourceRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.DataSource>}
 */
const methodDescriptor_DataTransferService_GetDataSource = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetDataSource',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.GetDataSourceRequest,
  proto.google.cloud.bigquery.datatransfer.v1.DataSource,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetDataSourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.DataSource.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.GetDataSourceRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.DataSource>}
 */
const methodInfo_DataTransferService_GetDataSource = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.bigquery.datatransfer.v1.DataSource,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetDataSourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.DataSource.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetDataSourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.DataSource)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.DataSource>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.getDataSource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetDataSource',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_GetDataSource,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetDataSourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.DataSource>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.getDataSource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetDataSource',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_GetDataSource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse>}
 */
const methodDescriptor_DataTransferService_ListDataSources = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListDataSources',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesRequest,
  proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse>}
 */
const methodInfo_DataTransferService_ListDataSources = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.listDataSources =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListDataSources',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ListDataSources,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.listDataSources =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListDataSources',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ListDataSources);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.CreateTransferConfigRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>}
 */
const methodDescriptor_DataTransferService_CreateTransferConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CreateTransferConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.CreateTransferConfigRequest,
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.CreateTransferConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.CreateTransferConfigRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>}
 */
const methodInfo_DataTransferService_CreateTransferConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.CreateTransferConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.CreateTransferConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.TransferConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.createTransferConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CreateTransferConfig',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_CreateTransferConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.CreateTransferConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.createTransferConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CreateTransferConfig',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_CreateTransferConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.UpdateTransferConfigRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>}
 */
const methodDescriptor_DataTransferService_UpdateTransferConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/UpdateTransferConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.UpdateTransferConfigRequest,
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.UpdateTransferConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.UpdateTransferConfigRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>}
 */
const methodInfo_DataTransferService_UpdateTransferConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.UpdateTransferConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.UpdateTransferConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.TransferConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.updateTransferConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/UpdateTransferConfig',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_UpdateTransferConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.UpdateTransferConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.updateTransferConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/UpdateTransferConfig',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_UpdateTransferConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DataTransferService_DeleteTransferConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferConfigRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferConfigRequest} request
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
 *   !proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferConfigRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DataTransferService_DeleteTransferConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.deleteTransferConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferConfig',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_DeleteTransferConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.deleteTransferConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferConfig',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_DeleteTransferConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.GetTransferConfigRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>}
 */
const methodDescriptor_DataTransferService_GetTransferConfig = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferConfig',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.GetTransferConfigRequest,
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetTransferConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.GetTransferConfigRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>}
 */
const methodInfo_DataTransferService_GetTransferConfig = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetTransferConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferConfig.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetTransferConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.TransferConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.getTransferConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferConfig',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_GetTransferConfig,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetTransferConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.TransferConfig>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.getTransferConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferConfig',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_GetTransferConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse>}
 */
const methodDescriptor_DataTransferService_ListTransferConfigs = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferConfigs',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsRequest,
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse>}
 */
const methodInfo_DataTransferService_ListTransferConfigs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.listTransferConfigs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferConfigs',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ListTransferConfigs,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.listTransferConfigs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferConfigs',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ListTransferConfigs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse>}
 */
const methodDescriptor_DataTransferService_ScheduleTransferRuns = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ScheduleTransferRuns',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsRequest,
  proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse>}
 */
const methodInfo_DataTransferService_ScheduleTransferRuns = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.scheduleTransferRuns =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ScheduleTransferRuns',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ScheduleTransferRuns,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.scheduleTransferRuns =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ScheduleTransferRuns',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ScheduleTransferRuns);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.GetTransferRunRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.TransferRun>}
 */
const methodDescriptor_DataTransferService_GetTransferRun = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferRun',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.GetTransferRunRequest,
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetTransferRunRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.GetTransferRunRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.TransferRun>}
 */
const methodInfo_DataTransferService_GetTransferRun = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetTransferRunRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_bigquery_datatransfer_v1_transfer_pb.TransferRun.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetTransferRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.TransferRun)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.TransferRun>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.getTransferRun =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferRun',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_GetTransferRun,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.GetTransferRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.TransferRun>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.getTransferRun =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/GetTransferRun',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_GetTransferRun);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferRunRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DataTransferService_DeleteTransferRun = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferRun',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferRunRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferRunRequest} request
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
 *   !proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferRunRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DataTransferService_DeleteTransferRun = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferRunRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.deleteTransferRun =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferRun',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_DeleteTransferRun,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.DeleteTransferRunRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.deleteTransferRun =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/DeleteTransferRun',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_DeleteTransferRun);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse>}
 */
const methodDescriptor_DataTransferService_ListTransferRuns = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferRuns',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsRequest,
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse>}
 */
const methodInfo_DataTransferService_ListTransferRuns = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.listTransferRuns =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferRuns',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ListTransferRuns,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.listTransferRuns =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferRuns',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ListTransferRuns);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse>}
 */
const methodDescriptor_DataTransferService_ListTransferLogs = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferLogs',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsRequest,
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse>}
 */
const methodInfo_DataTransferService_ListTransferLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.listTransferLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferLogs',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ListTransferLogs,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.listTransferLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/ListTransferLogs',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_ListTransferLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse>}
 */
const methodDescriptor_DataTransferService_CheckValidCreds = new grpc.web.MethodDescriptor(
  '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CheckValidCreds',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest,
  proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest,
 *   !proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse>}
 */
const methodInfo_DataTransferService_CheckValidCreds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse,
  /**
   * @param {!proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServiceClient.prototype.checkValidCreds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CheckValidCreds',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_CheckValidCreds,
      callback);
};


/**
 * @param {!proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.bigquery.datatransfer.v1.DataTransferServicePromiseClient.prototype.checkValidCreds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.bigquery.datatransfer.v1.DataTransferService/CheckValidCreds',
      request,
      metadata || {},
      methodDescriptor_DataTransferService_CheckValidCreds);
};


module.exports = proto.google.cloud.bigquery.datatransfer.v1;

