import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const MyListPage = React.lazy(() => import("./pages/mylistpage/MyListPage"));
const HomePage = React.lazy(() => import("./pages/homepage/HomePage"));
const MoviesRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/myList" element={<MyListPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default MoviesRoutes;
