import { Box, Modal, Typography, styled } from "@mui/material";


export const ContainerModal: any = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

export const ModalStyled: any = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const TypographyStyled: any = styled(Typography)(({ theme }) => ({
  color: theme.palette.amarelo,
  fontFamily: 'Righteous',
  fontSize: '21px',
  fontWeight: 400,
  marginBottom: '15px',
}));

export const ContainerButtons: any = styled(Box)(({ theme }) => ({
  gap: '15px',
  '& button': {
    mt: 3,
    mb: 2,
    marginLeft: '15px',
    marginTop: '12px',
  },
}));

