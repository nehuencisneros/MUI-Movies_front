import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import { TypeMovies } from '../../types/Types';

interface SearchState {
  loading: boolean,
  error: string | null;
  movies: TypeMovies[];
}

const initialState: SearchState = {
  loading: false,
  error:"",
  movies: [],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers:{
    searchMoviesStart: (state: SearchState ) => {

    },
    searchMoviesError: (state, action: PayloadAction<Error> ) => {

    },
    searchMoviesSuccess: ( state, action: PayloadAction<TypeMovies[]> ) => {

    }
  }
})

export const { searchMoviesStart, searchMoviesError, searchMoviesSuccess } = searchSlice.actions

export default searchSlice.reducer;