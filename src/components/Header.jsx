import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const menu = [
    {
      id: 1,
      label: "HOME",
      to: "/",
    },
    {
      id: 2,
      label: "MOVIES",
      to: "/movies",
    },
  ];

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/images/MovieLogo.png" alt="logo" />
            </Link>
            <div className=" navbar">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                {menu.map((link) => {
                  return (
                    <li className="nav-item" key={link.id}>
                      <NavLink
                        className={({ isActive }) =>
                          `nav-link ${
                            isActive
                              ? "active text-warning"
                              : "text-warning-emphasis"
                          }`
                        }
                        to={link.to}
                      >
                        {link.label}
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
