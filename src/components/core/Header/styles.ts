import { Box, Button, Grid, styled, Theme } from '@mui/material';

export const Container: any = styled(Grid)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxHeight: '30vh',
  backgroundColor: '#363636',
  scrollBehavior: 'smooth',
  top: 0,
  left: 0,
  right: 0,
  [theme.breakpoints.down('sm')]: {
    maxHeight: '180px',
  },
}));

export const ContainerTitle: any = styled(Grid)(({ theme }) => ({
  color: '#FFD850',
  fontSize: '45px',
  fontFamily: 'Righteous',
  width: '100%',
  marginTop: '30px',
  textAlign: 'center',
  alignSelf: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '21px',
    },
  },
}));

export const ContainerUTF: any = styled(Grid)(({ theme }) => ({
  color: '#FFD850',
  fontSize: '12px',
  fontFamily: 'Righteous',
  width: '100%',
  marginTop: '12px',
  textAlign: 'center',
  alignSelf: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '8px',
    },
  },
}));

export const ContainerPresentation: any = styled(Grid)(({ theme }) => ({
  width: '100%',
  textAlign: '-webkit-center',
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
}));

interface Ibuttons {
  theme: Theme;
  isVisibleSM?: boolean;
}

export const ContainerButtons: any = styled(Button)(({ theme, isVisibleSM }: Ibuttons) => ({
  textAlign: 'center',
  fontFamily: 'Shadows Into Light',
  fontSize: '21px',
  fontWeight: 800,
  color: '#EE0000',
  height: '45px',
  width: '160px',
  background: '#363636',
  margin: '10px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#FFD850',
  },
  [theme.breakpoints.down('md')]: {
    width: '50px',
    fontSize: '18px',
    marginRight: '40px',
    display: isVisibleSM ? 'none' : '',
    [theme.breakpoints.down('sm')]: {
      marginRight: '15px',
      fontSize: '12px',
    },
  },
}));

export const ContainerBoard: any = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '3px',
});
