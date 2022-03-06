/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.speech.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.speech = {};
proto.google.cloud.speech.v1 = require('./cloud_speech_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.speech.v1.SpeechClient =
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
proto.google.cloud.speech.v1.SpeechPromiseClient =
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
 *   !proto.google.cloud.speech.v1.RecognizeRequest,
 *   !proto.google.cloud.speech.v1.RecognizeResponse>}
 */
const methodDescriptor_Speech_Recognize = new grpc.web.MethodDescriptor(
  '/google.cloud.speech.v1.Speech/Recognize',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.speech.v1.RecognizeRequest,
  proto.google.cloud.speech.v1.RecognizeResponse,
  /**
   * @param {!proto.google.cloud.speech.v1.RecognizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.speech.v1.RecognizeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.speech.v1.RecognizeRequest,
 *   !proto.google.cloud.speech.v1.RecognizeResponse>}
 */
const methodInfo_Speech_Recognize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.speech.v1.RecognizeResponse,
  /**
   * @param {!proto.google.cloud.speech.v1.RecognizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.speech.v1.RecognizeResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.speech.v1.RecognizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.speech.v1.RecognizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.speech.v1.RecognizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.speech.v1.SpeechClient.prototype.recognize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.speech.v1.Speech/Recognize',
      request,
      metadata || {},
      methodDescriptor_Speech_Recognize,
      callback);
};


/**
 * @param {!proto.google.cloud.speech.v1.RecognizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.speech.v1.RecognizeResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.speech.v1.SpeechPromiseClient.prototype.recognize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.speech.v1.Speech/Recognize',
      request,
      metadata || {},
      methodDescriptor_Speech_Recognize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.speech.v1.LongRunningRecognizeRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Speech_LongRunningRecognize = new grpc.web.MethodDescriptor(
  '/google.cloud.speech.v1.Speech/LongRunningRecognize',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.speech.v1.LongRunningRecognizeRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.speech.v1.LongRunningRecognizeRequest} request
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
 *   !proto.google.cloud.speech.v1.LongRunningRecognizeRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Speech_LongRunningRecognize = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.speech.v1.LongRunningRecognizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.speech.v1.LongRunningRecognizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.speech.v1.SpeechClient.prototype.longRunningRecognize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.speech.v1.Speech/LongRunningRecognize',
      request,
      metadata || {},
      methodDescriptor_Speech_LongRunningRecognize,
      callback);
};


/**
 * @param {!proto.google.cloud.speech.v1.LongRunningRecognizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.speech.v1.SpeechPromiseClient.prototype.longRunningRecognize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.speech.v1.Speech/LongRunningRecognize',
      request,
      metadata || {},
      methodDescriptor_Speech_LongRunningRecognize);
};


module.exports = proto.google.cloud.speech.v1;

