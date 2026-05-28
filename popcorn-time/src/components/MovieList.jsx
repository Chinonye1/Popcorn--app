import { useState } from "react";




import { MovieSummary } from "./MovieSummary";

function MovieList(props) {
  
  

  

  return (
    <>
   
      {props.movieArr.map((movieObj, i, arr) => {
        return (
          <MovieSummary
            key={movieObj.id}
            movieDetails={movieObj}
            onDelete={props.onDelete}
          />
        );
      })}
    </>
  );
}

export default MovieList;
