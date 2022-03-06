/**
 * @fileoverview gRPC-Web generated client stub for google.bigtable.admin.table.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js')

var google_bigtable_admin_table_v1_bigtable_table_data_pb = require('../../../../../google/bigtable/admin/table/v1/bigtable_table_data_pb.js')

var google_bigtable_admin_table_v1_bigtable_table_service_messages_pb = require('../../../../../google/bigtable/admin/table/v1/bigtable_table_service_messages_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.bigtable = {};
proto.google.bigtable.admin = {};
proto.google.bigtable.admin.table = {};
proto.google.bigtable.admin.table.v1 = require('./bigtable_table_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient =
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
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient =
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
 *   !proto.google.bigtable.admin.table.v1.CreateTableRequest,
 *   !proto.google.bigtable.admin.table.v1.Table>}
 */
const methodDescriptor_BigtableTableService_CreateTable = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.table.v1.BigtableTableService/CreateTable',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateTableRequest,
  google_bigtable_admin_table_v1_bigtable_table_data_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.CreateTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_data_pb.Table.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.table.v1.CreateTableRequest,
 *   !proto.google.bigtable.admin.table.v1.Table>}
 */
const methodInfo_BigtableTableService_CreateTable = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_table_v1_bigtable_table_data_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.CreateTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_data_pb.Table.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.table.v1.CreateTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.table.v1.Table)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.table.v1.Table>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient.prototype.createTable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/CreateTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_CreateTable,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.table.v1.CreateTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.table.v1.Table>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient.prototype.createTable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/CreateTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_CreateTable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.table.v1.ListTablesRequest,
 *   !proto.google.bigtable.admin.table.v1.ListTablesResponse>}
 */
const methodDescriptor_BigtableTableService_ListTables = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.table.v1.BigtableTableService/ListTables',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesRequest,
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.ListTablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.table.v1.ListTablesRequest,
 *   !proto.google.bigtable.admin.table.v1.ListTablesResponse>}
 */
const methodInfo_BigtableTableService_ListTables = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.ListTablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.ListTablesResponse.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.table.v1.ListTablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.table.v1.ListTablesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.table.v1.ListTablesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient.prototype.listTables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/ListTables',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_ListTables,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.table.v1.ListTablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.table.v1.ListTablesResponse>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient.prototype.listTables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/ListTables',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_ListTables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.table.v1.GetTableRequest,
 *   !proto.google.bigtable.admin.table.v1.Table>}
 */
const methodDescriptor_BigtableTableService_GetTable = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.table.v1.BigtableTableService/GetTable',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.GetTableRequest,
  google_bigtable_admin_table_v1_bigtable_table_data_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.GetTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_data_pb.Table.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.table.v1.GetTableRequest,
 *   !proto.google.bigtable.admin.table.v1.Table>}
 */
const methodInfo_BigtableTableService_GetTable = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_table_v1_bigtable_table_data_pb.Table,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.GetTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_data_pb.Table.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.table.v1.GetTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.table.v1.Table)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.table.v1.Table>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient.prototype.getTable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/GetTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_GetTable,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.table.v1.GetTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.table.v1.Table>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient.prototype.getTable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/GetTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_GetTable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.table.v1.DeleteTableRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableTableService_DeleteTable = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.table.v1.BigtableTableService/DeleteTable',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteTableRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.DeleteTableRequest} request
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
 *   !proto.google.bigtable.admin.table.v1.DeleteTableRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableTableService_DeleteTable = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.DeleteTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.table.v1.DeleteTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient.prototype.deleteTable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/DeleteTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_DeleteTable,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.table.v1.DeleteTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient.prototype.deleteTable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/DeleteTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_DeleteTable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.table.v1.RenameTableRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableTableService_RenameTable = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.table.v1.BigtableTableService/RenameTable',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.RenameTableRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.RenameTableRequest} request
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
 *   !proto.google.bigtable.admin.table.v1.RenameTableRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableTableService_RenameTable = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.RenameTableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.table.v1.RenameTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient.prototype.renameTable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/RenameTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_RenameTable,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.table.v1.RenameTableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient.prototype.renameTable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/RenameTable',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_RenameTable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.table.v1.CreateColumnFamilyRequest,
 *   !proto.google.bigtable.admin.table.v1.ColumnFamily>}
 */
const methodDescriptor_BigtableTableService_CreateColumnFamily = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.table.v1.BigtableTableService/CreateColumnFamily',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.CreateColumnFamilyRequest,
  google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.CreateColumnFamilyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.table.v1.CreateColumnFamilyRequest,
 *   !proto.google.bigtable.admin.table.v1.ColumnFamily>}
 */
const methodInfo_BigtableTableService_CreateColumnFamily = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.CreateColumnFamilyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.table.v1.CreateColumnFamilyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.table.v1.ColumnFamily)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.table.v1.ColumnFamily>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient.prototype.createColumnFamily =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/CreateColumnFamily',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_CreateColumnFamily,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.table.v1.CreateColumnFamilyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.table.v1.ColumnFamily>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient.prototype.createColumnFamily =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/CreateColumnFamily',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_CreateColumnFamily);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.table.v1.ColumnFamily,
 *   !proto.google.bigtable.admin.table.v1.ColumnFamily>}
 */
const methodDescriptor_BigtableTableService_UpdateColumnFamily = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.table.v1.BigtableTableService/UpdateColumnFamily',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
  google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.ColumnFamily} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.bigtable.admin.table.v1.ColumnFamily,
 *   !proto.google.bigtable.admin.table.v1.ColumnFamily>}
 */
const methodInfo_BigtableTableService_UpdateColumnFamily = new grpc.web.AbstractClientBase.MethodInfo(
  google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.ColumnFamily} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_bigtable_admin_table_v1_bigtable_table_data_pb.ColumnFamily.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.table.v1.ColumnFamily} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.bigtable.admin.table.v1.ColumnFamily)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.bigtable.admin.table.v1.ColumnFamily>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient.prototype.updateColumnFamily =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/UpdateColumnFamily',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_UpdateColumnFamily,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.table.v1.ColumnFamily} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.bigtable.admin.table.v1.ColumnFamily>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient.prototype.updateColumnFamily =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/UpdateColumnFamily',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_UpdateColumnFamily);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.table.v1.DeleteColumnFamilyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableTableService_DeleteColumnFamily = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.table.v1.BigtableTableService/DeleteColumnFamily',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.DeleteColumnFamilyRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.DeleteColumnFamilyRequest} request
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
 *   !proto.google.bigtable.admin.table.v1.DeleteColumnFamilyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableTableService_DeleteColumnFamily = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.DeleteColumnFamilyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.table.v1.DeleteColumnFamilyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient.prototype.deleteColumnFamily =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/DeleteColumnFamily',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_DeleteColumnFamily,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.table.v1.DeleteColumnFamilyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient.prototype.deleteColumnFamily =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/DeleteColumnFamily',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_DeleteColumnFamily);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.bigtable.admin.table.v1.BulkDeleteRowsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BigtableTableService_BulkDeleteRows = new grpc.web.MethodDescriptor(
  '/google.bigtable.admin.table.v1.BigtableTableService/BulkDeleteRows',
  grpc.web.MethodType.UNARY,
  google_bigtable_admin_table_v1_bigtable_table_service_messages_pb.BulkDeleteRowsRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.BulkDeleteRowsRequest} request
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
 *   !proto.google.bigtable.admin.table.v1.BulkDeleteRowsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BigtableTableService_BulkDeleteRows = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.bigtable.admin.table.v1.BulkDeleteRowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.bigtable.admin.table.v1.BulkDeleteRowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.bigtable.admin.table.v1.BigtableTableServiceClient.prototype.bulkDeleteRows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/BulkDeleteRows',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_BulkDeleteRows,
      callback);
};


/**
 * @param {!proto.google.bigtable.admin.table.v1.BulkDeleteRowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.bigtable.admin.table.v1.BigtableTableServicePromiseClient.prototype.bulkDeleteRows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.bigtable.admin.table.v1.BigtableTableService/BulkDeleteRows',
      request,
      metadata || {},
      methodDescriptor_BigtableTableService_BulkDeleteRows);
};


module.exports = proto.google.bigtable.admin.table.v1;

