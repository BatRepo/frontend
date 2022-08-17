import React from 'react';
import Image from 'material-ui-image'
import { Container, ContainerImage } from './styles';

const CorpoPadrao: React.FC = () => {
    return (
    <>
        <Container>
            <ContainerImage>
                <Image src='../../assets/logo1.png' />
            </ContainerImage>
        </Container>
    </>
    );
};

export default CorpoPadrao;