import { useEffect } from "react";
import { useMoviesContext } from "../../context/MovieContext";
import Page from "../../components/page/Page";

const HomePage = (): JSX.Element => {
  const { popularMovies, getPopularMovies } = useMoviesContext();

  useEffect(() => {
    getPopularMovies(popularMovies);
  }, []);
  return (
    <>
      <Page moviesList={popularMovies} mode="home" />
    </>
  );
};
export default HomePage;
