/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.remoteworkers.v1test2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_devtools_remoteworkers_v1test2_worker_pb = require('../../../../google/devtools/remoteworkers/v1test2/worker_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.remoteworkers = {};
proto.google.devtools.remoteworkers.v1test2 = require('./bots_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.remoteworkers.v1test2.BotsClient =
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
proto.google.devtools.remoteworkers.v1test2.BotsPromiseClient =
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
 *   !proto.google.devtools.remoteworkers.v1test2.CreateBotSessionRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.BotSession>}
 */
const methodDescriptor_Bots_CreateBotSession = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteworkers.v1test2.Bots/CreateBotSession',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteworkers.v1test2.CreateBotSessionRequest,
  proto.google.devtools.remoteworkers.v1test2.BotSession,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.CreateBotSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.BotSession.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteworkers.v1test2.CreateBotSessionRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.BotSession>}
 */
const methodInfo_Bots_CreateBotSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteworkers.v1test2.BotSession,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.CreateBotSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.BotSession.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.CreateBotSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteworkers.v1test2.BotSession)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteworkers.v1test2.BotSession>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteworkers.v1test2.BotsClient.prototype.createBotSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Bots/CreateBotSession',
      request,
      metadata || {},
      methodDescriptor_Bots_CreateBotSession,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.CreateBotSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteworkers.v1test2.BotSession>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteworkers.v1test2.BotsPromiseClient.prototype.createBotSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Bots/CreateBotSession',
      request,
      metadata || {},
      methodDescriptor_Bots_CreateBotSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.remoteworkers.v1test2.UpdateBotSessionRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.BotSession>}
 */
const methodDescriptor_Bots_UpdateBotSession = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteworkers.v1test2.Bots/UpdateBotSession',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteworkers.v1test2.UpdateBotSessionRequest,
  proto.google.devtools.remoteworkers.v1test2.BotSession,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.UpdateBotSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.BotSession.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.remoteworkers.v1test2.UpdateBotSessionRequest,
 *   !proto.google.devtools.remoteworkers.v1test2.BotSession>}
 */
const methodInfo_Bots_UpdateBotSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.remoteworkers.v1test2.BotSession,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.UpdateBotSessionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.remoteworkers.v1test2.BotSession.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.UpdateBotSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.remoteworkers.v1test2.BotSession)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.remoteworkers.v1test2.BotSession>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteworkers.v1test2.BotsClient.prototype.updateBotSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Bots/UpdateBotSession',
      request,
      metadata || {},
      methodDescriptor_Bots_UpdateBotSession,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.UpdateBotSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.remoteworkers.v1test2.BotSession>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteworkers.v1test2.BotsPromiseClient.prototype.updateBotSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Bots/UpdateBotSession',
      request,
      metadata || {},
      methodDescriptor_Bots_UpdateBotSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.remoteworkers.v1test2.PostBotEventTempRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Bots_PostBotEventTemp = new grpc.web.MethodDescriptor(
  '/google.devtools.remoteworkers.v1test2.Bots/PostBotEventTemp',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.remoteworkers.v1test2.PostBotEventTempRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.PostBotEventTempRequest} request
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
 *   !proto.google.devtools.remoteworkers.v1test2.PostBotEventTempRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Bots_PostBotEventTemp = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.remoteworkers.v1test2.PostBotEventTempRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.PostBotEventTempRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.remoteworkers.v1test2.BotsClient.prototype.postBotEventTemp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Bots/PostBotEventTemp',
      request,
      metadata || {},
      methodDescriptor_Bots_PostBotEventTemp,
      callback);
};


/**
 * @param {!proto.google.devtools.remoteworkers.v1test2.PostBotEventTempRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.devtools.remoteworkers.v1test2.BotsPromiseClient.prototype.postBotEventTemp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.remoteworkers.v1test2.Bots/PostBotEventTemp',
      request,
      metadata || {},
      methodDescriptor_Bots_PostBotEventTemp);
};


module.exports = proto.google.devtools.remoteworkers.v1test2;

