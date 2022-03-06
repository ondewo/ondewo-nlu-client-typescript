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


var google_ads_googleads_v0_resources_campaign_criterion_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_criterion_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./campaign_criterion_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.CampaignCriterionServiceClient =
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
proto.google.ads.googleads.v0.services.CampaignCriterionServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetCampaignCriterionRequest,
 *   !proto.google.ads.googleads.v0.resources.CampaignCriterion>}
 */
const methodDescriptor_CampaignCriterionService_GetCampaignCriterion = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.CampaignCriterionService/GetCampaignCriterion',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetCampaignCriterionRequest,
  google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetCampaignCriterionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetCampaignCriterionRequest,
 *   !proto.google.ads.googleads.v0.resources.CampaignCriterion>}
 */
const methodInfo_CampaignCriterionService_GetCampaignCriterion = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetCampaignCriterionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetCampaignCriterionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.CampaignCriterion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.CampaignCriterion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.CampaignCriterionServiceClient.prototype.getCampaignCriterion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignCriterionService/GetCampaignCriterion',
      request,
      metadata || {},
      methodDescriptor_CampaignCriterionService_GetCampaignCriterion,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetCampaignCriterionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.CampaignCriterion>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.CampaignCriterionServicePromiseClient.prototype.getCampaignCriterion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignCriterionService/GetCampaignCriterion',
      request,
      metadata || {},
      methodDescriptor_CampaignCriterionService_GetCampaignCriterion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.MutateCampaignCriteriaRequest,
 *   !proto.google.ads.googleads.v0.services.MutateCampaignCriteriaResponse>}
 */
const methodDescriptor_CampaignCriterionService_MutateCampaignCriteria = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.CampaignCriterionService/MutateCampaignCriteria',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.MutateCampaignCriteriaRequest,
  proto.google.ads.googleads.v0.services.MutateCampaignCriteriaResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateCampaignCriteriaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateCampaignCriteriaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.MutateCampaignCriteriaRequest,
 *   !proto.google.ads.googleads.v0.services.MutateCampaignCriteriaResponse>}
 */
const methodInfo_CampaignCriterionService_MutateCampaignCriteria = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.MutateCampaignCriteriaResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateCampaignCriteriaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateCampaignCriteriaResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateCampaignCriteriaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.MutateCampaignCriteriaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.MutateCampaignCriteriaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.CampaignCriterionServiceClient.prototype.mutateCampaignCriteria =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignCriterionService/MutateCampaignCriteria',
      request,
      metadata || {},
      methodDescriptor_CampaignCriterionService_MutateCampaignCriteria,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateCampaignCriteriaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.MutateCampaignCriteriaResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.CampaignCriterionServicePromiseClient.prototype.mutateCampaignCriteria =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CampaignCriterionService/MutateCampaignCriteria',
      request,
      metadata || {},
      methodDescriptor_CampaignCriterionService_MutateCampaignCriteria);
};


module.exports = proto.google.ads.googleads.v0.services;

