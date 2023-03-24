import { render, screen } from "@testing-library/react";
import Page from "./Page";
import { Movie } from "../../shared/types/moviesTypes";
import { MovieContext } from "../../shared/types/moviesTypes";

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
  getPopularMovies: jest.fn(),
  searchMovies: jest.fn(),
  rateMovie: jest.fn(),
};

jest.mock("../../context/MovieContext", () => ({
  useMoviesContext: () => mockContextValue,
}));

describe("Page component", () => {
  it("renders TopBar, MoviesList and Footer components", () => {
    render(<Page moviesList={movieList} mode="home" />);

    const topBarElement = screen.getByTestId("top-bar");
    const moviesListElement = screen.getByTestId("movies-list");
    const footerElement = screen.getByTestId("footer");

    expect(topBarElement).toBeInTheDocument();
    expect(moviesListElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  it("renders EmptyState component if moviesList prop is empty", () => {
    render(<Page moviesList={[]} mode="home" />);

    const emptyStateElement = screen.getByTestId("empty-state");

    expect(emptyStateElement).toBeInTheDocument();
  });

  it("renders Paginator component if moviesList prop is not empty", () => {
    render(<Page moviesList={movieList} mode="home" />);

    const paginatorElement = screen.getByTestId("paginator");

    expect(paginatorElement).toBeInTheDocument();
  });
});
