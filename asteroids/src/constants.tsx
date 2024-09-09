import { IAsteroid } from "./interfaces";

export enum ROUTES_LIST {
  asteroids = "/asteroids",
}

export const TITLE_TABLE_ASTEROIDS: (keyof IAsteroid)[] = [
  "name",
  "absolute_magnitude_h",
  // "estimated_diameter",
  // "is_potentially_hazardous_asteroid",
  // "close_approach_data",
  // "is_sentry_object",
];

export const LIST_ASTEROIDS = [
  {
    links: {
      self: "http://api.nasa.gov/neo/rest/v1/neo/2523971?api_key=DEMO_KEY",
    },
    id: "2523971",
    neo_reference_id: "2523971",
    name: "523971 (1999 AJ39)",
    nasa_jpl_url:
      "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2523971",
    absolute_magnitude_h: 21.27,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.1480999721,
        estimated_diameter_max: 0.331161605,
      },
      meters: {
        estimated_diameter_min: 148.0999720661,
        estimated_diameter_max: 331.1616050056,
      },
      miles: {
        estimated_diameter_min: 0.0920250277,
        estimated_diameter_max: 0.2057742177,
      },
      feet: {
        estimated_diameter_min: 485.8923123534,
        estimated_diameter_max: 1086.4882401667,
      },
    },
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [
      {
        close_approach_date: "2024-09-09",
        close_approach_date_full: "2024-Sep-09 04:16",
        epoch_date_close_approach: 1725855360000,
        relative_velocity: {
          kilometers_per_second: "8.3883632856",
          kilometers_per_hour: "30198.1078282448",
          miles_per_hour: "18763.9298336113",
        },
        miss_distance: {
          astronomical: "0.1657209201",
          lunar: "64.4654379189",
          kilometers: "24791496.661400187",
          miles: "15404721.6989571006",
        },
        orbiting_body: "Earth",
      },
    ],
    is_sentry_object: false,
  },
];

export const NAVIGATE_TITLES = [
  {
    id: 1,
    title: "Астероиды",
  },
  {
    id: 2,
    title: "По дате сближения",
  },
  {
    id: 3,
    title: "Поиск",
  },
];

export const LOGO_NASA = {
  path: "./src/assets/img/nasa-logo.svg",
  alt: "logo nasa",
};

export const DIAMETER_SIZES = [
  {
    title: "Километры",
    value: "kilometers",
  },
  {
    title: "Метры",
    value: "meters",
  },
  {
    title: "Мили",
    value: "miles",
  },
  {
    title: "Фут",
    value: "feet",
  },
];
