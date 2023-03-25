import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MoviesProvider, { useMoviesContext } from "./MovieContext";
import { Movie } from "../../shared/types/moviesTypes";

describe("MoviesContext", () => {
  describe("useMoviesContext", () => {
    it("throws an error when used outside of MoviesProvider", () => {
      const { result } = renderHook(() => useMoviesContext());
      expect(result.error).toEqual(
        Error("useMoviesContext must be used within a MoviesProvider")
      );
    });

    it("returns context object when used inside MoviesProvider", () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <MoviesProvider>{children}</MoviesProvider>
      );
      const { result } = renderHook(() => useMoviesContext(), { wrapper });
      expect(result.current.searchTerm).toEqual("");
      expect(typeof result.current.getPopularMovies).toEqual("function");
    });
  });

  describe("MoviesProvider", () => {
    it("renders children without crashing", () => {
      render(
        <MoviesProvider>
          <div>Test</div>
        </MoviesProvider>
      );
      expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("provides context values to children", () => {
      const TestComponent = () => {
        const { searchTerm, pagination } = useMoviesContext();
        return (
          <div>
            <span data-testid="searchTerm">{searchTerm}</span>
            <span data-testid="page">{pagination.page}</span>
          </div>
        );
      };
      render(
        <MoviesProvider>
          <TestComponent />
        </MoviesProvider>
      );
      expect(screen.getByTestId("searchTerm")).toHaveTextContent("");
      expect(screen.getByTestId("page")).toHaveTextContent("1");
    });

    it("updates context state when actions are dispatched", () => {
      const TestComponent = () => {
        const { searchTerm, searchResults, searchMovies } = useMoviesContext();
        return (
          <div>
            <input
              data-testid="searchInput"
              value={searchTerm}
              onChange={(e) => searchMovies(e.target.value)}
            />
            <ul>
              {searchResults.map((movie: Movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          </div>
        );
      };
      render(
        <MoviesProvider>
          <TestComponent />
        </MoviesProvider>
      );
      const searchInput = screen.getByTestId("searchInput");
      act(() => {
        /* fire events that update state */
        userEvent.type(searchInput, "Avengers");
      });
      expect(searchInput).toHaveValue("Avengers");
    });
  });
});
