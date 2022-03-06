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
proto.google.devtools.clouddebugger.v2 = require('./debugger_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.clouddebugger.v2.Debugger2Client =
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
proto.google.devtools.clouddebugger.v2.Debugger2PromiseClient =
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
 *   !proto.google.devtools.clouddebugger.v2.SetBreakpointRequest,
 *   !proto.google.devtools.clouddebugger.v2.SetBreakpointResponse>}
 */
const methodDescriptor_Debugger2_SetBreakpoint = new grpc.web.MethodDescriptor(
  '/google.devtools.clouddebugger.v2.Debugger2/SetBreakpoint',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouddebugger.v2.SetBreakpointRequest,
  proto.google.devtools.clouddebugger.v2.SetBreakpointResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.SetBreakpointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.SetBreakpointResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouddebugger.v2.SetBreakpointRequest,
 *   !proto.google.devtools.clouddebugger.v2.SetBreakpointResponse>}
 */
const methodInfo_Debugger2_SetBreakpoint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouddebugger.v2.SetBreakpointResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.SetBreakpointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.SetBreakpointResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouddebugger.v2.SetBreakpointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouddebugger.v2.SetBreakpointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouddebugger.v2.SetBreakpointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouddebugger.v2.Debugger2Client.prototype.setBreakpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/SetBreakpoint',
      request,
      metadata || {},
      methodDescriptor_Debugger2_SetBreakpoint,
      callback);
};


/**
 * @param {!proto.google.devtools.clouddebugger.v2.SetBreakpointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouddebugger.v2.SetBreakpointResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouddebugger.v2.Debugger2PromiseClient.prototype.setBreakpoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/SetBreakpoint',
      request,
      metadata || {},
      methodDescriptor_Debugger2_SetBreakpoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.clouddebugger.v2.GetBreakpointRequest,
 *   !proto.google.devtools.clouddebugger.v2.GetBreakpointResponse>}
 */
const methodDescriptor_Debugger2_GetBreakpoint = new grpc.web.MethodDescriptor(
  '/google.devtools.clouddebugger.v2.Debugger2/GetBreakpoint',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouddebugger.v2.GetBreakpointRequest,
  proto.google.devtools.clouddebugger.v2.GetBreakpointResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.GetBreakpointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.GetBreakpointResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouddebugger.v2.GetBreakpointRequest,
 *   !proto.google.devtools.clouddebugger.v2.GetBreakpointResponse>}
 */
const methodInfo_Debugger2_GetBreakpoint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouddebugger.v2.GetBreakpointResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.GetBreakpointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.GetBreakpointResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouddebugger.v2.GetBreakpointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouddebugger.v2.GetBreakpointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouddebugger.v2.GetBreakpointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouddebugger.v2.Debugger2Client.prototype.getBreakpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/GetBreakpoint',
      request,
      metadata || {},
      methodDescriptor_Debugger2_GetBreakpoint,
      callback);
};


/**
 * @param {!proto.google.devtools.clouddebugger.v2.GetBreakpointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouddebugger.v2.GetBreakpointResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouddebugger.v2.Debugger2PromiseClient.prototype.getBreakpoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/GetBreakpoint',
      request,
      metadata || {},
      methodDescriptor_Debugger2_GetBreakpoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.clouddebugger.v2.DeleteBreakpointRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Debugger2_DeleteBreakpoint = new grpc.web.MethodDescriptor(
  '/google.devtools.clouddebugger.v2.Debugger2/DeleteBreakpoint',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouddebugger.v2.DeleteBreakpointRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.DeleteBreakpointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouddebugger.v2.DeleteBreakpointRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Debugger2_DeleteBreakpoint = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.DeleteBreakpointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouddebugger.v2.DeleteBreakpointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouddebugger.v2.Debugger2Client.prototype.deleteBreakpoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/DeleteBreakpoint',
      request,
      metadata || {},
      methodDescriptor_Debugger2_DeleteBreakpoint,
      callback);
};


/**
 * @param {!proto.google.devtools.clouddebugger.v2.DeleteBreakpointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouddebugger.v2.Debugger2PromiseClient.prototype.deleteBreakpoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/DeleteBreakpoint',
      request,
      metadata || {},
      methodDescriptor_Debugger2_DeleteBreakpoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.clouddebugger.v2.ListBreakpointsRequest,
 *   !proto.google.devtools.clouddebugger.v2.ListBreakpointsResponse>}
 */
const methodDescriptor_Debugger2_ListBreakpoints = new grpc.web.MethodDescriptor(
  '/google.devtools.clouddebugger.v2.Debugger2/ListBreakpoints',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouddebugger.v2.ListBreakpointsRequest,
  proto.google.devtools.clouddebugger.v2.ListBreakpointsResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.ListBreakpointsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.ListBreakpointsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouddebugger.v2.ListBreakpointsRequest,
 *   !proto.google.devtools.clouddebugger.v2.ListBreakpointsResponse>}
 */
const methodInfo_Debugger2_ListBreakpoints = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouddebugger.v2.ListBreakpointsResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.ListBreakpointsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.ListBreakpointsResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouddebugger.v2.ListBreakpointsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouddebugger.v2.ListBreakpointsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouddebugger.v2.ListBreakpointsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouddebugger.v2.Debugger2Client.prototype.listBreakpoints =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/ListBreakpoints',
      request,
      metadata || {},
      methodDescriptor_Debugger2_ListBreakpoints,
      callback);
};


/**
 * @param {!proto.google.devtools.clouddebugger.v2.ListBreakpointsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouddebugger.v2.ListBreakpointsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouddebugger.v2.Debugger2PromiseClient.prototype.listBreakpoints =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/ListBreakpoints',
      request,
      metadata || {},
      methodDescriptor_Debugger2_ListBreakpoints);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.clouddebugger.v2.ListDebuggeesRequest,
 *   !proto.google.devtools.clouddebugger.v2.ListDebuggeesResponse>}
 */
const methodDescriptor_Debugger2_ListDebuggees = new grpc.web.MethodDescriptor(
  '/google.devtools.clouddebugger.v2.Debugger2/ListDebuggees',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.clouddebugger.v2.ListDebuggeesRequest,
  proto.google.devtools.clouddebugger.v2.ListDebuggeesResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.ListDebuggeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.ListDebuggeesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.clouddebugger.v2.ListDebuggeesRequest,
 *   !proto.google.devtools.clouddebugger.v2.ListDebuggeesResponse>}
 */
const methodInfo_Debugger2_ListDebuggees = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.clouddebugger.v2.ListDebuggeesResponse,
  /**
   * @param {!proto.google.devtools.clouddebugger.v2.ListDebuggeesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.clouddebugger.v2.ListDebuggeesResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.clouddebugger.v2.ListDebuggeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.clouddebugger.v2.ListDebuggeesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.clouddebugger.v2.ListDebuggeesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.clouddebugger.v2.Debugger2Client.prototype.listDebuggees =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/ListDebuggees',
      request,
      metadata || {},
      methodDescriptor_Debugger2_ListDebuggees,
      callback);
};


/**
 * @param {!proto.google.devtools.clouddebugger.v2.ListDebuggeesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.clouddebugger.v2.ListDebuggeesResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.clouddebugger.v2.Debugger2PromiseClient.prototype.listDebuggees =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.clouddebugger.v2.Debugger2/ListDebuggees',
      request,
      metadata || {},
      methodDescriptor_Debugger2_ListDebuggees);
};


module.exports = proto.google.devtools.clouddebugger.v2;

