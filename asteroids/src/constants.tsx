export enum ROUTES_LIST {
  asteroids = "/asteroids",
}

interface IAsteroid {
  id: string;
  name: string;
  name_limited: string;
  absolute_magnitude_h: number;
  designation: string;
}

export const TITLE_TABLE_ASTEROIDS: Array<keyof IAsteroid> = [
  "id",
  "name",
  "name_limited",
  "absolute_magnitude_h",
  "designation",
];

// export const TITLE_TABLE_ASTEROIDS = [
//   { id: 1, title: "id" },
//   { id: 2, title: "name" },
//   { id: 3, title: "name_limited" },
//   { id: 4, title: "absolute_magnitude_h" },
//   { id: 5, title: "designation" },
// ];

export const LIST_ASTEROIDS = [
  {
    id: "2000719",
    name: "719 Albert (A911 TB)",
    name_limited: "Albert",
    absolute_magnitude_h: 10.41,
    designation: "433",
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
