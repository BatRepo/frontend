import React from 'react';
import {
  Container,
  ContainerBoard,
  ContainerTitle,
  ContainerButtons,
} from "./styles";
import ButtonsRedirect from './ButtonsRedirect';

const Header = () => {
  return (
    <>
      <Container container xs={12}>
        <ContainerTitle id="titleLogo" item xs={4}>República BatCaverna</ContainerTitle>
        <ContainerBoard id="Board" item xs={8}>
          <ButtonsRedirect />
          <ContainerButtons id="button4" isVisibleSM> Eventos </ContainerButtons>
        </ContainerBoard>
      </Container>
    </>
  );
};

export default Header;
