import { Box, styled } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  // width: '100%',
  // backgroundColor: '#000000',
  '& svg': {
    width: '250px',
    heigth: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    '& svg': {
        width: '150px',
        heigth: '250px',
      },
  },
}));