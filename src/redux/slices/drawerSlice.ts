import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

interface DrawerState {
  id: number;
  image: string;
  title: string;
  rating: number;
}

const initialState: DrawerState[] = []

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers:{
    addToSee: (state, action: PayloadAction<DrawerState> ) => {
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    }
  }
})

export const { addToSee } = drawerSlice.actions

export default drawerSlice.reducer;


