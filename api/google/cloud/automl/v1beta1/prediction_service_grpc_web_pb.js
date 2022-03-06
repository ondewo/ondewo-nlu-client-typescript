/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.automl.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_automl_v1beta1_annotation_payload_pb = require('../../../../google/cloud/automl/v1beta1/annotation_payload_pb.js')

var google_cloud_automl_v1beta1_data_items_pb = require('../../../../google/cloud/automl/v1beta1/data_items_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.automl = {};
proto.google.cloud.automl.v1beta1 = require('./prediction_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.automl.v1beta1.PredictionServiceClient =
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
proto.google.cloud.automl.v1beta1.PredictionServicePromiseClient =
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
 *   !proto.google.cloud.automl.v1beta1.PredictRequest,
 *   !proto.google.cloud.automl.v1beta1.PredictResponse>}
 */
const methodDescriptor_PredictionService_Predict = new grpc.web.MethodDescriptor(
  '/google.cloud.automl.v1beta1.PredictionService/Predict',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.automl.v1beta1.PredictRequest,
  proto.google.cloud.automl.v1beta1.PredictResponse,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.PredictRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.automl.v1beta1.PredictResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.automl.v1beta1.PredictRequest,
 *   !proto.google.cloud.automl.v1beta1.PredictResponse>}
 */
const methodInfo_PredictionService_Predict = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.automl.v1beta1.PredictResponse,
  /**
   * @param {!proto.google.cloud.automl.v1beta1.PredictRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.automl.v1beta1.PredictResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.automl.v1beta1.PredictRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.automl.v1beta1.PredictResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.automl.v1beta1.PredictResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.automl.v1beta1.PredictionServiceClient.prototype.predict =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.PredictionService/Predict',
      request,
      metadata || {},
      methodDescriptor_PredictionService_Predict,
      callback);
};


/**
 * @param {!proto.google.cloud.automl.v1beta1.PredictRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.automl.v1beta1.PredictResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.automl.v1beta1.PredictionServicePromiseClient.prototype.predict =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.automl.v1beta1.PredictionService/Predict',
      request,
      metadata || {},
      methodDescriptor_PredictionService_Predict);
};


module.exports = proto.google.cloud.automl.v1beta1;

