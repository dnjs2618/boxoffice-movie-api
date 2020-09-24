import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2c3e50;
    margin-bottom: 5px;
    box-shadow: 2px 2px 5px black;
  }
  h1 {
    color: white;
  }
`;

function Header() {
  return (
    <HeaderBlock>
      <div>
        <header className="header">
          <h1>그날의 영화순위</h1>
        </header>
      </div>
    </HeaderBlock>
  );
}

export default Header;
