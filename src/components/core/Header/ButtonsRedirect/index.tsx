import React from 'react';
import Router from 'next/router';
import { ContainerButtons } from '../styles';
import MenuMyAccount from 'components/core/MenuMyAccout';

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

  const SalesRedirect= () => {
    Router.push('/sales');
  };

  const loginRedirect= () => {
    Router.push('/login');
  };




  return (
    <>
      {!loggued ? (
        <>
          <ContainerButtons id="button1" onClick={ProductsRedirect}>Produtos</ContainerButtons>
          <ContainerButtons id="button2"> Eventos </ContainerButtons>
          <ContainerButtons id="button3" onClick={AboutSuRedirect} isVisibleSM>Sobre</ContainerButtons>
          <ContainerButtons id="button4" onClick={loginRedirect} isVisibleSM>Login</ContainerButtons>
      </>
      ) : (
        <>
          <ContainerButtons id="button2" onClick={SalesRedirect}>Vendas</ContainerButtons>
          <MenuMyAccount />
        </>
      )}
    </>
  );
};

export default ButtonsRedirect;