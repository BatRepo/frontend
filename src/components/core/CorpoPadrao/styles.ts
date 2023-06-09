import { Box, styled, Theme } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'grid',
  width: '100%',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#363636',
}));