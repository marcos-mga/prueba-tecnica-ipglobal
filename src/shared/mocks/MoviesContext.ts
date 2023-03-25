import { MovieContext } from "../types/moviesTypes";

export const mockContextValue: MovieContext = {
  moviesList: [],
  popularMovies: [],
  searchResults: [],
  searchTerm: "",
  ratedMovies: [],
  pagination: {
    page: 1,
    total_results: 100,
    total_pages: 1,
  },
  mode: 'home',
  isLoading: false,
  error: null,
  getPopularMovies: jest.fn(),
  searchMovies: jest.fn(),
  rateMovie: jest.fn(),
};
