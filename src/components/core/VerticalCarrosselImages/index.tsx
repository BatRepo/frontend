import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import { ButtonStyled, ContainerButtons, ContainerCarrossel, ContainerImage } from './styles';

interface CarouselProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const VerticalCarouselImages: React.FC<CarouselProps> = ({
  images,
  isOpen,
  onClose,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <ContainerImage id="aqui">
        <Modal
          open={isOpen}
          onClose={onClose}
          aria-labelledby="vertical-carousel-modal"
          aria-describedby="vertical-carousel-modal-description"
        >
          <ContainerCarrossel>
            <ContainerImage>
              <img src={images[activeIndex]} alt={`Image ${activeIndex}`}/>
            </ContainerImage>
            <ContainerButtons>
                <ButtonStyled onClick={handlePrev}>Anterior</ButtonStyled>
                <ButtonStyled onClick={handleNext}>Próximo</ButtonStyled>
              </ContainerButtons>
          </ContainerCarrossel>
        </Modal>
      </ContainerImage>
    </>
  );
};

export default VerticalCarouselImages;