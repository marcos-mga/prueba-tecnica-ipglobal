import { useEffect } from "react";
import { useMoviesContext } from "../../context/movies/MovieContext";
import { useGuestSessionContext } from "../../context/guestSession/GuestSessionContext";

import Page from "../../components/page/Page";
import { needsCreateGuestSession } from "../../shared/utils/utils";

const HomePage = (): JSX.Element => {
  const { moviesList, getPopularMovies, pagination, mode } = useMoviesContext();
  const { createGuestSession, expiresAt, guestSessionId } =
    useGuestSessionContext();
  useEffect(() => {
    needsCreateGuestSession(guestSessionId, expiresAt) && createGuestSession();
    getPopularMovies(pagination.page);
  }, []);
  return (
    <>
      <Page moviesList={moviesList} mode={mode} />
    </>
  );
};
export default HomePage;
