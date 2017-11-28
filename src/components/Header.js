import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #45AC4F;
  overflow: auto;
`

const Title = styled.h1`
  color: #FFFFFF;
  font-size: 1.6em;
  margin-left: 16px;
`;

const Header = () => (
  <HeaderContainer>
    <Title>What To-Do</Title>
  </HeaderContainer> 
);

export default Header;
