import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from './styles';

interface ICard {
  productName: string;
  productDescription: string;
  productValue: number;
  productImage: any;
}

const CardProduct = React.FC<ICard> = ({
  productName,
  productDescription,
  productValue,
  productImage,
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
                { productName }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { productDescription }
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