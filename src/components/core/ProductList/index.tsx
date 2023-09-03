import React from 'react';
import { IProduct } from 'utils/interfaces/product';
import CardProduct from '../../core/CardProduct';
import { CardContainer, Container, ContentcardContainer } from './styles';

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products = [] }) => {
  return (
    <Container id="product-list">
      {products.map((item, index) => (
        item.visible && (
          <CardContainer key={index} id="eu">
            <ContentcardContainer id="content">
              <CardProduct product={item} />
            </ContentcardContainer>
          </CardContainer>
        )
      ))}
    </Container>
  );
};

export default ProductList;