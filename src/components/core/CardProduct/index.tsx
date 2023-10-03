import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import { Container, ContainerButton, ContainerText } from './styles';
import ModalProduct from '../ModalProduct';
import { IProduct } from 'utils/interfaces/product';

interface ICard {
  product: IProduct
}

const CardProduct: React.FC<ICard> = ({ product }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleExitModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Container id="cardp">
        <Card sx={{ maxWidth: 345 }} onClick={handleButtonClick}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.images[0].file[0]}
            />
            <CardContent>
              <ContainerText gutterBottom variant="h5" component="div">
                { product.name }
              </ContainerText>
              <ContainerText variant="body2">
                { product.description }
              </ContainerText>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ContainerButton size="small" onClick={handleButtonClick}>
              Ver mais
            </ContainerButton>
          </CardActions>
          <ModalProduct open={modalOpen} product={product} handleClose={handleExitModalClose} />
        </Card>
      </Container>
    </>
  );
}

export default CardProduct;