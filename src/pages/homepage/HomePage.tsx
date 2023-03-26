import { useEffect } from "react";
import { useMoviesContext } from "../../context/movies/MovieContext";

import Page from "../../components/page/Page";

const HomePage = (): JSX.Element => {
  const { moviesList, getPopularMovies, pagination, mode } = useMoviesContext();

  useEffect(() => {
    getPopularMovies(pagination.page);
  }, []);
  return (
    <>
      <Page moviesList={moviesList} mode={mode} />
    </>
  );
};
export default HomePage;
