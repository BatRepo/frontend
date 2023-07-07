import { Box, Button, styled, Theme } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
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

export const ContainerTitle: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  color: '#FFD850',
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
  color: '#FFD850',
  fontSize: '12px',
  fontFamily: 'Righteous',
  width: '100%',
  marginTop: '12px',
  textAlign: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '10px',
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
  isVisibleSM?: boolean;
}

export const ContainerButtons: any = styled(Button)(({ theme, isVisibleSM }: Ibuttons) => ({
  textAlign: 'center',
  fontFamily: 'Righteous',
  fontSize: '16px',
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
    width: '80px',
    marginRight: '45px',
    display: isVisibleSM ? 'none' : '',
    [theme.breakpoints.down('sm')]: {
      marginRight: '30px',
      fontSize: '16px',
      fontWeight: 500,
    },
  },
}));

export const ContainerBoard: any = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '70%',
  gap: '3px',
  marginTop: '21px',
});
