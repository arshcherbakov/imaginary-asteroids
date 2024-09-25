import { AxiosResponse } from 'axios';
import {
  getAllDataAboutAsteroids,
  getListAsteroidsByDate,
  getSpecificAsteroid,
} from './index';
import { get } from '../http/index';

jest.mock('../http/index', () => ({
  get: jest.fn(),
}));

const mockResponse: AxiosResponse = {
  data: { near_earth_objects: {} },
  headers: {},
  request: {},
  status: 200,
  statusText: 'OK',
} as AxiosResponse;

describe('getAllDataAboutAsteroids', () => {
  it('Вызвать функцию get и вернуть правильный ответ', async () => {
    (get as jest.Mock).mockResolvedValue(mockResponse);

    const response = await getAllDataAboutAsteroids();

    expect(get).toHaveBeenCalledTimes(1);
    expect(get).toHaveBeenCalledWith('/feed');
    expect(response.data.near_earth_objects).toEqual(
      mockResponse.data.near_earth_objects,
    );
  });
});

describe('getListAsteroidsByDate', () => {
  it('Вызвать функцию get и вернуть правильный ответ', async () => {
    const startDate = '2024-09-07T21:00:00.000Z';
    const endDate = '2024-09-14T21:00:00.000Z';

    (get as jest.Mock).mockResolvedValue(mockResponse);

    const response = await getListAsteroidsByDate(startDate, endDate);

    expect(get).toHaveBeenCalledTimes(1);
    expect(get).toHaveBeenCalledWith(
      `/feed?start_date=${startDate}&end_date=${endDate}`,
    );
    expect(response.data.near_earth_objects).toEqual(
      mockResponse.data.near_earth_objects,
    );
  });
});

describe('getSpecificAsteroid', () => {
  it('Вызвать функцию get и вернуть правильный ответ', async () => {
    const mockResponseAsteroid: AxiosResponse = {
      ...mockResponse,
      data: {},
    } as AxiosResponse;
    const dataAsteroid = '154229 (2002 JN97)';

    (get as jest.Mock).mockResolvedValue(mockResponseAsteroid);

    const response = await getSpecificAsteroid(dataAsteroid);

    expect(get).toHaveBeenCalledTimes(1);
    expect(get).toHaveBeenCalledWith(`/neo/${dataAsteroid}`);
    expect(response.data).toEqual(mockResponseAsteroid.data);
  });
});
