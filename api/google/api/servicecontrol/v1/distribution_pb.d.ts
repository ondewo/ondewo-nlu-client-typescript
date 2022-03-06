import * as jspb from 'google-protobuf'



export class Distribution extends jspb.Message {
  getCount(): number;
  setCount(value: number): Distribution;

  getMean(): number;
  setMean(value: number): Distribution;

  getMinimum(): number;
  setMinimum(value: number): Distribution;

  getMaximum(): number;
  setMaximum(value: number): Distribution;

  getSumOfSquaredDeviation(): number;
  setSumOfSquaredDeviation(value: number): Distribution;

  getBucketCountsList(): Array<number>;
  setBucketCountsList(value: Array<number>): Distribution;
  clearBucketCountsList(): Distribution;
  addBucketCounts(value: number, index?: number): Distribution;

  getLinearBuckets(): Distribution.LinearBuckets | undefined;
  setLinearBuckets(value?: Distribution.LinearBuckets): Distribution;
  hasLinearBuckets(): boolean;
  clearLinearBuckets(): Distribution;

  getExponentialBuckets(): Distribution.ExponentialBuckets | undefined;
  setExponentialBuckets(value?: Distribution.ExponentialBuckets): Distribution;
  hasExponentialBuckets(): boolean;
  clearExponentialBuckets(): Distribution;

  getExplicitBuckets(): Distribution.ExplicitBuckets | undefined;
  setExplicitBuckets(value?: Distribution.ExplicitBuckets): Distribution;
  hasExplicitBuckets(): boolean;
  clearExplicitBuckets(): Distribution;

  getBucketOptionCase(): Distribution.BucketOptionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Distribution.AsObject;
  static toObject(includeInstance: boolean, msg: Distribution): Distribution.AsObject;
  static serializeBinaryToWriter(message: Distribution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Distribution;
  static deserializeBinaryFromReader(message: Distribution, reader: jspb.BinaryReader): Distribution;
}

export namespace Distribution {
  export type AsObject = {
    count: number,
    mean: number,
    minimum: number,
    maximum: number,
    sumOfSquaredDeviation: number,
    bucketCountsList: Array<number>,
    linearBuckets?: Distribution.LinearBuckets.AsObject,
    exponentialBuckets?: Distribution.ExponentialBuckets.AsObject,
    explicitBuckets?: Distribution.ExplicitBuckets.AsObject,
  }

  export class LinearBuckets extends jspb.Message {
    getNumFiniteBuckets(): number;
    setNumFiniteBuckets(value: number): LinearBuckets;

    getWidth(): number;
    setWidth(value: number): LinearBuckets;

    getOffset(): number;
    setOffset(value: number): LinearBuckets;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LinearBuckets.AsObject;
    static toObject(includeInstance: boolean, msg: LinearBuckets): LinearBuckets.AsObject;
    static serializeBinaryToWriter(message: LinearBuckets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LinearBuckets;
    static deserializeBinaryFromReader(message: LinearBuckets, reader: jspb.BinaryReader): LinearBuckets;
  }

  export namespace LinearBuckets {
    export type AsObject = {
      numFiniteBuckets: number,
      width: number,
      offset: number,
    }
  }


  export class ExponentialBuckets extends jspb.Message {
    getNumFiniteBuckets(): number;
    setNumFiniteBuckets(value: number): ExponentialBuckets;

    getGrowthFactor(): number;
    setGrowthFactor(value: number): ExponentialBuckets;

    getScale(): number;
    setScale(value: number): ExponentialBuckets;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExponentialBuckets.AsObject;
    static toObject(includeInstance: boolean, msg: ExponentialBuckets): ExponentialBuckets.AsObject;
    static serializeBinaryToWriter(message: ExponentialBuckets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExponentialBuckets;
    static deserializeBinaryFromReader(message: ExponentialBuckets, reader: jspb.BinaryReader): ExponentialBuckets;
  }

  export namespace ExponentialBuckets {
    export type AsObject = {
      numFiniteBuckets: number,
      growthFactor: number,
      scale: number,
    }
  }


  export class ExplicitBuckets extends jspb.Message {
    getBoundsList(): Array<number>;
    setBoundsList(value: Array<number>): ExplicitBuckets;
    clearBoundsList(): ExplicitBuckets;
    addBounds(value: number, index?: number): ExplicitBuckets;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExplicitBuckets.AsObject;
    static toObject(includeInstance: boolean, msg: ExplicitBuckets): ExplicitBuckets.AsObject;
    static serializeBinaryToWriter(message: ExplicitBuckets, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExplicitBuckets;
    static deserializeBinaryFromReader(message: ExplicitBuckets, reader: jspb.BinaryReader): ExplicitBuckets;
  }

  export namespace ExplicitBuckets {
    export type AsObject = {
      boundsList: Array<number>,
    }
  }


  export enum BucketOptionCase { 
    BUCKET_OPTION_NOT_SET = 0,
    LINEAR_BUCKETS = 7,
    EXPONENTIAL_BUCKETS = 8,
    EXPLICIT_BUCKETS = 9,
  }
}

