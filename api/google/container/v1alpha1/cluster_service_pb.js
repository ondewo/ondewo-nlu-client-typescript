// source: google/container/v1alpha1/cluster_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.google.container.v1alpha1.AcceleratorConfig', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.AddonsConfig', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.AutoUpgradeOptions', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.CancelOperationRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.ClientCertificateConfig', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.Cluster', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.Cluster.Status', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.ClusterUpdate', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.CompleteIPRotationRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.CreateClusterRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.CreateNodePoolRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.DailyMaintenanceWindow', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.DeleteClusterRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.DeleteNodePoolRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.GetClusterRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.GetNodePoolRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.GetOperationRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.GetServerConfigRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.HorizontalPodAutoscaling', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.HttpLoadBalancing', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.IPAllocationPolicy', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.KubernetesDashboard', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.ListClustersRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.ListClustersResponse', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.ListNodePoolsRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.ListNodePoolsResponse', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.ListOperationsRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.ListOperationsResponse', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.MaintenancePolicy', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.MaintenanceWindow', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.MaintenanceWindow.PolicyCase', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.MasterAuth', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NetworkPolicy', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NetworkPolicy.Provider', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NetworkPolicyConfig', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NodeConfig', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NodeManagement', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NodePool', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NodePool.Status', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NodePoolAutoscaling', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NodeTaint', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.NodeTaint.Effect', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.Operation', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.Operation.Status', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.Operation.Type', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.PodSecurityPolicyConfig', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.ServerConfig', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetAddonsConfigRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetLabelsRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetLegacyAbacRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetLocationsRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetLoggingServiceRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetMaintenancePolicyRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetMasterAuthRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetMasterAuthRequest.Action', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetMonitoringServiceRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetNetworkPolicyRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetNodePoolManagementRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.SetNodePoolSizeRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.StartIPRotationRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.UpdateClusterRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.UpdateMasterRequest', null, global);
goog.exportSymbol('proto.google.container.v1alpha1.UpdateNodePoolRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.NodeConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.NodeConfig.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.NodeConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.NodeConfig.displayName = 'proto.google.container.v1alpha1.NodeConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.NodeTaint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.NodeTaint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.NodeTaint.displayName = 'proto.google.container.v1alpha1.NodeTaint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.MasterAuth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.MasterAuth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.MasterAuth.displayName = 'proto.google.container.v1alpha1.MasterAuth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.ClientCertificateConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.ClientCertificateConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.ClientCertificateConfig.displayName = 'proto.google.container.v1alpha1.ClientCertificateConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.AddonsConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.AddonsConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.AddonsConfig.displayName = 'proto.google.container.v1alpha1.AddonsConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.HttpLoadBalancing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.HttpLoadBalancing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.HttpLoadBalancing.displayName = 'proto.google.container.v1alpha1.HttpLoadBalancing';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.HorizontalPodAutoscaling = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.HorizontalPodAutoscaling, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.HorizontalPodAutoscaling.displayName = 'proto.google.container.v1alpha1.HorizontalPodAutoscaling';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.KubernetesDashboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.KubernetesDashboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.KubernetesDashboard.displayName = 'proto.google.container.v1alpha1.KubernetesDashboard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.NetworkPolicyConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.NetworkPolicyConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.NetworkPolicyConfig.displayName = 'proto.google.container.v1alpha1.NetworkPolicyConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.displayName = 'proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.displayName = 'proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.NetworkPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.NetworkPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.NetworkPolicy.displayName = 'proto.google.container.v1alpha1.NetworkPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.IPAllocationPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.IPAllocationPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.IPAllocationPolicy.displayName = 'proto.google.container.v1alpha1.IPAllocationPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.PodSecurityPolicyConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.PodSecurityPolicyConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.PodSecurityPolicyConfig.displayName = 'proto.google.container.v1alpha1.PodSecurityPolicyConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.Cluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.Cluster.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.Cluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.Cluster.displayName = 'proto.google.container.v1alpha1.Cluster';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.ClusterUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.ClusterUpdate.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.ClusterUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.ClusterUpdate.displayName = 'proto.google.container.v1alpha1.ClusterUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.Operation.displayName = 'proto.google.container.v1alpha1.Operation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.CreateClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.CreateClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.CreateClusterRequest.displayName = 'proto.google.container.v1alpha1.CreateClusterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.GetClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.GetClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.GetClusterRequest.displayName = 'proto.google.container.v1alpha1.GetClusterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.UpdateClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.UpdateClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.UpdateClusterRequest.displayName = 'proto.google.container.v1alpha1.UpdateClusterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.UpdateNodePoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.UpdateNodePoolRequest.displayName = 'proto.google.container.v1alpha1.UpdateNodePoolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.displayName = 'proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetLoggingServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetLoggingServiceRequest.displayName = 'proto.google.container.v1alpha1.SetLoggingServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetMonitoringServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetMonitoringServiceRequest.displayName = 'proto.google.container.v1alpha1.SetMonitoringServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetAddonsConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetAddonsConfigRequest.displayName = 'proto.google.container.v1alpha1.SetAddonsConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetLocationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.SetLocationsRequest.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.SetLocationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetLocationsRequest.displayName = 'proto.google.container.v1alpha1.SetLocationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.UpdateMasterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.UpdateMasterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.UpdateMasterRequest.displayName = 'proto.google.container.v1alpha1.UpdateMasterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetMasterAuthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetMasterAuthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetMasterAuthRequest.displayName = 'proto.google.container.v1alpha1.SetMasterAuthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.DeleteClusterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.DeleteClusterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.DeleteClusterRequest.displayName = 'proto.google.container.v1alpha1.DeleteClusterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.ListClustersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.ListClustersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.ListClustersRequest.displayName = 'proto.google.container.v1alpha1.ListClustersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.ListClustersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.ListClustersResponse.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.ListClustersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.ListClustersResponse.displayName = 'proto.google.container.v1alpha1.ListClustersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.GetOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.GetOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.GetOperationRequest.displayName = 'proto.google.container.v1alpha1.GetOperationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.ListOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.ListOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.ListOperationsRequest.displayName = 'proto.google.container.v1alpha1.ListOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.CancelOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.CancelOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.CancelOperationRequest.displayName = 'proto.google.container.v1alpha1.CancelOperationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.ListOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.ListOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.ListOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.ListOperationsResponse.displayName = 'proto.google.container.v1alpha1.ListOperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.GetServerConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.GetServerConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.GetServerConfigRequest.displayName = 'proto.google.container.v1alpha1.GetServerConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.ServerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.ServerConfig.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.ServerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.ServerConfig.displayName = 'proto.google.container.v1alpha1.ServerConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.CreateNodePoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.CreateNodePoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.CreateNodePoolRequest.displayName = 'proto.google.container.v1alpha1.CreateNodePoolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.DeleteNodePoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.DeleteNodePoolRequest.displayName = 'proto.google.container.v1alpha1.DeleteNodePoolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.ListNodePoolsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.ListNodePoolsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.ListNodePoolsRequest.displayName = 'proto.google.container.v1alpha1.ListNodePoolsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.GetNodePoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.GetNodePoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.GetNodePoolRequest.displayName = 'proto.google.container.v1alpha1.GetNodePoolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.NodePool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.NodePool.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.NodePool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.NodePool.displayName = 'proto.google.container.v1alpha1.NodePool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.NodeManagement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.NodeManagement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.NodeManagement.displayName = 'proto.google.container.v1alpha1.NodeManagement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.AutoUpgradeOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.AutoUpgradeOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.AutoUpgradeOptions.displayName = 'proto.google.container.v1alpha1.AutoUpgradeOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.MaintenancePolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.MaintenancePolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.MaintenancePolicy.displayName = 'proto.google.container.v1alpha1.MaintenancePolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.MaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.container.v1alpha1.MaintenanceWindow.oneofGroups_);
};
goog.inherits(proto.google.container.v1alpha1.MaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.MaintenanceWindow.displayName = 'proto.google.container.v1alpha1.MaintenanceWindow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.DailyMaintenanceWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.DailyMaintenanceWindow.displayName = 'proto.google.container.v1alpha1.DailyMaintenanceWindow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetNodePoolManagementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetNodePoolManagementRequest.displayName = 'proto.google.container.v1alpha1.SetNodePoolManagementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetNodePoolSizeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetNodePoolSizeRequest.displayName = 'proto.google.container.v1alpha1.SetNodePoolSizeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.displayName = 'proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.ListNodePoolsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.container.v1alpha1.ListNodePoolsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.container.v1alpha1.ListNodePoolsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.ListNodePoolsResponse.displayName = 'proto.google.container.v1alpha1.ListNodePoolsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.NodePoolAutoscaling = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.NodePoolAutoscaling, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.NodePoolAutoscaling.displayName = 'proto.google.container.v1alpha1.NodePoolAutoscaling';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetLabelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetLabelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetLabelsRequest.displayName = 'proto.google.container.v1alpha1.SetLabelsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetLegacyAbacRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetLegacyAbacRequest.displayName = 'proto.google.container.v1alpha1.SetLegacyAbacRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.StartIPRotationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.StartIPRotationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.StartIPRotationRequest.displayName = 'proto.google.container.v1alpha1.StartIPRotationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.CompleteIPRotationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.CompleteIPRotationRequest.displayName = 'proto.google.container.v1alpha1.CompleteIPRotationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.AcceleratorConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.AcceleratorConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.AcceleratorConfig.displayName = 'proto.google.container.v1alpha1.AcceleratorConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetNetworkPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetNetworkPolicyRequest.displayName = 'proto.google.container.v1alpha1.SetNetworkPolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.container.v1alpha1.SetMaintenancePolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.container.v1alpha1.SetMaintenancePolicyRequest.displayName = 'proto.google.container.v1alpha1.SetMaintenancePolicyRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.NodeConfig.repeatedFields_ = [3,8,11,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.NodeConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.NodeConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodeConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    machineType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    diskSizeGb: jspb.Message.getFieldWithDefault(msg, 2, 0),
    oauthScopesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    serviceAccount: jspb.Message.getFieldWithDefault(msg, 9, ""),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    imageType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    localSsdCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    preemptible: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    acceleratorsList: jspb.Message.toObjectList(msg.getAcceleratorsList(),
    proto.google.container.v1alpha1.AcceleratorConfig.toObject, includeInstance),
    minCpuPlatform: jspb.Message.getFieldWithDefault(msg, 13, ""),
    taintsList: jspb.Message.toObjectList(msg.getTaintsList(),
    proto.google.container.v1alpha1.NodeTaint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.NodeConfig}
 */
proto.google.container.v1alpha1.NodeConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.NodeConfig;
  return proto.google.container.v1alpha1.NodeConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.NodeConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.NodeConfig}
 */
proto.google.container.v1alpha1.NodeConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMachineType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDiskSizeGb(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addOauthScopes(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccount(value);
      break;
    case 4:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageType(value);
      break;
    case 6:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLocalSsdCount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreemptible(value);
      break;
    case 11:
      var value = new proto.google.container.v1alpha1.AcceleratorConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.AcceleratorConfig.deserializeBinaryFromReader);
      msg.addAccelerators(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinCpuPlatform(value);
      break;
    case 15:
      var value = new proto.google.container.v1alpha1.NodeTaint;
      reader.readMessage(value,proto.google.container.v1alpha1.NodeTaint.deserializeBinaryFromReader);
      msg.addTaints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.NodeConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.NodeConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodeConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMachineType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDiskSizeGb();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOauthScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getServiceAccount();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getImageType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getLocalSsdCount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getPreemptible();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getAcceleratorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.google.container.v1alpha1.AcceleratorConfig.serializeBinaryToWriter
    );
  }
  f = message.getMinCpuPlatform();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getTaintsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.google.container.v1alpha1.NodeTaint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string machine_type = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getMachineType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.setMachineType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 disk_size_gb = 2;
 * @return {number}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getDiskSizeGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.setDiskSizeGb = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string oauth_scopes = 3;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getOauthScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.setOauthScopesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.addOauthScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.clearOauthScopesList = function() {
  return this.setOauthScopesList([]);
};


/**
 * optional string service_account = 9;
 * @return {string}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getServiceAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.setServiceAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * map<string, string> metadata = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};


/**
 * optional string image_type = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getImageType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.setImageType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional int32 local_ssd_count = 7;
 * @return {number}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getLocalSsdCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.setLocalSsdCount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional bool preemptible = 10;
 * @return {boolean}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getPreemptible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.setPreemptible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated AcceleratorConfig accelerators = 11;
 * @return {!Array<!proto.google.container.v1alpha1.AcceleratorConfig>}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getAcceleratorsList = function() {
  return /** @type{!Array<!proto.google.container.v1alpha1.AcceleratorConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.container.v1alpha1.AcceleratorConfig, 11));
};


/**
 * @param {!Array<!proto.google.container.v1alpha1.AcceleratorConfig>} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
*/
proto.google.container.v1alpha1.NodeConfig.prototype.setAcceleratorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.container.v1alpha1.AcceleratorConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.AcceleratorConfig}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.addAccelerators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.container.v1alpha1.AcceleratorConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.clearAcceleratorsList = function() {
  return this.setAcceleratorsList([]);
};


/**
 * optional string min_cpu_platform = 13;
 * @return {string}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getMinCpuPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.setMinCpuPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated NodeTaint taints = 15;
 * @return {!Array<!proto.google.container.v1alpha1.NodeTaint>}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.getTaintsList = function() {
  return /** @type{!Array<!proto.google.container.v1alpha1.NodeTaint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.container.v1alpha1.NodeTaint, 15));
};


/**
 * @param {!Array<!proto.google.container.v1alpha1.NodeTaint>} value
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
*/
proto.google.container.v1alpha1.NodeConfig.prototype.setTaintsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.container.v1alpha1.NodeTaint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.NodeTaint}
 */
proto.google.container.v1alpha1.NodeConfig.prototype.addTaints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.container.v1alpha1.NodeTaint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.NodeConfig} returns this
 */
proto.google.container.v1alpha1.NodeConfig.prototype.clearTaintsList = function() {
  return this.setTaintsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.NodeTaint.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.NodeTaint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.NodeTaint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodeTaint.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    effect: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.NodeTaint}
 */
proto.google.container.v1alpha1.NodeTaint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.NodeTaint;
  return proto.google.container.v1alpha1.NodeTaint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.NodeTaint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.NodeTaint}
 */
proto.google.container.v1alpha1.NodeTaint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {!proto.google.container.v1alpha1.NodeTaint.Effect} */ (reader.readEnum());
      msg.setEffect(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.NodeTaint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.NodeTaint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.NodeTaint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodeTaint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEffect();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.container.v1alpha1.NodeTaint.Effect = {
  EFFECT_UNSPECIFIED: 0,
  NO_SCHEDULE: 1,
  PREFER_NO_SCHEDULE: 2,
  NO_EXECUTE: 3
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.NodeTaint.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodeTaint} returns this
 */
proto.google.container.v1alpha1.NodeTaint.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.NodeTaint.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodeTaint} returns this
 */
proto.google.container.v1alpha1.NodeTaint.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Effect effect = 3;
 * @return {!proto.google.container.v1alpha1.NodeTaint.Effect}
 */
proto.google.container.v1alpha1.NodeTaint.prototype.getEffect = function() {
  return /** @type {!proto.google.container.v1alpha1.NodeTaint.Effect} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.container.v1alpha1.NodeTaint.Effect} value
 * @return {!proto.google.container.v1alpha1.NodeTaint} returns this
 */
proto.google.container.v1alpha1.NodeTaint.prototype.setEffect = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.MasterAuth.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.MasterAuth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.MasterAuth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MasterAuth.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientCertificateConfig: (f = msg.getClientCertificateConfig()) && proto.google.container.v1alpha1.ClientCertificateConfig.toObject(includeInstance, f),
    clusterCaCertificate: jspb.Message.getFieldWithDefault(msg, 100, ""),
    clientCertificate: jspb.Message.getFieldWithDefault(msg, 101, ""),
    clientKey: jspb.Message.getFieldWithDefault(msg, 102, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.MasterAuth}
 */
proto.google.container.v1alpha1.MasterAuth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.MasterAuth;
  return proto.google.container.v1alpha1.MasterAuth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.MasterAuth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.MasterAuth}
 */
proto.google.container.v1alpha1.MasterAuth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = new proto.google.container.v1alpha1.ClientCertificateConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.ClientCertificateConfig.deserializeBinaryFromReader);
      msg.setClientCertificateConfig(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterCaCertificate(value);
      break;
    case 101:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientCertificate(value);
      break;
    case 102:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.MasterAuth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.MasterAuth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.MasterAuth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MasterAuth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientCertificateConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.container.v1alpha1.ClientCertificateConfig.serializeBinaryToWriter
    );
  }
  f = message.getClusterCaCertificate();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
  f = message.getClientCertificate();
  if (f.length > 0) {
    writer.writeString(
      101,
      f
    );
  }
  f = message.getClientKey();
  if (f.length > 0) {
    writer.writeString(
      102,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.MasterAuth.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.MasterAuth} returns this
 */
proto.google.container.v1alpha1.MasterAuth.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.MasterAuth.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.MasterAuth} returns this
 */
proto.google.container.v1alpha1.MasterAuth.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ClientCertificateConfig client_certificate_config = 3;
 * @return {?proto.google.container.v1alpha1.ClientCertificateConfig}
 */
proto.google.container.v1alpha1.MasterAuth.prototype.getClientCertificateConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.ClientCertificateConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.ClientCertificateConfig, 3));
};


/**
 * @param {?proto.google.container.v1alpha1.ClientCertificateConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.MasterAuth} returns this
*/
proto.google.container.v1alpha1.MasterAuth.prototype.setClientCertificateConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.MasterAuth} returns this
 */
proto.google.container.v1alpha1.MasterAuth.prototype.clearClientCertificateConfig = function() {
  return this.setClientCertificateConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.MasterAuth.prototype.hasClientCertificateConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string cluster_ca_certificate = 100;
 * @return {string}
 */
proto.google.container.v1alpha1.MasterAuth.prototype.getClusterCaCertificate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.MasterAuth} returns this
 */
proto.google.container.v1alpha1.MasterAuth.prototype.setClusterCaCertificate = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};


/**
 * optional string client_certificate = 101;
 * @return {string}
 */
proto.google.container.v1alpha1.MasterAuth.prototype.getClientCertificate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 101, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.MasterAuth} returns this
 */
proto.google.container.v1alpha1.MasterAuth.prototype.setClientCertificate = function(value) {
  return jspb.Message.setProto3StringField(this, 101, value);
};


/**
 * optional string client_key = 102;
 * @return {string}
 */
proto.google.container.v1alpha1.MasterAuth.prototype.getClientKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 102, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.MasterAuth} returns this
 */
proto.google.container.v1alpha1.MasterAuth.prototype.setClientKey = function(value) {
  return jspb.Message.setProto3StringField(this, 102, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.ClientCertificateConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.ClientCertificateConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.ClientCertificateConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ClientCertificateConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    issueClientCertificate: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.ClientCertificateConfig}
 */
proto.google.container.v1alpha1.ClientCertificateConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.ClientCertificateConfig;
  return proto.google.container.v1alpha1.ClientCertificateConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.ClientCertificateConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.ClientCertificateConfig}
 */
proto.google.container.v1alpha1.ClientCertificateConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssueClientCertificate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.ClientCertificateConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.ClientCertificateConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.ClientCertificateConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ClientCertificateConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssueClientCertificate();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool issue_client_certificate = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.ClientCertificateConfig.prototype.getIssueClientCertificate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.ClientCertificateConfig} returns this
 */
proto.google.container.v1alpha1.ClientCertificateConfig.prototype.setIssueClientCertificate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.AddonsConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.AddonsConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.AddonsConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    httpLoadBalancing: (f = msg.getHttpLoadBalancing()) && proto.google.container.v1alpha1.HttpLoadBalancing.toObject(includeInstance, f),
    horizontalPodAutoscaling: (f = msg.getHorizontalPodAutoscaling()) && proto.google.container.v1alpha1.HorizontalPodAutoscaling.toObject(includeInstance, f),
    kubernetesDashboard: (f = msg.getKubernetesDashboard()) && proto.google.container.v1alpha1.KubernetesDashboard.toObject(includeInstance, f),
    networkPolicyConfig: (f = msg.getNetworkPolicyConfig()) && proto.google.container.v1alpha1.NetworkPolicyConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.AddonsConfig}
 */
proto.google.container.v1alpha1.AddonsConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.AddonsConfig;
  return proto.google.container.v1alpha1.AddonsConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.AddonsConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.AddonsConfig}
 */
proto.google.container.v1alpha1.AddonsConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.container.v1alpha1.HttpLoadBalancing;
      reader.readMessage(value,proto.google.container.v1alpha1.HttpLoadBalancing.deserializeBinaryFromReader);
      msg.setHttpLoadBalancing(value);
      break;
    case 2:
      var value = new proto.google.container.v1alpha1.HorizontalPodAutoscaling;
      reader.readMessage(value,proto.google.container.v1alpha1.HorizontalPodAutoscaling.deserializeBinaryFromReader);
      msg.setHorizontalPodAutoscaling(value);
      break;
    case 3:
      var value = new proto.google.container.v1alpha1.KubernetesDashboard;
      reader.readMessage(value,proto.google.container.v1alpha1.KubernetesDashboard.deserializeBinaryFromReader);
      msg.setKubernetesDashboard(value);
      break;
    case 4:
      var value = new proto.google.container.v1alpha1.NetworkPolicyConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.NetworkPolicyConfig.deserializeBinaryFromReader);
      msg.setNetworkPolicyConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.AddonsConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.AddonsConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.AddonsConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHttpLoadBalancing();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.container.v1alpha1.HttpLoadBalancing.serializeBinaryToWriter
    );
  }
  f = message.getHorizontalPodAutoscaling();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.container.v1alpha1.HorizontalPodAutoscaling.serializeBinaryToWriter
    );
  }
  f = message.getKubernetesDashboard();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.container.v1alpha1.KubernetesDashboard.serializeBinaryToWriter
    );
  }
  f = message.getNetworkPolicyConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.container.v1alpha1.NetworkPolicyConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional HttpLoadBalancing http_load_balancing = 1;
 * @return {?proto.google.container.v1alpha1.HttpLoadBalancing}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.getHttpLoadBalancing = function() {
  return /** @type{?proto.google.container.v1alpha1.HttpLoadBalancing} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.HttpLoadBalancing, 1));
};


/**
 * @param {?proto.google.container.v1alpha1.HttpLoadBalancing|undefined} value
 * @return {!proto.google.container.v1alpha1.AddonsConfig} returns this
*/
proto.google.container.v1alpha1.AddonsConfig.prototype.setHttpLoadBalancing = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.AddonsConfig} returns this
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.clearHttpLoadBalancing = function() {
  return this.setHttpLoadBalancing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.hasHttpLoadBalancing = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HorizontalPodAutoscaling horizontal_pod_autoscaling = 2;
 * @return {?proto.google.container.v1alpha1.HorizontalPodAutoscaling}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.getHorizontalPodAutoscaling = function() {
  return /** @type{?proto.google.container.v1alpha1.HorizontalPodAutoscaling} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.HorizontalPodAutoscaling, 2));
};


/**
 * @param {?proto.google.container.v1alpha1.HorizontalPodAutoscaling|undefined} value
 * @return {!proto.google.container.v1alpha1.AddonsConfig} returns this
*/
proto.google.container.v1alpha1.AddonsConfig.prototype.setHorizontalPodAutoscaling = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.AddonsConfig} returns this
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.clearHorizontalPodAutoscaling = function() {
  return this.setHorizontalPodAutoscaling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.hasHorizontalPodAutoscaling = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional KubernetesDashboard kubernetes_dashboard = 3;
 * @return {?proto.google.container.v1alpha1.KubernetesDashboard}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.getKubernetesDashboard = function() {
  return /** @type{?proto.google.container.v1alpha1.KubernetesDashboard} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.KubernetesDashboard, 3));
};


/**
 * @param {?proto.google.container.v1alpha1.KubernetesDashboard|undefined} value
 * @return {!proto.google.container.v1alpha1.AddonsConfig} returns this
*/
proto.google.container.v1alpha1.AddonsConfig.prototype.setKubernetesDashboard = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.AddonsConfig} returns this
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.clearKubernetesDashboard = function() {
  return this.setKubernetesDashboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.hasKubernetesDashboard = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional NetworkPolicyConfig network_policy_config = 4;
 * @return {?proto.google.container.v1alpha1.NetworkPolicyConfig}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.getNetworkPolicyConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.NetworkPolicyConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NetworkPolicyConfig, 4));
};


/**
 * @param {?proto.google.container.v1alpha1.NetworkPolicyConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.AddonsConfig} returns this
*/
proto.google.container.v1alpha1.AddonsConfig.prototype.setNetworkPolicyConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.AddonsConfig} returns this
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.clearNetworkPolicyConfig = function() {
  return this.setNetworkPolicyConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.AddonsConfig.prototype.hasNetworkPolicyConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.HttpLoadBalancing.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.HttpLoadBalancing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.HttpLoadBalancing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.HttpLoadBalancing.toObject = function(includeInstance, msg) {
  var f, obj = {
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.HttpLoadBalancing}
 */
proto.google.container.v1alpha1.HttpLoadBalancing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.HttpLoadBalancing;
  return proto.google.container.v1alpha1.HttpLoadBalancing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.HttpLoadBalancing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.HttpLoadBalancing}
 */
proto.google.container.v1alpha1.HttpLoadBalancing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.HttpLoadBalancing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.HttpLoadBalancing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.HttpLoadBalancing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.HttpLoadBalancing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool disabled = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.HttpLoadBalancing.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.HttpLoadBalancing} returns this
 */
proto.google.container.v1alpha1.HttpLoadBalancing.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.HorizontalPodAutoscaling.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.HorizontalPodAutoscaling.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.HorizontalPodAutoscaling} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.HorizontalPodAutoscaling.toObject = function(includeInstance, msg) {
  var f, obj = {
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.HorizontalPodAutoscaling}
 */
proto.google.container.v1alpha1.HorizontalPodAutoscaling.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.HorizontalPodAutoscaling;
  return proto.google.container.v1alpha1.HorizontalPodAutoscaling.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.HorizontalPodAutoscaling} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.HorizontalPodAutoscaling}
 */
proto.google.container.v1alpha1.HorizontalPodAutoscaling.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.HorizontalPodAutoscaling.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.HorizontalPodAutoscaling.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.HorizontalPodAutoscaling} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.HorizontalPodAutoscaling.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool disabled = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.HorizontalPodAutoscaling.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.HorizontalPodAutoscaling} returns this
 */
proto.google.container.v1alpha1.HorizontalPodAutoscaling.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.KubernetesDashboard.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.KubernetesDashboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.KubernetesDashboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.KubernetesDashboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.KubernetesDashboard}
 */
proto.google.container.v1alpha1.KubernetesDashboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.KubernetesDashboard;
  return proto.google.container.v1alpha1.KubernetesDashboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.KubernetesDashboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.KubernetesDashboard}
 */
proto.google.container.v1alpha1.KubernetesDashboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.KubernetesDashboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.KubernetesDashboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.KubernetesDashboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.KubernetesDashboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool disabled = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.KubernetesDashboard.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.KubernetesDashboard} returns this
 */
proto.google.container.v1alpha1.KubernetesDashboard.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.NetworkPolicyConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.NetworkPolicyConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.NetworkPolicyConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NetworkPolicyConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.NetworkPolicyConfig}
 */
proto.google.container.v1alpha1.NetworkPolicyConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.NetworkPolicyConfig;
  return proto.google.container.v1alpha1.NetworkPolicyConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.NetworkPolicyConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.NetworkPolicyConfig}
 */
proto.google.container.v1alpha1.NetworkPolicyConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.NetworkPolicyConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.NetworkPolicyConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.NetworkPolicyConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NetworkPolicyConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool disabled = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.NetworkPolicyConfig.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.NetworkPolicyConfig} returns this
 */
proto.google.container.v1alpha1.NetworkPolicyConfig.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    cidrBlocksList: jspb.Message.toObjectList(msg.getCidrBlocksList(),
    proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig;
  return proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = new proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock;
      reader.readMessage(value,proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.deserializeBinaryFromReader);
      msg.addCidrBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCidrBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cidrBlock: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock;
  return proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCidrBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCidrBlock();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string display_name = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock} returns this
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cidr_block = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.prototype.getCidrBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock} returns this
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock.prototype.setCidrBlock = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig} returns this
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated CidrBlock cidr_blocks = 2;
 * @return {!Array<!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock>}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.prototype.getCidrBlocksList = function() {
  return /** @type{!Array<!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock, 2));
};


/**
 * @param {!Array<!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock>} value
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig} returns this
*/
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.prototype.setCidrBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock}
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.prototype.addCidrBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.CidrBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig} returns this
 */
proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.prototype.clearCidrBlocksList = function() {
  return this.setCidrBlocksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.NetworkPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.NetworkPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.NetworkPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NetworkPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    provider: jspb.Message.getFieldWithDefault(msg, 1, 0),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.NetworkPolicy}
 */
proto.google.container.v1alpha1.NetworkPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.NetworkPolicy;
  return proto.google.container.v1alpha1.NetworkPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.NetworkPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.NetworkPolicy}
 */
proto.google.container.v1alpha1.NetworkPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.container.v1alpha1.NetworkPolicy.Provider} */ (reader.readEnum());
      msg.setProvider(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.NetworkPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.NetworkPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.NetworkPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NetworkPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.container.v1alpha1.NetworkPolicy.Provider = {
  PROVIDER_UNSPECIFIED: 0,
  CALICO: 1
};

/**
 * optional Provider provider = 1;
 * @return {!proto.google.container.v1alpha1.NetworkPolicy.Provider}
 */
proto.google.container.v1alpha1.NetworkPolicy.prototype.getProvider = function() {
  return /** @type {!proto.google.container.v1alpha1.NetworkPolicy.Provider} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.container.v1alpha1.NetworkPolicy.Provider} value
 * @return {!proto.google.container.v1alpha1.NetworkPolicy} returns this
 */
proto.google.container.v1alpha1.NetworkPolicy.prototype.setProvider = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool enabled = 2;
 * @return {boolean}
 */
proto.google.container.v1alpha1.NetworkPolicy.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.NetworkPolicy} returns this
 */
proto.google.container.v1alpha1.NetworkPolicy.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.IPAllocationPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.IPAllocationPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.IPAllocationPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    useIpAliases: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    createSubnetwork: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    subnetworkName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clusterIpv4Cidr: jspb.Message.getFieldWithDefault(msg, 4, ""),
    nodeIpv4Cidr: jspb.Message.getFieldWithDefault(msg, 5, ""),
    servicesIpv4Cidr: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clusterSecondaryRangeName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    servicesSecondaryRangeName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    clusterIpv4CidrBlock: jspb.Message.getFieldWithDefault(msg, 9, ""),
    nodeIpv4CidrBlock: jspb.Message.getFieldWithDefault(msg, 10, ""),
    servicesIpv4CidrBlock: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.IPAllocationPolicy;
  return proto.google.container.v1alpha1.IPAllocationPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.IPAllocationPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseIpAliases(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateSubnetwork(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetworkName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterIpv4Cidr(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeIpv4Cidr(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicesIpv4Cidr(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterSecondaryRangeName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicesSecondaryRangeName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterIpv4CidrBlock(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeIpv4CidrBlock(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicesIpv4CidrBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.IPAllocationPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.IPAllocationPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.IPAllocationPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseIpAliases();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCreateSubnetwork();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSubnetworkName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClusterIpv4Cidr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNodeIpv4Cidr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getServicesIpv4Cidr();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClusterSecondaryRangeName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getServicesSecondaryRangeName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getClusterIpv4CidrBlock();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getNodeIpv4CidrBlock();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getServicesIpv4CidrBlock();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional bool use_ip_aliases = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getUseIpAliases = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setUseIpAliases = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool create_subnetwork = 2;
 * @return {boolean}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getCreateSubnetwork = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setCreateSubnetwork = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string subnetwork_name = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getSubnetworkName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setSubnetworkName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string cluster_ipv4_cidr = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getClusterIpv4Cidr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setClusterIpv4Cidr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string node_ipv4_cidr = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getNodeIpv4Cidr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setNodeIpv4Cidr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string services_ipv4_cidr = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getServicesIpv4Cidr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setServicesIpv4Cidr = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string cluster_secondary_range_name = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getClusterSecondaryRangeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setClusterSecondaryRangeName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string services_secondary_range_name = 8;
 * @return {string}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getServicesSecondaryRangeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setServicesSecondaryRangeName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string cluster_ipv4_cidr_block = 9;
 * @return {string}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getClusterIpv4CidrBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setClusterIpv4CidrBlock = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string node_ipv4_cidr_block = 10;
 * @return {string}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getNodeIpv4CidrBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setNodeIpv4CidrBlock = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string services_ipv4_cidr_block = 11;
 * @return {string}
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.getServicesIpv4CidrBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.IPAllocationPolicy} returns this
 */
proto.google.container.v1alpha1.IPAllocationPolicy.prototype.setServicesIpv4CidrBlock = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.PodSecurityPolicyConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.PodSecurityPolicyConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.PodSecurityPolicyConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.PodSecurityPolicyConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.PodSecurityPolicyConfig}
 */
proto.google.container.v1alpha1.PodSecurityPolicyConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.PodSecurityPolicyConfig;
  return proto.google.container.v1alpha1.PodSecurityPolicyConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.PodSecurityPolicyConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.PodSecurityPolicyConfig}
 */
proto.google.container.v1alpha1.PodSecurityPolicyConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.PodSecurityPolicyConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.PodSecurityPolicyConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.PodSecurityPolicyConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.PodSecurityPolicyConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.PodSecurityPolicyConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.PodSecurityPolicyConfig} returns this
 */
proto.google.container.v1alpha1.PodSecurityPolicyConfig.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.Cluster.repeatedFields_ = [12,13,111];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.Cluster.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.Cluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.Cluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.Cluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    initialNodeCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nodeConfig: (f = msg.getNodeConfig()) && proto.google.container.v1alpha1.NodeConfig.toObject(includeInstance, f),
    masterAuth: (f = msg.getMasterAuth()) && proto.google.container.v1alpha1.MasterAuth.toObject(includeInstance, f),
    loggingService: jspb.Message.getFieldWithDefault(msg, 6, ""),
    monitoringService: jspb.Message.getFieldWithDefault(msg, 7, ""),
    network: jspb.Message.getFieldWithDefault(msg, 8, ""),
    clusterIpv4Cidr: jspb.Message.getFieldWithDefault(msg, 9, ""),
    addonsConfig: (f = msg.getAddonsConfig()) && proto.google.container.v1alpha1.AddonsConfig.toObject(includeInstance, f),
    subnetwork: jspb.Message.getFieldWithDefault(msg, 11, ""),
    nodePoolsList: jspb.Message.toObjectList(msg.getNodePoolsList(),
    proto.google.container.v1alpha1.NodePool.toObject, includeInstance),
    locationsList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    enableKubernetesAlpha: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    networkPolicy: (f = msg.getNetworkPolicy()) && proto.google.container.v1alpha1.NetworkPolicy.toObject(includeInstance, f),
    ipAllocationPolicy: (f = msg.getIpAllocationPolicy()) && proto.google.container.v1alpha1.IPAllocationPolicy.toObject(includeInstance, f),
    masterAuthorizedNetworksConfig: (f = msg.getMasterAuthorizedNetworksConfig()) && proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.toObject(includeInstance, f),
    maintenancePolicy: (f = msg.getMaintenancePolicy()) && proto.google.container.v1alpha1.MaintenancePolicy.toObject(includeInstance, f),
    podSecurityPolicyConfig: (f = msg.getPodSecurityPolicyConfig()) && proto.google.container.v1alpha1.PodSecurityPolicyConfig.toObject(includeInstance, f),
    selfLink: jspb.Message.getFieldWithDefault(msg, 100, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 101, ""),
    endpoint: jspb.Message.getFieldWithDefault(msg, 102, ""),
    initialClusterVersion: jspb.Message.getFieldWithDefault(msg, 103, ""),
    currentMasterVersion: jspb.Message.getFieldWithDefault(msg, 104, ""),
    currentNodeVersion: jspb.Message.getFieldWithDefault(msg, 105, ""),
    createTime: jspb.Message.getFieldWithDefault(msg, 106, ""),
    status: jspb.Message.getFieldWithDefault(msg, 107, 0),
    statusMessage: jspb.Message.getFieldWithDefault(msg, 108, ""),
    nodeIpv4CidrSize: jspb.Message.getFieldWithDefault(msg, 109, 0),
    servicesIpv4Cidr: jspb.Message.getFieldWithDefault(msg, 110, ""),
    instanceGroupUrlsList: (f = jspb.Message.getRepeatedField(msg, 111)) == null ? undefined : f,
    currentNodeCount: jspb.Message.getFieldWithDefault(msg, 112, 0),
    expireTime: jspb.Message.getFieldWithDefault(msg, 113, ""),
    location: jspb.Message.getFieldWithDefault(msg, 114, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.Cluster}
 */
proto.google.container.v1alpha1.Cluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.Cluster;
  return proto.google.container.v1alpha1.Cluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.Cluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.Cluster}
 */
proto.google.container.v1alpha1.Cluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInitialNodeCount(value);
      break;
    case 4:
      var value = new proto.google.container.v1alpha1.NodeConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.NodeConfig.deserializeBinaryFromReader);
      msg.setNodeConfig(value);
      break;
    case 5:
      var value = new proto.google.container.v1alpha1.MasterAuth;
      reader.readMessage(value,proto.google.container.v1alpha1.MasterAuth.deserializeBinaryFromReader);
      msg.setMasterAuth(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoggingService(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoringService(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterIpv4Cidr(value);
      break;
    case 10:
      var value = new proto.google.container.v1alpha1.AddonsConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.AddonsConfig.deserializeBinaryFromReader);
      msg.setAddonsConfig(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetwork(value);
      break;
    case 12:
      var value = new proto.google.container.v1alpha1.NodePool;
      reader.readMessage(value,proto.google.container.v1alpha1.NodePool.deserializeBinaryFromReader);
      msg.addNodePools(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addLocations(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableKubernetesAlpha(value);
      break;
    case 19:
      var value = new proto.google.container.v1alpha1.NetworkPolicy;
      reader.readMessage(value,proto.google.container.v1alpha1.NetworkPolicy.deserializeBinaryFromReader);
      msg.setNetworkPolicy(value);
      break;
    case 20:
      var value = new proto.google.container.v1alpha1.IPAllocationPolicy;
      reader.readMessage(value,proto.google.container.v1alpha1.IPAllocationPolicy.deserializeBinaryFromReader);
      msg.setIpAllocationPolicy(value);
      break;
    case 22:
      var value = new proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.deserializeBinaryFromReader);
      msg.setMasterAuthorizedNetworksConfig(value);
      break;
    case 23:
      var value = new proto.google.container.v1alpha1.MaintenancePolicy;
      reader.readMessage(value,proto.google.container.v1alpha1.MaintenancePolicy.deserializeBinaryFromReader);
      msg.setMaintenancePolicy(value);
      break;
    case 25:
      var value = new proto.google.container.v1alpha1.PodSecurityPolicyConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.PodSecurityPolicyConfig.deserializeBinaryFromReader);
      msg.setPodSecurityPolicyConfig(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelfLink(value);
      break;
    case 101:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 102:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 103:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialClusterVersion(value);
      break;
    case 104:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentMasterVersion(value);
      break;
    case 105:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrentNodeVersion(value);
      break;
    case 106:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateTime(value);
      break;
    case 107:
      var value = /** @type {!proto.google.container.v1alpha1.Cluster.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 108:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusMessage(value);
      break;
    case 109:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNodeIpv4CidrSize(value);
      break;
    case 110:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicesIpv4Cidr(value);
      break;
    case 111:
      var value = /** @type {string} */ (reader.readString());
      msg.addInstanceGroupUrls(value);
      break;
    case 112:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentNodeCount(value);
      break;
    case 113:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpireTime(value);
      break;
    case 114:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.Cluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.Cluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.Cluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.Cluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInitialNodeCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNodeConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.container.v1alpha1.NodeConfig.serializeBinaryToWriter
    );
  }
  f = message.getMasterAuth();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.container.v1alpha1.MasterAuth.serializeBinaryToWriter
    );
  }
  f = message.getLoggingService();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMonitoringService();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getClusterIpv4Cidr();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAddonsConfig();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.google.container.v1alpha1.AddonsConfig.serializeBinaryToWriter
    );
  }
  f = message.getSubnetwork();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getNodePoolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.google.container.v1alpha1.NodePool.serializeBinaryToWriter
    );
  }
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getEnableKubernetesAlpha();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getNetworkPolicy();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.google.container.v1alpha1.NetworkPolicy.serializeBinaryToWriter
    );
  }
  f = message.getIpAllocationPolicy();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.google.container.v1alpha1.IPAllocationPolicy.serializeBinaryToWriter
    );
  }
  f = message.getMasterAuthorizedNetworksConfig();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.serializeBinaryToWriter
    );
  }
  f = message.getMaintenancePolicy();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.google.container.v1alpha1.MaintenancePolicy.serializeBinaryToWriter
    );
  }
  f = message.getPodSecurityPolicyConfig();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.google.container.v1alpha1.PodSecurityPolicyConfig.serializeBinaryToWriter
    );
  }
  f = message.getSelfLink();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      101,
      f
    );
  }
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      102,
      f
    );
  }
  f = message.getInitialClusterVersion();
  if (f.length > 0) {
    writer.writeString(
      103,
      f
    );
  }
  f = message.getCurrentMasterVersion();
  if (f.length > 0) {
    writer.writeString(
      104,
      f
    );
  }
  f = message.getCurrentNodeVersion();
  if (f.length > 0) {
    writer.writeString(
      105,
      f
    );
  }
  f = message.getCreateTime();
  if (f.length > 0) {
    writer.writeString(
      106,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      107,
      f
    );
  }
  f = message.getStatusMessage();
  if (f.length > 0) {
    writer.writeString(
      108,
      f
    );
  }
  f = message.getNodeIpv4CidrSize();
  if (f !== 0) {
    writer.writeInt32(
      109,
      f
    );
  }
  f = message.getServicesIpv4Cidr();
  if (f.length > 0) {
    writer.writeString(
      110,
      f
    );
  }
  f = message.getInstanceGroupUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      111,
      f
    );
  }
  f = message.getCurrentNodeCount();
  if (f !== 0) {
    writer.writeInt32(
      112,
      f
    );
  }
  f = message.getExpireTime();
  if (f.length > 0) {
    writer.writeString(
      113,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      114,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.container.v1alpha1.Cluster.Status = {
  STATUS_UNSPECIFIED: 0,
  PROVISIONING: 1,
  RUNNING: 2,
  RECONCILING: 3,
  STOPPING: 4,
  ERROR: 5
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 initial_node_count = 3;
 * @return {number}
 */
proto.google.container.v1alpha1.Cluster.prototype.getInitialNodeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setInitialNodeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional NodeConfig node_config = 4;
 * @return {?proto.google.container.v1alpha1.NodeConfig}
 */
proto.google.container.v1alpha1.Cluster.prototype.getNodeConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.NodeConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NodeConfig, 4));
};


/**
 * @param {?proto.google.container.v1alpha1.NodeConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
*/
proto.google.container.v1alpha1.Cluster.prototype.setNodeConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearNodeConfig = function() {
  return this.setNodeConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.Cluster.prototype.hasNodeConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MasterAuth master_auth = 5;
 * @return {?proto.google.container.v1alpha1.MasterAuth}
 */
proto.google.container.v1alpha1.Cluster.prototype.getMasterAuth = function() {
  return /** @type{?proto.google.container.v1alpha1.MasterAuth} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.MasterAuth, 5));
};


/**
 * @param {?proto.google.container.v1alpha1.MasterAuth|undefined} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
*/
proto.google.container.v1alpha1.Cluster.prototype.setMasterAuth = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearMasterAuth = function() {
  return this.setMasterAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.Cluster.prototype.hasMasterAuth = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string logging_service = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getLoggingService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setLoggingService = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string monitoring_service = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getMonitoringService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setMonitoringService = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string network = 8;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string cluster_ipv4_cidr = 9;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getClusterIpv4Cidr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setClusterIpv4Cidr = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional AddonsConfig addons_config = 10;
 * @return {?proto.google.container.v1alpha1.AddonsConfig}
 */
proto.google.container.v1alpha1.Cluster.prototype.getAddonsConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.AddonsConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.AddonsConfig, 10));
};


/**
 * @param {?proto.google.container.v1alpha1.AddonsConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
*/
proto.google.container.v1alpha1.Cluster.prototype.setAddonsConfig = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearAddonsConfig = function() {
  return this.setAddonsConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.Cluster.prototype.hasAddonsConfig = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string subnetwork = 11;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getSubnetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setSubnetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated NodePool node_pools = 12;
 * @return {!Array<!proto.google.container.v1alpha1.NodePool>}
 */
proto.google.container.v1alpha1.Cluster.prototype.getNodePoolsList = function() {
  return /** @type{!Array<!proto.google.container.v1alpha1.NodePool>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.container.v1alpha1.NodePool, 12));
};


/**
 * @param {!Array<!proto.google.container.v1alpha1.NodePool>} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
*/
proto.google.container.v1alpha1.Cluster.prototype.setNodePoolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.google.container.v1alpha1.NodePool=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.NodePool}
 */
proto.google.container.v1alpha1.Cluster.prototype.addNodePools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.google.container.v1alpha1.NodePool, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearNodePoolsList = function() {
  return this.setNodePoolsList([]);
};


/**
 * repeated string locations = 13;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.Cluster.prototype.getLocationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setLocationsList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.addLocations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};


/**
 * optional bool enable_kubernetes_alpha = 14;
 * @return {boolean}
 */
proto.google.container.v1alpha1.Cluster.prototype.getEnableKubernetesAlpha = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setEnableKubernetesAlpha = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional NetworkPolicy network_policy = 19;
 * @return {?proto.google.container.v1alpha1.NetworkPolicy}
 */
proto.google.container.v1alpha1.Cluster.prototype.getNetworkPolicy = function() {
  return /** @type{?proto.google.container.v1alpha1.NetworkPolicy} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NetworkPolicy, 19));
};


/**
 * @param {?proto.google.container.v1alpha1.NetworkPolicy|undefined} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
*/
proto.google.container.v1alpha1.Cluster.prototype.setNetworkPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearNetworkPolicy = function() {
  return this.setNetworkPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.Cluster.prototype.hasNetworkPolicy = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional IPAllocationPolicy ip_allocation_policy = 20;
 * @return {?proto.google.container.v1alpha1.IPAllocationPolicy}
 */
proto.google.container.v1alpha1.Cluster.prototype.getIpAllocationPolicy = function() {
  return /** @type{?proto.google.container.v1alpha1.IPAllocationPolicy} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.IPAllocationPolicy, 20));
};


/**
 * @param {?proto.google.container.v1alpha1.IPAllocationPolicy|undefined} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
*/
proto.google.container.v1alpha1.Cluster.prototype.setIpAllocationPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearIpAllocationPolicy = function() {
  return this.setIpAllocationPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.Cluster.prototype.hasIpAllocationPolicy = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional MasterAuthorizedNetworksConfig master_authorized_networks_config = 22;
 * @return {?proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig}
 */
proto.google.container.v1alpha1.Cluster.prototype.getMasterAuthorizedNetworksConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig, 22));
};


/**
 * @param {?proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
*/
proto.google.container.v1alpha1.Cluster.prototype.setMasterAuthorizedNetworksConfig = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearMasterAuthorizedNetworksConfig = function() {
  return this.setMasterAuthorizedNetworksConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.Cluster.prototype.hasMasterAuthorizedNetworksConfig = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional MaintenancePolicy maintenance_policy = 23;
 * @return {?proto.google.container.v1alpha1.MaintenancePolicy}
 */
proto.google.container.v1alpha1.Cluster.prototype.getMaintenancePolicy = function() {
  return /** @type{?proto.google.container.v1alpha1.MaintenancePolicy} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.MaintenancePolicy, 23));
};


/**
 * @param {?proto.google.container.v1alpha1.MaintenancePolicy|undefined} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
*/
proto.google.container.v1alpha1.Cluster.prototype.setMaintenancePolicy = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearMaintenancePolicy = function() {
  return this.setMaintenancePolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.Cluster.prototype.hasMaintenancePolicy = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional PodSecurityPolicyConfig pod_security_policy_config = 25;
 * @return {?proto.google.container.v1alpha1.PodSecurityPolicyConfig}
 */
proto.google.container.v1alpha1.Cluster.prototype.getPodSecurityPolicyConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.PodSecurityPolicyConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.PodSecurityPolicyConfig, 25));
};


/**
 * @param {?proto.google.container.v1alpha1.PodSecurityPolicyConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
*/
proto.google.container.v1alpha1.Cluster.prototype.setPodSecurityPolicyConfig = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearPodSecurityPolicyConfig = function() {
  return this.setPodSecurityPolicyConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.Cluster.prototype.hasPodSecurityPolicyConfig = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string self_link = 100;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getSelfLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setSelfLink = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};


/**
 * optional string zone = 101;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 101, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 101, value);
};


/**
 * optional string endpoint = 102;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 102, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 102, value);
};


/**
 * optional string initial_cluster_version = 103;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getInitialClusterVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 103, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setInitialClusterVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 103, value);
};


/**
 * optional string current_master_version = 104;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getCurrentMasterVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 104, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setCurrentMasterVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 104, value);
};


/**
 * optional string current_node_version = 105;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getCurrentNodeVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 105, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setCurrentNodeVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 105, value);
};


/**
 * optional string create_time = 106;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getCreateTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 106, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setCreateTime = function(value) {
  return jspb.Message.setProto3StringField(this, 106, value);
};


/**
 * optional Status status = 107;
 * @return {!proto.google.container.v1alpha1.Cluster.Status}
 */
proto.google.container.v1alpha1.Cluster.prototype.getStatus = function() {
  return /** @type {!proto.google.container.v1alpha1.Cluster.Status} */ (jspb.Message.getFieldWithDefault(this, 107, 0));
};


/**
 * @param {!proto.google.container.v1alpha1.Cluster.Status} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 107, value);
};


/**
 * optional string status_message = 108;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getStatusMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 108, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setStatusMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 108, value);
};


/**
 * optional int32 node_ipv4_cidr_size = 109;
 * @return {number}
 */
proto.google.container.v1alpha1.Cluster.prototype.getNodeIpv4CidrSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 109, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setNodeIpv4CidrSize = function(value) {
  return jspb.Message.setProto3IntField(this, 109, value);
};


/**
 * optional string services_ipv4_cidr = 110;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getServicesIpv4Cidr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 110, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setServicesIpv4Cidr = function(value) {
  return jspb.Message.setProto3StringField(this, 110, value);
};


/**
 * repeated string instance_group_urls = 111;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.Cluster.prototype.getInstanceGroupUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 111));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setInstanceGroupUrlsList = function(value) {
  return jspb.Message.setField(this, 111, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.addInstanceGroupUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 111, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.clearInstanceGroupUrlsList = function() {
  return this.setInstanceGroupUrlsList([]);
};


/**
 * optional int32 current_node_count = 112;
 * @return {number}
 */
proto.google.container.v1alpha1.Cluster.prototype.getCurrentNodeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 112, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setCurrentNodeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 112, value);
};


/**
 * optional string expire_time = 113;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getExpireTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 113, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setExpireTime = function(value) {
  return jspb.Message.setProto3StringField(this, 113, value);
};


/**
 * optional string location = 114;
 * @return {string}
 */
proto.google.container.v1alpha1.Cluster.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 114, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Cluster} returns this
 */
proto.google.container.v1alpha1.Cluster.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 114, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.ClusterUpdate.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.ClusterUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.ClusterUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ClusterUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    desiredNodeVersion: jspb.Message.getFieldWithDefault(msg, 4, ""),
    desiredMonitoringService: jspb.Message.getFieldWithDefault(msg, 5, ""),
    desiredAddonsConfig: (f = msg.getDesiredAddonsConfig()) && proto.google.container.v1alpha1.AddonsConfig.toObject(includeInstance, f),
    desiredNodePoolId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    desiredImageType: jspb.Message.getFieldWithDefault(msg, 8, ""),
    desiredNodePoolAutoscaling: (f = msg.getDesiredNodePoolAutoscaling()) && proto.google.container.v1alpha1.NodePoolAutoscaling.toObject(includeInstance, f),
    desiredLocationsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    desiredMasterAuthorizedNetworksConfig: (f = msg.getDesiredMasterAuthorizedNetworksConfig()) && proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.toObject(includeInstance, f),
    desiredPodSecurityPolicyConfig: (f = msg.getDesiredPodSecurityPolicyConfig()) && proto.google.container.v1alpha1.PodSecurityPolicyConfig.toObject(includeInstance, f),
    desiredMasterVersion: jspb.Message.getFieldWithDefault(msg, 100, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.ClusterUpdate}
 */
proto.google.container.v1alpha1.ClusterUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.ClusterUpdate;
  return proto.google.container.v1alpha1.ClusterUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.ClusterUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.ClusterUpdate}
 */
proto.google.container.v1alpha1.ClusterUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesiredNodeVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesiredMonitoringService(value);
      break;
    case 6:
      var value = new proto.google.container.v1alpha1.AddonsConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.AddonsConfig.deserializeBinaryFromReader);
      msg.setDesiredAddonsConfig(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesiredNodePoolId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesiredImageType(value);
      break;
    case 9:
      var value = new proto.google.container.v1alpha1.NodePoolAutoscaling;
      reader.readMessage(value,proto.google.container.v1alpha1.NodePoolAutoscaling.deserializeBinaryFromReader);
      msg.setDesiredNodePoolAutoscaling(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addDesiredLocations(value);
      break;
    case 12:
      var value = new proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.deserializeBinaryFromReader);
      msg.setDesiredMasterAuthorizedNetworksConfig(value);
      break;
    case 14:
      var value = new proto.google.container.v1alpha1.PodSecurityPolicyConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.PodSecurityPolicyConfig.deserializeBinaryFromReader);
      msg.setDesiredPodSecurityPolicyConfig(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesiredMasterVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.ClusterUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.ClusterUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ClusterUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDesiredNodeVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDesiredMonitoringService();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDesiredAddonsConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.container.v1alpha1.AddonsConfig.serializeBinaryToWriter
    );
  }
  f = message.getDesiredNodePoolId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDesiredImageType();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDesiredNodePoolAutoscaling();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.container.v1alpha1.NodePoolAutoscaling.serializeBinaryToWriter
    );
  }
  f = message.getDesiredLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getDesiredMasterAuthorizedNetworksConfig();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig.serializeBinaryToWriter
    );
  }
  f = message.getDesiredPodSecurityPolicyConfig();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.google.container.v1alpha1.PodSecurityPolicyConfig.serializeBinaryToWriter
    );
  }
  f = message.getDesiredMasterVersion();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
};


/**
 * optional string desired_node_version = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredNodeVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredNodeVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string desired_monitoring_service = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredMonitoringService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredMonitoringService = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional AddonsConfig desired_addons_config = 6;
 * @return {?proto.google.container.v1alpha1.AddonsConfig}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredAddonsConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.AddonsConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.AddonsConfig, 6));
};


/**
 * @param {?proto.google.container.v1alpha1.AddonsConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
*/
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredAddonsConfig = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.clearDesiredAddonsConfig = function() {
  return this.setDesiredAddonsConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.hasDesiredAddonsConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string desired_node_pool_id = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredNodePoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredNodePoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string desired_image_type = 8;
 * @return {string}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredImageType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredImageType = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional NodePoolAutoscaling desired_node_pool_autoscaling = 9;
 * @return {?proto.google.container.v1alpha1.NodePoolAutoscaling}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredNodePoolAutoscaling = function() {
  return /** @type{?proto.google.container.v1alpha1.NodePoolAutoscaling} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NodePoolAutoscaling, 9));
};


/**
 * @param {?proto.google.container.v1alpha1.NodePoolAutoscaling|undefined} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
*/
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredNodePoolAutoscaling = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.clearDesiredNodePoolAutoscaling = function() {
  return this.setDesiredNodePoolAutoscaling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.hasDesiredNodePoolAutoscaling = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated string desired_locations = 10;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredLocationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredLocationsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.addDesiredLocations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.clearDesiredLocationsList = function() {
  return this.setDesiredLocationsList([]);
};


/**
 * optional MasterAuthorizedNetworksConfig desired_master_authorized_networks_config = 12;
 * @return {?proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredMasterAuthorizedNetworksConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig, 12));
};


/**
 * @param {?proto.google.container.v1alpha1.MasterAuthorizedNetworksConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
*/
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredMasterAuthorizedNetworksConfig = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.clearDesiredMasterAuthorizedNetworksConfig = function() {
  return this.setDesiredMasterAuthorizedNetworksConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.hasDesiredMasterAuthorizedNetworksConfig = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional PodSecurityPolicyConfig desired_pod_security_policy_config = 14;
 * @return {?proto.google.container.v1alpha1.PodSecurityPolicyConfig}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredPodSecurityPolicyConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.PodSecurityPolicyConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.PodSecurityPolicyConfig, 14));
};


/**
 * @param {?proto.google.container.v1alpha1.PodSecurityPolicyConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
*/
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredPodSecurityPolicyConfig = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.clearDesiredPodSecurityPolicyConfig = function() {
  return this.setDesiredPodSecurityPolicyConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.hasDesiredPodSecurityPolicyConfig = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string desired_master_version = 100;
 * @return {string}
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.getDesiredMasterVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ClusterUpdate} returns this
 */
proto.google.container.v1alpha1.ClusterUpdate.prototype.setDesiredMasterVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.Operation.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operationType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    detail: jspb.Message.getFieldWithDefault(msg, 8, ""),
    statusMessage: jspb.Message.getFieldWithDefault(msg, 5, ""),
    selfLink: jspb.Message.getFieldWithDefault(msg, 6, ""),
    targetLink: jspb.Message.getFieldWithDefault(msg, 7, ""),
    location: jspb.Message.getFieldWithDefault(msg, 9, ""),
    startTime: jspb.Message.getFieldWithDefault(msg, 10, ""),
    endTime: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.Operation}
 */
proto.google.container.v1alpha1.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.Operation;
  return proto.google.container.v1alpha1.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.Operation}
 */
proto.google.container.v1alpha1.Operation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {!proto.google.container.v1alpha1.Operation.Type} */ (reader.readEnum());
      msg.setOperationType(value);
      break;
    case 4:
      var value = /** @type {!proto.google.container.v1alpha1.Operation.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusMessage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelfLink(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetLink(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartTime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.Operation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperationType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatusMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSelfLink();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTargetLink();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStartTime();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getEndTime();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.container.v1alpha1.Operation.Status = {
  STATUS_UNSPECIFIED: 0,
  PENDING: 1,
  RUNNING: 2,
  DONE: 3,
  ABORTING: 4
};

/**
 * @enum {number}
 */
proto.google.container.v1alpha1.Operation.Type = {
  TYPE_UNSPECIFIED: 0,
  CREATE_CLUSTER: 1,
  DELETE_CLUSTER: 2,
  UPGRADE_MASTER: 3,
  UPGRADE_NODES: 4,
  REPAIR_CLUSTER: 5,
  UPDATE_CLUSTER: 6,
  CREATE_NODE_POOL: 7,
  DELETE_NODE_POOL: 8,
  SET_NODE_POOL_MANAGEMENT: 9,
  AUTO_REPAIR_NODES: 10,
  AUTO_UPGRADE_NODES: 11,
  SET_LABELS: 12,
  SET_MASTER_AUTH: 13,
  SET_NODE_POOL_SIZE: 14,
  SET_NETWORK_POLICY: 15,
  SET_MAINTENANCE_POLICY: 16
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.Operation.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.Operation.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Type operation_type = 3;
 * @return {!proto.google.container.v1alpha1.Operation.Type}
 */
proto.google.container.v1alpha1.Operation.prototype.getOperationType = function() {
  return /** @type {!proto.google.container.v1alpha1.Operation.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.container.v1alpha1.Operation.Type} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setOperationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Status status = 4;
 * @return {!proto.google.container.v1alpha1.Operation.Status}
 */
proto.google.container.v1alpha1.Operation.prototype.getStatus = function() {
  return /** @type {!proto.google.container.v1alpha1.Operation.Status} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.google.container.v1alpha1.Operation.Status} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string detail = 8;
 * @return {string}
 */
proto.google.container.v1alpha1.Operation.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string status_message = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.Operation.prototype.getStatusMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setStatusMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string self_link = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.Operation.prototype.getSelfLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setSelfLink = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string target_link = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.Operation.prototype.getTargetLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setTargetLink = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string location = 9;
 * @return {string}
 */
proto.google.container.v1alpha1.Operation.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string start_time = 10;
 * @return {string}
 */
proto.google.container.v1alpha1.Operation.prototype.getStartTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string end_time = 11;
 * @return {string}
 */
proto.google.container.v1alpha1.Operation.prototype.getEndTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.Operation} returns this
 */
proto.google.container.v1alpha1.Operation.prototype.setEndTime = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.CreateClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.CreateClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.CreateClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cluster: (f = msg.getCluster()) && proto.google.container.v1alpha1.Cluster.toObject(includeInstance, f),
    parent: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.CreateClusterRequest}
 */
proto.google.container.v1alpha1.CreateClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.CreateClusterRequest;
  return proto.google.container.v1alpha1.CreateClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.CreateClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.CreateClusterRequest}
 */
proto.google.container.v1alpha1.CreateClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = new proto.google.container.v1alpha1.Cluster;
      reader.readMessage(value,proto.google.container.v1alpha1.Cluster.deserializeBinaryFromReader);
      msg.setCluster(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.CreateClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.CreateClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.CreateClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCluster();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.container.v1alpha1.Cluster.serializeBinaryToWriter
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CreateClusterRequest} returns this
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CreateClusterRequest} returns this
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Cluster cluster = 3;
 * @return {?proto.google.container.v1alpha1.Cluster}
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.getCluster = function() {
  return /** @type{?proto.google.container.v1alpha1.Cluster} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.Cluster, 3));
};


/**
 * @param {?proto.google.container.v1alpha1.Cluster|undefined} value
 * @return {!proto.google.container.v1alpha1.CreateClusterRequest} returns this
*/
proto.google.container.v1alpha1.CreateClusterRequest.prototype.setCluster = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.CreateClusterRequest} returns this
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.clearCluster = function() {
  return this.setCluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.hasCluster = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string parent = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CreateClusterRequest} returns this
 */
proto.google.container.v1alpha1.CreateClusterRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.GetClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.GetClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.GetClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.GetClusterRequest}
 */
proto.google.container.v1alpha1.GetClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.GetClusterRequest;
  return proto.google.container.v1alpha1.GetClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.GetClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.GetClusterRequest}
 */
proto.google.container.v1alpha1.GetClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.GetClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.GetClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.GetClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetClusterRequest} returns this
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetClusterRequest} returns this
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetClusterRequest} returns this
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetClusterRequest} returns this
 */
proto.google.container.v1alpha1.GetClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.UpdateClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.UpdateClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.UpdateClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    update: (f = msg.getUpdate()) && proto.google.container.v1alpha1.ClusterUpdate.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.UpdateClusterRequest}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.UpdateClusterRequest;
  return proto.google.container.v1alpha1.UpdateClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.UpdateClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.UpdateClusterRequest}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = new proto.google.container.v1alpha1.ClusterUpdate;
      reader.readMessage(value,proto.google.container.v1alpha1.ClusterUpdate.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.UpdateClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.UpdateClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.UpdateClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.container.v1alpha1.ClusterUpdate.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateClusterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateClusterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateClusterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ClusterUpdate update = 4;
 * @return {?proto.google.container.v1alpha1.ClusterUpdate}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.getUpdate = function() {
  return /** @type{?proto.google.container.v1alpha1.ClusterUpdate} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.ClusterUpdate, 4));
};


/**
 * @param {?proto.google.container.v1alpha1.ClusterUpdate|undefined} value
 * @return {!proto.google.container.v1alpha1.UpdateClusterRequest} returns this
*/
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.UpdateClusterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateClusterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.UpdateNodePoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.UpdateNodePoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodePoolId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    nodeVersion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    imageType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    name: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.UpdateNodePoolRequest}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.UpdateNodePoolRequest;
  return proto.google.container.v1alpha1.UpdateNodePoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.UpdateNodePoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.UpdateNodePoolRequest}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePoolId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeVersion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.UpdateNodePoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.UpdateNodePoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodePoolId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNodeVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getImageType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string node_pool_id = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.getNodePoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.setNodePoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string node_version = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.getNodeVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.setNodeVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string image_type = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.getImageType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.setImageType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string name = 8;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.UpdateNodePoolRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodePoolId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    autoscaling: (f = msg.getAutoscaling()) && proto.google.container.v1alpha1.NodePoolAutoscaling.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest;
  return proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePoolId(value);
      break;
    case 5:
      var value = new proto.google.container.v1alpha1.NodePoolAutoscaling;
      reader.readMessage(value,proto.google.container.v1alpha1.NodePoolAutoscaling.deserializeBinaryFromReader);
      msg.setAutoscaling(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodePoolId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAutoscaling();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.container.v1alpha1.NodePoolAutoscaling.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string node_pool_id = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.getNodePoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.setNodePoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional NodePoolAutoscaling autoscaling = 5;
 * @return {?proto.google.container.v1alpha1.NodePoolAutoscaling}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.getAutoscaling = function() {
  return /** @type{?proto.google.container.v1alpha1.NodePoolAutoscaling} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NodePoolAutoscaling, 5));
};


/**
 * @param {?proto.google.container.v1alpha1.NodePoolAutoscaling|undefined} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} returns this
*/
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.setAutoscaling = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.clearAutoscaling = function() {
  return this.setAutoscaling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.hasAutoscaling = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolAutoscalingRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetLoggingServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetLoggingServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    loggingService: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetLoggingServiceRequest}
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetLoggingServiceRequest;
  return proto.google.container.v1alpha1.SetLoggingServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetLoggingServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetLoggingServiceRequest}
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoggingService(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetLoggingServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetLoggingServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLoggingService();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLoggingServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLoggingServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLoggingServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string logging_service = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.getLoggingService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLoggingServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.setLoggingService = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLoggingServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetLoggingServiceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetMonitoringServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetMonitoringServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    monitoringService: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetMonitoringServiceRequest}
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetMonitoringServiceRequest;
  return proto.google.container.v1alpha1.SetMonitoringServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetMonitoringServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetMonitoringServiceRequest}
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoringService(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetMonitoringServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetMonitoringServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMonitoringService();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMonitoringServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMonitoringServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMonitoringServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string monitoring_service = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.getMonitoringService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMonitoringServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.setMonitoringService = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMonitoringServiceRequest} returns this
 */
proto.google.container.v1alpha1.SetMonitoringServiceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetAddonsConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetAddonsConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    addonsConfig: (f = msg.getAddonsConfig()) && proto.google.container.v1alpha1.AddonsConfig.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetAddonsConfigRequest}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetAddonsConfigRequest;
  return proto.google.container.v1alpha1.SetAddonsConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetAddonsConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetAddonsConfigRequest}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = new proto.google.container.v1alpha1.AddonsConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.AddonsConfig.deserializeBinaryFromReader);
      msg.setAddonsConfig(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetAddonsConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetAddonsConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddonsConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.container.v1alpha1.AddonsConfig.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetAddonsConfigRequest} returns this
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetAddonsConfigRequest} returns this
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetAddonsConfigRequest} returns this
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AddonsConfig addons_config = 4;
 * @return {?proto.google.container.v1alpha1.AddonsConfig}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.getAddonsConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.AddonsConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.AddonsConfig, 4));
};


/**
 * @param {?proto.google.container.v1alpha1.AddonsConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.SetAddonsConfigRequest} returns this
*/
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.setAddonsConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.SetAddonsConfigRequest} returns this
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.clearAddonsConfig = function() {
  return this.setAddonsConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.hasAddonsConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetAddonsConfigRequest} returns this
 */
proto.google.container.v1alpha1.SetAddonsConfigRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.SetLocationsRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetLocationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetLocationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetLocationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    locationsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetLocationsRequest}
 */
proto.google.container.v1alpha1.SetLocationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetLocationsRequest;
  return proto.google.container.v1alpha1.SetLocationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetLocationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetLocationsRequest}
 */
proto.google.container.v1alpha1.SetLocationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addLocations(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetLocationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetLocationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetLocationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLocationsRequest} returns this
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLocationsRequest} returns this
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLocationsRequest} returns this
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string locations = 4;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.getLocationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.SetLocationsRequest} returns this
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.setLocationsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.SetLocationsRequest} returns this
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.addLocations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.SetLocationsRequest} returns this
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLocationsRequest} returns this
 */
proto.google.container.v1alpha1.SetLocationsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.UpdateMasterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.UpdateMasterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.UpdateMasterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    masterVersion: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.UpdateMasterRequest}
 */
proto.google.container.v1alpha1.UpdateMasterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.UpdateMasterRequest;
  return proto.google.container.v1alpha1.UpdateMasterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.UpdateMasterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.UpdateMasterRequest}
 */
proto.google.container.v1alpha1.UpdateMasterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMasterVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.UpdateMasterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.UpdateMasterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.UpdateMasterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMasterVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateMasterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateMasterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateMasterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string master_version = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.getMasterVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateMasterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.setMasterVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.UpdateMasterRequest} returns this
 */
proto.google.container.v1alpha1.UpdateMasterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetMasterAuthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetMasterAuthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    action: jspb.Message.getFieldWithDefault(msg, 4, 0),
    update: (f = msg.getUpdate()) && proto.google.container.v1alpha1.MasterAuth.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetMasterAuthRequest;
  return proto.google.container.v1alpha1.SetMasterAuthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetMasterAuthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {!proto.google.container.v1alpha1.SetMasterAuthRequest.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 5:
      var value = new proto.google.container.v1alpha1.MasterAuth;
      reader.readMessage(value,proto.google.container.v1alpha1.MasterAuth.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetMasterAuthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetMasterAuthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.container.v1alpha1.MasterAuth.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.Action = {
  UNKNOWN: 0,
  SET_PASSWORD: 1,
  GENERATE_PASSWORD: 2,
  SET_USERNAME: 3
};

/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest} returns this
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest} returns this
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest} returns this
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Action action = 4;
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest.Action}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.getAction = function() {
  return /** @type {!proto.google.container.v1alpha1.SetMasterAuthRequest.Action} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.google.container.v1alpha1.SetMasterAuthRequest.Action} value
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest} returns this
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional MasterAuth update = 5;
 * @return {?proto.google.container.v1alpha1.MasterAuth}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.getUpdate = function() {
  return /** @type{?proto.google.container.v1alpha1.MasterAuth} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.MasterAuth, 5));
};


/**
 * @param {?proto.google.container.v1alpha1.MasterAuth|undefined} value
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest} returns this
*/
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest} returns this
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMasterAuthRequest} returns this
 */
proto.google.container.v1alpha1.SetMasterAuthRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.DeleteClusterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.DeleteClusterRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.DeleteClusterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.DeleteClusterRequest}
 */
proto.google.container.v1alpha1.DeleteClusterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.DeleteClusterRequest;
  return proto.google.container.v1alpha1.DeleteClusterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.DeleteClusterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.DeleteClusterRequest}
 */
proto.google.container.v1alpha1.DeleteClusterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.DeleteClusterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.DeleteClusterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.DeleteClusterRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DeleteClusterRequest} returns this
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DeleteClusterRequest} returns this
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DeleteClusterRequest} returns this
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DeleteClusterRequest} returns this
 */
proto.google.container.v1alpha1.DeleteClusterRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.ListClustersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.ListClustersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.ListClustersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListClustersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.ListClustersRequest}
 */
proto.google.container.v1alpha1.ListClustersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.ListClustersRequest;
  return proto.google.container.v1alpha1.ListClustersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.ListClustersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.ListClustersRequest}
 */
proto.google.container.v1alpha1.ListClustersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.ListClustersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.ListClustersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.ListClustersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListClustersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.ListClustersRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListClustersRequest} returns this
 */
proto.google.container.v1alpha1.ListClustersRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.ListClustersRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListClustersRequest} returns this
 */
proto.google.container.v1alpha1.ListClustersRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parent = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.ListClustersRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListClustersRequest} returns this
 */
proto.google.container.v1alpha1.ListClustersRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.ListClustersResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.ListClustersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.ListClustersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.ListClustersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListClustersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clustersList: jspb.Message.toObjectList(msg.getClustersList(),
    proto.google.container.v1alpha1.Cluster.toObject, includeInstance),
    missingZonesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.ListClustersResponse}
 */
proto.google.container.v1alpha1.ListClustersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.ListClustersResponse;
  return proto.google.container.v1alpha1.ListClustersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.ListClustersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.ListClustersResponse}
 */
proto.google.container.v1alpha1.ListClustersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.container.v1alpha1.Cluster;
      reader.readMessage(value,proto.google.container.v1alpha1.Cluster.deserializeBinaryFromReader);
      msg.addClusters(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addMissingZones(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.ListClustersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.ListClustersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.ListClustersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListClustersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.container.v1alpha1.Cluster.serializeBinaryToWriter
    );
  }
  f = message.getMissingZonesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated Cluster clusters = 1;
 * @return {!Array<!proto.google.container.v1alpha1.Cluster>}
 */
proto.google.container.v1alpha1.ListClustersResponse.prototype.getClustersList = function() {
  return /** @type{!Array<!proto.google.container.v1alpha1.Cluster>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.container.v1alpha1.Cluster, 1));
};


/**
 * @param {!Array<!proto.google.container.v1alpha1.Cluster>} value
 * @return {!proto.google.container.v1alpha1.ListClustersResponse} returns this
*/
proto.google.container.v1alpha1.ListClustersResponse.prototype.setClustersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.container.v1alpha1.Cluster=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.Cluster}
 */
proto.google.container.v1alpha1.ListClustersResponse.prototype.addClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.container.v1alpha1.Cluster, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.ListClustersResponse} returns this
 */
proto.google.container.v1alpha1.ListClustersResponse.prototype.clearClustersList = function() {
  return this.setClustersList([]);
};


/**
 * repeated string missing_zones = 2;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.ListClustersResponse.prototype.getMissingZonesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.ListClustersResponse} returns this
 */
proto.google.container.v1alpha1.ListClustersResponse.prototype.setMissingZonesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.ListClustersResponse} returns this
 */
proto.google.container.v1alpha1.ListClustersResponse.prototype.addMissingZones = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.ListClustersResponse} returns this
 */
proto.google.container.v1alpha1.ListClustersResponse.prototype.clearMissingZonesList = function() {
  return this.setMissingZonesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.GetOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.GetOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.GetOperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.GetOperationRequest}
 */
proto.google.container.v1alpha1.GetOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.GetOperationRequest;
  return proto.google.container.v1alpha1.GetOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.GetOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.GetOperationRequest}
 */
proto.google.container.v1alpha1.GetOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.GetOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.GetOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.GetOperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetOperationRequest} returns this
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetOperationRequest} returns this
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetOperationRequest} returns this
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetOperationRequest} returns this
 */
proto.google.container.v1alpha1.GetOperationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.ListOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.ListOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.ListOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.ListOperationsRequest}
 */
proto.google.container.v1alpha1.ListOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.ListOperationsRequest;
  return proto.google.container.v1alpha1.ListOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.ListOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.ListOperationsRequest}
 */
proto.google.container.v1alpha1.ListOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.ListOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.ListOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.ListOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.ListOperationsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListOperationsRequest} returns this
 */
proto.google.container.v1alpha1.ListOperationsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.ListOperationsRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListOperationsRequest} returns this
 */
proto.google.container.v1alpha1.ListOperationsRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parent = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.ListOperationsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListOperationsRequest} returns this
 */
proto.google.container.v1alpha1.ListOperationsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.CancelOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.CancelOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.CancelOperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.CancelOperationRequest}
 */
proto.google.container.v1alpha1.CancelOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.CancelOperationRequest;
  return proto.google.container.v1alpha1.CancelOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.CancelOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.CancelOperationRequest}
 */
proto.google.container.v1alpha1.CancelOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.CancelOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.CancelOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.CancelOperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CancelOperationRequest} returns this
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CancelOperationRequest} returns this
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CancelOperationRequest} returns this
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CancelOperationRequest} returns this
 */
proto.google.container.v1alpha1.CancelOperationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.ListOperationsResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.ListOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.ListOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.ListOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.google.container.v1alpha1.Operation.toObject, includeInstance),
    missingZonesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.ListOperationsResponse}
 */
proto.google.container.v1alpha1.ListOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.ListOperationsResponse;
  return proto.google.container.v1alpha1.ListOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.ListOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.ListOperationsResponse}
 */
proto.google.container.v1alpha1.ListOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.container.v1alpha1.Operation;
      reader.readMessage(value,proto.google.container.v1alpha1.Operation.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addMissingZones(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.ListOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.ListOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.ListOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.container.v1alpha1.Operation.serializeBinaryToWriter
    );
  }
  f = message.getMissingZonesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated Operation operations = 1;
 * @return {!Array<!proto.google.container.v1alpha1.Operation>}
 */
proto.google.container.v1alpha1.ListOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.google.container.v1alpha1.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.container.v1alpha1.Operation, 1));
};


/**
 * @param {!Array<!proto.google.container.v1alpha1.Operation>} value
 * @return {!proto.google.container.v1alpha1.ListOperationsResponse} returns this
*/
proto.google.container.v1alpha1.ListOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.container.v1alpha1.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.Operation}
 */
proto.google.container.v1alpha1.ListOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.container.v1alpha1.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.ListOperationsResponse} returns this
 */
proto.google.container.v1alpha1.ListOperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * repeated string missing_zones = 2;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.ListOperationsResponse.prototype.getMissingZonesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.ListOperationsResponse} returns this
 */
proto.google.container.v1alpha1.ListOperationsResponse.prototype.setMissingZonesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.ListOperationsResponse} returns this
 */
proto.google.container.v1alpha1.ListOperationsResponse.prototype.addMissingZones = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.ListOperationsResponse} returns this
 */
proto.google.container.v1alpha1.ListOperationsResponse.prototype.clearMissingZonesList = function() {
  return this.setMissingZonesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.GetServerConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.GetServerConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.GetServerConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.GetServerConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.GetServerConfigRequest}
 */
proto.google.container.v1alpha1.GetServerConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.GetServerConfigRequest;
  return proto.google.container.v1alpha1.GetServerConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.GetServerConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.GetServerConfigRequest}
 */
proto.google.container.v1alpha1.GetServerConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.GetServerConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.GetServerConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.GetServerConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.GetServerConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.GetServerConfigRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetServerConfigRequest} returns this
 */
proto.google.container.v1alpha1.GetServerConfigRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.GetServerConfigRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetServerConfigRequest} returns this
 */
proto.google.container.v1alpha1.GetServerConfigRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.GetServerConfigRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetServerConfigRequest} returns this
 */
proto.google.container.v1alpha1.GetServerConfigRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.ServerConfig.repeatedFields_ = [3,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.ServerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.ServerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.ServerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ServerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultClusterVersion: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validNodeVersionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    defaultImageType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    validImageTypesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    validMasterVersionsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.ServerConfig}
 */
proto.google.container.v1alpha1.ServerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.ServerConfig;
  return proto.google.container.v1alpha1.ServerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.ServerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.ServerConfig}
 */
proto.google.container.v1alpha1.ServerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultClusterVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addValidNodeVersions(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultImageType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addValidImageTypes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addValidMasterVersions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.ServerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.ServerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.ServerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ServerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultClusterVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidNodeVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDefaultImageType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getValidImageTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getValidMasterVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional string default_cluster_version = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.ServerConfig.prototype.getDefaultClusterVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.setDefaultClusterVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string valid_node_versions = 3;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.ServerConfig.prototype.getValidNodeVersionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.setValidNodeVersionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.addValidNodeVersions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.clearValidNodeVersionsList = function() {
  return this.setValidNodeVersionsList([]);
};


/**
 * optional string default_image_type = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.ServerConfig.prototype.getDefaultImageType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.setDefaultImageType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string valid_image_types = 5;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.ServerConfig.prototype.getValidImageTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.setValidImageTypesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.addValidImageTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.clearValidImageTypesList = function() {
  return this.setValidImageTypesList([]);
};


/**
 * repeated string valid_master_versions = 6;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.ServerConfig.prototype.getValidMasterVersionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.setValidMasterVersionsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.addValidMasterVersions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.ServerConfig} returns this
 */
proto.google.container.v1alpha1.ServerConfig.prototype.clearValidMasterVersionsList = function() {
  return this.setValidMasterVersionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.CreateNodePoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.CreateNodePoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodePool: (f = msg.getNodePool()) && proto.google.container.v1alpha1.NodePool.toObject(includeInstance, f),
    parent: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.CreateNodePoolRequest}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.CreateNodePoolRequest;
  return proto.google.container.v1alpha1.CreateNodePoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.CreateNodePoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.CreateNodePoolRequest}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = new proto.google.container.v1alpha1.NodePool;
      reader.readMessage(value,proto.google.container.v1alpha1.NodePool.deserializeBinaryFromReader);
      msg.setNodePool(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.CreateNodePoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.CreateNodePoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodePool();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.container.v1alpha1.NodePool.serializeBinaryToWriter
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CreateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CreateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CreateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional NodePool node_pool = 4;
 * @return {?proto.google.container.v1alpha1.NodePool}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.getNodePool = function() {
  return /** @type{?proto.google.container.v1alpha1.NodePool} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NodePool, 4));
};


/**
 * @param {?proto.google.container.v1alpha1.NodePool|undefined} value
 * @return {!proto.google.container.v1alpha1.CreateNodePoolRequest} returns this
*/
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.setNodePool = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.CreateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.clearNodePool = function() {
  return this.setNodePool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.hasNodePool = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string parent = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CreateNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.CreateNodePoolRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.DeleteNodePoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.DeleteNodePoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodePoolId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.DeleteNodePoolRequest}
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.DeleteNodePoolRequest;
  return proto.google.container.v1alpha1.DeleteNodePoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.DeleteNodePoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.DeleteNodePoolRequest}
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePoolId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.DeleteNodePoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.DeleteNodePoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodePoolId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DeleteNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DeleteNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DeleteNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string node_pool_id = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.getNodePoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DeleteNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.setNodePoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DeleteNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.DeleteNodePoolRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.ListNodePoolsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.ListNodePoolsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.ListNodePoolsRequest}
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.ListNodePoolsRequest;
  return proto.google.container.v1alpha1.ListNodePoolsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.ListNodePoolsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.ListNodePoolsRequest}
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.ListNodePoolsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.ListNodePoolsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListNodePoolsRequest} returns this
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListNodePoolsRequest} returns this
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListNodePoolsRequest} returns this
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string parent = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.ListNodePoolsRequest} returns this
 */
proto.google.container.v1alpha1.ListNodePoolsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.GetNodePoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.GetNodePoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.GetNodePoolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodePoolId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.GetNodePoolRequest}
 */
proto.google.container.v1alpha1.GetNodePoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.GetNodePoolRequest;
  return proto.google.container.v1alpha1.GetNodePoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.GetNodePoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.GetNodePoolRequest}
 */
proto.google.container.v1alpha1.GetNodePoolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePoolId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.GetNodePoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.GetNodePoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.GetNodePoolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodePoolId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string node_pool_id = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.getNodePoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.setNodePoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.GetNodePoolRequest} returns this
 */
proto.google.container.v1alpha1.GetNodePoolRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.NodePool.repeatedFields_ = [102];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.NodePool.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.NodePool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.NodePool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodePool.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.google.container.v1alpha1.NodeConfig.toObject(includeInstance, f),
    initialNodeCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    autoscaling: (f = msg.getAutoscaling()) && proto.google.container.v1alpha1.NodePoolAutoscaling.toObject(includeInstance, f),
    management: (f = msg.getManagement()) && proto.google.container.v1alpha1.NodeManagement.toObject(includeInstance, f),
    selfLink: jspb.Message.getFieldWithDefault(msg, 100, ""),
    version: jspb.Message.getFieldWithDefault(msg, 101, ""),
    instanceGroupUrlsList: (f = jspb.Message.getRepeatedField(msg, 102)) == null ? undefined : f,
    status: jspb.Message.getFieldWithDefault(msg, 103, 0),
    statusMessage: jspb.Message.getFieldWithDefault(msg, 104, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.NodePool}
 */
proto.google.container.v1alpha1.NodePool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.NodePool;
  return proto.google.container.v1alpha1.NodePool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.NodePool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.NodePool}
 */
proto.google.container.v1alpha1.NodePool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.container.v1alpha1.NodeConfig;
      reader.readMessage(value,proto.google.container.v1alpha1.NodeConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInitialNodeCount(value);
      break;
    case 4:
      var value = new proto.google.container.v1alpha1.NodePoolAutoscaling;
      reader.readMessage(value,proto.google.container.v1alpha1.NodePoolAutoscaling.deserializeBinaryFromReader);
      msg.setAutoscaling(value);
      break;
    case 5:
      var value = new proto.google.container.v1alpha1.NodeManagement;
      reader.readMessage(value,proto.google.container.v1alpha1.NodeManagement.deserializeBinaryFromReader);
      msg.setManagement(value);
      break;
    case 100:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelfLink(value);
      break;
    case 101:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 102:
      var value = /** @type {string} */ (reader.readString());
      msg.addInstanceGroupUrls(value);
      break;
    case 103:
      var value = /** @type {!proto.google.container.v1alpha1.NodePool.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 104:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.NodePool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.NodePool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.NodePool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodePool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.container.v1alpha1.NodeConfig.serializeBinaryToWriter
    );
  }
  f = message.getInitialNodeCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAutoscaling();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.container.v1alpha1.NodePoolAutoscaling.serializeBinaryToWriter
    );
  }
  f = message.getManagement();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.container.v1alpha1.NodeManagement.serializeBinaryToWriter
    );
  }
  f = message.getSelfLink();
  if (f.length > 0) {
    writer.writeString(
      100,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      101,
      f
    );
  }
  f = message.getInstanceGroupUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      102,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      103,
      f
    );
  }
  f = message.getStatusMessage();
  if (f.length > 0) {
    writer.writeString(
      104,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.container.v1alpha1.NodePool.Status = {
  STATUS_UNSPECIFIED: 0,
  PROVISIONING: 1,
  RUNNING: 2,
  RUNNING_WITH_ERROR: 3,
  RECONCILING: 4,
  STOPPING: 5,
  ERROR: 6
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.NodePool.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NodeConfig config = 2;
 * @return {?proto.google.container.v1alpha1.NodeConfig}
 */
proto.google.container.v1alpha1.NodePool.prototype.getConfig = function() {
  return /** @type{?proto.google.container.v1alpha1.NodeConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NodeConfig, 2));
};


/**
 * @param {?proto.google.container.v1alpha1.NodeConfig|undefined} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
*/
proto.google.container.v1alpha1.NodePool.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.NodePool.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 initial_node_count = 3;
 * @return {number}
 */
proto.google.container.v1alpha1.NodePool.prototype.getInitialNodeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.setInitialNodeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional NodePoolAutoscaling autoscaling = 4;
 * @return {?proto.google.container.v1alpha1.NodePoolAutoscaling}
 */
proto.google.container.v1alpha1.NodePool.prototype.getAutoscaling = function() {
  return /** @type{?proto.google.container.v1alpha1.NodePoolAutoscaling} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NodePoolAutoscaling, 4));
};


/**
 * @param {?proto.google.container.v1alpha1.NodePoolAutoscaling|undefined} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
*/
proto.google.container.v1alpha1.NodePool.prototype.setAutoscaling = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.clearAutoscaling = function() {
  return this.setAutoscaling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.NodePool.prototype.hasAutoscaling = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional NodeManagement management = 5;
 * @return {?proto.google.container.v1alpha1.NodeManagement}
 */
proto.google.container.v1alpha1.NodePool.prototype.getManagement = function() {
  return /** @type{?proto.google.container.v1alpha1.NodeManagement} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NodeManagement, 5));
};


/**
 * @param {?proto.google.container.v1alpha1.NodeManagement|undefined} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
*/
proto.google.container.v1alpha1.NodePool.prototype.setManagement = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.clearManagement = function() {
  return this.setManagement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.NodePool.prototype.hasManagement = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string self_link = 100;
 * @return {string}
 */
proto.google.container.v1alpha1.NodePool.prototype.getSelfLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 100, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.setSelfLink = function(value) {
  return jspb.Message.setProto3StringField(this, 100, value);
};


/**
 * optional string version = 101;
 * @return {string}
 */
proto.google.container.v1alpha1.NodePool.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 101, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 101, value);
};


/**
 * repeated string instance_group_urls = 102;
 * @return {!Array<string>}
 */
proto.google.container.v1alpha1.NodePool.prototype.getInstanceGroupUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 102));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.setInstanceGroupUrlsList = function(value) {
  return jspb.Message.setField(this, 102, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.addInstanceGroupUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 102, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.clearInstanceGroupUrlsList = function() {
  return this.setInstanceGroupUrlsList([]);
};


/**
 * optional Status status = 103;
 * @return {!proto.google.container.v1alpha1.NodePool.Status}
 */
proto.google.container.v1alpha1.NodePool.prototype.getStatus = function() {
  return /** @type {!proto.google.container.v1alpha1.NodePool.Status} */ (jspb.Message.getFieldWithDefault(this, 103, 0));
};


/**
 * @param {!proto.google.container.v1alpha1.NodePool.Status} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 103, value);
};


/**
 * optional string status_message = 104;
 * @return {string}
 */
proto.google.container.v1alpha1.NodePool.prototype.getStatusMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 104, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.NodePool} returns this
 */
proto.google.container.v1alpha1.NodePool.prototype.setStatusMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 104, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.NodeManagement.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.NodeManagement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.NodeManagement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodeManagement.toObject = function(includeInstance, msg) {
  var f, obj = {
    autoUpgrade: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    autoRepair: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    upgradeOptions: (f = msg.getUpgradeOptions()) && proto.google.container.v1alpha1.AutoUpgradeOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.NodeManagement}
 */
proto.google.container.v1alpha1.NodeManagement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.NodeManagement;
  return proto.google.container.v1alpha1.NodeManagement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.NodeManagement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.NodeManagement}
 */
proto.google.container.v1alpha1.NodeManagement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoUpgrade(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoRepair(value);
      break;
    case 10:
      var value = new proto.google.container.v1alpha1.AutoUpgradeOptions;
      reader.readMessage(value,proto.google.container.v1alpha1.AutoUpgradeOptions.deserializeBinaryFromReader);
      msg.setUpgradeOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.NodeManagement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.NodeManagement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.NodeManagement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodeManagement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutoUpgrade();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAutoRepair();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUpgradeOptions();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.google.container.v1alpha1.AutoUpgradeOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool auto_upgrade = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.NodeManagement.prototype.getAutoUpgrade = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.NodeManagement} returns this
 */
proto.google.container.v1alpha1.NodeManagement.prototype.setAutoUpgrade = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool auto_repair = 2;
 * @return {boolean}
 */
proto.google.container.v1alpha1.NodeManagement.prototype.getAutoRepair = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.NodeManagement} returns this
 */
proto.google.container.v1alpha1.NodeManagement.prototype.setAutoRepair = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AutoUpgradeOptions upgrade_options = 10;
 * @return {?proto.google.container.v1alpha1.AutoUpgradeOptions}
 */
proto.google.container.v1alpha1.NodeManagement.prototype.getUpgradeOptions = function() {
  return /** @type{?proto.google.container.v1alpha1.AutoUpgradeOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.AutoUpgradeOptions, 10));
};


/**
 * @param {?proto.google.container.v1alpha1.AutoUpgradeOptions|undefined} value
 * @return {!proto.google.container.v1alpha1.NodeManagement} returns this
*/
proto.google.container.v1alpha1.NodeManagement.prototype.setUpgradeOptions = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.NodeManagement} returns this
 */
proto.google.container.v1alpha1.NodeManagement.prototype.clearUpgradeOptions = function() {
  return this.setUpgradeOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.NodeManagement.prototype.hasUpgradeOptions = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.AutoUpgradeOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.AutoUpgradeOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    autoUpgradeStartTime: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.AutoUpgradeOptions}
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.AutoUpgradeOptions;
  return proto.google.container.v1alpha1.AutoUpgradeOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.AutoUpgradeOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.AutoUpgradeOptions}
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAutoUpgradeStartTime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.AutoUpgradeOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.AutoUpgradeOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAutoUpgradeStartTime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string auto_upgrade_start_time = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.prototype.getAutoUpgradeStartTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.AutoUpgradeOptions} returns this
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.prototype.setAutoUpgradeStartTime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.AutoUpgradeOptions} returns this
 */
proto.google.container.v1alpha1.AutoUpgradeOptions.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.MaintenancePolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.MaintenancePolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.MaintenancePolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MaintenancePolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    window: (f = msg.getWindow()) && proto.google.container.v1alpha1.MaintenanceWindow.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.MaintenancePolicy}
 */
proto.google.container.v1alpha1.MaintenancePolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.MaintenancePolicy;
  return proto.google.container.v1alpha1.MaintenancePolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.MaintenancePolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.MaintenancePolicy}
 */
proto.google.container.v1alpha1.MaintenancePolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.container.v1alpha1.MaintenanceWindow;
      reader.readMessage(value,proto.google.container.v1alpha1.MaintenanceWindow.deserializeBinaryFromReader);
      msg.setWindow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.MaintenancePolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.MaintenancePolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.MaintenancePolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MaintenancePolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindow();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.container.v1alpha1.MaintenanceWindow.serializeBinaryToWriter
    );
  }
};


/**
 * optional MaintenanceWindow window = 1;
 * @return {?proto.google.container.v1alpha1.MaintenanceWindow}
 */
proto.google.container.v1alpha1.MaintenancePolicy.prototype.getWindow = function() {
  return /** @type{?proto.google.container.v1alpha1.MaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.MaintenanceWindow, 1));
};


/**
 * @param {?proto.google.container.v1alpha1.MaintenanceWindow|undefined} value
 * @return {!proto.google.container.v1alpha1.MaintenancePolicy} returns this
*/
proto.google.container.v1alpha1.MaintenancePolicy.prototype.setWindow = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.MaintenancePolicy} returns this
 */
proto.google.container.v1alpha1.MaintenancePolicy.prototype.clearWindow = function() {
  return this.setWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.MaintenancePolicy.prototype.hasWindow = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.container.v1alpha1.MaintenanceWindow.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.google.container.v1alpha1.MaintenanceWindow.PolicyCase = {
  POLICY_NOT_SET: 0,
  DAILY_MAINTENANCE_WINDOW: 2
};

/**
 * @return {proto.google.container.v1alpha1.MaintenanceWindow.PolicyCase}
 */
proto.google.container.v1alpha1.MaintenanceWindow.prototype.getPolicyCase = function() {
  return /** @type {proto.google.container.v1alpha1.MaintenanceWindow.PolicyCase} */(jspb.Message.computeOneofCase(this, proto.google.container.v1alpha1.MaintenanceWindow.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.MaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.MaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.MaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MaintenanceWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    dailyMaintenanceWindow: (f = msg.getDailyMaintenanceWindow()) && proto.google.container.v1alpha1.DailyMaintenanceWindow.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.MaintenanceWindow}
 */
proto.google.container.v1alpha1.MaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.MaintenanceWindow;
  return proto.google.container.v1alpha1.MaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.MaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.MaintenanceWindow}
 */
proto.google.container.v1alpha1.MaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.google.container.v1alpha1.DailyMaintenanceWindow;
      reader.readMessage(value,proto.google.container.v1alpha1.DailyMaintenanceWindow.deserializeBinaryFromReader);
      msg.setDailyMaintenanceWindow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.MaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.MaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.MaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.MaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDailyMaintenanceWindow();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.container.v1alpha1.DailyMaintenanceWindow.serializeBinaryToWriter
    );
  }
};


/**
 * optional DailyMaintenanceWindow daily_maintenance_window = 2;
 * @return {?proto.google.container.v1alpha1.DailyMaintenanceWindow}
 */
proto.google.container.v1alpha1.MaintenanceWindow.prototype.getDailyMaintenanceWindow = function() {
  return /** @type{?proto.google.container.v1alpha1.DailyMaintenanceWindow} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.DailyMaintenanceWindow, 2));
};


/**
 * @param {?proto.google.container.v1alpha1.DailyMaintenanceWindow|undefined} value
 * @return {!proto.google.container.v1alpha1.MaintenanceWindow} returns this
*/
proto.google.container.v1alpha1.MaintenanceWindow.prototype.setDailyMaintenanceWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.container.v1alpha1.MaintenanceWindow.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.MaintenanceWindow} returns this
 */
proto.google.container.v1alpha1.MaintenanceWindow.prototype.clearDailyMaintenanceWindow = function() {
  return this.setDailyMaintenanceWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.MaintenanceWindow.prototype.hasDailyMaintenanceWindow = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.DailyMaintenanceWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.DailyMaintenanceWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: jspb.Message.getFieldWithDefault(msg, 2, ""),
    duration: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.DailyMaintenanceWindow}
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.DailyMaintenanceWindow;
  return proto.google.container.v1alpha1.DailyMaintenanceWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.DailyMaintenanceWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.DailyMaintenanceWindow}
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.DailyMaintenanceWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.DailyMaintenanceWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDuration();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string start_time = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.prototype.getStartTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DailyMaintenanceWindow} returns this
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.prototype.setStartTime = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string duration = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.prototype.getDuration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.DailyMaintenanceWindow} returns this
 */
proto.google.container.v1alpha1.DailyMaintenanceWindow.prototype.setDuration = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetNodePoolManagementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodePoolId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    management: (f = msg.getManagement()) && proto.google.container.v1alpha1.NodeManagement.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetNodePoolManagementRequest}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetNodePoolManagementRequest;
  return proto.google.container.v1alpha1.SetNodePoolManagementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetNodePoolManagementRequest}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePoolId(value);
      break;
    case 5:
      var value = new proto.google.container.v1alpha1.NodeManagement;
      reader.readMessage(value,proto.google.container.v1alpha1.NodeManagement.deserializeBinaryFromReader);
      msg.setManagement(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetNodePoolManagementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodePoolId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getManagement();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.container.v1alpha1.NodeManagement.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string node_pool_id = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.getNodePoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.setNodePoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional NodeManagement management = 5;
 * @return {?proto.google.container.v1alpha1.NodeManagement}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.getManagement = function() {
  return /** @type{?proto.google.container.v1alpha1.NodeManagement} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NodeManagement, 5));
};


/**
 * @param {?proto.google.container.v1alpha1.NodeManagement|undefined} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} returns this
*/
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.setManagement = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.clearManagement = function() {
  return this.setManagement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.hasManagement = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolManagementRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolManagementRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetNodePoolSizeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetNodePoolSizeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodePoolId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    nodeCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    name: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetNodePoolSizeRequest}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetNodePoolSizeRequest;
  return proto.google.container.v1alpha1.SetNodePoolSizeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetNodePoolSizeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetNodePoolSizeRequest}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePoolId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNodeCount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetNodePoolSizeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetNodePoolSizeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodePoolId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNodeCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolSizeRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolSizeRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolSizeRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string node_pool_id = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.getNodePoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolSizeRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.setNodePoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 node_count = 5;
 * @return {number}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.getNodeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolSizeRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.setNodeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNodePoolSizeRequest} returns this
 */
proto.google.container.v1alpha1.SetNodePoolSizeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nodePoolId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest}
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest;
  return proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest}
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePoolId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNodePoolId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest} returns this
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest} returns this
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest} returns this
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string node_pool_id = 4;
 * @return {string}
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.getNodePoolId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest} returns this
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.setNodePoolId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest} returns this
 */
proto.google.container.v1alpha1.RollbackNodePoolUpgradeRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.ListNodePoolsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.ListNodePoolsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePoolsList: jspb.Message.toObjectList(msg.getNodePoolsList(),
    proto.google.container.v1alpha1.NodePool.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.ListNodePoolsResponse}
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.ListNodePoolsResponse;
  return proto.google.container.v1alpha1.ListNodePoolsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.ListNodePoolsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.ListNodePoolsResponse}
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.container.v1alpha1.NodePool;
      reader.readMessage(value,proto.google.container.v1alpha1.NodePool.deserializeBinaryFromReader);
      msg.addNodePools(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.ListNodePoolsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.ListNodePoolsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePoolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.container.v1alpha1.NodePool.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NodePool node_pools = 1;
 * @return {!Array<!proto.google.container.v1alpha1.NodePool>}
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.prototype.getNodePoolsList = function() {
  return /** @type{!Array<!proto.google.container.v1alpha1.NodePool>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.container.v1alpha1.NodePool, 1));
};


/**
 * @param {!Array<!proto.google.container.v1alpha1.NodePool>} value
 * @return {!proto.google.container.v1alpha1.ListNodePoolsResponse} returns this
*/
proto.google.container.v1alpha1.ListNodePoolsResponse.prototype.setNodePoolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.container.v1alpha1.NodePool=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.container.v1alpha1.NodePool}
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.prototype.addNodePools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.container.v1alpha1.NodePool, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.container.v1alpha1.ListNodePoolsResponse} returns this
 */
proto.google.container.v1alpha1.ListNodePoolsResponse.prototype.clearNodePoolsList = function() {
  return this.setNodePoolsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.NodePoolAutoscaling.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.NodePoolAutoscaling} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    minNodeCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxNodeCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.NodePoolAutoscaling}
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.NodePoolAutoscaling;
  return proto.google.container.v1alpha1.NodePoolAutoscaling.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.NodePoolAutoscaling} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.NodePoolAutoscaling}
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinNodeCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxNodeCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.NodePoolAutoscaling.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.NodePoolAutoscaling} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMinNodeCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMaxNodeCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.NodePoolAutoscaling} returns this
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 min_node_count = 2;
 * @return {number}
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.prototype.getMinNodeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.NodePoolAutoscaling} returns this
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.prototype.setMinNodeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 max_node_count = 3;
 * @return {number}
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.prototype.getMaxNodeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.NodePoolAutoscaling} returns this
 */
proto.google.container.v1alpha1.NodePoolAutoscaling.prototype.setMaxNodeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetLabelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetLabelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetLabelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resourceLabelsMap: (f = msg.getResourceLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    labelFingerprint: jspb.Message.getFieldWithDefault(msg, 5, ""),
    name: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetLabelsRequest}
 */
proto.google.container.v1alpha1.SetLabelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetLabelsRequest;
  return proto.google.container.v1alpha1.SetLabelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetLabelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetLabelsRequest}
 */
proto.google.container.v1alpha1.SetLabelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = msg.getResourceLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelFingerprint(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetLabelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetLabelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetLabelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResourceLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getLabelFingerprint();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLabelsRequest} returns this
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLabelsRequest} returns this
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLabelsRequest} returns this
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> resource_labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.getResourceLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.container.v1alpha1.SetLabelsRequest} returns this
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.clearResourceLabelsMap = function() {
  this.getResourceLabelsMap().clear();
  return this;};


/**
 * optional string label_fingerprint = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.getLabelFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLabelsRequest} returns this
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.setLabelFingerprint = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLabelsRequest} returns this
 */
proto.google.container.v1alpha1.SetLabelsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetLegacyAbacRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetLegacyAbacRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetLegacyAbacRequest}
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetLegacyAbacRequest;
  return proto.google.container.v1alpha1.SetLegacyAbacRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetLegacyAbacRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetLegacyAbacRequest}
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetLegacyAbacRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetLegacyAbacRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLegacyAbacRequest} returns this
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLegacyAbacRequest} returns this
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLegacyAbacRequest} returns this
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool enabled = 4;
 * @return {boolean}
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.container.v1alpha1.SetLegacyAbacRequest} returns this
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetLegacyAbacRequest} returns this
 */
proto.google.container.v1alpha1.SetLegacyAbacRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.StartIPRotationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.StartIPRotationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.StartIPRotationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.StartIPRotationRequest}
 */
proto.google.container.v1alpha1.StartIPRotationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.StartIPRotationRequest;
  return proto.google.container.v1alpha1.StartIPRotationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.StartIPRotationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.StartIPRotationRequest}
 */
proto.google.container.v1alpha1.StartIPRotationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.StartIPRotationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.StartIPRotationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.StartIPRotationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.StartIPRotationRequest} returns this
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.StartIPRotationRequest} returns this
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.StartIPRotationRequest} returns this
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.StartIPRotationRequest} returns this
 */
proto.google.container.v1alpha1.StartIPRotationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.CompleteIPRotationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.CompleteIPRotationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.CompleteIPRotationRequest}
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.CompleteIPRotationRequest;
  return proto.google.container.v1alpha1.CompleteIPRotationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.CompleteIPRotationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.CompleteIPRotationRequest}
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.CompleteIPRotationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.CompleteIPRotationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CompleteIPRotationRequest} returns this
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CompleteIPRotationRequest} returns this
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CompleteIPRotationRequest} returns this
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.CompleteIPRotationRequest} returns this
 */
proto.google.container.v1alpha1.CompleteIPRotationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.AcceleratorConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.AcceleratorConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.AcceleratorConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.AcceleratorConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    acceleratorCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    acceleratorType: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.AcceleratorConfig}
 */
proto.google.container.v1alpha1.AcceleratorConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.AcceleratorConfig;
  return proto.google.container.v1alpha1.AcceleratorConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.AcceleratorConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.AcceleratorConfig}
 */
proto.google.container.v1alpha1.AcceleratorConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAcceleratorCount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAcceleratorType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.AcceleratorConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.AcceleratorConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.AcceleratorConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.AcceleratorConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAcceleratorCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAcceleratorType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 accelerator_count = 1;
 * @return {number}
 */
proto.google.container.v1alpha1.AcceleratorConfig.prototype.getAcceleratorCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.container.v1alpha1.AcceleratorConfig} returns this
 */
proto.google.container.v1alpha1.AcceleratorConfig.prototype.setAcceleratorCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string accelerator_type = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.AcceleratorConfig.prototype.getAcceleratorType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.AcceleratorConfig} returns this
 */
proto.google.container.v1alpha1.AcceleratorConfig.prototype.setAcceleratorType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetNetworkPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetNetworkPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    networkPolicy: (f = msg.getNetworkPolicy()) && proto.google.container.v1alpha1.NetworkPolicy.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetNetworkPolicyRequest}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetNetworkPolicyRequest;
  return proto.google.container.v1alpha1.SetNetworkPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetNetworkPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetNetworkPolicyRequest}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = new proto.google.container.v1alpha1.NetworkPolicy;
      reader.readMessage(value,proto.google.container.v1alpha1.NetworkPolicy.deserializeBinaryFromReader);
      msg.setNetworkPolicy(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetNetworkPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetNetworkPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNetworkPolicy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.container.v1alpha1.NetworkPolicy.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNetworkPolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNetworkPolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNetworkPolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional NetworkPolicy network_policy = 4;
 * @return {?proto.google.container.v1alpha1.NetworkPolicy}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.getNetworkPolicy = function() {
  return /** @type{?proto.google.container.v1alpha1.NetworkPolicy} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.NetworkPolicy, 4));
};


/**
 * @param {?proto.google.container.v1alpha1.NetworkPolicy|undefined} value
 * @return {!proto.google.container.v1alpha1.SetNetworkPolicyRequest} returns this
*/
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.setNetworkPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.SetNetworkPolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.clearNetworkPolicy = function() {
  return this.setNetworkPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.hasNetworkPolicy = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetNetworkPolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetNetworkPolicyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.container.v1alpha1.SetMaintenancePolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    zone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clusterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    maintenancePolicy: (f = msg.getMaintenancePolicy()) && proto.google.container.v1alpha1.MaintenancePolicy.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.container.v1alpha1.SetMaintenancePolicyRequest;
  return proto.google.container.v1alpha1.SetMaintenancePolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterId(value);
      break;
    case 4:
      var value = new proto.google.container.v1alpha1.MaintenancePolicy;
      reader.readMessage(value,proto.google.container.v1alpha1.MaintenancePolicy.deserializeBinaryFromReader);
      msg.setMaintenancePolicy(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.container.v1alpha1.SetMaintenancePolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClusterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMaintenancePolicy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.container.v1alpha1.MaintenancePolicy.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string zone = 2;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cluster_id = 3;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.getClusterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.setClusterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MaintenancePolicy maintenance_policy = 4;
 * @return {?proto.google.container.v1alpha1.MaintenancePolicy}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.getMaintenancePolicy = function() {
  return /** @type{?proto.google.container.v1alpha1.MaintenancePolicy} */ (
    jspb.Message.getWrapperField(this, proto.google.container.v1alpha1.MaintenancePolicy, 4));
};


/**
 * @param {?proto.google.container.v1alpha1.MaintenancePolicy|undefined} value
 * @return {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest} returns this
*/
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.setMaintenancePolicy = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.clearMaintenancePolicy = function() {
  return this.setMaintenancePolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.hasMaintenancePolicy = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.container.v1alpha1.SetMaintenancePolicyRequest} returns this
 */
proto.google.container.v1alpha1.SetMaintenancePolicyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.google.container.v1alpha1);
