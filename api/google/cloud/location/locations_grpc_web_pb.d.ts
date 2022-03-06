import * as grpcWeb from 'grpc-web';

import * as google_cloud_location_locations_pb from '../../../google/cloud/location/locations_pb';


export class LocationsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listLocations(
    request: google_cloud_location_locations_pb.ListLocationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_location_locations_pb.ListLocationsResponse) => void
  ): grpcWeb.ClientReadableStream<google_cloud_location_locations_pb.ListLocationsResponse>;

  getLocation(
    request: google_cloud_location_locations_pb.GetLocationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_cloud_location_locations_pb.Location) => void
  ): grpcWeb.ClientReadableStream<google_cloud_location_locations_pb.Location>;

}

export class LocationsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listLocations(
    request: google_cloud_location_locations_pb.ListLocationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_location_locations_pb.ListLocationsResponse>;

  getLocation(
    request: google_cloud_location_locations_pb.GetLocationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_cloud_location_locations_pb.Location>;

}

