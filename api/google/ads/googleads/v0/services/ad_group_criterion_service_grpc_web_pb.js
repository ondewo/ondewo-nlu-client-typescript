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


var google_ads_googleads_v0_resources_ad_group_criterion_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_criterion_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./ad_group_criterion_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.AdGroupCriterionServiceClient =
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
proto.google.ads.googleads.v0.services.AdGroupCriterionServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetAdGroupCriterionRequest,
 *   !proto.google.ads.googleads.v0.resources.AdGroupCriterion>}
 */
const methodDescriptor_AdGroupCriterionService_GetAdGroupCriterion = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.AdGroupCriterionService/GetAdGroupCriterion',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetAdGroupCriterionRequest,
  google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetAdGroupCriterionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetAdGroupCriterionRequest,
 *   !proto.google.ads.googleads.v0.resources.AdGroupCriterion>}
 */
const methodInfo_AdGroupCriterionService_GetAdGroupCriterion = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetAdGroupCriterionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetAdGroupCriterionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.AdGroupCriterion)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.AdGroupCriterion>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.AdGroupCriterionServiceClient.prototype.getAdGroupCriterion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupCriterionService/GetAdGroupCriterion',
      request,
      metadata || {},
      methodDescriptor_AdGroupCriterionService_GetAdGroupCriterion,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetAdGroupCriterionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.AdGroupCriterion>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.AdGroupCriterionServicePromiseClient.prototype.getAdGroupCriterion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupCriterionService/GetAdGroupCriterion',
      request,
      metadata || {},
      methodDescriptor_AdGroupCriterionService_GetAdGroupCriterion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaRequest,
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse>}
 */
const methodDescriptor_AdGroupCriterionService_MutateAdGroupCriteria = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.AdGroupCriterionService/MutateAdGroupCriteria',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaRequest,
  proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaRequest,
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse>}
 */
const methodInfo_AdGroupCriterionService_MutateAdGroupCriteria = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.AdGroupCriterionServiceClient.prototype.mutateAdGroupCriteria =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupCriterionService/MutateAdGroupCriteria',
      request,
      metadata || {},
      methodDescriptor_AdGroupCriterionService_MutateAdGroupCriteria,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.AdGroupCriterionServicePromiseClient.prototype.mutateAdGroupCriteria =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupCriterionService/MutateAdGroupCriteria',
      request,
      metadata || {},
      methodDescriptor_AdGroupCriterionService_MutateAdGroupCriteria);
};


module.exports = proto.google.ads.googleads.v0.services;

