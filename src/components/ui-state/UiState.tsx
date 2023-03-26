import { ReactNode } from "react";
import { CircularProgress } from "@mui/material";
import { useMoviesContext } from "../../context/movies/MovieContext";
import EmptyState from "../empty-state/EmptyState";
interface Props {
  children: ReactNode;
}

const UiState = ({ children }: Props) => {
  const { isLoading, error } = useMoviesContext();
  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    <EmptyState msg={"Something went wrong"} />;
  }
  return <>{children}</>;
};
export default UiState;
