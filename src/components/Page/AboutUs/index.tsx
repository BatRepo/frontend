import About from 'components/core/About';
import BatFooter from 'components/core/Footer';
import Header from 'components/core/Header';
import React from 'react';
import { Container } from './styles';

const AboutUs = () => {
    return (
        <>
          <Header noHome/>
          <Container>
            <About image={""} texto={
              `
              Olá, somos a República BatCaverna!
              <br />
              Estamos localizado na cidade de Cornélio Procópio desde 2012 e muitas pessoas passaram por aqui.` 
            }
            logo={""} />
            </Container>
          <BatFooter />
        </>
    );
};

export default AboutUs;