import React from 'react';
import {
  Container,
  ContainerBoard,
  ContainerTitle,
  ContainerUTF,
  ContainerPresentation,
} from "./styles";
import ButtonsRedirect from './ButtonsRedirect';
import { AppBar } from '@mui/material';

interface IHeader {
  loggued: boolean;
}

const Header: React.FC<IHeader> = ({ loggued }) => {

  return (
    <>
      <AppBar>
        <Container>
              <ContainerPresentation>
              <ContainerTitle id="titleLogo" item xs={4}>República BatCaverna</ContainerTitle>
              <ContainerUTF id="titleUTF" item xs={2}>UTFPR - CP</ContainerUTF>
              </ContainerPresentation>
              <ContainerBoard>
                <ButtonsRedirect loggued={loggued} />
              </ContainerBoard>
        </Container>
    </AppBar>
    </>
  );
};

export default Header;
