import { Box, Card, styled } from "@mui/material";

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'inline-table',
}));

export const CardContainer: any = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  width: '60%',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#696969',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
  }));

