import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Metrics extends jspb.Message {
  getAllConversionRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversionRate(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasAllConversionRate(): boolean;
  clearAllConversionRate(): Metrics;

  getAllConversionValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversionValue(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasAllConversionValue(): boolean;
  clearAllConversionValue(): Metrics;

  getAllConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversions(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasAllConversions(): boolean;
  clearAllConversions(): Metrics;

  getAllConversionsValuePerCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversionsValuePerCost(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasAllConversionsValuePerCost(): boolean;
  clearAllConversionsValuePerCost(): Metrics;

  getAllConversionsValuePerInteraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAllConversionsValuePerInteraction(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasAllConversionsValuePerInteraction(): boolean;
  clearAllConversionsValuePerInteraction(): Metrics;

  getAverageCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageCost(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasAverageCost(): boolean;
  clearAverageCost(): Metrics;

  getAverageCpc(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageCpc(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasAverageCpc(): boolean;
  clearAverageCpc(): Metrics;

  getAverageCpm(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAverageCpm(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasAverageCpm(): boolean;
  clearAverageCpm(): Metrics;

  getAveragePosition(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAveragePosition(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasAveragePosition(): boolean;
  clearAveragePosition(): Metrics;

  getBounceRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBounceRate(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasBounceRate(): boolean;
  clearBounceRate(): Metrics;

  getClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setClicks(value?: google_protobuf_wrappers_pb.Int64Value): Metrics;
  hasClicks(): boolean;
  clearClicks(): Metrics;

  getContentBudgetLostImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContentBudgetLostImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasContentBudgetLostImpressionShare(): boolean;
  clearContentBudgetLostImpressionShare(): Metrics;

  getContentImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContentImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasContentImpressionShare(): boolean;
  clearContentImpressionShare(): Metrics;

  getContentRankLostImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setContentRankLostImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasContentRankLostImpressionShare(): boolean;
  clearContentRankLostImpressionShare(): Metrics;

  getConversionRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionRate(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasConversionRate(): boolean;
  clearConversionRate(): Metrics;

  getConversionValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionValue(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasConversionValue(): boolean;
  clearConversionValue(): Metrics;

  getConversionValuePerCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionValuePerCost(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasConversionValuePerCost(): boolean;
  clearConversionValuePerCost(): Metrics;

  getConversionValuePerInteraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversionValuePerInteraction(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasConversionValuePerInteraction(): boolean;
  clearConversionValuePerInteraction(): Metrics;

  getConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setConversions(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasConversions(): boolean;
  clearConversions(): Metrics;

  getCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): Metrics;
  hasCostMicros(): boolean;
  clearCostMicros(): Metrics;

  getCostPerAllConversion(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCostPerAllConversion(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasCostPerAllConversion(): boolean;
  clearCostPerAllConversion(): Metrics;

  getCostPerConversion(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCostPerConversion(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasCostPerConversion(): boolean;
  clearCostPerConversion(): Metrics;

  getCrossDeviceConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCrossDeviceConversions(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasCrossDeviceConversions(): boolean;
  clearCrossDeviceConversions(): Metrics;

  getCtr(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCtr(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasCtr(): boolean;
  clearCtr(): Metrics;

  getEngagementRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setEngagementRate(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasEngagementRate(): boolean;
  clearEngagementRate(): Metrics;

  getEngagements(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEngagements(value?: google_protobuf_wrappers_pb.Int64Value): Metrics;
  hasEngagements(): boolean;
  clearEngagements(): Metrics;

  getImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setImpressions(value?: google_protobuf_wrappers_pb.Int64Value): Metrics;
  hasImpressions(): boolean;
  clearImpressions(): Metrics;

  getInteractionRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setInteractionRate(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasInteractionRate(): boolean;
  clearInteractionRate(): Metrics;

  getInteractions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setInteractions(value?: google_protobuf_wrappers_pb.Int64Value): Metrics;
  hasInteractions(): boolean;
  clearInteractions(): Metrics;

  getInvalidClickRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setInvalidClickRate(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasInvalidClickRate(): boolean;
  clearInvalidClickRate(): Metrics;

  getInvalidClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setInvalidClicks(value?: google_protobuf_wrappers_pb.Int64Value): Metrics;
  hasInvalidClicks(): boolean;
  clearInvalidClicks(): Metrics;

  getPercentNewVisitors(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPercentNewVisitors(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasPercentNewVisitors(): boolean;
  clearPercentNewVisitors(): Metrics;

  getPhoneCalls(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPhoneCalls(value?: google_protobuf_wrappers_pb.Int64Value): Metrics;
  hasPhoneCalls(): boolean;
  clearPhoneCalls(): Metrics;

  getPhoneImpressions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPhoneImpressions(value?: google_protobuf_wrappers_pb.Int64Value): Metrics;
  hasPhoneImpressions(): boolean;
  clearPhoneImpressions(): Metrics;

  getPhoneThroughRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPhoneThroughRate(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasPhoneThroughRate(): boolean;
  clearPhoneThroughRate(): Metrics;

  getRelativeCtr(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setRelativeCtr(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasRelativeCtr(): boolean;
  clearRelativeCtr(): Metrics;

  getSearchBudgetLostImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchBudgetLostImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasSearchBudgetLostImpressionShare(): boolean;
  clearSearchBudgetLostImpressionShare(): Metrics;

  getSearchExactMatchImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchExactMatchImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasSearchExactMatchImpressionShare(): boolean;
  clearSearchExactMatchImpressionShare(): Metrics;

  getSearchImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasSearchImpressionShare(): boolean;
  clearSearchImpressionShare(): Metrics;

  getSearchRankLostImpressionShare(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSearchRankLostImpressionShare(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasSearchRankLostImpressionShare(): boolean;
  clearSearchRankLostImpressionShare(): Metrics;

  getValuePerAllConversions(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setValuePerAllConversions(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasValuePerAllConversions(): boolean;
  clearValuePerAllConversions(): Metrics;

  getValuePerConversion(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setValuePerConversion(value?: google_protobuf_wrappers_pb.DoubleValue): Metrics;
  hasValuePerConversion(): boolean;
  clearValuePerConversion(): Metrics;

  getViewThroughConversions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setViewThroughConversions(value?: google_protobuf_wrappers_pb.Int64Value): Metrics;
  hasViewThroughConversions(): boolean;
  clearViewThroughConversions(): Metrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metrics.AsObject;
  static toObject(includeInstance: boolean, msg: Metrics): Metrics.AsObject;
  static serializeBinaryToWriter(message: Metrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metrics;
  static deserializeBinaryFromReader(message: Metrics, reader: jspb.BinaryReader): Metrics;
}

export namespace Metrics {
  export type AsObject = {
    allConversionRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    allConversionValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    allConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    allConversionsValuePerCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    allConversionsValuePerInteraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageCpc?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averageCpm?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    averagePosition?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    bounceRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    clicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    contentBudgetLostImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    contentImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    contentRankLostImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversionRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversionValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversionValuePerCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversionValuePerInteraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    conversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    costMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    costPerAllConversion?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    costPerConversion?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    crossDeviceConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    ctr?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    engagementRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    engagements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    impressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    interactionRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    interactions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    invalidClickRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    invalidClicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    percentNewVisitors?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    phoneCalls?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    phoneImpressions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    phoneThroughRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    relativeCtr?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchBudgetLostImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchExactMatchImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    searchRankLostImpressionShare?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    valuePerAllConversions?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    valuePerConversion?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    viewThroughConversions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

