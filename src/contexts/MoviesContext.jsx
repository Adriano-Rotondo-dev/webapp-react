//MoviesPage context for complete list of movies

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";

//define context obj
const MoviesContext = createContext();

//define provider
function MovieProvider({ children }) {
  //define endpoint and values
  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
  const [movies, setMovies] = useState([]);
  //add loading useState
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}/api/movies`)
      .then((res) => {
        setTimeout(() => {
          console.log(res.data);
          setMovies(res.data);
          setIsLoading(false);
        }, 500);
      })
      .catch((err) => console.error(err));
  }, []);

  //add loading component conditional rendering

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {isLoading ? <Loading /> : children}
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
