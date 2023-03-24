import { createContext, useContext, useReducer } from "react";
import { MoviesState, MovieContext } from "../shared/types/moviesTypes";
import { MoviesReducer } from "./reducers/Movies.reducer";
import { useMoviesApi } from "./hooks/useMoviesApi";

const MoviesContext = createContext<MovieContext | null>(null);

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("useMoviesContext must be used within a MoviesProvider");
  }

  return context;
};

const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: MoviesState = {
    moviesList: [],
    popularMovies: [],
    searchResults: [],
    ratedMovies: [],
    pagination: {
      page: 1,
      total_results: 100,
      total_pages: 1,
    },
    searchTerm: "",
    isLoading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(MoviesReducer, initialState);
  const {
    searchTerm,
    pagination,
    moviesList,
    popularMovies,
    searchResults,
    ratedMovies,
  } = state;
  const { getPopularMovies, searchMovies, rateMovie } = useMoviesApi(dispatch);

  return (
    <MoviesContext.Provider
      value={{
        searchTerm,
        moviesList,
        popularMovies,
        searchResults,
        ratedMovies,
        pagination,
        getPopularMovies,
        searchMovies,
        rateMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
