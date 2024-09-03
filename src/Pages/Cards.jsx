import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AddCardModal from '../components/Modals/AddCardModal';

const CartoesContainer = styled(Container)`
  margin-top: 50px;
`;

const Cartoes = () => {
  const [cartoes, setCartoes] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CartoesContainer>
      <h1>Lista de Cartões</h1>
      <Button variant="primary" className="mb-3" onClick={handleShow}>Adicionar Cartão</Button>
      <AddCardModal handleShow={handleShow} handleClose={handleClose} show={show}/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome do titular</th>
            <th>Número</th>
            <th>valor</th>
            <th>bandeira</th>
            <th>data de validade</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {cartoes.map(cartao => (
            <tr key={cartao.id}>
              <td>{cartao.id}</td>
              <td>{cartao.numero}</td>
              <td>{cartao.nomeTitular}</td>
              <td>{cartao.tipoCartao}</td>
              <td>
                <Button variant="warning" className="mr-2">Editar</Button>
                <Button variant="danger">Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CartoesContainer>
  );
};

export default Cartoes;
