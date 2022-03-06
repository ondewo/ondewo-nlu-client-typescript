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


var google_ads_googleads_v0_resources_keyword_view_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_view_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./keyword_view_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.KeywordViewServiceClient =
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
proto.google.ads.googleads.v0.services.KeywordViewServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetKeywordViewRequest,
 *   !proto.google.ads.googleads.v0.resources.KeywordView>}
 */
const methodDescriptor_KeywordViewService_GetKeywordView = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.KeywordViewService/GetKeywordView',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetKeywordViewRequest,
  google_ads_googleads_v0_resources_keyword_view_pb.KeywordView,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetKeywordViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_keyword_view_pb.KeywordView.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetKeywordViewRequest,
 *   !proto.google.ads.googleads.v0.resources.KeywordView>}
 */
const methodInfo_KeywordViewService_GetKeywordView = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_keyword_view_pb.KeywordView,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetKeywordViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_keyword_view_pb.KeywordView.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetKeywordViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.KeywordView)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.KeywordView>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.KeywordViewServiceClient.prototype.getKeywordView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.KeywordViewService/GetKeywordView',
      request,
      metadata || {},
      methodDescriptor_KeywordViewService_GetKeywordView,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetKeywordViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.KeywordView>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.KeywordViewServicePromiseClient.prototype.getKeywordView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.KeywordViewService/GetKeywordView',
      request,
      metadata || {},
      methodDescriptor_KeywordViewService_GetKeywordView);
};


module.exports = proto.google.ads.googleads.v0.services;

