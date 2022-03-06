/**
 * @fileoverview gRPC-Web generated client stub for google.devtools.sourcerepo.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.devtools = {};
proto.google.devtools.sourcerepo = {};
proto.google.devtools.sourcerepo.v1 = require('./sourcerepo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.devtools.sourcerepo.v1.SourceRepoClient =
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
proto.google.devtools.sourcerepo.v1.SourceRepoPromiseClient =
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
 *   !proto.google.devtools.sourcerepo.v1.ListReposRequest,
 *   !proto.google.devtools.sourcerepo.v1.ListReposResponse>}
 */
const methodDescriptor_SourceRepo_ListRepos = new grpc.web.MethodDescriptor(
  '/google.devtools.sourcerepo.v1.SourceRepo/ListRepos',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.sourcerepo.v1.ListReposRequest,
  proto.google.devtools.sourcerepo.v1.ListReposResponse,
  /**
   * @param {!proto.google.devtools.sourcerepo.v1.ListReposRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.sourcerepo.v1.ListReposResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.sourcerepo.v1.ListReposRequest,
 *   !proto.google.devtools.sourcerepo.v1.ListReposResponse>}
 */
const methodInfo_SourceRepo_ListRepos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.sourcerepo.v1.ListReposResponse,
  /**
   * @param {!proto.google.devtools.sourcerepo.v1.ListReposRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.sourcerepo.v1.ListReposResponse.deserializeBinary
);


/**
 * @param {!proto.google.devtools.sourcerepo.v1.ListReposRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.sourcerepo.v1.ListReposResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.sourcerepo.v1.ListReposResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.sourcerepo.v1.SourceRepoClient.prototype.listRepos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/ListRepos',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_ListRepos,
      callback);
};


/**
 * @param {!proto.google.devtools.sourcerepo.v1.ListReposRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.sourcerepo.v1.ListReposResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.sourcerepo.v1.SourceRepoPromiseClient.prototype.listRepos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/ListRepos',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_ListRepos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.sourcerepo.v1.GetRepoRequest,
 *   !proto.google.devtools.sourcerepo.v1.Repo>}
 */
const methodDescriptor_SourceRepo_GetRepo = new grpc.web.MethodDescriptor(
  '/google.devtools.sourcerepo.v1.SourceRepo/GetRepo',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.sourcerepo.v1.GetRepoRequest,
  proto.google.devtools.sourcerepo.v1.Repo,
  /**
   * @param {!proto.google.devtools.sourcerepo.v1.GetRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.sourcerepo.v1.Repo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.sourcerepo.v1.GetRepoRequest,
 *   !proto.google.devtools.sourcerepo.v1.Repo>}
 */
const methodInfo_SourceRepo_GetRepo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.sourcerepo.v1.Repo,
  /**
   * @param {!proto.google.devtools.sourcerepo.v1.GetRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.sourcerepo.v1.Repo.deserializeBinary
);


/**
 * @param {!proto.google.devtools.sourcerepo.v1.GetRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.sourcerepo.v1.Repo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.sourcerepo.v1.Repo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.sourcerepo.v1.SourceRepoClient.prototype.getRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/GetRepo',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_GetRepo,
      callback);
};


/**
 * @param {!proto.google.devtools.sourcerepo.v1.GetRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.sourcerepo.v1.Repo>}
 *     Promise that resolves to the response
 */
proto.google.devtools.sourcerepo.v1.SourceRepoPromiseClient.prototype.getRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/GetRepo',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_GetRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.sourcerepo.v1.CreateRepoRequest,
 *   !proto.google.devtools.sourcerepo.v1.Repo>}
 */
const methodDescriptor_SourceRepo_CreateRepo = new grpc.web.MethodDescriptor(
  '/google.devtools.sourcerepo.v1.SourceRepo/CreateRepo',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.sourcerepo.v1.CreateRepoRequest,
  proto.google.devtools.sourcerepo.v1.Repo,
  /**
   * @param {!proto.google.devtools.sourcerepo.v1.CreateRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.sourcerepo.v1.Repo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.devtools.sourcerepo.v1.CreateRepoRequest,
 *   !proto.google.devtools.sourcerepo.v1.Repo>}
 */
const methodInfo_SourceRepo_CreateRepo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.devtools.sourcerepo.v1.Repo,
  /**
   * @param {!proto.google.devtools.sourcerepo.v1.CreateRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.devtools.sourcerepo.v1.Repo.deserializeBinary
);


/**
 * @param {!proto.google.devtools.sourcerepo.v1.CreateRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.devtools.sourcerepo.v1.Repo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.devtools.sourcerepo.v1.Repo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.sourcerepo.v1.SourceRepoClient.prototype.createRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/CreateRepo',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_CreateRepo,
      callback);
};


/**
 * @param {!proto.google.devtools.sourcerepo.v1.CreateRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.devtools.sourcerepo.v1.Repo>}
 *     Promise that resolves to the response
 */
proto.google.devtools.sourcerepo.v1.SourceRepoPromiseClient.prototype.createRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/CreateRepo',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_CreateRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.devtools.sourcerepo.v1.DeleteRepoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_SourceRepo_DeleteRepo = new grpc.web.MethodDescriptor(
  '/google.devtools.sourcerepo.v1.SourceRepo/DeleteRepo',
  grpc.web.MethodType.UNARY,
  proto.google.devtools.sourcerepo.v1.DeleteRepoRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.sourcerepo.v1.DeleteRepoRequest} request
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
 *   !proto.google.devtools.sourcerepo.v1.DeleteRepoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_SourceRepo_DeleteRepo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.devtools.sourcerepo.v1.DeleteRepoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.devtools.sourcerepo.v1.DeleteRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.sourcerepo.v1.SourceRepoClient.prototype.deleteRepo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/DeleteRepo',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_DeleteRepo,
      callback);
};


/**
 * @param {!proto.google.devtools.sourcerepo.v1.DeleteRepoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.devtools.sourcerepo.v1.SourceRepoPromiseClient.prototype.deleteRepo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/DeleteRepo',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_DeleteRepo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_SourceRepo_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.devtools.sourcerepo.v1.SourceRepo/SetIamPolicy',
  grpc.web.MethodType.UNARY,
  google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.SetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodInfo_SourceRepo_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.SetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @param {!proto.google.iam.v1.SetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.v1.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v1.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.sourcerepo.v1.SourceRepoClient.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_SetIamPolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v1.SetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v1.Policy>}
 *     Promise that resolves to the response
 */
proto.google.devtools.sourcerepo.v1.SourceRepoPromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_SourceRepo_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.devtools.sourcerepo.v1.SourceRepo/GetIamPolicy',
  grpc.web.MethodType.UNARY,
  google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.GetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodInfo_SourceRepo_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_v1_policy_pb.Policy,
  /**
   * @param {!proto.google.iam.v1.GetIamPolicyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_policy_pb.Policy.deserializeBinary
);


/**
 * @param {!proto.google.iam.v1.GetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.v1.Policy)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v1.Policy>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.sourcerepo.v1.SourceRepoClient.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_GetIamPolicy,
      callback);
};


/**
 * @param {!proto.google.iam.v1.GetIamPolicyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v1.Policy>}
 *     Promise that resolves to the response
 */
proto.google.devtools.sourcerepo.v1.SourceRepoPromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_SourceRepo_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.devtools.sourcerepo.v1.SourceRepo/TestIamPermissions',
  grpc.web.MethodType.UNARY,
  google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
  /**
   * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodInfo_SourceRepo_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
  /**
   * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.iam.v1.TestIamPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.iam.v1.TestIamPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.devtools.sourcerepo.v1.SourceRepoClient.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_TestIamPermissions,
      callback);
};


/**
 * @param {!proto.google.iam.v1.TestIamPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.iam.v1.TestIamPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.google.devtools.sourcerepo.v1.SourceRepoPromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.devtools.sourcerepo.v1.SourceRepo/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_SourceRepo_TestIamPermissions);
};


module.exports = proto.google.devtools.sourcerepo.v1;

