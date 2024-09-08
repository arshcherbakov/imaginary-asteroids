import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IAsteroid } from "../../interfases";
import { getAllDataAboutAsteroids } from "../../services";

interface AsteroidResponse {
  near_earth_objects: IAsteroid[];
}

export const fetchAsteroids = createAsyncThunk<
  IAsteroid[],
  undefined,
  { rejectValue: string }
>("listAsteroids/fetchAsteroids", async (_, { rejectWithValue }) => {
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

interface AsteroidState {
  listAsteroids: IAsteroid[];
  error: string | null;
  loading: boolean;
}

const initialState: AsteroidState = {
  listAsteroids: [],
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
        state.listAsteroids = action.payload;
      })
      .addCase(fetchAsteroids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export default asteroidSlice.reducer;
