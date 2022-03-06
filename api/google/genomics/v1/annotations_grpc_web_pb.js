/**
 * @fileoverview gRPC-Web generated client stub for google.genomics.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_rpc_status_pb = require('../../../google/rpc/status_pb.js')
const proto = {};
proto.google = {};
proto.google.genomics = {};
proto.google.genomics.v1 = require('./annotations_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.genomics.v1.AnnotationServiceV1Client =
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
proto.google.genomics.v1.AnnotationServiceV1PromiseClient =
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
 *   !proto.google.genomics.v1.CreateAnnotationSetRequest,
 *   !proto.google.genomics.v1.AnnotationSet>}
 */
const methodDescriptor_AnnotationServiceV1_CreateAnnotationSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/CreateAnnotationSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.CreateAnnotationSetRequest,
  proto.google.genomics.v1.AnnotationSet,
  /**
   * @param {!proto.google.genomics.v1.CreateAnnotationSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.AnnotationSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.CreateAnnotationSetRequest,
 *   !proto.google.genomics.v1.AnnotationSet>}
 */
const methodInfo_AnnotationServiceV1_CreateAnnotationSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.AnnotationSet,
  /**
   * @param {!proto.google.genomics.v1.CreateAnnotationSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.AnnotationSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.CreateAnnotationSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.AnnotationSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.AnnotationSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.createAnnotationSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/CreateAnnotationSet',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_CreateAnnotationSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.CreateAnnotationSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.AnnotationSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.createAnnotationSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/CreateAnnotationSet',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_CreateAnnotationSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.GetAnnotationSetRequest,
 *   !proto.google.genomics.v1.AnnotationSet>}
 */
const methodDescriptor_AnnotationServiceV1_GetAnnotationSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/GetAnnotationSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.GetAnnotationSetRequest,
  proto.google.genomics.v1.AnnotationSet,
  /**
   * @param {!proto.google.genomics.v1.GetAnnotationSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.AnnotationSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.GetAnnotationSetRequest,
 *   !proto.google.genomics.v1.AnnotationSet>}
 */
const methodInfo_AnnotationServiceV1_GetAnnotationSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.AnnotationSet,
  /**
   * @param {!proto.google.genomics.v1.GetAnnotationSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.AnnotationSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.GetAnnotationSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.AnnotationSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.AnnotationSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.getAnnotationSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/GetAnnotationSet',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_GetAnnotationSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.GetAnnotationSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.AnnotationSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.getAnnotationSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/GetAnnotationSet',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_GetAnnotationSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.UpdateAnnotationSetRequest,
 *   !proto.google.genomics.v1.AnnotationSet>}
 */
const methodDescriptor_AnnotationServiceV1_UpdateAnnotationSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotationSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.UpdateAnnotationSetRequest,
  proto.google.genomics.v1.AnnotationSet,
  /**
   * @param {!proto.google.genomics.v1.UpdateAnnotationSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.AnnotationSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.UpdateAnnotationSetRequest,
 *   !proto.google.genomics.v1.AnnotationSet>}
 */
const methodInfo_AnnotationServiceV1_UpdateAnnotationSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.AnnotationSet,
  /**
   * @param {!proto.google.genomics.v1.UpdateAnnotationSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.AnnotationSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.UpdateAnnotationSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.AnnotationSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.AnnotationSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.updateAnnotationSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotationSet',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_UpdateAnnotationSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.UpdateAnnotationSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.AnnotationSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.updateAnnotationSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotationSet',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_UpdateAnnotationSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.DeleteAnnotationSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AnnotationServiceV1_DeleteAnnotationSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotationSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.DeleteAnnotationSetRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteAnnotationSetRequest} request
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
 *   !proto.google.genomics.v1.DeleteAnnotationSetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AnnotationServiceV1_DeleteAnnotationSet = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteAnnotationSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.DeleteAnnotationSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.deleteAnnotationSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotationSet',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_DeleteAnnotationSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.DeleteAnnotationSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.deleteAnnotationSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotationSet',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_DeleteAnnotationSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.SearchAnnotationSetsRequest,
 *   !proto.google.genomics.v1.SearchAnnotationSetsResponse>}
 */
const methodDescriptor_AnnotationServiceV1_SearchAnnotationSets = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/SearchAnnotationSets',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.SearchAnnotationSetsRequest,
  proto.google.genomics.v1.SearchAnnotationSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchAnnotationSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchAnnotationSetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.SearchAnnotationSetsRequest,
 *   !proto.google.genomics.v1.SearchAnnotationSetsResponse>}
 */
const methodInfo_AnnotationServiceV1_SearchAnnotationSets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.SearchAnnotationSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchAnnotationSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchAnnotationSetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.SearchAnnotationSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.SearchAnnotationSetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.SearchAnnotationSetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.searchAnnotationSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/SearchAnnotationSets',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_SearchAnnotationSets,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.SearchAnnotationSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.SearchAnnotationSetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.searchAnnotationSets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/SearchAnnotationSets',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_SearchAnnotationSets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.CreateAnnotationRequest,
 *   !proto.google.genomics.v1.Annotation>}
 */
const methodDescriptor_AnnotationServiceV1_CreateAnnotation = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/CreateAnnotation',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.CreateAnnotationRequest,
  proto.google.genomics.v1.Annotation,
  /**
   * @param {!proto.google.genomics.v1.CreateAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Annotation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.CreateAnnotationRequest,
 *   !proto.google.genomics.v1.Annotation>}
 */
const methodInfo_AnnotationServiceV1_CreateAnnotation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Annotation,
  /**
   * @param {!proto.google.genomics.v1.CreateAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Annotation.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.CreateAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Annotation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Annotation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.createAnnotation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/CreateAnnotation',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_CreateAnnotation,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.CreateAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Annotation>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.createAnnotation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/CreateAnnotation',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_CreateAnnotation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.BatchCreateAnnotationsRequest,
 *   !proto.google.genomics.v1.BatchCreateAnnotationsResponse>}
 */
const methodDescriptor_AnnotationServiceV1_BatchCreateAnnotations = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/BatchCreateAnnotations',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.BatchCreateAnnotationsRequest,
  proto.google.genomics.v1.BatchCreateAnnotationsResponse,
  /**
   * @param {!proto.google.genomics.v1.BatchCreateAnnotationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.BatchCreateAnnotationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.BatchCreateAnnotationsRequest,
 *   !proto.google.genomics.v1.BatchCreateAnnotationsResponse>}
 */
const methodInfo_AnnotationServiceV1_BatchCreateAnnotations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.BatchCreateAnnotationsResponse,
  /**
   * @param {!proto.google.genomics.v1.BatchCreateAnnotationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.BatchCreateAnnotationsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.BatchCreateAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.BatchCreateAnnotationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.BatchCreateAnnotationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.batchCreateAnnotations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/BatchCreateAnnotations',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_BatchCreateAnnotations,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.BatchCreateAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.BatchCreateAnnotationsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.batchCreateAnnotations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/BatchCreateAnnotations',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_BatchCreateAnnotations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.GetAnnotationRequest,
 *   !proto.google.genomics.v1.Annotation>}
 */
const methodDescriptor_AnnotationServiceV1_GetAnnotation = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/GetAnnotation',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.GetAnnotationRequest,
  proto.google.genomics.v1.Annotation,
  /**
   * @param {!proto.google.genomics.v1.GetAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Annotation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.GetAnnotationRequest,
 *   !proto.google.genomics.v1.Annotation>}
 */
const methodInfo_AnnotationServiceV1_GetAnnotation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Annotation,
  /**
   * @param {!proto.google.genomics.v1.GetAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Annotation.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.GetAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Annotation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Annotation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.getAnnotation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/GetAnnotation',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_GetAnnotation,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.GetAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Annotation>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.getAnnotation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/GetAnnotation',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_GetAnnotation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.UpdateAnnotationRequest,
 *   !proto.google.genomics.v1.Annotation>}
 */
const methodDescriptor_AnnotationServiceV1_UpdateAnnotation = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotation',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.UpdateAnnotationRequest,
  proto.google.genomics.v1.Annotation,
  /**
   * @param {!proto.google.genomics.v1.UpdateAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Annotation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.UpdateAnnotationRequest,
 *   !proto.google.genomics.v1.Annotation>}
 */
const methodInfo_AnnotationServiceV1_UpdateAnnotation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Annotation,
  /**
   * @param {!proto.google.genomics.v1.UpdateAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Annotation.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.UpdateAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Annotation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Annotation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.updateAnnotation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotation',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_UpdateAnnotation,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.UpdateAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Annotation>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.updateAnnotation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/UpdateAnnotation',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_UpdateAnnotation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.DeleteAnnotationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AnnotationServiceV1_DeleteAnnotation = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotation',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.DeleteAnnotationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteAnnotationRequest} request
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
 *   !proto.google.genomics.v1.DeleteAnnotationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AnnotationServiceV1_DeleteAnnotation = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.genomics.v1.DeleteAnnotationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.DeleteAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.deleteAnnotation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotation',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_DeleteAnnotation,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.DeleteAnnotationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.deleteAnnotation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/DeleteAnnotation',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_DeleteAnnotation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.SearchAnnotationsRequest,
 *   !proto.google.genomics.v1.SearchAnnotationsResponse>}
 */
const methodDescriptor_AnnotationServiceV1_SearchAnnotations = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.AnnotationServiceV1/SearchAnnotations',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.SearchAnnotationsRequest,
  proto.google.genomics.v1.SearchAnnotationsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchAnnotationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchAnnotationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.SearchAnnotationsRequest,
 *   !proto.google.genomics.v1.SearchAnnotationsResponse>}
 */
const methodInfo_AnnotationServiceV1_SearchAnnotations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.SearchAnnotationsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchAnnotationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchAnnotationsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.SearchAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.SearchAnnotationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.SearchAnnotationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.AnnotationServiceV1Client.prototype.searchAnnotations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/SearchAnnotations',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_SearchAnnotations,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.SearchAnnotationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.SearchAnnotationsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.AnnotationServiceV1PromiseClient.prototype.searchAnnotations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.AnnotationServiceV1/SearchAnnotations',
      request,
      metadata || {},
      methodDescriptor_AnnotationServiceV1_SearchAnnotations);
};


module.exports = proto.google.genomics.v1;

