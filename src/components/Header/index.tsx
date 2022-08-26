import React from 'react';
import {
  Container,
  ContainerBoard,
  ContainerTitle,
  ContainerButtons,
} from "./styles";

const Header = () => {
  return (
    <Container>
      <ContainerTitle id="titleLogo">República BatCaverna</ContainerTitle>
      <ContainerBoard id="Board">
        <ContainerButtons id="button1">Sobre</ContainerButtons>
        <ContainerButtons id="button2">Produtos</ContainerButtons>
        <ContainerButtons id="button3">Parceiros</ContainerButtons>
        <ContainerButtons id="button4">Bat Automação</ContainerButtons>
      </ContainerBoard>
    </Container>
  );
};

export default Header;
