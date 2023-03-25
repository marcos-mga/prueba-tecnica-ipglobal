import { useMoviesContext } from "../../context/movies/MovieContext";
import GuestSessionProvider from "../../context/guestSession/GuestSessionContext";
import Page from "../../components/page/Page";

const MyListPage = (): JSX.Element => {
  const { ratedMovies, mode } = useMoviesContext();

  return (
    <>
      <GuestSessionProvider>
        <Page
          moviesList={ratedMovies}
          mode="rated"
          data-testid={"page-component"}
        />
      </GuestSessionProvider>
    </>
  );
};

export default MyListPage;
