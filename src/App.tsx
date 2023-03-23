import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MoviesProvider from "./context/MovieContext";
import MoviesRoutes from "./routes";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <CssBaseline />
      <MoviesProvider>
        <MoviesRoutes />
      </MoviesProvider>
    </React.StrictMode>
  );
};

export default App;
