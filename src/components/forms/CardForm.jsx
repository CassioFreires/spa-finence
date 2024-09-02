import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from 'react-bootstrap';

const FormContainer = styled(Container)`
  max-width: 500px;
  margin-top: 50px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
`;

const CardForm = ({ tipo }) => {
  const [tipoCartao] = useState(['Crédito', 'Débito'])

  const handleChange = (e) => {
    setCartao({ ...cartao, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar dados para o backend
  };

  return (
    <FormContainer>
      <Form.Select aria-label="Default select example">
        <option>Selecione o tipo do cartão</option>
        {
          tipoCartao.map((cartao, index) => {
            return <option value="1" key={index}>{cartao}</option>
          })
        }
      </Form.Select>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNumero">
          <Form.Label>Número do Cartão</Form.Label>
          <Form.Control
            type="text"
            name="numero"
            onChange={handleChange}
            placeholder="Digite o número do cartão"
            required
          />
        </Form.Group>

        <Form.Group controlId="formNomeTitular">
          <Form.Label>Nome do Titular</Form.Label>
          <Form.Control
            type="text"
            name="nomeTitular"
            onChange={handleChange}
            placeholder="Digite o nome do titular"
            required
          />
        </Form.Group>

        <Form.Group controlId="formValidade">
          <Form.Label>Data de Validade</Form.Label>
          <Form.Control
            type="text"
            name="validade"
            onChange={handleChange}
            placeholder="MM/AA"
            required
          />
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default CardForm;
