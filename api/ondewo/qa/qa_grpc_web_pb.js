/**
 * @fileoverview gRPC-Web generated client stub for ondewo.qa
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.qa = require('./qa_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.qa.QAClient =
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
proto.ondewo.qa.QAPromiseClient =
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
 *   !proto.ondewo.qa.GetAnswerRequest,
 *   !proto.ondewo.qa.GetAnswerResponse>}
 */
const methodDescriptor_QA_GetAnswer = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/GetAnswer',
  grpc.web.MethodType.UNARY,
  proto.ondewo.qa.GetAnswerRequest,
  proto.ondewo.qa.GetAnswerResponse,
  /**
   * @param {!proto.ondewo.qa.GetAnswerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.GetAnswerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.qa.GetAnswerRequest,
 *   !proto.ondewo.qa.GetAnswerResponse>}
 */
const methodInfo_QA_GetAnswer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.qa.GetAnswerResponse,
  /**
   * @param {!proto.ondewo.qa.GetAnswerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.GetAnswerResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.qa.GetAnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.qa.GetAnswerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.GetAnswerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.getAnswer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/GetAnswer',
      request,
      metadata || {},
      methodDescriptor_QA_GetAnswer,
      callback);
};


/**
 * @param {!proto.ondewo.qa.GetAnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.GetAnswerResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.getAnswer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/GetAnswer',
      request,
      metadata || {},
      methodDescriptor_QA_GetAnswer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.qa.RunScraperResponse>}
 */
const methodDescriptor_QA_RunScraper = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/RunScraper',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.ondewo.qa.RunScraperResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.RunScraperResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.qa.RunScraperResponse>}
 */
const methodInfo_QA_RunScraper = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.qa.RunScraperResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.RunScraperResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.qa.RunScraperResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.RunScraperResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.runScraper =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/RunScraper',
      request,
      metadata || {},
      methodDescriptor_QA_RunScraper,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.RunScraperResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.runScraper =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/RunScraper',
      request,
      metadata || {},
      methodDescriptor_QA_RunScraper);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.qa.RunTrainingResponse>}
 */
const methodDescriptor_QA_RunTraining = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/RunTraining',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.ondewo.qa.RunTrainingResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.RunTrainingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.qa.RunTrainingResponse>}
 */
const methodInfo_QA_RunTraining = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.qa.RunTrainingResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.RunTrainingResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.qa.RunTrainingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.RunTrainingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.runTraining =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/RunTraining',
      request,
      metadata || {},
      methodDescriptor_QA_RunTraining,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.RunTrainingResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.runTraining =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/RunTraining',
      request,
      metadata || {},
      methodDescriptor_QA_RunTraining);
};


module.exports = proto.ondewo.qa;

