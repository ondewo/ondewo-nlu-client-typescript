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


var google_ads_googleads_v0_resources_geo_target_constant_pb = require('../../../../../google/ads/googleads/v0/resources/geo_target_constant_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./geo_target_constant_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.GeoTargetConstantServiceClient =
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
proto.google.ads.googleads.v0.services.GeoTargetConstantServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetGeoTargetConstantRequest,
 *   !proto.google.ads.googleads.v0.resources.GeoTargetConstant>}
 */
const methodDescriptor_GeoTargetConstantService_GetGeoTargetConstant = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.GeoTargetConstantService/GetGeoTargetConstant',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetGeoTargetConstantRequest,
  google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetGeoTargetConstantRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetGeoTargetConstantRequest,
 *   !proto.google.ads.googleads.v0.resources.GeoTargetConstant>}
 */
const methodInfo_GeoTargetConstantService_GetGeoTargetConstant = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetGeoTargetConstantRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetGeoTargetConstantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.GeoTargetConstant)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.GeoTargetConstant>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.GeoTargetConstantServiceClient.prototype.getGeoTargetConstant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.GeoTargetConstantService/GetGeoTargetConstant',
      request,
      metadata || {},
      methodDescriptor_GeoTargetConstantService_GetGeoTargetConstant,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetGeoTargetConstantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.GeoTargetConstant>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.GeoTargetConstantServicePromiseClient.prototype.getGeoTargetConstant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.GeoTargetConstantService/GetGeoTargetConstant',
      request,
      metadata || {},
      methodDescriptor_GeoTargetConstantService_GetGeoTargetConstant);
};


module.exports = proto.google.ads.googleads.v0.services;

