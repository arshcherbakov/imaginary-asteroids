import { IAsteroid } from "./interfaces";

type nearEarthObjectsType = Record<string, IAsteroid[]>;

type listDateType = {
  near_earth_objects: nearEarthObjectsType;
};

export type { nearEarthObjectsType, listDateType };
