import { configureStore } from "@reduxjs/toolkit";
import asteroidSlice from "./slices/asteroidSlice";

export const store = configureStore({
  reducer: {
    asteroids: asteroidSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
