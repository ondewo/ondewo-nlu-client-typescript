import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_example_library_v1_library_pb from '../../../../google/example/library/v1/library_pb';


export class LibraryServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createShelf(
    request: google_example_library_v1_library_pb.CreateShelfRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_example_library_v1_library_pb.Shelf) => void
  ): grpcWeb.ClientReadableStream<google_example_library_v1_library_pb.Shelf>;

  getShelf(
    request: google_example_library_v1_library_pb.GetShelfRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_example_library_v1_library_pb.Shelf) => void
  ): grpcWeb.ClientReadableStream<google_example_library_v1_library_pb.Shelf>;

  listShelves(
    request: google_example_library_v1_library_pb.ListShelvesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_example_library_v1_library_pb.ListShelvesResponse) => void
  ): grpcWeb.ClientReadableStream<google_example_library_v1_library_pb.ListShelvesResponse>;

  deleteShelf(
    request: google_example_library_v1_library_pb.DeleteShelfRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  mergeShelves(
    request: google_example_library_v1_library_pb.MergeShelvesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_example_library_v1_library_pb.Shelf) => void
  ): grpcWeb.ClientReadableStream<google_example_library_v1_library_pb.Shelf>;

  createBook(
    request: google_example_library_v1_library_pb.CreateBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_example_library_v1_library_pb.Book) => void
  ): grpcWeb.ClientReadableStream<google_example_library_v1_library_pb.Book>;

  getBook(
    request: google_example_library_v1_library_pb.GetBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_example_library_v1_library_pb.Book) => void
  ): grpcWeb.ClientReadableStream<google_example_library_v1_library_pb.Book>;

  listBooks(
    request: google_example_library_v1_library_pb.ListBooksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_example_library_v1_library_pb.ListBooksResponse) => void
  ): grpcWeb.ClientReadableStream<google_example_library_v1_library_pb.ListBooksResponse>;

  deleteBook(
    request: google_example_library_v1_library_pb.DeleteBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateBook(
    request: google_example_library_v1_library_pb.UpdateBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_example_library_v1_library_pb.Book) => void
  ): grpcWeb.ClientReadableStream<google_example_library_v1_library_pb.Book>;

  moveBook(
    request: google_example_library_v1_library_pb.MoveBookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_example_library_v1_library_pb.Book) => void
  ): grpcWeb.ClientReadableStream<google_example_library_v1_library_pb.Book>;

}

export class LibraryServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createShelf(
    request: google_example_library_v1_library_pb.CreateShelfRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_example_library_v1_library_pb.Shelf>;

  getShelf(
    request: google_example_library_v1_library_pb.GetShelfRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_example_library_v1_library_pb.Shelf>;

  listShelves(
    request: google_example_library_v1_library_pb.ListShelvesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_example_library_v1_library_pb.ListShelvesResponse>;

  deleteShelf(
    request: google_example_library_v1_library_pb.DeleteShelfRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  mergeShelves(
    request: google_example_library_v1_library_pb.MergeShelvesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_example_library_v1_library_pb.Shelf>;

  createBook(
    request: google_example_library_v1_library_pb.CreateBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_example_library_v1_library_pb.Book>;

  getBook(
    request: google_example_library_v1_library_pb.GetBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_example_library_v1_library_pb.Book>;

  listBooks(
    request: google_example_library_v1_library_pb.ListBooksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_example_library_v1_library_pb.ListBooksResponse>;

  deleteBook(
    request: google_example_library_v1_library_pb.DeleteBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  updateBook(
    request: google_example_library_v1_library_pb.UpdateBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_example_library_v1_library_pb.Book>;

  moveBook(
    request: google_example_library_v1_library_pb.MoveBookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_example_library_v1_library_pb.Book>;

}

