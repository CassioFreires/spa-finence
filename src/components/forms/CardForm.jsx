import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from 'react-bootstrap';
import dataFlag from '../../flag.mok.json'
console.log(dataFlag)

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
      <Form.Label>Crédito/Débito: </Form.Label>
      <Form.Select aria-label="Default select example" className='mb-3'>
        <option>Selecione o tipo do cartão</option>
        {
          tipoCartao.map((cartao, index) => {
            return <option value={cartao} key={index}>{cartao}</option>
          })
        }
      </Form.Select>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNomeTitular">
          <Form.Label>Nome do Titular:</Form.Label>
          <Form.Control
            type="text"
            name="name_card"
            placeholder="Digite o nome do titular"
            required
            className='mb-3'
          />
        </Form.Group>

        <Form.Group controlId="formNumeroCartao">
          <Form.Label>Número do Cartão:</Form.Label>
          <Form.Control
            type="text"
            name="number_card"
            placeholder="Digite o número do cartão"
            required
            className='mb-3'
          />
        </Form.Group>


        <Form.Group controlId="formValor">
          <Form.Label>Valor do cartão:</Form.Label>
          <Form.Control
            type="text"
            name="value_card"
            placeholder="Digite o saldo ou limite do cartão"
            required
            className='mb-3'
          />
        </Form.Group>

      <Form.Label>Bandeira:</Form.Label>
      <Form.Select aria-label="Default select example" className='mb-3'>
        <option>Selecione a bandeira do cartão</option>
        {
          dataFlag.map((item) => {
            return (
              <option value={item.flag} key={item.id}>{item.flag}</option>
            )
          })
        }
      </Form.Select>


        <Form.Group controlId="formValidade">
          <Form.Label>Data de Validade</Form.Label>
          <Form.Control
            type="text"
            name="validade"
            placeholder="MM/AA"
            required
          />
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default CardForm;
