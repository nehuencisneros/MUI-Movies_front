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
  movies: TypeMovies[];
  movie: TypeMovies[];
}

const initialState: MoviesState = {
  loading: false,
  error:"",
  movies: [],
  movie: []
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
      },
      getMovieByIdStart: (state:MoviesState) => {
        state.loading = true;
        state.error = null;
      },
      getMovieByIdError: (state, action:PayloadAction<Error>) => {
        state.loading = false;
        state.error = action.payload.message;
      }, 
      getMovieByIdSucces: (state, action: PayloadAction<TypeMovies[]>) => {
        return{
          ...state,
          loading: false,
          error: null,
          movie: action.payload
        }
      }
  }
})

export const { getMoviesStart, getMoviesError, getMoviesSucces, getMovieByIdSucces, getMovieByIdError, getMovieByIdStart } = moviesSlice.actions

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
            lenguaje: movie.lenguaje,
            image: "https://www.themoviedb.org/t/p/original" + movie.image,
            poster: movie.poster,
            rating: movie.rating,
            release_date: movie.release_date,
        }
        moviesdb.push(newMovie)
    })

    dispatch(getMoviesSucces(moviesdb))
  } catch (error) {
    dispatch(getMoviesError(error as Error));
  }
}

export const getMovieById = (id:number) => async (dispatch: any) => {

  try {
    const response = await axios.get("http://localhost:3001/movies/"+ id)

    if(response.data){
      const {data} = response
  
      const movieData: TypeMovies[]  = [{
              id: data.id,
              title: data.title,
              overview: data.overview,
              adult: data.adult,
              lenguaje: data.original_language,
              image: "https://www.themoviedb.org/t/p/original/" + data.backdrop_path,
              poster: "https://www.themoviedb.org/t/p/original" + data.poster_path,
              rating: data.vote_average,
              release_date: data.release_date,
          }]
      dispatch(getMovieByIdSucces(movieData))
    }
  } catch (error) {

    dispatch(getMovieByIdError(error as Error));
  }
}



















export const { } = moviesSlice.actions
