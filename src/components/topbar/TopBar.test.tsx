import { render, screen, fireEvent, act } from "@testing-library/react";
import TopBar from "./TopBar";
import { MovieContext } from "../../shared/types/moviesTypes";
import { MemoryRouter } from "react-router-dom";
import { getUserSession } from "../../shared/utils/utils";
const { guestSessionId: userId } = getUserSession();
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
  getRatedMovies: jest.fn(),
  searchMovies: mockSearchMovies,
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
describe("TopBar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );
  });

  test("renders input field", () => {
    const inputElement = screen.getByPlaceholderText("Search movies");
    expect(inputElement).toBeInTheDocument();
  });

  test("searchMovies function is called when search button is clicked", async () => {
    const inputElement = screen.getByPlaceholderText("Search movies");
    const searchButtonElement = screen.getByTestId("button-search");
    await act(async () => {
      fireEvent.change(inputElement, { target: { value: "test" } });
    });
    await act(async () => {
      fireEvent.click(searchButtonElement);
    });
    expect(mockSearchMovies).toHaveBeenCalled();
  });

  test("searchMovies function is called when enter key is pressed", async () => {
    const inputElement = screen.getByPlaceholderText("Search movies");
    await act(async () => {
      fireEvent.change(inputElement, { target: { value: "test" } });
    });
    await act(async () => {
      fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    });
    expect(mockSearchMovies).toHaveBeenCalled();
  });
});
