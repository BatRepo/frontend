import React from 'react';
import { Typography } from '@mui/material';
import { ContainerMain } from './styles';

interface IAbout {
  image: string;
  texto: string;
  logo: string;
}

const About: React.FC<IAbout> = ({
  image,
  texto,
  logo
}) => {

  const renderHtml = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <ContainerMain maxWidth="sm">
      <img src={logo} alt="Sobre Nós" style={{ maxWidth: '100%', marginBottom: '20px' }} />
      <Typography variant="body1" align="center" dangerouslySetInnerHTML={renderHtml(texto)} />
      <img src={image} alt="Sobre Nós" style={{ maxWidth: '100%', marginBottom: '20px' }} />
    </ContainerMain>
  );
};

export default About;