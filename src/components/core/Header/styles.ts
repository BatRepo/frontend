import { Box, Button, styled, Theme } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxHeight: '35vh',
  backgroundColor: theme.palette.grayForte,
  scrollBehavior: 'smooth',
  top: 0,
  left: 0,
  right: 0,
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    display: 'inline-grid',
  },
}));

export const ContainerTitle: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.amarelo,
  fontSize: '45px',
  fontFamily: 'Righteous',
  width: '100%',
  marginTop: '30px',
  textAlign: 'center',
  alignSelf: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '35px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
    },
  },
  [theme.breakpoints.up('xs')]: {
    marginLeft: '30px',
  },
}));

export const ContainerUTF: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.amarelo,
  fontSize: '12px',
  fontFamily: 'Righteous',
  width: '100%',
  marginTop: '12px',
  marginBottom: '12px',
  textAlign: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '30px',
  },
}));

export const ContainerPresentation: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  width: '30%',
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
}));

interface Ibuttons {
  theme: Theme;
  isvisiblesm?: boolean;
}

export const ContainerButtons: any = styled(Button)(({ theme, isvisiblesm }: Ibuttons) => ({
  textAlign: 'center',
  fontFamily: 'Righteous',
  fontSize: '16px',
  fontWeight: 800,
  color: theme.palette.vermelho,
  height: '45px',
  width: '160px',
  background: theme.palette.grayForte,
  margin: '10px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.palette.amarelo,
  },
  [theme.breakpoints.down('md')]: {
    width: '80px',
    marginRight: '45px',
    display: isvisiblesm ? 'none' : '',
    [theme.breakpoints.down('sm')]: {
      marginRight: '30px',
      fontSize: '18px',
      fontWeight: 500,
      padding: '15px',
    },
  },
}));

export const ContainerBoard: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '70%',
  gap: '3px',
  marginTop: '21px',
  [theme.breakpoints.down('sm')]: {
    justifySelf: 'center',
  },
}));