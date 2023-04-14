import { Box, styled } from "@mui/material";

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '50%',
  height: '83vh',
  backgroundColor: '#363636',
  justifyContent: 'center',
  padding: '30px',
  [theme.breakpoints.down('sm')]: {
    height: '180px',
  },
}));