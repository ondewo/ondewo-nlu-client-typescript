// source: google/cloud/websecurityscanner/v1alpha/finding_addon.proto
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
goog.exportSymbol('proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary', null, global);
goog.exportSymbol('proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource', null, global);
goog.exportSymbol('proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters', null, global);
goog.exportSymbol('proto.google.cloud.websecurityscanner.v1alpha.Xss', null, global);
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
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.displayName = 'proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary';
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
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.displayName = 'proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource';
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
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.displayName = 'proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters';
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
proto.google.cloud.websecurityscanner.v1alpha.Xss = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.websecurityscanner.v1alpha.Xss.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.websecurityscanner.v1alpha.Xss, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.websecurityscanner.v1alpha.Xss.displayName = 'proto.google.cloud.websecurityscanner.v1alpha.Xss';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.repeatedFields_ = [3];



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
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.toObject = function(includeInstance, msg) {
  var f, obj = {
    libraryName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    learnMoreUrlsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary}
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary;
  return proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary}
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLibraryName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addLearnMoreUrls(value);
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
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLibraryName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLearnMoreUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string library_name = 1;
 * @return {string}
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.getLibraryName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.setLibraryName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string learn_more_urls = 3;
 * @return {!Array<string>}
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.getLearnMoreUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.setLearnMoreUrlsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.addLearnMoreUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.prototype.clearLearnMoreUrlsList = function() {
  return this.setLearnMoreUrlsList([]);
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
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resourceUrl: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource}
 */
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource;
  return proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource}
 */
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceUrl(value);
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
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentType();
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
};


/**
 * optional string content_type = 1;
 * @return {string}
 */
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.prototype.setContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource_url = 2;
 * @return {string}
 */
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.prototype.getResourceUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.ViolatingResource.prototype.setResourceUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.repeatedFields_ = [1];



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
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameterNamesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters}
 */
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters;
  return proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters}
 */
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addParameterNames(value);
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
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameterNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string parameter_names = 1;
 * @return {!Array<string>}
 */
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.prototype.getParameterNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.prototype.setParameterNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.prototype.addParameterNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.VulnerableParameters.prototype.clearParameterNamesList = function() {
  return this.setParameterNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.repeatedFields_ = [1];



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
proto.google.cloud.websecurityscanner.v1alpha.Xss.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.websecurityscanner.v1alpha.Xss.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.Xss} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.toObject = function(includeInstance, msg) {
  var f, obj = {
    stackTracesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    errorMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.Xss}
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.websecurityscanner.v1alpha.Xss;
  return proto.google.cloud.websecurityscanner.v1alpha.Xss.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.Xss} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.Xss}
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addStackTraces(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
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
proto.google.cloud.websecurityscanner.v1alpha.Xss.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.websecurityscanner.v1alpha.Xss.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.Xss} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStackTracesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string stack_traces = 1;
 * @return {!Array<string>}
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.prototype.getStackTracesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.Xss} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.prototype.setStackTracesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.Xss} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.prototype.addStackTraces = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.Xss} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.prototype.clearStackTracesList = function() {
  return this.setStackTracesList([]);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.Xss} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.Xss.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.google.cloud.websecurityscanner.v1alpha);
