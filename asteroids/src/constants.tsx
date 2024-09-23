import { ITitleTableAsteroids } from './interfaces';

export enum ROUTES_LIST {
  asteroids = '/asteroids',
  search = '/search',
}

export const TITLE_TABLE_ASTEROIDS: ITitleTableAsteroids[] = [
  {
    titleTable: 'Название',
    fieldName: 'name',
  },
  {
    titleTable: 'Абсолютная величина h',
    fieldName: 'absolute_magnitude_h',
  },
  {
    titleTable: 'Опасный',
    fieldName: 'is_potentially_hazardous_asteroid',
  },
  {
    titleTable: 'Предполагаемый диаметр',
    fieldName: 'estimated_diameter',
  },
  {
    titleTable: 'Промах дистанция',
    fieldName: 'is_sentry_object',
  },
  {
    titleTable: 'Ближайшая дата сближения',
    fieldName: 'close_approach_date',
  },
  {
    titleTable: 'Полная дата сближения',
    fieldName: 'close_approach_date_full',
  },
  {
    titleTable: 'Эпоха, дата сближения',
    fieldName: 'epoch_date_close_approach',
  },
  {
    titleTable: 'Относительная скорость',
    fieldName: 'relative_velocity.kilometers_per_second',
  },
  {
    titleTable: 'Расстояние промаха',
    fieldName: 'miss_distance.astronomical',
  },
  {
    titleTable: 'Орбитальное тело',
    fieldName: 'orbiting_body',
  },
];

export const NAVIGATE_TITLES = (handleShowDatePicker: () => void) => [
  {
    id: 1,
    title: 'Астероиды',
  },
  {
    id: 2,
    title: 'По дате сближения',
    onClick: () => handleShowDatePicker(),
  },
  {
    id: 3,
    title: 'Поиск',
  },
];

export const LOGO_NASA = {
  path: './src/assets/img/nasa-logo.svg',
  alt: 'logo nasa',
};

export const DIAMETER_SIZES = {
  kilometers: 'Километры',
  meters: 'Метры',
  miles: 'Мили',
  feet: 'Фут',
};

export const RELATIVE_SPEED_UNITS = {
  kilometers_per_second: 'км/с',
  kilometers_per_hour: 'км/ч',
  miles_per_hour: 'миль/ч',
};

export const UNITS_MEASUREMENT_SLIP_DISTANCE = {
  astronomical: 'астрономическое',
  lunar: 'лунное',
  kilometers: 'км',
  miles: 'миль',
};

export enum ERRORS {
  missingStartDateField = 'Отсутствует поле начальной даты.',
  missingEndDateField = 'Отсутствует поле конечной даты.',
  dateDifference = 'Разница не больше 7 дней.',
  search404 = 'По вашему запросу ничего не нашлось (',
  emptyField = 'Поле не должно быть пустым',
}

export const DATE_DIFFERENCE = 7;

export const ORBITAL_DATA_TITLE = [
  'Идентификатор орбиты',
  'Дата определения орбиты',
  'Дата первого наблюдения',
  'Дата последнего наблюдения',
  'Количество дней наблюдений',
  'Количество использованных наблюдений',
  'Неопределенность орбиты',
  'Минимальное расстояние пересечения орбит',
  'Инвариант Тиссерана по Юпитеру',
  'Эпоха оскуляции',
  'Эксцентриситет орбиты',
  'Большая полуось орбиты',
  'Наклонение орбиты',
  'Долгота восходящего узла',
  'Орбитальный период',
  'Перигелий',
  'Аргумент перигелия',
  'Апогелий',
  'Время перигелия',
  'Средняя аномалия',
  'Среднее движение',
  'Равноденствие (эпоха J2000)',
  'Тип орбиты (например, AMO)',
  'Описание типа орбиты',
  'Диапазон перигелия',
];

export const DEFAULT_UNIT_OF_SPEED = 'kilometers_per_second';
export const DEFAULT_UNIT_OF_MISS_DISTANCE = 'astronomical';
