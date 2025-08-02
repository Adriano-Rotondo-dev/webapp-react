export default function StarRating({ vote }) {
  const fillStars = Number(vote);
  return (
    <>
      {Array.from({ length: fillStars }).map((_, index) => (
        <i
          key={index}
          className="bi bi-star-fill"
          style={{ color: "#66ff33" }}
        ></i>
      ))}
    </>
  );
}
