import * as React from "react";
import { Pagination } from "@mui/material";
import { useMoviesContext } from "../../context/MovieContext";

interface PaginatorProps {
  mode: string;
}

const Paginator: React.FC<PaginatorProps> = ({ mode }) => {
  const { pagination, searchTerm, searchMovies, getPopularMovies } =
    useMoviesContext();

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    if (mode === "search") {
      searchMovies(searchTerm, page);
    } else {
      getPopularMovies(page);
    }
  };

  return (
    <div className={"classes.root"}>
      <Pagination
        color="primary"
        count={pagination.total_pages}
        page={pagination.page}
        onChange={handleChange}
      />
    </div>
  );
};
export default Paginator;
