/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dialogflow = {};
proto.google.cloud.dialogflow.v2beta1 = require('./knowledge_base_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesClient =
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
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesPromiseClient =
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
 *   !proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse>}
 */
const methodDescriptor_KnowledgeBases_ListKnowledgeBases = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.KnowledgeBases/ListKnowledgeBases',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesRequest,
  proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse>}
 */
const methodInfo_KnowledgeBases_ListKnowledgeBases = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesClient.prototype.listKnowledgeBases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.KnowledgeBases/ListKnowledgeBases',
      request,
      metadata || {},
      methodDescriptor_KnowledgeBases_ListKnowledgeBases,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesPromiseClient.prototype.listKnowledgeBases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.KnowledgeBases/ListKnowledgeBases',
      request,
      metadata || {},
      methodDescriptor_KnowledgeBases_ListKnowledgeBases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.GetKnowledgeBaseRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.KnowledgeBase>}
 */
const methodDescriptor_KnowledgeBases_GetKnowledgeBase = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.KnowledgeBases/GetKnowledgeBase',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.GetKnowledgeBaseRequest,
  proto.google.cloud.dialogflow.v2beta1.KnowledgeBase,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.GetKnowledgeBaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.KnowledgeBase.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.GetKnowledgeBaseRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.KnowledgeBase>}
 */
const methodInfo_KnowledgeBases_GetKnowledgeBase = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.KnowledgeBase,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.GetKnowledgeBaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.KnowledgeBase.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.GetKnowledgeBaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.KnowledgeBase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.KnowledgeBase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesClient.prototype.getKnowledgeBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.KnowledgeBases/GetKnowledgeBase',
      request,
      metadata || {},
      methodDescriptor_KnowledgeBases_GetKnowledgeBase,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.GetKnowledgeBaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.KnowledgeBase>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesPromiseClient.prototype.getKnowledgeBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.KnowledgeBases/GetKnowledgeBase',
      request,
      metadata || {},
      methodDescriptor_KnowledgeBases_GetKnowledgeBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.CreateKnowledgeBaseRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.KnowledgeBase>}
 */
const methodDescriptor_KnowledgeBases_CreateKnowledgeBase = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.KnowledgeBases/CreateKnowledgeBase',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.CreateKnowledgeBaseRequest,
  proto.google.cloud.dialogflow.v2beta1.KnowledgeBase,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.CreateKnowledgeBaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.KnowledgeBase.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2beta1.CreateKnowledgeBaseRequest,
 *   !proto.google.cloud.dialogflow.v2beta1.KnowledgeBase>}
 */
const methodInfo_KnowledgeBases_CreateKnowledgeBase = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2beta1.KnowledgeBase,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.CreateKnowledgeBaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2beta1.KnowledgeBase.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.CreateKnowledgeBaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2beta1.KnowledgeBase)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2beta1.KnowledgeBase>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesClient.prototype.createKnowledgeBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.KnowledgeBases/CreateKnowledgeBase',
      request,
      metadata || {},
      methodDescriptor_KnowledgeBases_CreateKnowledgeBase,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.CreateKnowledgeBaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2beta1.KnowledgeBase>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesPromiseClient.prototype.createKnowledgeBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.KnowledgeBases/CreateKnowledgeBase',
      request,
      metadata || {},
      methodDescriptor_KnowledgeBases_CreateKnowledgeBase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.dialogflow.v2beta1.DeleteKnowledgeBaseRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_KnowledgeBases_DeleteKnowledgeBase = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2beta1.KnowledgeBases/DeleteKnowledgeBase',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2beta1.DeleteKnowledgeBaseRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteKnowledgeBaseRequest} request
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
 *   !proto.google.cloud.dialogflow.v2beta1.DeleteKnowledgeBaseRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_KnowledgeBases_DeleteKnowledgeBase = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteKnowledgeBaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteKnowledgeBaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesClient.prototype.deleteKnowledgeBase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.KnowledgeBases/DeleteKnowledgeBase',
      request,
      metadata || {},
      methodDescriptor_KnowledgeBases_DeleteKnowledgeBase,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2beta1.DeleteKnowledgeBaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2beta1.KnowledgeBasesPromiseClient.prototype.deleteKnowledgeBase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2beta1.KnowledgeBases/DeleteKnowledgeBase',
      request,
      metadata || {},
      methodDescriptor_KnowledgeBases_DeleteKnowledgeBase);
};


module.exports = proto.google.cloud.dialogflow.v2beta1;

