// source: google/devtools/containeranalysis/v1alpha1/containeranalysis.proto
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
var google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/bill_of_materials_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb);
var google_devtools_containeranalysis_v1alpha1_image_basis_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/image_basis_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1alpha1_image_basis_pb);
var google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/package_vulnerability_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb);
var google_devtools_containeranalysis_v1alpha1_provenance_pb = require('../../../../google/devtools/containeranalysis/v1alpha1/provenance_pb.js');
goog.object.extend(proto, google_devtools_containeranalysis_v1alpha1_provenance_pb);
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
goog.object.extend(proto, google_iam_v1_iam_policy_pb);
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
goog.object.extend(proto, google_iam_v1_policy_pb);
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.SignatureCase', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.BuildDetails', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.BuildSignature', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.KeyType', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.BuildType', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Deployable', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.Platform', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Discovery', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.AnalysisStatus', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Note', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Note.Kind', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Note.NoteTypeCase', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Occurrence', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Occurrence.DetailsCase', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.ContentType', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.KeyIdCase', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.Resource', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.ScanConfig', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest', null, global);
goog.exportSymbol('proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest', null, global);
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
proto.google.devtools.containeranalysis.v1alpha1.Occurrence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.Occurrence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.Occurrence';
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
proto.google.devtools.containeranalysis.v1alpha1.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.Resource.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.Resource';
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
proto.google.devtools.containeranalysis.v1alpha1.Note = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.containeranalysis.v1alpha1.Note.repeatedFields_, proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.Note, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.Note.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.Note';
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
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl';
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
proto.google.devtools.containeranalysis.v1alpha1.Deployable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.containeranalysis.v1alpha1.Deployable.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.Deployable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.Deployable.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.Deployable';
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
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment';
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
proto.google.devtools.containeranalysis.v1alpha1.Discovery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.Discovery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.Discovery.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.Discovery';
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
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered';
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
proto.google.devtools.containeranalysis.v1alpha1.BuildType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.BuildType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.BuildType.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.BuildType';
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
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.BuildSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.BuildSignature';
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
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.oneofGroups_);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation';
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
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority';
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
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint';
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
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.oneofGroups_);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation';
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
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.BuildDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.BuildDetails';
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
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.ScanConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.ScanConfig';
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
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse';
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
proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse';
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
proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse';
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
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata';
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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse';
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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount';
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
proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest';
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
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse';
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.displayName = 'proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_ = [[8,7,11,12,14,15,16]];

/**
 * @enum {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.DetailsCase = {
  DETAILS_NOT_SET: 0,
  VULNERABILITY_DETAILS: 8,
  BUILD_DETAILS: 7,
  DERIVED_IMAGE: 11,
  INSTALLATION: 12,
  DEPLOYMENT: 14,
  DISCOVERED: 15,
  ATTESTATION: 16
};

/**
 * @return {proto.google.devtools.containeranalysis.v1alpha1.Occurrence.DetailsCase}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getDetailsCase = function() {
  return /** @type {proto.google.devtools.containeranalysis.v1alpha1.Occurrence.DetailsCase} */(jspb.Message.computeOneofCase(this, proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_[0]));
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
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.Occurrence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resourceUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    resource: (f = msg.getResource()) && proto.google.devtools.containeranalysis.v1alpha1.Resource.toObject(includeInstance, f),
    noteName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 6, 0),
    vulnerabilityDetails: (f = msg.getVulnerabilityDetails()) && google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails.toObject(includeInstance, f),
    buildDetails: (f = msg.getBuildDetails()) && proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.toObject(includeInstance, f),
    derivedImage: (f = msg.getDerivedImage()) && google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived.toObject(includeInstance, f),
    installation: (f = msg.getInstallation()) && google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation.toObject(includeInstance, f),
    deployment: (f = msg.getDeployment()) && proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.toObject(includeInstance, f),
    discovered: (f = msg.getDiscovered()) && proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.toObject(includeInstance, f),
    attestation: (f = msg.getAttestation()) && proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.toObject(includeInstance, f),
    remediation: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.Occurrence;
  return proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setResourceUrl(value);
      break;
    case 17:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Resource;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoteName(value);
      break;
    case 6:
      var value = /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 8:
      var value = new google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails;
      reader.readMessage(value,google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails.deserializeBinaryFromReader);
      msg.setVulnerabilityDetails(value);
      break;
    case 7:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.BuildDetails;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.deserializeBinaryFromReader);
      msg.setBuildDetails(value);
      break;
    case 11:
      var value = new google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived;
      reader.readMessage(value,google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived.deserializeBinaryFromReader);
      msg.setDerivedImage(value);
      break;
    case 12:
      var value = new google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation;
      reader.readMessage(value,google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation.deserializeBinaryFromReader);
      msg.setInstallation(value);
      break;
    case 14:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.deserializeBinaryFromReader);
      msg.setDeployment(value);
      break;
    case 15:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.deserializeBinaryFromReader);
      msg.setDiscovered(value);
      break;
    case 16:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.deserializeBinaryFromReader);
      msg.setAttestation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemediation(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.Occurrence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Resource.serializeBinaryToWriter
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
      6,
      f
    );
  }
  f = message.getVulnerabilityDetails();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails.serializeBinaryToWriter
    );
  }
  f = message.getBuildDetails();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.serializeBinaryToWriter
    );
  }
  f = message.getDerivedImage();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived.serializeBinaryToWriter
    );
  }
  f = message.getInstallation();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation.serializeBinaryToWriter
    );
  }
  f = message.getDeployment();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.serializeBinaryToWriter
    );
  }
  f = message.getDiscovered();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.serializeBinaryToWriter
    );
  }
  f = message.getAttestation();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.serializeBinaryToWriter
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
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource_url = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getResourceUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setResourceUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Resource resource = 17;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Resource}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getResource = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Resource} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Resource, 17));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Resource|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasResource = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string note_name = 3;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getNoteName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setNoteName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Note.Kind kind = 6;
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getKind = function() {
  return /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional VulnerabilityType.VulnerabilityDetails vulnerability_details = 8;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType.VulnerabilityDetails}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getVulnerabilityDetails = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType.VulnerabilityDetails} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.VulnerabilityDetails, 8));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType.VulnerabilityDetails|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setVulnerabilityDetails = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearVulnerabilityDetails = function() {
  return this.setVulnerabilityDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasVulnerabilityDetails = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional BuildDetails build_details = 7;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.BuildDetails}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getBuildDetails = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.BuildDetails} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.BuildDetails, 7));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.BuildDetails|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setBuildDetails = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearBuildDetails = function() {
  return this.setBuildDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasBuildDetails = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DockerImage.Derived derived_image = 11;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.DockerImage.Derived}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getDerivedImage = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.DockerImage.Derived} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Derived, 11));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.DockerImage.Derived|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setDerivedImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearDerivedImage = function() {
  return this.setDerivedImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasDerivedImage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional PackageManager.Installation installation = 12;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.PackageManager.Installation}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getInstallation = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.PackageManager.Installation} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Installation, 12));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.PackageManager.Installation|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setInstallation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearInstallation = function() {
  return this.setInstallation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasInstallation = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Deployable.Deployment deployment = 14;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getDeployment = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment, 14));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setDeployment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearDeployment = function() {
  return this.setDeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasDeployment = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Discovery.Discovered discovered = 15;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getDiscovered = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered, 15));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setDiscovered = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearDiscovered = function() {
  return this.setDiscovered(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasDiscovered = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional AttestationAuthority.Attestation attestation = 16;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getAttestation = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation, 16));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setAttestation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.google.devtools.containeranalysis.v1alpha1.Occurrence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearAttestation = function() {
  return this.setAttestation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasAttestation = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string remediation = 5;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getRemediation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setRemediation = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Occurrence.prototype.hasUpdateTime = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contentHash: (f = msg.getContentHash()) && google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Resource}
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.Resource;
  return proto.google.devtools.containeranalysis.v1alpha1.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Resource}
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash;
      reader.readMessage(value,google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash.deserializeBinaryFromReader);
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
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.serializeBinaryToWriter = function(message, writer) {
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
      google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Resource} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Resource} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Hash content_hash = 3;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Hash}
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.getContentHash = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Hash} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1alpha1_provenance_pb.Hash, 3));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Hash|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Resource} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.setContentHash = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Resource} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.clearContentHash = function() {
  return this.setContentHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Resource.prototype.hasContentHash = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.repeatedFields_ = [7];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_ = [[6,8,13,14,17,18,19]];

/**
 * @enum {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.NoteTypeCase = {
  NOTE_TYPE_NOT_SET: 0,
  VULNERABILITY_TYPE: 6,
  BUILD_TYPE: 8,
  BASE_IMAGE: 13,
  PACKAGE: 14,
  DEPLOYABLE: 17,
  DISCOVERY: 18,
  ATTESTATION_AUTHORITY: 19
};

/**
 * @return {proto.google.devtools.containeranalysis.v1alpha1.Note.NoteTypeCase}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getNoteTypeCase = function() {
  return /** @type {proto.google.devtools.containeranalysis.v1alpha1.Note.NoteTypeCase} */(jspb.Message.computeOneofCase(this, proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_[0]));
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
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.Note.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shortDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    longDescription: jspb.Message.getFieldWithDefault(msg, 4, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 9, 0),
    vulnerabilityType: (f = msg.getVulnerabilityType()) && google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.toObject(includeInstance, f),
    buildType: (f = msg.getBuildType()) && proto.google.devtools.containeranalysis.v1alpha1.BuildType.toObject(includeInstance, f),
    baseImage: (f = msg.getBaseImage()) && google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis.toObject(includeInstance, f),
    pb_package: (f = msg.getPackage()) && google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package.toObject(includeInstance, f),
    deployable: (f = msg.getDeployable()) && proto.google.devtools.containeranalysis.v1alpha1.Deployable.toObject(includeInstance, f),
    discovery: (f = msg.getDiscovery()) && proto.google.devtools.containeranalysis.v1alpha1.Discovery.toObject(includeInstance, f),
    attestationAuthority: (f = msg.getAttestationAuthority()) && proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.toObject(includeInstance, f),
    relatedUrlList: jspb.Message.toObjectList(msg.getRelatedUrlList(),
    proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.toObject, includeInstance),
    expirationTime: (f = msg.getExpirationTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.Note;
  return proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setShortDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongDescription(value);
      break;
    case 9:
      var value = /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 6:
      var value = new google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType;
      reader.readMessage(value,google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.deserializeBinaryFromReader);
      msg.setVulnerabilityType(value);
      break;
    case 8:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.BuildType;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.BuildType.deserializeBinaryFromReader);
      msg.setBuildType(value);
      break;
    case 13:
      var value = new google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis;
      reader.readMessage(value,google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis.deserializeBinaryFromReader);
      msg.setBaseImage(value);
      break;
    case 14:
      var value = new google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package;
      reader.readMessage(value,google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package.deserializeBinaryFromReader);
      msg.setPackage(value);
      break;
    case 17:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Deployable;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Deployable.deserializeBinaryFromReader);
      msg.setDeployable(value);
      break;
    case 18:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Discovery;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Discovery.deserializeBinaryFromReader);
      msg.setDiscovery(value);
      break;
    case 19:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.deserializeBinaryFromReader);
      msg.setAttestationAuthority(value);
      break;
    case 7:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.deserializeBinaryFromReader);
      msg.addRelatedUrl(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpirationTime(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.Note.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.serializeBinaryToWriter = function(message, writer) {
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
      3,
      f
    );
  }
  f = message.getLongDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getVulnerabilityType();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType.serializeBinaryToWriter
    );
  }
  f = message.getBuildType();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.BuildType.serializeBinaryToWriter
    );
  }
  f = message.getBaseImage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis.serializeBinaryToWriter
    );
  }
  f = message.getPackage();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package.serializeBinaryToWriter
    );
  }
  f = message.getDeployable();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Deployable.serializeBinaryToWriter
    );
  }
  f = message.getDiscovery();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Discovery.serializeBinaryToWriter
    );
  }
  f = message.getAttestationAuthority();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.serializeBinaryToWriter
    );
  }
  f = message.getRelatedUrlList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.serializeBinaryToWriter
    );
  }
  f = message.getExpirationTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.Kind = {
  KIND_UNSPECIFIED: 0,
  PACKAGE_VULNERABILITY: 2,
  BUILD_DETAILS: 3,
  IMAGE_BASIS: 4,
  PACKAGE_MANAGER: 5,
  DEPLOYABLE: 6,
  DISCOVERY: 7,
  ATTESTATION_AUTHORITY: 8
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
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    label: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl;
  return proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
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
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string short_description = 3;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getShortDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setShortDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string long_description = 4;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getLongDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setLongDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Kind kind = 9;
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getKind = function() {
  return /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional VulnerabilityType vulnerability_type = 6;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getVulnerabilityType = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1alpha1_package_vulnerability_pb.VulnerabilityType, 6));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setVulnerabilityType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearVulnerabilityType = function() {
  return this.setVulnerabilityType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasVulnerabilityType = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional BuildType build_type = 8;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.BuildType}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getBuildType = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.BuildType} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.BuildType, 8));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.BuildType|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setBuildType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearBuildType = function() {
  return this.setBuildType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasBuildType = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DockerImage.Basis base_image = 13;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.DockerImage.Basis}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getBaseImage = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.DockerImage.Basis} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1alpha1_image_basis_pb.DockerImage.Basis, 13));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.DockerImage.Basis|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setBaseImage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearBaseImage = function() {
  return this.setBaseImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasBaseImage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional PackageManager.Package package = 14;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.PackageManager.Package}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getPackage = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.PackageManager.Package} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1alpha1_bill_of_materials_pb.PackageManager.Package, 14));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.PackageManager.Package|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setPackage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearPackage = function() {
  return this.setPackage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasPackage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Deployable deployable = 17;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Deployable}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getDeployable = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Deployable} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Deployable, 17));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Deployable|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setDeployable = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearDeployable = function() {
  return this.setDeployable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasDeployable = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Discovery discovery = 18;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Discovery}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getDiscovery = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Discovery} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Discovery, 18));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Discovery|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setDiscovery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearDiscovery = function() {
  return this.setDiscovery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasDiscovery = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional AttestationAuthority attestation_authority = 19;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getAttestationAuthority = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority, 19));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setAttestationAuthority = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.google.devtools.containeranalysis.v1alpha1.Note.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearAttestationAuthority = function() {
  return this.setAttestationAuthority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasAttestationAuthority = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * repeated RelatedUrl related_url = 7;
 * @return {!Array<!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl>}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getRelatedUrlList = function() {
  return /** @type{!Array<!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl, 7));
};


/**
 * @param {!Array<!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl>} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setRelatedUrlList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.addRelatedUrl = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.devtools.containeranalysis.v1alpha1.Note.RelatedUrl, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearRelatedUrlList = function() {
  return this.setRelatedUrlList([]);
};


/**
 * optional google.protobuf.Timestamp expiration_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getExpirationTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setExpirationTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearExpirationTime = function() {
  return this.setExpirationTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasExpirationTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Note.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.repeatedFields_ = [1];



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
proto.google.devtools.containeranalysis.v1alpha1.Deployable.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.Deployable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Deployable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceUriList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.Deployable;
  return proto.google.devtools.containeranalysis.v1alpha1.Deployable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Deployable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addResourceUri(value);
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
proto.google.devtools.containeranalysis.v1alpha1.Deployable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.Deployable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Deployable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceUriList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.repeatedFields_ = [6];



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
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.toObject = function(includeInstance, msg) {
  var f, obj = {
    userEmail: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deployTime: (f = msg.getDeployTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    undeployTime: (f = msg.getUndeployTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    config: jspb.Message.getFieldWithDefault(msg, 8, ""),
    address: jspb.Message.getFieldWithDefault(msg, 5, ""),
    resourceUriList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    platform: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment;
  return proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserEmail(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeployTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUndeployTime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfig(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addResourceUri(value);
      break;
    case 7:
      var value = /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.Platform} */ (reader.readEnum());
      msg.setPlatform(value);
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
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeployTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUndeployTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResourceUriList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getPlatform();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.Platform = {
  PLATFORM_UNSPECIFIED: 0,
  GKE: 1,
  FLEX: 2,
  CUSTOM: 3
};

/**
 * optional string user_email = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.getUserEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.setUserEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp deploy_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.getDeployTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.setDeployTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.clearDeployTime = function() {
  return this.setDeployTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.hasDeployTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp undeploy_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.getUndeployTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.setUndeployTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.clearUndeployTime = function() {
  return this.setUndeployTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.hasUndeployTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string config = 8;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.getConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.setConfig = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string address = 5;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string resource_uri = 6;
 * @return {!Array<string>}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.getResourceUriList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.setResourceUriList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.addResourceUri = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.clearResourceUriList = function() {
  return this.setResourceUriList([]);
};


/**
 * optional Platform platform = 7;
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.Platform}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.getPlatform = function() {
  return /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.Platform} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.Platform} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.Deployment.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated string resource_uri = 1;
 * @return {!Array<string>}
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.prototype.getResourceUriList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.prototype.setResourceUriList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.prototype.addResourceUri = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Deployable} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Deployable.prototype.clearResourceUriList = function() {
  return this.setResourceUriList([]);
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
proto.google.devtools.containeranalysis.v1alpha1.Discovery.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.Discovery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Discovery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.toObject = function(includeInstance, msg) {
  var f, obj = {
    analysisKind: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.Discovery;
  return proto.google.devtools.containeranalysis.v1alpha1.Discovery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Discovery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} */ (reader.readEnum());
      msg.setAnalysisKind(value);
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
proto.google.devtools.containeranalysis.v1alpha1.Discovery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.Discovery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Discovery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnalysisKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
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
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: (f = msg.getOperation()) && google_longrunning_operations_pb.Operation.toObject(includeInstance, f),
    analysisStatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
    analysisStatusError: (f = msg.getAnalysisStatusError()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered;
  return proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_longrunning_operations_pb.Operation;
      reader.readMessage(value,google_longrunning_operations_pb.Operation.deserializeBinaryFromReader);
      msg.setOperation(value);
      break;
    case 5:
      var value = /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.AnalysisStatus} */ (reader.readEnum());
      msg.setAnalysisStatus(value);
      break;
    case 6:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setAnalysisStatusError(value);
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
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_longrunning_operations_pb.Operation.serializeBinaryToWriter
    );
  }
  f = message.getAnalysisStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAnalysisStatusError();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.AnalysisStatus = {
  ANALYSIS_STATUS_UNSPECIFIED: 0,
  PENDING: 1,
  SCANNING: 2,
  FINISHED_SUCCESS: 3,
  FINISHED_FAILED: 4,
  UNSUPPORTED_RESOURCE: 5
};

/**
 * optional google.longrunning.Operation operation = 1;
 * @return {?proto.google.longrunning.Operation}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.getOperation = function() {
  return /** @type{?proto.google.longrunning.Operation} */ (
    jspb.Message.getWrapperField(this, google_longrunning_operations_pb.Operation, 1));
};


/**
 * @param {?proto.google.longrunning.Operation|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AnalysisStatus analysis_status = 5;
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.AnalysisStatus}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.getAnalysisStatus = function() {
  return /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.AnalysisStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.AnalysisStatus} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.setAnalysisStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.rpc.Status analysis_status_error = 6;
 * @return {?proto.google.rpc.Status}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.getAnalysisStatusError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 6));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.setAnalysisStatusError = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.clearAnalysisStatusError = function() {
  return this.setAnalysisStatusError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.Discovered.prototype.hasAnalysisStatusError = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Note.Kind analysis_kind = 1;
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind}
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.prototype.getAnalysisKind = function() {
  return /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Discovery} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.Discovery.prototype.setAnalysisKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.google.devtools.containeranalysis.v1alpha1.BuildType.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.BuildType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildType.toObject = function(includeInstance, msg) {
  var f, obj = {
    builderVersion: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signature: (f = msg.getSignature()) && proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildType}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.BuildType;
  return proto.google.devtools.containeranalysis.v1alpha1.BuildType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildType}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuilderVersion(value);
      break;
    case 2:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.BuildSignature;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.deserializeBinaryFromReader);
      msg.setSignature(value);
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
proto.google.devtools.containeranalysis.v1alpha1.BuildType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.BuildType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuilderVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.serializeBinaryToWriter
    );
  }
};


/**
 * optional string builder_version = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildType.prototype.getBuilderVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildType} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildType.prototype.setBuilderVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BuildSignature signature = 2;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.BuildSignature}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildType.prototype.getSignature = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.BuildSignature} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.BuildSignature, 2));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.BuildSignature|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildType} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.BuildType.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildType} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildType.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildType.prototype.hasSignature = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    signature: jspb.Message.getFieldWithDefault(msg, 2, ""),
    keyId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    keyType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.BuildSignature;
  return proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 4:
      var value = /** @type {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.KeyType} */ (reader.readEnum());
      msg.setKeyType(value);
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
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKeyType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.KeyType = {
  KEY_TYPE_UNSPECIFIED: 0,
  PGP_ASCII_ARMORED: 1,
  PKIX_PEM: 2
};

/**
 * optional string public_key = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string signature = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key_id = 3;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional KeyType key_type = 4;
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.KeyType}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.getKeyType = function() {
  return /** @type {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.KeyType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.KeyType} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildSignature} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildSignature.prototype.setKeyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.KeyIdCase = {
  KEY_ID_NOT_SET: 0,
  PGP_KEY_ID: 2
};

/**
 * @return {proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.KeyIdCase}
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.getKeyIdCase = function() {
  return /** @type {proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.KeyIdCase} */(jspb.Message.computeOneofCase(this, proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.oneofGroups_[0]));
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
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pgpKeyId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation}
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation;
  return proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation}
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.ContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPgpKeyId(value);
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
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.ContentType = {
  CONTENT_TYPE_UNSPECIFIED: 0,
  SIMPLE_SIGNING_JSON: 1
};

/**
 * optional string signature = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ContentType content_type = 3;
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.ContentType}
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.getContentType = function() {
  return /** @type {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.ContentType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.ContentType} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string pgp_key_id = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.getPgpKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.setPgpKeyId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.clearPgpKeyId = function() {
  return jspb.Message.setOneofField(this, 2, proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.prototype.hasPgpKeyId = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.toObject = function(includeInstance, msg) {
  var f, obj = {
    hint: (f = msg.getHint()) && proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority;
  return proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.deserializeBinaryFromReader);
      msg.setHint(value);
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
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.serializeBinaryToWriter
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
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.toObject = function(includeInstance, msg) {
  var f, obj = {
    humanReadableName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint;
  return proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHumanReadableName(value);
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
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHumanReadableName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string human_readable_name = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.prototype.getHumanReadableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint.prototype.setHumanReadableName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.SignatureCase = {
  SIGNATURE_NOT_SET: 0,
  PGP_SIGNED_ATTESTATION: 1
};

/**
 * @return {proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.SignatureCase}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.prototype.getSignatureCase = function() {
  return /** @type {proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.SignatureCase} */(jspb.Message.computeOneofCase(this, proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.oneofGroups_[0]));
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
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.toObject = function(includeInstance, msg) {
  var f, obj = {
    pgpSignedAttestation: (f = msg.getPgpSignedAttestation()) && proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation;
  return proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.deserializeBinaryFromReader);
      msg.setPgpSignedAttestation(value);
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
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPgpSignedAttestation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation.serializeBinaryToWriter
    );
  }
};


/**
 * optional PgpSignedAttestation pgp_signed_attestation = 1;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.prototype.getPgpSignedAttestation = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation, 1));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.PgpSignedAttestation|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.prototype.setPgpSignedAttestation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.prototype.clearPgpSignedAttestation = function() {
  return this.setPgpSignedAttestation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.Attestation.prototype.hasPgpSignedAttestation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AttestationAuthorityHint hint = 1;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.prototype.getHint = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint, 1));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.AttestationAuthorityHint|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.prototype.setHint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.prototype.clearHint = function() {
  return this.setHint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.AttestationAuthority.prototype.hasHint = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    provenance: (f = msg.getProvenance()) && google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance.toObject(includeInstance, f),
    provenanceBytes: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildDetails}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.BuildDetails;
  return proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildDetails}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance;
      reader.readMessage(value,google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance.deserializeBinaryFromReader);
      msg.setProvenance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvenanceBytes(value);
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
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.BuildDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProvenance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance.serializeBinaryToWriter
    );
  }
  f = message.getProvenanceBytes();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional BuildProvenance provenance = 1;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.BuildProvenance}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.prototype.getProvenance = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.BuildProvenance} */ (
    jspb.Message.getWrapperField(this, google_devtools_containeranalysis_v1alpha1_provenance_pb.BuildProvenance, 1));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.BuildProvenance|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildDetails} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.prototype.setProvenance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildDetails} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.prototype.clearProvenance = function() {
  return this.setProvenance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.prototype.hasProvenance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string provenance_bytes = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.prototype.getProvenanceBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.BuildDetails} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.BuildDetails.prototype.setProvenanceBytes = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig}
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.ScanConfig;
  return proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig}
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool enabled = 3;
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceRequest.prototype.setName = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 5, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
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
    case 6:
      var value = /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} */ (reader.readEnum());
      msg.setKind(value);
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
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
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
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 5;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Note.Kind kind = 6;
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.getKind = function() {
  return /** @type {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note.Kind} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesRequest.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.repeatedFields_ = [1];



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
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    occurrencesList: jspb.Message.toObjectList(msg.getOccurrencesList(),
    proto.google.devtools.containeranalysis.v1alpha1.Occurrence.toObject, includeInstance),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse;
  return proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Occurrence;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinaryFromReader);
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
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOccurrencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Occurrence.serializeBinaryToWriter
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
 * @return {!Array<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.prototype.getOccurrencesList = function() {
  return /** @type{!Array<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Occurrence, 1));
};


/**
 * @param {!Array<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.prototype.setOccurrencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.prototype.addOccurrences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.devtools.containeranalysis.v1alpha1.Occurrence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.prototype.clearOccurrencesList = function() {
  return this.setOccurrencesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListOccurrencesResponse.prototype.setNextPageToken = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteOccurrenceRequest.prototype.setName = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    occurrence: (f = msg.getOccurrence()) && proto.google.devtools.containeranalysis.v1alpha1.Occurrence.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Occurrence;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinaryFromReader);
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
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOccurrence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Occurrence.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 3;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Occurrence occurrence = 2;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Occurrence}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.getOccurrence = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Occurrence} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Occurrence, 2));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Occurrence|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.setOccurrence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.clearOccurrence = function() {
  return this.setOccurrence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOccurrenceRequest.prototype.hasOccurrence = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    occurrence: (f = msg.getOccurrence()) && proto.google.devtools.containeranalysis.v1alpha1.Occurrence.toObject(includeInstance, f),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Occurrence;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinaryFromReader);
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.google.devtools.containeranalysis.v1alpha1.Occurrence.serializeBinaryToWriter
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Occurrence occurrence = 2;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Occurrence}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.getOccurrence = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Occurrence} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Occurrence, 2));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Occurrence|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.setOccurrence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.clearOccurrence = function() {
  return this.setOccurrence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.hasOccurrence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOccurrenceRequest.prototype.hasUpdateMask = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.GetNoteRequest.prototype.setName = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.GetOccurrenceNoteRequest.prototype.setName = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 5, ""),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
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
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
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
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 5;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.repeatedFields_ = [1];



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
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    notesList: jspb.Message.toObjectList(msg.getNotesList(),
    proto.google.devtools.containeranalysis.v1alpha1.Note.toObject, includeInstance),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse;
  return proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Note;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinaryFromReader);
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
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Note.serializeBinaryToWriter
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
 * @return {!Array<!proto.google.devtools.containeranalysis.v1alpha1.Note>}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.prototype.getNotesList = function() {
  return /** @type{!Array<!proto.google.devtools.containeranalysis.v1alpha1.Note>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Note, 1));
};


/**
 * @param {!Array<!proto.google.devtools.containeranalysis.v1alpha1.Note>} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.prototype.setNotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Note=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Note}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.prototype.addNotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.devtools.containeranalysis.v1alpha1.Note, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.prototype.clearNotesList = function() {
  return this.setNotesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNotesResponse.prototype.setNextPageToken = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.DeleteNoteRequest.prototype.setName = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 4, ""),
    noteId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    note: (f = msg.getNote()) && proto.google.devtools.containeranalysis.v1alpha1.Note.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNoteId(value);
      break;
    case 3:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Note;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinaryFromReader);
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
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
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
      proto.google.devtools.containeranalysis.v1alpha1.Note.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 4;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string note_id = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.getNoteId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.setNoteId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Note note = 3;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Note}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.getNote = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Note} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Note, 3));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Note|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateNoteRequest.prototype.hasNote = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    note: (f = msg.getNote()) && proto.google.devtools.containeranalysis.v1alpha1.Note.toObject(includeInstance, f),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Note;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Note.deserializeBinaryFromReader);
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.serializeBinaryToWriter = function(message, writer) {
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
      proto.google.devtools.containeranalysis.v1alpha1.Note.serializeBinaryToWriter
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Note note = 2;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.Note}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.getNote = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.Note} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Note, 2));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.Note|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.hasNote = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateNoteRequest.prototype.hasUpdateMask = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.repeatedFields_ = [1];



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
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    occurrencesList: jspb.Message.toObjectList(msg.getOccurrencesList(),
    proto.google.devtools.containeranalysis.v1alpha1.Occurrence.toObject, includeInstance),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse;
  return proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.Occurrence;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.Occurrence.deserializeBinaryFromReader);
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
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOccurrencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.Occurrence.serializeBinaryToWriter
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
 * @return {!Array<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.prototype.getOccurrencesList = function() {
  return /** @type{!Array<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.Occurrence, 1));
};


/**
 * @param {!Array<!proto.google.devtools.containeranalysis.v1alpha1.Occurrence>} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.prototype.setOccurrencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.Occurrence}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.prototype.addOccurrences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.devtools.containeranalysis.v1alpha1.Occurrence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.prototype.clearOccurrencesList = function() {
  return this.setOccurrencesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListNoteOccurrencesResponse.prototype.setNextPageToken = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operation: (f = msg.getOperation()) && google_longrunning_operations_pb.Operation.toObject(includeInstance, f)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOperationId(value);
      break;
    case 3:
      var value = new google_longrunning_operations_pb.Operation;
      reader.readMessage(value,google_longrunning_operations_pb.Operation.deserializeBinaryFromReader);
      msg.setOperation(value);
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
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_longrunning_operations_pb.Operation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string operation_id = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.longrunning.Operation operation = 3;
 * @return {?proto.google.longrunning.Operation}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.getOperation = function() {
  return /** @type{?proto.google.longrunning.Operation} */ (
    jspb.Message.getWrapperField(this, google_longrunning_operations_pb.Operation, 3));
};


/**
 * @param {?proto.google.longrunning.Operation|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.CreateOperationRequest.prototype.hasOperation = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operation: (f = msg.getOperation()) && google_longrunning_operations_pb.Operation.toObject(includeInstance, f),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_longrunning_operations_pb.Operation;
      reader.readMessage(value,google_longrunning_operations_pb.Operation.deserializeBinaryFromReader);
      msg.setOperation(value);
      break;
    case 4:
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_longrunning_operations_pb.Operation.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.longrunning.Operation operation = 3;
 * @return {?proto.google.longrunning.Operation}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.getOperation = function() {
  return /** @type{?proto.google.longrunning.Operation} */ (
    jspb.Message.getWrapperField(this, google_longrunning_operations_pb.Operation, 3));
};


/**
 * @param {?proto.google.longrunning.Operation|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateOperationRequest.prototype.hasUpdateMask = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata}
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata;
  return proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata}
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
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
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreateTime();
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
 * optional google.protobuf.Timestamp create_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.OperationMetadata.prototype.hasEndTime = function() {
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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.repeatedFields_ = [1];



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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    countsList: jspb.Message.toObjectList(msg.getCountsList(),
    proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.toObject, includeInstance)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse;
  return proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.deserializeBinaryFromReader);
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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.serializeBinaryToWriter
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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    severity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount;
  return proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType.Severity} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
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
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional VulnerabilityType.Severity severity = 1;
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType.Severity}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.prototype.getSeverity = function() {
  return /** @type {!proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType.Severity} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.VulnerabilityType.Severity} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 count = 2;
 * @return {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated SeverityCount counts = 1;
 * @return {!Array<!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount>}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.prototype.getCountsList = function() {
  return /** @type{!Array<!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount, 1));
};


/**
 * @param {!Array<!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount>} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.prototype.setCountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.prototype.addCounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.SeverityCount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.GetVulnzOccurrencesSummaryResponse.prototype.clearCountsList = function() {
  return this.setCountsList([]);
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
proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.GetScanConfigRequest.prototype.setName = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string filter = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.repeatedFields_ = [1];



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
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scanConfigsList: jspb.Message.toObjectList(msg.getScanConfigsList(),
    proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.toObject, includeInstance),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse;
  return proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.devtools.containeranalysis.v1alpha1.ScanConfig;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.deserializeBinaryFromReader);
      msg.addScanConfigs(value);
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
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.serializeBinaryToWriter
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
 * repeated ScanConfig scan_configs = 1;
 * @return {!Array<!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.prototype.getScanConfigsList = function() {
  return /** @type{!Array<!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.ScanConfig, 1));
};


/**
 * @param {!Array<!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig>} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.prototype.setScanConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ScanConfig}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.prototype.addScanConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.devtools.containeranalysis.v1alpha1.ScanConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.prototype.clearScanConfigsList = function() {
  return this.setScanConfigsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.ListScanConfigsResponse.prototype.setNextPageToken = function(value) {
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scanConfig: (f = msg.getScanConfig()) && proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.toObject(includeInstance, f),
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
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest;
  return proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.devtools.containeranalysis.v1alpha1.ScanConfig;
      reader.readMessage(value,proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.deserializeBinaryFromReader);
      msg.setScanConfig(value);
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScanConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.devtools.containeranalysis.v1alpha1.ScanConfig.serializeBinaryToWriter
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
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ScanConfig scan_config = 2;
 * @return {?proto.google.devtools.containeranalysis.v1alpha1.ScanConfig}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.getScanConfig = function() {
  return /** @type{?proto.google.devtools.containeranalysis.v1alpha1.ScanConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.containeranalysis.v1alpha1.ScanConfig, 2));
};


/**
 * @param {?proto.google.devtools.containeranalysis.v1alpha1.ScanConfig|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.setScanConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.clearScanConfig = function() {
  return this.setScanConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.hasScanConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} returns this
*/
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest} returns this
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.containeranalysis.v1alpha1.UpdateScanConfigRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.google.devtools.containeranalysis.v1alpha1);
