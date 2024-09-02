import React from 'react';
import SignInForm from '../components/forms/SigninForm';
import styled from 'styled-components'

const StyledPageSignin = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SignIn = () => {


  return (
    <StyledPageSignin>
      <h1>Sign In Page</h1>
      <SignInForm />
    </StyledPageSignin>
  );
};

export default SignIn;
