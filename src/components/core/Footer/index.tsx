import React from 'react';
import { Container, LabelCenter, LabelContact, LabelDevelopers } from "./styles";
import Simbol from 'assets/icon/simbol';

const BatFooter = () => {
  return (
    <>
      <footer>
      <Container container xs={12}>
        <LabelContact iten xs={5}>
          Estudantes de engenharia com <br/> doutorado em gambiarra
        </LabelContact>
        <LabelCenter iten xs={2}>
          <Simbol />
        </LabelCenter>
        <LabelDevelopers iten xs={5}>
        Desenvolvido por: <br/> BatSystems
        </LabelDevelopers>
      </Container>
      </footer>
    </>
  );
};

export default BatFooter;
