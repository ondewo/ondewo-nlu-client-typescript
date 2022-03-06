/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.videointelligence.v1p1beta1
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

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.videointelligence = {};
proto.google.cloud.videointelligence.v1p1beta1 = require('./video_intelligence_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.videointelligence.v1p1beta1.VideoIntelligenceServiceClient =
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
proto.google.cloud.videointelligence.v1p1beta1.VideoIntelligenceServicePromiseClient =
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
 *   !proto.google.cloud.videointelligence.v1p1beta1.AnnotateVideoRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_VideoIntelligenceService_AnnotateVideo = new grpc.web.MethodDescriptor(
  '/google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService/AnnotateVideo',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.videointelligence.v1p1beta1.AnnotateVideoRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.videointelligence.v1p1beta1.AnnotateVideoRequest} request
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
 *   !proto.google.cloud.videointelligence.v1p1beta1.AnnotateVideoRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_VideoIntelligenceService_AnnotateVideo = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.videointelligence.v1p1beta1.AnnotateVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.videointelligence.v1p1beta1.AnnotateVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.videointelligence.v1p1beta1.VideoIntelligenceServiceClient.prototype.annotateVideo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService/AnnotateVideo',
      request,
      metadata || {},
      methodDescriptor_VideoIntelligenceService_AnnotateVideo,
      callback);
};


/**
 * @param {!proto.google.cloud.videointelligence.v1p1beta1.AnnotateVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.videointelligence.v1p1beta1.VideoIntelligenceServicePromiseClient.prototype.annotateVideo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService/AnnotateVideo',
      request,
      metadata || {},
      methodDescriptor_VideoIntelligenceService_AnnotateVideo);
};


module.exports = proto.google.cloud.videointelligence.v1p1beta1;

