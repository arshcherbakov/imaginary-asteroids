import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import { Dayjs } from 'dayjs';
import {
  getAllDataAboutAsteroids,
  getListAsteroidsByDate,
  getSpecificAsteroid,
} from '../../services';
import { ERRORS } from '../../constants';
import { nearEarthObjectsType, listDateType } from '../../types';
import { IAsteroid } from '../../interfaces';

export const fetchAsteroids = createAsyncThunk<
  nearEarthObjectsType,
  undefined,
  { rejectValue: string }
>('asteroids/fetchAsteroids', async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<listDateType> =
      await getAllDataAboutAsteroids();

    return response.data.near_earth_objects;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ error_message: string }>;
    const errorText = axiosError.response?.data?.error_message;

    return rejectWithValue(errorText || 'An unknown error occurred');
  }
});

export const fetchAsteroidsByDate = createAsyncThunk<
  nearEarthObjectsType,
  {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
  },
  { rejectValue: string }
>(
  'asteroids/fetchAsteroidsByDate',
  async ({ startDate, endDate }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<listDateType> =
        await getListAsteroidsByDate(
          startDate?.toISOString() as string,
          endDate?.toISOString() || '',
        );

      return response.data.near_earth_objects;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ error_message: string }>;
      const errorText = axiosError.response?.data?.error_message;

      return rejectWithValue(errorText || 'An unknown error occurred');
    }
  },
);

export const searchSpecificAsteroid = createAsyncThunk<
  IAsteroid,
  string,
  { rejectValue: string }
>(
  'asteroids/searchSpecificAsteroid ',
  async (dataAsteroid, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IAsteroid> =
        await getSpecificAsteroid(dataAsteroid);

      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorText =
        axiosError.status === 404 ? ERRORS.search404 : axiosError.message;

      return rejectWithValue(errorText || 'An unknown error occurred');
    }
  },
);

type ListDateType = Record<string, IAsteroid[]>;

interface AsteroidState {
  listAllAsteroids: ListDateType;
  listAsteroids: IAsteroid[];
  asteroid: IAsteroid | null;
  error: string | null;
  loading: boolean;
}

const initialState: AsteroidState = {
  listAllAsteroids: {},
  listAsteroids: [],
  asteroid: null,
  error: null,
  loading: false,
};

const asteroidSlice = createSlice({
  name: 'asteroids',
  initialState,
  reducers: {
    pagination(state, action: PayloadAction<number>) {
      const datesAsteroid: string[] = Object.keys(state.listAllAsteroids);
      const date: string = datesAsteroid[action.payload - 1];

      state.listAsteroids = state.listAllAsteroids[date];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAsteroids.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAsteroids.fulfilled, (state, action) => {
        const datesAsteroids: string[] = Object.keys(action.payload);
        const date: string = datesAsteroids[0];

        state.listAllAsteroids = action.payload;
        state.listAsteroids = action.payload[date];
        state.loading = false;
      })
      .addCase(fetchAsteroids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An unknown error occurred';
      })
      .addCase(fetchAsteroidsByDate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAsteroidsByDate.fulfilled, (state, action) => {
        const datesAsteroids: string[] = Object.keys(action.payload);
        const date: string = datesAsteroids[0];

        state.listAllAsteroids = action.payload;
        state.listAsteroids = action.payload[date];
        state.loading = false;
      })
      .addCase(fetchAsteroidsByDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An unknown error occurred';
      })
      .addCase(searchSpecificAsteroid.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchSpecificAsteroid.fulfilled, (state, action) => {
        state.asteroid = action.payload;
      })
      .addCase(searchSpecificAsteroid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An unknown error occurred';
      });
  },
});

export const { pagination } = asteroidSlice.actions;
export default asteroidSlice.reducer;
