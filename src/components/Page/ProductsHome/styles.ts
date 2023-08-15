import { Box, styled } from "@mui/material";

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '70%',
  backgroundColor: '#363636',
  justifyContent: 'center',
  padding: '30px',
  textAlign: '-webkit-center',
  marginTop: '145px',
  [theme.breakpoints.down('sm')]: {
    height: '180px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '90px',
  },
}));