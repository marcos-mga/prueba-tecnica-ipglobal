import * as React from "react";
import { Pagination } from "@mui/material";
import { useMoviesContext } from "../../context/movies/MovieContext";
import { MODES } from "../../shared/constants/constants";
interface PaginatorProps {
  mode: string;
}

const Paginator: React.FC<PaginatorProps> = ({ mode }) => {
  const { pagination, searchTerm, searchMovies, getPopularMovies } =
    useMoviesContext();

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    if (mode ===MODES.SEARCH) {
      searchMovies(searchTerm, page);
    } else {
      getPopularMovies(page);
    }
  };

  return mode !== MODES.RATED ? (
    <div className={"classes.root"}>
      <Pagination
        color="primary"
        count={pagination.total_pages}
        page={pagination.page}
        onChange={handleChange}
        data-testid={"paginator"}
      />
    </div>
  ) : null;
};
export default Paginator;
