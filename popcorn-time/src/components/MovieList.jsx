import { useState } from "react";

import movies from "../data/movies.json";
import { MovieSummary } from "./MovieSummary";

function MovieList() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  console.log(moviesToDisplay);

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
      {moviesToDisplay.map((movieObj, i, arr) => {
        return (
          <MovieSummary
            key={movieObj.id}
            movieDetails={movieObj}
            onDelete={deleteMovie}
          />
        );
      })}
    </>
  );
}

export default MovieList;
