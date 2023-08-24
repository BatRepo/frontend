import React from 'react';
import { IProduct } from 'utils/interfaces/product';
import CardProduct from '../../core/CardProduct';
import { CardContent } from '@mui/material';
import { CardContainer, Container } from './styles';

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products = []}) => {
  return (
    <Container id="product-list">
      {products.map((item, index) => (
        <CardContainer key={index} id="eu">
          <CardContent>
            <CardProduct product={item} />
          </CardContent>
        </CardContainer>
      ))}
    </Container>
  );
};

export default ProductList;