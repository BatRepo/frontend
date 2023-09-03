import React, { useState } from 'react';
import { Button, SwipeableDrawer } from '@mui/material';
// import { ContainerCarrossel } from './styles';

interface CarouselProps {
  images: string[];
}


const VerticalCarousel: React.FC<CarouselProps> = ({
  images
}) => {

  const [open, setOpen] = useState(false);
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
      <Button onClick={toggleDrawer(true)}>Open Carousel</Button>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div style={{ padding: '16px' }}>
          <img src={images[activeIndex]} alt={`Image ${activeIndex}`} />
          <div>
            <Button onClick={handlePrev}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
    </>
  );
};

export default VerticalCarousel;