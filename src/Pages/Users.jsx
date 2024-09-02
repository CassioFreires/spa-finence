import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import dataJson from '../user.mok.json'

const UsuariosContainer = styled(Container)`
  margin-top: 50px;
`;


const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

const navigate = useNavigate()

const redirect = (e) => {
  
}


  return (
    <UsuariosContainer>
      <h1>Lista de Usuários</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className='text-center'>ID</th>
            <th className='text-center'>Nome</th>
            <th className='text-center'>Email</th>
            <th className='text-center'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dataJson.map(usuario => (
            <tr key={usuario.id}>
              <td className='text-center'>{usuario.id}</td>
              <td className='text-left'>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td className='d-flex justify-content-end'>
                <Button variant="warning" className="mx-2 w-25">Editar</Button>
                <Button variant="danger" className='w-25'>Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UsuariosContainer>
  );
};

export default Usuarios;
