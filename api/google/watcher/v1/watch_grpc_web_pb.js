/**
 * @fileoverview gRPC-Web generated client stub for google.watcher.v1
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

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.watcher = {};
proto.google.watcher.v1 = require('./watch_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.watcher.v1.WatcherClient =
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
proto.google.watcher.v1.WatcherPromiseClient =
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
 *   !proto.google.watcher.v1.Request,
 *   !proto.google.watcher.v1.ChangeBatch>}
 */
const methodDescriptor_Watcher_Watch = new grpc.web.MethodDescriptor(
  '/google.watcher.v1.Watcher/Watch',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.google.watcher.v1.Request,
  proto.google.watcher.v1.ChangeBatch,
  /**
   * @param {!proto.google.watcher.v1.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.watcher.v1.ChangeBatch.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.watcher.v1.Request,
 *   !proto.google.watcher.v1.ChangeBatch>}
 */
const methodInfo_Watcher_Watch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.watcher.v1.ChangeBatch,
  /**
   * @param {!proto.google.watcher.v1.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.watcher.v1.ChangeBatch.deserializeBinary
);


/**
 * @param {!proto.google.watcher.v1.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.watcher.v1.ChangeBatch>}
 *     The XHR Node Readable Stream
 */
proto.google.watcher.v1.WatcherClient.prototype.watch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.watcher.v1.Watcher/Watch',
      request,
      metadata || {},
      methodDescriptor_Watcher_Watch);
};


/**
 * @param {!proto.google.watcher.v1.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.google.watcher.v1.ChangeBatch>}
 *     The XHR Node Readable Stream
 */
proto.google.watcher.v1.WatcherPromiseClient.prototype.watch =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/google.watcher.v1.Watcher/Watch',
      request,
      metadata || {},
      methodDescriptor_Watcher_Watch);
};


module.exports = proto.google.watcher.v1;

