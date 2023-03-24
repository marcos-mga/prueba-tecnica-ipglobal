import { renderHook, act } from "@testing-library/react-hooks";
import { useMoviesApi } from "./useMoviesApi";
import * as actions from "../reducers/movies.actions";

describe("useMoviesApi hook", () => {
  const dispatch = jest.fn();
  const page = 1;

  beforeEach(() => {
    dispatch.mockClear();
  });

  it("should call dispatch with GET_POPULAR_MOVIES_REQUEST and GET_POPULAR_MOVIES_SUCCESS when getPopularMovies is called successfully", async () => {
    const mockResponse = {
      page: 1,
      total_results: 1,
      total_pages: 1,
      results: [
        {
          poster_path: "/test.jpg",
          adult: false,
          overview: "Test movie",
          release_date: "2022-01-01",
          id: 1,
          title: "Test Movie",
          vote_average: 7.5,
          genre_ids: [1, 2],
          original_title: "Test Movie",
          original_language: "en",
          backdrop_path: "/test.jpg",
          popularity: 10.0,
          vote_count: 100,
        },
      ],
    };
    const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    } as any);

    await renderHook(() =>
      useMoviesApi(dispatch)
    ).result.current.getPopularMovies(page);

    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.REACT_APP_TMDB_GET_POPULAR_ENDPOINT}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "access-control-allow-origin": "*",
        },
      }
    );
    expect(dispatch).toHaveBeenCalledWith({
      type: actions.GET_POPULAR_MOVIES_REQUEST,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: actions.GET_POPULAR_MOVIES_SUCCESS,
      payload: {
        movies: [
          {
            posterPath: "/test.jpg",
            adult: false,
            overview: "Test movie",
            releaseDate: "2022-01-01",
            id: 1,
            title: "Test Movie",
            vote_average: 7.5,
            genreIds: [1, 2],
            original_title: "Test Movie",
            original_language: "en",
            backdrop_path: "/test.jpg",
            popularity: 10.0,
            vote_count: 100,
          },
        ],
        pagination: { page: 1, total_results: 1, total_pages: 1 },
      },
    });
    fetchSpy.mockRestore();
  });
  it("should dispatch GET_POPULAR_MOVIES_REQUEST and GET_POPULAR_MOVIES_FAILURE actions when the request fails", async () => {
    const errorMessage = "Error: Failed to fetch";
    const fetchSpy = jest
      .spyOn(global, "fetch")
      .mockRejectedValueOnce(errorMessage);

    await renderHook(() =>
      useMoviesApi(dispatch)
    ).result.current.getPopularMovies(page);

    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.REACT_APP_TMDB_GET_POPULAR_ENDPOINT}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "access-control-allow-origin": "*",
        },
      }
    );
    expect(dispatch).toHaveBeenCalledWith({
      type: actions.GET_POPULAR_MOVIES_REQUEST,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: actions.GET_POPULAR_MOVIES_FAILURE,
      payload: { error: errorMessage },
    });
    fetchSpy.mockRestore();
  });

  it("should call dispatch with SEARCH_MOVIES_REQUEST and SEARCH_MOVIES_FAILURE when searchMovies fails", async () => {
    const errorMessage = "Error: Failed to fetch";
    const fetchSpy = jest
      .spyOn(global, "fetch")
      .mockRejectedValueOnce(errorMessage);

    const query = "Test Query";
    await renderHook(() => useMoviesApi(dispatch)).result.current.searchMovies(
      query,
      page
    );

    expect(fetchSpy).toHaveBeenCalledWith(
      `${process.env.REACT_APP_TMDB_SEARCH_ENDPOINT}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=Test Query&page=1&include_adult=true`
    );
    expect(dispatch).toHaveBeenCalledWith({
      type: actions.SEARCH_MOVIES_REQUEST,
      payload: {
        query,
      },
    });

    fetchSpy.mockRestore();
  });
});
