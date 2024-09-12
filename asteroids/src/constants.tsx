import { ITitleTableAsteroids } from "./interfaces";

export enum ROUTES_LIST {
  asteroids = "/asteroids",
}

export const TITLE_TABLE_ASTEROIDS: ITitleTableAsteroids[] = [
  {
    titleTable: "Название",
    fieldName: "name",
  },
  {
    titleTable: "Абсолютная величина h",
    fieldName: "absolute_magnitude_h",
  },
  {
    titleTable: "Опасный",
    fieldName: "is_potentially_hazardous_asteroid",
  },
  {
    titleTable: "Предполагаемый диаметр",
    fieldName: "estimated_diameter",
  },
  {
    titleTable: "Промах дистанция",
    fieldName: "is_sentry_object",
  },
  {
    titleTable: "Ближайшая дата сближения",
    fieldName: "close_approach_date",
  },
  {
    titleTable: "Полная дата сближения",
    fieldName: "close_approach_date_full",
  },
  {
    titleTable: "Эпоха, дата сближения",
    fieldName: "epoch_date_close_approach",
  },
  {
    titleTable: "Относительная скорость",
    fieldName: "relative_velocity.kilometers_per_second",
  },
  {
    titleTable: "Расстояние промаха",
    fieldName: "miss_distance.astronomical",
  },
  {
    titleTable: "Орбитальное тело",
    fieldName: "orbiting_body",
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

export const DIAMETER_SIZES = {
  kilometers: "Километры",
  meters: "Метры",
  miles: "Мили",
  feet: "Фут",
};

export const RELATIVE_SPEED_UNITS = {
  kilometers_per_second: "км/с",
  kilometers_per_hour: "км/ч",
  miles_per_hour: "миль/ч",
};

export const UNITS_MEASUREMENT_SLIP_DISTANCE = {
  astronomical: "астрономическое",
  lunar: "лунное",
  kilometers: "км",
  miles: "миль",
};
