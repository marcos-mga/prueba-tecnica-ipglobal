import { useMoviesContext } from "../../context/MovieContext";
import Page from "../../components/page/page";

const MyListPage = (): JSX.Element => {
  const { ratedMovies } = useMoviesContext();

  return (
    <>
      <Page
        moviesList={ratedMovies}
        mode="rated"
        data-testid={"page-component"}
      />
    </>
  );
};

export default MyListPage;