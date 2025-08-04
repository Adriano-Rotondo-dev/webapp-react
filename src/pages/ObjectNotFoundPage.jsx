import { NavLink } from "react-router-dom";

export default function Errorpage() {
  return (
    <>
      <div className="custom-bg text-light">
        <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-2 fw-medium mt-4">Oops! Page not found</p>
            <p className="mt-4 mb-5">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <NavLink className="nav-link" to="/" aria-current="page">
              <button className="btn-404 btn btn-secondary w-100 m-3 p-3 rounded  border-0">
                Go Home and select another film!
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
