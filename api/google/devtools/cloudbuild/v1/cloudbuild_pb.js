// source: google/devtools/cloudbuild/v1/cloudbuild.proto
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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_httpbody_pb = require('../../../../google/api/httpbody_pb.js');
goog.object.extend(proto, google_api_httpbody_pb);
var google_cloud_audit_audit_log_pb = require('../../../../google/cloud/audit/audit_log_pb.js');
goog.object.extend(proto, google_cloud_audit_audit_log_pb);
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.ArtifactResult', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Artifacts', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Build', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Build.Status', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuildOperationMetadata', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuildOptions', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuildOptions.MachineType', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuildOptions.VerifyOption', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuildStep', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuildTrigger', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuildTrigger.BuildTemplateCase', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.BuiltImage', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.CancelBuildRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.CreateBuildRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.FileHashes', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.GetBuildRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Hash', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Hash.HashType', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.ListBuildsRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.ListBuildsResponse', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.RepoSource', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.RepoSource.RevisionCase', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Results', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.RetryBuildRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Secret', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Source', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Source.SourceCase', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.SourceProvenance', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.StorageSource', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.TimeSpan', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest', null, global);
goog.exportSymbol('proto.google.devtools.cloudbuild.v1.Volume', null, global);
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
proto.google.devtools.cloudbuild.v1.RetryBuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.RetryBuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.RetryBuildRequest.displayName = 'proto.google.devtools.cloudbuild.v1.RetryBuildRequest';
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
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.displayName = 'proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest';
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
proto.google.devtools.cloudbuild.v1.StorageSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.StorageSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.StorageSource.displayName = 'proto.google.devtools.cloudbuild.v1.StorageSource';
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
proto.google.devtools.cloudbuild.v1.RepoSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.devtools.cloudbuild.v1.RepoSource.oneofGroups_);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.RepoSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.RepoSource.displayName = 'proto.google.devtools.cloudbuild.v1.RepoSource';
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
proto.google.devtools.cloudbuild.v1.Source = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.devtools.cloudbuild.v1.Source.oneofGroups_);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.Source, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.Source.displayName = 'proto.google.devtools.cloudbuild.v1.Source';
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
proto.google.devtools.cloudbuild.v1.BuiltImage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.BuiltImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.BuiltImage.displayName = 'proto.google.devtools.cloudbuild.v1.BuiltImage';
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
proto.google.devtools.cloudbuild.v1.BuildStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.BuildStep.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.BuildStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.BuildStep.displayName = 'proto.google.devtools.cloudbuild.v1.BuildStep';
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
proto.google.devtools.cloudbuild.v1.Volume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.Volume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.Volume.displayName = 'proto.google.devtools.cloudbuild.v1.Volume';
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
proto.google.devtools.cloudbuild.v1.Results = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.Results.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.Results, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.Results.displayName = 'proto.google.devtools.cloudbuild.v1.Results';
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
proto.google.devtools.cloudbuild.v1.ArtifactResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.ArtifactResult.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.ArtifactResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.ArtifactResult.displayName = 'proto.google.devtools.cloudbuild.v1.ArtifactResult';
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
proto.google.devtools.cloudbuild.v1.Build = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.Build.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.Build, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.Build.displayName = 'proto.google.devtools.cloudbuild.v1.Build';
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
proto.google.devtools.cloudbuild.v1.Artifacts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.Artifacts.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.Artifacts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.Artifacts.displayName = 'proto.google.devtools.cloudbuild.v1.Artifacts';
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
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.displayName = 'proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects';
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
proto.google.devtools.cloudbuild.v1.TimeSpan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.TimeSpan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.TimeSpan.displayName = 'proto.google.devtools.cloudbuild.v1.TimeSpan';
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
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.BuildOperationMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.displayName = 'proto.google.devtools.cloudbuild.v1.BuildOperationMetadata';
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
proto.google.devtools.cloudbuild.v1.SourceProvenance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.SourceProvenance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.SourceProvenance.displayName = 'proto.google.devtools.cloudbuild.v1.SourceProvenance';
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
proto.google.devtools.cloudbuild.v1.FileHashes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.FileHashes.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.FileHashes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.FileHashes.displayName = 'proto.google.devtools.cloudbuild.v1.FileHashes';
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
proto.google.devtools.cloudbuild.v1.Hash = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.Hash, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.Hash.displayName = 'proto.google.devtools.cloudbuild.v1.Hash';
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
proto.google.devtools.cloudbuild.v1.Secret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.Secret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.Secret.displayName = 'proto.google.devtools.cloudbuild.v1.Secret';
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
proto.google.devtools.cloudbuild.v1.CreateBuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.CreateBuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.CreateBuildRequest.displayName = 'proto.google.devtools.cloudbuild.v1.CreateBuildRequest';
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
proto.google.devtools.cloudbuild.v1.GetBuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.GetBuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.GetBuildRequest.displayName = 'proto.google.devtools.cloudbuild.v1.GetBuildRequest';
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
proto.google.devtools.cloudbuild.v1.ListBuildsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.ListBuildsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.ListBuildsRequest.displayName = 'proto.google.devtools.cloudbuild.v1.ListBuildsRequest';
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
proto.google.devtools.cloudbuild.v1.ListBuildsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.ListBuildsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.ListBuildsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.ListBuildsResponse.displayName = 'proto.google.devtools.cloudbuild.v1.ListBuildsResponse';
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
proto.google.devtools.cloudbuild.v1.CancelBuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.CancelBuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.CancelBuildRequest.displayName = 'proto.google.devtools.cloudbuild.v1.CancelBuildRequest';
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
proto.google.devtools.cloudbuild.v1.BuildTrigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.devtools.cloudbuild.v1.BuildTrigger.oneofGroups_);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.BuildTrigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.BuildTrigger.displayName = 'proto.google.devtools.cloudbuild.v1.BuildTrigger';
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
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.displayName = 'proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest';
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
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.displayName = 'proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest';
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
proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.displayName = 'proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest';
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
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.displayName = 'proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse';
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
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.displayName = 'proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest';
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
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.displayName = 'proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest';
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
proto.google.devtools.cloudbuild.v1.BuildOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.cloudbuild.v1.BuildOptions.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.cloudbuild.v1.BuildOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.cloudbuild.v1.BuildOptions.displayName = 'proto.google.devtools.cloudbuild.v1.BuildOptions';
}



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
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.RetryBuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest}
 */
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.RetryBuildRequest;
  return proto.google.devtools.cloudbuild.v1.RetryBuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest}
 */
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setId(value);
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
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.RetryBuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RetryBuildRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.RetryBuildRequest.prototype.setId = function(value) {
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
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    triggerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    source: (f = msg.getSource()) && proto.google.devtools.cloudbuild.v1.RepoSource.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest;
  return proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTriggerId(value);
      break;
    case 3:
      var value = new proto.google.devtools.cloudbuild.v1.RepoSource;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.RepoSource.deserializeBinaryFromReader);
      msg.setSource(value);
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
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTriggerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.devtools.cloudbuild.v1.RepoSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string trigger_id = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.getTriggerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.setTriggerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RepoSource source = 3;
 * @return {?proto.google.devtools.cloudbuild.v1.RepoSource}
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.getSource = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.RepoSource} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.RepoSource, 3));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.RepoSource|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} returns this
*/
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.RunBuildTriggerRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.google.devtools.cloudbuild.v1.StorageSource.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.StorageSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.StorageSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.StorageSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: jspb.Message.getFieldWithDefault(msg, 1, ""),
    object: jspb.Message.getFieldWithDefault(msg, 2, ""),
    generation: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.devtools.cloudbuild.v1.StorageSource}
 */
proto.google.devtools.cloudbuild.v1.StorageSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.StorageSource;
  return proto.google.devtools.cloudbuild.v1.StorageSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.StorageSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.StorageSource}
 */
proto.google.devtools.cloudbuild.v1.StorageSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucket(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setObject(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGeneration(value);
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
proto.google.devtools.cloudbuild.v1.StorageSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.StorageSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.StorageSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.StorageSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGeneration();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string bucket = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.StorageSource.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.StorageSource} returns this
 */
proto.google.devtools.cloudbuild.v1.StorageSource.prototype.setBucket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string object = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.StorageSource.prototype.getObject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.StorageSource} returns this
 */
proto.google.devtools.cloudbuild.v1.StorageSource.prototype.setObject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 generation = 3;
 * @return {number}
 */
proto.google.devtools.cloudbuild.v1.StorageSource.prototype.getGeneration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.devtools.cloudbuild.v1.StorageSource} returns this
 */
proto.google.devtools.cloudbuild.v1.StorageSource.prototype.setGeneration = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.RepoSource.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.RevisionCase = {
  REVISION_NOT_SET: 0,
  BRANCH_NAME: 3,
  TAG_NAME: 4,
  COMMIT_SHA: 5
};

/**
 * @return {proto.google.devtools.cloudbuild.v1.RepoSource.RevisionCase}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.getRevisionCase = function() {
  return /** @type {proto.google.devtools.cloudbuild.v1.RepoSource.RevisionCase} */(jspb.Message.computeOneofCase(this, proto.google.devtools.cloudbuild.v1.RepoSource.oneofGroups_[0]));
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
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.RepoSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.RepoSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.RepoSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repoName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branchName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tagName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    commitSha: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dir: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.RepoSource;
  return proto.google.devtools.cloudbuild.v1.RepoSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.RepoSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRepoName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitSha(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDir(value);
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
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.RepoSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.RepoSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.RepoSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepoName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDir();
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
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource} returns this
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repo_name = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.getRepoName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource} returns this
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.setRepoName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string branch_name = 3;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.getBranchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource} returns this
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.setBranchName = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.google.devtools.cloudbuild.v1.RepoSource.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource} returns this
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.clearBranchName = function() {
  return jspb.Message.setOneofField(this, 3, proto.google.devtools.cloudbuild.v1.RepoSource.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.hasBranchName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string tag_name = 4;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.getTagName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource} returns this
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.setTagName = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.google.devtools.cloudbuild.v1.RepoSource.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource} returns this
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.clearTagName = function() {
  return jspb.Message.setOneofField(this, 4, proto.google.devtools.cloudbuild.v1.RepoSource.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.hasTagName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string commit_sha = 5;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.getCommitSha = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource} returns this
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.setCommitSha = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.google.devtools.cloudbuild.v1.RepoSource.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource} returns this
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.clearCommitSha = function() {
  return jspb.Message.setOneofField(this, 5, proto.google.devtools.cloudbuild.v1.RepoSource.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.hasCommitSha = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string dir = 7;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.getDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.RepoSource} returns this
 */
proto.google.devtools.cloudbuild.v1.RepoSource.prototype.setDir = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.Source.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.google.devtools.cloudbuild.v1.Source.SourceCase = {
  SOURCE_NOT_SET: 0,
  STORAGE_SOURCE: 2,
  REPO_SOURCE: 3
};

/**
 * @return {proto.google.devtools.cloudbuild.v1.Source.SourceCase}
 */
proto.google.devtools.cloudbuild.v1.Source.prototype.getSourceCase = function() {
  return /** @type {proto.google.devtools.cloudbuild.v1.Source.SourceCase} */(jspb.Message.computeOneofCase(this, proto.google.devtools.cloudbuild.v1.Source.oneofGroups_[0]));
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
proto.google.devtools.cloudbuild.v1.Source.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.Source.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.Source} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Source.toObject = function(includeInstance, msg) {
  var f, obj = {
    storageSource: (f = msg.getStorageSource()) && proto.google.devtools.cloudbuild.v1.StorageSource.toObject(includeInstance, f),
    repoSource: (f = msg.getRepoSource()) && proto.google.devtools.cloudbuild.v1.RepoSource.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.Source}
 */
proto.google.devtools.cloudbuild.v1.Source.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.Source;
  return proto.google.devtools.cloudbuild.v1.Source.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.Source} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.Source}
 */
proto.google.devtools.cloudbuild.v1.Source.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.google.devtools.cloudbuild.v1.StorageSource;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.StorageSource.deserializeBinaryFromReader);
      msg.setStorageSource(value);
      break;
    case 3:
      var value = new proto.google.devtools.cloudbuild.v1.RepoSource;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.RepoSource.deserializeBinaryFromReader);
      msg.setRepoSource(value);
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
proto.google.devtools.cloudbuild.v1.Source.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.Source.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.Source} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Source.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStorageSource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.devtools.cloudbuild.v1.StorageSource.serializeBinaryToWriter
    );
  }
  f = message.getRepoSource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.devtools.cloudbuild.v1.RepoSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional StorageSource storage_source = 2;
 * @return {?proto.google.devtools.cloudbuild.v1.StorageSource}
 */
proto.google.devtools.cloudbuild.v1.Source.prototype.getStorageSource = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.StorageSource} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.StorageSource, 2));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.StorageSource|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Source} returns this
*/
proto.google.devtools.cloudbuild.v1.Source.prototype.setStorageSource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.devtools.cloudbuild.v1.Source.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Source} returns this
 */
proto.google.devtools.cloudbuild.v1.Source.prototype.clearStorageSource = function() {
  return this.setStorageSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Source.prototype.hasStorageSource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RepoSource repo_source = 3;
 * @return {?proto.google.devtools.cloudbuild.v1.RepoSource}
 */
proto.google.devtools.cloudbuild.v1.Source.prototype.getRepoSource = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.RepoSource} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.RepoSource, 3));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.RepoSource|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Source} returns this
*/
proto.google.devtools.cloudbuild.v1.Source.prototype.setRepoSource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.google.devtools.cloudbuild.v1.Source.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Source} returns this
 */
proto.google.devtools.cloudbuild.v1.Source.prototype.clearRepoSource = function() {
  return this.setRepoSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Source.prototype.hasRepoSource = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.BuiltImage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.BuiltImage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    digest: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pushTiming: (f = msg.getPushTiming()) && proto.google.devtools.cloudbuild.v1.TimeSpan.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.BuiltImage}
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.BuiltImage;
  return proto.google.devtools.cloudbuild.v1.BuiltImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.BuiltImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.BuiltImage}
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDigest(value);
      break;
    case 4:
      var value = new proto.google.devtools.cloudbuild.v1.TimeSpan;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.TimeSpan.deserializeBinaryFromReader);
      msg.setPushTiming(value);
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
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.BuiltImage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.BuiltImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDigest();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPushTiming();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.devtools.cloudbuild.v1.TimeSpan.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuiltImage} returns this
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string digest = 3;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.getDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuiltImage} returns this
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.setDigest = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TimeSpan push_timing = 4;
 * @return {?proto.google.devtools.cloudbuild.v1.TimeSpan}
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.getPushTiming = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.TimeSpan} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.TimeSpan, 4));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.TimeSpan|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuiltImage} returns this
*/
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.setPushTiming = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.BuiltImage} returns this
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.clearPushTiming = function() {
  return this.setPushTiming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.BuiltImage.prototype.hasPushTiming = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.BuildStep.repeatedFields_ = [2,3,6,8,9];



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
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.BuildStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.BuildStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuildStep.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    envList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    argsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    dir: jspb.Message.getFieldWithDefault(msg, 4, ""),
    id: jspb.Message.getFieldWithDefault(msg, 5, ""),
    waitForList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    entrypoint: jspb.Message.getFieldWithDefault(msg, 7, ""),
    secretEnvList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    volumesList: jspb.Message.toObjectList(msg.getVolumesList(),
    proto.google.devtools.cloudbuild.v1.Volume.toObject, includeInstance),
    timing: (f = msg.getTiming()) && proto.google.devtools.cloudbuild.v1.TimeSpan.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.BuildStep;
  return proto.google.devtools.cloudbuild.v1.BuildStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.BuildStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addEnv(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDir(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addWaitFor(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntrypoint(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecretEnv(value);
      break;
    case 9:
      var value = new proto.google.devtools.cloudbuild.v1.Volume;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Volume.deserializeBinaryFromReader);
      msg.addVolumes(value);
      break;
    case 10:
      var value = new proto.google.devtools.cloudbuild.v1.TimeSpan;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.TimeSpan.deserializeBinaryFromReader);
      msg.setTiming(value);
      break;
    case 11:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 12:
      var value = /** @type {!proto.google.devtools.cloudbuild.v1.Build.Status} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.BuildStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.BuildStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuildStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDir();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWaitForList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getEntrypoint();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSecretEnvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getVolumesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.google.devtools.cloudbuild.v1.Volume.serializeBinaryToWriter
    );
  }
  f = message.getTiming();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.google.devtools.cloudbuild.v1.TimeSpan.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string env = 2;
 * @return {!Array<string>}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setEnvList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.addEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.clearEnvList = function() {
  return this.setEnvList([]);
};


/**
 * repeated string args = 3;
 * @return {!Array<string>}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setArgsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.addArgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};


/**
 * optional string dir = 4;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setDir = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string id = 5;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string wait_for = 6;
 * @return {!Array<string>}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getWaitForList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setWaitForList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.addWaitFor = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.clearWaitForList = function() {
  return this.setWaitForList([]);
};


/**
 * optional string entrypoint = 7;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getEntrypoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setEntrypoint = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string secret_env = 8;
 * @return {!Array<string>}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getSecretEnvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setSecretEnvList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.addSecretEnv = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.clearSecretEnvList = function() {
  return this.setSecretEnvList([]);
};


/**
 * repeated Volume volumes = 9;
 * @return {!Array<!proto.google.devtools.cloudbuild.v1.Volume>}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getVolumesList = function() {
  return /** @type{!Array<!proto.google.devtools.cloudbuild.v1.Volume>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.cloudbuild.v1.Volume, 9));
};


/**
 * @param {!Array<!proto.google.devtools.cloudbuild.v1.Volume>} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
*/
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setVolumesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.Volume=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.Volume}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.addVolumes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.devtools.cloudbuild.v1.Volume, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.clearVolumesList = function() {
  return this.setVolumesList([]);
};


/**
 * optional TimeSpan timing = 10;
 * @return {?proto.google.devtools.cloudbuild.v1.TimeSpan}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getTiming = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.TimeSpan} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.TimeSpan, 10));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.TimeSpan|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
*/
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setTiming = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.clearTiming = function() {
  return this.setTiming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.hasTiming = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Duration timeout = 11;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 11));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
*/
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Build.Status status = 12;
 * @return {!proto.google.devtools.cloudbuild.v1.Build.Status}
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.getStatus = function() {
  return /** @type {!proto.google.devtools.cloudbuild.v1.Build.Status} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.Build.Status} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildStep.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
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
proto.google.devtools.cloudbuild.v1.Volume.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.Volume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.Volume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Volume.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.Volume}
 */
proto.google.devtools.cloudbuild.v1.Volume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.Volume;
  return proto.google.devtools.cloudbuild.v1.Volume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.Volume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.Volume}
 */
proto.google.devtools.cloudbuild.v1.Volume.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPath(value);
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
proto.google.devtools.cloudbuild.v1.Volume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.Volume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.Volume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Volume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Volume.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Volume} returns this
 */
proto.google.devtools.cloudbuild.v1.Volume.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Volume.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Volume} returns this
 */
proto.google.devtools.cloudbuild.v1.Volume.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.Results.repeatedFields_ = [2,3];



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
proto.google.devtools.cloudbuild.v1.Results.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.Results.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.Results} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Results.toObject = function(includeInstance, msg) {
  var f, obj = {
    imagesList: jspb.Message.toObjectList(msg.getImagesList(),
    proto.google.devtools.cloudbuild.v1.BuiltImage.toObject, includeInstance),
    buildStepImagesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    artifactManifest: jspb.Message.getFieldWithDefault(msg, 4, ""),
    numArtifacts: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.google.devtools.cloudbuild.v1.Results}
 */
proto.google.devtools.cloudbuild.v1.Results.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.Results;
  return proto.google.devtools.cloudbuild.v1.Results.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.Results} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.Results}
 */
proto.google.devtools.cloudbuild.v1.Results.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.google.devtools.cloudbuild.v1.BuiltImage;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.BuiltImage.deserializeBinaryFromReader);
      msg.addImages(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addBuildStepImages(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setArtifactManifest(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumArtifacts(value);
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
proto.google.devtools.cloudbuild.v1.Results.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.Results.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.Results} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Results.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.devtools.cloudbuild.v1.BuiltImage.serializeBinaryToWriter
    );
  }
  f = message.getBuildStepImagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getArtifactManifest();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNumArtifacts();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * repeated BuiltImage images = 2;
 * @return {!Array<!proto.google.devtools.cloudbuild.v1.BuiltImage>}
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.getImagesList = function() {
  return /** @type{!Array<!proto.google.devtools.cloudbuild.v1.BuiltImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.cloudbuild.v1.BuiltImage, 2));
};


/**
 * @param {!Array<!proto.google.devtools.cloudbuild.v1.BuiltImage>} value
 * @return {!proto.google.devtools.cloudbuild.v1.Results} returns this
*/
proto.google.devtools.cloudbuild.v1.Results.prototype.setImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.BuiltImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.BuiltImage}
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.addImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.devtools.cloudbuild.v1.BuiltImage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Results} returns this
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};


/**
 * repeated string build_step_images = 3;
 * @return {!Array<string>}
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.getBuildStepImagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.cloudbuild.v1.Results} returns this
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.setBuildStepImagesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.Results} returns this
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.addBuildStepImages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Results} returns this
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.clearBuildStepImagesList = function() {
  return this.setBuildStepImagesList([]);
};


/**
 * optional string artifact_manifest = 4;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.getArtifactManifest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Results} returns this
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.setArtifactManifest = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 num_artifacts = 5;
 * @return {number}
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.getNumArtifacts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.devtools.cloudbuild.v1.Results} returns this
 */
proto.google.devtools.cloudbuild.v1.Results.prototype.setNumArtifacts = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.repeatedFields_ = [2];



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
proto.google.devtools.cloudbuild.v1.ArtifactResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.ArtifactResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.ArtifactResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fileHashList: jspb.Message.toObjectList(msg.getFileHashList(),
    proto.google.devtools.cloudbuild.v1.FileHashes.toObject, includeInstance)
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
 * @return {!proto.google.devtools.cloudbuild.v1.ArtifactResult}
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.ArtifactResult;
  return proto.google.devtools.cloudbuild.v1.ArtifactResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.ArtifactResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.ArtifactResult}
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 2:
      var value = new proto.google.devtools.cloudbuild.v1.FileHashes;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.FileHashes.deserializeBinaryFromReader);
      msg.addFileHash(value);
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
proto.google.devtools.cloudbuild.v1.ArtifactResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.ArtifactResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.ArtifactResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFileHashList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.devtools.cloudbuild.v1.FileHashes.serializeBinaryToWriter
    );
  }
};


/**
 * optional string location = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.ArtifactResult} returns this
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated FileHashes file_hash = 2;
 * @return {!Array<!proto.google.devtools.cloudbuild.v1.FileHashes>}
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.prototype.getFileHashList = function() {
  return /** @type{!Array<!proto.google.devtools.cloudbuild.v1.FileHashes>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.cloudbuild.v1.FileHashes, 2));
};


/**
 * @param {!Array<!proto.google.devtools.cloudbuild.v1.FileHashes>} value
 * @return {!proto.google.devtools.cloudbuild.v1.ArtifactResult} returns this
*/
proto.google.devtools.cloudbuild.v1.ArtifactResult.prototype.setFileHashList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.FileHashes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.FileHashes}
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.prototype.addFileHash = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.devtools.cloudbuild.v1.FileHashes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.ArtifactResult} returns this
 */
proto.google.devtools.cloudbuild.v1.ArtifactResult.prototype.clearFileHashList = function() {
  return this.setFileHashList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.Build.repeatedFields_ = [11,13,31,32];



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
proto.google.devtools.cloudbuild.v1.Build.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.Build.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.Build} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Build.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    statusDetail: jspb.Message.getFieldWithDefault(msg, 24, ""),
    source: (f = msg.getSource()) && proto.google.devtools.cloudbuild.v1.Source.toObject(includeInstance, f),
    stepsList: jspb.Message.toObjectList(msg.getStepsList(),
    proto.google.devtools.cloudbuild.v1.BuildStep.toObject, includeInstance),
    results: (f = msg.getResults()) && proto.google.devtools.cloudbuild.v1.Results.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    finishTime: (f = msg.getFinishTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    imagesList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    artifacts: (f = msg.getArtifacts()) && proto.google.devtools.cloudbuild.v1.Artifacts.toObject(includeInstance, f),
    logsBucket: jspb.Message.getFieldWithDefault(msg, 19, ""),
    sourceProvenance: (f = msg.getSourceProvenance()) && proto.google.devtools.cloudbuild.v1.SourceProvenance.toObject(includeInstance, f),
    buildTriggerId: jspb.Message.getFieldWithDefault(msg, 22, ""),
    options: (f = msg.getOptions()) && proto.google.devtools.cloudbuild.v1.BuildOptions.toObject(includeInstance, f),
    logUrl: jspb.Message.getFieldWithDefault(msg, 25, ""),
    substitutionsMap: (f = msg.getSubstitutionsMap()) ? f.toObject(includeInstance, undefined) : [],
    tagsList: (f = jspb.Message.getRepeatedField(msg, 31)) == null ? undefined : f,
    secretsList: jspb.Message.toObjectList(msg.getSecretsList(),
    proto.google.devtools.cloudbuild.v1.Secret.toObject, includeInstance),
    timingMap: (f = msg.getTimingMap()) ? f.toObject(includeInstance, proto.google.devtools.cloudbuild.v1.TimeSpan.toObject) : []
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
 * @return {!proto.google.devtools.cloudbuild.v1.Build}
 */
proto.google.devtools.cloudbuild.v1.Build.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.Build;
  return proto.google.devtools.cloudbuild.v1.Build.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.Build} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.Build}
 */
proto.google.devtools.cloudbuild.v1.Build.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {!proto.google.devtools.cloudbuild.v1.Build.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusDetail(value);
      break;
    case 3:
      var value = new proto.google.devtools.cloudbuild.v1.Source;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Source.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 11:
      var value = new proto.google.devtools.cloudbuild.v1.BuildStep;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.BuildStep.deserializeBinaryFromReader);
      msg.addSteps(value);
      break;
    case 10:
      var value = new proto.google.devtools.cloudbuild.v1.Results;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Results.deserializeBinaryFromReader);
      msg.setResults(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinishTime(value);
      break;
    case 12:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addImages(value);
      break;
    case 37:
      var value = new proto.google.devtools.cloudbuild.v1.Artifacts;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Artifacts.deserializeBinaryFromReader);
      msg.setArtifacts(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogsBucket(value);
      break;
    case 21:
      var value = new proto.google.devtools.cloudbuild.v1.SourceProvenance;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.SourceProvenance.deserializeBinaryFromReader);
      msg.setSourceProvenance(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildTriggerId(value);
      break;
    case 23:
      var value = new proto.google.devtools.cloudbuild.v1.BuildOptions;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.BuildOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogUrl(value);
      break;
    case 29:
      var value = msg.getSubstitutionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 32:
      var value = new proto.google.devtools.cloudbuild.v1.Secret;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Secret.deserializeBinaryFromReader);
      msg.addSecrets(value);
      break;
    case 33:
      var value = msg.getTimingMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.devtools.cloudbuild.v1.TimeSpan.deserializeBinaryFromReader, "", new proto.google.devtools.cloudbuild.v1.TimeSpan());
         });
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
proto.google.devtools.cloudbuild.v1.Build.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.Build.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.Build} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Build.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStatusDetail();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.devtools.cloudbuild.v1.Source.serializeBinaryToWriter
    );
  }
  f = message.getStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.google.devtools.cloudbuild.v1.BuildStep.serializeBinaryToWriter
    );
  }
  f = message.getResults();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.google.devtools.cloudbuild.v1.Results.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFinishTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getArtifacts();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.google.devtools.cloudbuild.v1.Artifacts.serializeBinaryToWriter
    );
  }
  f = message.getLogsBucket();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getSourceProvenance();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.google.devtools.cloudbuild.v1.SourceProvenance.serializeBinaryToWriter
    );
  }
  f = message.getBuildTriggerId();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.google.devtools.cloudbuild.v1.BuildOptions.serializeBinaryToWriter
    );
  }
  f = message.getLogUrl();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getSubstitutionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(29, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      31,
      f
    );
  }
  f = message.getSecretsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      32,
      f,
      proto.google.devtools.cloudbuild.v1.Secret.serializeBinaryToWriter
    );
  }
  f = message.getTimingMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(33, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.devtools.cloudbuild.v1.TimeSpan.serializeBinaryToWriter);
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.cloudbuild.v1.Build.Status = {
  STATUS_UNKNOWN: 0,
  QUEUED: 1,
  WORKING: 2,
  SUCCESS: 3,
  FAILURE: 4,
  INTERNAL_ERROR: 5,
  TIMEOUT: 6,
  CANCELLED: 7
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 16;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.google.devtools.cloudbuild.v1.Build.Status}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getStatus = function() {
  return /** @type {!proto.google.devtools.cloudbuild.v1.Build.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.Build.Status} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string status_detail = 24;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getStatusDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.setStatusDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional Source source = 3;
 * @return {?proto.google.devtools.cloudbuild.v1.Source}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getSource = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.Source} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.Source, 3));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.Source|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.hasSource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated BuildStep steps = 11;
 * @return {!Array<!proto.google.devtools.cloudbuild.v1.BuildStep>}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getStepsList = function() {
  return /** @type{!Array<!proto.google.devtools.cloudbuild.v1.BuildStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.cloudbuild.v1.BuildStep, 11));
};


/**
 * @param {!Array<!proto.google.devtools.cloudbuild.v1.BuildStep>} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.BuildStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.BuildStep}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.addSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.devtools.cloudbuild.v1.BuildStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearStepsList = function() {
  return this.setStepsList([]);
};


/**
 * optional Results results = 10;
 * @return {?proto.google.devtools.cloudbuild.v1.Results}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getResults = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.Results} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.Results, 10));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.Results|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setResults = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearResults = function() {
  return this.setResults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.hasResults = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp start_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp finish_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getFinishTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setFinishTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearFinishTime = function() {
  return this.setFinishTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.hasFinishTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Duration timeout = 12;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 12));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated string images = 13;
 * @return {!Array<string>}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getImagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.setImagesList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.addImages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};


/**
 * optional Artifacts artifacts = 37;
 * @return {?proto.google.devtools.cloudbuild.v1.Artifacts}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getArtifacts = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.Artifacts} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.Artifacts, 37));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.Artifacts|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setArtifacts = function(value) {
  return jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearArtifacts = function() {
  return this.setArtifacts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.hasArtifacts = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional string logs_bucket = 19;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getLogsBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.setLogsBucket = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional SourceProvenance source_provenance = 21;
 * @return {?proto.google.devtools.cloudbuild.v1.SourceProvenance}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getSourceProvenance = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.SourceProvenance} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.SourceProvenance, 21));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.SourceProvenance|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setSourceProvenance = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearSourceProvenance = function() {
  return this.setSourceProvenance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.hasSourceProvenance = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string build_trigger_id = 22;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getBuildTriggerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.setBuildTriggerId = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional BuildOptions options = 23;
 * @return {?proto.google.devtools.cloudbuild.v1.BuildOptions}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getOptions = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.BuildOptions} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.BuildOptions, 23));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.BuildOptions|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional string log_url = 25;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getLogUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.setLogUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * map<string, string> substitutions = 29;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getSubstitutionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 29, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearSubstitutionsMap = function() {
  this.getSubstitutionsMap().clear();
  return this;};


/**
 * repeated string tags = 31;
 * @return {!Array<string>}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 31));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 31, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 31, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated Secret secrets = 32;
 * @return {!Array<!proto.google.devtools.cloudbuild.v1.Secret>}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getSecretsList = function() {
  return /** @type{!Array<!proto.google.devtools.cloudbuild.v1.Secret>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.cloudbuild.v1.Secret, 32));
};


/**
 * @param {!Array<!proto.google.devtools.cloudbuild.v1.Secret>} value
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
*/
proto.google.devtools.cloudbuild.v1.Build.prototype.setSecretsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 32, value);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.Secret=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.Secret}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.addSecrets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 32, opt_value, proto.google.devtools.cloudbuild.v1.Secret, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearSecretsList = function() {
  return this.setSecretsList([]);
};


/**
 * map<string, TimeSpan> timing = 33;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.devtools.cloudbuild.v1.TimeSpan>}
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.getTimingMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.devtools.cloudbuild.v1.TimeSpan>} */ (
      jspb.Message.getMapField(this, 33, opt_noLazyCreate,
      proto.google.devtools.cloudbuild.v1.TimeSpan));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Build} returns this
 */
proto.google.devtools.cloudbuild.v1.Build.prototype.clearTimingMap = function() {
  this.getTimingMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.Artifacts.repeatedFields_ = [1];



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
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.Artifacts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.Artifacts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Artifacts.toObject = function(includeInstance, msg) {
  var f, obj = {
    imagesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    objects: (f = msg.getObjects()) && proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.Artifacts;
  return proto.google.devtools.cloudbuild.v1.Artifacts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.Artifacts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addImages(value);
      break;
    case 2:
      var value = new proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.deserializeBinaryFromReader);
      msg.setObjects(value);
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
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.Artifacts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.Artifacts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Artifacts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getObjects();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.repeatedFields_ = [2];



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
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pathsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    timing: (f = msg.getTiming()) && proto.google.devtools.cloudbuild.v1.TimeSpan.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects;
  return proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPaths(value);
      break;
    case 3:
      var value = new proto.google.devtools.cloudbuild.v1.TimeSpan;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.TimeSpan.deserializeBinaryFromReader);
      msg.setTiming(value);
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
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getTiming();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.devtools.cloudbuild.v1.TimeSpan.serializeBinaryToWriter
    );
  }
};


/**
 * optional string location = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} returns this
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string paths = 2;
 * @return {!Array<string>}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.getPathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} returns this
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.setPathsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} returns this
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.addPaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} returns this
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.clearPathsList = function() {
  return this.setPathsList([]);
};


/**
 * optional TimeSpan timing = 3;
 * @return {?proto.google.devtools.cloudbuild.v1.TimeSpan}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.getTiming = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.TimeSpan} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.TimeSpan, 3));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.TimeSpan|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} returns this
*/
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.setTiming = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} returns this
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.clearTiming = function() {
  return this.setTiming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.prototype.hasTiming = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string images = 1;
 * @return {!Array<string>}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.getImagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts} returns this
 */
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.setImagesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts} returns this
 */
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.addImages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts} returns this
 */
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};


/**
 * optional ArtifactObjects objects = 2;
 * @return {?proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.getObjects = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects, 2));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts} returns this
*/
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.setObjects = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.Artifacts} returns this
 */
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.clearObjects = function() {
  return this.setObjects(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.Artifacts.prototype.hasObjects = function() {
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
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.TimeSpan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.TimeSpan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.TimeSpan}
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.TimeSpan;
  return proto.google.devtools.cloudbuild.v1.TimeSpan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.TimeSpan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.TimeSpan}
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
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
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.TimeSpan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.TimeSpan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp start_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.TimeSpan} returns this
*/
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.TimeSpan} returns this
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.TimeSpan} returns this
*/
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.TimeSpan} returns this
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.TimeSpan.prototype.hasEndTime = function() {
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
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOperationMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    build: (f = msg.getBuild()) && proto.google.devtools.cloudbuild.v1.Build.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOperationMetadata}
 */
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.BuildOperationMetadata;
  return proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOperationMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOperationMetadata}
 */
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.cloudbuild.v1.Build;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Build.deserializeBinaryFromReader);
      msg.setBuild(value);
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
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOperationMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuild();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.devtools.cloudbuild.v1.Build.serializeBinaryToWriter
    );
  }
};


/**
 * optional Build build = 1;
 * @return {?proto.google.devtools.cloudbuild.v1.Build}
 */
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.prototype.getBuild = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.Build} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.Build, 1));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.Build|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOperationMetadata} returns this
*/
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.prototype.setBuild = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOperationMetadata} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.prototype.clearBuild = function() {
  return this.setBuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.BuildOperationMetadata.prototype.hasBuild = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.SourceProvenance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.SourceProvenance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.toObject = function(includeInstance, msg) {
  var f, obj = {
    resolvedStorageSource: (f = msg.getResolvedStorageSource()) && proto.google.devtools.cloudbuild.v1.StorageSource.toObject(includeInstance, f),
    resolvedRepoSource: (f = msg.getResolvedRepoSource()) && proto.google.devtools.cloudbuild.v1.RepoSource.toObject(includeInstance, f),
    fileHashesMap: (f = msg.getFileHashesMap()) ? f.toObject(includeInstance, proto.google.devtools.cloudbuild.v1.FileHashes.toObject) : []
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
 * @return {!proto.google.devtools.cloudbuild.v1.SourceProvenance}
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.SourceProvenance;
  return proto.google.devtools.cloudbuild.v1.SourceProvenance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.SourceProvenance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.SourceProvenance}
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.google.devtools.cloudbuild.v1.StorageSource;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.StorageSource.deserializeBinaryFromReader);
      msg.setResolvedStorageSource(value);
      break;
    case 6:
      var value = new proto.google.devtools.cloudbuild.v1.RepoSource;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.RepoSource.deserializeBinaryFromReader);
      msg.setResolvedRepoSource(value);
      break;
    case 4:
      var value = msg.getFileHashesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.devtools.cloudbuild.v1.FileHashes.deserializeBinaryFromReader, "", new proto.google.devtools.cloudbuild.v1.FileHashes());
         });
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
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.SourceProvenance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.SourceProvenance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResolvedStorageSource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.devtools.cloudbuild.v1.StorageSource.serializeBinaryToWriter
    );
  }
  f = message.getResolvedRepoSource();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.devtools.cloudbuild.v1.RepoSource.serializeBinaryToWriter
    );
  }
  f = message.getFileHashesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.devtools.cloudbuild.v1.FileHashes.serializeBinaryToWriter);
  }
};


/**
 * optional StorageSource resolved_storage_source = 3;
 * @return {?proto.google.devtools.cloudbuild.v1.StorageSource}
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.getResolvedStorageSource = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.StorageSource} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.StorageSource, 3));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.StorageSource|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.SourceProvenance} returns this
*/
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.setResolvedStorageSource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.SourceProvenance} returns this
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.clearResolvedStorageSource = function() {
  return this.setResolvedStorageSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.hasResolvedStorageSource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RepoSource resolved_repo_source = 6;
 * @return {?proto.google.devtools.cloudbuild.v1.RepoSource}
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.getResolvedRepoSource = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.RepoSource} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.RepoSource, 6));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.RepoSource|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.SourceProvenance} returns this
*/
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.setResolvedRepoSource = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.SourceProvenance} returns this
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.clearResolvedRepoSource = function() {
  return this.setResolvedRepoSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.hasResolvedRepoSource = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, FileHashes> file_hashes = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.devtools.cloudbuild.v1.FileHashes>}
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.getFileHashesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.devtools.cloudbuild.v1.FileHashes>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.google.devtools.cloudbuild.v1.FileHashes));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.SourceProvenance} returns this
 */
proto.google.devtools.cloudbuild.v1.SourceProvenance.prototype.clearFileHashesMap = function() {
  this.getFileHashesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.FileHashes.repeatedFields_ = [1];



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
proto.google.devtools.cloudbuild.v1.FileHashes.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.FileHashes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.FileHashes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.FileHashes.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileHashList: jspb.Message.toObjectList(msg.getFileHashList(),
    proto.google.devtools.cloudbuild.v1.Hash.toObject, includeInstance)
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
 * @return {!proto.google.devtools.cloudbuild.v1.FileHashes}
 */
proto.google.devtools.cloudbuild.v1.FileHashes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.FileHashes;
  return proto.google.devtools.cloudbuild.v1.FileHashes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.FileHashes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.FileHashes}
 */
proto.google.devtools.cloudbuild.v1.FileHashes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.cloudbuild.v1.Hash;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Hash.deserializeBinaryFromReader);
      msg.addFileHash(value);
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
proto.google.devtools.cloudbuild.v1.FileHashes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.FileHashes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.FileHashes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.FileHashes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileHashList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.devtools.cloudbuild.v1.Hash.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Hash file_hash = 1;
 * @return {!Array<!proto.google.devtools.cloudbuild.v1.Hash>}
 */
proto.google.devtools.cloudbuild.v1.FileHashes.prototype.getFileHashList = function() {
  return /** @type{!Array<!proto.google.devtools.cloudbuild.v1.Hash>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.cloudbuild.v1.Hash, 1));
};


/**
 * @param {!Array<!proto.google.devtools.cloudbuild.v1.Hash>} value
 * @return {!proto.google.devtools.cloudbuild.v1.FileHashes} returns this
*/
proto.google.devtools.cloudbuild.v1.FileHashes.prototype.setFileHashList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.Hash=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.Hash}
 */
proto.google.devtools.cloudbuild.v1.FileHashes.prototype.addFileHash = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.devtools.cloudbuild.v1.Hash, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.FileHashes} returns this
 */
proto.google.devtools.cloudbuild.v1.FileHashes.prototype.clearFileHashList = function() {
  return this.setFileHashList([]);
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
proto.google.devtools.cloudbuild.v1.Hash.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.Hash.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.Hash} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Hash.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: msg.getValue_asB64()
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
 * @return {!proto.google.devtools.cloudbuild.v1.Hash}
 */
proto.google.devtools.cloudbuild.v1.Hash.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.Hash;
  return proto.google.devtools.cloudbuild.v1.Hash.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.Hash} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.Hash}
 */
proto.google.devtools.cloudbuild.v1.Hash.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.devtools.cloudbuild.v1.Hash.HashType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
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
proto.google.devtools.cloudbuild.v1.Hash.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.Hash.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.Hash} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Hash.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.cloudbuild.v1.Hash.HashType = {
  NONE: 0,
  SHA256: 1,
  MD5: 2
};

/**
 * optional HashType type = 1;
 * @return {!proto.google.devtools.cloudbuild.v1.Hash.HashType}
 */
proto.google.devtools.cloudbuild.v1.Hash.prototype.getType = function() {
  return /** @type {!proto.google.devtools.cloudbuild.v1.Hash.HashType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.Hash.HashType} value
 * @return {!proto.google.devtools.cloudbuild.v1.Hash} returns this
 */
proto.google.devtools.cloudbuild.v1.Hash.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.google.devtools.cloudbuild.v1.Hash.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Hash.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.google.devtools.cloudbuild.v1.Hash.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.google.devtools.cloudbuild.v1.Hash} returns this
 */
proto.google.devtools.cloudbuild.v1.Hash.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
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
proto.google.devtools.cloudbuild.v1.Secret.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.Secret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.Secret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Secret.toObject = function(includeInstance, msg) {
  var f, obj = {
    kmsKeyName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secretEnvMap: (f = msg.getSecretEnvMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.google.devtools.cloudbuild.v1.Secret}
 */
proto.google.devtools.cloudbuild.v1.Secret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.Secret;
  return proto.google.devtools.cloudbuild.v1.Secret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.Secret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.Secret}
 */
proto.google.devtools.cloudbuild.v1.Secret.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKmsKeyName(value);
      break;
    case 3:
      var value = msg.getSecretEnvMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
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
proto.google.devtools.cloudbuild.v1.Secret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.Secret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.Secret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.Secret.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKmsKeyName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecretEnvMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional string kms_key_name = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.Secret.prototype.getKmsKeyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.Secret} returns this
 */
proto.google.devtools.cloudbuild.v1.Secret.prototype.setKmsKeyName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, bytes> secret_env = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.google.devtools.cloudbuild.v1.Secret.prototype.getSecretEnvMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.Secret} returns this
 */
proto.google.devtools.cloudbuild.v1.Secret.prototype.clearSecretEnvMap = function() {
  this.getSecretEnvMap().clear();
  return this;};





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
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.CreateBuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    build: (f = msg.getBuild()) && proto.google.devtools.cloudbuild.v1.Build.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.CreateBuildRequest;
  return proto.google.devtools.cloudbuild.v1.CreateBuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.devtools.cloudbuild.v1.Build;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Build.deserializeBinaryFromReader);
      msg.setBuild(value);
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
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.CreateBuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuild();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.devtools.cloudbuild.v1.Build.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Build build = 2;
 * @return {?proto.google.devtools.cloudbuild.v1.Build}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.prototype.getBuild = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.Build} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.Build, 2));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.Build|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} returns this
*/
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.prototype.setBuild = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.prototype.clearBuild = function() {
  return this.setBuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildRequest.prototype.hasBuild = function() {
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
proto.google.devtools.cloudbuild.v1.GetBuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.GetBuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.GetBuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.GetBuildRequest}
 */
proto.google.devtools.cloudbuild.v1.GetBuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.GetBuildRequest;
  return proto.google.devtools.cloudbuild.v1.GetBuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.GetBuildRequest}
 */
proto.google.devtools.cloudbuild.v1.GetBuildRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setId(value);
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
proto.google.devtools.cloudbuild.v1.GetBuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.GetBuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.GetBuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.GetBuildRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.GetBuildRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.GetBuildRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.GetBuildRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.GetBuildRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.GetBuildRequest.prototype.setId = function(value) {
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
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.ListBuildsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.ListBuildsRequest;
  return proto.google.devtools.cloudbuild.v1.ListBuildsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
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
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.ListBuildsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilter();
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
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 8;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.ListBuildsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.repeatedFields_ = [1];



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
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.ListBuildsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    buildsList: jspb.Message.toObjectList(msg.getBuildsList(),
    proto.google.devtools.cloudbuild.v1.Build.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsResponse}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.ListBuildsResponse;
  return proto.google.devtools.cloudbuild.v1.ListBuildsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsResponse}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.cloudbuild.v1.Build;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Build.deserializeBinaryFromReader);
      msg.addBuilds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.ListBuildsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuildsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.devtools.cloudbuild.v1.Build.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Build builds = 1;
 * @return {!Array<!proto.google.devtools.cloudbuild.v1.Build>}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.prototype.getBuildsList = function() {
  return /** @type{!Array<!proto.google.devtools.cloudbuild.v1.Build>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.cloudbuild.v1.Build, 1));
};


/**
 * @param {!Array<!proto.google.devtools.cloudbuild.v1.Build>} value
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsResponse} returns this
*/
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.prototype.setBuildsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.Build=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.Build}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.prototype.addBuilds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.devtools.cloudbuild.v1.Build, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsResponse} returns this
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.prototype.clearBuildsList = function() {
  return this.setBuildsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildsResponse} returns this
 */
proto.google.devtools.cloudbuild.v1.ListBuildsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.CancelBuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest}
 */
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.CancelBuildRequest;
  return proto.google.devtools.cloudbuild.v1.CancelBuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest}
 */
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setId(value);
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
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.CancelBuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.CancelBuildRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.CancelBuildRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.oneofGroups_ = [[4,8]];

/**
 * @enum {number}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.BuildTemplateCase = {
  BUILD_TEMPLATE_NOT_SET: 0,
  BUILD: 4,
  FILENAME: 8
};

/**
 * @return {proto.google.devtools.cloudbuild.v1.BuildTrigger.BuildTemplateCase}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.getBuildTemplateCase = function() {
  return /** @type {proto.google.devtools.cloudbuild.v1.BuildTrigger.BuildTemplateCase} */(jspb.Message.computeOneofCase(this, proto.google.devtools.cloudbuild.v1.BuildTrigger.oneofGroups_[0]));
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
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.BuildTrigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.BuildTrigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 10, ""),
    triggerTemplate: (f = msg.getTriggerTemplate()) && proto.google.devtools.cloudbuild.v1.RepoSource.toObject(includeInstance, f),
    build: (f = msg.getBuild()) && proto.google.devtools.cloudbuild.v1.Build.toObject(includeInstance, f),
    filename: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    substitutionsMap: (f = msg.getSubstitutionsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.BuildTrigger;
  return proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.BuildTrigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new proto.google.devtools.cloudbuild.v1.RepoSource;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.RepoSource.deserializeBinaryFromReader);
      msg.setTriggerTemplate(value);
      break;
    case 4:
      var value = new proto.google.devtools.cloudbuild.v1.Build;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.Build.deserializeBinaryFromReader);
      msg.setBuild(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 11:
      var value = msg.getSubstitutionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.BuildTrigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.BuildTrigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTriggerTemplate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.devtools.cloudbuild.v1.RepoSource.serializeBinaryToWriter
    );
  }
  f = message.getBuild();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.devtools.cloudbuild.v1.Build.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getSubstitutionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 10;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional RepoSource trigger_template = 7;
 * @return {?proto.google.devtools.cloudbuild.v1.RepoSource}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.getTriggerTemplate = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.RepoSource} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.RepoSource, 7));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.RepoSource|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
*/
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.setTriggerTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.clearTriggerTemplate = function() {
  return this.setTriggerTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.hasTriggerTemplate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Build build = 4;
 * @return {?proto.google.devtools.cloudbuild.v1.Build}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.getBuild = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.Build} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.Build, 4));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.Build|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
*/
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.setBuild = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.google.devtools.cloudbuild.v1.BuildTrigger.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.clearBuild = function() {
  return this.setBuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.hasBuild = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string filename = 8;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.setFilename = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.google.devtools.cloudbuild.v1.BuildTrigger.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.clearFilename = function() {
  return jspb.Message.setOneofField(this, 8, proto.google.devtools.cloudbuild.v1.BuildTrigger.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.hasFilename = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
*/
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool disabled = 9;
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * map<string, string> substitutions = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.getSubstitutionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildTrigger.prototype.clearSubstitutionsMap = function() {
  this.getSubstitutionsMap().clear();
  return this;};





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
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    trigger: (f = msg.getTrigger()) && proto.google.devtools.cloudbuild.v1.BuildTrigger.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest;
  return proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.devtools.cloudbuild.v1.BuildTrigger;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
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
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.devtools.cloudbuild.v1.BuildTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BuildTrigger trigger = 2;
 * @return {?proto.google.devtools.cloudbuild.v1.BuildTrigger}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.prototype.getTrigger = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.BuildTrigger} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.BuildTrigger, 2));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.BuildTrigger|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} returns this
*/
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.prototype.hasTrigger = function() {
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
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    triggerId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest;
  return proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTriggerId(value);
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
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTriggerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string trigger_id = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.prototype.getTriggerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.GetBuildTriggerRequest.prototype.setTriggerId = function(value) {
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
proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest}
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest;
  return proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest}
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.repeatedFields_ = [1];



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
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    triggersList: jspb.Message.toObjectList(msg.getTriggersList(),
    proto.google.devtools.cloudbuild.v1.BuildTrigger.toObject, includeInstance)
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
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse}
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse;
  return proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse}
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.cloudbuild.v1.BuildTrigger;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinaryFromReader);
      msg.addTriggers(value);
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
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.devtools.cloudbuild.v1.BuildTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BuildTrigger triggers = 1;
 * @return {!Array<!proto.google.devtools.cloudbuild.v1.BuildTrigger>}
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.prototype.getTriggersList = function() {
  return /** @type{!Array<!proto.google.devtools.cloudbuild.v1.BuildTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.cloudbuild.v1.BuildTrigger, 1));
};


/**
 * @param {!Array<!proto.google.devtools.cloudbuild.v1.BuildTrigger>} value
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse} returns this
*/
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.prototype.setTriggersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.BuildTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.BuildTrigger}
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.prototype.addTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.devtools.cloudbuild.v1.BuildTrigger, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse} returns this
 */
proto.google.devtools.cloudbuild.v1.ListBuildTriggersResponse.prototype.clearTriggersList = function() {
  return this.setTriggersList([]);
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
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    triggerId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest;
  return proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTriggerId(value);
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
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTriggerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string trigger_id = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.prototype.getTriggerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.prototype.setTriggerId = function(value) {
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
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    triggerId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    trigger: (f = msg.getTrigger()) && proto.google.devtools.cloudbuild.v1.BuildTrigger.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest;
  return proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest}
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTriggerId(value);
      break;
    case 3:
      var value = new proto.google.devtools.cloudbuild.v1.BuildTrigger;
      reader.readMessage(value,proto.google.devtools.cloudbuild.v1.BuildTrigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
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
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTriggerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.devtools.cloudbuild.v1.BuildTrigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string trigger_id = 2;
 * @return {string}
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.getTriggerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.setTriggerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BuildTrigger trigger = 3;
 * @return {?proto.google.devtools.cloudbuild.v1.BuildTrigger}
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.getTrigger = function() {
  return /** @type{?proto.google.devtools.cloudbuild.v1.BuildTrigger} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.cloudbuild.v1.BuildTrigger, 3));
};


/**
 * @param {?proto.google.devtools.cloudbuild.v1.BuildTrigger|undefined} value
 * @return {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} returns this
*/
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest} returns this
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.repeatedFields_ = [1];



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
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.cloudbuild.v1.BuildOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceProvenanceHashList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    requestedVerifyOption: jspb.Message.getFieldWithDefault(msg, 2, 0),
    machineType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    diskSizeGb: jspb.Message.getFieldWithDefault(msg, 6, 0),
    substitutionOption: jspb.Message.getFieldWithDefault(msg, 4, 0),
    logStreamingOption: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.cloudbuild.v1.BuildOptions;
  return proto.google.devtools.cloudbuild.v1.BuildOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.google.devtools.cloudbuild.v1.Hash.HashType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSourceProvenanceHash(values[i]);
      }
      break;
    case 2:
      var value = /** @type {!proto.google.devtools.cloudbuild.v1.BuildOptions.VerifyOption} */ (reader.readEnum());
      msg.setRequestedVerifyOption(value);
      break;
    case 3:
      var value = /** @type {!proto.google.devtools.cloudbuild.v1.BuildOptions.MachineType} */ (reader.readEnum());
      msg.setMachineType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDiskSizeGb(value);
      break;
    case 4:
      var value = /** @type {!proto.google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption} */ (reader.readEnum());
      msg.setSubstitutionOption(value);
      break;
    case 5:
      var value = /** @type {!proto.google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption} */ (reader.readEnum());
      msg.setLogStreamingOption(value);
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
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.cloudbuild.v1.BuildOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceProvenanceHashList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getRequestedVerifyOption();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMachineType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDiskSizeGb();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSubstitutionOption();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getLogStreamingOption();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.VerifyOption = {
  NOT_VERIFIED: 0,
  VERIFIED: 1
};

/**
 * @enum {number}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.MachineType = {
  UNSPECIFIED: 0,
  N1_HIGHCPU_8: 1,
  N1_HIGHCPU_32: 2
};

/**
 * @enum {number}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption = {
  MUST_MATCH: 0,
  ALLOW_LOOSE: 1
};

/**
 * @enum {number}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption = {
  STREAM_DEFAULT: 0,
  STREAM_ON: 1,
  STREAM_OFF: 2
};

/**
 * repeated Hash.HashType source_provenance_hash = 1;
 * @return {!Array<!proto.google.devtools.cloudbuild.v1.Hash.HashType>}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.getSourceProvenanceHashList = function() {
  return /** @type {!Array<!proto.google.devtools.cloudbuild.v1.Hash.HashType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.google.devtools.cloudbuild.v1.Hash.HashType>} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.setSourceProvenanceHashList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.Hash.HashType} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.addSourceProvenanceHash = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.clearSourceProvenanceHashList = function() {
  return this.setSourceProvenanceHashList([]);
};


/**
 * optional VerifyOption requested_verify_option = 2;
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions.VerifyOption}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.getRequestedVerifyOption = function() {
  return /** @type {!proto.google.devtools.cloudbuild.v1.BuildOptions.VerifyOption} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOptions.VerifyOption} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.setRequestedVerifyOption = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional MachineType machine_type = 3;
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions.MachineType}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.getMachineType = function() {
  return /** @type {!proto.google.devtools.cloudbuild.v1.BuildOptions.MachineType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOptions.MachineType} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.setMachineType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 disk_size_gb = 6;
 * @return {number}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.getDiskSizeGb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.setDiskSizeGb = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional SubstitutionOption substitution_option = 4;
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.getSubstitutionOption = function() {
  return /** @type {!proto.google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.setSubstitutionOption = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional LogStreamingOption log_streaming_option = 5;
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption}
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.getLogStreamingOption = function() {
  return /** @type {!proto.google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption} value
 * @return {!proto.google.devtools.cloudbuild.v1.BuildOptions} returns this
 */
proto.google.devtools.cloudbuild.v1.BuildOptions.prototype.setLogStreamingOption = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


goog.object.extend(exports, proto.google.devtools.cloudbuild.v1);
