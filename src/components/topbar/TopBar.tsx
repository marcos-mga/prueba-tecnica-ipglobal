import React, { useState } from "react";
import { AppBar, IconButton, InputBase, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useMoviesContext } from "../../context/MovieContext";

type Props = {
  mode: string;
};

const TopBar: React.FC<Props> = ({ mode }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchMovies } = useMoviesContext();

  const handleSearch = () => {
    searchMovies(searchTerm);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <AppBar position="sticky" color="primary" sx={{ minHeight: 65 }} data-testid={"top-bar"}>
      {mode === "home" && (
        <Toolbar
          sx={{ bgcolor: "#FFFFFF", width: "auto", m: 1, marginLeft: "auto" }}
        >
          <InputBase
            className={"classes.input"}
            placeholder="Search movies"
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
            onKeyDown={handleKeyDown}
          />
          <IconButton
            type="submit"
            className={"classes.iconButton"}
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default TopBar;
