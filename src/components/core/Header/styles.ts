import { Box, Button, Grid, styled, Theme } from '@mui/material';

export const Container: any = styled(Grid)(({ theme }) => ({
  display: 'inline-flex',
  width: '100%',
  height: '250px',
  backgroundColor: '#363636',
  borderBottom: '1px solid black',
  scrollBehavior: 'smooth',
  position: 'fixed',
  [theme.breakpoints.down('sm')]: {
    height: '180px',
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
  height: '50px',
  width: '180px',
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

export const ContainerBoard: any = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'end',
  justifyContent: 'start',
});
