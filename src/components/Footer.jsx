import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Sistema de Finanças. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
