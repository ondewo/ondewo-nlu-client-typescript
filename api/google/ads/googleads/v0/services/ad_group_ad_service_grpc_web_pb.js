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


var google_ads_googleads_v0_resources_ad_group_ad_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_ad_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./ad_group_ad_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.AdGroupAdServiceClient =
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
proto.google.ads.googleads.v0.services.AdGroupAdServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetAdGroupAdRequest,
 *   !proto.google.ads.googleads.v0.resources.AdGroupAd>}
 */
const methodDescriptor_AdGroupAdService_GetAdGroupAd = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.AdGroupAdService/GetAdGroupAd',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetAdGroupAdRequest,
  google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetAdGroupAdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetAdGroupAdRequest,
 *   !proto.google.ads.googleads.v0.resources.AdGroupAd>}
 */
const methodInfo_AdGroupAdService_GetAdGroupAd = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetAdGroupAdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetAdGroupAdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.AdGroupAd)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.AdGroupAd>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.AdGroupAdServiceClient.prototype.getAdGroupAd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupAdService/GetAdGroupAd',
      request,
      metadata || {},
      methodDescriptor_AdGroupAdService_GetAdGroupAd,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetAdGroupAdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.AdGroupAd>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.AdGroupAdServicePromiseClient.prototype.getAdGroupAd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupAdService/GetAdGroupAd',
      request,
      metadata || {},
      methodDescriptor_AdGroupAdService_GetAdGroupAd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupAdsRequest,
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupAdsResponse>}
 */
const methodDescriptor_AdGroupAdService_MutateAdGroupAds = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.AdGroupAdService/MutateAdGroupAds',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.MutateAdGroupAdsRequest,
  proto.google.ads.googleads.v0.services.MutateAdGroupAdsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupAdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateAdGroupAdsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupAdsRequest,
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupAdsResponse>}
 */
const methodInfo_AdGroupAdService_MutateAdGroupAds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.MutateAdGroupAdsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupAdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateAdGroupAdsResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupAdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.MutateAdGroupAdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.MutateAdGroupAdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.AdGroupAdServiceClient.prototype.mutateAdGroupAds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupAdService/MutateAdGroupAds',
      request,
      metadata || {},
      methodDescriptor_AdGroupAdService_MutateAdGroupAds,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupAdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.MutateAdGroupAdsResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.AdGroupAdServicePromiseClient.prototype.mutateAdGroupAds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupAdService/MutateAdGroupAds',
      request,
      metadata || {},
      methodDescriptor_AdGroupAdService_MutateAdGroupAds);
};


module.exports = proto.google.ads.googleads.v0.services;

