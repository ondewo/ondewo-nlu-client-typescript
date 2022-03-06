/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.asset.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_asset_v1beta1_assets_pb = require('../../../../google/cloud/asset/v1beta1/assets_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.asset = {};
proto.google.cloud.asset.v1beta1 = require('./asset_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.asset.v1beta1.AssetServiceClient =
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
proto.google.cloud.asset.v1beta1.AssetServicePromiseClient =
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
 *   !proto.google.cloud.asset.v1beta1.ExportAssetsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_AssetService_ExportAssets = new grpc.web.MethodDescriptor(
  '/google.cloud.asset.v1beta1.AssetService/ExportAssets',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.asset.v1beta1.ExportAssetsRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.asset.v1beta1.ExportAssetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.asset.v1beta1.ExportAssetsRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_AssetService_ExportAssets = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.asset.v1beta1.ExportAssetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.asset.v1beta1.ExportAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.asset.v1beta1.AssetServiceClient.prototype.exportAssets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.asset.v1beta1.AssetService/ExportAssets',
      request,
      metadata || {},
      methodDescriptor_AssetService_ExportAssets,
      callback);
};


/**
 * @param {!proto.google.cloud.asset.v1beta1.ExportAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.asset.v1beta1.AssetServicePromiseClient.prototype.exportAssets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.asset.v1beta1.AssetService/ExportAssets',
      request,
      metadata || {},
      methodDescriptor_AssetService_ExportAssets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest,
 *   !proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse>}
 */
const methodDescriptor_AssetService_BatchGetAssetsHistory = new grpc.web.MethodDescriptor(
  '/google.cloud.asset.v1beta1.AssetService/BatchGetAssetsHistory',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest,
  proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse,
  /**
   * @param {!proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest,
 *   !proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse>}
 */
const methodInfo_AssetService_BatchGetAssetsHistory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse,
  /**
   * @param {!proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.asset.v1beta1.AssetServiceClient.prototype.batchGetAssetsHistory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.asset.v1beta1.AssetService/BatchGetAssetsHistory',
      request,
      metadata || {},
      methodDescriptor_AssetService_BatchGetAssetsHistory,
      callback);
};


/**
 * @param {!proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.asset.v1beta1.AssetServicePromiseClient.prototype.batchGetAssetsHistory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.asset.v1beta1.AssetService/BatchGetAssetsHistory',
      request,
      metadata || {},
      methodDescriptor_AssetService_BatchGetAssetsHistory);
};


module.exports = proto.google.cloud.asset.v1beta1;

