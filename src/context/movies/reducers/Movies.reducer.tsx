import { MoviesState, MoviesAction } from "../../../shared/types/moviesTypes";
import * as actions from "./movies.actions";
import { MODES } from "../../../shared/constants/constants";

export const MoviesReducer = (
  state: MoviesState,
  action: MoviesAction
): MoviesState => {
  switch (action.type) {
    case actions.GET_POPULAR_MOVIES_REQUEST:
    case actions.RATE_MOVIE_REQUEST:
    case actions.GET_RATED_MOVIES_REQUEST:
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
        mode: MODES.HOME,
      };
    case actions.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchResults: action.payload.movies,
        moviesList: action.payload.movies,
        pagination: action.payload.pagination,
        isLoading: false,
        mode: MODES.SEARCH,
      };
    case actions.GET_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        ratedMovies: action.payload.movies,
        pagination: action.payload.pagination,
        isLoading: false,
        mode: MODES.RATED,
      };
    case actions.RATE_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actions.GET_POPULAR_MOVIES_FAILURE:
    case actions.SEARCH_MOVIES_FAILURE:
    case actions.GET_RATED_MOVIES_FAILURE:
    case actions.RATE_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case actions.RESET_SEARCH:
      return {
        ...state,
        moviesList: state.popularMovies,
        mode: "home",
        pagination: {
          ...state.pagination,
          page: 1,
        },
      };
    default:
      return state;
  }
};
