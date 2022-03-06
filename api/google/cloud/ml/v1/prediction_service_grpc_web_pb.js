/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.ml.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_api_httpbody_pb = require('../../../../google/api/httpbody_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.ml = {};
proto.google.cloud.ml.v1 = require('./prediction_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.ml.v1.OnlinePredictionServiceClient =
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
proto.google.cloud.ml.v1.OnlinePredictionServicePromiseClient =
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
 *   !proto.google.cloud.ml.v1.PredictRequest,
 *   !proto.google.api.HttpBody>}
 */
const methodDescriptor_OnlinePredictionService_Predict = new grpc.web.MethodDescriptor(
  '/google.cloud.ml.v1.OnlinePredictionService/Predict',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.ml.v1.PredictRequest,
  google_api_httpbody_pb.HttpBody,
  /**
   * @param {!proto.google.cloud.ml.v1.PredictRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_httpbody_pb.HttpBody.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.ml.v1.PredictRequest,
 *   !proto.google.api.HttpBody>}
 */
const methodInfo_OnlinePredictionService_Predict = new grpc.web.AbstractClientBase.MethodInfo(
  google_api_httpbody_pb.HttpBody,
  /**
   * @param {!proto.google.cloud.ml.v1.PredictRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_api_httpbody_pb.HttpBody.deserializeBinary
);


/**
 * @param {!proto.google.cloud.ml.v1.PredictRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.api.HttpBody)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.api.HttpBody>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.ml.v1.OnlinePredictionServiceClient.prototype.predict =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.ml.v1.OnlinePredictionService/Predict',
      request,
      metadata || {},
      methodDescriptor_OnlinePredictionService_Predict,
      callback);
};


/**
 * @param {!proto.google.cloud.ml.v1.PredictRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.api.HttpBody>}
 *     Promise that resolves to the response
 */
proto.google.cloud.ml.v1.OnlinePredictionServicePromiseClient.prototype.predict =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.ml.v1.OnlinePredictionService/Predict',
      request,
      metadata || {},
      methodDescriptor_OnlinePredictionService_Predict);
};


module.exports = proto.google.cloud.ml.v1;

