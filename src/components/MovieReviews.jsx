import StarRating from "./StarRating";

export default function MovieReviews({ movie }) {
  return (
    <>
      {movie?.reviews?.map((review) => (
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
    </>
  );
}
