import React from 'react';
import {
  Container,
  ContainerBoard,
  ContainerTitle,
  ContainerButtons,
} from "./styles";

const Header = () => {
  return (
    <Container container xs={12}>
      <ContainerTitle id="titleLogo" item xs={4}>República BatCaverna</ContainerTitle>
      <ContainerBoard id="Board" item xs={8}>
        <ContainerButtons id="button1">Sobre</ContainerButtons>
        <ContainerButtons id="button2">Produtos</ContainerButtons>
        <ContainerButtons id="button3" isVisibleSM>Parceiros</ContainerButtons>
        <ContainerButtons id="button4">Bat Automação</ContainerButtons>
      </ContainerBoard>
    </Container>
  );
};

export default Header;
