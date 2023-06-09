import { Box, styled, Theme } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderBottom: '1px solid red',
  justifyContent: 'center',
  alignItens: 'center',
  width: '100%',
  maxHeight: '60vh',
  backgroundColor: '#363636',
  [theme.breakpoints.down('md')]: {
    maxHeight: '62vh',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '66vh',
    },
  },
}));