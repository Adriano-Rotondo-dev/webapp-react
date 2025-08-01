export default function Jumbotron({ title, text }) {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{title}</h1>
        <div className="col-md-8 fs-4">{text}</div>
      </div>
    </div>
  );
}
