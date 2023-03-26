import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import RatingForm from "../rating/Rating";
import MovieModal from "../modalMovie/ModalMovie";
import { Movie } from "../../shared/types/moviesTypes";
import { MODES } from "../../shared/constants/constants";
import { useMoviesContext } from "../../context/movies/MovieContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { mode } = useMoviesContext();
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
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
        <CardContent sx={{ height: 210 }}>
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
          <Grid sx={{ display: "flex" }} justifyContent={"space-between"}>
            <Typography
              data-testid={"movie-date"}
              variant="body2"
              gutterBottom
              sx={{ pt: 5 }}
            >
              Release Date : {movie.releaseDate}
            </Typography>
            <Box sx={{ marginLeft: "auto" }} alignSelf="flex-end">
              <IconButton onClick={handleShowModal}>
                <VisibilityIcon />
              </IconButton>
            </Box>
          </Grid>
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
            {mode !== MODES.RATED && (
              <Box mt={2}>
                <Typography data-testid={"movie-rate"} variant="subtitle2">
                  Rate this movie:
                </Typography>
                <RatingForm movieId={movie.id} />
              </Box>
            )}
          </CardContent>
        </Collapse>
      </Card>
      <MovieModal open={showModal} onClose={handleCloseModal} movie={movie} />
    </>
  );
};

export default MovieCard;
