import { Box, styled, Theme } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'grid',
  width: '100%',
  justifyContent: 'center',
  height: '90vh',
  backgroundColor: theme.palette.grayMedio,
}));

export const ContainerGraph: any = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
  marginTop: '200px',
  marginBottom: '200px',
  gap: '35px',
  marginLeft: '35px',
  display: 'block',
  '& canvas': {
    heigth: '450px',
    width: '900px'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const ContainerGraphUnith: any = styled(Box)(({ theme }) => ({
  flex: 1,
  // '& canvas': {
  //   heigth: '380px !important',
  //   width: '900px !important'
  // }
}));