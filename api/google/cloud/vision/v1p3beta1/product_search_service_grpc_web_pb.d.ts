import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_cloud_vision_v1p3beta1_product_search_service_pb from '../../../../google/cloud/vision/v1p3beta1/product_search_service_pb';


export class ProductSearchClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.CreateProductSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.ProductSet) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.ProductSet>;

  listProductSets(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductSetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductSetsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductSetsResponse>;

  getProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.GetProductSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.ProductSet) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.ProductSet>;

  updateProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.UpdateProductSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.ProductSet) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.ProductSet>;

  deleteProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.DeleteProductSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createProduct(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.CreateProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.Product) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.Product>;

  listProducts(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsResponse>;

  getProduct(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.GetProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.Product) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.Product>;

  updateProduct(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.UpdateProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.Product) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.Product>;

  deleteProduct(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.DeleteProductRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  createReferenceImage(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.CreateReferenceImageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.ReferenceImage) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.ReferenceImage>;

  deleteReferenceImage(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.DeleteReferenceImageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listReferenceImages(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ListReferenceImagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.ListReferenceImagesResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.ListReferenceImagesResponse>;

  getReferenceImage(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.GetReferenceImageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.ReferenceImage) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.ReferenceImage>;

  addProductToProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.AddProductToProductSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  removeProductFromProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.RemoveProductFromProductSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listProductsInProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsInProductSetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsInProductSetResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsInProductSetResponse>;

  importProductSets(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ImportProductSetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_longrunning_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<google_longrunning_operations_pb.Operation>;

}

export class ProductSearchPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.CreateProductSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.ProductSet>;

  listProductSets(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductSetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductSetsResponse>;

  getProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.GetProductSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.ProductSet>;

  updateProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.UpdateProductSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.ProductSet>;

  deleteProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.DeleteProductSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createProduct(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.CreateProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.Product>;

  listProducts(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsResponse>;

  getProduct(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.GetProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.Product>;

  updateProduct(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.UpdateProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.Product>;

  deleteProduct(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.DeleteProductRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  createReferenceImage(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.CreateReferenceImageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.ReferenceImage>;

  deleteReferenceImage(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.DeleteReferenceImageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listReferenceImages(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ListReferenceImagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.ListReferenceImagesResponse>;

  getReferenceImage(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.GetReferenceImageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.ReferenceImage>;

  addProductToProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.AddProductToProductSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  removeProductFromProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.RemoveProductFromProductSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listProductsInProductSet(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsInProductSetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_vision_v1p3beta1_product_search_service_pb.ListProductsInProductSetResponse>;

  importProductSets(
    request: google_cloud_vision_v1p3beta1_product_search_service_pb.ImportProductSetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_longrunning_operations_pb.Operation>;

}

