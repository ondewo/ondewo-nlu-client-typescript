/**
 * @fileoverview gRPC-Web generated client stub for google.cloud.tasks.v2beta3
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js')

var google_cloud_tasks_v2beta3_queue_pb = require('../../../../google/cloud/tasks/v2beta3/queue_pb.js')

var google_cloud_tasks_v2beta3_task_pb = require('../../../../google/cloud/tasks/v2beta3/task_pb.js')

var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js')

var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_rpc_code_pb = require('../../../../google/rpc/code_pb.js')
const proto = {};
proto.google = {};
proto.google.cloud = {};
proto.google.cloud.tasks = {};
proto.google.cloud.tasks.v2beta3 = require('./cloudtasks_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient =
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
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient =
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
 *   !proto.google.cloud.tasks.v2beta3.ListQueuesRequest,
 *   !proto.google.cloud.tasks.v2beta3.ListQueuesResponse>}
 */
const methodDescriptor_CloudTasks_ListQueues = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/ListQueues',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.ListQueuesRequest,
  proto.google.cloud.tasks.v2beta3.ListQueuesResponse,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.ListQueuesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.tasks.v2beta3.ListQueuesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.ListQueuesRequest,
 *   !proto.google.cloud.tasks.v2beta3.ListQueuesResponse>}
 */
const methodInfo_CloudTasks_ListQueues = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.tasks.v2beta3.ListQueuesResponse,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.ListQueuesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.tasks.v2beta3.ListQueuesResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.ListQueuesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.ListQueuesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.ListQueuesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.listQueues =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/ListQueues',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_ListQueues,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.ListQueuesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.ListQueuesResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.listQueues =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/ListQueues',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_ListQueues);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.GetQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodDescriptor_CloudTasks_GetQueue = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/GetQueue',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.GetQueueRequest,
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.GetQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.GetQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodInfo_CloudTasks_GetQueue = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.GetQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.GetQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.Queue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.Queue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.getQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/GetQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_GetQueue,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.GetQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.Queue>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.getQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/GetQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_GetQueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.CreateQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodDescriptor_CloudTasks_CreateQueue = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/CreateQueue',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.CreateQueueRequest,
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.CreateQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.CreateQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodInfo_CloudTasks_CreateQueue = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.CreateQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.CreateQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.Queue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.Queue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.createQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/CreateQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_CreateQueue,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.CreateQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.Queue>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.createQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/CreateQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_CreateQueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.UpdateQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodDescriptor_CloudTasks_UpdateQueue = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/UpdateQueue',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.UpdateQueueRequest,
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.UpdateQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.UpdateQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodInfo_CloudTasks_UpdateQueue = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.UpdateQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.UpdateQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.Queue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.Queue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.updateQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/UpdateQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_UpdateQueue,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.UpdateQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.Queue>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.updateQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/UpdateQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_UpdateQueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.DeleteQueueRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CloudTasks_DeleteQueue = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/DeleteQueue',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.DeleteQueueRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.DeleteQueueRequest} request
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
 *   !proto.google.cloud.tasks.v2beta3.DeleteQueueRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CloudTasks_DeleteQueue = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.DeleteQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.DeleteQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.deleteQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/DeleteQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_DeleteQueue,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.DeleteQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.deleteQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/DeleteQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_DeleteQueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.PurgeQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodDescriptor_CloudTasks_PurgeQueue = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/PurgeQueue',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.PurgeQueueRequest,
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.PurgeQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.PurgeQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodInfo_CloudTasks_PurgeQueue = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.PurgeQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.PurgeQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.Queue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.Queue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.purgeQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/PurgeQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_PurgeQueue,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.PurgeQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.Queue>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.purgeQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/PurgeQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_PurgeQueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.PauseQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodDescriptor_CloudTasks_PauseQueue = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/PauseQueue',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.PauseQueueRequest,
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.PauseQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.PauseQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodInfo_CloudTasks_PauseQueue = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.PauseQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.PauseQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.Queue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.Queue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.pauseQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/PauseQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_PauseQueue,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.PauseQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.Queue>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.pauseQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/PauseQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_PauseQueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.ResumeQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodDescriptor_CloudTasks_ResumeQueue = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/ResumeQueue',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.ResumeQueueRequest,
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.ResumeQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.ResumeQueueRequest,
 *   !proto.google.cloud.tasks.v2beta3.Queue>}
 */
const methodInfo_CloudTasks_ResumeQueue = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_tasks_v2beta3_queue_pb.Queue,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.ResumeQueueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_queue_pb.Queue.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.ResumeQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.Queue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.Queue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.resumeQueue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/ResumeQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_ResumeQueue,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.ResumeQueueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.Queue>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.resumeQueue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/ResumeQueue',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_ResumeQueue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.GetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_CloudTasks_GetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/GetIamPolicy',
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
const methodInfo_CloudTasks_GetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.getIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_GetIamPolicy,
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
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.getIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/GetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_GetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.SetIamPolicyRequest,
 *   !proto.google.iam.v1.Policy>}
 */
const methodDescriptor_CloudTasks_SetIamPolicy = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/SetIamPolicy',
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
const methodInfo_CloudTasks_SetIamPolicy = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.setIamPolicy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_SetIamPolicy,
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
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.setIamPolicy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/SetIamPolicy',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_SetIamPolicy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.iam.v1.TestIamPermissionsRequest,
 *   !proto.google.iam.v1.TestIamPermissionsResponse>}
 */
const methodDescriptor_CloudTasks_TestIamPermissions = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/TestIamPermissions',
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
const methodInfo_CloudTasks_TestIamPermissions = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.testIamPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_TestIamPermissions,
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
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.testIamPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/TestIamPermissions',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_TestIamPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.ListTasksRequest,
 *   !proto.google.cloud.tasks.v2beta3.ListTasksResponse>}
 */
const methodDescriptor_CloudTasks_ListTasks = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/ListTasks',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.ListTasksRequest,
  proto.google.cloud.tasks.v2beta3.ListTasksResponse,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.ListTasksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.tasks.v2beta3.ListTasksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.ListTasksRequest,
 *   !proto.google.cloud.tasks.v2beta3.ListTasksResponse>}
 */
const methodInfo_CloudTasks_ListTasks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.google.cloud.tasks.v2beta3.ListTasksResponse,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.ListTasksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.google.cloud.tasks.v2beta3.ListTasksResponse.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.ListTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.ListTasksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.ListTasksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.listTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/ListTasks',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_ListTasks,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.ListTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.ListTasksResponse>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.listTasks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/ListTasks',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_ListTasks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.GetTaskRequest,
 *   !proto.google.cloud.tasks.v2beta3.Task>}
 */
const methodDescriptor_CloudTasks_GetTask = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/GetTask',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.GetTaskRequest,
  google_cloud_tasks_v2beta3_task_pb.Task,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.GetTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_task_pb.Task.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.GetTaskRequest,
 *   !proto.google.cloud.tasks.v2beta3.Task>}
 */
const methodInfo_CloudTasks_GetTask = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_tasks_v2beta3_task_pb.Task,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.GetTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_task_pb.Task.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.getTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/GetTask',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_GetTask,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.GetTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.Task>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.getTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/GetTask',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_GetTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.CreateTaskRequest,
 *   !proto.google.cloud.tasks.v2beta3.Task>}
 */
const methodDescriptor_CloudTasks_CreateTask = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/CreateTask',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.CreateTaskRequest,
  google_cloud_tasks_v2beta3_task_pb.Task,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.CreateTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_task_pb.Task.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.CreateTaskRequest,
 *   !proto.google.cloud.tasks.v2beta3.Task>}
 */
const methodInfo_CloudTasks_CreateTask = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_tasks_v2beta3_task_pb.Task,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.CreateTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_task_pb.Task.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.CreateTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.createTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/CreateTask',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_CreateTask,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.CreateTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.Task>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.createTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/CreateTask',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_CreateTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.DeleteTaskRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CloudTasks_DeleteTask = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/DeleteTask',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.DeleteTaskRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.DeleteTaskRequest} request
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
 *   !proto.google.cloud.tasks.v2beta3.DeleteTaskRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_CloudTasks_DeleteTask = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.DeleteTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.deleteTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/DeleteTask',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_DeleteTask,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.deleteTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/DeleteTask',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_DeleteTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.cloud.tasks.v2beta3.RunTaskRequest,
 *   !proto.google.cloud.tasks.v2beta3.Task>}
 */
const methodDescriptor_CloudTasks_RunTask = new grpc.web.MethodDescriptor(
  '/google.cloud.tasks.v2beta3.CloudTasks/RunTask',
  grpc.web.MethodType.UNARY,
  proto.google.cloud.tasks.v2beta3.RunTaskRequest,
  google_cloud_tasks_v2beta3_task_pb.Task,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.RunTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_task_pb.Task.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.cloud.tasks.v2beta3.RunTaskRequest,
 *   !proto.google.cloud.tasks.v2beta3.Task>}
 */
const methodInfo_CloudTasks_RunTask = new grpc.web.AbstractClientBase.MethodInfo(
  google_cloud_tasks_v2beta3_task_pb.Task,
  /**
   * @param {!proto.google.cloud.tasks.v2beta3.RunTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_cloud_tasks_v2beta3_task_pb.Task.deserializeBinary
);


/**
 * @param {!proto.google.cloud.tasks.v2beta3.RunTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.cloud.tasks.v2beta3.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.cloud.tasks.v2beta3.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.google.cloud.tasks.v2beta3.CloudTasksClient.prototype.runTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/RunTask',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_RunTask,
      callback);
};


/**
 * @param {!proto.google.cloud.tasks.v2beta3.RunTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.cloud.tasks.v2beta3.Task>}
 *     Promise that resolves to the response
 */
proto.google.cloud.tasks.v2beta3.CloudTasksPromiseClient.prototype.runTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/google.cloud.tasks.v2beta3.CloudTasks/RunTask',
      request,
      metadata || {},
      methodDescriptor_CloudTasks_RunTask);
};


module.exports = proto.google.cloud.tasks.v2beta3;

