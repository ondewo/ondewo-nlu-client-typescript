/**
 * @fileoverview gRPC-Web generated client stub for google.ads.googleads.v0.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_ads_googleads_v0_common_ad_pb = require('../../../../../google/ads/googleads/v0/common/ad_pb.js')

var google_ads_googleads_v0_enums_keyword_match_type_pb = require('../../../../../google/ads/googleads/v0/enums/keyword_match_type_pb.js')

var google_ads_googleads_v0_resources_recommendation_pb = require('../../../../../google/ads/googleads/v0/resources/recommendation_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./recommendation_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.RecommendationServiceClient =
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
proto.google.ads.googleads.v0.services.RecommendationServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetRecommendationRequest,
 *   !proto.google.ads.googleads.v0.resources.Recommendation>}
 */
const methodDescriptor_RecommendationService_GetRecommendation = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.RecommendationService/GetRecommendation',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetRecommendationRequest,
  google_ads_googleads_v0_resources_recommendation_pb.Recommendation,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetRecommendationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_recommendation_pb.Recommendation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetRecommendationRequest,
 *   !proto.google.ads.googleads.v0.resources.Recommendation>}
 */
const methodInfo_RecommendationService_GetRecommendation = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_recommendation_pb.Recommendation,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetRecommendationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_recommendation_pb.Recommendation.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetRecommendationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.Recommendation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.Recommendation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.RecommendationServiceClient.prototype.getRecommendation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.RecommendationService/GetRecommendation',
      request,
      metadata || {},
      methodDescriptor_RecommendationService_GetRecommendation,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetRecommendationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.Recommendation>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.RecommendationServicePromiseClient.prototype.getRecommendation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.RecommendationService/GetRecommendation',
      request,
      metadata || {},
      methodDescriptor_RecommendationService_GetRecommendation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.ApplyRecommendationRequest,
 *   !proto.google.ads.googleads.v0.services.ApplyRecommendationResponse>}
 */
const methodDescriptor_RecommendationService_ApplyRecommendation = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.RecommendationService/ApplyRecommendation',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.ApplyRecommendationRequest,
  proto.google.ads.googleads.v0.services.ApplyRecommendationResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.ApplyRecommendationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.ApplyRecommendationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.ApplyRecommendationRequest,
 *   !proto.google.ads.googleads.v0.services.ApplyRecommendationResponse>}
 */
const methodInfo_RecommendationService_ApplyRecommendation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.ApplyRecommendationResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.ApplyRecommendationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.ApplyRecommendationResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.ApplyRecommendationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.ApplyRecommendationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.ApplyRecommendationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.RecommendationServiceClient.prototype.applyRecommendation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.RecommendationService/ApplyRecommendation',
      request,
      metadata || {},
      methodDescriptor_RecommendationService_ApplyRecommendation,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.ApplyRecommendationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.ApplyRecommendationResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.RecommendationServicePromiseClient.prototype.applyRecommendation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.RecommendationService/ApplyRecommendation',
      request,
      metadata || {},
      methodDescriptor_RecommendationService_ApplyRecommendation);
};


module.exports = proto.google.ads.googleads.v0.services;

