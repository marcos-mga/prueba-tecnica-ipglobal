import { Grid } from "@mui/material";
import MovieCard from "../movie-card/MovieCard";
import { Movie } from "../../shared/types/moviesTypes";

interface MovieListProps {
  movies: Movie[];
}

const MoviesList: React.FC<MovieListProps> = ({ movies }: MovieListProps) => {
  return (
    <Grid
      container
      spacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      data-testid={"movies-list"}
    >
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
