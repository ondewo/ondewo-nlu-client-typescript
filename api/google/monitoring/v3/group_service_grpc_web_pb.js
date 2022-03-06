/**
 * @fileoverview gRPC-Web generated client stub for google.monitoring.v3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_api_monitored_resource_pb = require('../../../google/api/monitored_resource_pb.js')

var google_monitoring_v3_common_pb = require('../../../google/monitoring/v3/common_pb.js')

var google_monitoring_v3_group_pb = require('../../../google/monitoring/v3/group_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.google = {};
proto.google.monitoring = {};
proto.google.monitoring.v3 = require('./group_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.monitoring.v3.GroupServiceClient =
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
proto.google.monitoring.v3.GroupServicePromiseClient =
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
 *   !proto.google.monitoring.v3.ListGroupsRequest,
 *   !proto.google.monitoring.v3.ListGroupsResponse>}
 */
const methodDescriptor_GroupService_ListGroups = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.GroupService/ListGroups',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListGroupsRequest,
  proto.google.monitoring.v3.ListGroupsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListGroupsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListGroupsRequest,
 *   !proto.google.monitoring.v3.ListGroupsResponse>}
 */
const methodInfo_GroupService_ListGroups = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListGroupsResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListGroupsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.GroupServiceClient.prototype.listGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/ListGroups',
      request,
      metadata || {},
      methodDescriptor_GroupService_ListGroups,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListGroupsResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.GroupServicePromiseClient.prototype.listGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/ListGroups',
      request,
      metadata || {},
      methodDescriptor_GroupService_ListGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.GetGroupRequest,
 *   !proto.google.monitoring.v3.Group>}
 */
const methodDescriptor_GroupService_GetGroup = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.GroupService/GetGroup',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.GetGroupRequest,
  google_monitoring_v3_group_pb.Group,
  /**
   * @param {!proto.google.monitoring.v3.GetGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_group_pb.Group.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.GetGroupRequest,
 *   !proto.google.monitoring.v3.Group>}
 */
const methodInfo_GroupService_GetGroup = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_group_pb.Group,
  /**
   * @param {!proto.google.monitoring.v3.GetGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_group_pb.Group.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.GetGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.GroupServiceClient.prototype.getGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/GetGroup',
      request,
      metadata || {},
      methodDescriptor_GroupService_GetGroup,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.GetGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.Group>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.GroupServicePromiseClient.prototype.getGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/GetGroup',
      request,
      metadata || {},
      methodDescriptor_GroupService_GetGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.CreateGroupRequest,
 *   !proto.google.monitoring.v3.Group>}
 */
const methodDescriptor_GroupService_CreateGroup = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.GroupService/CreateGroup',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.CreateGroupRequest,
  google_monitoring_v3_group_pb.Group,
  /**
   * @param {!proto.google.monitoring.v3.CreateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_group_pb.Group.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.CreateGroupRequest,
 *   !proto.google.monitoring.v3.Group>}
 */
const methodInfo_GroupService_CreateGroup = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_group_pb.Group,
  /**
   * @param {!proto.google.monitoring.v3.CreateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_group_pb.Group.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.CreateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.GroupServiceClient.prototype.createGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_GroupService_CreateGroup,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.CreateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.Group>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.GroupServicePromiseClient.prototype.createGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_GroupService_CreateGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.UpdateGroupRequest,
 *   !proto.google.monitoring.v3.Group>}
 */
const methodDescriptor_GroupService_UpdateGroup = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.GroupService/UpdateGroup',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.UpdateGroupRequest,
  google_monitoring_v3_group_pb.Group,
  /**
   * @param {!proto.google.monitoring.v3.UpdateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_group_pb.Group.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.UpdateGroupRequest,
 *   !proto.google.monitoring.v3.Group>}
 */
const methodInfo_GroupService_UpdateGroup = new grpc.web.AbstractClientBase.MethodInfo(
  google_monitoring_v3_group_pb.Group,
  /**
   * @param {!proto.google.monitoring.v3.UpdateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_monitoring_v3_group_pb.Group.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.UpdateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.GroupServiceClient.prototype.updateGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/UpdateGroup',
      request,
      metadata || {},
      methodDescriptor_GroupService_UpdateGroup,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.UpdateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.Group>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.GroupServicePromiseClient.prototype.updateGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/UpdateGroup',
      request,
      metadata || {},
      methodDescriptor_GroupService_UpdateGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.DeleteGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_GroupService_DeleteGroup = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.GroupService/DeleteGroup',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.DeleteGroupRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteGroupRequest} request
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
 *   !proto.google.monitoring.v3.DeleteGroupRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_GroupService_DeleteGroup = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.monitoring.v3.DeleteGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.DeleteGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.GroupServiceClient.prototype.deleteGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/DeleteGroup',
      request,
      metadata || {},
      methodDescriptor_GroupService_DeleteGroup,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.DeleteGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.GroupServicePromiseClient.prototype.deleteGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/DeleteGroup',
      request,
      metadata || {},
      methodDescriptor_GroupService_DeleteGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.monitoring.v3.ListGroupMembersRequest,
 *   !proto.google.monitoring.v3.ListGroupMembersResponse>}
 */
const methodDescriptor_GroupService_ListGroupMembers = new grpc.web.MethodDescriptor(
  '/google.monitoring.v3.GroupService/ListGroupMembers',
  grpc.web.MethodType.UNARY,
  proto.google.monitoring.v3.ListGroupMembersRequest,
  proto.google.monitoring.v3.ListGroupMembersResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListGroupMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListGroupMembersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.monitoring.v3.ListGroupMembersRequest,
 *   !proto.google.monitoring.v3.ListGroupMembersResponse>}
 */
const methodInfo_GroupService_ListGroupMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.monitoring.v3.ListGroupMembersResponse,
  /**
   * @param {!proto.google.monitoring.v3.ListGroupMembersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.monitoring.v3.ListGroupMembersResponse.deserializeBinary
);


/**
 * @param {!proto.google.monitoring.v3.ListGroupMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.monitoring.v3.ListGroupMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.monitoring.v3.ListGroupMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.monitoring.v3.GroupServiceClient.prototype.listGroupMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/ListGroupMembers',
      request,
      metadata || {},
      methodDescriptor_GroupService_ListGroupMembers,
      callback);
};


/**
 * @param {!proto.google.monitoring.v3.ListGroupMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.monitoring.v3.ListGroupMembersResponse>}
 *     Promise that resolves to the response
 */
proto.google.monitoring.v3.GroupServicePromiseClient.prototype.listGroupMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.monitoring.v3.GroupService/ListGroupMembers',
      request,
      metadata || {},
      methodDescriptor_GroupService_ListGroupMembers);
};


module.exports = proto.google.monitoring.v3;

