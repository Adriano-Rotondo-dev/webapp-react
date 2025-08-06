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
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* all routes here  */}
            <Route path="/" element={<HomePage />} />
            {/* wrap MoviesPage element in Movieprovider 
            MoviesPage is the only page that uses the full list as of now */}
            <Route
              path="/movies"
              element={
                <MovieProvider>
                  <MoviesPage />
                </MovieProvider>
              }
            />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            {/* catch all route for 404 error  */}
            <Route path="*" element={<ObjectNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
