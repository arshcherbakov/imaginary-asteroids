import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IAsteroid } from "../../interfaces";
import { getAllDataAboutAsteroids } from "../../services";

export const fetchAsteroids = createAsyncThunk<
  ListDateType,
  undefined,
  { rejectValue: string }
>("asteroids/fetchAsteroids", async (_, { rejectWithValue }) => {
  try {
    const response = await getAllDataAboutAsteroids();

    return response.data.near_earth_objects;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An unknown error occurred");
    }
  }
});

type ListDateType = Record<string, IAsteroid[]>;

interface AsteroidState {
  listDate: ListDateType;
  error: string | null;
  loading: boolean;
}

const initialState: AsteroidState = {
  listDate: {},
  error: null,
  loading: false,
};

const asteroidSlice = createSlice({
  name: "asteroids",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsteroids.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAsteroids.fulfilled, (state, action) => {
        state.loading = false;
        state.listDate = action.payload;
      })
      .addCase(fetchAsteroids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export default asteroidSlice.reducer;
