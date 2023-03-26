import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
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

describe("Footer component", () => {
  it("renders the footer with the correct text", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer");

    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent(/© 2023 - Movies App/i);
  });

  it("renders the footer with the correct links", () => {
    render(<Footer />);
    const repoLink = screen.getByText("Repo de la prueba");
    const linkedinLink = screen.getByText("Mi LinkedIn");

    expect(repoLink).toBeInTheDocument();
    expect(repoLink).toHaveAttribute(
      "href",
      "https://github.com/marcos-mga/prueba-tecnica-ipglobal"
    );
    expect(repoLink).toHaveAttribute("target", "_blank");
    expect(repoLink).toHaveAttribute("rel", "noopener");

    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/marcos-manuel-garcía-aldao-26372712a"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener");
  });
});
