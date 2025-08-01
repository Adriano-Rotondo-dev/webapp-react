import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const menu = [
    {
      id: 1,
      label: "Home",
      to: "/",
    },
    {
      id: 2,
      label: "Movies",
      to: "/movies",
    },
  ];

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Movie List Reviews
            </Link>
            <div className=" navbar">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                {menu.map((link) => {
                  return (
                    <li className="nav-item" key={link.id}>
                      <NavLink className="nav-link" to={link.to}>
                        {link.label}
                        <span className="visually-hidden">(current)</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
