import React from 'react';
import {
  Container,
  ContainerBoard,
  ContainerTitle,
  ContainerButtons,
  ContainerUTF,
  ContainerPresentation,
} from "./styles";
import ButtonsRedirect from './ButtonsRedirect';

const Header = () => {
  return (
    <>
      <Container container xs={12}>
        <ContainerPresentation>
          <ContainerTitle id="titleLogo" item xs={4}>República BatCaverna</ContainerTitle>
          <ContainerUTF id="titleUTF" item xs={2}>UTFPR - CP</ContainerUTF>
        </ContainerPresentation>
        <ContainerBoard>
          <ButtonsRedirect />
          <ContainerButtons id="button4" isVisibleSM> Eventos </ContainerButtons>
        </ContainerBoard>
      </Container>
    </>
  );
};

export default Header;
