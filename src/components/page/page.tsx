import { Container, Grid } from "@mui/material";
import TopBar from "../topbar/TopBar";
import MoviesList from "../MoviesList/moviesList";
import Paginator from "../paginator/paginator";
import Footer from "../footer/footer";
import { Movie } from "../../shared/types/moviesTypes";
import EmptyState from "../emptyState/emptyState";

interface PageProps {
  moviesList: Movie[];
  mode: string;
}

const Page: React.FC<PageProps> = ({ moviesList, mode }: PageProps) => {
  return (
    <Grid sx={{ height: "100vh" }}>
      <TopBar mode={mode} />
      <Container maxWidth="lg" sx={{ pt: 5 }}>
        {!moviesList?.length && <EmptyState />}
        <MoviesList movies={moviesList} />
      </Container>
      {moviesList?.length && (
        <Container sx={{ pt: 5 }}>
          <Grid container direction="column" alignItems="center">
            <Paginator mode={mode} />
          </Grid>
        </Container>
      )}
      <Footer />
    </Grid>
  );
};

export default Page;
