import { Box, Grid, Theme, styled } from '@mui/material';

export const Container: any = styled(Grid)(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#363636',
  width: '100%',
  position: 'static',
  bottom: 0,
  left: 0,
  right: 0,
  [theme.breakpoints.down('md')]: {
    position: 'fixed',
  }
}));

export const LabelContact: any = styled(Grid)(({ theme }) => ({
  fontSize: '12px',
  fontFamily: 'Righteous',
  fontWeight: '50px',
  color: '#FFFFFF',
  justifyContent: 'start',
  paddingTop: '15px',
  paddingLeft: '20px',
  alignSelf: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '8px',
    },
  },
}));

interface Icenter {
  theme: Theme;
  smallCenter?: boolean;
}


export const LabelCenter: any = styled(Grid)(({ theme, smallCenter }: Icenter) => ({
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontFamily: 'Righteous',
  fontWeight: '400px',
  color: '#FFFFFF',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  '& svg': {
    width: smallCenter ? '150px' : '250px',
    height: smallCenter ? '80%' : '100%',
  }
}));

export const LabelDevelopers: any = styled(Grid)(({ theme }) => ({
  fontSize: '12px',
  fontFamily: 'Righteous',
  fontWeight: '100px',
  color: '#FFFFFF',
  justifyContent: 'end',
  textAlign: 'end',
  paddingTop: '15px',
  paddingRight: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '8px',
    },
  },
  alignSelf: 'end',
  marginBottom: '18px',
}));