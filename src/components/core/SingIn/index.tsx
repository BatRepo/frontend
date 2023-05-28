import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from 'next/router';
import { ContainerButtonsFooter } from './style';
import { LoginUserFactory } from 'infra/factories/use-cases/user/LoginUserFactory';
import cookies from 'utils/cookies';


const theme = createTheme();

export default function SignIn() {

  const loginUser = LoginUserFactory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data) {
      const user = { email: data.get('email').toString(), password: data.get('password').toString() };
      loginUser.execute({ user }).then(response => {
        const token = response.headers['x-auth-token'];
        console.log('token', token);
        if(token) {
          cookies.set('batAuthToken', token);
        }
      });
    }
  };

  
  const back = () => {
    Router.back();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <ContainerButtonsFooter>
            <Button
              type="reset"
              variant="contained"
              sx={{ mt: 3, mb: 2, padding: '8px', marginRight: '12px' }}
            >
              Reset
            </Button>
            <Button
              sx={{ mt: 3, mb: 2 }}
              onClick={back}
            >
              Voltar
            </Button>
            </ContainerButtonsFooter>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}