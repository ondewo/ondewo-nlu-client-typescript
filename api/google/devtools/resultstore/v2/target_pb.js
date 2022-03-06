// source: google/devtools/resultstore/v2/target.proto
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

var google_devtools_resultstore_v2_common_pb = require('../../../../google/devtools/resultstore/v2/common_pb.js');
goog.object.extend(proto, google_devtools_resultstore_v2_common_pb);
var google_devtools_resultstore_v2_file_pb = require('../../../../google/devtools/resultstore/v2/file_pb.js');
goog.object.extend(proto, google_devtools_resultstore_v2_file_pb);
goog.exportSymbol('proto.google.devtools.resultstore.v2.Target', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.Target.Id', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.TargetAttributes', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.TargetType', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.TestAttributes', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.TestSize', null, global);
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
proto.google.devtools.resultstore.v2.Target = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.resultstore.v2.Target.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.Target, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.Target.displayName = 'proto.google.devtools.resultstore.v2.Target';
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
proto.google.devtools.resultstore.v2.Target.Id = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.Target.Id, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.Target.Id.displayName = 'proto.google.devtools.resultstore.v2.Target.Id';
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
proto.google.devtools.resultstore.v2.TargetAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.resultstore.v2.TargetAttributes.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.TargetAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.TargetAttributes.displayName = 'proto.google.devtools.resultstore.v2.TargetAttributes';
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
proto.google.devtools.resultstore.v2.TestAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.TestAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.TestAttributes.displayName = 'proto.google.devtools.resultstore.v2.TestAttributes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.resultstore.v2.Target.repeatedFields_ = [7,8];



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
proto.google.devtools.resultstore.v2.Target.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.Target.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.Target} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.Target.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && proto.google.devtools.resultstore.v2.Target.Id.toObject(includeInstance, f),
    statusAttributes: (f = msg.getStatusAttributes()) && google_devtools_resultstore_v2_common_pb.StatusAttributes.toObject(includeInstance, f),
    timing: (f = msg.getTiming()) && google_devtools_resultstore_v2_common_pb.Timing.toObject(includeInstance, f),
    targetAttributes: (f = msg.getTargetAttributes()) && proto.google.devtools.resultstore.v2.TargetAttributes.toObject(includeInstance, f),
    testAttributes: (f = msg.getTestAttributes()) && proto.google.devtools.resultstore.v2.TestAttributes.toObject(includeInstance, f),
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    google_devtools_resultstore_v2_common_pb.Property.toObject, includeInstance),
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    google_devtools_resultstore_v2_file_pb.File.toObject, includeInstance),
    isVisible: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
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
 * @return {!proto.google.devtools.resultstore.v2.Target}
 */
proto.google.devtools.resultstore.v2.Target.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.Target;
  return proto.google.devtools.resultstore.v2.Target.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.Target} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.Target}
 */
proto.google.devtools.resultstore.v2.Target.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.devtools.resultstore.v2.Target.Id;
      reader.readMessage(value,proto.google.devtools.resultstore.v2.Target.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new google_devtools_resultstore_v2_common_pb.StatusAttributes;
      reader.readMessage(value,google_devtools_resultstore_v2_common_pb.StatusAttributes.deserializeBinaryFromReader);
      msg.setStatusAttributes(value);
      break;
    case 4:
      var value = new google_devtools_resultstore_v2_common_pb.Timing;
      reader.readMessage(value,google_devtools_resultstore_v2_common_pb.Timing.deserializeBinaryFromReader);
      msg.setTiming(value);
      break;
    case 5:
      var value = new proto.google.devtools.resultstore.v2.TargetAttributes;
      reader.readMessage(value,proto.google.devtools.resultstore.v2.TargetAttributes.deserializeBinaryFromReader);
      msg.setTargetAttributes(value);
      break;
    case 6:
      var value = new proto.google.devtools.resultstore.v2.TestAttributes;
      reader.readMessage(value,proto.google.devtools.resultstore.v2.TestAttributes.deserializeBinaryFromReader);
      msg.setTestAttributes(value);
      break;
    case 7:
      var value = new google_devtools_resultstore_v2_common_pb.Property;
      reader.readMessage(value,google_devtools_resultstore_v2_common_pb.Property.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    case 8:
      var value = new google_devtools_resultstore_v2_file_pb.File;
      reader.readMessage(value,google_devtools_resultstore_v2_file_pb.File.deserializeBinaryFromReader);
      msg.addFiles(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVisible(value);
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
proto.google.devtools.resultstore.v2.Target.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.Target.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.Target} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.Target.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.devtools.resultstore.v2.Target.Id.serializeBinaryToWriter
    );
  }
  f = message.getStatusAttributes();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_devtools_resultstore_v2_common_pb.StatusAttributes.serializeBinaryToWriter
    );
  }
  f = message.getTiming();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_devtools_resultstore_v2_common_pb.Timing.serializeBinaryToWriter
    );
  }
  f = message.getTargetAttributes();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.devtools.resultstore.v2.TargetAttributes.serializeBinaryToWriter
    );
  }
  f = message.getTestAttributes();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.devtools.resultstore.v2.TestAttributes.serializeBinaryToWriter
    );
  }
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      google_devtools_resultstore_v2_common_pb.Property.serializeBinaryToWriter
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      google_devtools_resultstore_v2_file_pb.File.serializeBinaryToWriter
    );
  }
  f = message.getIsVisible();
  if (f) {
    writer.writeBool(
      9,
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
proto.google.devtools.resultstore.v2.Target.Id.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.Target.Id.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.Target.Id} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.Target.Id.toObject = function(includeInstance, msg) {
  var f, obj = {
    invocationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    targetId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.resultstore.v2.Target.Id}
 */
proto.google.devtools.resultstore.v2.Target.Id.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.Target.Id;
  return proto.google.devtools.resultstore.v2.Target.Id.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.Target.Id} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.Target.Id}
 */
proto.google.devtools.resultstore.v2.Target.Id.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvocationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
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
proto.google.devtools.resultstore.v2.Target.Id.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.Target.Id.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.Target.Id} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.Target.Id.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string invocation_id = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.Target.Id.prototype.getInvocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.resultstore.v2.Target.Id} returns this
 */
proto.google.devtools.resultstore.v2.Target.Id.prototype.setInvocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string target_id = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.Target.Id.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.resultstore.v2.Target.Id} returns this
 */
proto.google.devtools.resultstore.v2.Target.Id.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.Target.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
 */
proto.google.devtools.resultstore.v2.Target.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Id id = 2;
 * @return {?proto.google.devtools.resultstore.v2.Target.Id}
 */
proto.google.devtools.resultstore.v2.Target.prototype.getId = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Target.Id} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.resultstore.v2.Target.Id, 2));
};


/**
 * @param {?proto.google.devtools.resultstore.v2.Target.Id|undefined} value
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
*/
proto.google.devtools.resultstore.v2.Target.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
 */
proto.google.devtools.resultstore.v2.Target.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.Target.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StatusAttributes status_attributes = 3;
 * @return {?proto.google.devtools.resultstore.v2.StatusAttributes}
 */
proto.google.devtools.resultstore.v2.Target.prototype.getStatusAttributes = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.StatusAttributes} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_common_pb.StatusAttributes, 3));
};


/**
 * @param {?proto.google.devtools.resultstore.v2.StatusAttributes|undefined} value
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
*/
proto.google.devtools.resultstore.v2.Target.prototype.setStatusAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
 */
proto.google.devtools.resultstore.v2.Target.prototype.clearStatusAttributes = function() {
  return this.setStatusAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.Target.prototype.hasStatusAttributes = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Timing timing = 4;
 * @return {?proto.google.devtools.resultstore.v2.Timing}
 */
proto.google.devtools.resultstore.v2.Target.prototype.getTiming = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Timing} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_common_pb.Timing, 4));
};


/**
 * @param {?proto.google.devtools.resultstore.v2.Timing|undefined} value
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
*/
proto.google.devtools.resultstore.v2.Target.prototype.setTiming = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
 */
proto.google.devtools.resultstore.v2.Target.prototype.clearTiming = function() {
  return this.setTiming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.Target.prototype.hasTiming = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TargetAttributes target_attributes = 5;
 * @return {?proto.google.devtools.resultstore.v2.TargetAttributes}
 */
proto.google.devtools.resultstore.v2.Target.prototype.getTargetAttributes = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.TargetAttributes} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.resultstore.v2.TargetAttributes, 5));
};


/**
 * @param {?proto.google.devtools.resultstore.v2.TargetAttributes|undefined} value
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
*/
proto.google.devtools.resultstore.v2.Target.prototype.setTargetAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
 */
proto.google.devtools.resultstore.v2.Target.prototype.clearTargetAttributes = function() {
  return this.setTargetAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.Target.prototype.hasTargetAttributes = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TestAttributes test_attributes = 6;
 * @return {?proto.google.devtools.resultstore.v2.TestAttributes}
 */
proto.google.devtools.resultstore.v2.Target.prototype.getTestAttributes = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.TestAttributes} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.resultstore.v2.TestAttributes, 6));
};


/**
 * @param {?proto.google.devtools.resultstore.v2.TestAttributes|undefined} value
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
*/
proto.google.devtools.resultstore.v2.Target.prototype.setTestAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
 */
proto.google.devtools.resultstore.v2.Target.prototype.clearTestAttributes = function() {
  return this.setTestAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.Target.prototype.hasTestAttributes = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Property properties = 7;
 * @return {!Array<!proto.google.devtools.resultstore.v2.Property>}
 */
proto.google.devtools.resultstore.v2.Target.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.google.devtools.resultstore.v2.Property>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_devtools_resultstore_v2_common_pb.Property, 7));
};


/**
 * @param {!Array<!proto.google.devtools.resultstore.v2.Property>} value
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
*/
proto.google.devtools.resultstore.v2.Target.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.Property=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.resultstore.v2.Property}
 */
proto.google.devtools.resultstore.v2.Target.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.devtools.resultstore.v2.Property, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
 */
proto.google.devtools.resultstore.v2.Target.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};


/**
 * repeated File files = 8;
 * @return {!Array<!proto.google.devtools.resultstore.v2.File>}
 */
proto.google.devtools.resultstore.v2.Target.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.google.devtools.resultstore.v2.File>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_devtools_resultstore_v2_file_pb.File, 8));
};


/**
 * @param {!Array<!proto.google.devtools.resultstore.v2.File>} value
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
*/
proto.google.devtools.resultstore.v2.Target.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.File=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.resultstore.v2.File}
 */
proto.google.devtools.resultstore.v2.Target.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.devtools.resultstore.v2.File, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
 */
proto.google.devtools.resultstore.v2.Target.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};


/**
 * optional bool is_visible = 9;
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.Target.prototype.getIsVisible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.devtools.resultstore.v2.Target} returns this
 */
proto.google.devtools.resultstore.v2.Target.prototype.setIsVisible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.resultstore.v2.TargetAttributes.repeatedFields_ = [3];



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
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.TargetAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.TargetAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.TargetAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    language: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.google.devtools.resultstore.v2.TargetAttributes}
 */
proto.google.devtools.resultstore.v2.TargetAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.TargetAttributes;
  return proto.google.devtools.resultstore.v2.TargetAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.TargetAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.TargetAttributes}
 */
proto.google.devtools.resultstore.v2.TargetAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.devtools.resultstore.v2.TargetType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.google.devtools.resultstore.v2.Language} */ (reader.readEnum());
      msg.setLanguage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.TargetAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.TargetAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.TargetAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLanguage();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional TargetType type = 1;
 * @return {!proto.google.devtools.resultstore.v2.TargetType}
 */
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.getType = function() {
  return /** @type {!proto.google.devtools.resultstore.v2.TargetType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.devtools.resultstore.v2.TargetType} value
 * @return {!proto.google.devtools.resultstore.v2.TargetAttributes} returns this
 */
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Language language = 2;
 * @return {!proto.google.devtools.resultstore.v2.Language}
 */
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.getLanguage = function() {
  return /** @type {!proto.google.devtools.resultstore.v2.Language} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.devtools.resultstore.v2.Language} value
 * @return {!proto.google.devtools.resultstore.v2.TargetAttributes} returns this
 */
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string tags = 3;
 * @return {!Array<string>}
 */
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.devtools.resultstore.v2.TargetAttributes} returns this
 */
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.resultstore.v2.TargetAttributes} returns this
 */
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.resultstore.v2.TargetAttributes} returns this
 */
proto.google.devtools.resultstore.v2.TargetAttributes.prototype.clearTagsList = function() {
  return this.setTagsList([]);
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
proto.google.devtools.resultstore.v2.TestAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.TestAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.TestAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.TestAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    size: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.google.devtools.resultstore.v2.TestAttributes}
 */
proto.google.devtools.resultstore.v2.TestAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.TestAttributes;
  return proto.google.devtools.resultstore.v2.TestAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.TestAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.TestAttributes}
 */
proto.google.devtools.resultstore.v2.TestAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.devtools.resultstore.v2.TestSize} */ (reader.readEnum());
      msg.setSize(value);
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
proto.google.devtools.resultstore.v2.TestAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.TestAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.TestAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.TestAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional TestSize size = 1;
 * @return {!proto.google.devtools.resultstore.v2.TestSize}
 */
proto.google.devtools.resultstore.v2.TestAttributes.prototype.getSize = function() {
  return /** @type {!proto.google.devtools.resultstore.v2.TestSize} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.devtools.resultstore.v2.TestSize} value
 * @return {!proto.google.devtools.resultstore.v2.TestAttributes} returns this
 */
proto.google.devtools.resultstore.v2.TestAttributes.prototype.setSize = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.google.devtools.resultstore.v2.TargetType = {
  TARGET_TYPE_UNSPECIFIED: 0,
  APPLICATION: 1,
  BINARY: 2,
  LIBRARY: 3,
  PACKAGE: 4,
  TEST: 5
};

/**
 * @enum {number}
 */
proto.google.devtools.resultstore.v2.TestSize = {
  TEST_SIZE_UNSPECIFIED: 0,
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3,
  ENORMOUS: 4,
  OTHER_SIZE: 5
};

goog.object.extend(exports, proto.google.devtools.resultstore.v2);
