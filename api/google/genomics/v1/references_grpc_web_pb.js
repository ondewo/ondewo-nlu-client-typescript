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
const proto = {};
proto.google = {};
proto.google.genomics = {};
proto.google.genomics.v1 = require('./references_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.genomics.v1.ReferenceServiceV1Client =
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
proto.google.genomics.v1.ReferenceServiceV1PromiseClient =
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
 *   !proto.google.genomics.v1.SearchReferenceSetsRequest,
 *   !proto.google.genomics.v1.SearchReferenceSetsResponse>}
 */
const methodDescriptor_ReferenceServiceV1_SearchReferenceSets = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReferenceServiceV1/SearchReferenceSets',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.SearchReferenceSetsRequest,
  proto.google.genomics.v1.SearchReferenceSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchReferenceSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchReferenceSetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.SearchReferenceSetsRequest,
 *   !proto.google.genomics.v1.SearchReferenceSetsResponse>}
 */
const methodInfo_ReferenceServiceV1_SearchReferenceSets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.SearchReferenceSetsResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchReferenceSetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchReferenceSetsResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.SearchReferenceSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.SearchReferenceSetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.SearchReferenceSetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReferenceServiceV1Client.prototype.searchReferenceSets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/SearchReferenceSets',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_SearchReferenceSets,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.SearchReferenceSetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.SearchReferenceSetsResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReferenceServiceV1PromiseClient.prototype.searchReferenceSets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/SearchReferenceSets',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_SearchReferenceSets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.GetReferenceSetRequest,
 *   !proto.google.genomics.v1.ReferenceSet>}
 */
const methodDescriptor_ReferenceServiceV1_GetReferenceSet = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReferenceServiceV1/GetReferenceSet',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.GetReferenceSetRequest,
  proto.google.genomics.v1.ReferenceSet,
  /**
   * @param {!proto.google.genomics.v1.GetReferenceSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.ReferenceSet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.GetReferenceSetRequest,
 *   !proto.google.genomics.v1.ReferenceSet>}
 */
const methodInfo_ReferenceServiceV1_GetReferenceSet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.ReferenceSet,
  /**
   * @param {!proto.google.genomics.v1.GetReferenceSetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.ReferenceSet.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.GetReferenceSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.ReferenceSet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.ReferenceSet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReferenceServiceV1Client.prototype.getReferenceSet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/GetReferenceSet',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_GetReferenceSet,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.GetReferenceSetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.ReferenceSet>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReferenceServiceV1PromiseClient.prototype.getReferenceSet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/GetReferenceSet',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_GetReferenceSet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.SearchReferencesRequest,
 *   !proto.google.genomics.v1.SearchReferencesResponse>}
 */
const methodDescriptor_ReferenceServiceV1_SearchReferences = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReferenceServiceV1/SearchReferences',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.SearchReferencesRequest,
  proto.google.genomics.v1.SearchReferencesResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchReferencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchReferencesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.SearchReferencesRequest,
 *   !proto.google.genomics.v1.SearchReferencesResponse>}
 */
const methodInfo_ReferenceServiceV1_SearchReferences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.SearchReferencesResponse,
  /**
   * @param {!proto.google.genomics.v1.SearchReferencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.SearchReferencesResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.SearchReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.SearchReferencesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.SearchReferencesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReferenceServiceV1Client.prototype.searchReferences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/SearchReferences',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_SearchReferences,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.SearchReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.SearchReferencesResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReferenceServiceV1PromiseClient.prototype.searchReferences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/SearchReferences',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_SearchReferences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.GetReferenceRequest,
 *   !proto.google.genomics.v1.Reference>}
 */
const methodDescriptor_ReferenceServiceV1_GetReference = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReferenceServiceV1/GetReference',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.GetReferenceRequest,
  proto.google.genomics.v1.Reference,
  /**
   * @param {!proto.google.genomics.v1.GetReferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Reference.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.GetReferenceRequest,
 *   !proto.google.genomics.v1.Reference>}
 */
const methodInfo_ReferenceServiceV1_GetReference = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.Reference,
  /**
   * @param {!proto.google.genomics.v1.GetReferenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.Reference.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.GetReferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.Reference)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.Reference>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReferenceServiceV1Client.prototype.getReference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/GetReference',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_GetReference,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.GetReferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.Reference>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReferenceServiceV1PromiseClient.prototype.getReference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/GetReference',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_GetReference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.genomics.v1.ListBasesRequest,
 *   !proto.google.genomics.v1.ListBasesResponse>}
 */
const methodDescriptor_ReferenceServiceV1_ListBases = new grpc.web.MethodDescriptor(
  '/google.genomics.v1.ReferenceServiceV1/ListBases',
  grpc.web.MethodType.UNARY,
  proto.google.genomics.v1.ListBasesRequest,
  proto.google.genomics.v1.ListBasesResponse,
  /**
   * @param {!proto.google.genomics.v1.ListBasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.ListBasesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.genomics.v1.ListBasesRequest,
 *   !proto.google.genomics.v1.ListBasesResponse>}
 */
const methodInfo_ReferenceServiceV1_ListBases = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.genomics.v1.ListBasesResponse,
  /**
   * @param {!proto.google.genomics.v1.ListBasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.genomics.v1.ListBasesResponse.deserializeBinary
);


/**
 * @param {!proto.google.genomics.v1.ListBasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.genomics.v1.ListBasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.genomics.v1.ListBasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.genomics.v1.ReferenceServiceV1Client.prototype.listBases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/ListBases',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_ListBases,
      callback);
};


/**
 * @param {!proto.google.genomics.v1.ListBasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.genomics.v1.ListBasesResponse>}
 *     Promise that resolves to the response
 */
proto.google.genomics.v1.ReferenceServiceV1PromiseClient.prototype.listBases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.genomics.v1.ReferenceServiceV1/ListBases',
      request,
      metadata || {},
      methodDescriptor_ReferenceServiceV1_ListBases);
};


module.exports = proto.google.genomics.v1;

