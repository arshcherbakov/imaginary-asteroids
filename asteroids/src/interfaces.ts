type DiameterValuesType = {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
};

interface IEstimatedDiameter {
  kilometers: Record<string, number>;
  meters: Record<string, number>;
  miles: Record<string, number>;
  feet: Record<string, number>;
}

interface IAsteroid {
  links: {
    self: string;
  };
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    miles: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    feet: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: Array<{
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: {
      kilometers_per_second: string;
      kilometers_per_hour: string;
      miles_per_hour: string;
    };
    miss_distance: {
      astronomical: string;
      lunar: string;
      kilometers: string;
      miles: string;
    };
    orbiting_body: string;
  }>;
  is_sentry_object: boolean;
}

export type { IAsteroid };
// {
//   "id": "2440012",
//   "neo_reference_id": "2440012",
//   "name": "440012 (2002 LE27)",
//   "absolute_magnitude_h": 19.61,
//   "estimated_diameter": {
//       "kilometers": {
//           "estimated_diameter_min": 0.3180936332,
//           "estimated_diameter_max": 0.7112789871
//       },
//       "meters": {
//           "estimated_diameter_min": 318.0936332215,
//           "estimated_diameter_max": 711.2789870931
//       },
//       "miles": {
//           "estimated_diameter_min": 0.197654159,
//           "estimated_diameter_max": 0.4419681355
//       },
//       "feet": {
//           "estimated_diameter_min": 1043.6143156183,
//           "estimated_diameter_max": 2333.5925520145
//       }
//   },
//   "is_potentially_hazardous_asteroid": false,
//   "close_approach_data": [
//       {
//           "close_approach_date": "2015-09-07",
//           "close_approach_date_full": "2015-Sep-07 07:32",
//           "epoch_date_close_approach": 1441611120000,
//           "relative_velocity": {
//               "kilometers_per_second": "1.1630843052",
//               "kilometers_per_hour": "4187.1034988155",
//               "miles_per_hour": "2601.7032823612"
//           },
//           "miss_distance": {
//               "astronomical": "0.4981690972",
//               "lunar": "193.7877788108",
//               "kilometers": "74525035.840942964",
//               "miles": "46307709.9545183432"
//           },
//           "orbiting_body": "Earth"
//       }
//   ],
//   "is_sentry_object": false
// }
