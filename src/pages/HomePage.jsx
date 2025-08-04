import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

const btns = [
  {
    id: 1,
    label: "latest",
    text: "Ultime Recensioni",
    icon: <i className="bi bi-clock-history"></i>,
  },
  {
    id: 2,
    label: "top-rated",
    text: "Film più Votati",
    icon: <i className="bi bi-star-fill"></i>,
  },
  {
    id: 3,
    label: "genres",
    text: "Sfoglia per Genere",
    icon: <i className="bi bi-grid"></i>,
  },
  {
    id: 4,
    label: "coming-soon",
    text: "Prossime Uscite",
    icon: <i className="bi bi-calendar-event"></i>,
  },
  {
    id: 5,
    label: "about",
    text: "Chi Siamo",
    icon: <i className="bi bi-info-circle"></i>,
  },
  {
    id: 6,
    label: "contact",
    text: "Contattaci",
    icon: <i className="bi bi-envelope"></i>,
  },
];

export default function HomePage() {
  return (
    <>
      <Jumbotron
        title="Welcome to the Site"
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum in lacus vitae quam facilisis suscipit. 
Integer eu velit sit amet sem egestas ultrices. 
Curabitur tincidunt, nulla in interdum tincidunt, libero leo tempus magna, 
ac tincidunt elit orci id leo.`}
      />
      <div className="container p-5 bg-dark">
        <div className=" justify-content-center align-items-center row g-3">
          {btns.map((btn) => (
            <div className="col-4 p-2" key={btn.id}>
              <Link
                to="/object-not-found"
                className="btn btn-secondary w-100 m-3 p-3 rounded btn-home"
                aria-label={btn.label}
              >
                {btn.icon}
                <span className="m-2">{btn.text}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
