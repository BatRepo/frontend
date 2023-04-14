import React from 'react';
import {
  Container,
  ContainerBoard,
  ContainerTitle,
  ContainerButtons,
} from "./styles";
import LoginButton from '../LoginButton';
import Router from 'next/router';

const Header = () => {

  const AboutSuRedirect = () => {
    Router.push('/aboutUs');
  };

  const ProductsRedirect= () => {
    Router.push('/Products');
  };

  return (
    <>
      <Container container xs={12}>
        <ContainerTitle id="titleLogo" item xs={4}>República BatCaverna</ContainerTitle>
        <ContainerBoard id="Board" item xs={8}>
          <ContainerButtons id="button1">Eventos</ContainerButtons>
          <ContainerButtons id="button2" onClick={ProductsRedirect}>Produtos</ContainerButtons>
          <ContainerButtons id="button3" onClick={AboutSuRedirect} isVisibleSM>Sobre</ContainerButtons>
        </ContainerBoard>
        {/* <LoginButton /> */}
      </Container>
    </>
  );
};

export default Header;
