import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Container, ContainerButton } from './styles';
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
              <Typography gutterBottom variant="h5" component="div" color="#bcbcbc">
                { product.name }
              </Typography>
              <Typography variant="body2" color="#bcbcbc">
                { product.description }
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ContainerButton size="small" onClick={handleButtonClick}>
              Ver mais
            </ContainerButton>
            {modalOpen && <ModalProduct open={modalOpen} product={product} />}
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default CardProduct;