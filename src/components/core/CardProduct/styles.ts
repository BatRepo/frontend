import { Box, Button, Typography, styled } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'block',
  position: 'relative',
  width: '100%',
  '& div': {
    '& button': {
      color: theme.palette.common.black,
    }
  }
}));

export const ContainerButton: any = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  '&:hover': {
    backgroundColor: theme.palette.amarelo,
  },
}));

export const ContainerText: any = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
}));