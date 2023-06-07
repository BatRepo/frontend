import { Box, styled, Theme } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderBottom: '1px solid red',
  justifyContent: 'center',
  alignItens: 'center',
  width: '100%',
  height: '60vh',
  backgroundColor: '#363636',
  [theme.breakpoints.down('md')]: {
    height: '62vh',
    [theme.breakpoints.down('sm')]: {
      height: '66vh',
    },
  },
}));