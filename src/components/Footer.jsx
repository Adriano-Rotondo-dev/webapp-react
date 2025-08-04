import { Link } from "react-router-dom";

export default function Footer() {
  const quicklist = [
    { id: 1, label: "Home", to: "/object-not-found" },
    { id: 2, label: "About", to: "/object-not-found" },
    { id: 3, label: "Faq", to: "/object-not-found" },
  ];
  return (
    <div className="bg-dark">
      <div className="container text-light">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5 style={{ color: "#66ff33" }}>Quick links</h5>
            <ul className="list-unstyled quick-links">
              {quicklist.map((link) => {
                return (
                  <li className="footer-link " key={link.id}>
                    <Link className="nav-link" to={link.to}>
                      <i
                        className="bi bi-chevron-double-right"
                        style={{ color: "#3be093ff" }}
                      ></i>
                      {link.label}
                      <span className="visually-hidden">(current)</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5 style={{ color: "#66ff33" }}>Quick links</h5>
            <ul className="list-unstyled quick-links">
              {quicklist.map((link) => {
                return (
                  <li className="footer-link" key={link.id}>
                    <Link className="nav-link" to={link.to}>
                      <i
                        className="bi bi-chevron-double-right"
                        style={{ color: "#3be093ff" }}
                      ></i>
                      {link.label}
                      <span className="visually-hidden">(current)</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5 style={{ color: "#66ff33" }}>Quick links</h5>
            <ul className="list-unstyled quick-links">
              {quicklist.map((link) => {
                return (
                  <li className="footer-link" key={link.id}>
                    <Link className="nav-link" to={link.to}>
                      <i
                        className="bi bi-chevron-double-right"
                        style={{ color: "#3be093ff" }}
                      ></i>
                      {link.label}
                      <span className="visually-hidden">(current)</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
