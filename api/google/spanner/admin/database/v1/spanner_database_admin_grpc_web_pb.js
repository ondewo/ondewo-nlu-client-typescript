/**
 * @fileoverview gRPC-Web generated client stub for google.spanner.admin.database.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_iam_v1_iam_policy_pb = require('../../../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../../../google/iam/v1/policy_pb.js')

var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.spanner = {};
proto.google.spanner.admin = {};
proto.google.spanner.admin.database = {};
proto.google.spanner.admin.database.v1 = require('./spanner_database_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.spanner.admin.database.v1.DatabaseAdminClient =
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
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient =
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
 *   !proto.google.spanner.admin.database.v1.ListDatabasesRequest,
 *   !proto.google.spanner.admin.database.v1.ListDatabasesResponse>}
 */
const methodDescriptor_DatabaseAdmin_ListDatabases = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.database.v1.DatabaseAdmin/ListDatabases',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.database.v1.ListDatabasesRequest,
  proto.google.spanner.admin.database.v1.ListDatabasesResponse,
  /**
   * @param {!proto.google.spanner.admin.database.v1.ListDatabasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.database.v1.ListDatabasesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.admin.database.v1.ListDatabasesRequest,
 *   !proto.google.spanner.admin.database.v1.ListDatabasesResponse>}
 */
const methodInfo_DatabaseAdmin_ListDatabases = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.admin.database.v1.ListDatabasesResponse,
  /**
   * @param {!proto.google.spanner.admin.database.v1.ListDatabasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.database.v1.ListDatabasesResponse.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.database.v1.ListDatabasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.admin.database.v1.ListDatabasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.admin.database.v1.ListDatabasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.database.v1.DatabaseAdminClient.prototype.listDatabases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/ListDatabases',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_ListDatabases,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.database.v1.ListDatabasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.admin.database.v1.ListDatabasesResponse>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient.prototype.listDatabases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/ListDatabases',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_ListDatabases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.database.v1.CreateDatabaseRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_DatabaseAdmin_CreateDatabase = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.database.v1.DatabaseAdmin/CreateDatabase',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.database.v1.CreateDatabaseRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.spanner.admin.database.v1.CreateDatabaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.admin.database.v1.CreateDatabaseRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_DatabaseAdmin_CreateDatabase = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.spanner.admin.database.v1.CreateDatabaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.database.v1.CreateDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.database.v1.DatabaseAdminClient.prototype.createDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/CreateDatabase',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_CreateDatabase,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.database.v1.CreateDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient.prototype.createDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/CreateDatabase',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_CreateDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.database.v1.GetDatabaseRequest,
 *   !proto.google.spanner.admin.database.v1.Database>}
 */
const methodDescriptor_DatabaseAdmin_GetDatabase = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabase',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.database.v1.GetDatabaseRequest,
  proto.google.spanner.admin.database.v1.Database,
  /**
   * @param {!proto.google.spanner.admin.database.v1.GetDatabaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.database.v1.Database.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.admin.database.v1.GetDatabaseRequest,
 *   !proto.google.spanner.admin.database.v1.Database>}
 */
const methodInfo_DatabaseAdmin_GetDatabase = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.admin.database.v1.Database,
  /**
   * @param {!proto.google.spanner.admin.database.v1.GetDatabaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.database.v1.Database.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.database.v1.GetDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.admin.database.v1.Database)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.admin.database.v1.Database>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.database.v1.DatabaseAdminClient.prototype.getDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabase',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_GetDatabase,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.database.v1.GetDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.admin.database.v1.Database>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient.prototype.getDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabase',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_GetDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.database.v1.UpdateDatabaseDdlRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_DatabaseAdmin_UpdateDatabaseDdl = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.database.v1.DatabaseAdmin/UpdateDatabaseDdl',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.database.v1.UpdateDatabaseDdlRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.spanner.admin.database.v1.UpdateDatabaseDdlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.admin.database.v1.UpdateDatabaseDdlRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_DatabaseAdmin_UpdateDatabaseDdl = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.spanner.admin.database.v1.UpdateDatabaseDdlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.database.v1.UpdateDatabaseDdlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.database.v1.DatabaseAdminClient.prototype.updateDatabaseDdl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/UpdateDatabaseDdl',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_UpdateDatabaseDdl,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.database.v1.UpdateDatabaseDdlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient.prototype.updateDatabaseDdl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/UpdateDatabaseDdl',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_UpdateDatabaseDdl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.database.v1.DropDatabaseRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatabaseAdmin_DropDatabase = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.database.v1.DatabaseAdmin/DropDatabase',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.database.v1.DropDatabaseRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.spanner.admin.database.v1.DropDatabaseRequest} request
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
 *   !proto.google.spanner.admin.database.v1.DropDatabaseRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DatabaseAdmin_DropDatabase = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.spanner.admin.database.v1.DropDatabaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.database.v1.DropDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.database.v1.DatabaseAdminClient.prototype.dropDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/DropDatabase',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_DropDatabase,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.database.v1.DropDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient.prototype.dropDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/DropDatabase',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_DropDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.spanner.admin.database.v1.GetDatabaseDdlRequest,
 *   !proto.google.spanner.admin.database.v1.GetDatabaseDdlResponse>}
 */
const methodDescriptor_DatabaseAdmin_GetDatabaseDdl = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabaseDdl',
  grpc.web.MethodType.UNARY,
  proto.google.spanner.admin.database.v1.GetDatabaseDdlRequest,
  proto.google.spanner.admin.database.v1.GetDatabaseDdlResponse,
  /**
   * @param {!proto.google.spanner.admin.database.v1.GetDatabaseDdlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.database.v1.GetDatabaseDdlResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.spanner.admin.database.v1.GetDatabaseDdlRequest,
 *   !proto.google.spanner.admin.database.v1.GetDatabaseDdlResponse>}
 */
const methodInfo_DatabaseAdmin_GetDatabaseDdl = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.spanner.admin.database.v1.GetDatabaseDdlResponse,
  /**
   * @param {!proto.google.spanner.admin.database.v1.GetDatabaseDdlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.spanner.admin.database.v1.GetDatabaseDdlResponse.deserializeBinary
);


/**
 * @param {!proto.google.spanner.admin.database.v1.GetDatabaseDdlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.spanner.admin.database.v1.GetDatabaseDdlResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.spanner.admin.database.v1.GetDatabaseDdlResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.spanner.admin.database.v1.DatabaseAdminClient.prototype.getDatabaseDdl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabaseDdl',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_GetDatabaseDdl,
      callback);
};


/**
 * @param {!proto.google.spanner.admin.database.v1.GetDatabaseDdlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.spanner.admin.database.v1.GetDatabaseDdlResponse>}
 *     Promise that resolves to the response
 */
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient.prototype.getDatabaseDdl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/GetDatabaseDdl',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_GetDatabaseDdl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_DatabaseAdmin_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.database.v1.DatabaseAdmin/SetIamPolicy',
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
const methodInfo_DatabaseAdmin_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.spanner.admin.database.v1.DatabaseAdminClient.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_SetIamPolicy,
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
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_DatabaseAdmin_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.database.v1.DatabaseAdmin/GetIamPolicy',
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
const methodInfo_DatabaseAdmin_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.spanner.admin.database.v1.DatabaseAdminClient.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_GetIamPolicy,
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
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_DatabaseAdmin_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.spanner.admin.database.v1.DatabaseAdmin/TestIamPermissions',
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
const methodInfo_DatabaseAdmin_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.spanner.admin.database.v1.DatabaseAdminClient.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_TestIamPermissions,
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
proto.google.spanner.admin.database.v1.DatabaseAdminPromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.spanner.admin.database.v1.DatabaseAdmin/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_DatabaseAdmin_TestIamPermissions);
};


module.exports = proto.google.spanner.admin.database.v1;

