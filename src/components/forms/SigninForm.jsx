import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import dataUser from '../../signupUser.mok.json'

const SigninStyledForm = styled(Form)`
  width: 100%;
  max-width: 500px;
  margin-top: 50px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 8px;
`;

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLoged, setUserLoged] = useState({ email: '', password: '' })
  const [userFound, setUserFound] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // buscar os dados na API e verificar se esse email existe na base para fazer login
    const userFound = dataUser.some((user) => {
      if (user.email == email && user.password == password) {
        console.log('-------------Usuário logado------------')

        // setUserLoged({ email: user.email, password: user.password });
        const loged = {
          email: user.email,
          password: user.password
        }
        // setando o user no localstorage
        localStorage.setItem('user', JSON.stringify(loged))
        navigate('/cartoes')


        return true; 
      }
      return false
    })

    if (!userFound) {
      console.log('Usuário ou senha inválido');
    }
  };

  return (
    <SigninStyledForm onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Col>
        <Col sm='20' className='d-flex justify-content-end mt-3'>
          <Button variant="success" className='w-25 m-3' type='submit'>Logar</Button>
          <Col sm='20' className='d-flex justify-content-end align-items-center'>
            <Link>Cadastre-se</Link>
          </Col>
        </Col>
      </Form.Group>
    </SigninStyledForm>
  );
};

export default SigninForm;
