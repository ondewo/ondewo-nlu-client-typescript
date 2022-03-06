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


var google_ads_googleads_v0_resources_campaign_budget_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_budget_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./campaign_budget_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.CampaignBudgetServiceClient =
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
proto.google.ads.googleads.v0.services.CampaignBudgetServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetCampaignBudgetRequest,
 *   !proto.google.ads.googleads.v0.resources.CampaignBudget>}
 */
const methodDescriptor_CampaignBudgetService_GetCampaignBudget = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.CampaignBudgetService/GetCampaignBudget',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetCampaignBudgetRequest,
  google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetCampaignBudgetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetCampaignBudgetRequest,
 *   !proto.google.ads.googleads.v0.resources.CampaignBudget>}
 */
const methodInfo_CampaignBudgetService_GetCampaignBudget = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetCampaignBudgetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetCampaignBudgetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.CampaignBudget)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.CampaignBudget>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.CampaignBudgetServiceClient.prototype.getCampaignBudget =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignBudgetService/GetCampaignBudget',
      request,
      metadata || {},
      methodDescriptor_CampaignBudgetService_GetCampaignBudget,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetCampaignBudgetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.CampaignBudget>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.CampaignBudgetServicePromiseClient.prototype.getCampaignBudget =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignBudgetService/GetCampaignBudget',
      request,
      metadata || {},
      methodDescriptor_CampaignBudgetService_GetCampaignBudget);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.MutateCampaignBudgetsRequest,
 *   !proto.google.ads.googleads.v0.services.MutateCampaignBudgetsResponse>}
 */
const methodDescriptor_CampaignBudgetService_MutateCampaignBudgets = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.CampaignBudgetService/MutateCampaignBudgets',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.MutateCampaignBudgetsRequest,
  proto.google.ads.googleads.v0.services.MutateCampaignBudgetsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateCampaignBudgetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateCampaignBudgetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.MutateCampaignBudgetsRequest,
 *   !proto.google.ads.googleads.v0.services.MutateCampaignBudgetsResponse>}
 */
const methodInfo_CampaignBudgetService_MutateCampaignBudgets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.MutateCampaignBudgetsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateCampaignBudgetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateCampaignBudgetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateCampaignBudgetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.MutateCampaignBudgetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.MutateCampaignBudgetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.CampaignBudgetServiceClient.prototype.mutateCampaignBudgets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignBudgetService/MutateCampaignBudgets',
      request,
      metadata || {},
      methodDescriptor_CampaignBudgetService_MutateCampaignBudgets,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateCampaignBudgetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.MutateCampaignBudgetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.CampaignBudgetServicePromiseClient.prototype.mutateCampaignBudgets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignBudgetService/MutateCampaignBudgets',
      request,
      metadata || {},
      methodDescriptor_CampaignBudgetService_MutateCampaignBudgets);
};


module.exports = proto.google.ads.googleads.v0.services;

