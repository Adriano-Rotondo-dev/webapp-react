import { useState, useEffect } from "react";
import axios from "axios";

//components
import Jumbotron from "../components/Jumbotron";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/api/movies`)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Jumbotron
        title="This is the Movie List"
        text={`On this page you'll find the list of our top movies with infos fetched from our database.
          Click on a movie to see details and reviews.`}
      />

      <div className="row bg-dark p-5">
        {movies.map((movie) => (
          <div className="list col-md-6 mb-4 p-3" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}
