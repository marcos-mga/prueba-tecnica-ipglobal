import { render, screen } from "@testing-library/react";
import MoviesList from "./MoviesList";
import { Movie } from "../../shared/types/moviesTypes";
import { MovieContext } from "../../shared/types/moviesTypes";

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    posterPath: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    vote_average: 8.7,
    overview:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.",
  },
  {
    id: 2,
    title: "The Godfather",
    posterPath: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    vote_average: 8.7,
    overview:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
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

describe("MoviesList component", () => {
  it("renders list of movies", () => {
    render(<MoviesList movies={mockMovies} />);

    const movieListElement = screen.getByTestId("movies-list");
    const movieCardElements = screen.getAllByTestId("movie-card");

    expect(movieListElement).toBeInTheDocument();
    expect(movieCardElements).toHaveLength(mockMovies.length);
  });
});
