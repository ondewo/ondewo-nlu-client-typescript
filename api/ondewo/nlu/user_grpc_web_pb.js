/**
 * @fileoverview gRPC-Web generated client stub for ondewo.nlu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var ondewo_nlu_project_role_pb = require('../../ondewo/nlu/project_role_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.UsersClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.UsersPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
 *   !proto.ondewo.nlu.CreateUserRequest,
 *   !proto.ondewo.nlu.User>}
 */
const methodDescriptor_Users_CreateUser = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.CreateUserRequest,
  proto.ondewo.nlu.User,
  /**
   * @param {!proto.ondewo.nlu.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.User.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/CreateUser',
      request,
      metadata || {},
      methodDescriptor_Users_CreateUser,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.User>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/CreateUser',
      request,
      metadata || {},
      methodDescriptor_Users_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetUserRequest,
 *   !proto.ondewo.nlu.User>}
 */
const methodDescriptor_Users_GetUser = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/GetUser',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetUserRequest,
  proto.ondewo.nlu.User,
  /**
   * @param {!proto.ondewo.nlu.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.User.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/GetUser',
      request,
      metadata || {},
      methodDescriptor_Users_GetUser,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.User>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/GetUser',
      request,
      metadata || {},
      methodDescriptor_Users_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetUserRequest,
 *   !proto.ondewo.nlu.UserInfo>}
 */
const methodDescriptor_Users_GetUserInfo = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/GetUserInfo',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetUserRequest,
  proto.ondewo.nlu.UserInfo,
  /**
   * @param {!proto.ondewo.nlu.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.UserInfo.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.UserInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.UserInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.getUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/GetUserInfo',
      request,
      metadata || {},
      methodDescriptor_Users_GetUserInfo,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.UserInfo>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.getUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/GetUserInfo',
      request,
      metadata || {},
      methodDescriptor_Users_GetUserInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Users_DeleteUser = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/DeleteUser',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_Users_DeleteUser,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_Users_DeleteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateUserRequest,
 *   !proto.ondewo.nlu.User>}
 */
const methodDescriptor_Users_UpdateUser = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/UpdateUser',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.UpdateUserRequest,
  proto.ondewo.nlu.User,
  /**
   * @param {!proto.ondewo.nlu.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.User.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_Users_UpdateUser,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.User>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_Users_UpdateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListUsersRequest,
 *   !proto.ondewo.nlu.ListUsersResponse>}
 */
const methodDescriptor_Users_ListUsers = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/ListUsers',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListUsersRequest,
  proto.ondewo.nlu.ListUsersResponse,
  /**
   * @param {!proto.ondewo.nlu.ListUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListUsersResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.listUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/ListUsers',
      request,
      metadata || {},
      methodDescriptor_Users_ListUsers,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListUsersResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.listUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/ListUsers',
      request,
      metadata || {},
      methodDescriptor_Users_ListUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListUsersRequest,
 *   !proto.ondewo.nlu.ListUserInfosResponse>}
 */
const methodDescriptor_Users_ListUserInfos = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/ListUserInfos',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListUsersRequest,
  proto.ondewo.nlu.ListUserInfosResponse,
  /**
   * @param {!proto.ondewo.nlu.ListUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListUserInfosResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListUserInfosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListUserInfosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.listUserInfos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/ListUserInfos',
      request,
      metadata || {},
      methodDescriptor_Users_ListUserInfos,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListUserInfosResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.listUserInfos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/ListUserInfos',
      request,
      metadata || {},
      methodDescriptor_Users_ListUserInfos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CreateServerRoleRequest,
 *   !proto.ondewo.nlu.ServerRole>}
 */
const methodDescriptor_Users_CreateServerRole = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/CreateServerRole',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.CreateServerRoleRequest,
  proto.ondewo.nlu.ServerRole,
  /**
   * @param {!proto.ondewo.nlu.CreateServerRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ServerRole.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.CreateServerRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ServerRole)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ServerRole>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.createServerRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/CreateServerRole',
      request,
      metadata || {},
      methodDescriptor_Users_CreateServerRole,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.CreateServerRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ServerRole>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.createServerRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/CreateServerRole',
      request,
      metadata || {},
      methodDescriptor_Users_CreateServerRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetServerRoleRequest,
 *   !proto.ondewo.nlu.ServerRole>}
 */
const methodDescriptor_Users_GetServerRole = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/GetServerRole',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetServerRoleRequest,
  proto.ondewo.nlu.ServerRole,
  /**
   * @param {!proto.ondewo.nlu.GetServerRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ServerRole.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetServerRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ServerRole)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ServerRole>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.getServerRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/GetServerRole',
      request,
      metadata || {},
      methodDescriptor_Users_GetServerRole,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetServerRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ServerRole>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.getServerRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/GetServerRole',
      request,
      metadata || {},
      methodDescriptor_Users_GetServerRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteServerRoleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Users_DeleteServerRole = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/DeleteServerRole',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.DeleteServerRoleRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.DeleteServerRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.DeleteServerRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.deleteServerRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/DeleteServerRole',
      request,
      metadata || {},
      methodDescriptor_Users_DeleteServerRole,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.DeleteServerRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.deleteServerRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/DeleteServerRole',
      request,
      metadata || {},
      methodDescriptor_Users_DeleteServerRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateServerRoleRequest,
 *   !proto.ondewo.nlu.ServerRole>}
 */
const methodDescriptor_Users_UpdateServerRole = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/UpdateServerRole',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.UpdateServerRoleRequest,
  proto.ondewo.nlu.ServerRole,
  /**
   * @param {!proto.ondewo.nlu.UpdateServerRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ServerRole.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.UpdateServerRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ServerRole)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ServerRole>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.updateServerRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/UpdateServerRole',
      request,
      metadata || {},
      methodDescriptor_Users_UpdateServerRole,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.UpdateServerRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ServerRole>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.updateServerRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/UpdateServerRole',
      request,
      metadata || {},
      methodDescriptor_Users_UpdateServerRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListServerRolesRequest,
 *   !proto.ondewo.nlu.ListServerRolesResponse>}
 */
const methodDescriptor_Users_ListServerRoles = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/ListServerRoles',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListServerRolesRequest,
  proto.ondewo.nlu.ListServerRolesResponse,
  /**
   * @param {!proto.ondewo.nlu.ListServerRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListServerRolesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListServerRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListServerRolesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListServerRolesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.listServerRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/ListServerRoles',
      request,
      metadata || {},
      methodDescriptor_Users_ListServerRoles,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListServerRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListServerRolesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.listServerRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/ListServerRoles',
      request,
      metadata || {},
      methodDescriptor_Users_ListServerRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListServerPermissionsRequest,
 *   !proto.ondewo.nlu.ListServerPermissionsResponse>}
 */
const methodDescriptor_Users_ListServerPermissions = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/ListServerPermissions',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListServerPermissionsRequest,
  proto.ondewo.nlu.ListServerPermissionsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListServerPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListServerPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListServerPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListServerPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListServerPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.listServerPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/ListServerPermissions',
      request,
      metadata || {},
      methodDescriptor_Users_ListServerPermissions,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListServerPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListServerPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.listServerPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/ListServerPermissions',
      request,
      metadata || {},
      methodDescriptor_Users_ListServerPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.LoginRequest,
 *   !proto.ondewo.nlu.LoginResponse>}
 */
const methodDescriptor_Users_Login = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/Login',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.LoginRequest,
  proto.ondewo.nlu.LoginResponse,
  /**
   * @param {!proto.ondewo.nlu.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/Login',
      request,
      metadata || {},
      methodDescriptor_Users_Login,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/Login',
      request,
      metadata || {},
      methodDescriptor_Users_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Users_CheckLogin = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Users/CheckLogin',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UsersClient.prototype.checkLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Users/CheckLogin',
      request,
      metadata || {},
      methodDescriptor_Users_CheckLogin,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UsersPromiseClient.prototype.checkLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Users/CheckLogin',
      request,
      metadata || {},
      methodDescriptor_Users_CheckLogin);
};


module.exports = proto.ondewo.nlu;

