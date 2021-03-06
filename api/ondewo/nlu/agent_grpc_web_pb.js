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

var google_longrunning_operations_pb = require('../../google/longrunning/operations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')

var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js')

var ondewo_nlu_user_pb = require('../../ondewo/nlu/user_pb.js')

var ondewo_nlu_project_role_pb = require('../../ondewo/nlu/project_role_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./agent_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.AgentsClient =
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
proto.ondewo.nlu.AgentsPromiseClient =
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
 *   !proto.ondewo.nlu.CreateAgentRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodDescriptor_Agents_CreateAgent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/CreateAgent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.CreateAgentRequest,
  proto.ondewo.nlu.Agent,
  /**
   * @param {!proto.ondewo.nlu.CreateAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Agent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.CreateAgentRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodInfo_Agents_CreateAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.Agent,
  /**
   * @param {!proto.ondewo.nlu.CreateAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Agent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.CreateAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.Agent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Agent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.createAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/CreateAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_CreateAgent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.CreateAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Agent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.createAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/CreateAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_CreateAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateAgentRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodDescriptor_Agents_UpdateAgent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/UpdateAgent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.UpdateAgentRequest,
  proto.ondewo.nlu.Agent,
  /**
   * @param {!proto.ondewo.nlu.UpdateAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Agent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.UpdateAgentRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodInfo_Agents_UpdateAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.Agent,
  /**
   * @param {!proto.ondewo.nlu.UpdateAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Agent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.UpdateAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.Agent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Agent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.updateAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/UpdateAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_UpdateAgent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.UpdateAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Agent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.updateAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/UpdateAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_UpdateAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetAgentRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodDescriptor_Agents_GetAgent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/GetAgent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetAgentRequest,
  proto.ondewo.nlu.Agent,
  /**
   * @param {!proto.ondewo.nlu.GetAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Agent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.GetAgentRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodInfo_Agents_GetAgent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.Agent,
  /**
   * @param {!proto.ondewo.nlu.GetAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Agent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.Agent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Agent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/GetAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_GetAgent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Agent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/GetAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_GetAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteAgentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_DeleteAgent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/DeleteAgent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.DeleteAgentRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.DeleteAgentRequest} request
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
 *   !proto.ondewo.nlu.DeleteAgentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Agents_DeleteAgent = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.DeleteAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.DeleteAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.deleteAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/DeleteAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_DeleteAgent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.DeleteAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.deleteAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/DeleteAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_DeleteAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_DeleteAllAgents = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/DeleteAllAgents',
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
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Agents_DeleteAllAgents = new grpc.web.AbstractClientBase.MethodInfo(
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
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.deleteAllAgents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/DeleteAllAgents',
      request,
      metadata || {},
      methodDescriptor_Agents_DeleteAllAgents,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.deleteAllAgents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/DeleteAllAgents',
      request,
      metadata || {},
      methodDescriptor_Agents_DeleteAllAgents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListAgentsRequest,
 *   !proto.ondewo.nlu.ListAgentsResponse>}
 */
const methodDescriptor_Agents_ListAgents = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/ListAgents',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListAgentsRequest,
  proto.ondewo.nlu.ListAgentsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListAgentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListAgentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.ListAgentsRequest,
 *   !proto.ondewo.nlu.ListAgentsResponse>}
 */
const methodInfo_Agents_ListAgents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.ListAgentsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListAgentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListAgentsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.ListAgentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListAgentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listAgents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListAgents',
      request,
      metadata || {},
      methodDescriptor_Agents_ListAgents,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListAgentsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listAgents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListAgents',
      request,
      metadata || {},
      methodDescriptor_Agents_ListAgents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListAgentsRequest,
 *   !proto.ondewo.nlu.ListAgentsOfUserResponse>}
 */
const methodDescriptor_Agents_ListAgentsOfUser = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/ListAgentsOfUser',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListAgentsRequest,
  proto.ondewo.nlu.ListAgentsOfUserResponse,
  /**
   * @param {!proto.ondewo.nlu.ListAgentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListAgentsOfUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.ListAgentsRequest,
 *   !proto.ondewo.nlu.ListAgentsOfUserResponse>}
 */
const methodInfo_Agents_ListAgentsOfUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.ListAgentsOfUserResponse,
  /**
   * @param {!proto.ondewo.nlu.ListAgentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListAgentsOfUserResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.ListAgentsOfUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListAgentsOfUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listAgentsOfUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListAgentsOfUser',
      request,
      metadata || {},
      methodDescriptor_Agents_ListAgentsOfUser,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListAgentsOfUserResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listAgentsOfUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListAgentsOfUser',
      request,
      metadata || {},
      methodDescriptor_Agents_ListAgentsOfUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListAgentsRequest,
 *   !proto.ondewo.nlu.ListAgentsResponse>}
 */
const methodDescriptor_Agents_ListAllAgents = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/ListAllAgents',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListAgentsRequest,
  proto.ondewo.nlu.ListAgentsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListAgentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListAgentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.ListAgentsRequest,
 *   !proto.ondewo.nlu.ListAgentsResponse>}
 */
const methodInfo_Agents_ListAllAgents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.ListAgentsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListAgentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListAgentsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.ListAgentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListAgentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listAllAgents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListAllAgents',
      request,
      metadata || {},
      methodDescriptor_Agents_ListAllAgents,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListAgentsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listAllAgents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListAllAgents',
      request,
      metadata || {},
      methodDescriptor_Agents_ListAllAgents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.AddUserToProjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_AddUserToProject = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/AddUserToProject',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.AddUserToProjectRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.AddUserToProjectRequest} request
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
 *   !proto.ondewo.nlu.AddUserToProjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Agents_AddUserToProject = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.AddUserToProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.AddUserToProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.addUserToProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/AddUserToProject',
      request,
      metadata || {},
      methodDescriptor_Agents_AddUserToProject,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.AddUserToProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.addUserToProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/AddUserToProject',
      request,
      metadata || {},
      methodDescriptor_Agents_AddUserToProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.RemoveUserFromProjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_RemoveUserFromProject = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/RemoveUserFromProject',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.RemoveUserFromProjectRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} request
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
 *   !proto.ondewo.nlu.RemoveUserFromProjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Agents_RemoveUserFromProject = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.removeUserFromProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/RemoveUserFromProject',
      request,
      metadata || {},
      methodDescriptor_Agents_RemoveUserFromProject,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.removeUserFromProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/RemoveUserFromProject',
      request,
      metadata || {},
      methodDescriptor_Agents_RemoveUserFromProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListUsersInProjectRequest,
 *   !proto.ondewo.nlu.ListUsersInProjectResponse>}
 */
const methodDescriptor_Agents_ListUsersInProject = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/ListUsersInProject',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListUsersInProjectRequest,
  proto.ondewo.nlu.ListUsersInProjectResponse,
  /**
   * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListUsersInProjectResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.ListUsersInProjectRequest,
 *   !proto.ondewo.nlu.ListUsersInProjectResponse>}
 */
const methodInfo_Agents_ListUsersInProject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.ListUsersInProjectResponse,
  /**
   * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListUsersInProjectResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.ListUsersInProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListUsersInProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listUsersInProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListUsersInProject',
      request,
      metadata || {},
      methodDescriptor_Agents_ListUsersInProject,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListUsersInProjectResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listUsersInProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListUsersInProject',
      request,
      metadata || {},
      methodDescriptor_Agents_ListUsersInProject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.nlu.GetPlatformInfoResponse>}
 */
const methodDescriptor_Agents_GetPlatformInfo = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/GetPlatformInfo',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.ondewo.nlu.GetPlatformInfoResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetPlatformInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.nlu.GetPlatformInfoResponse>}
 */
const methodInfo_Agents_GetPlatformInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.GetPlatformInfoResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetPlatformInfoResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.GetPlatformInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetPlatformInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getPlatformInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/GetPlatformInfo',
      request,
      metadata || {},
      methodDescriptor_Agents_GetPlatformInfo,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetPlatformInfoResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getPlatformInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/GetPlatformInfo',
      request,
      metadata || {},
      methodDescriptor_Agents_GetPlatformInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListProjectPermissionsRequest,
 *   !proto.ondewo.nlu.ListProjectPermissionsResponse>}
 */
const methodDescriptor_Agents_ListProjectPermissions = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/ListProjectPermissions',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListProjectPermissionsRequest,
  proto.ondewo.nlu.ListProjectPermissionsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListProjectPermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.ListProjectPermissionsRequest,
 *   !proto.ondewo.nlu.ListProjectPermissionsResponse>}
 */
const methodInfo_Agents_ListProjectPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.ListProjectPermissionsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListProjectPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.ListProjectPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListProjectPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listProjectPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListProjectPermissions',
      request,
      metadata || {},
      methodDescriptor_Agents_ListProjectPermissions,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListProjectPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listProjectPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/ListProjectPermissions',
      request,
      metadata || {},
      methodDescriptor_Agents_ListProjectPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.TrainAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_TrainAgent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/TrainAgent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.TrainAgentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.TrainAgentRequest} request
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
 *   !proto.ondewo.nlu.TrainAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_TrainAgent = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.TrainAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.TrainAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.trainAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/TrainAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_TrainAgent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.TrainAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.trainAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/TrainAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_TrainAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BuildCacheRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_BuildCache = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/BuildCache',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BuildCacheRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.BuildCacheRequest} request
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
 *   !proto.ondewo.nlu.BuildCacheRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_BuildCache = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.BuildCacheRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BuildCacheRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.buildCache =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/BuildCache',
      request,
      metadata || {},
      methodDescriptor_Agents_BuildCache,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BuildCacheRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.buildCache =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/BuildCache',
      request,
      metadata || {},
      methodDescriptor_Agents_BuildCache);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ExportAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_ExportAgent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/ExportAgent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ExportAgentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.ExportAgentRequest} request
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
 *   !proto.ondewo.nlu.ExportAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_ExportAgent = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.ExportAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ExportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.exportAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/ExportAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_ExportAgent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ExportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.exportAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/ExportAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_ExportAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ImportAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_ImportAgent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/ImportAgent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ImportAgentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.ImportAgentRequest} request
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
 *   !proto.ondewo.nlu.ImportAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_ImportAgent = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.ImportAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ImportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.importAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/ImportAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_ImportAgent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ImportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.importAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/ImportAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_ImportAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.OptimizeRankingMatchRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_OptimizeRankingMatch = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/OptimizeRankingMatch',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.OptimizeRankingMatchRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} request
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
 *   !proto.ondewo.nlu.OptimizeRankingMatchRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_OptimizeRankingMatch = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.optimizeRankingMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/OptimizeRankingMatch',
      request,
      metadata || {},
      methodDescriptor_Agents_OptimizeRankingMatch,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.optimizeRankingMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/OptimizeRankingMatch',
      request,
      metadata || {},
      methodDescriptor_Agents_OptimizeRankingMatch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.RestoreAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodDescriptor_Agents_RestoreAgent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/RestoreAgent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.RestoreAgentRequest,
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.RestoreAgentRequest} request
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
 *   !proto.ondewo.nlu.RestoreAgentRequest,
 *   !proto.google.longrunning.Operation>}
 */
const methodInfo_Agents_RestoreAgent = new grpc.web.AbstractClientBase.MethodInfo(
  google_longrunning_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.RestoreAgentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_longrunning_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.RestoreAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.longrunning.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.longrunning.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.restoreAgent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/RestoreAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_RestoreAgent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.RestoreAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.longrunning.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.restoreAgent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/RestoreAgent',
      request,
      metadata || {},
      methodDescriptor_Agents_RestoreAgent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetAgentStatisticsRequest,
 *   !proto.ondewo.nlu.GetAgentStatisticsResponse>}
 */
const methodDescriptor_Agents_GetAgentStatistics = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/GetAgentStatistics',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetAgentStatisticsRequest,
  proto.ondewo.nlu.GetAgentStatisticsResponse,
  /**
   * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetAgentStatisticsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.GetAgentStatisticsRequest,
 *   !proto.ondewo.nlu.GetAgentStatisticsResponse>}
 */
const methodInfo_Agents_GetAgentStatistics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.GetAgentStatisticsResponse,
  /**
   * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetAgentStatisticsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.GetAgentStatisticsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetAgentStatisticsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getAgentStatistics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/GetAgentStatistics',
      request,
      metadata || {},
      methodDescriptor_Agents_GetAgentStatistics,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetAgentStatisticsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getAgentStatistics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/GetAgentStatistics',
      request,
      metadata || {},
      methodDescriptor_Agents_GetAgentStatistics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.SetAgentStatusRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodDescriptor_Agents_SetAgentStatus = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/SetAgentStatus',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.SetAgentStatusRequest,
  proto.ondewo.nlu.Agent,
  /**
   * @param {!proto.ondewo.nlu.SetAgentStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Agent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.SetAgentStatusRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodInfo_Agents_SetAgentStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.Agent,
  /**
   * @param {!proto.ondewo.nlu.SetAgentStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Agent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.SetAgentStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.Agent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Agent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.setAgentStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/SetAgentStatus',
      request,
      metadata || {},
      methodDescriptor_Agents_SetAgentStatus,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.SetAgentStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Agent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.setAgentStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/SetAgentStatus',
      request,
      metadata || {},
      methodDescriptor_Agents_SetAgentStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.SetResourcesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_SetResources = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/SetResources',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.SetResourcesRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.SetResourcesRequest} request
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
 *   !proto.ondewo.nlu.SetResourcesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Agents_SetResources = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.SetResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.SetResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.setResources =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/SetResources',
      request,
      metadata || {},
      methodDescriptor_Agents_SetResources,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.SetResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.setResources =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/SetResources',
      request,
      metadata || {},
      methodDescriptor_Agents_SetResources);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteResourcesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_DeleteResources = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/DeleteResources',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.DeleteResourcesRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.DeleteResourcesRequest} request
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
 *   !proto.ondewo.nlu.DeleteResourcesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Agents_DeleteResources = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.DeleteResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.DeleteResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.deleteResources =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/DeleteResources',
      request,
      metadata || {},
      methodDescriptor_Agents_DeleteResources,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.DeleteResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.deleteResources =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/DeleteResources',
      request,
      metadata || {},
      methodDescriptor_Agents_DeleteResources);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ExportResourcesRequest,
 *   !proto.ondewo.nlu.ExportResourcesResponse>}
 */
const methodDescriptor_Agents_ExportResources = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Agents/ExportResources',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ExportResourcesRequest,
  proto.ondewo.nlu.ExportResourcesResponse,
  /**
   * @param {!proto.ondewo.nlu.ExportResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ExportResourcesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.ExportResourcesRequest,
 *   !proto.ondewo.nlu.ExportResourcesResponse>}
 */
const methodInfo_Agents_ExportResources = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.ExportResourcesResponse,
  /**
   * @param {!proto.ondewo.nlu.ExportResourcesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ExportResourcesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ExportResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.ExportResourcesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ExportResourcesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.exportResources =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Agents/ExportResources',
      request,
      metadata || {},
      methodDescriptor_Agents_ExportResources,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ExportResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ExportResourcesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.exportResources =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Agents/ExportResources',
      request,
      metadata || {},
      methodDescriptor_Agents_ExportResources);
};


module.exports = proto.ondewo.nlu;

