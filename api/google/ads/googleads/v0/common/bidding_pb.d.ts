import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_enums_page_one_promoted_strategy_goal_pb from '../../../../../google/ads/googleads/v0/enums/page_one_promoted_strategy_goal_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class EnhancedCpc extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnhancedCpc.AsObject;
  static toObject(includeInstance: boolean, msg: EnhancedCpc): EnhancedCpc.AsObject;
  static serializeBinaryToWriter(message: EnhancedCpc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnhancedCpc;
  static deserializeBinaryFromReader(message: EnhancedCpc, reader: jspb.BinaryReader): EnhancedCpc;
}

export namespace EnhancedCpc {
  export type AsObject = {
  }
}

export class ManualCpc extends jspb.Message {
  getEnhancedCpcEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnhancedCpcEnabled(value?: google_protobuf_wrappers_pb.BoolValue): ManualCpc;
  hasEnhancedCpcEnabled(): boolean;
  clearEnhancedCpcEnabled(): ManualCpc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualCpc.AsObject;
  static toObject(includeInstance: boolean, msg: ManualCpc): ManualCpc.AsObject;
  static serializeBinaryToWriter(message: ManualCpc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualCpc;
  static deserializeBinaryFromReader(message: ManualCpc, reader: jspb.BinaryReader): ManualCpc;
}

export namespace ManualCpc {
  export type AsObject = {
    enhancedCpcEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class ManualCpm extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualCpm.AsObject;
  static toObject(includeInstance: boolean, msg: ManualCpm): ManualCpm.AsObject;
  static serializeBinaryToWriter(message: ManualCpm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualCpm;
  static deserializeBinaryFromReader(message: ManualCpm, reader: jspb.BinaryReader): ManualCpm;
}

export namespace ManualCpm {
  export type AsObject = {
  }
}

export class MaximizeConversions extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaximizeConversions.AsObject;
  static toObject(includeInstance: boolean, msg: MaximizeConversions): MaximizeConversions.AsObject;
  static serializeBinaryToWriter(message: MaximizeConversions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaximizeConversions;
  static deserializeBinaryFromReader(message: MaximizeConversions, reader: jspb.BinaryReader): MaximizeConversions;
}

export namespace MaximizeConversions {
  export type AsObject = {
  }
}

export class MaximizeConversionValue extends jspb.Message {
  getTargetRoas(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTargetRoas(value?: google_protobuf_wrappers_pb.DoubleValue): MaximizeConversionValue;
  hasTargetRoas(): boolean;
  clearTargetRoas(): MaximizeConversionValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaximizeConversionValue.AsObject;
  static toObject(includeInstance: boolean, msg: MaximizeConversionValue): MaximizeConversionValue.AsObject;
  static serializeBinaryToWriter(message: MaximizeConversionValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaximizeConversionValue;
  static deserializeBinaryFromReader(message: MaximizeConversionValue, reader: jspb.BinaryReader): MaximizeConversionValue;
}

export namespace MaximizeConversionValue {
  export type AsObject = {
    targetRoas?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}

export class PageOnePromoted extends jspb.Message {
  getStrategyGoal(): google_ads_googleads_v0_enums_page_one_promoted_strategy_goal_pb.PageOnePromotedStrategyGoalEnum.PageOnePromotedStrategyGoal;
  setStrategyGoal(value: google_ads_googleads_v0_enums_page_one_promoted_strategy_goal_pb.PageOnePromotedStrategyGoalEnum.PageOnePromotedStrategyGoal): PageOnePromoted;

  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): PageOnePromoted;
  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): PageOnePromoted;

  getBidModifier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBidModifier(value?: google_protobuf_wrappers_pb.DoubleValue): PageOnePromoted;
  hasBidModifier(): boolean;
  clearBidModifier(): PageOnePromoted;

  getOnlyRaiseCpcBids(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setOnlyRaiseCpcBids(value?: google_protobuf_wrappers_pb.BoolValue): PageOnePromoted;
  hasOnlyRaiseCpcBids(): boolean;
  clearOnlyRaiseCpcBids(): PageOnePromoted;

  getRaiseCpcBidWhenBudgetConstrained(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setRaiseCpcBidWhenBudgetConstrained(value?: google_protobuf_wrappers_pb.BoolValue): PageOnePromoted;
  hasRaiseCpcBidWhenBudgetConstrained(): boolean;
  clearRaiseCpcBidWhenBudgetConstrained(): PageOnePromoted;

  getRaiseCpcBidWhenQualityScoreIsLow(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setRaiseCpcBidWhenQualityScoreIsLow(value?: google_protobuf_wrappers_pb.BoolValue): PageOnePromoted;
  hasRaiseCpcBidWhenQualityScoreIsLow(): boolean;
  clearRaiseCpcBidWhenQualityScoreIsLow(): PageOnePromoted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageOnePromoted.AsObject;
  static toObject(includeInstance: boolean, msg: PageOnePromoted): PageOnePromoted.AsObject;
  static serializeBinaryToWriter(message: PageOnePromoted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageOnePromoted;
  static deserializeBinaryFromReader(message: PageOnePromoted, reader: jspb.BinaryReader): PageOnePromoted;
}

export namespace PageOnePromoted {
  export type AsObject = {
    strategyGoal: google_ads_googleads_v0_enums_page_one_promoted_strategy_goal_pb.PageOnePromotedStrategyGoalEnum.PageOnePromotedStrategyGoal,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    bidModifier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    onlyRaiseCpcBids?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    raiseCpcBidWhenBudgetConstrained?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    raiseCpcBidWhenQualityScoreIsLow?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class TargetCpa extends jspb.Message {
  getTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetCpa;
  hasTargetCpaMicros(): boolean;
  clearTargetCpaMicros(): TargetCpa;

  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetCpa;
  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): TargetCpa;

  getCpcBidFloorMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidFloorMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetCpa;
  hasCpcBidFloorMicros(): boolean;
  clearCpcBidFloorMicros(): TargetCpa;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetCpa.AsObject;
  static toObject(includeInstance: boolean, msg: TargetCpa): TargetCpa.AsObject;
  static serializeBinaryToWriter(message: TargetCpa, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetCpa;
  static deserializeBinaryFromReader(message: TargetCpa, reader: jspb.BinaryReader): TargetCpa;
}

export namespace TargetCpa {
  export type AsObject = {
    targetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpcBidFloorMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class TargetOutrankShare extends jspb.Message {
  getTargetOutrankShareMicros(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setTargetOutrankShareMicros(value?: google_protobuf_wrappers_pb.Int32Value): TargetOutrankShare;
  hasTargetOutrankShareMicros(): boolean;
  clearTargetOutrankShareMicros(): TargetOutrankShare;

  getCompetitorDomain(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCompetitorDomain(value?: google_protobuf_wrappers_pb.StringValue): TargetOutrankShare;
  hasCompetitorDomain(): boolean;
  clearCompetitorDomain(): TargetOutrankShare;

  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetOutrankShare;
  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): TargetOutrankShare;

  getOnlyRaiseCpcBids(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setOnlyRaiseCpcBids(value?: google_protobuf_wrappers_pb.BoolValue): TargetOutrankShare;
  hasOnlyRaiseCpcBids(): boolean;
  clearOnlyRaiseCpcBids(): TargetOutrankShare;

  getRaiseCpcBidWhenQualityScoreIsLow(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setRaiseCpcBidWhenQualityScoreIsLow(value?: google_protobuf_wrappers_pb.BoolValue): TargetOutrankShare;
  hasRaiseCpcBidWhenQualityScoreIsLow(): boolean;
  clearRaiseCpcBidWhenQualityScoreIsLow(): TargetOutrankShare;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetOutrankShare.AsObject;
  static toObject(includeInstance: boolean, msg: TargetOutrankShare): TargetOutrankShare.AsObject;
  static serializeBinaryToWriter(message: TargetOutrankShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetOutrankShare;
  static deserializeBinaryFromReader(message: TargetOutrankShare, reader: jspb.BinaryReader): TargetOutrankShare;
}

export namespace TargetOutrankShare {
  export type AsObject = {
    targetOutrankShareMicros?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    competitorDomain?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    onlyRaiseCpcBids?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    raiseCpcBidWhenQualityScoreIsLow?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class TargetRoas extends jspb.Message {
  getTargetRoas(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTargetRoas(value?: google_protobuf_wrappers_pb.DoubleValue): TargetRoas;
  hasTargetRoas(): boolean;
  clearTargetRoas(): TargetRoas;

  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetRoas;
  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): TargetRoas;

  getCpcBidFloorMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidFloorMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetRoas;
  hasCpcBidFloorMicros(): boolean;
  clearCpcBidFloorMicros(): TargetRoas;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetRoas.AsObject;
  static toObject(includeInstance: boolean, msg: TargetRoas): TargetRoas.AsObject;
  static serializeBinaryToWriter(message: TargetRoas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetRoas;
  static deserializeBinaryFromReader(message: TargetRoas, reader: jspb.BinaryReader): TargetRoas;
}

export namespace TargetRoas {
  export type AsObject = {
    targetRoas?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpcBidFloorMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class TargetSpend extends jspb.Message {
  getTargetSpendMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTargetSpendMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetSpend;
  hasTargetSpendMicros(): boolean;
  clearTargetSpendMicros(): TargetSpend;

  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): TargetSpend;
  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): TargetSpend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetSpend.AsObject;
  static toObject(includeInstance: boolean, msg: TargetSpend): TargetSpend.AsObject;
  static serializeBinaryToWriter(message: TargetSpend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetSpend;
  static deserializeBinaryFromReader(message: TargetSpend, reader: jspb.BinaryReader): TargetSpend;
}

export namespace TargetSpend {
  export type AsObject = {
    targetSpendMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class PercentCpc extends jspb.Message {
  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): PercentCpc;
  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): PercentCpc;

  getEnhancedCpcEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnhancedCpcEnabled(value?: google_protobuf_wrappers_pb.BoolValue): PercentCpc;
  hasEnhancedCpcEnabled(): boolean;
  clearEnhancedCpcEnabled(): PercentCpc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PercentCpc.AsObject;
  static toObject(includeInstance: boolean, msg: PercentCpc): PercentCpc.AsObject;
  static serializeBinaryToWriter(message: PercentCpc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PercentCpc;
  static deserializeBinaryFromReader(message: PercentCpc, reader: jspb.BinaryReader): PercentCpc;
}

export namespace PercentCpc {
  export type AsObject = {
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    enhancedCpcEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

