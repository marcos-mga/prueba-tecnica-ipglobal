import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MoviesProvider from "./context/movies/MovieContext";
import GuestSessionProvider from "./context/guestSession/GuestSessionContext";
import MoviesRoutes from "./routes";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <CssBaseline />
      <GuestSessionProvider>
        <MoviesProvider>
          <MoviesRoutes />
        </MoviesProvider>
      </GuestSessionProvider>
    </React.StrictMode>
  );
};

export default App;
