import { Movie } from "../../shared/types/moviesTypes";
import * as actions from "../reducers/movies.actions";

export const useMoviesApi = (dispatch: any) => {
  const getPopularMovies = async (page: number) => {
    dispatch({ type: actions.GET_POPULAR_MOVIES_REQUEST });
    try {
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_GET_POPULAR_ENDPOINT}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
        {
          method: "GET",
          mode: "no-cors",
          headers: {
            "access-control-allow-origin": "*",
          },
        }
      );
      // const response = await fetch(
      //   "https://developers.themoviedb.org/3/movies/get-popular-movies?api_key=8f781d70654b5a6f2fa69770d1d115a3&language=en-US&page=1"
      // );

      const data = await response.json();
      const pagination = {
        page: data.page,
        total_results: data.total_results,
        total_pages: data.total_pages,
      };
      console.log({ response });
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
        `${process.env.REACT_APP_TMDB_SEARCH_ENDPOINT}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`
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

  //[WIP]
  const rateMovie = (id: number, rating: number) => {
    dispatch({ type: "RATE_MOVIE", payload: { id, rating } });
  };

  return { getPopularMovies, searchMovies, rateMovie };
};
