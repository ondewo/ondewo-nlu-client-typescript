/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.resourcemanager.v2
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

var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.resourcemanager = {};
proto.google.cloud.resourcemanager.v2 = require('./folders_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.resourcemanager.v2.FoldersClient =
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
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient =
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
 *   !proto.google.cloud.resourcemanager.v2.ListFoldersRequest,
 *   !proto.google.cloud.resourcemanager.v2.ListFoldersResponse>}
 */
const methodDescriptor_Folders_ListFolders = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/ListFolders',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.resourcemanager.v2.ListFoldersRequest,
  proto.google.cloud.resourcemanager.v2.ListFoldersResponse,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.ListFoldersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.ListFoldersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.resourcemanager.v2.ListFoldersRequest,
 *   !proto.google.cloud.resourcemanager.v2.ListFoldersResponse>}
 */
const methodInfo_Folders_ListFolders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.resourcemanager.v2.ListFoldersResponse,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.ListFoldersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.ListFoldersResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.resourcemanager.v2.ListFoldersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.resourcemanager.v2.ListFoldersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.resourcemanager.v2.ListFoldersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.listFolders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/ListFolders',
      request,
      metadata || {},
      methodDescriptor_Folders_ListFolders,
      callback);
};


/**
 * @param {!proto.google.cloud.resourcemanager.v2.ListFoldersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.resourcemanager.v2.ListFoldersResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.listFolders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/ListFolders',
      request,
      metadata || {},
      methodDescriptor_Folders_ListFolders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.resourcemanager.v2.SearchFoldersRequest,
 *   !proto.google.cloud.resourcemanager.v2.SearchFoldersResponse>}
 */
const methodDescriptor_Folders_SearchFolders = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/SearchFolders',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.resourcemanager.v2.SearchFoldersRequest,
  proto.google.cloud.resourcemanager.v2.SearchFoldersResponse,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.SearchFoldersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.SearchFoldersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.resourcemanager.v2.SearchFoldersRequest,
 *   !proto.google.cloud.resourcemanager.v2.SearchFoldersResponse>}
 */
const methodInfo_Folders_SearchFolders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.resourcemanager.v2.SearchFoldersResponse,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.SearchFoldersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.SearchFoldersResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.resourcemanager.v2.SearchFoldersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.resourcemanager.v2.SearchFoldersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.resourcemanager.v2.SearchFoldersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.searchFolders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/SearchFolders',
      request,
      metadata || {},
      methodDescriptor_Folders_SearchFolders,
      callback);
};


/**
 * @param {!proto.google.cloud.resourcemanager.v2.SearchFoldersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.resourcemanager.v2.SearchFoldersResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.searchFolders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/SearchFolders',
      request,
      metadata || {},
      methodDescriptor_Folders_SearchFolders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.resourcemanager.v2.GetFolderRequest,
 *   !proto.google.cloud.resourcemanager.v2.Folder>}
 */
const methodDescriptor_Folders_GetFolder = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/GetFolder',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.resourcemanager.v2.GetFolderRequest,
  proto.google.cloud.resourcemanager.v2.Folder,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.GetFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.Folder.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.resourcemanager.v2.GetFolderRequest,
 *   !proto.google.cloud.resourcemanager.v2.Folder>}
 */
const methodInfo_Folders_GetFolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.resourcemanager.v2.Folder,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.GetFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.Folder.deserializeBinary
);


/**
 * @param {!proto.google.cloud.resourcemanager.v2.GetFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.resourcemanager.v2.Folder)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.resourcemanager.v2.Folder>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.getFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/GetFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_GetFolder,
      callback);
};


/**
 * @param {!proto.google.cloud.resourcemanager.v2.GetFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.resourcemanager.v2.Folder>}
 *     Promise that resolves to the response
 */
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.getFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/GetFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_GetFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.resourcemanager.v2.CreateFolderRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Folders_CreateFolder = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/CreateFolder',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.resourcemanager.v2.CreateFolderRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.CreateFolderRequest} request
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
 *   !proto.google.cloud.resourcemanager.v2.CreateFolderRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Folders_CreateFolder = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.CreateFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.resourcemanager.v2.CreateFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.createFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/CreateFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_CreateFolder,
      callback);
};


/**
 * @param {!proto.google.cloud.resourcemanager.v2.CreateFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.createFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/CreateFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_CreateFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.resourcemanager.v2.UpdateFolderRequest,
 *   !proto.google.cloud.resourcemanager.v2.Folder>}
 */
const methodDescriptor_Folders_UpdateFolder = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/UpdateFolder',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.resourcemanager.v2.UpdateFolderRequest,
  proto.google.cloud.resourcemanager.v2.Folder,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.UpdateFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.Folder.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.resourcemanager.v2.UpdateFolderRequest,
 *   !proto.google.cloud.resourcemanager.v2.Folder>}
 */
const methodInfo_Folders_UpdateFolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.resourcemanager.v2.Folder,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.UpdateFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.Folder.deserializeBinary
);


/**
 * @param {!proto.google.cloud.resourcemanager.v2.UpdateFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.resourcemanager.v2.Folder)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.resourcemanager.v2.Folder>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.updateFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/UpdateFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_UpdateFolder,
      callback);
};


/**
 * @param {!proto.google.cloud.resourcemanager.v2.UpdateFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.resourcemanager.v2.Folder>}
 *     Promise that resolves to the response
 */
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.updateFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/UpdateFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_UpdateFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.resourcemanager.v2.MoveFolderRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Folders_MoveFolder = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/MoveFolder',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.resourcemanager.v2.MoveFolderRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.MoveFolderRequest} request
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
 *   !proto.google.cloud.resourcemanager.v2.MoveFolderRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Folders_MoveFolder = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.MoveFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.google.cloud.resourcemanager.v2.MoveFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.moveFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/MoveFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_MoveFolder,
      callback);
};


/**
 * @param {!proto.google.cloud.resourcemanager.v2.MoveFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.moveFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/MoveFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_MoveFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.resourcemanager.v2.DeleteFolderRequest,
 *   !proto.google.cloud.resourcemanager.v2.Folder>}
 */
const methodDescriptor_Folders_DeleteFolder = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/DeleteFolder',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.resourcemanager.v2.DeleteFolderRequest,
  proto.google.cloud.resourcemanager.v2.Folder,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.DeleteFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.Folder.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.resourcemanager.v2.DeleteFolderRequest,
 *   !proto.google.cloud.resourcemanager.v2.Folder>}
 */
const methodInfo_Folders_DeleteFolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.resourcemanager.v2.Folder,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.DeleteFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.Folder.deserializeBinary
);


/**
 * @param {!proto.google.cloud.resourcemanager.v2.DeleteFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.resourcemanager.v2.Folder)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.resourcemanager.v2.Folder>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.deleteFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/DeleteFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_DeleteFolder,
      callback);
};


/**
 * @param {!proto.google.cloud.resourcemanager.v2.DeleteFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.resourcemanager.v2.Folder>}
 *     Promise that resolves to the response
 */
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.deleteFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/DeleteFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_DeleteFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.resourcemanager.v2.UndeleteFolderRequest,
 *   !proto.google.cloud.resourcemanager.v2.Folder>}
 */
const methodDescriptor_Folders_UndeleteFolder = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/UndeleteFolder',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.resourcemanager.v2.UndeleteFolderRequest,
  proto.google.cloud.resourcemanager.v2.Folder,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.UndeleteFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.Folder.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.resourcemanager.v2.UndeleteFolderRequest,
 *   !proto.google.cloud.resourcemanager.v2.Folder>}
 */
const methodInfo_Folders_UndeleteFolder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.resourcemanager.v2.Folder,
  /**
   * @param {!proto.google.cloud.resourcemanager.v2.UndeleteFolderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.resourcemanager.v2.Folder.deserializeBinary
);


/**
 * @param {!proto.google.cloud.resourcemanager.v2.UndeleteFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.resourcemanager.v2.Folder)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.resourcemanager.v2.Folder>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.undeleteFolder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/UndeleteFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_UndeleteFolder,
      callback);
};


/**
 * @param {!proto.google.cloud.resourcemanager.v2.UndeleteFolderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.resourcemanager.v2.Folder>}
 *     Promise that resolves to the response
 */
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.undeleteFolder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/UndeleteFolder',
      request,
      metadata || {},
      methodDescriptor_Folders_UndeleteFolder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_Folders_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/GetIamPolicy',
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
const methodInfo_Folders_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_Folders_GetIamPolicy,
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
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_Folders_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_Folders_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/SetIamPolicy',
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
const methodInfo_Folders_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_Folders_SetIamPolicy,
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
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_Folders_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_Folders_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.cloud.resourcemanager.v2.Folders/TestIamPermissions',
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
const methodInfo_Folders_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.cloud.resourcemanager.v2.FoldersClient.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_Folders_TestIamPermissions,
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
proto.google.cloud.resourcemanager.v2.FoldersPromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.resourcemanager.v2.Folders/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_Folders_TestIamPermissions);
};


module.exports = proto.google.cloud.resourcemanager.v2;

