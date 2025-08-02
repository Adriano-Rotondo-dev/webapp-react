import { useState, useEffect } from "react";
import axios from "axios";

//components
import Jumbotron from "../components/Jumbotron";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/api/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Jumbotron
        title="This is the Movie List"
        text={`On this page you'll find the list of our top movies with infos fetched from our database.`}
      />

      <div className="row">
        {movies.map((movie) => (
          <div className="list col-md-6 mb-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}
