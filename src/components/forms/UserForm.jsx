import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from 'react-bootstrap';

const FormContainer = styled(Container)`
  max-width: 500px;
  margin-top: 50px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 8px;
`;

const UserForm = () => {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar dados para o backend
    console.log(e.target.value)
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={user.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formSenha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="senha"
            value={user.senha}
            onChange={handleChange}
            placeholder="Digite sua senha"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Criar Conta
        </Button>
      </Form>
    </FormContainer>
  );
};

export default UserForm;
