import { Box, styled } from "@mui/material";

export const ContainerButtonsFooter: any = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

export const ContainerMain: any = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.grayForte,
  height: '100vh',
  display: 'grid',
}));

export const ContainerInput: any = styled(Box)(({ theme }) => ({
  '& div': {
    '& label': {
      color: theme.palette.amarelo,
    },
  },
}));

export const ContainerButtons: any = styled(Box)(({ theme }) => ({
  '& button': {
    opacity: '0.7',
  },
}));