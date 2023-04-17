import React from 'react';
import { Container, LabelCenter, LabelContact, LabelDevelopers } from "./styles";

const BatFooter = () => {
  return (
    <Container container xs={12}>
      <LabelContact iten xs={4}>
        Para mais informações: <br/> (43) 991819xxx
      </LabelContact>
      <LabelCenter iten xs={4}>
        Republica BatCaverna - UTFPR/CP
      </LabelCenter>
      <LabelDevelopers iten xs={4}>
       Desenvolvido por: <br/> Republica BatCaverna CP
      </LabelDevelopers>
    </Container>
  );
};

export default BatFooter;
