/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.resultstore.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.resultstore = {};
proto.google.devtools.resultstore.v2 = require('./resultstore_file_download_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.resultstore.v2.ResultStoreFileDownloadClient =
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
proto.google.devtools.resultstore.v2.ResultStoreFileDownloadPromiseClient =
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
 *   !proto.google.devtools.resultstore.v2.GetFileRequest,
 *   !proto.google.devtools.resultstore.v2.GetFileResponse>}
 */
const methodDescriptor_ResultStoreFileDownload_GetFile = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFile',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.devtools.resultstore.v2.GetFileRequest,
  proto.google.devtools.resultstore.v2.GetFileResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.GetFileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.GetFileRequest,
 *   !proto.google.devtools.resultstore.v2.GetFileResponse>}
 */
const methodInfo_ResultStoreFileDownload_GetFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.resultstore.v2.GetFileResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.GetFileResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.GetFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.GetFileResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreFileDownloadClient.prototype.getFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFile',
      request,
      metadata || {},
      methodDescriptor_ResultStoreFileDownload_GetFile);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.GetFileRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.GetFileResponse>}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreFileDownloadPromiseClient.prototype.getFile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFile',
      request,
      metadata || {},
      methodDescriptor_ResultStoreFileDownload_GetFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.resultstore.v2.GetFileTailRequest,
 *   !proto.google.devtools.resultstore.v2.GetFileTailResponse>}
 */
const methodDescriptor_ResultStoreFileDownload_GetFileTail = new grpc.web.MethodDescriptor(
  '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFileTail',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.resultstore.v2.GetFileTailRequest,
  proto.google.devtools.resultstore.v2.GetFileTailResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetFileTailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.GetFileTailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.resultstore.v2.GetFileTailRequest,
 *   !proto.google.devtools.resultstore.v2.GetFileTailResponse>}
 */
const methodInfo_ResultStoreFileDownload_GetFileTail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.resultstore.v2.GetFileTailResponse,
  /**
   * @param {!proto.google.devtools.resultstore.v2.GetFileTailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.resultstore.v2.GetFileTailResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.resultstore.v2.GetFileTailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.resultstore.v2.GetFileTailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.resultstore.v2.GetFileTailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.resultstore.v2.ResultStoreFileDownloadClient.prototype.getFileTail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFileTail',
      request,
      metadata || {},
      methodDescriptor_ResultStoreFileDownload_GetFileTail,
      callback);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.GetFileTailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.resultstore.v2.GetFileTailResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.resultstore.v2.ResultStoreFileDownloadPromiseClient.prototype.getFileTail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.resultstore.v2.ResultStoreFileDownload/GetFileTail',
      request,
      metadata || {},
      methodDescriptor_ResultStoreFileDownload_GetFileTail);
};


module.exports = proto.google.devtools.resultstore.v2;

