import * as jspb from 'google-protobuf'



export class Vertex extends jspb.Message {
  getX(): number;
  setX(value: number): Vertex;

  getY(): number;
  setY(value: number): Vertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vertex.AsObject;
  static toObject(includeInstance: boolean, msg: Vertex): Vertex.AsObject;
  static serializeBinaryToWriter(message: Vertex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vertex;
  static deserializeBinaryFromReader(message: Vertex, reader: jspb.BinaryReader): Vertex;
}

export namespace Vertex {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class BoundingPoly extends jspb.Message {
  getVerticesList(): Array<Vertex>;
  setVerticesList(value: Array<Vertex>): BoundingPoly;
  clearVerticesList(): BoundingPoly;
  addVertices(value?: Vertex, index?: number): Vertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoundingPoly.AsObject;
  static toObject(includeInstance: boolean, msg: BoundingPoly): BoundingPoly.AsObject;
  static serializeBinaryToWriter(message: BoundingPoly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoundingPoly;
  static deserializeBinaryFromReader(message: BoundingPoly, reader: jspb.BinaryReader): BoundingPoly;
}

export namespace BoundingPoly {
  export type AsObject = {
    verticesList: Array<Vertex.AsObject>,
  }
}

export class Position extends jspb.Message {
  getX(): number;
  setX(value: number): Position;

  getY(): number;
  setY(value: number): Position;

  getZ(): number;
  setZ(value: number): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

