import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice"
import drawerReducer from "./slices/drawerSlice"
import reviewReducer from "./slices/reviewSlice"
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer:{
    movies: moviesReducer,
    drawer: drawerReducer,
    reviews: reviewReducer,
    user: userReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;