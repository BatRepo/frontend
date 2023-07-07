import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from './styles';
import { ProductsEtitie } from 'domain/product/entities/ProductEntitie';

interface ICard {
  product: ProductsEtitie
}

const CardProduct = React.FC<ICard> = ({
  product,
}) => {
  return (
    <>
      <Container>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="src\assets\svg\simbol.svg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                { product.name }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { product.description }
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Ver mais
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default CardProduct;