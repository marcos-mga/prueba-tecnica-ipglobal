import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  CardMedia,
  Card,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Movie } from "../../shared/types/moviesTypes";

interface MovieModalProps {
  open: boolean;
  onClose: () => void;
  movie: Movie;
}

const MovieModal: React.FC<MovieModalProps> = ({ open, onClose, movie }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <IconButton
        sx={{ position: "absolute", top: 8, right: 8 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          padding: "15px 50px",
        }}
      >
        <Card data-testid={"movie-card"}>
          <Typography variant="h6">{movie.title}</Typography>
          <Box
            sx={{
              height: 500,
            }}
          >
            <CardMedia
              image={`${process.env.REACT_APP_TMDB_IMG_BASE_ENDPOINT}${movie.posterPath}`}
              sx={{
                height: "100%",
                width: "100%",
                padding: "1em 1em 0 1em",
                objectFit: "cover",
              }}
              title={movie.title}
            />
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
              padding: "1rem",
              mt: "1rem",
              border: "1px solid white",
            }}
          >
          <Typography variant="body1">{movie.overview}</Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "8px",
              padding: "1rem",
              mt: "1rem",
              border: "1px solid white",
            }}
          >
            <Typography variant="body1">
              Release Date: {movie.releaseDate}
            </Typography>
            <Typography variant="body1">
              Original Language: {movie.original_language}
            </Typography>
            <Typography variant="body1">
              Vote Count: {movie.vote_count}
            </Typography>
            <Typography variant="body1">
              Popularity: {movie.popularity}
            </Typography>
          </Box>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default MovieModal;
