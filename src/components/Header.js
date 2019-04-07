import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #45ac4f;
  overflow: auto;
  flexdirection: "column";
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 1.6em;
  display: inline-block;
`;

const Header = () => (
  <HeaderContainer>
    <button class="hamburger hamburger--slider" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner" />
      </span>
    </button>
    <Title>What Todo</Title>
  </HeaderContainer>
);

export default Header;
