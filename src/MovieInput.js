import React from "react";
import styled from "styled-components";

const MovieInputBlock = styled.div`
  .form-input {
    display: flex;
    align-items: center;
  }
  .form-input input {
    flex: 1;
    padding: 10px;
    font-size: 1.25rem;
    transition: 0.2s linear;
    &:focus {
      transform: translateY(-5px);
      box-shadow: 2px 2px 5px black;
    }
  }
  button {
    padding: 10px;
    outline: none;
    background: none;
    color: white;
    background-color: #e74c3c;
    border: 1px solid black;
    margin: 0 5px;
    transition: 0.5s linear;
    &:hover {
      background-color: #3498db;
    }
  }
`;

const MovieInput = ({ onSubmit, onChange, input }) => {
  return (
    <MovieInputBlock>
      <div>
        <form className="form-input" onSubmit={onSubmit}>
          <input
            placeholder="날짜를입력하세요(ex)20201012)"
            value={input}
            onChange={onChange}
          />

          <button type="submit">날짜검색</button>
        </form>
      </div>
    </MovieInputBlock>
  );
};

export default MovieInput;
