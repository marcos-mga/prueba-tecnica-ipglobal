import { MoviesReducer } from "./Movies.reducer";
import * as actions from "./movies.actions";
const movieTest = { id: 1, title: "Movie 1", rating: 5 };
const initialState = {
  popularMovies: [],
  searchResults: [],
  moviesList: [],
  ratedMovies: [],
  pagination: {
    page: 1,
    total_results: 100,
    total_pages: 1,
  },
  mode: "home",
  searchTerm: "",
  isLoading: false,
  error: null,
};

describe("MoviesReducer", () => {
  it("should handle GET_POPULAR_MOVIES_REQUEST and RATE_MOVIE_REQUEST", () => {
    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    const newState = MoviesReducer(initialState, {
      type: actions.GET_POPULAR_MOVIES_REQUEST,
    });

    expect(newState).toEqual(expectedState);
  });

  it("should handle SEARCH_MOVIES_REQUEST", () => {
    const query = "test";
    const expectedState = {
      ...initialState,
      isLoading: true,
      searchTerm: query,
    };

    const newState = MoviesReducer(initialState, {
      type: actions.SEARCH_MOVIES_REQUEST,
      payload: { query },
    });

    expect(newState).toEqual(expectedState);
  });

  it("should handle GET_POPULAR_MOVIES_SUCCESS", () => {
    const movies = [movieTest];
    const pagination = { page: 1, total_results: 1, total_pages: 1 };
    const expectedState = {
      ...initialState,
      popularMovies: movies,
      moviesList: movies,
      pagination,
      isLoading: false,
    };

    const newState = MoviesReducer(initialState, {
      type: actions.GET_POPULAR_MOVIES_SUCCESS,
      payload: { movies, pagination },
    });

    expect(newState).toEqual(expectedState);
  });

  it("should handle SEARCH_MOVIES_SUCCESS", () => {
    const movies = [movieTest];
    const pagination = { page: 1, total_results: 1, total_pages: 1 };
    const expectedState = {
      ...initialState,
      searchResults: movies,
      moviesList: movies,
      pagination,
      isLoading: false,
    };

    const newState = MoviesReducer(initialState, {
      type: actions.SEARCH_MOVIES_SUCCESS,
      payload: { movies, pagination },
    });

    expect(newState).toEqual(expectedState);
  });

  it("should handle GET_POPULAR_MOVIES_FAILURE, SEARCH_MOVIES_FAILURE and RATE_MOVIE_FAILURE", () => {
    const error = "Error message";
    const expectedState = {
      ...initialState,
      isLoading: false,
      error,
    };

    const newState1 = MoviesReducer(initialState, {
      type: actions.GET_POPULAR_MOVIES_FAILURE,
      payload: { error },
    });

    expect(newState1).toEqual(expectedState);
    expect(newState1.popularMovies.length).toEqual(0);
    expect(newState1.moviesList.length).toEqual(0);
    expect(newState1.pagination.page).toEqual(1);
    expect(newState1.pagination.total_results).toEqual(100);
    expect(newState1.pagination.total_pages).toEqual(1);
    expect(newState1.isLoading).toBeFalsy();
    expect(newState1.error).toEqual(error);

    const newState2 = MoviesReducer(initialState, {
      type: actions.SEARCH_MOVIES_FAILURE,
      payload: { error },
    });
    expect(newState2).toEqual(expectedState);
    expect(newState2.searchResults.length).toEqual(0);
    expect(newState2.moviesList.length).toEqual(0);
    expect(newState2.pagination.page).toEqual(1);
    expect(newState2.pagination.total_results).toEqual(100);
    expect(newState2.pagination.total_pages).toEqual(1);
    expect(newState2.searchTerm).toBe("");
    expect(newState2.isLoading).toBeFalsy();
    expect(newState2.error).toEqual(error);

    const newState3 = MoviesReducer(initialState, {
      type: actions.RATE_MOVIE_FAILURE,
      payload: { error },
    });
    expect(newState3.ratedMovies.length).toEqual(0);
    expect(newState3.isLoading).toBeFalsy();
    expect(newState3.error).toEqual(error);
  });
});
