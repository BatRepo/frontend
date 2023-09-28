import { Box, Card, CardContent, styled } from "@mui/material";

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

export const CardContainer: any = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  width: '100%',
  padding: '20px',
  backgroundColor: theme.palette.grayMedio,
  '&:hover': {
    backgroundColor: theme.palette.grayForte,
  },
  [theme.breakpoints.down('sm')]: {
    margin: '20px',
    padding: '12px',
    width: '80%',
  }
  }));

  export const ContentcardContainer: any = styled(CardContent)(({ theme }) => ({
    backgroundColor: `${theme.palette.grayForte} !important`,
  }));
