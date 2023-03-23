import { useState } from "react";
import { Rating, Button, Box } from "@mui/material";
import { useMoviesContext } from "../../context/MovieContext";

type RatingProps = {
  movieId: number | undefined;
};

const RatingForm: React.FC<RatingProps> = ({ movieId }: RatingProps) => {
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const { rateMovie } = useMoviesContext();

  const handleRatingChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setRatingValue(value);
  };

  const handleRateMovie = () => {
    ratingValue && rateMovie(movieId, ratingValue);
  };

  return (
    <Box className={"classes.container"}>
      <Box className={"classes.rating"}>
        <Rating
          name="rating"
          value={ratingValue}
          onChange={handleRatingChange}
        />
      </Box>
      <Button
        className={"classes.button"}
        variant="contained"
        color="primary"
        onClick={handleRateMovie}
      >
        Rate Movie
      </Button>
    </Box>
  );
};

export default RatingForm;
