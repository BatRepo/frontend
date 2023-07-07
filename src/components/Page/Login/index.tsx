import React from 'react';
import SignIn from "components/core/SingIn";
import { Container } from "./styles";
import BatFooter from "components/core/Footer";

const Login = () => {
  return (
        <>
          <Container>
            <SignIn />
            <BatFooter />
          </Container>
        </>
  );
};

export default Login;