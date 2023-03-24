import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";
import RatingForm from "../rating/rating";
import { Movie } from "../../shared/types/moviesTypes";
import GuestSessionProvider from "../../context/guestSession/GuestSessionContext";
interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card data-testid={"movie-card"}>
      <CardMedia
        image={`${process.env.REACT_APP_TMDB_IMG_BASE_ENDPOINT}${movie.posterPath}`}
        sx={{ height: 140 }}
        title={movie.title}
        onClick={handleShowDetails}
      />
      <CardContent sx={{ height: 140 }}>
        <Typography
          data-testid={"movie-title"}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {movie.title}
        </Typography>
        <Typography
          data-testid={"movie-date"}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {movie.releaseDate}
        </Typography>
      </CardContent>

      <Collapse in={showDetails} timeout="auto" data-testid={"collapse"}>
        <CardContent>
          <Box mt={2}>
            <Typography
              variant="body1"
              component="p"
              sx={{ height: 200, overflow: "hidden", overflowY: "auto" }}
              data-testid={"movie-overview"}
            >
              {movie.overview}
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography data-testid={"movie-rate"} variant="subtitle2">
              Rate this movie:
            </Typography>
            <GuestSessionProvider>
              <RatingForm movieId={movie.id} />
            </GuestSessionProvider>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MovieCard;
