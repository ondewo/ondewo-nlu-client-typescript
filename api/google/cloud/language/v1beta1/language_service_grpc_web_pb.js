/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.language.v1beta1
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
proto.google.cloud.language = {};
proto.google.cloud.language.v1beta1 = require('./language_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.language.v1beta1.LanguageServiceClient =
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
proto.google.cloud.language.v1beta1.LanguageServicePromiseClient =
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
 *   !proto.google.cloud.language.v1beta1.AnalyzeSentimentRequest,
 *   !proto.google.cloud.language.v1beta1.AnalyzeSentimentResponse>}
 */
const methodDescriptor_LanguageService_AnalyzeSentiment = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta1.LanguageService/AnalyzeSentiment',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta1.AnalyzeSentimentRequest,
  proto.google.cloud.language.v1beta1.AnalyzeSentimentResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta1.AnalyzeSentimentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta1.AnalyzeSentimentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta1.AnalyzeSentimentRequest,
 *   !proto.google.cloud.language.v1beta1.AnalyzeSentimentResponse>}
 */
const methodInfo_LanguageService_AnalyzeSentiment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta1.AnalyzeSentimentResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta1.AnalyzeSentimentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta1.AnalyzeSentimentResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta1.AnalyzeSentimentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta1.AnalyzeSentimentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta1.AnalyzeSentimentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta1.LanguageServiceClient.prototype.analyzeSentiment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta1.LanguageService/AnalyzeSentiment',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeSentiment,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta1.AnalyzeSentimentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta1.AnalyzeSentimentResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta1.LanguageServicePromiseClient.prototype.analyzeSentiment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta1.LanguageService/AnalyzeSentiment',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeSentiment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.language.v1beta1.AnalyzeEntitiesRequest,
 *   !proto.google.cloud.language.v1beta1.AnalyzeEntitiesResponse>}
 */
const methodDescriptor_LanguageService_AnalyzeEntities = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta1.LanguageService/AnalyzeEntities',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta1.AnalyzeEntitiesRequest,
  proto.google.cloud.language.v1beta1.AnalyzeEntitiesResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta1.AnalyzeEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta1.AnalyzeEntitiesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta1.AnalyzeEntitiesRequest,
 *   !proto.google.cloud.language.v1beta1.AnalyzeEntitiesResponse>}
 */
const methodInfo_LanguageService_AnalyzeEntities = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta1.AnalyzeEntitiesResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta1.AnalyzeEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta1.AnalyzeEntitiesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta1.AnalyzeEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta1.AnalyzeEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta1.AnalyzeEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta1.LanguageServiceClient.prototype.analyzeEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta1.LanguageService/AnalyzeEntities',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeEntities,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta1.AnalyzeEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta1.AnalyzeEntitiesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta1.LanguageServicePromiseClient.prototype.analyzeEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta1.LanguageService/AnalyzeEntities',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeEntities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.language.v1beta1.AnalyzeSyntaxRequest,
 *   !proto.google.cloud.language.v1beta1.AnalyzeSyntaxResponse>}
 */
const methodDescriptor_LanguageService_AnalyzeSyntax = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta1.LanguageService/AnalyzeSyntax',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta1.AnalyzeSyntaxRequest,
  proto.google.cloud.language.v1beta1.AnalyzeSyntaxResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta1.AnalyzeSyntaxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta1.AnalyzeSyntaxResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta1.AnalyzeSyntaxRequest,
 *   !proto.google.cloud.language.v1beta1.AnalyzeSyntaxResponse>}
 */
const methodInfo_LanguageService_AnalyzeSyntax = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta1.AnalyzeSyntaxResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta1.AnalyzeSyntaxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta1.AnalyzeSyntaxResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta1.AnalyzeSyntaxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta1.AnalyzeSyntaxResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta1.AnalyzeSyntaxResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta1.LanguageServiceClient.prototype.analyzeSyntax =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta1.LanguageService/AnalyzeSyntax',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeSyntax,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta1.AnalyzeSyntaxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta1.AnalyzeSyntaxResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta1.LanguageServicePromiseClient.prototype.analyzeSyntax =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta1.LanguageService/AnalyzeSyntax',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeSyntax);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.language.v1beta1.AnnotateTextRequest,
 *   !proto.google.cloud.language.v1beta1.AnnotateTextResponse>}
 */
const methodDescriptor_LanguageService_AnnotateText = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta1.LanguageService/AnnotateText',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta1.AnnotateTextRequest,
  proto.google.cloud.language.v1beta1.AnnotateTextResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta1.AnnotateTextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta1.AnnotateTextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta1.AnnotateTextRequest,
 *   !proto.google.cloud.language.v1beta1.AnnotateTextResponse>}
 */
const methodInfo_LanguageService_AnnotateText = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta1.AnnotateTextResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta1.AnnotateTextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta1.AnnotateTextResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta1.AnnotateTextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta1.AnnotateTextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta1.AnnotateTextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta1.LanguageServiceClient.prototype.annotateText =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta1.LanguageService/AnnotateText',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnnotateText,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta1.AnnotateTextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta1.AnnotateTextResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta1.LanguageServicePromiseClient.prototype.annotateText =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta1.LanguageService/AnnotateText',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnnotateText);
};


module.exports = proto.google.cloud.language.v1beta1;

