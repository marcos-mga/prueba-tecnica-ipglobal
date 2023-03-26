import { useMoviesContext } from "../../context/movies/MovieContext";
import { useGuestSessionContext } from "../../context/guestSession/GuestSessionContext";
import Page from "../../components/page/Page";
import { useEffect } from "react";

const MyListPage = (): JSX.Element => {
  const { ratedMovies, mode, getRatedMovies } = useMoviesContext();
  const { guestSessionId } = useGuestSessionContext();

  useEffect(() => {
    getRatedMovies(guestSessionId);
  }, []);

  return (
    <>
      <Page
        moviesList={ratedMovies}
        mode={mode}
        data-testid={"page-component"}
      />
    </>
  );
};

export default MyListPage;
