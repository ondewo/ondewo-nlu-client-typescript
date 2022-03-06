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


var google_ads_googleads_v0_resources_ad_group_bid_modifier_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_bid_modifier_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./ad_group_bid_modifier_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.AdGroupBidModifierServiceClient =
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
proto.google.ads.googleads.v0.services.AdGroupBidModifierServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetAdGroupBidModifierRequest,
 *   !proto.google.ads.googleads.v0.resources.AdGroupBidModifier>}
 */
const methodDescriptor_AdGroupBidModifierService_GetAdGroupBidModifier = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.AdGroupBidModifierService/GetAdGroupBidModifier',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetAdGroupBidModifierRequest,
  google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetAdGroupBidModifierRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetAdGroupBidModifierRequest,
 *   !proto.google.ads.googleads.v0.resources.AdGroupBidModifier>}
 */
const methodInfo_AdGroupBidModifierService_GetAdGroupBidModifier = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetAdGroupBidModifierRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetAdGroupBidModifierRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.AdGroupBidModifier)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.AdGroupBidModifier>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.AdGroupBidModifierServiceClient.prototype.getAdGroupBidModifier =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupBidModifierService/GetAdGroupBidModifier',
      request,
      metadata || {},
      methodDescriptor_AdGroupBidModifierService_GetAdGroupBidModifier,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetAdGroupBidModifierRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.AdGroupBidModifier>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.AdGroupBidModifierServicePromiseClient.prototype.getAdGroupBidModifier =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupBidModifierService/GetAdGroupBidModifier',
      request,
      metadata || {},
      methodDescriptor_AdGroupBidModifierService_GetAdGroupBidModifier);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersRequest,
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersResponse>}
 */
const methodDescriptor_AdGroupBidModifierService_MutateAdGroupBidModifiers = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.AdGroupBidModifierService/MutateAdGroupBidModifiers',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersRequest,
  proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersRequest,
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersResponse>}
 */
const methodInfo_AdGroupBidModifierService_MutateAdGroupBidModifiers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.AdGroupBidModifierServiceClient.prototype.mutateAdGroupBidModifiers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupBidModifierService/MutateAdGroupBidModifiers',
      request,
      metadata || {},
      methodDescriptor_AdGroupBidModifierService_MutateAdGroupBidModifiers,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.MutateAdGroupBidModifiersResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.AdGroupBidModifierServicePromiseClient.prototype.mutateAdGroupBidModifiers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupBidModifierService/MutateAdGroupBidModifiers',
      request,
      metadata || {},
      methodDescriptor_AdGroupBidModifierService_MutateAdGroupBidModifiers);
};


module.exports = proto.google.ads.googleads.v0.services;

