// source: google/devtools/containeranalysis/v1beta1/deployment/deployment.proto
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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.grafeas.v1beta1.deployment.Deployable', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.deployment.Deployment', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.deployment.Deployment.Platform', null, global);
goog.exportSymbol('proto.grafeas.v1beta1.deployment.Details', null, global);
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
proto.grafeas.v1beta1.deployment.Deployable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.deployment.Deployable.repeatedFields_, null);
};
goog.inherits(proto.grafeas.v1beta1.deployment.Deployable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.deployment.Deployable.displayName = 'proto.grafeas.v1beta1.deployment.Deployable';
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
proto.grafeas.v1beta1.deployment.Details = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grafeas.v1beta1.deployment.Details, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.deployment.Details.displayName = 'proto.grafeas.v1beta1.deployment.Details';
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
proto.grafeas.v1beta1.deployment.Deployment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grafeas.v1beta1.deployment.Deployment.repeatedFields_, null);
};
goog.inherits(proto.grafeas.v1beta1.deployment.Deployment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grafeas.v1beta1.deployment.Deployment.displayName = 'proto.grafeas.v1beta1.deployment.Deployment';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.deployment.Deployable.repeatedFields_ = [1];



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
proto.grafeas.v1beta1.deployment.Deployable.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.deployment.Deployable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.deployment.Deployable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.deployment.Deployable.toObject = function(includeInstance, msg) {
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
 * @return {!proto.grafeas.v1beta1.deployment.Deployable}
 */
proto.grafeas.v1beta1.deployment.Deployable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.deployment.Deployable;
  return proto.grafeas.v1beta1.deployment.Deployable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.deployment.Deployable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.deployment.Deployable}
 */
proto.grafeas.v1beta1.deployment.Deployable.deserializeBinaryFromReader = function(msg, reader) {
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
proto.grafeas.v1beta1.deployment.Deployable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.deployment.Deployable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.deployment.Deployable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.deployment.Deployable.serializeBinaryToWriter = function(message, writer) {
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
 * repeated string resource_uri = 1;
 * @return {!Array<string>}
 */
proto.grafeas.v1beta1.deployment.Deployable.prototype.getResourceUriList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.grafeas.v1beta1.deployment.Deployable} returns this
 */
proto.grafeas.v1beta1.deployment.Deployable.prototype.setResourceUriList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.deployment.Deployable} returns this
 */
proto.grafeas.v1beta1.deployment.Deployable.prototype.addResourceUri = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.deployment.Deployable} returns this
 */
proto.grafeas.v1beta1.deployment.Deployable.prototype.clearResourceUriList = function() {
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
proto.grafeas.v1beta1.deployment.Details.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.deployment.Details.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.deployment.Details} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.deployment.Details.toObject = function(includeInstance, msg) {
  var f, obj = {
    deployment: (f = msg.getDeployment()) && proto.grafeas.v1beta1.deployment.Deployment.toObject(includeInstance, f)
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
 * @return {!proto.grafeas.v1beta1.deployment.Details}
 */
proto.grafeas.v1beta1.deployment.Details.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.deployment.Details;
  return proto.grafeas.v1beta1.deployment.Details.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.deployment.Details} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.deployment.Details}
 */
proto.grafeas.v1beta1.deployment.Details.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grafeas.v1beta1.deployment.Deployment;
      reader.readMessage(value,proto.grafeas.v1beta1.deployment.Deployment.deserializeBinaryFromReader);
      msg.setDeployment(value);
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
proto.grafeas.v1beta1.deployment.Details.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.deployment.Details.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.deployment.Details} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.deployment.Details.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeployment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grafeas.v1beta1.deployment.Deployment.serializeBinaryToWriter
    );
  }
};


/**
 * optional Deployment deployment = 1;
 * @return {?proto.grafeas.v1beta1.deployment.Deployment}
 */
proto.grafeas.v1beta1.deployment.Details.prototype.getDeployment = function() {
  return /** @type{?proto.grafeas.v1beta1.deployment.Deployment} */ (
    jspb.Message.getWrapperField(this, proto.grafeas.v1beta1.deployment.Deployment, 1));
};


/**
 * @param {?proto.grafeas.v1beta1.deployment.Deployment|undefined} value
 * @return {!proto.grafeas.v1beta1.deployment.Details} returns this
*/
proto.grafeas.v1beta1.deployment.Details.prototype.setDeployment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.deployment.Details} returns this
 */
proto.grafeas.v1beta1.deployment.Details.prototype.clearDeployment = function() {
  return this.setDeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.deployment.Details.prototype.hasDeployment = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grafeas.v1beta1.deployment.Deployment.repeatedFields_ = [6];



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
proto.grafeas.v1beta1.deployment.Deployment.prototype.toObject = function(opt_includeInstance) {
  return proto.grafeas.v1beta1.deployment.Deployment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grafeas.v1beta1.deployment.Deployment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.deployment.Deployment.toObject = function(includeInstance, msg) {
  var f, obj = {
    userEmail: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deployTime: (f = msg.getDeployTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    undeployTime: (f = msg.getUndeployTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    config: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.grafeas.v1beta1.deployment.Deployment}
 */
proto.grafeas.v1beta1.deployment.Deployment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grafeas.v1beta1.deployment.Deployment;
  return proto.grafeas.v1beta1.deployment.Deployment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grafeas.v1beta1.deployment.Deployment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grafeas.v1beta1.deployment.Deployment}
 */
proto.grafeas.v1beta1.deployment.Deployment.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
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
      var value = /** @type {!proto.grafeas.v1beta1.deployment.Deployment.Platform} */ (reader.readEnum());
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
proto.grafeas.v1beta1.deployment.Deployment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grafeas.v1beta1.deployment.Deployment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grafeas.v1beta1.deployment.Deployment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grafeas.v1beta1.deployment.Deployment.serializeBinaryToWriter = function(message, writer) {
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
      4,
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
proto.grafeas.v1beta1.deployment.Deployment.Platform = {
  PLATFORM_UNSPECIFIED: 0,
  GKE: 1,
  FLEX: 2,
  CUSTOM: 3
};

/**
 * optional string user_email = 1;
 * @return {string}
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.getUserEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.setUserEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp deploy_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.getDeployTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
*/
proto.grafeas.v1beta1.deployment.Deployment.prototype.setDeployTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.clearDeployTime = function() {
  return this.setDeployTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.hasDeployTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp undeploy_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.getUndeployTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
*/
proto.grafeas.v1beta1.deployment.Deployment.prototype.setUndeployTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.clearUndeployTime = function() {
  return this.setUndeployTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.hasUndeployTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string config = 4;
 * @return {string}
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.getConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.setConfig = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string address = 5;
 * @return {string}
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string resource_uri = 6;
 * @return {!Array<string>}
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.getResourceUriList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.setResourceUriList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.addResourceUri = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.clearResourceUriList = function() {
  return this.setResourceUriList([]);
};


/**
 * optional Platform platform = 7;
 * @return {!proto.grafeas.v1beta1.deployment.Deployment.Platform}
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.getPlatform = function() {
  return /** @type {!proto.grafeas.v1beta1.deployment.Deployment.Platform} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.grafeas.v1beta1.deployment.Deployment.Platform} value
 * @return {!proto.grafeas.v1beta1.deployment.Deployment} returns this
 */
proto.grafeas.v1beta1.deployment.Deployment.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


goog.object.extend(exports, proto.grafeas.v1beta1.deployment);
