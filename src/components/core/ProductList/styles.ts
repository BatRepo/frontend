import { Box, Card, styled } from "@mui/material";

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

export const CardContainer: any = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  width: '100%',
  backgroundColor: 'transparent',
  margin: '35px',
  padding: '20px',
  '&:hover': {
    backgroundColor: '#696969',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '20px',
    padding: '12px',
    width: '80%',
  }
  }));

