import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import AddTransationModal from '../components/Modals/AddTransationModal';

const TransacoesContainer = styled(Container)`
  margin-top: 50px;
`;

const Transacoes = () => {
  const [transacoes, setTransacoes] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <TransacoesContainer>
      <h1>Lista de Transações</h1>
      <Button variant="primary" className="mb-3" onClick={handleShow}>Adicionar Transação</Button>
      <AddTransationModal handleShow={handleShow} handleClose={handleClose} show={show}/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cartão de transação</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map(transacao => (
            <tr key={transacao.id}>
              <td>{transacao.id}</td>
              <td>{transacao.tipo}</td>
              <td>{transacao.valor}</td>
              <td>{transacao.data}</td>
              <td>{transacao.descricao}</td>
              <td>
                <Button variant="warning" className="mr-2">Editar</Button>
                <Button variant="danger">Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TransacoesContainer>
  );
};

export default Transacoes;
