import React, { useEffect, useState } from 'react';
import {
  Container,
  ContainerBoard,
  ContainerTitle,
  ContainerButtons,
  ContainerUTF,
  ContainerPresentation,
} from "./styles";
import ButtonsRedirect from './ButtonsRedirect';
import { AppBar } from '@mui/material';
import { useUser } from "hooks/user";
import { useAuth } from 'hooks/auth';

interface IHeader {
  loggued: boolean;
}

const Header: React.FC<IHeader> = ({ loggued }) => {
  const [isLoguued, setIsLoguued] = useState<boolean>(false);
  const { userId } = useUser();
  // const { getLoggued } = useAuth();

  useEffect(() => {
    if(userId) {
      setIsLoguued(true);
    }
    if (loggued) {
      setIsLoguued(true);
    }
    setIsLoguued(false);
  }, [userId]);

  return (
    <>
      <AppBar position="static">
        <Container container xs={12}>
          {isLoguued ? (
            <>
              <header>
              <ContainerPresentation>
                <div>Teste Presentarion </div>
              </ContainerPresentation>
              <ContainerBoard>
                <div> Teste Tesye </div>
              </ContainerBoard>
              </header>
            </>
          ) : (
            <>
              <header>
              <ContainerPresentation>
              <ContainerTitle id="titleLogo" item xs={4}>República BatCaverna</ContainerTitle>
              <ContainerUTF id="titleUTF" item xs={2}>UTFPR - CP</ContainerUTF>
              </ContainerPresentation>
              <ContainerBoard>
                <ButtonsRedirect />
                <ContainerButtons id="button4" isVisibleSM> Eventos </ContainerButtons>
              </ContainerBoard>
              </header>
          </>
          )}
        </Container>
    </AppBar>
    </>
  );
};

export default Header;
