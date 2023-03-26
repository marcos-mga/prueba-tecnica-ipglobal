import React, { useState } from "react";
import { AppBar, Grid, IconButton, InputBase, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useMoviesContext } from "../../context/movies/MovieContext";
import { MODES } from "../../shared/constants/constants";

const TopBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchMovies, resetSearch, mode } = useMoviesContext();

  const handleSearch = () => {
    searchMovies(searchTerm);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        minHeight: 65,
      }}
      data-testid={"top-bar"}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          pl: 2,
          pr: 2,
        }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <IconButton component={Link} to="/home" onClick={resetSearch}>
            <HomeIcon />
          </IconButton>
          <IconButton component={Link} to="/myList">
            <StarIcon />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={8}
          sm={4}
          md={4}
          sx={{
            width: "auto",
            pt: 1,
            pr: 1,
            marginLeft: "auto",
            alignItems: "center",
          }}
        >
          {mode !== MODES.RATED && (
            <Toolbar>
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
                data-testid="button-search"
              >
                <SearchIcon />
              </IconButton>
            </Toolbar>
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TopBar;
