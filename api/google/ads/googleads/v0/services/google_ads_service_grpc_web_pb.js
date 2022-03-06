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


var google_ads_googleads_v0_common_metrics_pb = require('../../../../../google/ads/googleads/v0/common/metrics_pb.js')

var google_ads_googleads_v0_enums_ad_network_type_pb = require('../../../../../google/ads/googleads/v0/enums/ad_network_type_pb.js')

var google_ads_googleads_v0_enums_day_of_week_pb = require('../../../../../google/ads/googleads/v0/enums/day_of_week_pb.js')

var google_ads_googleads_v0_enums_device_pb = require('../../../../../google/ads/googleads/v0/enums/device_pb.js')

var google_ads_googleads_v0_enums_slot_pb = require('../../../../../google/ads/googleads/v0/enums/slot_pb.js')

var google_ads_googleads_v0_resources_ad_group_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_pb.js')

var google_ads_googleads_v0_resources_ad_group_ad_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_ad_pb.js')

var google_ads_googleads_v0_resources_ad_group_bid_modifier_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_bid_modifier_pb.js')

var google_ads_googleads_v0_resources_ad_group_criterion_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_criterion_pb.js')

var google_ads_googleads_v0_resources_bidding_strategy_pb = require('../../../../../google/ads/googleads/v0/resources/bidding_strategy_pb.js')

var google_ads_googleads_v0_resources_campaign_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_pb.js')

var google_ads_googleads_v0_resources_campaign_budget_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_budget_pb.js')

var google_ads_googleads_v0_resources_campaign_criterion_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_criterion_pb.js')

var google_ads_googleads_v0_resources_customer_pb = require('../../../../../google/ads/googleads/v0/resources/customer_pb.js')

var google_ads_googleads_v0_resources_geo_target_constant_pb = require('../../../../../google/ads/googleads/v0/resources/geo_target_constant_pb.js')

var google_ads_googleads_v0_resources_keyword_view_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_view_pb.js')

var google_ads_googleads_v0_resources_recommendation_pb = require('../../../../../google/ads/googleads/v0/resources/recommendation_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./google_ads_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.GoogleAdsServiceClient =
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
proto.google.ads.googleads.v0.services.GoogleAdsServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.SearchGoogleAdsRequest,
 *   !proto.google.ads.googleads.v0.services.SearchGoogleAdsResponse>}
 */
const methodDescriptor_GoogleAdsService_Search = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.GoogleAdsService/Search',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.SearchGoogleAdsRequest,
  proto.google.ads.googleads.v0.services.SearchGoogleAdsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.SearchGoogleAdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.SearchGoogleAdsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.SearchGoogleAdsRequest,
 *   !proto.google.ads.googleads.v0.services.SearchGoogleAdsResponse>}
 */
const methodInfo_GoogleAdsService_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.SearchGoogleAdsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.SearchGoogleAdsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.SearchGoogleAdsResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.SearchGoogleAdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.SearchGoogleAdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.SearchGoogleAdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.GoogleAdsServiceClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.GoogleAdsService/Search',
      request,
      metadata || {},
      methodDescriptor_GoogleAdsService_Search,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.SearchGoogleAdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.SearchGoogleAdsResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.GoogleAdsServicePromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.GoogleAdsService/Search',
      request,
      metadata || {},
      methodDescriptor_GoogleAdsService_Search);
};


module.exports = proto.google.ads.googleads.v0.services;

