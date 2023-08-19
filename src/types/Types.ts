export interface TypeMovies {
  id: number;
  title: string;
  overview: string;
  adult: boolean;
  lenguaje: string;
  backdrop_path: string;
  poster_path: string;
  rating: number;
  release_date: string;
}

export interface TypeReviews {
  id: string;
  author: string;
  content: string;
}