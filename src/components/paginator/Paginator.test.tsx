import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Paginator from "./Paginator";
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
    total_pages: 5,
  },
  mode: "home",
  isLoading: false,
  error: null,
  getPopularMovies: jest.fn(),
  searchMovies: jest.fn(),
  rateMovie: jest.fn(),
};

jest.mock("../../context/MovieContext", () => ({
  useMoviesContext: () => mockContextValue,
}));

describe("Paginator component", () => {
  it("renders Pagination component", () => {
    render(<Paginator mode="home" />);

    const paginatorElement = screen.getByTestId("paginator");

    expect(paginatorElement).toBeInTheDocument();
  });

  it("calls getPopularMovies method of context when mode is home", () => {
    const { getPopularMovies } = mockContextValue;

    render(<Paginator mode="home" />);

    userEvent.click(screen.getByText("2"));

    expect(getPopularMovies).toHaveBeenCalledWith(2);
  });

  it("calls searchMovies method of context when mode is search", () => {
    const { searchMovies, searchTerm } = mockContextValue;

    render(<Paginator mode="search" />);

    userEvent.click(screen.getByText("2"));

    expect(searchMovies).toHaveBeenCalledWith(searchTerm, 2);
  });
});
