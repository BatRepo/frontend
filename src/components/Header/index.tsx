import React from 'react';
import {
  Container,
  ContainerBoard,
  ContainerTitle,
  ContainerButtons,
} from "./styles";
import LoginButton from '../LoginButton';

const Header = () => {

  return (
    <>
      <Container container xs={12}>
        <ContainerTitle id="titleLogo" item xs={4}>República BatCaverna</ContainerTitle>
        <ContainerBoard id="Board" item xs={8}>
          <ContainerButtons id="button1">Home</ContainerButtons>
          <ContainerButtons id="button2">Sobre</ContainerButtons>
          <ContainerButtons id="button3" isVisibleSM>Produtos</ContainerButtons>
        </ContainerBoard>
        <LoginButton />
      </Container>
    </>
  );
};

export default Header;
