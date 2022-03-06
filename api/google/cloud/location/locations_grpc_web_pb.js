/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.location
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.location = require('./locations_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.location.LocationsClient =
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
proto.google.cloud.location.LocationsPromiseClient =
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
 *   !proto.google.cloud.location.ListLocationsRequest,
 *   !proto.google.cloud.location.ListLocationsResponse>}
 */
const methodDescriptor_Locations_ListLocations = new grpc.web.MethodDescriptor(
  '/google.cloud.location.Locations/ListLocations',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.location.ListLocationsRequest,
  proto.google.cloud.location.ListLocationsResponse,
  /**
   * @param {!proto.google.cloud.location.ListLocationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.location.ListLocationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.location.ListLocationsRequest,
 *   !proto.google.cloud.location.ListLocationsResponse>}
 */
const methodInfo_Locations_ListLocations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.location.ListLocationsResponse,
  /**
   * @param {!proto.google.cloud.location.ListLocationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.location.ListLocationsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.location.ListLocationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.location.ListLocationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.location.ListLocationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.location.LocationsClient.prototype.listLocations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.location.Locations/ListLocations',
      request,
      metadata || {},
      methodDescriptor_Locations_ListLocations,
      callback);
};


/**
 * @param {!proto.google.cloud.location.ListLocationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.location.ListLocationsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.location.LocationsPromiseClient.prototype.listLocations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.location.Locations/ListLocations',
      request,
      metadata || {},
      methodDescriptor_Locations_ListLocations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.location.GetLocationRequest,
 *   !proto.google.cloud.location.Location>}
 */
const methodDescriptor_Locations_GetLocation = new grpc.web.MethodDescriptor(
  '/google.cloud.location.Locations/GetLocation',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.location.GetLocationRequest,
  proto.google.cloud.location.Location,
  /**
   * @param {!proto.google.cloud.location.GetLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.location.Location.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.location.GetLocationRequest,
 *   !proto.google.cloud.location.Location>}
 */
const methodInfo_Locations_GetLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.location.Location,
  /**
   * @param {!proto.google.cloud.location.GetLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.location.Location.deserializeBinary
);


/**
 * @param {!proto.google.cloud.location.GetLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.location.Location)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.location.Location>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.location.LocationsClient.prototype.getLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.location.Locations/GetLocation',
      request,
      metadata || {},
      methodDescriptor_Locations_GetLocation,
      callback);
};


/**
 * @param {!proto.google.cloud.location.GetLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.location.Location>}
 *     Promise that resolves to the response
 */
proto.google.cloud.location.LocationsPromiseClient.prototype.getLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.location.Locations/GetLocation',
      request,
      metadata || {},
      methodDescriptor_Locations_GetLocation);
};


module.exports = proto.google.cloud.location;

