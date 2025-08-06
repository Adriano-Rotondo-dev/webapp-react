//MoviesPage context for complete list of movies

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

//define context obj
const MoviesContext = createContext();

//define provider
function MovieProvider({ children }) {
  //define endpoint and values
  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/api/movies`)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

//define hook to consume context
function useMovies() {
  const context = useContext(MoviesContext);
  return context;
}

//export provider and hook function

export { MovieProvider, useMovies };
