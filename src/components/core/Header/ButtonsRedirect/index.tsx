import React from 'react';
import Router from 'next/router';
import { ContainerButtons } from '../styles';
import MenuMyAccount from 'components/core/MenuMyAccout';

interface IButtonsRedirect {
  loggued: boolean;
  noHome: boolean;
}

const ButtonsRedirect: React.FC<IButtonsRedirect> = ({ loggued, noHome }) => {

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

  const back = () => {
    Router.back();
  };



  return (
    <>
      {!loggued ? (
        <>
        {noHome ? (
          <>
            <ContainerButtons id="button1" onClick={ProductsRedirect}>Lojinha</ContainerButtons>
            <ContainerButtons id="button2"> Eventos </ContainerButtons>
            <ContainerButtons id="button3" onClick={AboutSuRedirect} isvisiblesm="true">Sobre</ContainerButtons>
            <ContainerButtons id="button4" onClick={back}>Voltar</ContainerButtons>
          </>
        ) : (
          <>
            <ContainerButtons id="button1" onClick={ProductsRedirect}>Lojinha</ContainerButtons>
            <ContainerButtons id="button2"> Eventos </ContainerButtons>
            <ContainerButtons id="button3" onClick={AboutSuRedirect} isvisiblesm="true">Sobre</ContainerButtons>
            <ContainerButtons id="button4" onClick={loginRedirect} isvisiblesm="true">Login</ContainerButtons>
          </>
        )}
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