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

interface IHeader {
  loggued: boolean;
}

const Header: React.FC<IHeader> = ({ loggued }) => {
  const [isLoguued, setIsLoguued] = useState<boolean>(false);
  const { userId } = useUser();

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
              <ContainerPresentation>
                
              </ContainerPresentation>
              <ContainerBoard>

              </ContainerBoard>
            </>
          ) : (
            <>
              <ContainerPresentation>
              <ContainerTitle id="titleLogo" item xs={4}>República BatCaverna</ContainerTitle>
              <ContainerUTF id="titleUTF" item xs={2}>UTFPR - CP</ContainerUTF>
              </ContainerPresentation>
              <ContainerBoard>
                <ButtonsRedirect />
                <ContainerButtons id="button4" isVisibleSM> Eventos </ContainerButtons>
              </ContainerBoard>
          </>
          )}
        </Container>
    </AppBar>
    </>
  );
};

export default Header;
