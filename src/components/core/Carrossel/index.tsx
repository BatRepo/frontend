import React, { useState } from 'react';
import { IProduct } from 'utils/interfaces/product';
import ProductList from '../ProductList';
import { Container, ContainerPaper, PaperProduct, ViewStyled } from './styles';

interface ProductList {
  array: IProduct[];
  isHome?: boolean;
}


const Carousel: React.FC<ProductList> = ({ array }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = array.length;
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <ViewStyled
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {[...Array(maxSteps)].map((_, index) => (
          <ContainerPaper key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <PaperProduct>
                <ProductList products={array} />
              </PaperProduct>
            ) : null}
          </ContainerPaper>
        ))}
      </ViewStyled>
    </Container>
  );
};

export default Carousel;