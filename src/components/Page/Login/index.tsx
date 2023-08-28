import React from 'react';
import SignIn from "components/core/SingIn";
import { Container } from "./styles";
import BatFooter from "components/core/Footer";
import Header from 'components/core/Header';

const Login = () => {
  return (
        <>
          <Header noHome/>
          <Container id="container">
            <SignIn />
            <BatFooter />
          </Container>
        </>
  );
};

export default Login;