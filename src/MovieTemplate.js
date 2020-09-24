import React from "react";
import MovieInput from "./MovieInput";
import MovieList from "./MovieList";
import Header from "./Header";
import styled from "styled-components";

const MovieTemplateBlock = styled.div`
  .template {
    margin: 0;
    padding: 10px;
    border: 1px solid black;
    background-color: #dfe6e9;
  }
`;

const MovieTemplate = ({ onSubmit, onChange, input, focusInput }) => {
  return (
    <MovieTemplateBlock>
      <div className="template">
        <Header />
        <MovieInput
          onSubmit={onSubmit}
          onChange={onChange}
          input={input}
          focusInput={focusInput}
        />
        <MovieList />
      </div>
    </MovieTemplateBlock>
  );
};

export default MovieTemplate;
