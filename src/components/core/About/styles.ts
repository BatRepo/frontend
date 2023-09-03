import { Box, styled } from "@mui/material";

export const ContainerMain: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '90vh',
  background: '#bcbcbc',
  padding: '30px',
  marginTop: '80px',
  [theme.breakpoints.down('sm')]: {
    background: '#363636',
    color: '#FFD850',
  },
}));