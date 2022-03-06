import * as grpcWeb from 'grpc-web';

import * as google_cloud_kms_v1_resources_pb from '../../../../google/cloud/kms/v1/resources_pb';
import * as google_cloud_kms_v1_service_pb from '../../../../google/cloud/kms/v1/service_pb';


export class KeyManagementServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listKeyRings(
    request: google_cloud_kms_v1_service_pb.ListKeyRingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_service_pb.ListKeyRingsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_service_pb.ListKeyRingsResponse>;

  listCryptoKeys(
    request: google_cloud_kms_v1_service_pb.ListCryptoKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_service_pb.ListCryptoKeysResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_service_pb.ListCryptoKeysResponse>;

  listCryptoKeyVersions(
    request: google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse>;

  getKeyRing(
    request: google_cloud_kms_v1_service_pb.GetKeyRingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.KeyRing) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.KeyRing>;

  getCryptoKey(
    request: google_cloud_kms_v1_service_pb.GetCryptoKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKey) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.CryptoKey>;

  getCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.GetCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

  createKeyRing(
    request: google_cloud_kms_v1_service_pb.CreateKeyRingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.KeyRing) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.KeyRing>;

  createCryptoKey(
    request: google_cloud_kms_v1_service_pb.CreateCryptoKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKey) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.CryptoKey>;

  createCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.CreateCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

  updateCryptoKey(
    request: google_cloud_kms_v1_service_pb.UpdateCryptoKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKey) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.CryptoKey>;

  updateCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.UpdateCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

  encrypt(
    request: google_cloud_kms_v1_service_pb.EncryptRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_service_pb.EncryptResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_service_pb.EncryptResponse>;

  decrypt(
    request: google_cloud_kms_v1_service_pb.DecryptRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_service_pb.DecryptResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_service_pb.DecryptResponse>;

  updateCryptoKeyPrimaryVersion(
    request: google_cloud_kms_v1_service_pb.UpdateCryptoKeyPrimaryVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKey) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.CryptoKey>;

  destroyCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.DestroyCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

  restoreCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.RestoreCryptoKeyVersionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_kms_v1_resources_pb.CryptoKeyVersion) => void
  ): grpcWeb.ClientReadableStream<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

}

export class KeyManagementServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listKeyRings(
    request: google_cloud_kms_v1_service_pb.ListKeyRingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_service_pb.ListKeyRingsResponse>;

  listCryptoKeys(
    request: google_cloud_kms_v1_service_pb.ListCryptoKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_service_pb.ListCryptoKeysResponse>;

  listCryptoKeyVersions(
    request: google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse>;

  getKeyRing(
    request: google_cloud_kms_v1_service_pb.GetKeyRingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.KeyRing>;

  getCryptoKey(
    request: google_cloud_kms_v1_service_pb.GetCryptoKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.CryptoKey>;

  getCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.GetCryptoKeyVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

  createKeyRing(
    request: google_cloud_kms_v1_service_pb.CreateKeyRingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.KeyRing>;

  createCryptoKey(
    request: google_cloud_kms_v1_service_pb.CreateCryptoKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.CryptoKey>;

  createCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.CreateCryptoKeyVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

  updateCryptoKey(
    request: google_cloud_kms_v1_service_pb.UpdateCryptoKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.CryptoKey>;

  updateCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.UpdateCryptoKeyVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

  encrypt(
    request: google_cloud_kms_v1_service_pb.EncryptRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_service_pb.EncryptResponse>;

  decrypt(
    request: google_cloud_kms_v1_service_pb.DecryptRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_service_pb.DecryptResponse>;

  updateCryptoKeyPrimaryVersion(
    request: google_cloud_kms_v1_service_pb.UpdateCryptoKeyPrimaryVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.CryptoKey>;

  destroyCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.DestroyCryptoKeyVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

  restoreCryptoKeyVersion(
    request: google_cloud_kms_v1_service_pb.RestoreCryptoKeyVersionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_kms_v1_resources_pb.CryptoKeyVersion>;

}

