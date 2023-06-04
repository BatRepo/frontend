import React from 'react';
import { Container, LabelCenter, LabelContact, LabelDevelopers } from "./styles";
import Simbol from 'assets/icon/simbol';

const BatFooter = () => {
  return (
    <Container container xs={12}>
      <LabelContact iten xs={4}>
        Estudantes de engenharia com <br/> doutorado em gambiarra
      </LabelContact>
      <LabelCenter iten xs={4}>
        <Simbol />
      </LabelCenter>
      <LabelDevelopers iten xs={4}>
       Desenvolvido por: <br/> BatSystems
      </LabelDevelopers>
    </Container>
  );
};

export default BatFooter;
