import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ObjectNotFound from "./pages/ObjectNotFoundPage";
import { MovieProvider } from "./contexts/MoviesContext";

function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              {/* all routes here  */}
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:id" element={<MovieDetailsPage />} />
              {/* catch all route for 404 error  */}
              <Route path="*" element={<ObjectNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
