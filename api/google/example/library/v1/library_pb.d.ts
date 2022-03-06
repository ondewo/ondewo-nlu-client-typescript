import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Book extends jspb.Message {
  getName(): string;
  setName(value: string): Book;

  getAuthor(): string;
  setAuthor(value: string): Book;

  getTitle(): string;
  setTitle(value: string): Book;

  getRead(): boolean;
  setRead(value: boolean): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    name: string,
    author: string,
    title: string,
    read: boolean,
  }
}

export class Shelf extends jspb.Message {
  getName(): string;
  setName(value: string): Shelf;

  getTheme(): string;
  setTheme(value: string): Shelf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Shelf.AsObject;
  static toObject(includeInstance: boolean, msg: Shelf): Shelf.AsObject;
  static serializeBinaryToWriter(message: Shelf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Shelf;
  static deserializeBinaryFromReader(message: Shelf, reader: jspb.BinaryReader): Shelf;
}

export namespace Shelf {
  export type AsObject = {
    name: string,
    theme: string,
  }
}

export class CreateShelfRequest extends jspb.Message {
  getShelf(): Shelf | undefined;
  setShelf(value?: Shelf): CreateShelfRequest;
  hasShelf(): boolean;
  clearShelf(): CreateShelfRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateShelfRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateShelfRequest): CreateShelfRequest.AsObject;
  static serializeBinaryToWriter(message: CreateShelfRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateShelfRequest;
  static deserializeBinaryFromReader(message: CreateShelfRequest, reader: jspb.BinaryReader): CreateShelfRequest;
}

export namespace CreateShelfRequest {
  export type AsObject = {
    shelf?: Shelf.AsObject,
  }
}

export class GetShelfRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetShelfRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetShelfRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetShelfRequest): GetShelfRequest.AsObject;
  static serializeBinaryToWriter(message: GetShelfRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetShelfRequest;
  static deserializeBinaryFromReader(message: GetShelfRequest, reader: jspb.BinaryReader): GetShelfRequest;
}

export namespace GetShelfRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListShelvesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListShelvesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListShelvesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShelvesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListShelvesRequest): ListShelvesRequest.AsObject;
  static serializeBinaryToWriter(message: ListShelvesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShelvesRequest;
  static deserializeBinaryFromReader(message: ListShelvesRequest, reader: jspb.BinaryReader): ListShelvesRequest;
}

export namespace ListShelvesRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListShelvesResponse extends jspb.Message {
  getShelvesList(): Array<Shelf>;
  setShelvesList(value: Array<Shelf>): ListShelvesResponse;
  clearShelvesList(): ListShelvesResponse;
  addShelves(value?: Shelf, index?: number): Shelf;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListShelvesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListShelvesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListShelvesResponse): ListShelvesResponse.AsObject;
  static serializeBinaryToWriter(message: ListShelvesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListShelvesResponse;
  static deserializeBinaryFromReader(message: ListShelvesResponse, reader: jspb.BinaryReader): ListShelvesResponse;
}

export namespace ListShelvesResponse {
  export type AsObject = {
    shelvesList: Array<Shelf.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteShelfRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteShelfRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteShelfRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteShelfRequest): DeleteShelfRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteShelfRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteShelfRequest;
  static deserializeBinaryFromReader(message: DeleteShelfRequest, reader: jspb.BinaryReader): DeleteShelfRequest;
}

export namespace DeleteShelfRequest {
  export type AsObject = {
    name: string,
  }
}

export class MergeShelvesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): MergeShelvesRequest;

  getOtherShelfName(): string;
  setOtherShelfName(value: string): MergeShelvesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeShelvesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MergeShelvesRequest): MergeShelvesRequest.AsObject;
  static serializeBinaryToWriter(message: MergeShelvesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeShelvesRequest;
  static deserializeBinaryFromReader(message: MergeShelvesRequest, reader: jspb.BinaryReader): MergeShelvesRequest;
}

export namespace MergeShelvesRequest {
  export type AsObject = {
    name: string,
    otherShelfName: string,
  }
}

export class CreateBookRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateBookRequest;

  getBook(): Book | undefined;
  setBook(value?: Book): CreateBookRequest;
  hasBook(): boolean;
  clearBook(): CreateBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBookRequest): CreateBookRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBookRequest;
  static deserializeBinaryFromReader(message: CreateBookRequest, reader: jspb.BinaryReader): CreateBookRequest;
}

export namespace CreateBookRequest {
  export type AsObject = {
    name: string,
    book?: Book.AsObject,
  }
}

export class GetBookRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.AsObject;
  static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookRequest;
  static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;
}

export namespace GetBookRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListBooksRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListBooksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBooksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListBooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksRequest): ListBooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListBooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksRequest;
  static deserializeBinaryFromReader(message: ListBooksRequest, reader: jspb.BinaryReader): ListBooksRequest;
}

export namespace ListBooksRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListBooksResponse extends jspb.Message {
  getBooksList(): Array<Book>;
  setBooksList(value: Array<Book>): ListBooksResponse;
  clearBooksList(): ListBooksResponse;
  addBooks(value?: Book, index?: number): Book;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListBooksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBooksResponse): ListBooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListBooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBooksResponse;
  static deserializeBinaryFromReader(message: ListBooksResponse, reader: jspb.BinaryReader): ListBooksResponse;
}

export namespace ListBooksResponse {
  export type AsObject = {
    booksList: Array<Book.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateBookRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateBookRequest;

  getBook(): Book | undefined;
  setBook(value?: Book): UpdateBookRequest;
  hasBook(): boolean;
  clearBook(): UpdateBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBookRequest): UpdateBookRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBookRequest;
  static deserializeBinaryFromReader(message: UpdateBookRequest, reader: jspb.BinaryReader): UpdateBookRequest;
}

export namespace UpdateBookRequest {
  export type AsObject = {
    name: string,
    book?: Book.AsObject,
  }
}

export class DeleteBookRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBookRequest): DeleteBookRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBookRequest;
  static deserializeBinaryFromReader(message: DeleteBookRequest, reader: jspb.BinaryReader): DeleteBookRequest;
}

export namespace DeleteBookRequest {
  export type AsObject = {
    name: string,
  }
}

export class MoveBookRequest extends jspb.Message {
  getName(): string;
  setName(value: string): MoveBookRequest;

  getOtherShelfName(): string;
  setOtherShelfName(value: string): MoveBookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveBookRequest): MoveBookRequest.AsObject;
  static serializeBinaryToWriter(message: MoveBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveBookRequest;
  static deserializeBinaryFromReader(message: MoveBookRequest, reader: jspb.BinaryReader): MoveBookRequest;
}

export namespace MoveBookRequest {
  export type AsObject = {
    name: string,
    otherShelfName: string,
  }
}

