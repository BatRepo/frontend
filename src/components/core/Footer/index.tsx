import React from 'react';
import { Container, LabelCenter, LabelContact, LabelDevelopers } from "./styles";
import Simbol from '../../../assets/icon/Simbol';

interface IFooter {
  loggued?: boolean;
}

const BatFooter: React.FC<IFooter> = ({ loggued }) => {
  return (
    <>
      <Container container xs={12} id="ctxxx">
        {loggued ? (
        <>
          <LabelContact iten xs={4}>
            <></>
          </LabelContact>
          <LabelCenter iten xs={4} smallCenter >
            <Simbol width={100} height={100}/>
          </LabelCenter>
          <LabelDevelopers iten xs={4}>
            <>
                Desenvolvido por: <br/> BatSystems
            </>
          </LabelDevelopers>
        </>
        ) : (
          <>
            <LabelContact iten xs={4} />
            <LabelCenter iten xs={4}>
              <Simbol width={100} height={100}/>
            </LabelCenter>
            <LabelDevelopers iten xs={4} />
          </>
        )}
      </Container>
    </>
  );
};

export default BatFooter;
