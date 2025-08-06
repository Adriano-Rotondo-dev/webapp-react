import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import MovieCard from "../components/MovieCard";
import MovieReviews from "../components/MovieReviews";
import AddReview from "../components/AddReview";
import Loading from "../components/Loading";

export default function MovieDetailsPage() {
  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    vote: "",
    text: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    //get form Data
    console.log(formData);
    //validation for name imput
    if (!formData.name.trim()) {
      alert("Insert a valid Name");
      console.error(formData.name); //log the user input in console
      return; // ❌ interrupt POST
    }
    //validation for vote input
    if (formData.vote < 1 || formData.vote > 5) {
      console.error(formData.vote); //log the user input in console
      return; // ❌ interrupt POST
    }
    //validation for text input
    if (!formData.text.trim()) {
      alert("Your Review is empty!");
      console.error(formData.text); //log the user input in console
      return; // ❌ interrupt POST
    }

    //perform fetch request to store the review
    //if you encounter no errors in formInputs, POST the new review
    axios
      .post(`${API_ENDPOINT}/api/movies/${id}/reviews`, formData)
      .then((res) => {
        console.log(res),
          setFormData({
            name: "",
            vote: "",
            text: "",
          });
      })
      .catch((err) => console.log(err));
  }
  const [movie, setMovie] = useState({
    reviews: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${API_ENDPOINT}/api/movies/${id}`).then((res) => {
      setTimeout(() => {
        console.log(res.data);
        setMovie(res.data);
        setIsLoading(false);
      }, 500);
    });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Jumbotron
        title={`${movie.title} `}
        text={`Here you will find details and reviews for ${movie.title} 
        and a form to add your own review`}
      />
      <div className="detail-card bg-dark">
        <div className="detail col-sm-12 p-3">
          <MovieCard movie={movie} />
          <div className="container mt-3">
            <MovieReviews movie={movie} />
          </div>
        </div>

        <AddReview
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />

        <div className="container py-5 d-flex justify-content-center gap-3">
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
