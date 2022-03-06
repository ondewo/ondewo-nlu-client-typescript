/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.support.v1alpha1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_support_common_pb = require('../../../../google/cloud/support/common_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.support = {};
proto.google.cloud.support.v1alpha1 = require('./cloud_support_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient =
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
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient =
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
 *   !proto.google.cloud.support.v1alpha1.GetSupportAccountRequest,
 *   !proto.google.cloud.support.common.SupportAccount>}
 */
const methodDescriptor_CloudSupport_GetSupportAccount = new grpc.web.MethodDescriptor(
  '/google.cloud.support.v1alpha1.CloudSupport/GetSupportAccount',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.support.v1alpha1.GetSupportAccountRequest,
  google_cloud_support_common_pb.SupportAccount,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.GetSupportAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.SupportAccount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.support.v1alpha1.GetSupportAccountRequest,
 *   !proto.google.cloud.support.common.SupportAccount>}
 */
const methodInfo_CloudSupport_GetSupportAccount = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_support_common_pb.SupportAccount,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.GetSupportAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.SupportAccount.deserializeBinary
);


/**
 * @param {!proto.google.cloud.support.v1alpha1.GetSupportAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.support.common.SupportAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.support.common.SupportAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient.prototype.getSupportAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/GetSupportAccount',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_GetSupportAccount,
      callback);
};


/**
 * @param {!proto.google.cloud.support.v1alpha1.GetSupportAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.support.common.SupportAccount>}
 *     Promise that resolves to the response
 */
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient.prototype.getSupportAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/GetSupportAccount',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_GetSupportAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.support.v1alpha1.ListSupportAccountsRequest,
 *   !proto.google.cloud.support.v1alpha1.ListSupportAccountsResponse>}
 */
const methodDescriptor_CloudSupport_ListSupportAccounts = new grpc.web.MethodDescriptor(
  '/google.cloud.support.v1alpha1.CloudSupport/ListSupportAccounts',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.support.v1alpha1.ListSupportAccountsRequest,
  proto.google.cloud.support.v1alpha1.ListSupportAccountsResponse,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.ListSupportAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.support.v1alpha1.ListSupportAccountsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.support.v1alpha1.ListSupportAccountsRequest,
 *   !proto.google.cloud.support.v1alpha1.ListSupportAccountsResponse>}
 */
const methodInfo_CloudSupport_ListSupportAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.support.v1alpha1.ListSupportAccountsResponse,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.ListSupportAccountsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.support.v1alpha1.ListSupportAccountsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.support.v1alpha1.ListSupportAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.support.v1alpha1.ListSupportAccountsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.support.v1alpha1.ListSupportAccountsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient.prototype.listSupportAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/ListSupportAccounts',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_ListSupportAccounts,
      callback);
};


/**
 * @param {!proto.google.cloud.support.v1alpha1.ListSupportAccountsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.support.v1alpha1.ListSupportAccountsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient.prototype.listSupportAccounts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/ListSupportAccounts',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_ListSupportAccounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.support.v1alpha1.GetCaseRequest,
 *   !proto.google.cloud.support.common.Case>}
 */
const methodDescriptor_CloudSupport_GetCase = new grpc.web.MethodDescriptor(
  '/google.cloud.support.v1alpha1.CloudSupport/GetCase',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.support.v1alpha1.GetCaseRequest,
  google_cloud_support_common_pb.Case,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.GetCaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.Case.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.support.v1alpha1.GetCaseRequest,
 *   !proto.google.cloud.support.common.Case>}
 */
const methodInfo_CloudSupport_GetCase = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_support_common_pb.Case,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.GetCaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.Case.deserializeBinary
);


/**
 * @param {!proto.google.cloud.support.v1alpha1.GetCaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.support.common.Case)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.support.common.Case>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient.prototype.getCase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/GetCase',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_GetCase,
      callback);
};


/**
 * @param {!proto.google.cloud.support.v1alpha1.GetCaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.support.common.Case>}
 *     Promise that resolves to the response
 */
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient.prototype.getCase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/GetCase',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_GetCase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.support.v1alpha1.ListCasesRequest,
 *   !proto.google.cloud.support.v1alpha1.ListCasesResponse>}
 */
const methodDescriptor_CloudSupport_ListCases = new grpc.web.MethodDescriptor(
  '/google.cloud.support.v1alpha1.CloudSupport/ListCases',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.support.v1alpha1.ListCasesRequest,
  proto.google.cloud.support.v1alpha1.ListCasesResponse,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.ListCasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.support.v1alpha1.ListCasesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.support.v1alpha1.ListCasesRequest,
 *   !proto.google.cloud.support.v1alpha1.ListCasesResponse>}
 */
const methodInfo_CloudSupport_ListCases = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.support.v1alpha1.ListCasesResponse,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.ListCasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.support.v1alpha1.ListCasesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.support.v1alpha1.ListCasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.support.v1alpha1.ListCasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.support.v1alpha1.ListCasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient.prototype.listCases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/ListCases',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_ListCases,
      callback);
};


/**
 * @param {!proto.google.cloud.support.v1alpha1.ListCasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.support.v1alpha1.ListCasesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient.prototype.listCases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/ListCases',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_ListCases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.support.v1alpha1.ListCommentsRequest,
 *   !proto.google.cloud.support.v1alpha1.ListCommentsResponse>}
 */
const methodDescriptor_CloudSupport_ListComments = new grpc.web.MethodDescriptor(
  '/google.cloud.support.v1alpha1.CloudSupport/ListComments',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.support.v1alpha1.ListCommentsRequest,
  proto.google.cloud.support.v1alpha1.ListCommentsResponse,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.ListCommentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.support.v1alpha1.ListCommentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.support.v1alpha1.ListCommentsRequest,
 *   !proto.google.cloud.support.v1alpha1.ListCommentsResponse>}
 */
const methodInfo_CloudSupport_ListComments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.support.v1alpha1.ListCommentsResponse,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.ListCommentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.support.v1alpha1.ListCommentsResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.support.v1alpha1.ListCommentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.support.v1alpha1.ListCommentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.support.v1alpha1.ListCommentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient.prototype.listComments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/ListComments',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_ListComments,
      callback);
};


/**
 * @param {!proto.google.cloud.support.v1alpha1.ListCommentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.support.v1alpha1.ListCommentsResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient.prototype.listComments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/ListComments',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_ListComments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.support.v1alpha1.CreateCaseRequest,
 *   !proto.google.cloud.support.common.Case>}
 */
const methodDescriptor_CloudSupport_CreateCase = new grpc.web.MethodDescriptor(
  '/google.cloud.support.v1alpha1.CloudSupport/CreateCase',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.support.v1alpha1.CreateCaseRequest,
  google_cloud_support_common_pb.Case,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.CreateCaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.Case.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.support.v1alpha1.CreateCaseRequest,
 *   !proto.google.cloud.support.common.Case>}
 */
const methodInfo_CloudSupport_CreateCase = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_support_common_pb.Case,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.CreateCaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.Case.deserializeBinary
);


/**
 * @param {!proto.google.cloud.support.v1alpha1.CreateCaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.support.common.Case)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.support.common.Case>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient.prototype.createCase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/CreateCase',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_CreateCase,
      callback);
};


/**
 * @param {!proto.google.cloud.support.v1alpha1.CreateCaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.support.common.Case>}
 *     Promise that resolves to the response
 */
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient.prototype.createCase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/CreateCase',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_CreateCase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.support.v1alpha1.UpdateCaseRequest,
 *   !proto.google.cloud.support.common.Case>}
 */
const methodDescriptor_CloudSupport_UpdateCase = new grpc.web.MethodDescriptor(
  '/google.cloud.support.v1alpha1.CloudSupport/UpdateCase',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.support.v1alpha1.UpdateCaseRequest,
  google_cloud_support_common_pb.Case,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.UpdateCaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.Case.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.support.v1alpha1.UpdateCaseRequest,
 *   !proto.google.cloud.support.common.Case>}
 */
const methodInfo_CloudSupport_UpdateCase = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_support_common_pb.Case,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.UpdateCaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.Case.deserializeBinary
);


/**
 * @param {!proto.google.cloud.support.v1alpha1.UpdateCaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.support.common.Case)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.support.common.Case>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient.prototype.updateCase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/UpdateCase',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_UpdateCase,
      callback);
};


/**
 * @param {!proto.google.cloud.support.v1alpha1.UpdateCaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.support.common.Case>}
 *     Promise that resolves to the response
 */
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient.prototype.updateCase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/UpdateCase',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_UpdateCase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.support.v1alpha1.CreateCommentRequest,
 *   !proto.google.cloud.support.common.Comment>}
 */
const methodDescriptor_CloudSupport_CreateComment = new grpc.web.MethodDescriptor(
  '/google.cloud.support.v1alpha1.CloudSupport/CreateComment',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.support.v1alpha1.CreateCommentRequest,
  google_cloud_support_common_pb.Comment,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.CreateCommentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.Comment.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.support.v1alpha1.CreateCommentRequest,
 *   !proto.google.cloud.support.common.Comment>}
 */
const methodInfo_CloudSupport_CreateComment = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_support_common_pb.Comment,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.CreateCommentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.Comment.deserializeBinary
);


/**
 * @param {!proto.google.cloud.support.v1alpha1.CreateCommentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.support.common.Comment)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.support.common.Comment>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient.prototype.createComment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/CreateComment',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_CreateComment,
      callback);
};


/**
 * @param {!proto.google.cloud.support.v1alpha1.CreateCommentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.support.common.Comment>}
 *     Promise that resolves to the response
 */
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient.prototype.createComment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/CreateComment',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_CreateComment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.support.v1alpha1.GetIssueTaxonomyRequest,
 *   !proto.google.cloud.support.common.IssueTaxonomy>}
 */
const methodDescriptor_CloudSupport_GetIssueTaxonomy = new grpc.web.MethodDescriptor(
  '/google.cloud.support.v1alpha1.CloudSupport/GetIssueTaxonomy',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.support.v1alpha1.GetIssueTaxonomyRequest,
  google_cloud_support_common_pb.IssueTaxonomy,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.GetIssueTaxonomyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.IssueTaxonomy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.support.v1alpha1.GetIssueTaxonomyRequest,
 *   !proto.google.cloud.support.common.IssueTaxonomy>}
 */
const methodInfo_CloudSupport_GetIssueTaxonomy = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_support_common_pb.IssueTaxonomy,
  /**
   * @param {!proto.google.cloud.support.v1alpha1.GetIssueTaxonomyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_support_common_pb.IssueTaxonomy.deserializeBinary
);


/**
 * @param {!proto.google.cloud.support.v1alpha1.GetIssueTaxonomyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.support.common.IssueTaxonomy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.support.common.IssueTaxonomy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.support.v1alpha1.CloudSupportClient.prototype.getIssueTaxonomy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/GetIssueTaxonomy',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_GetIssueTaxonomy,
      callback);
};


/**
 * @param {!proto.google.cloud.support.v1alpha1.GetIssueTaxonomyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.support.common.IssueTaxonomy>}
 *     Promise that resolves to the response
 */
proto.google.cloud.support.v1alpha1.CloudSupportPromiseClient.prototype.getIssueTaxonomy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.support.v1alpha1.CloudSupport/GetIssueTaxonomy',
      request,
      metadata || {},
      methodDescriptor_CloudSupport_GetIssueTaxonomy);
};


module.exports = proto.google.cloud.support.v1alpha1;

