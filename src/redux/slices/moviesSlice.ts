import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

interface TypeMovies {
  id: number;
  title: string;
  overview: string;
  adult: boolean;
  lenguaje: string;
  image: string;
  poster: string;
  rating: number;
  release_date: string;
}

interface MoviesState {
  loading: boolean,
  error: string | null;
  movies: TypeMovies[]
}

const initialState: MoviesState = {
  loading: false,
  error:"",
  movies: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers:{
      getMoviesStart: (state:MoviesState) => {
        state.loading = true;
        state.error = null;
      },
      getMoviesError: (state, action:PayloadAction<Error>) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      getMoviesSucces: (state, action: PayloadAction<TypeMovies[]>) => {
        return{
          ...state,
          loading: false,
          error: null,
          movies: action.payload
        }
      }
  }
})

export const { getMoviesStart, getMoviesError, getMoviesSucces } = moviesSlice.actions

export default moviesSlice.reducer;

export const getMovies = () => async (dispatch: any) => {
  try {
    const response = await axios.get("http://localhost:3001/movies")

    const moviesdb: TypeMovies[] = []

    response.data?.map((movie: any) => {
        const newMovie = {
            id : movie.id,
            title: movie.title,
            overview: movie.overview ? movie.overview : "no overview",
            adult: movie.adult,
            lenguaje: movie.original_language,
            image: "https://www.themoviedb.org/t/p/original" + movie.image,
            poster: movie.poster_path,
            rating: movie.vote_average,
            release_date: movie.release_date,
        }
        moviesdb.push(newMovie)
    })
    console.log(moviesdb)

    dispatch(getMoviesSucces(moviesdb))
  } catch (error) {
    dispatch(getMoviesError(error as Error));
  }
}





















export const { } = moviesSlice.actions
