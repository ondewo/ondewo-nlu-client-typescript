// source: google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto
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

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_devtools_containeranalysis_v1beta1_attestation_attestation_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/attestation/attestation_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_attestation_attestation_pb);
var google_devtools_containeranalysis_v1beta1_build_build_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/build/build_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_build_build_pb);
var google_devtools_containeranalysis_v1beta1_common_common_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/common/common_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_common_common_pb);
var google_devtools_containeranalysis_v1beta1_deployment_deployment_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/deployment/deployment_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_deployment_deployment_pb);
var google_devtools_containeranalysis_v1beta1_discovery_discovery_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/discovery/discovery_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_discovery_discovery_pb);
var google_devtools_containeranalysis_v1beta1_image_image_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/image/image_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_image_image_pb);
var google_devtools_containeranalysis_v1beta1_package_package_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/package/package_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_package_package_pb);
var google_devtools_containeranalysis_v1beta1_provenance_provenance_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/provenance/provenance_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_provenance_provenance_pb);
var google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb = require('../../../../../google/devtools/containeranalysis/v1beta1/vulnerability/vulnerability_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.grafeas.v1beta1.BatchCreateNotesRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.BatchCreateNotesResponse', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.BatchCreateOccurrencesRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.BatchCreateOccurrencesResponse', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.CreateNoteRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.CreateOccurrenceRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.DeleteNoteRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.DeleteOccurrenceRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.GetNoteRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.GetOccurrenceNoteRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.GetOccurrenceRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.ListNoteOccurrencesRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.ListNoteOccurrencesResponse', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.ListNotesRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.ListNotesResponse', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.ListOccurrencesRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.ListOccurrencesResponse', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.Note', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.Note.TypeCase', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.Occurrence', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.Occurrence.DetailsCase', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.Resource', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.UpdateNoteRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.UpdateOccurrenceRequest', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest', null, global);
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
proto.grafeas.v1beta1.Occurrence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.grafeas.v1beta1.Occurrence.oneofGroups_);
};
goog.inherits(proto.grafeas.v1beta1.Occurrence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.Occurrence.displayName = 'proto.grafeas.v1beta1.Occurrence';
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
proto.grafeas.v1beta1.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.Resource.displayName = 'proto.grafeas.v1beta1.Resource';
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
proto.grafeas.v1beta1.Note = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.Note.repeatedFields_, proto.grafeas.v1beta1.Note.oneofGroups_);
};
goog.inherits(proto.grafeas.v1beta1.Note, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.Note.displayName = 'proto.grafeas.v1beta1.Note';
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
proto.grafeas.v1beta1.GetOccurrenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.GetOccurrenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.GetOccurrenceRequest.displayName = 'proto.grafeas.v1beta1.GetOccurrenceRequest';
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
proto.grafeas.v1beta1.ListOccurrencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.ListOccurrencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.ListOccurrencesRequest.displayName = 'proto.grafeas.v1beta1.ListOccurrencesRequest';
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
proto.grafeas.v1beta1.ListOccurrencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.ListOccurrencesResponse.repeatedFields_, null);
};
goog.inherits(proto.grafeas.v1beta1.ListOccurrencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.ListOccurrencesResponse.displayName = 'proto.grafeas.v1beta1.ListOccurrencesResponse';
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
proto.grafeas.v1beta1.DeleteOccurrenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.DeleteOccurrenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.DeleteOccurrenceRequest.displayName = 'proto.grafeas.v1beta1.DeleteOccurrenceRequest';
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
proto.grafeas.v1beta1.CreateOccurrenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.CreateOccurrenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.CreateOccurrenceRequest.displayName = 'proto.grafeas.v1beta1.CreateOccurrenceRequest';
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
proto.grafeas.v1beta1.UpdateOccurrenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.UpdateOccurrenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.UpdateOccurrenceRequest.displayName = 'proto.grafeas.v1beta1.UpdateOccurrenceRequest';
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
proto.grafeas.v1beta1.GetNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.GetNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.GetNoteRequest.displayName = 'proto.grafeas.v1beta1.GetNoteRequest';
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
proto.grafeas.v1beta1.GetOccurrenceNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.GetOccurrenceNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.GetOccurrenceNoteRequest.displayName = 'proto.grafeas.v1beta1.GetOccurrenceNoteRequest';
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
proto.grafeas.v1beta1.ListNotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.ListNotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.ListNotesRequest.displayName = 'proto.grafeas.v1beta1.ListNotesRequest';
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
proto.grafeas.v1beta1.ListNotesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.ListNotesResponse.repeatedFields_, null);
};
goog.inherits(proto.grafeas.v1beta1.ListNotesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.ListNotesResponse.displayName = 'proto.grafeas.v1beta1.ListNotesResponse';
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
proto.grafeas.v1beta1.DeleteNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.DeleteNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.DeleteNoteRequest.displayName = 'proto.grafeas.v1beta1.DeleteNoteRequest';
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
proto.grafeas.v1beta1.CreateNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.CreateNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.CreateNoteRequest.displayName = 'proto.grafeas.v1beta1.CreateNoteRequest';
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
proto.grafeas.v1beta1.UpdateNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.UpdateNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.UpdateNoteRequest.displayName = 'proto.grafeas.v1beta1.UpdateNoteRequest';
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
proto.grafeas.v1beta1.ListNoteOccurrencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.ListNoteOccurrencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.ListNoteOccurrencesRequest.displayName = 'proto.grafeas.v1beta1.ListNoteOccurrencesRequest';
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
proto.grafeas.v1beta1.ListNoteOccurrencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.ListNoteOccurrencesResponse.repeatedFields_, null);
};
goog.inherits(proto.grafeas.v1beta1.ListNoteOccurrencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.ListNoteOccurrencesResponse.displayName = 'proto.grafeas.v1beta1.ListNoteOccurrencesResponse';
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
proto.grafeas.v1beta1.BatchCreateNotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.BatchCreateNotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.BatchCreateNotesRequest.displayName = 'proto.grafeas.v1beta1.BatchCreateNotesRequest';
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
proto.grafeas.v1beta1.BatchCreateNotesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.BatchCreateNotesResponse.repeatedFields_, null);
};
goog.inherits(proto.grafeas.v1beta1.BatchCreateNotesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.BatchCreateNotesResponse.displayName = 'proto.grafeas.v1beta1.BatchCreateNotesResponse';
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
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.repeatedFields_, null);
};
goog.inherits(proto.grafeas.v1beta1.BatchCreateOccurrencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.displayName = 'proto.grafeas.v1beta1.BatchCreateOccurrencesRequest';
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
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.repeatedFields_, null);
};
goog.inherits(proto.grafeas.v1beta1.BatchCreateOccurrencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.displayName = 'proto.grafeas.v1beta1.BatchCreateOccurrencesResponse';
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
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.displayName = 'proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest';
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
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.repeatedFields_, null);
};
goog.inherits(proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.displayName = 'proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary';
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
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.displayName = 'proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.grafeas.v1beta1.Occurrence.oneofGroups_ = [[8,9,10,11,12,13,14]];

/**
 * @enum {number}
 */
proto.grafeas.v1beta1.Occurrence.DetailsCase = {
  DETAILS_NOT_SET: 0,
  VULNERABILITY: 8,
  BUILD: 9,
  DERIVED_IMAGE: 10,
  INSTALLATION: 11,
  DEPLOYMENT: 12,
  DISCOVERED: 13,
  ATTESTATION: 14
};

/**
 * @return {proto.grafeas.v1beta1.Occurrence.DetailsCase}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getDetailsCase = function() {
  return /** @type {proto.grafeas.v1beta1.Occurrence.DetailsCase} */(jspb.Message.computeOneofCase(this, proto.grafeas.v1beta1.Occurrence.oneofGroups_[0]));
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
proto.grafeas.v1beta1.Occurrence.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.Occurrence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.Occurrence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.Occurrence.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resource: (f = msg.getResource()) && proto.grafeas.v1beta1.Resource.toObject(includeInstance, f),
    noteName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 4, 0),
    remediation: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    vulnerability: (f = msg.getVulnerability()) && google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details.toObject(includeInstance, f),
    build: (f = msg.getBuild()) && google_devtools_containeranalysis_v1beta1_build_build_pb.Details.toObject(includeInstance, f),
    derivedImage: (f = msg.getDerivedImage()) && google_devtools_containeranalysis_v1beta1_image_image_pb.Details.toObject(includeInstance, f),
    installation: (f = msg.getInstallation()) && google_devtools_containeranalysis_v1beta1_package_package_pb.Details.toObject(includeInstance, f),
    deployment: (f = msg.getDeployment()) && google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details.toObject(includeInstance, f),
    discovered: (f = msg.getDiscovered()) && google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details.toObject(includeInstance, f),
    attestation: (f = msg.getAttestation()) && google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details.toObject(includeInstance, f)
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
 * @return {!proto.grafeas.v1beta1.Occurrence}
 */
proto.grafeas.v1beta1.Occurrence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.Occurrence;
  return proto.grafeas.v1beta1.Occurrence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.Occurrence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.Occurrence}
 */
proto.grafeas.v1beta1.Occurrence.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.grafeas.v1beta1.Resource;
      reader.readMessage(value,proto.grafeas.v1beta1.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoteName(value);
      break;
    case 4:
      var value = /** @type {!proto.grafeas.v1beta1.NoteKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemediation(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 8:
      var value = new google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details.deserializeBinaryFromReader);
      msg.setVulnerability(value);
      break;
    case 9:
      var value = new google_devtools_containeranalysis_v1beta1_build_build_pb.Details;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_build_build_pb.Details.deserializeBinaryFromReader);
      msg.setBuild(value);
      break;
    case 10:
      var value = new google_devtools_containeranalysis_v1beta1_image_image_pb.Details;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_image_image_pb.Details.deserializeBinaryFromReader);
      msg.setDerivedImage(value);
      break;
    case 11:
      var value = new google_devtools_containeranalysis_v1beta1_package_package_pb.Details;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_package_package_pb.Details.deserializeBinaryFromReader);
      msg.setInstallation(value);
      break;
    case 12:
      var value = new google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details.deserializeBinaryFromReader);
      msg.setDeployment(value);
      break;
    case 13:
      var value = new google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details.deserializeBinaryFromReader);
      msg.setDiscovered(value);
      break;
    case 14:
      var value = new google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details.deserializeBinaryFromReader);
      msg.setAttestation(value);
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
proto.grafeas.v1beta1.Occurrence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.Occurrence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.Occurrence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.Occurrence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.grafeas.v1beta1.Resource.serializeBinaryToWriter
    );
  }
  f = message.getNoteName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getRemediation();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
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
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getVulnerability();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getBuild();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_devtools_containeranalysis_v1beta1_build_build_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getDerivedImage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_devtools_containeranalysis_v1beta1_image_image_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getInstallation();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_devtools_containeranalysis_v1beta1_package_package_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getDeployment();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getDiscovered();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details.serializeBinaryToWriter
    );
  }
  f = message.getAttestation();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Resource resource = 2;
 * @return {?proto.grafeas.v1beta1.Resource}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getResource = function() {
  return /** @type{?proto.grafeas.v1beta1.Resource} */ (
    jspb.Message.getWrapperField(this, proto.grafeas.v1beta1.Resource, 2));
};


/**
 * @param {?proto.grafeas.v1beta1.Resource|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasResource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string note_name = 3;
 * @return {string}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getNoteName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.setNoteName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional NoteKind kind = 4;
 * @return {!proto.grafeas.v1beta1.NoteKind}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getKind = function() {
  return /** @type {!proto.grafeas.v1beta1.NoteKind} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.grafeas.v1beta1.NoteKind} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string remediation = 5;
 * @return {string}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getRemediation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.setRemediation = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional vulnerability.Details vulnerability = 8;
 * @return {?proto.grafeas.v1beta1.vulnerability.Details}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getVulnerability = function() {
  return /** @type{?proto.grafeas.v1beta1.vulnerability.Details} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Details, 8));
};


/**
 * @param {?proto.grafeas.v1beta1.vulnerability.Details|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setVulnerability = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.grafeas.v1beta1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearVulnerability = function() {
  return this.setVulnerability(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasVulnerability = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional build.Details build = 9;
 * @return {?proto.grafeas.v1beta1.build.Details}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getBuild = function() {
  return /** @type{?proto.grafeas.v1beta1.build.Details} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_build_build_pb.Details, 9));
};


/**
 * @param {?proto.grafeas.v1beta1.build.Details|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setBuild = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.grafeas.v1beta1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearBuild = function() {
  return this.setBuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasBuild = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional image.Details derived_image = 10;
 * @return {?proto.grafeas.v1beta1.image.Details}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getDerivedImage = function() {
  return /** @type{?proto.grafeas.v1beta1.image.Details} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_image_image_pb.Details, 10));
};


/**
 * @param {?proto.grafeas.v1beta1.image.Details|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setDerivedImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.grafeas.v1beta1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearDerivedImage = function() {
  return this.setDerivedImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasDerivedImage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional package.Details installation = 11;
 * @return {?proto.grafeas.v1beta1.package.Details}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getInstallation = function() {
  return /** @type{?proto.grafeas.v1beta1.package.Details} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_package_package_pb.Details, 11));
};


/**
 * @param {?proto.grafeas.v1beta1.package.Details|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setInstallation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.grafeas.v1beta1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearInstallation = function() {
  return this.setInstallation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasInstallation = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional deployment.Details deployment = 12;
 * @return {?proto.grafeas.v1beta1.deployment.Details}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getDeployment = function() {
  return /** @type{?proto.grafeas.v1beta1.deployment.Details} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Details, 12));
};


/**
 * @param {?proto.grafeas.v1beta1.deployment.Details|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setDeployment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.grafeas.v1beta1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearDeployment = function() {
  return this.setDeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasDeployment = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional discovery.Details discovered = 13;
 * @return {?proto.grafeas.v1beta1.discovery.Details}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getDiscovered = function() {
  return /** @type{?proto.grafeas.v1beta1.discovery.Details} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Details, 13));
};


/**
 * @param {?proto.grafeas.v1beta1.discovery.Details|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setDiscovered = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.grafeas.v1beta1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearDiscovered = function() {
  return this.setDiscovered(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasDiscovered = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional attestation.Details attestation = 14;
 * @return {?proto.grafeas.v1beta1.attestation.Details}
 */
proto.grafeas.v1beta1.Occurrence.prototype.getAttestation = function() {
  return /** @type{?proto.grafeas.v1beta1.attestation.Details} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Details, 14));
};


/**
 * @param {?proto.grafeas.v1beta1.attestation.Details|undefined} value
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
*/
proto.grafeas.v1beta1.Occurrence.prototype.setAttestation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.grafeas.v1beta1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Occurrence} returns this
 */
proto.grafeas.v1beta1.Occurrence.prototype.clearAttestation = function() {
  return this.setAttestation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Occurrence.prototype.hasAttestation = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.grafeas.v1beta1.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contentHash: (f = msg.getContentHash()) && google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash.toObject(includeInstance, f)
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
 * @return {!proto.grafeas.v1beta1.Resource}
 */
proto.grafeas.v1beta1.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.Resource;
  return proto.grafeas.v1beta1.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.Resource}
 */
proto.grafeas.v1beta1.Resource.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUri(value);
      break;
    case 3:
      var value = new google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash.deserializeBinaryFromReader);
      msg.setContentHash(value);
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
proto.grafeas.v1beta1.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.Resource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContentHash();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.Resource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.Resource} returns this
 */
proto.grafeas.v1beta1.Resource.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.Resource.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.Resource} returns this
 */
proto.grafeas.v1beta1.Resource.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional provenance.Hash content_hash = 3;
 * @return {?proto.grafeas.v1beta1.provenance.Hash}
 */
proto.grafeas.v1beta1.Resource.prototype.getContentHash = function() {
  return /** @type{?proto.grafeas.v1beta1.provenance.Hash} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_provenance_provenance_pb.Hash, 3));
};


/**
 * @param {?proto.grafeas.v1beta1.provenance.Hash|undefined} value
 * @return {!proto.grafeas.v1beta1.Resource} returns this
*/
proto.grafeas.v1beta1.Resource.prototype.setContentHash = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Resource} returns this
 */
proto.grafeas.v1beta1.Resource.prototype.clearContentHash = function() {
  return this.setContentHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Resource.prototype.hasContentHash = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.Note.repeatedFields_ = [5,9];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.grafeas.v1beta1.Note.oneofGroups_ = [[10,11,12,13,14,15,16]];

/**
 * @enum {number}
 */
proto.grafeas.v1beta1.Note.TypeCase = {
  TYPE_NOT_SET: 0,
  VULNERABILITY: 10,
  BUILD: 11,
  BASE_IMAGE: 12,
  PACKAGE: 13,
  DEPLOYABLE: 14,
  DISCOVERY: 15,
  ATTESTATION_AUTHORITY: 16
};

/**
 * @return {proto.grafeas.v1beta1.Note.TypeCase}
 */
proto.grafeas.v1beta1.Note.prototype.getTypeCase = function() {
  return /** @type {proto.grafeas.v1beta1.Note.TypeCase} */(jspb.Message.computeOneofCase(this, proto.grafeas.v1beta1.Note.oneofGroups_[0]));
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
proto.grafeas.v1beta1.Note.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.Note.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.Note} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.Note.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shortDescription: jspb.Message.getFieldWithDefault(msg, 2, ""),
    longDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 4, 0),
    relatedUrlList: jspb.Message.toObjectList(msg.getRelatedUrlList(),
    google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl.toObject, includeInstance),
    expirationTime: (f = msg.getExpirationTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    relatedNoteNamesList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    vulnerability: (f = msg.getVulnerability()) && google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability.toObject(includeInstance, f),
    build: (f = msg.getBuild()) && google_devtools_containeranalysis_v1beta1_build_build_pb.Build.toObject(includeInstance, f),
    baseImage: (f = msg.getBaseImage()) && google_devtools_containeranalysis_v1beta1_image_image_pb.Basis.toObject(includeInstance, f),
    pb_package: (f = msg.getPackage()) && google_devtools_containeranalysis_v1beta1_package_package_pb.Package.toObject(includeInstance, f),
    deployable: (f = msg.getDeployable()) && google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable.toObject(includeInstance, f),
    discovery: (f = msg.getDiscovery()) && google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery.toObject(includeInstance, f),
    attestationAuthority: (f = msg.getAttestationAuthority()) && google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority.toObject(includeInstance, f)
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
 * @return {!proto.grafeas.v1beta1.Note}
 */
proto.grafeas.v1beta1.Note.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.Note;
  return proto.grafeas.v1beta1.Note.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.Note} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.Note}
 */
proto.grafeas.v1beta1.Note.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setShortDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongDescription(value);
      break;
    case 4:
      var value = /** @type {!proto.grafeas.v1beta1.NoteKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 5:
      var value = new google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl.deserializeBinaryFromReader);
      msg.addRelatedUrl(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationTime(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRelatedNoteNames(value);
      break;
    case 10:
      var value = new google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability.deserializeBinaryFromReader);
      msg.setVulnerability(value);
      break;
    case 11:
      var value = new google_devtools_containeranalysis_v1beta1_build_build_pb.Build;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_build_build_pb.Build.deserializeBinaryFromReader);
      msg.setBuild(value);
      break;
    case 12:
      var value = new google_devtools_containeranalysis_v1beta1_image_image_pb.Basis;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_image_image_pb.Basis.deserializeBinaryFromReader);
      msg.setBaseImage(value);
      break;
    case 13:
      var value = new google_devtools_containeranalysis_v1beta1_package_package_pb.Package;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_package_package_pb.Package.deserializeBinaryFromReader);
      msg.setPackage(value);
      break;
    case 14:
      var value = new google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable.deserializeBinaryFromReader);
      msg.setDeployable(value);
      break;
    case 15:
      var value = new google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery.deserializeBinaryFromReader);
      msg.setDiscovery(value);
      break;
    case 16:
      var value = new google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority;
      reader.readMessage(value,google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority.deserializeBinaryFromReader);
      msg.setAttestationAuthority(value);
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
proto.grafeas.v1beta1.Note.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.Note.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.Note} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.Note.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShortDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLongDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getRelatedUrlList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl.serializeBinaryToWriter
    );
  }
  f = message.getExpirationTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRelatedNoteNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getVulnerability();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability.serializeBinaryToWriter
    );
  }
  f = message.getBuild();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_devtools_containeranalysis_v1beta1_build_build_pb.Build.serializeBinaryToWriter
    );
  }
  f = message.getBaseImage();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_devtools_containeranalysis_v1beta1_image_image_pb.Basis.serializeBinaryToWriter
    );
  }
  f = message.getPackage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_devtools_containeranalysis_v1beta1_package_package_pb.Package.serializeBinaryToWriter
    );
  }
  f = message.getDeployable();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable.serializeBinaryToWriter
    );
  }
  f = message.getDiscovery();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery.serializeBinaryToWriter
    );
  }
  f = message.getAttestationAuthority();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.Note.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string short_description = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.Note.prototype.getShortDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.setShortDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string long_description = 3;
 * @return {string}
 */
proto.grafeas.v1beta1.Note.prototype.getLongDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.setLongDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional NoteKind kind = 4;
 * @return {!proto.grafeas.v1beta1.NoteKind}
 */
proto.grafeas.v1beta1.Note.prototype.getKind = function() {
  return /** @type {!proto.grafeas.v1beta1.NoteKind} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.grafeas.v1beta1.NoteKind} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated RelatedUrl related_url = 5;
 * @return {!Array<!proto.grafeas.v1beta1.RelatedUrl>}
 */
proto.grafeas.v1beta1.Note.prototype.getRelatedUrlList = function() {
  return /** @type{!Array<!proto.grafeas.v1beta1.RelatedUrl>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_devtools_containeranalysis_v1beta1_common_common_pb.RelatedUrl, 5));
};


/**
 * @param {!Array<!proto.grafeas.v1beta1.RelatedUrl>} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setRelatedUrlList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.grafeas.v1beta1.RelatedUrl=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.RelatedUrl}
 */
proto.grafeas.v1beta1.Note.prototype.addRelatedUrl = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.grafeas.v1beta1.RelatedUrl, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearRelatedUrlList = function() {
  return this.setRelatedUrlList([]);
};


/**
 * optional google.protobuf.Timestamp expiration_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.grafeas.v1beta1.Note.prototype.getExpirationTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setExpirationTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearExpirationTime = function() {
  return this.setExpirationTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasExpirationTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.grafeas.v1beta1.Note.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.grafeas.v1beta1.Note.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string related_note_names = 9;
 * @return {!Array<string>}
 */
proto.grafeas.v1beta1.Note.prototype.getRelatedNoteNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.setRelatedNoteNamesList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.addRelatedNoteNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearRelatedNoteNamesList = function() {
  return this.setRelatedNoteNamesList([]);
};


/**
 * optional vulnerability.Vulnerability vulnerability = 10;
 * @return {?proto.grafeas.v1beta1.vulnerability.Vulnerability}
 */
proto.grafeas.v1beta1.Note.prototype.getVulnerability = function() {
  return /** @type{?proto.grafeas.v1beta1.vulnerability.Vulnerability} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_vulnerability_vulnerability_pb.Vulnerability, 10));
};


/**
 * @param {?proto.grafeas.v1beta1.vulnerability.Vulnerability|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setVulnerability = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.grafeas.v1beta1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearVulnerability = function() {
  return this.setVulnerability(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasVulnerability = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional build.Build build = 11;
 * @return {?proto.grafeas.v1beta1.build.Build}
 */
proto.grafeas.v1beta1.Note.prototype.getBuild = function() {
  return /** @type{?proto.grafeas.v1beta1.build.Build} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_build_build_pb.Build, 11));
};


/**
 * @param {?proto.grafeas.v1beta1.build.Build|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setBuild = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.grafeas.v1beta1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearBuild = function() {
  return this.setBuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasBuild = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional image.Basis base_image = 12;
 * @return {?proto.grafeas.v1beta1.image.Basis}
 */
proto.grafeas.v1beta1.Note.prototype.getBaseImage = function() {
  return /** @type{?proto.grafeas.v1beta1.image.Basis} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_image_image_pb.Basis, 12));
};


/**
 * @param {?proto.grafeas.v1beta1.image.Basis|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setBaseImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.grafeas.v1beta1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearBaseImage = function() {
  return this.setBaseImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasBaseImage = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional package.Package package = 13;
 * @return {?proto.grafeas.v1beta1.package.Package}
 */
proto.grafeas.v1beta1.Note.prototype.getPackage = function() {
  return /** @type{?proto.grafeas.v1beta1.package.Package} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_package_package_pb.Package, 13));
};


/**
 * @param {?proto.grafeas.v1beta1.package.Package|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setPackage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.grafeas.v1beta1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearPackage = function() {
  return this.setPackage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasPackage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional deployment.Deployable deployable = 14;
 * @return {?proto.grafeas.v1beta1.deployment.Deployable}
 */
proto.grafeas.v1beta1.Note.prototype.getDeployable = function() {
  return /** @type{?proto.grafeas.v1beta1.deployment.Deployable} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_deployment_deployment_pb.Deployable, 14));
};


/**
 * @param {?proto.grafeas.v1beta1.deployment.Deployable|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setDeployable = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.grafeas.v1beta1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearDeployable = function() {
  return this.setDeployable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasDeployable = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional discovery.Discovery discovery = 15;
 * @return {?proto.grafeas.v1beta1.discovery.Discovery}
 */
proto.grafeas.v1beta1.Note.prototype.getDiscovery = function() {
  return /** @type{?proto.grafeas.v1beta1.discovery.Discovery} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_discovery_discovery_pb.Discovery, 15));
};


/**
 * @param {?proto.grafeas.v1beta1.discovery.Discovery|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setDiscovery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.grafeas.v1beta1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearDiscovery = function() {
  return this.setDiscovery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasDiscovery = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional attestation.Authority attestation_authority = 16;
 * @return {?proto.grafeas.v1beta1.attestation.Authority}
 */
proto.grafeas.v1beta1.Note.prototype.getAttestationAuthority = function() {
  return /** @type{?proto.grafeas.v1beta1.attestation.Authority} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1beta1_attestation_attestation_pb.Authority, 16));
};


/**
 * @param {?proto.grafeas.v1beta1.attestation.Authority|undefined} value
 * @return {!proto.grafeas.v1beta1.Note} returns this
*/
proto.grafeas.v1beta1.Note.prototype.setAttestationAuthority = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.grafeas.v1beta1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.Note} returns this
 */
proto.grafeas.v1beta1.Note.prototype.clearAttestationAuthority = function() {
  return this.setAttestationAuthority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.Note.prototype.hasAttestationAuthority = function() {
  return jspb.Message.getField(this, 16) != null;
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
proto.grafeas.v1beta1.GetOccurrenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.GetOccurrenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.GetOccurrenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.GetOccurrenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.grafeas.v1beta1.GetOccurrenceRequest}
 */
proto.grafeas.v1beta1.GetOccurrenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.GetOccurrenceRequest;
  return proto.grafeas.v1beta1.GetOccurrenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.GetOccurrenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.GetOccurrenceRequest}
 */
proto.grafeas.v1beta1.GetOccurrenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.grafeas.v1beta1.GetOccurrenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.GetOccurrenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.GetOccurrenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.GetOccurrenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.GetOccurrenceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.GetOccurrenceRequest} returns this
 */
proto.grafeas.v1beta1.GetOccurrenceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.ListOccurrencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.ListOccurrencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.grafeas.v1beta1.ListOccurrencesRequest}
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.ListOccurrencesRequest;
  return proto.grafeas.v1beta1.ListOccurrencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.ListOccurrencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.ListOccurrencesRequest}
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.ListOccurrencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.ListOccurrencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.grafeas.v1beta1.ListOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.ListOccurrencesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.repeatedFields_ = [1];



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
proto.grafeas.v1beta1.ListOccurrencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.ListOccurrencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.ListOccurrencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    occurrencesList: jspb.Message.toObjectList(msg.getOccurrencesList(),
    proto.grafeas.v1beta1.Occurrence.toObject, includeInstance),
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
 * @return {!proto.grafeas.v1beta1.ListOccurrencesResponse}
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.ListOccurrencesResponse;
  return proto.grafeas.v1beta1.ListOccurrencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.ListOccurrencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.ListOccurrencesResponse}
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grafeas.v1beta1.Occurrence;
      reader.readMessage(value,proto.grafeas.v1beta1.Occurrence.deserializeBinaryFromReader);
      msg.addOccurrences(value);
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
proto.grafeas.v1beta1.ListOccurrencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.ListOccurrencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.ListOccurrencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOccurrencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grafeas.v1beta1.Occurrence.serializeBinaryToWriter
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
 * repeated Occurrence occurrences = 1;
 * @return {!Array<!proto.grafeas.v1beta1.Occurrence>}
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.prototype.getOccurrencesList = function() {
  return /** @type{!Array<!proto.grafeas.v1beta1.Occurrence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grafeas.v1beta1.Occurrence, 1));
};


/**
 * @param {!Array<!proto.grafeas.v1beta1.Occurrence>} value
 * @return {!proto.grafeas.v1beta1.ListOccurrencesResponse} returns this
*/
proto.grafeas.v1beta1.ListOccurrencesResponse.prototype.setOccurrencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grafeas.v1beta1.Occurrence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.Occurrence}
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.prototype.addOccurrences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grafeas.v1beta1.Occurrence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.ListOccurrencesResponse} returns this
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.prototype.clearOccurrencesList = function() {
  return this.setOccurrencesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListOccurrencesResponse} returns this
 */
proto.grafeas.v1beta1.ListOccurrencesResponse.prototype.setNextPageToken = function(value) {
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
proto.grafeas.v1beta1.DeleteOccurrenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.DeleteOccurrenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.DeleteOccurrenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.DeleteOccurrenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.grafeas.v1beta1.DeleteOccurrenceRequest}
 */
proto.grafeas.v1beta1.DeleteOccurrenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.DeleteOccurrenceRequest;
  return proto.grafeas.v1beta1.DeleteOccurrenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.DeleteOccurrenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.DeleteOccurrenceRequest}
 */
proto.grafeas.v1beta1.DeleteOccurrenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.grafeas.v1beta1.DeleteOccurrenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.DeleteOccurrenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.DeleteOccurrenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.DeleteOccurrenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.DeleteOccurrenceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.DeleteOccurrenceRequest} returns this
 */
proto.grafeas.v1beta1.DeleteOccurrenceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.grafeas.v1beta1.CreateOccurrenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.CreateOccurrenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.CreateOccurrenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.CreateOccurrenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    occurrence: (f = msg.getOccurrence()) && proto.grafeas.v1beta1.Occurrence.toObject(includeInstance, f)
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
 * @return {!proto.grafeas.v1beta1.CreateOccurrenceRequest}
 */
proto.grafeas.v1beta1.CreateOccurrenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.CreateOccurrenceRequest;
  return proto.grafeas.v1beta1.CreateOccurrenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.CreateOccurrenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.CreateOccurrenceRequest}
 */
proto.grafeas.v1beta1.CreateOccurrenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.grafeas.v1beta1.Occurrence;
      reader.readMessage(value,proto.grafeas.v1beta1.Occurrence.deserializeBinaryFromReader);
      msg.setOccurrence(value);
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
proto.grafeas.v1beta1.CreateOccurrenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.CreateOccurrenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.CreateOccurrenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.CreateOccurrenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOccurrence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.grafeas.v1beta1.Occurrence.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.CreateOccurrenceRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.CreateOccurrenceRequest} returns this
 */
proto.grafeas.v1beta1.CreateOccurrenceRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Occurrence occurrence = 2;
 * @return {?proto.grafeas.v1beta1.Occurrence}
 */
proto.grafeas.v1beta1.CreateOccurrenceRequest.prototype.getOccurrence = function() {
  return /** @type{?proto.grafeas.v1beta1.Occurrence} */ (
    jspb.Message.getWrapperField(this, proto.grafeas.v1beta1.Occurrence, 2));
};


/**
 * @param {?proto.grafeas.v1beta1.Occurrence|undefined} value
 * @return {!proto.grafeas.v1beta1.CreateOccurrenceRequest} returns this
*/
proto.grafeas.v1beta1.CreateOccurrenceRequest.prototype.setOccurrence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.CreateOccurrenceRequest} returns this
 */
proto.grafeas.v1beta1.CreateOccurrenceRequest.prototype.clearOccurrence = function() {
  return this.setOccurrence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.CreateOccurrenceRequest.prototype.hasOccurrence = function() {
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
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.UpdateOccurrenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    occurrence: (f = msg.getOccurrence()) && proto.grafeas.v1beta1.Occurrence.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.grafeas.v1beta1.UpdateOccurrenceRequest}
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.UpdateOccurrenceRequest;
  return proto.grafeas.v1beta1.UpdateOccurrenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.UpdateOccurrenceRequest}
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.grafeas.v1beta1.Occurrence;
      reader.readMessage(value,proto.grafeas.v1beta1.Occurrence.deserializeBinaryFromReader);
      msg.setOccurrence(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.UpdateOccurrenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOccurrence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.grafeas.v1beta1.Occurrence.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} returns this
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Occurrence occurrence = 2;
 * @return {?proto.grafeas.v1beta1.Occurrence}
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.getOccurrence = function() {
  return /** @type{?proto.grafeas.v1beta1.Occurrence} */ (
    jspb.Message.getWrapperField(this, proto.grafeas.v1beta1.Occurrence, 2));
};


/**
 * @param {?proto.grafeas.v1beta1.Occurrence|undefined} value
 * @return {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} returns this
*/
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.setOccurrence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} returns this
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.clearOccurrence = function() {
  return this.setOccurrence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.hasOccurrence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} returns this
*/
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.UpdateOccurrenceRequest} returns this
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.UpdateOccurrenceRequest.prototype.hasUpdateMask = function() {
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
proto.grafeas.v1beta1.GetNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.GetNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.GetNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.GetNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.grafeas.v1beta1.GetNoteRequest}
 */
proto.grafeas.v1beta1.GetNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.GetNoteRequest;
  return proto.grafeas.v1beta1.GetNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.GetNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.GetNoteRequest}
 */
proto.grafeas.v1beta1.GetNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.grafeas.v1beta1.GetNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.GetNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.GetNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.GetNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.GetNoteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.GetNoteRequest} returns this
 */
proto.grafeas.v1beta1.GetNoteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.grafeas.v1beta1.GetOccurrenceNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.GetOccurrenceNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.GetOccurrenceNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest}
 */
proto.grafeas.v1beta1.GetOccurrenceNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.GetOccurrenceNoteRequest;
  return proto.grafeas.v1beta1.GetOccurrenceNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest}
 */
proto.grafeas.v1beta1.GetOccurrenceNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.grafeas.v1beta1.GetOccurrenceNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.GetOccurrenceNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.GetOccurrenceNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.GetOccurrenceNoteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.GetOccurrenceNoteRequest} returns this
 */
proto.grafeas.v1beta1.GetOccurrenceNoteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.grafeas.v1beta1.ListNotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.ListNotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.ListNotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListNotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.grafeas.v1beta1.ListNotesRequest}
 */
proto.grafeas.v1beta1.ListNotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.ListNotesRequest;
  return proto.grafeas.v1beta1.ListNotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.ListNotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.ListNotesRequest}
 */
proto.grafeas.v1beta1.ListNotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.grafeas.v1beta1.ListNotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.ListNotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.ListNotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListNotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.ListNotesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListNotesRequest} returns this
 */
proto.grafeas.v1beta1.ListNotesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.ListNotesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListNotesRequest} returns this
 */
proto.grafeas.v1beta1.ListNotesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.grafeas.v1beta1.ListNotesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.grafeas.v1beta1.ListNotesRequest} returns this
 */
proto.grafeas.v1beta1.ListNotesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.grafeas.v1beta1.ListNotesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListNotesRequest} returns this
 */
proto.grafeas.v1beta1.ListNotesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.ListNotesResponse.repeatedFields_ = [1];



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
proto.grafeas.v1beta1.ListNotesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.ListNotesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.ListNotesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListNotesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    notesList: jspb.Message.toObjectList(msg.getNotesList(),
    proto.grafeas.v1beta1.Note.toObject, includeInstance),
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
 * @return {!proto.grafeas.v1beta1.ListNotesResponse}
 */
proto.grafeas.v1beta1.ListNotesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.ListNotesResponse;
  return proto.grafeas.v1beta1.ListNotesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.ListNotesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.ListNotesResponse}
 */
proto.grafeas.v1beta1.ListNotesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grafeas.v1beta1.Note;
      reader.readMessage(value,proto.grafeas.v1beta1.Note.deserializeBinaryFromReader);
      msg.addNotes(value);
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
proto.grafeas.v1beta1.ListNotesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.ListNotesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.ListNotesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListNotesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grafeas.v1beta1.Note.serializeBinaryToWriter
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
 * repeated Note notes = 1;
 * @return {!Array<!proto.grafeas.v1beta1.Note>}
 */
proto.grafeas.v1beta1.ListNotesResponse.prototype.getNotesList = function() {
  return /** @type{!Array<!proto.grafeas.v1beta1.Note>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grafeas.v1beta1.Note, 1));
};


/**
 * @param {!Array<!proto.grafeas.v1beta1.Note>} value
 * @return {!proto.grafeas.v1beta1.ListNotesResponse} returns this
*/
proto.grafeas.v1beta1.ListNotesResponse.prototype.setNotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grafeas.v1beta1.Note=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.Note}
 */
proto.grafeas.v1beta1.ListNotesResponse.prototype.addNotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grafeas.v1beta1.Note, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.ListNotesResponse} returns this
 */
proto.grafeas.v1beta1.ListNotesResponse.prototype.clearNotesList = function() {
  return this.setNotesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.ListNotesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListNotesResponse} returns this
 */
proto.grafeas.v1beta1.ListNotesResponse.prototype.setNextPageToken = function(value) {
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
proto.grafeas.v1beta1.DeleteNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.DeleteNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.DeleteNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.DeleteNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.grafeas.v1beta1.DeleteNoteRequest}
 */
proto.grafeas.v1beta1.DeleteNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.DeleteNoteRequest;
  return proto.grafeas.v1beta1.DeleteNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.DeleteNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.DeleteNoteRequest}
 */
proto.grafeas.v1beta1.DeleteNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.grafeas.v1beta1.DeleteNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.DeleteNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.DeleteNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.DeleteNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.DeleteNoteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.DeleteNoteRequest} returns this
 */
proto.grafeas.v1beta1.DeleteNoteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.grafeas.v1beta1.CreateNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.CreateNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.CreateNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.CreateNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    noteId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    note: (f = msg.getNote()) && proto.grafeas.v1beta1.Note.toObject(includeInstance, f)
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
 * @return {!proto.grafeas.v1beta1.CreateNoteRequest}
 */
proto.grafeas.v1beta1.CreateNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.CreateNoteRequest;
  return proto.grafeas.v1beta1.CreateNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.CreateNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.CreateNoteRequest}
 */
proto.grafeas.v1beta1.CreateNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoteId(value);
      break;
    case 3:
      var value = new proto.grafeas.v1beta1.Note;
      reader.readMessage(value,proto.grafeas.v1beta1.Note.deserializeBinaryFromReader);
      msg.setNote(value);
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
proto.grafeas.v1beta1.CreateNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.CreateNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.CreateNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.CreateNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNoteId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNote();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grafeas.v1beta1.Note.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.CreateNoteRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.CreateNoteRequest} returns this
 */
proto.grafeas.v1beta1.CreateNoteRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string note_id = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.CreateNoteRequest.prototype.getNoteId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.CreateNoteRequest} returns this
 */
proto.grafeas.v1beta1.CreateNoteRequest.prototype.setNoteId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Note note = 3;
 * @return {?proto.grafeas.v1beta1.Note}
 */
proto.grafeas.v1beta1.CreateNoteRequest.prototype.getNote = function() {
  return /** @type{?proto.grafeas.v1beta1.Note} */ (
    jspb.Message.getWrapperField(this, proto.grafeas.v1beta1.Note, 3));
};


/**
 * @param {?proto.grafeas.v1beta1.Note|undefined} value
 * @return {!proto.grafeas.v1beta1.CreateNoteRequest} returns this
*/
proto.grafeas.v1beta1.CreateNoteRequest.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.CreateNoteRequest} returns this
 */
proto.grafeas.v1beta1.CreateNoteRequest.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.CreateNoteRequest.prototype.hasNote = function() {
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
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.UpdateNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.UpdateNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.UpdateNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    note: (f = msg.getNote()) && proto.grafeas.v1beta1.Note.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.grafeas.v1beta1.UpdateNoteRequest}
 */
proto.grafeas.v1beta1.UpdateNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.UpdateNoteRequest;
  return proto.grafeas.v1beta1.UpdateNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.UpdateNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.UpdateNoteRequest}
 */
proto.grafeas.v1beta1.UpdateNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.grafeas.v1beta1.Note;
      reader.readMessage(value,proto.grafeas.v1beta1.Note.deserializeBinaryFromReader);
      msg.setNote(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
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
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.UpdateNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.UpdateNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.UpdateNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.grafeas.v1beta1.Note.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.UpdateNoteRequest} returns this
 */
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Note note = 2;
 * @return {?proto.grafeas.v1beta1.Note}
 */
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.getNote = function() {
  return /** @type{?proto.grafeas.v1beta1.Note} */ (
    jspb.Message.getWrapperField(this, proto.grafeas.v1beta1.Note, 2));
};


/**
 * @param {?proto.grafeas.v1beta1.Note|undefined} value
 * @return {!proto.grafeas.v1beta1.UpdateNoteRequest} returns this
*/
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.UpdateNoteRequest} returns this
 */
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.hasNote = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.grafeas.v1beta1.UpdateNoteRequest} returns this
*/
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.UpdateNoteRequest} returns this
 */
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.UpdateNoteRequest.prototype.hasUpdateMask = function() {
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
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.ListNoteOccurrencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.ListNoteOccurrencesRequest;
  return proto.grafeas.v1beta1.ListNoteOccurrencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFilter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.ListNoteOccurrencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.ListNoteOccurrencesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.repeatedFields_ = [1];



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
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.ListNoteOccurrencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    occurrencesList: jspb.Message.toObjectList(msg.getOccurrencesList(),
    proto.grafeas.v1beta1.Occurrence.toObject, includeInstance),
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
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesResponse}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.ListNoteOccurrencesResponse;
  return proto.grafeas.v1beta1.ListNoteOccurrencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesResponse}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grafeas.v1beta1.Occurrence;
      reader.readMessage(value,proto.grafeas.v1beta1.Occurrence.deserializeBinaryFromReader);
      msg.addOccurrences(value);
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
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.ListNoteOccurrencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.ListNoteOccurrencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOccurrencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grafeas.v1beta1.Occurrence.serializeBinaryToWriter
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
 * repeated Occurrence occurrences = 1;
 * @return {!Array<!proto.grafeas.v1beta1.Occurrence>}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.prototype.getOccurrencesList = function() {
  return /** @type{!Array<!proto.grafeas.v1beta1.Occurrence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grafeas.v1beta1.Occurrence, 1));
};


/**
 * @param {!Array<!proto.grafeas.v1beta1.Occurrence>} value
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesResponse} returns this
*/
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.prototype.setOccurrencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grafeas.v1beta1.Occurrence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.Occurrence}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.prototype.addOccurrences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grafeas.v1beta1.Occurrence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesResponse} returns this
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.prototype.clearOccurrencesList = function() {
  return this.setOccurrencesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.ListNoteOccurrencesResponse} returns this
 */
proto.grafeas.v1beta1.ListNoteOccurrencesResponse.prototype.setNextPageToken = function(value) {
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
proto.grafeas.v1beta1.BatchCreateNotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.BatchCreateNotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.BatchCreateNotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.BatchCreateNotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    notesMap: (f = msg.getNotesMap()) ? f.toObject(includeInstance, proto.grafeas.v1beta1.Note.toObject) : []
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
 * @return {!proto.grafeas.v1beta1.BatchCreateNotesRequest}
 */
proto.grafeas.v1beta1.BatchCreateNotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.BatchCreateNotesRequest;
  return proto.grafeas.v1beta1.BatchCreateNotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.BatchCreateNotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.BatchCreateNotesRequest}
 */
proto.grafeas.v1beta1.BatchCreateNotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = msg.getNotesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.grafeas.v1beta1.Note.deserializeBinaryFromReader, "", new proto.grafeas.v1beta1.Note());
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
proto.grafeas.v1beta1.BatchCreateNotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.BatchCreateNotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.BatchCreateNotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.BatchCreateNotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNotesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.grafeas.v1beta1.Note.serializeBinaryToWriter);
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.BatchCreateNotesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.BatchCreateNotesRequest} returns this
 */
proto.grafeas.v1beta1.BatchCreateNotesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, Note> notes = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.grafeas.v1beta1.Note>}
 */
proto.grafeas.v1beta1.BatchCreateNotesRequest.prototype.getNotesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.grafeas.v1beta1.Note>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.grafeas.v1beta1.Note));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.grafeas.v1beta1.BatchCreateNotesRequest} returns this
 */
proto.grafeas.v1beta1.BatchCreateNotesRequest.prototype.clearNotesMap = function() {
  this.getNotesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.BatchCreateNotesResponse.repeatedFields_ = [1];



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
proto.grafeas.v1beta1.BatchCreateNotesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.BatchCreateNotesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.BatchCreateNotesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.BatchCreateNotesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    notesList: jspb.Message.toObjectList(msg.getNotesList(),
    proto.grafeas.v1beta1.Note.toObject, includeInstance)
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
 * @return {!proto.grafeas.v1beta1.BatchCreateNotesResponse}
 */
proto.grafeas.v1beta1.BatchCreateNotesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.BatchCreateNotesResponse;
  return proto.grafeas.v1beta1.BatchCreateNotesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.BatchCreateNotesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.BatchCreateNotesResponse}
 */
proto.grafeas.v1beta1.BatchCreateNotesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grafeas.v1beta1.Note;
      reader.readMessage(value,proto.grafeas.v1beta1.Note.deserializeBinaryFromReader);
      msg.addNotes(value);
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
proto.grafeas.v1beta1.BatchCreateNotesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.BatchCreateNotesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.BatchCreateNotesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.BatchCreateNotesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grafeas.v1beta1.Note.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Note notes = 1;
 * @return {!Array<!proto.grafeas.v1beta1.Note>}
 */
proto.grafeas.v1beta1.BatchCreateNotesResponse.prototype.getNotesList = function() {
  return /** @type{!Array<!proto.grafeas.v1beta1.Note>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grafeas.v1beta1.Note, 1));
};


/**
 * @param {!Array<!proto.grafeas.v1beta1.Note>} value
 * @return {!proto.grafeas.v1beta1.BatchCreateNotesResponse} returns this
*/
proto.grafeas.v1beta1.BatchCreateNotesResponse.prototype.setNotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grafeas.v1beta1.Note=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.Note}
 */
proto.grafeas.v1beta1.BatchCreateNotesResponse.prototype.addNotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grafeas.v1beta1.Note, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.BatchCreateNotesResponse} returns this
 */
proto.grafeas.v1beta1.BatchCreateNotesResponse.prototype.clearNotesList = function() {
  return this.setNotesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.repeatedFields_ = [2];



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
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    occurrencesList: jspb.Message.toObjectList(msg.getOccurrencesList(),
    proto.grafeas.v1beta1.Occurrence.toObject, includeInstance)
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
 * @return {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest}
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.BatchCreateOccurrencesRequest;
  return proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest}
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.grafeas.v1beta1.Occurrence;
      reader.readMessage(value,proto.grafeas.v1beta1.Occurrence.deserializeBinaryFromReader);
      msg.addOccurrences(value);
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
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOccurrencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.grafeas.v1beta1.Occurrence.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Occurrence occurrences = 2;
 * @return {!Array<!proto.grafeas.v1beta1.Occurrence>}
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.prototype.getOccurrencesList = function() {
  return /** @type{!Array<!proto.grafeas.v1beta1.Occurrence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grafeas.v1beta1.Occurrence, 2));
};


/**
 * @param {!Array<!proto.grafeas.v1beta1.Occurrence>} value
 * @return {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} returns this
*/
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.prototype.setOccurrencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.grafeas.v1beta1.Occurrence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.Occurrence}
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.prototype.addOccurrences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.grafeas.v1beta1.Occurrence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.BatchCreateOccurrencesRequest} returns this
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesRequest.prototype.clearOccurrencesList = function() {
  return this.setOccurrencesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.repeatedFields_ = [1];



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
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    occurrencesList: jspb.Message.toObjectList(msg.getOccurrencesList(),
    proto.grafeas.v1beta1.Occurrence.toObject, includeInstance)
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
 * @return {!proto.grafeas.v1beta1.BatchCreateOccurrencesResponse}
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.BatchCreateOccurrencesResponse;
  return proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.BatchCreateOccurrencesResponse}
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grafeas.v1beta1.Occurrence;
      reader.readMessage(value,proto.grafeas.v1beta1.Occurrence.deserializeBinaryFromReader);
      msg.addOccurrences(value);
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
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.BatchCreateOccurrencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOccurrencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grafeas.v1beta1.Occurrence.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Occurrence occurrences = 1;
 * @return {!Array<!proto.grafeas.v1beta1.Occurrence>}
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.prototype.getOccurrencesList = function() {
  return /** @type{!Array<!proto.grafeas.v1beta1.Occurrence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grafeas.v1beta1.Occurrence, 1));
};


/**
 * @param {!Array<!proto.grafeas.v1beta1.Occurrence>} value
 * @return {!proto.grafeas.v1beta1.BatchCreateOccurrencesResponse} returns this
*/
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.prototype.setOccurrencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grafeas.v1beta1.Occurrence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.Occurrence}
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.prototype.addOccurrences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grafeas.v1beta1.Occurrence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.BatchCreateOccurrencesResponse} returns this
 */
proto.grafeas.v1beta1.BatchCreateOccurrencesResponse.prototype.clearOccurrencesList = function() {
  return this.setOccurrencesList([]);
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
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest}
 */
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest;
  return proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest}
 */
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
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
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest} returns this
 */
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest} returns this
 */
proto.grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.repeatedFields_ = [1];



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
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    countsList: jspb.Message.toObjectList(msg.getCountsList(),
    proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.toObject, includeInstance)
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
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary;
  return proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest;
      reader.readMessage(value,proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.deserializeBinaryFromReader);
      msg.addCounts(value);
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
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.serializeBinaryToWriter
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
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resource: (f = msg.getResource()) && proto.grafeas.v1beta1.Resource.toObject(includeInstance, f),
    severity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fixableCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest;
  return proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grafeas.v1beta1.Resource;
      reader.readMessage(value,proto.grafeas.v1beta1.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 2:
      var value = /** @type {!proto.grafeas.v1beta1.vulnerability.Severity} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFixableCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
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
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grafeas.v1beta1.Resource.serializeBinaryToWriter
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFixableCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional Resource resource = 1;
 * @return {?proto.grafeas.v1beta1.Resource}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.getResource = function() {
  return /** @type{?proto.grafeas.v1beta1.Resource} */ (
    jspb.Message.getWrapperField(this, proto.grafeas.v1beta1.Resource, 1));
};


/**
 * @param {?proto.grafeas.v1beta1.Resource|undefined} value
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest} returns this
*/
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest} returns this
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.hasResource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional vulnerability.Severity severity = 2;
 * @return {!proto.grafeas.v1beta1.vulnerability.Severity}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.getSeverity = function() {
  return /** @type {!proto.grafeas.v1beta1.vulnerability.Severity} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.grafeas.v1beta1.vulnerability.Severity} value
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest} returns this
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 fixable_count = 3;
 * @return {number}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.getFixableCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest} returns this
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.setFixableCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 total_count = 4;
 * @return {number}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest} returns this
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated FixableTotalByDigest counts = 1;
 * @return {!Array<!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest>}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.prototype.getCountsList = function() {
  return /** @type{!Array<!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest, 1));
};


/**
 * @param {!Array<!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest>} value
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary} returns this
*/
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.prototype.setCountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest}
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.prototype.addCounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary} returns this
 */
proto.grafeas.v1beta1.VulnerabilityOccurrencesSummary.prototype.clearCountsList = function() {
  return this.setCountsList([]);
};


goog.object.extend(exports, proto.grafeas.v1beta1);
