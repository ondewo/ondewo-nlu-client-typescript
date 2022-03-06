import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_datastore_v1_entity_pb from '../../../google/datastore/v1/entity_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_type_latlng_pb from '../../../google/type/latlng_pb';


export class EntityResult extends jspb.Message {
  getEntity(): google_datastore_v1_entity_pb.Entity | undefined;
  setEntity(value?: google_datastore_v1_entity_pb.Entity): EntityResult;
  hasEntity(): boolean;
  clearEntity(): EntityResult;

  getVersion(): number;
  setVersion(value: number): EntityResult;

  getCursor(): Uint8Array | string;
  getCursor_asU8(): Uint8Array;
  getCursor_asB64(): string;
  setCursor(value: Uint8Array | string): EntityResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityResult.AsObject;
  static toObject(includeInstance: boolean, msg: EntityResult): EntityResult.AsObject;
  static serializeBinaryToWriter(message: EntityResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityResult;
  static deserializeBinaryFromReader(message: EntityResult, reader: jspb.BinaryReader): EntityResult;
}

export namespace EntityResult {
  export type AsObject = {
    entity?: google_datastore_v1_entity_pb.Entity.AsObject,
    version: number,
    cursor: Uint8Array | string,
  }

  export enum ResultType { 
    RESULT_TYPE_UNSPECIFIED = 0,
    FULL = 1,
    PROJECTION = 2,
    KEY_ONLY = 3,
  }
}

export class Query extends jspb.Message {
  getProjectionList(): Array<Projection>;
  setProjectionList(value: Array<Projection>): Query;
  clearProjectionList(): Query;
  addProjection(value?: Projection, index?: number): Projection;

  getKindList(): Array<KindExpression>;
  setKindList(value: Array<KindExpression>): Query;
  clearKindList(): Query;
  addKind(value?: KindExpression, index?: number): KindExpression;

  getFilter(): Filter | undefined;
  setFilter(value?: Filter): Query;
  hasFilter(): boolean;
  clearFilter(): Query;

  getOrderList(): Array<PropertyOrder>;
  setOrderList(value: Array<PropertyOrder>): Query;
  clearOrderList(): Query;
  addOrder(value?: PropertyOrder, index?: number): PropertyOrder;

  getDistinctOnList(): Array<PropertyReference>;
  setDistinctOnList(value: Array<PropertyReference>): Query;
  clearDistinctOnList(): Query;
  addDistinctOn(value?: PropertyReference, index?: number): PropertyReference;

  getStartCursor(): Uint8Array | string;
  getStartCursor_asU8(): Uint8Array;
  getStartCursor_asB64(): string;
  setStartCursor(value: Uint8Array | string): Query;

  getEndCursor(): Uint8Array | string;
  getEndCursor_asU8(): Uint8Array;
  getEndCursor_asB64(): string;
  setEndCursor(value: Uint8Array | string): Query;

  getOffset(): number;
  setOffset(value: number): Query;

  getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setLimit(value?: google_protobuf_wrappers_pb.Int32Value): Query;
  hasLimit(): boolean;
  clearLimit(): Query;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    projectionList: Array<Projection.AsObject>,
    kindList: Array<KindExpression.AsObject>,
    filter?: Filter.AsObject,
    orderList: Array<PropertyOrder.AsObject>,
    distinctOnList: Array<PropertyReference.AsObject>,
    startCursor: Uint8Array | string,
    endCursor: Uint8Array | string,
    offset: number,
    limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class KindExpression extends jspb.Message {
  getName(): string;
  setName(value: string): KindExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KindExpression.AsObject;
  static toObject(includeInstance: boolean, msg: KindExpression): KindExpression.AsObject;
  static serializeBinaryToWriter(message: KindExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KindExpression;
  static deserializeBinaryFromReader(message: KindExpression, reader: jspb.BinaryReader): KindExpression;
}

export namespace KindExpression {
  export type AsObject = {
    name: string,
  }
}

export class PropertyReference extends jspb.Message {
  getName(): string;
  setName(value: string): PropertyReference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyReference.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyReference): PropertyReference.AsObject;
  static serializeBinaryToWriter(message: PropertyReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyReference;
  static deserializeBinaryFromReader(message: PropertyReference, reader: jspb.BinaryReader): PropertyReference;
}

export namespace PropertyReference {
  export type AsObject = {
    name: string,
  }
}

export class Projection extends jspb.Message {
  getProperty(): PropertyReference | undefined;
  setProperty(value?: PropertyReference): Projection;
  hasProperty(): boolean;
  clearProperty(): Projection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Projection.AsObject;
  static toObject(includeInstance: boolean, msg: Projection): Projection.AsObject;
  static serializeBinaryToWriter(message: Projection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Projection;
  static deserializeBinaryFromReader(message: Projection, reader: jspb.BinaryReader): Projection;
}

export namespace Projection {
  export type AsObject = {
    property?: PropertyReference.AsObject,
  }
}

export class PropertyOrder extends jspb.Message {
  getProperty(): PropertyReference | undefined;
  setProperty(value?: PropertyReference): PropertyOrder;
  hasProperty(): boolean;
  clearProperty(): PropertyOrder;

  getDirection(): PropertyOrder.Direction;
  setDirection(value: PropertyOrder.Direction): PropertyOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyOrder.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyOrder): PropertyOrder.AsObject;
  static serializeBinaryToWriter(message: PropertyOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyOrder;
  static deserializeBinaryFromReader(message: PropertyOrder, reader: jspb.BinaryReader): PropertyOrder;
}

export namespace PropertyOrder {
  export type AsObject = {
    property?: PropertyReference.AsObject,
    direction: PropertyOrder.Direction,
  }

  export enum Direction { 
    DIRECTION_UNSPECIFIED = 0,
    ASCENDING = 1,
    DESCENDING = 2,
  }
}

export class Filter extends jspb.Message {
  getCompositeFilter(): CompositeFilter | undefined;
  setCompositeFilter(value?: CompositeFilter): Filter;
  hasCompositeFilter(): boolean;
  clearCompositeFilter(): Filter;

  getPropertyFilter(): PropertyFilter | undefined;
  setPropertyFilter(value?: PropertyFilter): Filter;
  hasPropertyFilter(): boolean;
  clearPropertyFilter(): Filter;

  getFilterTypeCase(): Filter.FilterTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    compositeFilter?: CompositeFilter.AsObject,
    propertyFilter?: PropertyFilter.AsObject,
  }

  export enum FilterTypeCase { 
    FILTER_TYPE_NOT_SET = 0,
    COMPOSITE_FILTER = 1,
    PROPERTY_FILTER = 2,
  }
}

export class CompositeFilter extends jspb.Message {
  getOp(): CompositeFilter.Operator;
  setOp(value: CompositeFilter.Operator): CompositeFilter;

  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): CompositeFilter;
  clearFiltersList(): CompositeFilter;
  addFilters(value?: Filter, index?: number): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CompositeFilter): CompositeFilter.AsObject;
  static serializeBinaryToWriter(message: CompositeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositeFilter;
  static deserializeBinaryFromReader(message: CompositeFilter, reader: jspb.BinaryReader): CompositeFilter;
}

export namespace CompositeFilter {
  export type AsObject = {
    op: CompositeFilter.Operator,
    filtersList: Array<Filter.AsObject>,
  }

  export enum Operator { 
    OPERATOR_UNSPECIFIED = 0,
    AND = 1,
  }
}

export class PropertyFilter extends jspb.Message {
  getProperty(): PropertyReference | undefined;
  setProperty(value?: PropertyReference): PropertyFilter;
  hasProperty(): boolean;
  clearProperty(): PropertyFilter;

  getOp(): PropertyFilter.Operator;
  setOp(value: PropertyFilter.Operator): PropertyFilter;

  getValue(): google_datastore_v1_entity_pb.Value | undefined;
  setValue(value?: google_datastore_v1_entity_pb.Value): PropertyFilter;
  hasValue(): boolean;
  clearValue(): PropertyFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyFilter): PropertyFilter.AsObject;
  static serializeBinaryToWriter(message: PropertyFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyFilter;
  static deserializeBinaryFromReader(message: PropertyFilter, reader: jspb.BinaryReader): PropertyFilter;
}

export namespace PropertyFilter {
  export type AsObject = {
    property?: PropertyReference.AsObject,
    op: PropertyFilter.Operator,
    value?: google_datastore_v1_entity_pb.Value.AsObject,
  }

  export enum Operator { 
    OPERATOR_UNSPECIFIED = 0,
    LESS_THAN = 1,
    LESS_THAN_OR_EQUAL = 2,
    GREATER_THAN = 3,
    GREATER_THAN_OR_EQUAL = 4,
    EQUAL = 5,
    HAS_ANCESTOR = 11,
  }
}

export class GqlQuery extends jspb.Message {
  getQueryString(): string;
  setQueryString(value: string): GqlQuery;

  getAllowLiterals(): boolean;
  setAllowLiterals(value: boolean): GqlQuery;

  getNamedBindingsMap(): jspb.Map<string, GqlQueryParameter>;
  clearNamedBindingsMap(): GqlQuery;

  getPositionalBindingsList(): Array<GqlQueryParameter>;
  setPositionalBindingsList(value: Array<GqlQueryParameter>): GqlQuery;
  clearPositionalBindingsList(): GqlQuery;
  addPositionalBindings(value?: GqlQueryParameter, index?: number): GqlQueryParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GqlQuery.AsObject;
  static toObject(includeInstance: boolean, msg: GqlQuery): GqlQuery.AsObject;
  static serializeBinaryToWriter(message: GqlQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GqlQuery;
  static deserializeBinaryFromReader(message: GqlQuery, reader: jspb.BinaryReader): GqlQuery;
}

export namespace GqlQuery {
  export type AsObject = {
    queryString: string,
    allowLiterals: boolean,
    namedBindingsMap: Array<[string, GqlQueryParameter.AsObject]>,
    positionalBindingsList: Array<GqlQueryParameter.AsObject>,
  }
}

export class GqlQueryParameter extends jspb.Message {
  getValue(): google_datastore_v1_entity_pb.Value | undefined;
  setValue(value?: google_datastore_v1_entity_pb.Value): GqlQueryParameter;
  hasValue(): boolean;
  clearValue(): GqlQueryParameter;

  getCursor(): Uint8Array | string;
  getCursor_asU8(): Uint8Array;
  getCursor_asB64(): string;
  setCursor(value: Uint8Array | string): GqlQueryParameter;

  getParameterTypeCase(): GqlQueryParameter.ParameterTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GqlQueryParameter.AsObject;
  static toObject(includeInstance: boolean, msg: GqlQueryParameter): GqlQueryParameter.AsObject;
  static serializeBinaryToWriter(message: GqlQueryParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GqlQueryParameter;
  static deserializeBinaryFromReader(message: GqlQueryParameter, reader: jspb.BinaryReader): GqlQueryParameter;
}

export namespace GqlQueryParameter {
  export type AsObject = {
    value?: google_datastore_v1_entity_pb.Value.AsObject,
    cursor: Uint8Array | string,
  }

  export enum ParameterTypeCase { 
    PARAMETER_TYPE_NOT_SET = 0,
    VALUE = 2,
    CURSOR = 3,
  }
}

export class QueryResultBatch extends jspb.Message {
  getSkippedResults(): number;
  setSkippedResults(value: number): QueryResultBatch;

  getSkippedCursor(): Uint8Array | string;
  getSkippedCursor_asU8(): Uint8Array;
  getSkippedCursor_asB64(): string;
  setSkippedCursor(value: Uint8Array | string): QueryResultBatch;

  getEntityResultType(): EntityResult.ResultType;
  setEntityResultType(value: EntityResult.ResultType): QueryResultBatch;

  getEntityResultsList(): Array<EntityResult>;
  setEntityResultsList(value: Array<EntityResult>): QueryResultBatch;
  clearEntityResultsList(): QueryResultBatch;
  addEntityResults(value?: EntityResult, index?: number): EntityResult;

  getEndCursor(): Uint8Array | string;
  getEndCursor_asU8(): Uint8Array;
  getEndCursor_asB64(): string;
  setEndCursor(value: Uint8Array | string): QueryResultBatch;

  getMoreResults(): QueryResultBatch.MoreResultsType;
  setMoreResults(value: QueryResultBatch.MoreResultsType): QueryResultBatch;

  getSnapshotVersion(): number;
  setSnapshotVersion(value: number): QueryResultBatch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResultBatch.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResultBatch): QueryResultBatch.AsObject;
  static serializeBinaryToWriter(message: QueryResultBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResultBatch;
  static deserializeBinaryFromReader(message: QueryResultBatch, reader: jspb.BinaryReader): QueryResultBatch;
}

export namespace QueryResultBatch {
  export type AsObject = {
    skippedResults: number,
    skippedCursor: Uint8Array | string,
    entityResultType: EntityResult.ResultType,
    entityResultsList: Array<EntityResult.AsObject>,
    endCursor: Uint8Array | string,
    moreResults: QueryResultBatch.MoreResultsType,
    snapshotVersion: number,
  }

  export enum MoreResultsType { 
    MORE_RESULTS_TYPE_UNSPECIFIED = 0,
    NOT_FINISHED = 1,
    MORE_RESULTS_AFTER_LIMIT = 2,
    MORE_RESULTS_AFTER_CURSOR = 4,
    NO_MORE_RESULTS = 3,
  }
}

