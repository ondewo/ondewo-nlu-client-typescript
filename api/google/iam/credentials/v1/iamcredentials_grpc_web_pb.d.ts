import * as grpcWeb from 'grpc-web';

import * as google_iam_credentials_v1_common_pb from '../../../../google/iam/credentials/v1/common_pb';


export class IAMCredentialsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  generateAccessToken(
    request: google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse>;

  generateIdToken(
    request: google_iam_credentials_v1_common_pb.GenerateIdTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_credentials_v1_common_pb.GenerateIdTokenResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_credentials_v1_common_pb.GenerateIdTokenResponse>;

  signBlob(
    request: google_iam_credentials_v1_common_pb.SignBlobRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_credentials_v1_common_pb.SignBlobResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_credentials_v1_common_pb.SignBlobResponse>;

  signJwt(
    request: google_iam_credentials_v1_common_pb.SignJwtRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_iam_credentials_v1_common_pb.SignJwtResponse) => void
  ): grpcWeb.ClientReadableStream<google_iam_credentials_v1_common_pb.SignJwtResponse>;

}

export class IAMCredentialsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  generateAccessToken(
    request: google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse>;

  generateIdToken(
    request: google_iam_credentials_v1_common_pb.GenerateIdTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_credentials_v1_common_pb.GenerateIdTokenResponse>;

  signBlob(
    request: google_iam_credentials_v1_common_pb.SignBlobRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_credentials_v1_common_pb.SignBlobResponse>;

  signJwt(
    request: google_iam_credentials_v1_common_pb.SignJwtRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_iam_credentials_v1_common_pb.SignJwtResponse>;

}

