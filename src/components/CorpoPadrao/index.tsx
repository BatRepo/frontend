import React from 'react';
import Batman from '../../assets/svg/batman.svg';
import { Container, ContainerImage } from './styles';

const CorpoPadrao: React.FC = () => {
    return (
    <>
        <Container>
            <ContainerImage>
                <Batman />
            </ContainerImage>
        </Container>
    </>
    );
};

export default CorpoPadrao;