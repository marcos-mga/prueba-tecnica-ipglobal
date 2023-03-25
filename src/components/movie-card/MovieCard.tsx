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
      <Box sx={{ height: 300 }}>
        <CardMedia
          image={`${process.env.REACT_APP_TMDB_IMG_BASE_ENDPOINT}${movie.posterPath}`}
          sx={{
            height: "100%",
            width: "100%",
            padding: "1em 1em 0 1em",
            objectFit: "cover",
          }}
          title={movie.title}
          onClick={handleShowDetails}
        />
      </Box>
      <CardContent sx={{ height: 140 }}>
        <Typography
          sx={{ height: 100 }}
          data-testid={"movie-title"}
          paragraph
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
          gutterBottom
          sx={{ pt: 5 }}
        >
          {movie.releaseDate}
        </Typography>
      </CardContent>

      <Collapse in={showDetails} timeout="auto" data-testid={"collapse"}>
        <CardContent sx={{ pt: 6 }}>
          <Box mt={2}>
            <Typography
              variant="body1"
              component="p"
              sx={{
                height: 200,
                overflow: "hidden",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: 5,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "grey",
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: 2,
                },
              }}
              data-testid={"movie-overview"}
            >
              {movie.overview}
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography data-testid={"movie-rate"} variant="subtitle2">
              Rate this movie:
            </Typography>
            <RatingForm movieId={movie.id} />
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MovieCard;
