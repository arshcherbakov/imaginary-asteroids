import { AxiosResponse } from 'axios';
import { get } from '../http/index';

export const getAllDataAboutAsteroids = (): Promise<AxiosResponse> =>
  get('/feed');

export const getListAsteroidsByDate = (
  startDate: string,
  endDate: string,
): Promise<AxiosResponse> =>
  get(`/feed?start_date=${startDate}&end_date=${endDate}`);
