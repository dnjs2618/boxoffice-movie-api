import React from "react";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const title = "하하하하";
  const rank = "1";
  const rankOldAndNew = "NEW";
  return (
    <div>
      <MovieItem title={title} rank={rank} rankOldAndNew={rankOldAndNew} />
      <MovieItem title={title} rank={rank} rankOldAndNew={rankOldAndNew} />
      <MovieItem title={title} rank={rank} rankOldAndNew={rankOldAndNew} />
      <MovieItem title={title} rank={rank} rankOldAndNew={rankOldAndNew} />
      <MovieItem title={title} rank={rank} rankOldAndNew={rankOldAndNew} />
      <MovieItem title={title} rank={rank} rankOldAndNew={rankOldAndNew} />
      <MovieItem title={title} rank={rank} rankOldAndNew={rankOldAndNew} />
    </div>
  );
};

export default MovieList;
