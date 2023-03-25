import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { Movie } from "../../shared/types/moviesTypes";
import { MovieContext } from "../../shared/types/moviesTypes";

const mockMovie: Movie = {
  id: 1,
  title: "The Movie",
  posterPath: "/poster.jpg",
  releaseDate: "2022-01-01",
  overview: "A great movie",
};
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
  searchMovies: jest.fn(),
  rateMovie: jest.fn(),
};

jest.mock("../../context/MovieContext", () => ({
  useMoviesContext: () => mockContextValue,
}));
describe("MovieCard component", () => {
  it("renders the movie title and release date", () => {
    render(<MovieCard movie={mockMovie} />);

    const titleElement = screen.getByTestId("movie-title");
    const dateElement = screen.getByTestId("movie-date");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toBe("The Movie");
    expect(dateElement).toBeInTheDocument();
    expect(dateElement.textContent).toBe("2022-01-01");
  });

  it("renders the movie poster image", () => {
    render(<MovieCard movie={mockMovie} />);

    const imageElement = screen.getByRole("img");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("title", "The Movie");
  });

  it("renders the movie overview and rating form when details are shown", () => {
    render(<MovieCard movie={mockMovie} />);

    const imageElement = screen.getByRole("img");
    fireEvent.click(imageElement);

    const collapseElement = screen.getByTestId("collapse");

    expect(collapseElement).not.toHaveClass("MuiCollapse-hidden");
  });
});
