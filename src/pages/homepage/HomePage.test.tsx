import { render, screen } from "@testing-library/react";
import { MovieContext } from "../../shared/types/moviesTypes";
import HomePage from "./HomePage";
import { MemoryRouter } from "react-router-dom";
import { getUserSession } from "../../shared/utils/utils";
const { guestSessionId: userId } = getUserSession();
const mockPopularMovies = [
  {
    id: 1,
    title: "Movie 1",
    poster_path: "/poster1.jpg",
    releaseDate: "2022-01-01",
    vote_average: 7.5,
  },
  {
    id: 2,
    title: "Movie 2",
    poster_path: "/poster2.jpg",
    releaseDate: "2022-01-02",
    vote_average: 8.0,
  },
];

const mockContextValue: MovieContext = {
  moviesList: mockPopularMovies,
  popularMovies: mockPopularMovies,
  searchResults: [],
  searchTerm: "",
  ratedMovies: [],
  pagination: {
    page: 1,
    total_results: 100,
    total_pages: 1,
  },
  mode: "home",
  isLoading: false,
  error: null,
  getPopularMovies: jest.fn(),
  getRatedMovies: jest.fn(),
  searchMovies: jest.fn(),
  rateMovie: jest.fn(),
  resetSearch: jest.fn(),
};

jest.mock("../../context/movies/MovieContext", () => ({
  useMoviesContext: () => mockContextValue,
}));

const mockGuestContextValue = {
  guestSessionId: userId,
};
jest.mock("../../context/guestSession/GuestSessionContext", () => ({
  useGuestSessionContext: () => mockGuestContextValue,
}));

describe("MyListPage", () => {
  test("should render the correct number of movies", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const movies = screen.getAllByTestId("movie-card");
    expect(movies).toHaveLength(2);
  });
  test("should render the movie details correctly", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const movieTitles = screen.getAllByTestId("movie-title");
    const movieRatings = screen.getAllByTestId("movie-date");

    expect(movieTitles[0]).toHaveTextContent("Movie 1");
    expect(movieTitles[1]).toHaveTextContent("Movie 2");

    expect(movieRatings[0]).toHaveTextContent("2022-01-01");
    expect(movieRatings[1]).toHaveTextContent("2022-01-02");
  });
});
