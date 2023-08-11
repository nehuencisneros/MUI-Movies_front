import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice"
import drawerReducer from "./slices/drawerSlice"


export const store = configureStore({
  reducer:{
    movies: moviesReducer,
    drawer: drawerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;