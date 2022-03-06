/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.texttospeech.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.texttospeech = {};
proto.google.cloud.texttospeech.v1beta1 = require('./cloud_tts_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.texttospeech.v1beta1.TextToSpeechClient =
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
proto.google.cloud.texttospeech.v1beta1.TextToSpeechPromiseClient =
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
 *   !proto.google.cloud.texttospeech.v1beta1.ListVoicesRequest,
 *   !proto.google.cloud.texttospeech.v1beta1.ListVoicesResponse>}
 */
const methodDescriptor_TextToSpeech_ListVoices = new grpc.web.MethodDescriptor(
  '/google.cloud.texttospeech.v1beta1.TextToSpeech/ListVoices',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.texttospeech.v1beta1.ListVoicesRequest,
  proto.google.cloud.texttospeech.v1beta1.ListVoicesResponse,
  /**
   * @param {!proto.google.cloud.texttospeech.v1beta1.ListVoicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.texttospeech.v1beta1.ListVoicesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.texttospeech.v1beta1.ListVoicesRequest,
 *   !proto.google.cloud.texttospeech.v1beta1.ListVoicesResponse>}
 */
const methodInfo_TextToSpeech_ListVoices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.texttospeech.v1beta1.ListVoicesResponse,
  /**
   * @param {!proto.google.cloud.texttospeech.v1beta1.ListVoicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.texttospeech.v1beta1.ListVoicesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.texttospeech.v1beta1.ListVoicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.texttospeech.v1beta1.ListVoicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.texttospeech.v1beta1.ListVoicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.texttospeech.v1beta1.TextToSpeechClient.prototype.listVoices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.texttospeech.v1beta1.TextToSpeech/ListVoices',
      request,
      metadata || {},
      methodDescriptor_TextToSpeech_ListVoices,
      callback);
};


/**
 * @param {!proto.google.cloud.texttospeech.v1beta1.ListVoicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.texttospeech.v1beta1.ListVoicesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.texttospeech.v1beta1.TextToSpeechPromiseClient.prototype.listVoices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.texttospeech.v1beta1.TextToSpeech/ListVoices',
      request,
      metadata || {},
      methodDescriptor_TextToSpeech_ListVoices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest,
 *   !proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse>}
 */
const methodDescriptor_TextToSpeech_SynthesizeSpeech = new grpc.web.MethodDescriptor(
  '/google.cloud.texttospeech.v1beta1.TextToSpeech/SynthesizeSpeech',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest,
  proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse,
  /**
   * @param {!proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest,
 *   !proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse>}
 */
const methodInfo_TextToSpeech_SynthesizeSpeech = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse,
  /**
   * @param {!proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.texttospeech.v1beta1.TextToSpeechClient.prototype.synthesizeSpeech =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.texttospeech.v1beta1.TextToSpeech/SynthesizeSpeech',
      request,
      metadata || {},
      methodDescriptor_TextToSpeech_SynthesizeSpeech,
      callback);
};


/**
 * @param {!proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.texttospeech.v1beta1.SynthesizeSpeechResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.texttospeech.v1beta1.TextToSpeechPromiseClient.prototype.synthesizeSpeech =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.texttospeech.v1beta1.TextToSpeech/SynthesizeSpeech',
      request,
      metadata || {},
      methodDescriptor_TextToSpeech_SynthesizeSpeech);
};


module.exports = proto.google.cloud.texttospeech.v1beta1;

