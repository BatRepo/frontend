import { Container } from "./styles";
import BatFooter from "components/core/Footer";
import RegisterForms from "components/core/RegisterForms";
import React from "react";

interface IRegister {
  isLoggued: boolean;
}

const Register: React.FC<IRegister> = ({ isLoggued }) => {

  return (
        <>
          <Container>
            <RegisterForms />
            <BatFooter loggued={isLoggued} />
          </Container>
        </>
  );
};

export default Register;