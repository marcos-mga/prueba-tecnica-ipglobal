import { Grid } from "@mui/material";
import MovieCard from "../moviecard/MovieCard";
import { Movie } from "../../shared/types/moviesTypes";

interface MovieListProps {
  movies: Movie[];
}

const MoviesList: React.FC<MovieListProps> = ({ movies }: MovieListProps) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={3} md={3} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
