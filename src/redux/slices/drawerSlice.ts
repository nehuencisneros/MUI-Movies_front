import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

interface TypeDrawer {
  id: number;
  image: string;
  title: string;
  rating: number;
}

interface MoviesState {
  loading: boolean,
  error: string | null;
  movies: TypeDrawer[];
}

const initialState: MoviesState = {
  loading: false,
  error:"",
  movies: [],
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers:{

  }
})

export const {  } = drawerSlice.actions

export default drawerSlice.reducer;

