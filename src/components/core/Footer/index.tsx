import React from 'react';
import { Container, ContainerMobile, LabelCenter, LabelContact, LabelDevelopers } from "./styles";
import Simbol from '../../../assets/icon/Simbol';
import { useMediaQuery, useTheme } from "@mui/material";

interface IFooter {
  loggued?: boolean;
}

const BatFooter: React.FC<IFooter> = ({ loggued }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
        {loggued ? (
        <>
        <Container container xs={12} id="ctxxx">
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
          </Container>
        </>
        ) : (
          <>
          {isMobile ? (
            <>
              <ContainerMobile id="mobile">
                <Simbol width={300} height={300}/>
              </ContainerMobile>
            </>
          ) : (
            <>
            <Container container xs={12} id="ctxxx">
              <LabelContact iten xs={4} />
              <LabelCenter iten xs={4}>
                <Simbol width={100} height={100}/>
              </LabelCenter>
              <LabelDevelopers iten xs={4} />
              </Container>
            </>
          )}

          </>
        )}
    </>
  );
};

export default BatFooter;
