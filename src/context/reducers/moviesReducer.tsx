import { MoviesState, MoviesAction } from "../../shared/types/moviesTypes";
import * as actions from "./movies.actions";

export const moviesReducer = (
  state: MoviesState,
  action: MoviesAction
): MoviesState => {
  switch (action.type) {
    case actions.GET_POPULAR_MOVIES_REQUEST:
    case actions.RATE_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actions.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        searchTerm: action.payload.query,
        isLoading: true,
        error: null,
      };
    case actions.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload.movies,
        moviesList: action.payload.movies,
        pagination: action.payload.pagination,
        isLoading: false,
      };
    case actions.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchResults: action.payload.movies,
        moviesList: action.payload.movies,
        pagination: action.payload.pagination,
        isLoading: false,
      };
    case actions.RATE_MOVIE_SUCCESS:
      const ratedMovie = action.payload;
      const ratedMovies = state.ratedMovies.filter(
        (movie) => movie.id !== ratedMovie.id
      );
      return {
        ...state,
        ratedMovies: [...ratedMovies, ratedMovie],
        isLoading: false,
      };
    case actions.GET_POPULAR_MOVIES_FAILURE:
    case actions.SEARCH_MOVIES_FAILURE:
    case actions.RATE_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
