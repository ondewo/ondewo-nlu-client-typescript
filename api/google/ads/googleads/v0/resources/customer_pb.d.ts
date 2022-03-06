import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Customer extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): Customer;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): Customer;
  hasId(): boolean;
  clearId(): Customer;

  getDescriptiveName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescriptiveName(value?: google_protobuf_wrappers_pb.StringValue): Customer;
  hasDescriptiveName(): boolean;
  clearDescriptiveName(): Customer;

  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): Customer;
  hasCurrencyCode(): boolean;
  clearCurrencyCode(): Customer;

  getTimeZone(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTimeZone(value?: google_protobuf_wrappers_pb.StringValue): Customer;
  hasTimeZone(): boolean;
  clearTimeZone(): Customer;

  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): Customer;
  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): Customer;

  getAutoTaggingEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAutoTaggingEnabled(value?: google_protobuf_wrappers_pb.BoolValue): Customer;
  hasAutoTaggingEnabled(): boolean;
  clearAutoTaggingEnabled(): Customer;

  getHasPartnersBadge(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasPartnersBadge(value?: google_protobuf_wrappers_pb.BoolValue): Customer;
  hasHasPartnersBadge(): boolean;
  clearHasPartnersBadge(): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    descriptiveName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    timeZone?: google_protobuf_wrappers_pb.StringValue.AsObject,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    autoTaggingEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    hasPartnersBadge?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

