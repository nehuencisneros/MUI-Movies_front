import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice"
import drawerReducer from "./slices/drawerSlice"
import searchSlice from "./slices/searchSlice";


export const store = configureStore({
  reducer:{
    movies: moviesReducer,
    drawer: drawerReducer,
    search: searchSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;