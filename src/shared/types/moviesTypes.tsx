export interface Movie {
  id?: number | undefined;
  title?: string;
  original_title?: string;
  original_language?: string;
  posterPath?: string | null;
  backdrop_path?: string | null;
  releaseDate?: string;
  overview?: string;
  vote_count?: number;
  genreIds?: number[];
  popularity?: number;
  vote_average?: number;
  adult?: boolean;
}

export interface Pagination {
  page: number;
  total_results: number;
  total_pages: number;
}

export interface MoviesState {
  popularMovies: Movie[];
  searchResults: Movie[];
  ratedMovies: Movie[];
  moviesList: Movie[];
  pagination: Pagination;
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}

export interface MovieContext {
  popularMovies: Movie[];
  searchResults: Movie[];
  ratedMovies: Movie[];
  moviesList: Movie[];
  pagination: Pagination;
  searchTerm: string;
  getPopularMovies: any;
  searchMovies: any;

  rateMovie: any;
}
interface GetPopularMoviesRequestAction {
  type: "GET_POPULAR_MOVIES_REQUEST";
}

interface GetPopularMoviesSuccessAction {
  type: "GET_POPULAR_MOVIES_SUCCESS";
  payload: { movies: Movie[]; pagination: Pagination };
}

interface GetPopularMoviesFailureAction {
  type: "GET_POPULAR_MOVIES_FAILURE";
  payload: { error: string };
}

interface SearchMoviesRequestAction {
  type: "SEARCH_MOVIES_REQUEST";
  payload: { query: string };
}

interface SearchMoviesSuccessAction {
  type: "SEARCH_MOVIES_SUCCESS";
  payload: { movies: Movie[]; pagination: Pagination };
}

interface SearchMoviesFailureAction {
  type: "SEARCH_MOVIES_FAILURE";
  payload: { error: string };
}

interface RateMovieRequestAction {
  type: "RATE_MOVIE_REQUEST";
}

interface RateMovieSuccessAction {
  type: "RATE_MOVIE_SUCCESS";
  payload: { id: number; rating: number };
}

interface RateMovieFailureAction {
  type: "RATE_MOVIE_FAILURE";
  payload: { error: string };
}

export type MoviesAction =
  | GetPopularMoviesRequestAction
  | GetPopularMoviesSuccessAction
  | GetPopularMoviesFailureAction
  | SearchMoviesRequestAction
  | SearchMoviesSuccessAction
  | SearchMoviesFailureAction
  | RateMovieRequestAction
  | RateMovieSuccessAction
  | RateMovieFailureAction;
