import { Box, styled } from "@mui/material";

export const Container: any = styled(Box)(({ theme } ) => ({
  display: 'inline-grid',
  width: '100%',
  backgroundColor: '#363636',
  justifyContent: 'center',
  padding: '30px',
  textAlign: 'center',
  marginTop: '140px',
  [theme.breakpoints.down('sm')]: {
    height: '180px',
    display: 'inline-table',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '150px',
  },
}));