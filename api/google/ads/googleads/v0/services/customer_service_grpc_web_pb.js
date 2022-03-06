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


var google_ads_googleads_v0_resources_customer_pb = require('../../../../../google/ads/googleads/v0/resources/customer_pb.js')

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')
const proto = {};
proto.google = {};
proto.google.ads = {};
proto.google.ads.googleads = {};
proto.google.ads.googleads.v0 = {};
proto.google.ads.googleads.v0.services = require('./customer_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.ads.googleads.v0.services.CustomerServiceClient =
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
proto.google.ads.googleads.v0.services.CustomerServicePromiseClient =
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
 *   !proto.google.ads.googleads.v0.services.GetCustomerRequest,
 *   !proto.google.ads.googleads.v0.resources.Customer>}
 */
const methodDescriptor_CustomerService_GetCustomer = new grpc.web.MethodDescriptor(
  '/google.ads.googleads.v0.services.CustomerService/GetCustomer',
  grpc.web.MethodType.UNARY,
  proto.google.ads.googleads.v0.services.GetCustomerRequest,
  google_ads_googleads_v0_resources_customer_pb.Customer,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetCustomerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_customer_pb.Customer.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.ads.googleads.v0.services.GetCustomerRequest,
 *   !proto.google.ads.googleads.v0.resources.Customer>}
 */
const methodInfo_CustomerService_GetCustomer = new grpc.web.AbstractClientBase.MethodInfo(
  google_ads_googleads_v0_resources_customer_pb.Customer,
  /**
   * @param {!proto.google.ads.googleads.v0.services.GetCustomerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_ads_googleads_v0_resources_customer_pb.Customer.deserializeBinary
);


/**
 * @param {!proto.google.ads.googleads.v0.services.GetCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.ads.googleads.v0.resources.Customer)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.ads.googleads.v0.resources.Customer>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.ads.googleads.v0.services.CustomerServiceClient.prototype.getCustomer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CustomerService/GetCustomer',
      request,
      metadata || {},
      methodDescriptor_CustomerService_GetCustomer,
      callback);
};


/**
 * @param {!proto.google.ads.googleads.v0.services.GetCustomerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.ads.googleads.v0.resources.Customer>}
 *     Promise that resolves to the response
 */
proto.google.ads.googleads.v0.services.CustomerServicePromiseClient.prototype.getCustomer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.ads.googleads.v0.services.CustomerService/GetCustomer',
      request,
      metadata || {},
      methodDescriptor_CustomerService_GetCustomer);
};


module.exports = proto.google.ads.googleads.v0.services;

