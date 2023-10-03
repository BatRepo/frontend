import React, { useState } from 'react';
import { Button, SwipeableDrawer } from '@mui/material';
import { ContainerCarrossel, ContainerImage } from './styles';

interface CarouselProps {
  images: string[];
  iSopen: boolean;
}


const VerticalCarouselImages: React.FC<CarouselProps> = ({
  images,
  iSopen
}) => {

  const [open, setOpen] = useState<boolean>(iSopen);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

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
    <div>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <ContainerCarrossel>
          <img src={images[activeIndex]} alt={`Image ${activeIndex}`} id="eu"/>
          <ContainerImage>
            <Button onClick={handlePrev}>Anterior</Button>
            <Button onClick={handleNext}>Próximo</Button>
          </ContainerImage>
        </ContainerCarrossel>
      </SwipeableDrawer>
    </div>
    </>
  );
};

export default VerticalCarouselImages;