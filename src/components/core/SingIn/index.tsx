import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from 'next/router';
import { ContainerButtonsFooter, ContainerInput, ContainerMain } from './style';
import { LoginUserFactory } from 'infra/factories/use-cases/user/LoginUserFactory';
import { useAuth } from 'hooks/auth';


const theme = createTheme();

export default function SignIn() {

  const loginUser = LoginUserFactory();
  const { setToken} = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data) {
      const user = { email: data.get('email').toString(), password: data.get('password').toString() };
      loginUser.execute({ user }).then(token => {
        console.log('token', token);
        if (token) {
          setToken(token);
          Router.push('/loggued/home');
        }
      });
    }
  };

  
  const back = () => {
    Router.back();
  };

  return (
    <>
      <ContainerMain>
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
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <ContainerInput id="containerInput">
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
                  </ContainerInput>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, opacity: '0.8', }}
                >
                  Sign In
                </Button>
                <ContainerButtonsFooter>
                <Button
                  type="reset"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, padding: '8px', marginRight: '12px', opacity: '0.6' }}
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
    </ContainerMain>
    </>
  );
}