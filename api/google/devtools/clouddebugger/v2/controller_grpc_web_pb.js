/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.clouddebugger.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_devtools_clouddebugger_v2_data_pb = require('../../../../google/devtools/clouddebugger/v2/data_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.clouddebugger = {};
proto.google.devtools.clouddebugger.v2 = require('./controller_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.clouddebugger.v2.Controller2Client =
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
proto.google.devtools.clouddebugger.v2.Controller2PromiseClient =
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
 *   !proto.google.devtools.clouddebugger.v2.RegisterDebuggeeRequest,
 *   !proto.google.devtools.clouddebugger.v2.RegisterDebuggeeResponse>}
 */
const methodDescriptor_Controller2_RegisterDebuggee = new grpc.web.MethodDescriptor(
  '/google.devtools.clouddebugger.v2.Controller2/RegisterDebuggee',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouddebugger.v2.RegisterDebuggeeRequest,
  proto.google.devtools.clouddebugger.v2.RegisterDebuggeeResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.RegisterDebuggeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.RegisterDebuggeeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouddebugger.v2.RegisterDebuggeeRequest,
 *   !proto.google.devtools.clouddebugger.v2.RegisterDebuggeeResponse>}
 */
const methodInfo_Controller2_RegisterDebuggee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouddebugger.v2.RegisterDebuggeeResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.RegisterDebuggeeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.RegisterDebuggeeResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouddebugger.v2.RegisterDebuggeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouddebugger.v2.RegisterDebuggeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouddebugger.v2.RegisterDebuggeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouddebugger.v2.Controller2Client.prototype.registerDebuggee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Controller2/RegisterDebuggee',
      request,
      metadata || {},
      methodDescriptor_Controller2_RegisterDebuggee,
      callback);
};


/**
 * @param {!proto.google.devtools.clouddebugger.v2.RegisterDebuggeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouddebugger.v2.RegisterDebuggeeResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouddebugger.v2.Controller2PromiseClient.prototype.registerDebuggee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Controller2/RegisterDebuggee',
      request,
      metadata || {},
      methodDescriptor_Controller2_RegisterDebuggee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsRequest,
 *   !proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse>}
 */
const methodDescriptor_Controller2_ListActiveBreakpoints = new grpc.web.MethodDescriptor(
  '/google.devtools.clouddebugger.v2.Controller2/ListActiveBreakpoints',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsRequest,
  proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsRequest,
 *   !proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse>}
 */
const methodInfo_Controller2_ListActiveBreakpoints = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouddebugger.v2.Controller2Client.prototype.listActiveBreakpoints =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Controller2/ListActiveBreakpoints',
      request,
      metadata || {},
      methodDescriptor_Controller2_ListActiveBreakpoints,
      callback);
};


/**
 * @param {!proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouddebugger.v2.ListActiveBreakpointsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouddebugger.v2.Controller2PromiseClient.prototype.listActiveBreakpoints =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Controller2/ListActiveBreakpoints',
      request,
      metadata || {},
      methodDescriptor_Controller2_ListActiveBreakpoints);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointRequest,
 *   !proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse>}
 */
const methodDescriptor_Controller2_UpdateActiveBreakpoint = new grpc.web.MethodDescriptor(
  '/google.devtools.clouddebugger.v2.Controller2/UpdateActiveBreakpoint',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointRequest,
  proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointRequest,
 *   !proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse>}
 */
const methodInfo_Controller2_UpdateActiveBreakpoint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouddebugger.v2.Controller2Client.prototype.updateActiveBreakpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Controller2/UpdateActiveBreakpoint',
      request,
      metadata || {},
      methodDescriptor_Controller2_UpdateActiveBreakpoint,
      callback);
};


/**
 * @param {!proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouddebugger.v2.UpdateActiveBreakpointResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouddebugger.v2.Controller2PromiseClient.prototype.updateActiveBreakpoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Controller2/UpdateActiveBreakpoint',
      request,
      metadata || {},
      methodDescriptor_Controller2_UpdateActiveBreakpoint);
};


module.exports = proto.google.devtools.clouddebugger.v2;

