import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const NotFoundContainer = styled(Container)`
  margin-top: 50px;
  text-align: center;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
    </NotFoundContainer>
  );
};

export default NotFound;
