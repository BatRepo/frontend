import React from 'react';
import { Container, ContainerBoard, ContainerTitle, ContainerButtons } from './styles';

const Header: React.FC = () => {
    return (
    <>
        <Container>
            <ContainerTitle id="titleLogo">República BatCaverna</ContainerTitle>
            <ContainerBoard id="Board">
                <ContainerButtons id="button1">Sobre</ContainerButtons>
                <ContainerButtons id="button2">Produtos</ContainerButtons>
                <ContainerButtons id="button3">Parceiros</ContainerButtons>
                <ContainerButtons id= "button4">Eventos</ContainerButtons>
                <ContainerButtons id= "button5">Contato</ContainerButtons>
            </ContainerBoard>
        </Container>
    </>
    );
};

export default Header;