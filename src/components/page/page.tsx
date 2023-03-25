import { Container, Grid } from "@mui/material";
import TopBar from "../topbar/TopBar";
import MoviesList from "../movies-list/MoviesList";
import Paginator from "../paginator/Paginator";
import Footer from "../footer/Footer";
import EmptyState from "../empty-state/EmptyState";
import UiState from "../ui-state/UiState";
import { Movie } from "../../shared/types/moviesTypes";
import ScrollToTopButton from "../scroll-to-top/ScrollToTop";
interface PageProps {
  moviesList: Movie[];
  mode: string;
}

const Page: React.FC<PageProps> = ({ moviesList, mode }: PageProps) => {
  console.log({ moviesList });
  return (
    <Grid sx={{ height: "100vh" }}>
      <UiState>
        <TopBar mode={mode} />
        <Container maxWidth="lg" sx={{ pt: 5, pb: 10 }}>
          {moviesList?.length && (
            <Container sx={{ pb: 5 }}>
              <Grid container direction="column" alignItems="center">
                <Paginator mode={mode} />
              </Grid>
            </Container>
          )}
          {!moviesList?.length && <EmptyState />}
          <MoviesList movies={moviesList} />
        </Container>
        <Footer />
      </UiState>
    </Grid>
  );
};

export default Page;
