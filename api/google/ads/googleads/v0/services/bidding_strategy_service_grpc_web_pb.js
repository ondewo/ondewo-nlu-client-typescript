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


var google_ads_googleads_v0_resources_bidding_strategy_pb = require('../../../../../google/ads/googleads/v0/resources/bidding_strategy_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./bidding_strategy_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.BiddingStrategyServiceClient =
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
proto.google.ads.googleads.v0.services.BiddingStrategyServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetBiddingStrategyRequest,
 *   !proto.google.ads.googleads.v0.resources.BiddingStrategy>}
 */
const methodDescriptor_BiddingStrategyService_GetBiddingStrategy = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.BiddingStrategyService/GetBiddingStrategy',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetBiddingStrategyRequest,
  google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetBiddingStrategyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetBiddingStrategyRequest,
 *   !proto.google.ads.googleads.v0.resources.BiddingStrategy>}
 */
const methodInfo_BiddingStrategyService_GetBiddingStrategy = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetBiddingStrategyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetBiddingStrategyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.BiddingStrategy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.BiddingStrategy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.BiddingStrategyServiceClient.prototype.getBiddingStrategy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.BiddingStrategyService/GetBiddingStrategy',
      request,
      metadata || {},
      methodDescriptor_BiddingStrategyService_GetBiddingStrategy,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetBiddingStrategyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.BiddingStrategy>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.BiddingStrategyServicePromiseClient.prototype.getBiddingStrategy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.BiddingStrategyService/GetBiddingStrategy',
      request,
      metadata || {},
      methodDescriptor_BiddingStrategyService_GetBiddingStrategy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.MutateBiddingStrategiesRequest,
 *   !proto.google.ads.googleads.v0.services.MutateBiddingStrategiesResponse>}
 */
const methodDescriptor_BiddingStrategyService_MutateBiddingStrategies = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.BiddingStrategyService/MutateBiddingStrategies',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.MutateBiddingStrategiesRequest,
  proto.google.ads.googleads.v0.services.MutateBiddingStrategiesResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateBiddingStrategiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateBiddingStrategiesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.MutateBiddingStrategiesRequest,
 *   !proto.google.ads.googleads.v0.services.MutateBiddingStrategiesResponse>}
 */
const methodInfo_BiddingStrategyService_MutateBiddingStrategies = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.MutateBiddingStrategiesResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateBiddingStrategiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateBiddingStrategiesResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateBiddingStrategiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.MutateBiddingStrategiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.MutateBiddingStrategiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.BiddingStrategyServiceClient.prototype.mutateBiddingStrategies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.BiddingStrategyService/MutateBiddingStrategies',
      request,
      metadata || {},
      methodDescriptor_BiddingStrategyService_MutateBiddingStrategies,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateBiddingStrategiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.MutateBiddingStrategiesResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.BiddingStrategyServicePromiseClient.prototype.mutateBiddingStrategies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.BiddingStrategyService/MutateBiddingStrategies',
      request,
      metadata || {},
      methodDescriptor_BiddingStrategyService_MutateBiddingStrategies);
};


module.exports = proto.google.ads.googleads.v0.services;

