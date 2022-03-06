// source: google/devtools/resultstore/v2/configuration.proto
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
goog.exportSymbol('proto.google.devtools.resultstore.v2.Configuration', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.Configuration.Id', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.ConfigurationAttributes', null, global);
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
proto.google.devtools.resultstore.v2.Configuration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.resultstore.v2.Configuration.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.Configuration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.Configuration.displayName = 'proto.google.devtools.resultstore.v2.Configuration';
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
proto.google.devtools.resultstore.v2.Configuration.Id = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.Configuration.Id, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.Configuration.Id.displayName = 'proto.google.devtools.resultstore.v2.Configuration.Id';
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
proto.google.devtools.resultstore.v2.ConfigurationAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.ConfigurationAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.ConfigurationAttributes.displayName = 'proto.google.devtools.resultstore.v2.ConfigurationAttributes';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.resultstore.v2.Configuration.repeatedFields_ = [6];



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
proto.google.devtools.resultstore.v2.Configuration.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.Configuration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.Configuration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.Configuration.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && proto.google.devtools.resultstore.v2.Configuration.Id.toObject(includeInstance, f),
    statusAttributes: (f = msg.getStatusAttributes()) && google_devtools_resultstore_v2_common_pb.StatusAttributes.toObject(includeInstance, f),
    configurationAttributes: (f = msg.getConfigurationAttributes()) && proto.google.devtools.resultstore.v2.ConfigurationAttributes.toObject(includeInstance, f),
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    google_devtools_resultstore_v2_common_pb.Property.toObject, includeInstance)
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
 * @return {!proto.google.devtools.resultstore.v2.Configuration}
 */
proto.google.devtools.resultstore.v2.Configuration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.Configuration;
  return proto.google.devtools.resultstore.v2.Configuration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.Configuration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.Configuration}
 */
proto.google.devtools.resultstore.v2.Configuration.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.devtools.resultstore.v2.Configuration.Id;
      reader.readMessage(value,proto.google.devtools.resultstore.v2.Configuration.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new google_devtools_resultstore_v2_common_pb.StatusAttributes;
      reader.readMessage(value,google_devtools_resultstore_v2_common_pb.StatusAttributes.deserializeBinaryFromReader);
      msg.setStatusAttributes(value);
      break;
    case 5:
      var value = new proto.google.devtools.resultstore.v2.ConfigurationAttributes;
      reader.readMessage(value,proto.google.devtools.resultstore.v2.ConfigurationAttributes.deserializeBinaryFromReader);
      msg.setConfigurationAttributes(value);
      break;
    case 6:
      var value = new google_devtools_resultstore_v2_common_pb.Property;
      reader.readMessage(value,google_devtools_resultstore_v2_common_pb.Property.deserializeBinaryFromReader);
      msg.addProperties(value);
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
proto.google.devtools.resultstore.v2.Configuration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.Configuration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.Configuration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.Configuration.serializeBinaryToWriter = function(message, writer) {
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
      proto.google.devtools.resultstore.v2.Configuration.Id.serializeBinaryToWriter
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
  f = message.getConfigurationAttributes();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.devtools.resultstore.v2.ConfigurationAttributes.serializeBinaryToWriter
    );
  }
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      google_devtools_resultstore_v2_common_pb.Property.serializeBinaryToWriter
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
proto.google.devtools.resultstore.v2.Configuration.Id.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.Configuration.Id.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.Configuration.Id} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.Configuration.Id.toObject = function(includeInstance, msg) {
  var f, obj = {
    invocationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    configurationId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.resultstore.v2.Configuration.Id}
 */
proto.google.devtools.resultstore.v2.Configuration.Id.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.Configuration.Id;
  return proto.google.devtools.resultstore.v2.Configuration.Id.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.Configuration.Id} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.Configuration.Id}
 */
proto.google.devtools.resultstore.v2.Configuration.Id.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setConfigurationId(value);
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
proto.google.devtools.resultstore.v2.Configuration.Id.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.Configuration.Id.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.Configuration.Id} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.Configuration.Id.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfigurationId();
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
proto.google.devtools.resultstore.v2.Configuration.Id.prototype.getInvocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.resultstore.v2.Configuration.Id} returns this
 */
proto.google.devtools.resultstore.v2.Configuration.Id.prototype.setInvocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string configuration_id = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.Configuration.Id.prototype.getConfigurationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.resultstore.v2.Configuration.Id} returns this
 */
proto.google.devtools.resultstore.v2.Configuration.Id.prototype.setConfigurationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.resultstore.v2.Configuration} returns this
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Id id = 2;
 * @return {?proto.google.devtools.resultstore.v2.Configuration.Id}
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.getId = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.Configuration.Id} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.resultstore.v2.Configuration.Id, 2));
};


/**
 * @param {?proto.google.devtools.resultstore.v2.Configuration.Id|undefined} value
 * @return {!proto.google.devtools.resultstore.v2.Configuration} returns this
*/
proto.google.devtools.resultstore.v2.Configuration.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.resultstore.v2.Configuration} returns this
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StatusAttributes status_attributes = 3;
 * @return {?proto.google.devtools.resultstore.v2.StatusAttributes}
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.getStatusAttributes = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.StatusAttributes} */ (
    jspb.Message.getWrapperField(this, google_devtools_resultstore_v2_common_pb.StatusAttributes, 3));
};


/**
 * @param {?proto.google.devtools.resultstore.v2.StatusAttributes|undefined} value
 * @return {!proto.google.devtools.resultstore.v2.Configuration} returns this
*/
proto.google.devtools.resultstore.v2.Configuration.prototype.setStatusAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.resultstore.v2.Configuration} returns this
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.clearStatusAttributes = function() {
  return this.setStatusAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.hasStatusAttributes = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ConfigurationAttributes configuration_attributes = 5;
 * @return {?proto.google.devtools.resultstore.v2.ConfigurationAttributes}
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.getConfigurationAttributes = function() {
  return /** @type{?proto.google.devtools.resultstore.v2.ConfigurationAttributes} */ (
    jspb.Message.getWrapperField(this, proto.google.devtools.resultstore.v2.ConfigurationAttributes, 5));
};


/**
 * @param {?proto.google.devtools.resultstore.v2.ConfigurationAttributes|undefined} value
 * @return {!proto.google.devtools.resultstore.v2.Configuration} returns this
*/
proto.google.devtools.resultstore.v2.Configuration.prototype.setConfigurationAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.devtools.resultstore.v2.Configuration} returns this
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.clearConfigurationAttributes = function() {
  return this.setConfigurationAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.hasConfigurationAttributes = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated Property properties = 6;
 * @return {!Array<!proto.google.devtools.resultstore.v2.Property>}
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.google.devtools.resultstore.v2.Property>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_devtools_resultstore_v2_common_pb.Property, 6));
};


/**
 * @param {!Array<!proto.google.devtools.resultstore.v2.Property>} value
 * @return {!proto.google.devtools.resultstore.v2.Configuration} returns this
*/
proto.google.devtools.resultstore.v2.Configuration.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.Property=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.resultstore.v2.Property}
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.devtools.resultstore.v2.Property, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.devtools.resultstore.v2.Configuration} returns this
 */
proto.google.devtools.resultstore.v2.Configuration.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
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
proto.google.devtools.resultstore.v2.ConfigurationAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.ConfigurationAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.ConfigurationAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.ConfigurationAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    cpu: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.devtools.resultstore.v2.ConfigurationAttributes}
 */
proto.google.devtools.resultstore.v2.ConfigurationAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.ConfigurationAttributes;
  return proto.google.devtools.resultstore.v2.ConfigurationAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.ConfigurationAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.ConfigurationAttributes}
 */
proto.google.devtools.resultstore.v2.ConfigurationAttributes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpu(value);
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
proto.google.devtools.resultstore.v2.ConfigurationAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.ConfigurationAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.ConfigurationAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.ConfigurationAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCpu();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cpu = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.ConfigurationAttributes.prototype.getCpu = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.devtools.resultstore.v2.ConfigurationAttributes} returns this
 */
proto.google.devtools.resultstore.v2.ConfigurationAttributes.prototype.setCpu = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.google.devtools.resultstore.v2);
