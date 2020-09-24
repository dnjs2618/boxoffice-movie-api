import React from "react";
import styled from "styled-components";

const MovieItemBlock = styled.div`
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border: 1px solid white;
    font-size: 1.25rem;
    background-color: #2c3e50;
    padding: 10px;
    box-shadow: 2px 2px 5px black;
  }
  .rank {
    font-weight: 600;
    color: white;
  }
  .movie-name {
    color: white;
    font-weight: 600;
  }
  .new {
    color: red;
  }
`;

const MovieItem = ({ title, rank, rankOldAndNew }) => {
  return (
    <MovieItemBlock>
      <div className="item">
        <div className="rank">{rank}위</div>
        <div className="movie-name">{title}</div>
        <div className="new">
          {rankOldAndNew === "OLD" ? "" : rankOldAndNew}
        </div>{" "}
        {/*랭킹에 신규 진입한건지 검사해서 나타내기*/}
      </div>
    </MovieItemBlock>
  );
};

export default MovieItem;
