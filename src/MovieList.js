import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieItem
            key={movie.movieNm}
            title={movie.movieNm}
            rank={movie.rank}
            rankOldAndNew={movie.rankOldAndNew}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
