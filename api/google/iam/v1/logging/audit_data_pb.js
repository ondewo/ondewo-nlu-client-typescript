// source: google/iam/v1/logging/audit_data.proto
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
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
goog.object.extend(proto, google_iam_v1_policy_pb);
goog.exportSymbol('proto.google.iam.v1.logging.AuditData', null, global);
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
proto.google.iam.v1.logging.AuditData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.iam.v1.logging.AuditData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.iam.v1.logging.AuditData.displayName = 'proto.google.iam.v1.logging.AuditData';
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
proto.google.iam.v1.logging.AuditData.prototype.toObject = function(opt_includeInstance) {
  return proto.google.iam.v1.logging.AuditData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.iam.v1.logging.AuditData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.logging.AuditData.toObject = function(includeInstance, msg) {
  var f, obj = {
    policyDelta: (f = msg.getPolicyDelta()) && google_iam_v1_policy_pb.PolicyDelta.toObject(includeInstance, f)
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
 * @return {!proto.google.iam.v1.logging.AuditData}
 */
proto.google.iam.v1.logging.AuditData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.iam.v1.logging.AuditData;
  return proto.google.iam.v1.logging.AuditData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.iam.v1.logging.AuditData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.iam.v1.logging.AuditData}
 */
proto.google.iam.v1.logging.AuditData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_iam_v1_policy_pb.PolicyDelta;
      reader.readMessage(value,google_iam_v1_policy_pb.PolicyDelta.deserializeBinaryFromReader);
      msg.setPolicyDelta(value);
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
proto.google.iam.v1.logging.AuditData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.iam.v1.logging.AuditData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.iam.v1.logging.AuditData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.iam.v1.logging.AuditData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyDelta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_iam_v1_policy_pb.PolicyDelta.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.iam.v1.PolicyDelta policy_delta = 2;
 * @return {?proto.google.iam.v1.PolicyDelta}
 */
proto.google.iam.v1.logging.AuditData.prototype.getPolicyDelta = function() {
  return /** @type{?proto.google.iam.v1.PolicyDelta} */ (
    jspb.Message.getWrapperField(this, google_iam_v1_policy_pb.PolicyDelta, 2));
};


/**
 * @param {?proto.google.iam.v1.PolicyDelta|undefined} value
 * @return {!proto.google.iam.v1.logging.AuditData} returns this
*/
proto.google.iam.v1.logging.AuditData.prototype.setPolicyDelta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.iam.v1.logging.AuditData} returns this
 */
proto.google.iam.v1.logging.AuditData.prototype.clearPolicyDelta = function() {
  return this.setPolicyDelta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.iam.v1.logging.AuditData.prototype.hasPolicyDelta = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.iam.v1.logging);
