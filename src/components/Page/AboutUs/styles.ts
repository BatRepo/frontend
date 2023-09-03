import { styled, Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  background: '#363636',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: 'max-content',
    marginLeft: '20px',
    marginTop: '80px',
    height: '130vh',
  }
}));