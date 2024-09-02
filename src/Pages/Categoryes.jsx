import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import AddCategoriesModal from '../components/Modals/AddCategoriesModal';

const CategoriasContainer = styled(Container)`
  margin-top: 50px;
`;

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CategoriasContainer>
      <h1>Lista de Categorias</h1>
      <Button variant="primary" className="mb-3" onClick={handleShow}>Adicionar Categoria</Button>
      <AddCategoriesModal handleShow={handleShow} handleClose={handleClose} show={show}/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nome}</td>
              <td>{categoria.descricao}</td>
              <td>
                <Button variant="warning" className="mr-2">Editar</Button>
                <Button variant="danger">Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CategoriasContainer>
  );
};

export default Categorias;
