// source: google/bigtable/admin/v2/common.proto
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
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.bigtable.admin.v2.StorageType', null, global);
/**
 * @enum {number}
 */
proto.google.bigtable.admin.v2.StorageType = {
  STORAGE_TYPE_UNSPECIFIED: 0,
  SSD: 1,
  HDD: 2
};

goog.object.extend(exports, proto.google.bigtable.admin.v2);
