export default function Footer() {
  const quicklist = [
    { id: 1, label: "Home", to: "#" },
    { id: 2, label: "About", to: "#" },
    { id: 3, label: "Faq", to: "#" },
  ];
  return (
    <div className="bg-dark">
      <div className="container text-light">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              {quicklist.map((link) => {
                return (
                  <li className="footer-link" key={link.id}>
                    <a className="nav-link" to={link.to}>
                      <i className="bi bi-chevron-double-right"></i>
                      {link.label}
                      <span className="visually-hidden">(current)</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              {quicklist.map((link) => {
                return (
                  <li className="footer-link" key={link.id}>
                    <a className="nav-link" to={link.to}>
                      <i className="bi bi-chevron-double-right"></i>
                      {link.label}
                      <span className="visually-hidden">(current)</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              {quicklist.map((link) => {
                return (
                  <li className="footer-link" key={link.id}>
                    <a className="nav-link" to={link.to}>
                      <i className="bi bi-chevron-double-right"></i>
                      {link.label}
                      <span className="visually-hidden">(current)</span>
                    </a>
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
