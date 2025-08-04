export default function Jumbotron({ title, text }) {
  return (
    <div className="p-5  bg-dark ">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold" style={{ color: "#ddc165ff" }}>
          {title}
        </h1>
        <div className="col-md-8 fs-4 text-light">{text}</div>
      </div>
    </div>
  );
}
