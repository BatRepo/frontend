import React from 'react';
import {
  Container,
  ContainerBoard,
  ContainerTitle,
  ContainerUTF,
  ContainerPresentation,
} from "./styles";
import ButtonsRedirect from './ButtonsRedirect';
import { AppBar } from '@mui/material';
import { useRouter } from 'next/router';

interface IHeader {
  loggued?: boolean;
  noHome?: boolean;
}

const Header: React.FC<IHeader> = ({ loggued, noHome }) => {
  const router = useRouter();
  const homeClick = () => {
    router.push('/');
  }

  return (
    <>
      <AppBar>
        <Container>
              <ContainerPresentation>
              <ContainerTitle id="titleLogo" item xs={4} onClick={homeClick} >República BatCaverna</ContainerTitle>
              <ContainerUTF id="titleUTF" item xs={2}>UTFPR - CP</ContainerUTF>
              </ContainerPresentation>
              <ContainerBoard>
                <ButtonsRedirect loggued={loggued || false} noHome={noHome || false}/>
              </ContainerBoard>
        </Container>
    </AppBar>
    </>
  );
};

export default Header;
