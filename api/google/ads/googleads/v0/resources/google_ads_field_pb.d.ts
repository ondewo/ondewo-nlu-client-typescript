import * as jspb from 'google-protobuf'

import * as google_ads_googleads_v0_enums_google_ads_field_category_pb from '../../../../../google/ads/googleads/v0/enums/google_ads_field_category_pb';
import * as google_ads_googleads_v0_enums_google_ads_field_data_type_pb from '../../../../../google/ads/googleads/v0/enums/google_ads_field_data_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class GoogleAdsField extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): GoogleAdsField;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): GoogleAdsField;
  hasName(): boolean;
  clearName(): GoogleAdsField;

  getCategory(): google_ads_googleads_v0_enums_google_ads_field_category_pb.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory;
  setCategory(value: google_ads_googleads_v0_enums_google_ads_field_category_pb.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory): GoogleAdsField;

  getSelectable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSelectable(value?: google_protobuf_wrappers_pb.BoolValue): GoogleAdsField;
  hasSelectable(): boolean;
  clearSelectable(): GoogleAdsField;

  getFilterable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setFilterable(value?: google_protobuf_wrappers_pb.BoolValue): GoogleAdsField;
  hasFilterable(): boolean;
  clearFilterable(): GoogleAdsField;

  getSortable(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSortable(value?: google_protobuf_wrappers_pb.BoolValue): GoogleAdsField;
  hasSortable(): boolean;
  clearSortable(): GoogleAdsField;

  getSelectableWithList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setSelectableWithList(value: Array<google_protobuf_wrappers_pb.StringValue>): GoogleAdsField;
  clearSelectableWithList(): GoogleAdsField;
  addSelectableWith(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getAttributeResourcesList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setAttributeResourcesList(value: Array<google_protobuf_wrappers_pb.StringValue>): GoogleAdsField;
  clearAttributeResourcesList(): GoogleAdsField;
  addAttributeResources(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getMetricsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setMetricsList(value: Array<google_protobuf_wrappers_pb.StringValue>): GoogleAdsField;
  clearMetricsList(): GoogleAdsField;
  addMetrics(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getSegmentsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setSegmentsList(value: Array<google_protobuf_wrappers_pb.StringValue>): GoogleAdsField;
  clearSegmentsList(): GoogleAdsField;
  addSegments(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getEnumValuesList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setEnumValuesList(value: Array<google_protobuf_wrappers_pb.StringValue>): GoogleAdsField;
  clearEnumValuesList(): GoogleAdsField;
  addEnumValues(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getDataType(): google_ads_googleads_v0_enums_google_ads_field_data_type_pb.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType;
  setDataType(value: google_ads_googleads_v0_enums_google_ads_field_data_type_pb.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType): GoogleAdsField;

  getTypeUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTypeUrl(value?: google_protobuf_wrappers_pb.StringValue): GoogleAdsField;
  hasTypeUrl(): boolean;
  clearTypeUrl(): GoogleAdsField;

  getIsRepeated(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsRepeated(value?: google_protobuf_wrappers_pb.BoolValue): GoogleAdsField;
  hasIsRepeated(): boolean;
  clearIsRepeated(): GoogleAdsField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsField.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsField): GoogleAdsField.AsObject;
  static serializeBinaryToWriter(message: GoogleAdsField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsField;
  static deserializeBinaryFromReader(message: GoogleAdsField, reader: jspb.BinaryReader): GoogleAdsField;
}

export namespace GoogleAdsField {
  export type AsObject = {
    resourceName: string,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    category: google_ads_googleads_v0_enums_google_ads_field_category_pb.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory,
    selectable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    filterable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    sortable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    selectableWithList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    attributeResourcesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    metricsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    segmentsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    enumValuesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    dataType: google_ads_googleads_v0_enums_google_ads_field_data_type_pb.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType,
    typeUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    isRepeated?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

