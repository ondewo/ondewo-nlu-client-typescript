/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./test_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SimpleServiceClient =
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
proto.SimpleServicePromiseClient =
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
 *   !proto.Test,
 *   !proto.Test>}
 */
const methodDescriptor_SimpleService_RecieveTest = new grpc.web.MethodDescriptor(
  '/SimpleService/RecieveTest',
  grpc.web.MethodType.UNARY,
  proto.Test,
  proto.Test,
  /**
   * @param {!proto.Test} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Test.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Test,
 *   !proto.Test>}
 */
const methodInfo_SimpleService_RecieveTest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Test,
  /**
   * @param {!proto.Test} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Test.deserializeBinary
);


/**
 * @param {!proto.Test} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Test)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Test>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SimpleServiceClient.prototype.recieveTest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SimpleService/RecieveTest',
      request,
      metadata || {},
      methodDescriptor_SimpleService_RecieveTest,
      callback);
};


/**
 * @param {!proto.Test} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Test>}
 *     Promise that resolves to the response
 */
proto.SimpleServicePromiseClient.prototype.recieveTest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SimpleService/RecieveTest',
      request,
      metadata || {},
      methodDescriptor_SimpleService_RecieveTest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Test,
 *   !proto.Test>}
 */
const methodDescriptor_SimpleService_SendTest = new grpc.web.MethodDescriptor(
  '/SimpleService/SendTest',
  grpc.web.MethodType.UNARY,
  proto.Test,
  proto.Test,
  /**
   * @param {!proto.Test} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Test.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Test,
 *   !proto.Test>}
 */
const methodInfo_SimpleService_SendTest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Test,
  /**
   * @param {!proto.Test} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Test.deserializeBinary
);


/**
 * @param {!proto.Test} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Test)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Test>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SimpleServiceClient.prototype.sendTest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SimpleService/SendTest',
      request,
      metadata || {},
      methodDescriptor_SimpleService_SendTest,
      callback);
};


/**
 * @param {!proto.Test} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Test>}
 *     Promise that resolves to the response
 */
proto.SimpleServicePromiseClient.prototype.sendTest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SimpleService/SendTest',
      request,
      metadata || {},
      methodDescriptor_SimpleService_SendTest);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.NewSimpleServiceClient =
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
proto.NewSimpleServicePromiseClient =
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
 *   !proto.NewTest,
 *   !proto.NewTest>}
 */
const methodDescriptor_NewSimpleService_NewRecieveTest = new grpc.web.MethodDescriptor(
  '/NewSimpleService/NewRecieveTest',
  grpc.web.MethodType.UNARY,
  proto.NewTest,
  proto.NewTest,
  /**
   * @param {!proto.NewTest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NewTest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NewTest,
 *   !proto.NewTest>}
 */
const methodInfo_NewSimpleService_NewRecieveTest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.NewTest,
  /**
   * @param {!proto.NewTest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NewTest.deserializeBinary
);


/**
 * @param {!proto.NewTest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.NewTest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NewTest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NewSimpleServiceClient.prototype.newRecieveTest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NewSimpleService/NewRecieveTest',
      request,
      metadata || {},
      methodDescriptor_NewSimpleService_NewRecieveTest,
      callback);
};


/**
 * @param {!proto.NewTest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NewTest>}
 *     Promise that resolves to the response
 */
proto.NewSimpleServicePromiseClient.prototype.newRecieveTest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NewSimpleService/NewRecieveTest',
      request,
      metadata || {},
      methodDescriptor_NewSimpleService_NewRecieveTest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NewTest,
 *   !proto.NewTest>}
 */
const methodDescriptor_NewSimpleService_NewSendTest = new grpc.web.MethodDescriptor(
  '/NewSimpleService/NewSendTest',
  grpc.web.MethodType.UNARY,
  proto.NewTest,
  proto.NewTest,
  /**
   * @param {!proto.NewTest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NewTest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NewTest,
 *   !proto.NewTest>}
 */
const methodInfo_NewSimpleService_NewSendTest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.NewTest,
  /**
   * @param {!proto.NewTest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NewTest.deserializeBinary
);


/**
 * @param {!proto.NewTest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.NewTest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NewTest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NewSimpleServiceClient.prototype.newSendTest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NewSimpleService/NewSendTest',
      request,
      metadata || {},
      methodDescriptor_NewSimpleService_NewSendTest,
      callback);
};


/**
 * @param {!proto.NewTest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NewTest>}
 *     Promise that resolves to the response
 */
proto.NewSimpleServicePromiseClient.prototype.newSendTest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NewSimpleService/NewSendTest',
      request,
      metadata || {},
      methodDescriptor_NewSimpleService_NewSendTest);
};


module.exports = proto;

