import { useState } from "react";

import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieList from "./components/MovieList"

import movies from "./data/movies.json";

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
      // get the new list of movies ...
  
      const newList = moviesToDisplay.filter((movie) => {
        if (movie.id !== movieId) {
          return true;
        }
      });
      //update state...
      //movies to display
  
      setMoviesToDisplay(newList);
    };
  return (
    <>
      <Header  numberOfMovies={moviesToDisplay.length}/>
      <MovieList movieArr={moviesToDisplay} onDelete={deleteMovie}/>
      <Footer />
    </>
  )
}

export default App
