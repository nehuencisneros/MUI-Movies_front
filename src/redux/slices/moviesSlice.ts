import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import { TypeMovies } from '../../types/Types';

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
      getMoviesSuccess: (state, action: PayloadAction<TypeMovies[]>) => {
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
      getMovieByIdSuccess: (state, action: PayloadAction<TypeMovies[]>) => {
        return{
          ...state,
          loading: false,
          error: null,
          movie: action.payload
        }
      },
      searchMoviesStart: (state: MoviesState ) => {
        state.loading = true;
        state.error = null;
      },
      searchMoviesError: (state, action: PayloadAction<Error> ) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      searchMoviesSuccess: ( state, action: PayloadAction<TypeMovies[]> ) => {
  
      }
  }
})

export const { 
  getMoviesStart, 
  getMoviesError, 
  getMoviesSuccess, 
  getMovieByIdSuccess, 
  getMovieByIdError, 
  getMovieByIdStart, 
  searchMoviesSuccess, 
  searchMoviesError, 
  searchMoviesStart } = moviesSlice.actions

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
            backdrop_path: "https://www.themoviedb.org/t/p/original" + movie.backdrop_path,
            poster_path: movie.poster_path,
            rating: movie.rating,
            release_date: movie.release_date,
        }
        moviesdb.push(newMovie)
    })

    dispatch(getMoviesSuccess(moviesdb))
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
              backdrop_path: "https://www.themoviedb.org/t/p/original/" + data.backdrop_path,
              poster_path: "https://www.themoviedb.org/t/p/original" + data.poster_path,
              rating: data.vote_average,
              release_date: data.release_date,
          }]
      dispatch(getMovieByIdSuccess(movieData))
    }
  } catch (error) {

    dispatch(getMovieByIdError(error as Error));
  }
}

export const searchMovies = (searchValue: string) => async (dispatch: any) => {
  try {
    const moviesdb:TypeMovies[] = []

    const options = {
      url: `https://api.themoviedb.org/3/search/person?query=${searchValue}&include_adult=false&language=en-US&page=1`,
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGIwYzEyYmQ2YWM0ODRlNmNmYWNhM2Q2YjUyYWQ0MCIsInN1YiI6IjY0YzI5NDZkMmYxYmUwMDBjYTI3N2EwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6jO__kDB0393fGoG_J1UwqwK14MxLZJOuIUDWFsORqM'
      }
    };

    const response = await axios.request(options)
        .then(function (res:any){return res})
        .catch(function (err:any) {return (err)});

    const {data} = response

    await data.results.map((element:any) => {
      element.known_for.map((movie:any)=> {
        const dato:TypeMovies = {
          id : movie.id,
          title: movie.title,
          overview: movie.overview ? movie.overview : "no overview",
          adult: movie.adult,
          lenguaje: movie.lenguaje,
          backdrop_path: movie.backdrop_path ?  "https://www.themoviedb.org/t/p/original" + movie.backdrop_path : "https://www.themoviedb.org/t/p/original" + movie.poster_path,
          poster_path: movie.poster_path,
          rating: movie.vote_average,
          release_date: movie.release_date,
        }
        dato.title && moviesdb.push(dato) 
      })
  })
  console.log(moviesdb);
  
    dispatch(getMoviesSuccess(moviesdb))
  } catch (error) {
    dispatch(searchMoviesError(error as Error));
  }
}



















export const { } = moviesSlice.actions
