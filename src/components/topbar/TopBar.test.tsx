import { render, screen, fireEvent } from "@testing-library/react";
import TopBar from "./TopBar";
import { MovieContext } from "../../shared/types/moviesTypes";
const mockSearchMovies = jest.fn();
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
  searchMovies: mockSearchMovies,
  rateMovie: jest.fn(),
};
jest.mock("../../context/MovieContext", () => ({
  useMoviesContext: () => mockContextValue,
}));
describe("TopBar", () => {
  beforeEach(() => {
    render(<TopBar mode="home" />);
  });

  test("renders input field", () => {
    const inputElement = screen.getByPlaceholderText("Search movies");
    expect(inputElement).toBeInTheDocument();
  });

  test("searchMovies function is called when search button is clicked", () => {
    const inputElement = screen.getByPlaceholderText("Search movies");
    const searchButtonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.click(searchButtonElement);
    expect(mockSearchMovies).toHaveBeenCalled();
  });

  test("searchMovies function is called when enter key is pressed", () => {
    const inputElement = screen.getByPlaceholderText("Search movies");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(mockSearchMovies).toHaveBeenCalled();
  });
});
