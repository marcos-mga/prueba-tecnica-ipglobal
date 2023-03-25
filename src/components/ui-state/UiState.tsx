import { ReactNode } from "react";
import { CircularProgress } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import { useMoviesContext } from "../../context/movies/MovieContext";

interface Props {
  children: ReactNode;
}

const UiState = ({ children }: Props) => {
  const { isLoading, error } = useMoviesContext();
  if (isLoading) {
    return <CircularProgress />;
  }

  return <>{children}</>;
};
export default UiState;
