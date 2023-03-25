import { useEffect, useState } from "react";
import { Rating, Button, Box } from "@mui/material";
import { useMoviesContext } from "../../context/movies/MovieContext";
import { useGuestSessionContext } from "../../context/guestSession/GuestSessionContext";
import { needsCreateGuestSession } from "../../shared/utils/utils";
type RatingProps = {
  movieId: number | undefined;
};

const RatingForm: React.FC<RatingProps> = ({ movieId }: RatingProps) => {
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const { rateMovie } = useMoviesContext();
  const { guestSessionId } = useGuestSessionContext();

  const handleRatingChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setRatingValue(value);
  };

  const handleRateMovie = () => {
    console.log({ guestSessionId });
    ratingValue && rateMovie(movieId, ratingValue, guestSessionId);
  };

  return (
    <Box className={"classes.container"}>
      <Box className={"classes.rating"}>
        <Rating
          name="rating"
          value={ratingValue}
          onChange={handleRatingChange}
          precision={0.5}
          max={10}
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
