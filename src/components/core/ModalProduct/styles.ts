import { Box, IconButton, Typography, styled } from "@mui/material";

export const ContainerModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '700px',
  boxShadow: '24px',
  p: 4,
  borderRadius: 4,
  outline: 'none',
  background: '#fff',
  padding: '10px',
  maxHeight: '85vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column', 
}));


export const Images: any = styled(Box)(({ theme }) => ({
  '& img': {
    maxWidth: '50%',
    marginTop: 10,
  }
}));

export const TitleContainer: any = styled(Typography)(({ theme }) => ({
  position: 'static',
}));

export const ContentContainer: any = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

export const CloseButton: any = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
}));

