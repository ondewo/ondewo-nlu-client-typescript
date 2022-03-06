/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.clouderrorreporting.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_devtools_clouderrorreporting_v1beta1_common_pb = require('../../../../google/devtools/clouderrorreporting/v1beta1/common_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.clouderrorreporting = {};
proto.google.devtools.clouderrorreporting.v1beta1 = require('./report_errors_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServiceClient =
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
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServicePromiseClient =
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
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse>}
 */
const methodDescriptor_ReportErrorsService_ReportErrorEvent = new grpc.web.MethodDescriptor(
  '/google.devtools.clouderrorreporting.v1beta1.ReportErrorsService/ReportErrorEvent',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest,
  proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest,
 *   !proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse>}
 */
const methodInfo_ReportErrorsService_ReportErrorEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse,
  /**
   * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServiceClient.prototype.reportErrorEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ReportErrorsService/ReportErrorEvent',
      request,
      metadata || {},
      methodDescriptor_ReportErrorsService_ReportErrorEvent,
      callback);
};


/**
 * @param {!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorEventResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServicePromiseClient.prototype.reportErrorEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouderrorreporting.v1beta1.ReportErrorsService/ReportErrorEvent',
      request,
      metadata || {},
      methodDescriptor_ReportErrorsService_ReportErrorEvent);
};


module.exports = proto.google.devtools.clouderrorreporting.v1beta1;

