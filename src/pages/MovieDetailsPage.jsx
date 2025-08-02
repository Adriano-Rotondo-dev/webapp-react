import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import MovieCard from "../components/MovieCard";
import StarRating from "../components/StarRating";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    reviews: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3030/api/movies/${id}`).then((res) => {
      console.log(res.data);
      setMovie(res.data);
    });
  }, [id]);
  return (
    <>
      <Jumbotron
        title="Welcome to the Movie Detail Page"
        text={`Here you will find all the information about the movie you selected`}
      />
      <div className="container bg-dark">
        <div className="detail col-sm-12 p-3">
          <MovieCard movie={movie} />
          <div className="container mt-3">
            {movie.reviews.map((review) => (
              <div key={review.id} className="card mb-3">
                <div className="card-body">
                  <p className="card-text">
                    Review by <span className="fw-bold"> {review.name} </span>
                    <StarRating vote={review.vote} />
                  </p>
                  <p className="card-text fw-bold"> {review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container m-5 d-flex justify-content-center gap-3">
          <button
            className="fw-semibold rounded-pill px-4 py-2"
            onClick={() => {
              if (movie.id > 1) {
                navigate(`/movies/${movie.id - 1}`);
              } else {
                navigate(`/movies/5`);
              }
            }}
          >
            Previous Movie
          </button>
          <button
            className="fw-semibold rounded-pill px-4 py-2"
            onClick={() => {
              if (movie.id < 5) {
                navigate(`/movies/${movie.id + 1}`);
              } else {
                navigate(`/movies/1`);
              }
            }}
          >
            Next Movie
          </button>
        </div>
      </div>
    </>
  );
}

{
  /* Previous rendering of movie card 
     <div className="card d-flex flex-row w-100">
            <img
              src={movie.image}
              className="img-fluid p-5 movie-img"
              alt={movie.title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.director}</p>
              <p className="card-text">Genre: {movie.genre}</p>
              <p className="card-text">Relese Year: {movie.release_year}</p>
              <p className="card-text">Synopsos: {movie.abstract}</p>
            </div> */
}
