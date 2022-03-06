/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.dialogflow.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_dialogflow_v2_context_pb = require('../../../../google/cloud/dialogflow/v2/context_pb.js')

var google_cloud_dialogflow_v2_intent_pb = require('../../../../google/cloud/dialogflow/v2/intent_pb.js')

var google_cloud_dialogflow_v2_session_entity_type_pb = require('../../../../google/cloud/dialogflow/v2/session_entity_type_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')

var google_type_latlng_pb = require('../../../../google/type/latlng_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.dialogflow = {};
proto.google.cloud.dialogflow.v2 = require('./session_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.dialogflow.v2.SessionsClient =
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
proto.google.cloud.dialogflow.v2.SessionsPromiseClient =
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
 *   !proto.google.cloud.dialogflow.v2.DetectIntentRequest,
 *   !proto.google.cloud.dialogflow.v2.DetectIntentResponse>}
 */
const methodDescriptor_Sessions_DetectIntent = new grpc.web.MethodDescriptor(
  '/google.cloud.dialogflow.v2.Sessions/DetectIntent',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.dialogflow.v2.DetectIntentRequest,
  proto.google.cloud.dialogflow.v2.DetectIntentResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DetectIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.DetectIntentResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.dialogflow.v2.DetectIntentRequest,
 *   !proto.google.cloud.dialogflow.v2.DetectIntentResponse>}
 */
const methodInfo_Sessions_DetectIntent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.dialogflow.v2.DetectIntentResponse,
  /**
   * @param {!proto.google.cloud.dialogflow.v2.DetectIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.dialogflow.v2.DetectIntentResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.dialogflow.v2.DetectIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.dialogflow.v2.DetectIntentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.dialogflow.v2.DetectIntentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.dialogflow.v2.SessionsClient.prototype.detectIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Sessions/DetectIntent',
      request,
      metadata || {},
      methodDescriptor_Sessions_DetectIntent,
      callback);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.DetectIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.dialogflow.v2.DetectIntentResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.dialogflow.v2.SessionsPromiseClient.prototype.detectIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.dialogflow.v2.Sessions/DetectIntent',
      request,
      metadata || {},
      methodDescriptor_Sessions_DetectIntent);
};


module.exports = proto.google.cloud.dialogflow.v2;

