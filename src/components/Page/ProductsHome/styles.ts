import { Box, styled } from "@mui/material";

export const Container: any = styled(Box)(({ theme } ) => ({
  display: 'inline-grid',
  width: '100%',
  justifyContent: 'center',
  padding: '30px',
  textAlign: 'center',
  marginTop: '140px',
  backgroundColor: theme.palette.grayMedio,
  [theme.breakpoints.down('sm')]: {
    height: '180px',
    display: 'inline-table',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '120px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '150px',
  },
}));