import * as jspb from 'google-protobuf'



export class PostalAddress extends jspb.Message {
  getRevision(): number;
  setRevision(value: number): PostalAddress;

  getRegionCode(): string;
  setRegionCode(value: string): PostalAddress;

  getLanguageCode(): string;
  setLanguageCode(value: string): PostalAddress;

  getPostalCode(): string;
  setPostalCode(value: string): PostalAddress;

  getSortingCode(): string;
  setSortingCode(value: string): PostalAddress;

  getAdministrativeArea(): string;
  setAdministrativeArea(value: string): PostalAddress;

  getLocality(): string;
  setLocality(value: string): PostalAddress;

  getSublocality(): string;
  setSublocality(value: string): PostalAddress;

  getAddressLinesList(): Array<string>;
  setAddressLinesList(value: Array<string>): PostalAddress;
  clearAddressLinesList(): PostalAddress;
  addAddressLines(value: string, index?: number): PostalAddress;

  getRecipientsList(): Array<string>;
  setRecipientsList(value: Array<string>): PostalAddress;
  clearRecipientsList(): PostalAddress;
  addRecipients(value: string, index?: number): PostalAddress;

  getOrganization(): string;
  setOrganization(value: string): PostalAddress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostalAddress.AsObject;
  static toObject(includeInstance: boolean, msg: PostalAddress): PostalAddress.AsObject;
  static serializeBinaryToWriter(message: PostalAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostalAddress;
  static deserializeBinaryFromReader(message: PostalAddress, reader: jspb.BinaryReader): PostalAddress;
}

export namespace PostalAddress {
  export type AsObject = {
    revision: number,
    regionCode: string,
    languageCode: string,
    postalCode: string,
    sortingCode: string,
    administrativeArea: string,
    locality: string,
    sublocality: string,
    addressLinesList: Array<string>,
    recipientsList: Array<string>,
    organization: string,
  }
}

