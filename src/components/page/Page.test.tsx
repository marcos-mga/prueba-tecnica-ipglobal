import { render, screen } from "@testing-library/react";
import Page from "./Page";
import { Movie } from "../../shared/types/moviesTypes";
import { MovieContext } from "../../shared/types/moviesTypes";
import { MemoryRouter } from "react-router-dom";
import { getUserSession } from "../../shared/utils/utils";
const userId = getUserSession();
const movieList: Movie[] = [
  {
    id: 1,
    title: "Movie 1",
    overview: "Overview of movie 1",
    posterPath: "/movie1.jpg",
    releaseDate: "2022-01-01",
    vote_average: 7.5,
  },
  {
    id: 2,
    title: "Movie 2",
    overview: "Overview of movie 2",
    posterPath: "/movie2.jpg",
    releaseDate: "2022-02-01",
    vote_average: 8.0,
  },
];

const mockContextValue: MovieContext = {
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
  guestSessionId: userId ?? "test",
};
jest.mock("../../context/guestSession/GuestSessionContext", () => ({
  useGuestSessionContext: () => mockGuestContextValue,
}));
describe("Page component", () => {
  it("renders TopBar, MoviesList and Footer components", () => {
    render(
      <MemoryRouter>
        <Page moviesList={movieList} mode="home" />
      </MemoryRouter>
    );
    const topBarElement = screen.getByTestId("top-bar");
    const moviesListElement = screen.getByTestId("movies-list");
    const footerElement = screen.getByTestId("footer");

    expect(topBarElement).toBeInTheDocument();
    expect(moviesListElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  it("renders EmptyState component if moviesList prop is empty", () => {
    render(
      <MemoryRouter>
        <Page moviesList={[]} mode="home" />
      </MemoryRouter>
    );
    const emptyStateElement = screen.getByTestId("empty-state");

    expect(emptyStateElement).toBeInTheDocument();
  });

  it("renders Paginator component if moviesList prop is not empty", () => {
    render(
      <MemoryRouter>
        <Page moviesList={movieList} mode="home" />
      </MemoryRouter>
    );
    const paginatorElement = screen.getByTestId("paginator");

    expect(paginatorElement).toBeInTheDocument();
  });
});
