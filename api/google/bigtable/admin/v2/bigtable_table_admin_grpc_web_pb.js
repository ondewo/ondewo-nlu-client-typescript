/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.admin.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_bigtable_admin_v2_table_pb = require('../../../../google/bigtable/admin/v2/table_pb.js')

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.bigtable = {};
proto.google.bigtable.admin = {};
proto.google.bigtable.admin.v2 = require('./bigtable_table_admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient =
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
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient =
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
 *   !proto.google.bigtable.admin.v2.CreateTableRequest,
 *   !proto.google.bigtable.admin.v2.Table>}
 */
const methodDescriptor_BigtableTableAdmin_CreateTable = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTable',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.CreateTableRequest,
  google_bigtable_admin_v2_table_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_table_pb.Table.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.CreateTableRequest,
 *   !proto.google.bigtable.admin.v2.Table>}
 */
const methodInfo_BigtableTableAdmin_CreateTable = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_v2_table_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_table_pb.Table.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.CreateTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.Table)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.Table>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.createTable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_CreateTable,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.CreateTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.Table>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.createTable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_CreateTable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.CreateTableFromSnapshotRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_BigtableTableAdmin_CreateTableFromSnapshot = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTableFromSnapshot',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.CreateTableFromSnapshotRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateTableFromSnapshotRequest} request
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
 *   !proto.google.bigtable.admin.v2.CreateTableFromSnapshotRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_BigtableTableAdmin_CreateTableFromSnapshot = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.CreateTableFromSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.CreateTableFromSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.createTableFromSnapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTableFromSnapshot',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_CreateTableFromSnapshot,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.CreateTableFromSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.createTableFromSnapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/CreateTableFromSnapshot',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_CreateTableFromSnapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.ListTablesRequest,
 *   !proto.google.bigtable.admin.v2.ListTablesResponse>}
 */
const methodDescriptor_BigtableTableAdmin_ListTables = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/ListTables',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.ListTablesRequest,
  proto.google.bigtable.admin.v2.ListTablesResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListTablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListTablesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.ListTablesRequest,
 *   !proto.google.bigtable.admin.v2.ListTablesResponse>}
 */
const methodInfo_BigtableTableAdmin_ListTables = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.admin.v2.ListTablesResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListTablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListTablesResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.ListTablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.ListTablesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.ListTablesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.listTables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/ListTables',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_ListTables,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.ListTablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.ListTablesResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.listTables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/ListTables',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_ListTables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.GetTableRequest,
 *   !proto.google.bigtable.admin.v2.Table>}
 */
const methodDescriptor_BigtableTableAdmin_GetTable = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/GetTable',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.GetTableRequest,
  google_bigtable_admin_v2_table_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_table_pb.Table.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.GetTableRequest,
 *   !proto.google.bigtable.admin.v2.Table>}
 */
const methodInfo_BigtableTableAdmin_GetTable = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_v2_table_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_table_pb.Table.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.GetTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.Table)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.Table>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.getTable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/GetTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_GetTable,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.GetTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.Table>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.getTable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/GetTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_GetTable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.DeleteTableRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableTableAdmin_DeleteTable = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteTable',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.DeleteTableRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteTableRequest} request
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
 *   !proto.google.bigtable.admin.v2.DeleteTableRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableTableAdmin_DeleteTable = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.deleteTable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_DeleteTable,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.deleteTable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_DeleteTable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.ModifyColumnFamiliesRequest,
 *   !proto.google.bigtable.admin.v2.Table>}
 */
const methodDescriptor_BigtableTableAdmin_ModifyColumnFamilies = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/ModifyColumnFamilies',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.ModifyColumnFamiliesRequest,
  google_bigtable_admin_v2_table_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.v2.ModifyColumnFamiliesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_table_pb.Table.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.ModifyColumnFamiliesRequest,
 *   !proto.google.bigtable.admin.v2.Table>}
 */
const methodInfo_BigtableTableAdmin_ModifyColumnFamilies = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_v2_table_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.v2.ModifyColumnFamiliesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_table_pb.Table.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.ModifyColumnFamiliesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.Table)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.Table>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.modifyColumnFamilies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/ModifyColumnFamilies',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_ModifyColumnFamilies,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.ModifyColumnFamiliesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.Table>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.modifyColumnFamilies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/ModifyColumnFamilies',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_ModifyColumnFamilies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.DropRowRangeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableTableAdmin_DropRowRange = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/DropRowRange',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.DropRowRangeRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DropRowRangeRequest} request
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
 *   !proto.google.bigtable.admin.v2.DropRowRangeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableTableAdmin_DropRowRange = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DropRowRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.DropRowRangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.dropRowRange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/DropRowRange',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_DropRowRange,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.DropRowRangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.dropRowRange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/DropRowRange',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_DropRowRange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.GenerateConsistencyTokenRequest,
 *   !proto.google.bigtable.admin.v2.GenerateConsistencyTokenResponse>}
 */
const methodDescriptor_BigtableTableAdmin_GenerateConsistencyToken = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/GenerateConsistencyToken',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.GenerateConsistencyTokenRequest,
  proto.google.bigtable.admin.v2.GenerateConsistencyTokenResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.GenerateConsistencyTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.GenerateConsistencyTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.GenerateConsistencyTokenRequest,
 *   !proto.google.bigtable.admin.v2.GenerateConsistencyTokenResponse>}
 */
const methodInfo_BigtableTableAdmin_GenerateConsistencyToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.admin.v2.GenerateConsistencyTokenResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.GenerateConsistencyTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.GenerateConsistencyTokenResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.GenerateConsistencyTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.GenerateConsistencyTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.GenerateConsistencyTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.generateConsistencyToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/GenerateConsistencyToken',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_GenerateConsistencyToken,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.GenerateConsistencyTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.GenerateConsistencyTokenResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.generateConsistencyToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/GenerateConsistencyToken',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_GenerateConsistencyToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.CheckConsistencyRequest,
 *   !proto.google.bigtable.admin.v2.CheckConsistencyResponse>}
 */
const methodDescriptor_BigtableTableAdmin_CheckConsistency = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/CheckConsistency',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.CheckConsistencyRequest,
  proto.google.bigtable.admin.v2.CheckConsistencyResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.CheckConsistencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.CheckConsistencyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.CheckConsistencyRequest,
 *   !proto.google.bigtable.admin.v2.CheckConsistencyResponse>}
 */
const methodInfo_BigtableTableAdmin_CheckConsistency = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.admin.v2.CheckConsistencyResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.CheckConsistencyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.CheckConsistencyResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.CheckConsistencyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.CheckConsistencyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.CheckConsistencyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.checkConsistency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/CheckConsistency',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_CheckConsistency,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.CheckConsistencyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.CheckConsistencyResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.checkConsistency =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/CheckConsistency',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_CheckConsistency);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.SnapshotTableRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_BigtableTableAdmin_SnapshotTable = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/SnapshotTable',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.SnapshotTableRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.SnapshotTableRequest} request
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
 *   !proto.google.bigtable.admin.v2.SnapshotTableRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_BigtableTableAdmin_SnapshotTable = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.bigtable.admin.v2.SnapshotTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.SnapshotTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.snapshotTable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/SnapshotTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_SnapshotTable,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.SnapshotTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.snapshotTable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/SnapshotTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_SnapshotTable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.GetSnapshotRequest,
 *   !proto.google.bigtable.admin.v2.Snapshot>}
 */
const methodDescriptor_BigtableTableAdmin_GetSnapshot = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/GetSnapshot',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.GetSnapshotRequest,
  google_bigtable_admin_v2_table_pb.Snapshot,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_table_pb.Snapshot.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.GetSnapshotRequest,
 *   !proto.google.bigtable.admin.v2.Snapshot>}
 */
const methodInfo_BigtableTableAdmin_GetSnapshot = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_v2_table_pb.Snapshot,
  /**
   * @param {!proto.google.bigtable.admin.v2.GetSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_v2_table_pb.Snapshot.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.GetSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.Snapshot)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.Snapshot>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.getSnapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/GetSnapshot',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_GetSnapshot,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.GetSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.Snapshot>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.getSnapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/GetSnapshot',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_GetSnapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.ListSnapshotsRequest,
 *   !proto.google.bigtable.admin.v2.ListSnapshotsResponse>}
 */
const methodDescriptor_BigtableTableAdmin_ListSnapshots = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/ListSnapshots',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.ListSnapshotsRequest,
  proto.google.bigtable.admin.v2.ListSnapshotsResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListSnapshotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListSnapshotsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.v2.ListSnapshotsRequest,
 *   !proto.google.bigtable.admin.v2.ListSnapshotsResponse>}
 */
const methodInfo_BigtableTableAdmin_ListSnapshots = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.bigtable.admin.v2.ListSnapshotsResponse,
  /**
   * @param {!proto.google.bigtable.admin.v2.ListSnapshotsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.bigtable.admin.v2.ListSnapshotsResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.ListSnapshotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.v2.ListSnapshotsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.v2.ListSnapshotsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.listSnapshots =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/ListSnapshots',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_ListSnapshots,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.ListSnapshotsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.v2.ListSnapshotsResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.listSnapshots =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/ListSnapshots',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_ListSnapshots);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.v2.DeleteSnapshotRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableTableAdmin_DeleteSnapshot = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteSnapshot',
  grpc.web.MethodType.UNARY,
  proto.google.bigtable.admin.v2.DeleteSnapshotRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteSnapshotRequest} request
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
 *   !proto.google.bigtable.admin.v2.DeleteSnapshotRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableTableAdmin_DeleteSnapshot = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.v2.DeleteSnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.v2.BigtableTableAdminClient.prototype.deleteSnapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteSnapshot',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_DeleteSnapshot,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.v2.DeleteSnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.v2.BigtableTableAdminPromiseClient.prototype.deleteSnapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.v2.BigtableTableAdmin/DeleteSnapshot',
      request,
      metadata || {},
      methodDescriptor_BigtableTableAdmin_DeleteSnapshot);
};


module.exports = proto.google.bigtable.admin.v2;

