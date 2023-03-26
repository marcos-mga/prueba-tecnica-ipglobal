import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";
import { MovieContext } from "../../shared/types/moviesTypes";

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

describe("EmptyState component", () => {
  it("renders without crashing", () => {
    render(<EmptyState msg="NO RESULTS FOUND" />);
    const emptyStateElement = screen.getByTestId("empty-state");
    expect(emptyStateElement).toBeInTheDocument();
  });

  it("displays 'NO RESULTS FOUND'", () => {
    render(<EmptyState msg="NO RESULTS FOUND" />);
    const titleElement = screen.getByText(/no results found/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("displays an image with a 'No Results Found' title", () => {
    render(<EmptyState msg="NO RESULTS FOUND" />);
    const imageElement = screen.getByRole("img");
    const titleAttribute = imageElement.getAttribute("title");
    expect(titleAttribute).toBe("No Results Found");
  });
});
