import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_common_bidding_pb from '../../../../../google/ads/googleads/v0/common/bidding_pb';
import * as google_ads_googleads_v0_enums_bidding_strategy_type_pb from '../../../../../google/ads/googleads/v0/enums/bidding_strategy_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class BiddingStrategy extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): BiddingStrategy;

  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): BiddingStrategy;
  hasId(): boolean;
  clearId(): BiddingStrategy;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): BiddingStrategy;
  hasName(): boolean;
  clearName(): BiddingStrategy;

  getType(): google_ads_googleads_v0_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyType;
  setType(value: google_ads_googleads_v0_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyType): BiddingStrategy;

  getEnhancedCpc(): google_ads_googleads_v0_common_bidding_pb.EnhancedCpc | undefined;
  setEnhancedCpc(value?: google_ads_googleads_v0_common_bidding_pb.EnhancedCpc): BiddingStrategy;
  hasEnhancedCpc(): boolean;
  clearEnhancedCpc(): BiddingStrategy;

  getPageOnePromoted(): google_ads_googleads_v0_common_bidding_pb.PageOnePromoted | undefined;
  setPageOnePromoted(value?: google_ads_googleads_v0_common_bidding_pb.PageOnePromoted): BiddingStrategy;
  hasPageOnePromoted(): boolean;
  clearPageOnePromoted(): BiddingStrategy;

  getTargetCpa(): google_ads_googleads_v0_common_bidding_pb.TargetCpa | undefined;
  setTargetCpa(value?: google_ads_googleads_v0_common_bidding_pb.TargetCpa): BiddingStrategy;
  hasTargetCpa(): boolean;
  clearTargetCpa(): BiddingStrategy;

  getTargetOutrankShare(): google_ads_googleads_v0_common_bidding_pb.TargetOutrankShare | undefined;
  setTargetOutrankShare(value?: google_ads_googleads_v0_common_bidding_pb.TargetOutrankShare): BiddingStrategy;
  hasTargetOutrankShare(): boolean;
  clearTargetOutrankShare(): BiddingStrategy;

  getTargetRoas(): google_ads_googleads_v0_common_bidding_pb.TargetRoas | undefined;
  setTargetRoas(value?: google_ads_googleads_v0_common_bidding_pb.TargetRoas): BiddingStrategy;
  hasTargetRoas(): boolean;
  clearTargetRoas(): BiddingStrategy;

  getTargetSpend(): google_ads_googleads_v0_common_bidding_pb.TargetSpend | undefined;
  setTargetSpend(value?: google_ads_googleads_v0_common_bidding_pb.TargetSpend): BiddingStrategy;
  hasTargetSpend(): boolean;
  clearTargetSpend(): BiddingStrategy;

  getSchemeCase(): BiddingStrategy.SchemeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingStrategy.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingStrategy): BiddingStrategy.AsObject;
  static serializeBinaryToWriter(message: BiddingStrategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingStrategy;
  static deserializeBinaryFromReader(message: BiddingStrategy, reader: jspb.BinaryReader): BiddingStrategy;
}

export namespace BiddingStrategy {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v0_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyType,
    enhancedCpc?: google_ads_googleads_v0_common_bidding_pb.EnhancedCpc.AsObject,
    pageOnePromoted?: google_ads_googleads_v0_common_bidding_pb.PageOnePromoted.AsObject,
    targetCpa?: google_ads_googleads_v0_common_bidding_pb.TargetCpa.AsObject,
    targetOutrankShare?: google_ads_googleads_v0_common_bidding_pb.TargetOutrankShare.AsObject,
    targetRoas?: google_ads_googleads_v0_common_bidding_pb.TargetRoas.AsObject,
    targetSpend?: google_ads_googleads_v0_common_bidding_pb.TargetSpend.AsObject,
  }

  export enum SchemeCase { 
    SCHEME_NOT_SET = 0,
    ENHANCED_CPC = 7,
    PAGE_ONE_PROMOTED = 8,
    TARGET_CPA = 9,
    TARGET_OUTRANK_SHARE = 10,
    TARGET_ROAS = 11,
    TARGET_SPEND = 12,
  }
}

