import React from 'react';
import styled from 'styled-components';

const Signature = styled.footer`
  background-color: #039373;
  color: #FFFFFF;
  font-size: 1.1em;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const SignatureText = styled.span`
  display: inline-block;
  margin: 8px 16px;
`;

const Footer = () => (
  <Signature>
    <SignatureText>App created by: Tyrice C.</SignatureText>
  </Signature>
);

export default Footer;
