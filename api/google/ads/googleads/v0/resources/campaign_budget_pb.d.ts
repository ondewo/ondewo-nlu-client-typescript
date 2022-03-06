import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_enums_budget_delivery_method_pb from '../../../../../google/ads/googleads/v0/enums/budget_delivery_method_pb';
import * as google_ads_googleads_v0_enums_budget_status_pb from '../../../../../google/ads/googleads/v0/enums/budget_status_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class CampaignBudget extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): CampaignBudget;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): CampaignBudget;
  hasId(): boolean;
  clearId(): CampaignBudget;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): CampaignBudget;
  hasName(): boolean;
  clearName(): CampaignBudget;

  getAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): CampaignBudget;
  hasAmountMicros(): boolean;
  clearAmountMicros(): CampaignBudget;

  getStatus(): google_ads_googleads_v0_enums_budget_status_pb.BudgetStatusEnum.BudgetStatus;
  setStatus(value: google_ads_googleads_v0_enums_budget_status_pb.BudgetStatusEnum.BudgetStatus): CampaignBudget;

  getDeliveryMethod(): google_ads_googleads_v0_enums_budget_delivery_method_pb.BudgetDeliveryMethodEnum.BudgetDeliveryMethod;
  setDeliveryMethod(value: google_ads_googleads_v0_enums_budget_delivery_method_pb.BudgetDeliveryMethodEnum.BudgetDeliveryMethod): CampaignBudget;

  getExplicitlyShared(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setExplicitlyShared(value?: google_protobuf_wrappers_pb.BoolValue): CampaignBudget;
  hasExplicitlyShared(): boolean;
  clearExplicitlyShared(): CampaignBudget;

  getReferenceCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setReferenceCount(value?: google_protobuf_wrappers_pb.Int64Value): CampaignBudget;
  hasReferenceCount(): boolean;
  clearReferenceCount(): CampaignBudget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignBudget.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignBudget): CampaignBudget.AsObject;
  static serializeBinaryToWriter(message: CampaignBudget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignBudget;
  static deserializeBinaryFromReader(message: CampaignBudget, reader: jspb.BinaryReader): CampaignBudget;
}

export namespace CampaignBudget {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    amountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status: google_ads_googleads_v0_enums_budget_status_pb.BudgetStatusEnum.BudgetStatus,
    deliveryMethod: google_ads_googleads_v0_enums_budget_delivery_method_pb.BudgetDeliveryMethodEnum.BudgetDeliveryMethod,
    explicitlyShared?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    referenceCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

