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

const TransactionForm = () => {
  const [transacao, setTransacao] = useState({
    tipo: '',
    valor: '',
    data: '',
    descricao: '',
    cartao_id: '',
  });

  const handleChange = (e) => {
    setTransacao({ ...transacao, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar dados para o backend
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTipo">
          <Form.Label>Tipo de Transação</Form.Label>
          <Form.Control as="select" name="tipo" value={transacao.tipo} onChange={handleChange} required>
            <option value="">Selecione...</option>
            <option value="Débito">Débito</option>
            <option value="Crédito">Crédito</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formValor">
          <Form.Label>Valor</Form.Label>
          <Form.Control
            type="number"
            name="valor"
            value={transacao.valor}
            onChange={handleChange}
            placeholder="Digite o valor"
            required
          />
        </Form.Group>

        <Form.Group controlId="formData">
          <Form.Label>Data</Form.Label>
          <Form.Control
            type="date"
            name="data"
            value={transacao.data}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            name="descricao"
            value={transacao.descricao}
            onChange={handleChange}
            placeholder="Digite uma descrição"
            required
          />
        </Form.Group>

        <Form.Group controlId="formCartaoId">
          <Form.Label>Cartão</Form.Label>
          <Form.Control
            type="text"
            name="cartao_id"
            value={transacao.cartao_id}
            onChange={handleChange}
            placeholder="Digite o ID do cartão"
            required
          />
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default TransactionForm;
