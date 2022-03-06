/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.language.v1beta2
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.language = {};
proto.google.cloud.language.v1beta2 = require('./language_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.language.v1beta2.LanguageServiceClient =
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
proto.google.cloud.language.v1beta2.LanguageServicePromiseClient =
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
 *   !proto.google.cloud.language.v1beta2.AnalyzeSentimentRequest,
 *   !proto.google.cloud.language.v1beta2.AnalyzeSentimentResponse>}
 */
const methodDescriptor_LanguageService_AnalyzeSentiment = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta2.LanguageService/AnalyzeSentiment',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta2.AnalyzeSentimentRequest,
  proto.google.cloud.language.v1beta2.AnalyzeSentimentResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnalyzeSentimentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnalyzeSentimentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta2.AnalyzeSentimentRequest,
 *   !proto.google.cloud.language.v1beta2.AnalyzeSentimentResponse>}
 */
const methodInfo_LanguageService_AnalyzeSentiment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta2.AnalyzeSentimentResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnalyzeSentimentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnalyzeSentimentResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta2.AnalyzeSentimentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta2.AnalyzeSentimentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta2.AnalyzeSentimentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta2.LanguageServiceClient.prototype.analyzeSentiment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnalyzeSentiment',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeSentiment,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta2.AnalyzeSentimentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta2.AnalyzeSentimentResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta2.LanguageServicePromiseClient.prototype.analyzeSentiment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnalyzeSentiment',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeSentiment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.language.v1beta2.AnalyzeEntitiesRequest,
 *   !proto.google.cloud.language.v1beta2.AnalyzeEntitiesResponse>}
 */
const methodDescriptor_LanguageService_AnalyzeEntities = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta2.LanguageService/AnalyzeEntities',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta2.AnalyzeEntitiesRequest,
  proto.google.cloud.language.v1beta2.AnalyzeEntitiesResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnalyzeEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnalyzeEntitiesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta2.AnalyzeEntitiesRequest,
 *   !proto.google.cloud.language.v1beta2.AnalyzeEntitiesResponse>}
 */
const methodInfo_LanguageService_AnalyzeEntities = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta2.AnalyzeEntitiesResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnalyzeEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnalyzeEntitiesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta2.AnalyzeEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta2.AnalyzeEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta2.AnalyzeEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta2.LanguageServiceClient.prototype.analyzeEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnalyzeEntities',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeEntities,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta2.AnalyzeEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta2.AnalyzeEntitiesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta2.LanguageServicePromiseClient.prototype.analyzeEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnalyzeEntities',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeEntities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest,
 *   !proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse>}
 */
const methodDescriptor_LanguageService_AnalyzeEntitySentiment = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta2.LanguageService/AnalyzeEntitySentiment',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest,
  proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest,
 *   !proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse>}
 */
const methodInfo_LanguageService_AnalyzeEntitySentiment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta2.LanguageServiceClient.prototype.analyzeEntitySentiment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnalyzeEntitySentiment',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeEntitySentiment,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta2.LanguageServicePromiseClient.prototype.analyzeEntitySentiment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnalyzeEntitySentiment',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeEntitySentiment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.language.v1beta2.AnalyzeSyntaxRequest,
 *   !proto.google.cloud.language.v1beta2.AnalyzeSyntaxResponse>}
 */
const methodDescriptor_LanguageService_AnalyzeSyntax = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta2.LanguageService/AnalyzeSyntax',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta2.AnalyzeSyntaxRequest,
  proto.google.cloud.language.v1beta2.AnalyzeSyntaxResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnalyzeSyntaxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnalyzeSyntaxResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta2.AnalyzeSyntaxRequest,
 *   !proto.google.cloud.language.v1beta2.AnalyzeSyntaxResponse>}
 */
const methodInfo_LanguageService_AnalyzeSyntax = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta2.AnalyzeSyntaxResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnalyzeSyntaxRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnalyzeSyntaxResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta2.AnalyzeSyntaxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta2.AnalyzeSyntaxResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta2.AnalyzeSyntaxResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta2.LanguageServiceClient.prototype.analyzeSyntax =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnalyzeSyntax',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeSyntax,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta2.AnalyzeSyntaxRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta2.AnalyzeSyntaxResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta2.LanguageServicePromiseClient.prototype.analyzeSyntax =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnalyzeSyntax',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnalyzeSyntax);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.language.v1beta2.ClassifyTextRequest,
 *   !proto.google.cloud.language.v1beta2.ClassifyTextResponse>}
 */
const methodDescriptor_LanguageService_ClassifyText = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta2.LanguageService/ClassifyText',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta2.ClassifyTextRequest,
  proto.google.cloud.language.v1beta2.ClassifyTextResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.ClassifyTextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.ClassifyTextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta2.ClassifyTextRequest,
 *   !proto.google.cloud.language.v1beta2.ClassifyTextResponse>}
 */
const methodInfo_LanguageService_ClassifyText = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta2.ClassifyTextResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.ClassifyTextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.ClassifyTextResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta2.ClassifyTextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta2.ClassifyTextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta2.ClassifyTextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta2.LanguageServiceClient.prototype.classifyText =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/ClassifyText',
      request,
      metadata || {},
      methodDescriptor_LanguageService_ClassifyText,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta2.ClassifyTextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta2.ClassifyTextResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta2.LanguageServicePromiseClient.prototype.classifyText =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/ClassifyText',
      request,
      metadata || {},
      methodDescriptor_LanguageService_ClassifyText);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.language.v1beta2.AnnotateTextRequest,
 *   !proto.google.cloud.language.v1beta2.AnnotateTextResponse>}
 */
const methodDescriptor_LanguageService_AnnotateText = new grpc.web.MethodDescriptor(
  '/google.cloud.language.v1beta2.LanguageService/AnnotateText',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.language.v1beta2.AnnotateTextRequest,
  proto.google.cloud.language.v1beta2.AnnotateTextResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnnotateTextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnnotateTextResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.language.v1beta2.AnnotateTextRequest,
 *   !proto.google.cloud.language.v1beta2.AnnotateTextResponse>}
 */
const methodInfo_LanguageService_AnnotateText = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.language.v1beta2.AnnotateTextResponse,
  /**
   * @param {!proto.google.cloud.language.v1beta2.AnnotateTextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.language.v1beta2.AnnotateTextResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.language.v1beta2.AnnotateTextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.language.v1beta2.AnnotateTextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.language.v1beta2.AnnotateTextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.language.v1beta2.LanguageServiceClient.prototype.annotateText =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnnotateText',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnnotateText,
      callback);
};


/**
 * @param {!proto.google.cloud.language.v1beta2.AnnotateTextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.language.v1beta2.AnnotateTextResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.language.v1beta2.LanguageServicePromiseClient.prototype.annotateText =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.language.v1beta2.LanguageService/AnnotateText',
      request,
      metadata || {},
      methodDescriptor_LanguageService_AnnotateText);
};


module.exports = proto.google.cloud.language.v1beta2;

