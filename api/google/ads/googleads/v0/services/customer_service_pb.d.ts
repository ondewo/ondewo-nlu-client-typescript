import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_resources_customer_pb from '../../../../../google/ads/googleads/v0/resources/customer_pb';
import * as google_api_annotations_pb from '../../../../../google/api/annotations_pb';


export class GetCustomerRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GetCustomerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerRequest): GetCustomerRequest.AsObject;
  static serializeBinaryToWriter(message: GetCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerRequest;
  static deserializeBinaryFromReader(message: GetCustomerRequest, reader: jspb.BinaryReader): GetCustomerRequest;
}

export namespace GetCustomerRequest {
  export type AsObject = {
    resourceName: string,
  }
}

