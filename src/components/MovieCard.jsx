import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <>
      <div className="card h-100 p-3">
        <Link to={`/movies/${movie.id}`}>
          <img
            src={movie.image}
            className="card-img-top p-3 img-fluid"
            alt={movie.title}
          />
        </Link>
        <div className="card-body">
          <Link
            className="link link-underline link-underline-opacity-0"
            to={`/movie/${movie.id}`}
          >
            <h5 className="card-title">{movie.title}</h5>
          </Link>
          <p className="card-text">Director: {movie.director}</p>
          <p className="card-text">Genre: {movie.genre}</p>
          <p className="card-text">Relese Year: {movie.release_year}</p>
          <p className="card-text">Synopsis: {movie.abstract}</p>
        </div>
      </div>
    </>
  );
}
