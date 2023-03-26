import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import RatingForm from "./Rating";
import {
  MovieContext,
  GuestSessionContextType,
} from "../../shared/types/moviesTypes";
import { getUserSession } from "../../shared/utils/utils";
const { guestSessionId: userId } = getUserSession();
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
const mockGuestContextValue: GuestSessionContextType = {
  guestSessionId: userId,
};
jest.mock("../../context/guestSession/GuestSessionContext", () => ({
  useGuestSessionContext: () => mockGuestContextValue,
}));
describe("RatingForm", () => {
  const guestSessionId = userId;
  const movieId = 1;
  const { rateMovie } = mockContextValue;
  beforeEach(() => {
    render(<RatingForm movieId={movieId} />);
  });

  it("should render RatingForm component", () => {
    const ratingForm = screen.getByTestId("rating-form");
    expect(ratingForm).toBeInTheDocument();
  });

  it("should call rateMovie function when button is clicked", async () => {
    const ratingValue = 1.5;
    const rating = screen.getByLabelText(`${ratingValue} Stars`);
    await act(async () => {
      fireEvent.click(rating);
    });

    const rateButton = screen.getByText(/rate movie/i);
    await act(async () => {
      fireEvent.click(rateButton);
    });

    expect(rateMovie).toHaveBeenCalledWith(
      movieId,
      ratingValue,
      guestSessionId
    );
  });
});
