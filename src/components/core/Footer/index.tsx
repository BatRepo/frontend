import React from 'react';
import { Container, LabelCenter, LabelContact, LabelDevelopers } from "./styles";
import Simbol from 'assets/icon/simbol';

interface IFooter {
  loggued: boolean;
}

const BatFooter: React.FC<IFooter> = ({ loggued }) => {
  return (
    <>
      <Container container xs={12}>
        {loggued ? (
        <>
          <LabelContact iten xs={4} />
          <LabelCenter iten xs={4}>
            <Simbol />
          </LabelCenter>
          <LabelDevelopers iten xs={4} />
        </>
        ) : (
        <>
          <LabelContact iten xs={4}>
            Estudantes de engenharia com <br/> doutorado em gambiarra
          </LabelContact>
          <LabelCenter iten xs={4}>
            <Simbol />
          </LabelCenter>
          <LabelDevelopers iten xs={4}>
          Desenvolvido por: <br/> BatSystems
          </LabelDevelopers>
        </>
        )}

      </Container>
    </>
  );
};

export default BatFooter;
