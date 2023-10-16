import { styled, Box, Button } from '@mui/material';

export const ContainerCarrossel: any = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
}));

export const ContainerImage: any = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export const ContainerButtons: any = styled(Box)(({ theme }) => ({
  marginLeft: '15px',
}));

export const ButtonStyled: any = styled(Button)(({ theme }) => ({
  fontWeight: 800,
  padding: '20px',
  color: theme.palette.amarelo,
  marginRight: '8px',
}));