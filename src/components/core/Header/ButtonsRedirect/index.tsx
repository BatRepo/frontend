import React from 'react';
import Router from 'next/router';
import { ContainerButtons } from '../styles';

interface IButtonsRedirect {
  loggued: boolean;
}

const ButtonsRedirect: React.FC<IButtonsRedirect> = ({ loggued }) => {

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
      {!loggued ? (
        <>
          <ContainerButtons id="button1" onClick={loginRedirect}>Login</ContainerButtons>
          <ContainerButtons id="button2" onClick={ProductsRedirect}>Produtos</ContainerButtons>
          <ContainerButtons id="button3" onClick={AboutSuRedirect} isVisibleSM>Sobre</ContainerButtons>
          <ContainerButtons id="button4" isVisibleSM> Eventos </ContainerButtons>
      </>
      ) : (
        <>
          <ContainerButtons id="button1" onClick={loginRedirect}>Cadastrar Usuario</ContainerButtons>
          <ContainerButtons id="button2" onClick={ProductsRedirect}>Histórico Caixa</ContainerButtons>
          <ContainerButtons id="button3" onClick={AboutSuRedirect}>Sair</ContainerButtons>
        </>
      )}

    </>
  );
};

export default ButtonsRedirect;