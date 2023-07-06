import React, { useState } from 'react';
import Router from 'next/router';
import { ContainerButtons } from '../styles';
import ExitModal from 'components/core/ExitModal';

interface IButtonsRedirect {
  loggued: boolean;
}

const ButtonsRedirect: React.FC<IButtonsRedirect> = ({ loggued }) => {
  const [isExitModalOpen, setExitModalOpen] = useState<boolean>(false);

  const AboutSuRedirect = () => {
    Router.push('/aboutUs');
  };

  const ProductsRedirect= () => {
    Router.push('/Products');
  };

  const loginRedirect= () => {
    Router.push('/login');
  };

  const registerRedirect= () => {
    Router.push('/register');
  };

  const handleExit = () => {
    setExitModalOpen(true);
  };

  const handleExitModalClose = () => {
    setExitModalOpen(false);
  };


  return (
    <>
      {!loggued ? (
        <>
          <ContainerButtons id="button1" onClick={loginRedirect}>Login</ContainerButtons>
          <ContainerButtons id="button2" onClick={ProductsRedirect}>Produtos</ContainerButtons>
          <ContainerButtons id="button4" isVisibleSM> Eventos </ContainerButtons>
          <ContainerButtons id="button3" onClick={AboutSuRedirect} isVisibleSM>Sobre</ContainerButtons>
      </>
      ) : (
        <>
          <ContainerButtons id="button1" onClick={registerRedirect}>Cadastrar Usuario</ContainerButtons>
          <ContainerButtons id="button2" onClick={ProductsRedirect}>Histórico Caixa</ContainerButtons>
          <ContainerButtons id="button3" onClick={handleExit}>Sair</ContainerButtons>
        </>
      )}
      {isExitModalOpen && <ExitModal isOpen={true} handleClose={handleExitModalClose} />}
    </>
  );
};

export default ButtonsRedirect;