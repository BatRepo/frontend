import React from 'react';
import Router from 'next/router';
import { ContainerButtons } from '../styles';

const ButtonsRedirect = () => {

  const AboutSuRedirect = () => {
    Router.push('/aboutUs');
  };

  const ProductsRedirect= () => {
    Router.push('/Products');
  };

  const loginRedirect= () => {
    Router.push('/login');
  };

  return (
    <>
          <ContainerButtons id="button1" onClick={loginRedirect}>Login</ContainerButtons>
          <ContainerButtons id="button2" onClick={ProductsRedirect}>Produtos</ContainerButtons>
          <ContainerButtons id="button3" onClick={AboutSuRedirect} isVisibleSM>Sobre</ContainerButtons>
    </>
  );
};

export default ButtonsRedirect;