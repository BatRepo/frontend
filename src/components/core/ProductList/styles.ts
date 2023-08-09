import { Box, Card, styled } from "@mui/material";

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

export const CardContainer: any = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  width: '60%',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#696969',
  },
  }));

