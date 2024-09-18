import { Dayjs } from 'dayjs';

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
  orbital_data: IOrbitalData;
}

interface ITitleTableAsteroids {
  titleTable: string;
  fieldName: string;
}

interface IDateSearch {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

interface IOrbitClass {
  orbit_class_type: string; // Тип орбиты (например, AMO)
  orbit_class_description: string; // Описание типа орбиты
  orbit_class_range: string; // Диапазон перигелия
}

interface IOrbitalData {
  orbit_id: string; // Идентификатор орбиты
  orbit_determination_date: string; // Дата определения орбиты
  first_observation_date: string; // Дата первого наблюдения
  last_observation_date: string; // Дата последнего наблюдения
  data_arc_in_days: number; // Количество дней наблюдений
  observations_used: number; // Количество использованных наблюдений
  orbit_uncertainty: string; // Неопределенность орбиты
  minimum_orbit_intersection: string; // Минимальное расстояние пересечения орбит
  jupiter_tisserand_invariant: string; // Инвариант Тиссерана по Юпитеру
  epoch_osculation: string; // Эпоха оскуляции
  eccentricity: string; // Эксцентриситет орбиты
  semi_major_axis: string; // Большая полуось орбиты
  inclination: string; // Наклонение орбиты
  ascending_node_longitude: string; // Долгота восходящего узла
  orbital_period: string; // Орбитальный период
  perihelion_distance: string; // Перигелий
  perihelion_argument: string; // Аргумент перигелия
  aphelion_distance: string; // Апогелий
  perihelion_time: string; // Время перигелия
  mean_anomaly: string; // Средняя аномалия
  mean_motion: string; // Среднее движение
  equinox: string; // Равноденствие (эпоха J2000)
  orbit_class: IOrbitClass; // Класс орбиты
}

export type { IAsteroid, ITitleTableAsteroids, IDateSearch, IOrbitalData };
