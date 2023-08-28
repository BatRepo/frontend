import { Box, Button, styled } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'block',
  position: 'relative',
  width: '100%',
  '& div': {
    '& button': {
      color: '#bcbcbc',
    }
  }
}));

export const ContainerButton: any = styled(Button)(({ theme }) => ({
  color: '#bcbcbc',
  '&:hover': {
    backgroundColor: '#FFD850',
    color: '#000000',
  },
}));