import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const HomeContainer = styled(Container)`
  margin-top: 50px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Bem-vindo ao Sistema de Controle de Finanças</h1>
      <p>Gerencie suas finanças com facilidade e segurança.</p>
    </HomeContainer>
  );
};

export default Home;
