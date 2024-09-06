import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAsteroid } from "../../interfases";

interface IInitialState<T> {
  listAsteroids: T[];
  error: string;
}

const initialState: IInitialState<IAsteroid> = {
  listAsteroids: [],
  error: "",
};

const asteroidSlice = createSlice({
  name: "asteroids",
  initialState,
  reducers: {
    getAllDataAboutAsteroids: (state, actions: PayloadAction<IAsteroid[]>) => {
      state.listAsteroids = actions.payload;
    },
    setError: (state, actions: PayloadAction<string>) => {
      state.error = actions.payload;
    },
  },
});

export const { getAllDataAboutAsteroids, setError } = asteroidSlice.actions;

export default asteroidSlice.reducer;
