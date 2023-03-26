import { Movie } from "../../../shared/types/moviesTypes";
import * as actions from "../reducers/movies.actions";

export const useMoviesApi = (dispatch: any) => {
  const getPopularMovies = async (page: number) => {
    dispatch({ type: actions.GET_POPULAR_MOVIES_REQUEST });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_GET_POPULAR_ENDPOINT}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      );
      const data = await response.json();
      const pagination = {
        page: data.page,
        total_results: data.total_results,
        total_pages: data.total_pages,
      };
      const movies = data.results.map(
        (movie: any): Movie => ({
          posterPath: movie.poster_path,
          adult: movie.adult,
          overview: movie.overview,
          releaseDate: movie.release_date,
          id: movie.id,
          title: movie.title,
          vote_average: movie.vote_average,
          genreIds: movie.genre_ids,
          original_title: movie.original_title,
          original_language: movie.original_language,
          backdrop_path: movie.backdrop_path,
          popularity: movie.popularity,
          vote_count: movie.vote_count,
        })
      );
      dispatch({
        type: actions.GET_POPULAR_MOVIES_SUCCESS,
        payload: { movies, pagination },
      });
    } catch (error) {
      dispatch({
        type: actions.GET_POPULAR_MOVIES_FAILURE,
        payload: { error },
      });
    }
  };

  const searchMovies = async (query: string, page: number = 1) => {
    dispatch({ type: actions.SEARCH_MOVIES_REQUEST, payload: { query } });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_SEARCH_ENDPOINT}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
      );
      const data = await response.json();
      const pagination = {
        page: data.page,
        total_results: data.total_results,
        total_pages: data.total_pages,
      };
      const movies = data.results.map(
        (movie: any): Movie => ({
          posterPath: movie.poster_path,
          adult: movie.adult,
          overview: movie.overview,
          releaseDate: movie.release_date,
          id: movie.id,
          title: movie.title,
          vote_average: movie.vote_average,
          genreIds: movie.genre_ids,
          original_title: movie.original_title,
          original_language: movie.original_language,
          backdrop_path: movie.backdrop_path,
          popularity: movie.popularity,
          vote_count: movie.vote_count,
        })
      );
      dispatch({
        type: actions.SEARCH_MOVIES_SUCCESS,
        payload: { movies, pagination },
      });
    } catch (error) {
      dispatch({ type: actions.SEARCH_MOVIES_FAILURE, payload: { error } });
    }
  };

  const rateMovie = async (
    movieId: string,
    ratingValue: number,
    guestSessionId: string
  ) => {
    dispatch({
      type: actions.RATE_MOVIE_REQUEST,
    });

    try {
      await fetch(
        `${process.env.REACT_APP_TMDB_RATE_ENDPOINT}/${movieId}/rating?api_key=${process.env.REACT_APP_API_KEY}&guest_session_id=${guestSessionId}`,
        {
          headers: {
            "Content-type": "application/json;charset=utf-8",
          },
          method: "post",
          body: JSON.stringify({ value: ratingValue }),
        }
      );
      dispatch({ type: actions.RATE_MOVIE_SUCCESS });
    } catch (error) {
      dispatch({ type: actions.RATE_MOVIE_FAILURE, payload: error });
    }
  };

  const getRatedMovies = async (guestSessionId: string) => {
    dispatch({
      type: actions.GET_RATED_MOVIES_REQUEST,
    });

    try {
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_GET_RATED_ENDPOINT}/${guestSessionId}/rated/movies?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=created_at.asc`
      );
      const data = await response.json();
      const pagination = {
        page: data.page,
        total_results: data.total_results,
        total_pages: data.total_pages,
      };
      const movies = data.results.map(
        (movie: any): Movie => ({
          posterPath: movie.poster_path,
          adult: movie.adult,
          overview: movie.overview,
          releaseDate: movie.release_date,
          id: movie.id,
          title: movie.title,
          vote_average: movie.vote_average,
          genreIds: movie.genre_ids,
          original_title: movie.original_title,
          original_language: movie.original_language,
          backdrop_path: movie.backdrop_path,
          popularity: movie.popularity,
          vote_count: movie.vote_count,
        })
      );
      dispatch({
        type: actions.GET_RATED_MOVIES_SUCCESS,
        payload: { movies, pagination },
      });
    } catch (error) {
      dispatch({ type: actions.GET_RATED_MOVIES_FAILURE, payload: error });
    }
  };
  const resetSearch = () => {
    dispatch({ type: actions.RESET_SEARCH });
  };
  return {
    getPopularMovies,
    searchMovies,
    rateMovie,
    getRatedMovies,
    resetSearch,
  };
};
