import { Box, styled } from "@mui/material";

export const ContainerButtonsFooter: any = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

export const ContainerMain: any = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export const ContainerInput: any = styled(Box)(({ theme }) => ({
  '& div': {
    '& label': {
      color: '#FFD850',
    },
  },
}));

export const ContainerButtons: any = styled(Box)(({ theme }) => ({
  '& button': {
    opacity: '0.7',
  },
}));