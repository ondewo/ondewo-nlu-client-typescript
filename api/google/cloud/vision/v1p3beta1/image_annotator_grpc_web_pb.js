/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.vision.v1p3beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_vision_v1p3beta1_geometry_pb = require('../../../../google/cloud/vision/v1p3beta1/geometry_pb.js')

var google_cloud_vision_v1p3beta1_product_search_pb = require('../../../../google/cloud/vision/v1p3beta1/product_search_pb.js')

var google_cloud_vision_v1p3beta1_text_annotation_pb = require('../../../../google/cloud/vision/v1p3beta1/text_annotation_pb.js')

var google_cloud_vision_v1p3beta1_web_detection_pb = require('../../../../google/cloud/vision/v1p3beta1/web_detection_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')

var google_type_color_pb = require('../../../../google/type/color_pb.js')

var google_type_latlng_pb = require('../../../../google/type/latlng_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.vision = {};
proto.google.cloud.vision.v1p3beta1 = require('./image_annotator_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.vision.v1p3beta1.ImageAnnotatorClient =
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
proto.google.cloud.vision.v1p3beta1.ImageAnnotatorPromiseClient =
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
 *   !proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesRequest,
 *   !proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse>}
 */
const methodDescriptor_ImageAnnotator_BatchAnnotateImages = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ImageAnnotator/BatchAnnotateImages',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesRequest,
  proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesRequest,
 *   !proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse>}
 */
const methodInfo_ImageAnnotator_BatchAnnotateImages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ImageAnnotatorClient.prototype.batchAnnotateImages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ImageAnnotator/BatchAnnotateImages',
      request,
      metadata || {},
      methodDescriptor_ImageAnnotator_BatchAnnotateImages,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ImageAnnotatorPromiseClient.prototype.batchAnnotateImages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ImageAnnotator/BatchAnnotateImages',
      request,
      metadata || {},
      methodDescriptor_ImageAnnotator_BatchAnnotateImages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_ImageAnnotator_AsyncBatchAnnotateFiles = new grpc.web.MethodDescriptor(
  '/google.cloud.vision.v1p3beta1.ImageAnnotator/AsyncBatchAnnotateFiles',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesRequest} request
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
 *   !proto.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_ImageAnnotator_AsyncBatchAnnotateFiles = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.vision.v1p3beta1.ImageAnnotatorClient.prototype.asyncBatchAnnotateFiles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ImageAnnotator/AsyncBatchAnnotateFiles',
      request,
      metadata || {},
      methodDescriptor_ImageAnnotator_AsyncBatchAnnotateFiles,
      callback);
};


/**
 * @param {!proto.google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.vision.v1p3beta1.ImageAnnotatorPromiseClient.prototype.asyncBatchAnnotateFiles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.vision.v1p3beta1.ImageAnnotator/AsyncBatchAnnotateFiles',
      request,
      metadata || {},
      methodDescriptor_ImageAnnotator_AsyncBatchAnnotateFiles);
};


module.exports = proto.google.cloud.vision.v1p3beta1;

