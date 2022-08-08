import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
  padding: 10px;
`;

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Title>Lista:</Title>
      </header>
    );
  }
}
