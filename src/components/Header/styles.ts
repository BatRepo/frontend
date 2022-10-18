import { Box, Button, styled } from '@mui/material';

export const Container: any = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '200px',
  backgroundColor: '#363636',
  borderBottom: '1px solid black',
  scrollBehavior: 'smooth',
  [theme.breakpoints.down('sm')]: {
    height: '150px',
  },
}));

export const ContainerTitle: any = styled(Box)(({ theme }) => ({
  color: '#FFD850',
  fontSize: '45px',
  fontFamily: 'Righteous',
  maxWidth: '300px',
  maxHeight: '150px',
  marginLeft: '15px',
  marginTop: '30px',
  textAlign: 'center',
  alignSelf: 'flex-start',
  marginRight: '120px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '200px',
    maxHeight: '100px',
    fontSize: '35px',
    marginRight: '85px',
  },
}));

export const ContainerButtons: any = styled(Button)(({ theme }) => ({
  textAlign: 'center',
  fontFamily: 'Shadows Into Light',
  fontSize: '18px',
  fontWeight: 700,
  color: '#EE0000',
  height: '50px',
  width: '180px',
  background: '#363636',
  margin: '10px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#FFD850',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    fontSize: '10px',
    '& [button1]': {
      display: 'none',
    },
  },
}));

export const ContainerBoard: any = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'end',
});
