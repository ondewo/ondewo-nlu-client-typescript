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


var google_ads_googleads_v0_resources_ad_group_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./ad_group_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.AdGroupServiceClient =
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
proto.google.ads.googleads.v0.services.AdGroupServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetAdGroupRequest,
 *   !proto.google.ads.googleads.v0.resources.AdGroup>}
 */
const methodDescriptor_AdGroupService_GetAdGroup = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.AdGroupService/GetAdGroup',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetAdGroupRequest,
  google_ads_googleads_v0_resources_ad_group_pb.AdGroup,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetAdGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_ad_group_pb.AdGroup.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetAdGroupRequest,
 *   !proto.google.ads.googleads.v0.resources.AdGroup>}
 */
const methodInfo_AdGroupService_GetAdGroup = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_ad_group_pb.AdGroup,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetAdGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_ad_group_pb.AdGroup.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetAdGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.AdGroup)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.AdGroup>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.AdGroupServiceClient.prototype.getAdGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupService/GetAdGroup',
      request,
      metadata || {},
      methodDescriptor_AdGroupService_GetAdGroup,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetAdGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.AdGroup>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.AdGroupServicePromiseClient.prototype.getAdGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupService/GetAdGroup',
      request,
      metadata || {},
      methodDescriptor_AdGroupService_GetAdGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupsRequest,
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupsResponse>}
 */
const methodDescriptor_AdGroupService_MutateAdGroups = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.AdGroupService/MutateAdGroups',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.MutateAdGroupsRequest,
  proto.google.ads.googleads.v0.services.MutateAdGroupsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateAdGroupsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupsRequest,
 *   !proto.google.ads.googleads.v0.services.MutateAdGroupsResponse>}
 */
const methodInfo_AdGroupService_MutateAdGroups = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.MutateAdGroupsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.MutateAdGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.MutateAdGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.MutateAdGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.AdGroupServiceClient.prototype.mutateAdGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupService/MutateAdGroups',
      request,
      metadata || {},
      methodDescriptor_AdGroupService_MutateAdGroups,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.MutateAdGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.MutateAdGroupsResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.AdGroupServicePromiseClient.prototype.mutateAdGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.AdGroupService/MutateAdGroups',
      request,
      metadata || {},
      methodDescriptor_AdGroupService_MutateAdGroups);
};


module.exports = proto.google.ads.googleads.v0.services;

