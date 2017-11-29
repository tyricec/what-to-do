import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #45ac4f;
  overflow: auto;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 1.6em;
  margin-left: 16px;
`;

const Header = () => (
  <HeaderContainer>
    <Title>What Todo</Title>
  </HeaderContainer>
);

export default Header;
