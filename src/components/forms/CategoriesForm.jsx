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

const CategoriesForm = () => {
  const [categoria, setCategoria] = useState({
    nome: '',
    descricao: '',
  });

  const handleChange = (e) => {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar dados para o backend
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome da Categoria</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={categoria.nome}
            onChange={handleChange}
            placeholder="Digite o nome da categoria"
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            name="descricao"
            value={categoria.descricao}
            onChange={handleChange}
            placeholder="Digite uma descrição"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Cadastrar Categoria
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CategoriesForm;
