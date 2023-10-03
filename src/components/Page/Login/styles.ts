import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: 'grid',
  width: '100%',
  backgroundColor: theme.palette.grayMedio,
  height: '100vh',
  marginTop: '180px',
  [theme.breakpoints.down('md')]: {
    marginTop: '130px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '100px',
    },
  },
}));
