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


var google_ads_googleads_v0_resources_campaign_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./campaign_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.CampaignServiceClient =
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
proto.google.ads.googleads.v0.services.CampaignServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetCampaignRequest,
 *   !proto.google.ads.googleads.v0.resources.Campaign>}
 */
const methodDescriptor_CampaignService_GetCampaign = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.CampaignService/GetCampaign',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetCampaignRequest,
  google_ads_googleads_v0_resources_campaign_pb.Campaign,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetCampaignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_campaign_pb.Campaign.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetCampaignRequest,
 *   !proto.google.ads.googleads.v0.resources.Campaign>}
 */
const methodInfo_CampaignService_GetCampaign = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_campaign_pb.Campaign,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetCampaignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_campaign_pb.Campaign.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetCampaignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.Campaign)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.Campaign>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.CampaignServiceClient.prototype.getCampaign =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignService/GetCampaign',
      request,
      metadata || {},
      methodDescriptor_CampaignService_GetCampaign,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetCampaignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.Campaign>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.CampaignServicePromiseClient.prototype.getCampaign =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignService/GetCampaign',
      request,
      metadata || {},
      methodDescriptor_CampaignService_GetCampaign);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.MutateCampaignsRequest,
 *   !proto.google.ads.googleads.v0.services.MutateCampaignsResponse>}
 */
const methodDescriptor_CampaignService_MutateCampaigns = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.CampaignService/MutateCampaigns',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.MutateCampaignsRequest,
  proto.google.ads.googleads.v0.services.MutateCampaignsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateCampaignsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateCampaignsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.MutateCampaignsRequest,
 *   !proto.google.ads.googleads.v0.services.MutateCampaignsResponse>}
 */
const methodInfo_CampaignService_MutateCampaigns = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.MutateCampaignsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateCampaignsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateCampaignsResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateCampaignsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.MutateCampaignsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.MutateCampaignsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.CampaignServiceClient.prototype.mutateCampaigns =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignService/MutateCampaigns',
      request,
      metadata || {},
      methodDescriptor_CampaignService_MutateCampaigns,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateCampaignsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.MutateCampaignsResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.CampaignServicePromiseClient.prototype.mutateCampaigns =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignService/MutateCampaigns',
      request,
      metadata || {},
      methodDescriptor_CampaignService_MutateCampaigns);
};


module.exports = proto.google.ads.googleads.v0.services;

