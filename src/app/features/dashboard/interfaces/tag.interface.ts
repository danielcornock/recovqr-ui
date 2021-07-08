import { Coordinates } from 'src/app/core/core-app/interfaces/coordinates.interface';

export interface Tag {
  _id: string;
  userId: string;
  coordinates: Coordinates;
  address: Array<string>;
  shortAddress: string;
  ipAddress: string;
  locationIsAccurate: boolean;
  createdAt: string;
}