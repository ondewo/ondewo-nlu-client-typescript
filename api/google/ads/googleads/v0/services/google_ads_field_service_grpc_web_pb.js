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


var google_ads_googleads_v0_resources_google_ads_field_pb = require('../../../../../google/ads/googleads/v0/resources/google_ads_field_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./google_ads_field_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.GoogleAdsFieldServiceClient =
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
proto.google.ads.googleads.v0.services.GoogleAdsFieldServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetGoogleAdsFieldRequest,
 *   !proto.google.ads.googleads.v0.resources.GoogleAdsField>}
 */
const methodDescriptor_GoogleAdsFieldService_GetGoogleAdsField = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.GoogleAdsFieldService/GetGoogleAdsField',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetGoogleAdsFieldRequest,
  google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetGoogleAdsFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetGoogleAdsFieldRequest,
 *   !proto.google.ads.googleads.v0.resources.GoogleAdsField>}
 */
const methodInfo_GoogleAdsFieldService_GetGoogleAdsField = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetGoogleAdsFieldRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_google_ads_field_pb.GoogleAdsField.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetGoogleAdsFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.GoogleAdsField)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.GoogleAdsField>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.GoogleAdsFieldServiceClient.prototype.getGoogleAdsField =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.GoogleAdsFieldService/GetGoogleAdsField',
      request,
      metadata || {},
      methodDescriptor_GoogleAdsFieldService_GetGoogleAdsField,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetGoogleAdsFieldRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.GoogleAdsField>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.GoogleAdsFieldServicePromiseClient.prototype.getGoogleAdsField =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.GoogleAdsFieldService/GetGoogleAdsField',
      request,
      metadata || {},
      methodDescriptor_GoogleAdsFieldService_GetGoogleAdsField);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsRequest,
 *   !proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsResponse>}
 */
const methodDescriptor_GoogleAdsFieldService_SearchGoogleAdsFields = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.GoogleAdsFieldService/SearchGoogleAdsFields',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsRequest,
  proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsRequest,
 *   !proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsResponse>}
 */
const methodInfo_GoogleAdsFieldService_SearchGoogleAdsFields = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsResponse,
  /**
   * @param {!proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsResponse.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.GoogleAdsFieldServiceClient.prototype.searchGoogleAdsFields =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.GoogleAdsFieldService/SearchGoogleAdsFields',
      request,
      metadata || {},
      methodDescriptor_GoogleAdsFieldService_SearchGoogleAdsFields,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.services.SearchGoogleAdsFieldsResponse>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.GoogleAdsFieldServicePromiseClient.prototype.searchGoogleAdsFields =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.GoogleAdsFieldService/SearchGoogleAdsFields',
      request,
      metadata || {},
      methodDescriptor_GoogleAdsFieldService_SearchGoogleAdsFields);
};


module.exports = proto.google.ads.googleads.v0.services;

