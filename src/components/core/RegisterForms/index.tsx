import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from 'next/router';
import { CreateUserFactory } from 'infra/factories/use-cases/user/CreateUserFactory';
import { ContainerButtonsFooter, ContainerInput, ContainerMain } from './styles';
import SuccessBar from '../SuccessBar';


const theme = createTheme();

export default function RegisterForms() {

  const createUser = CreateUserFactory();
  const [registrado, setRegistrado] = React.useState<boolean>(false);
  const [snackbar, setSnackbar] = React.useState<boolean>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data) {
      const user = { name: data.get('name').toString(), email: data.get('email').toString(), password: data.get('password').toString() };
      if (user && user != undefined) {
        const token = await createUser.execute({ user });
        if (token) {
          setRegistrado(true);
          setSnackbar(true);
        }
        setSnackbar(false);
        setRegistrado(false);
      }
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar(false);
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
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                      autoFocus
                    />
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
                  Cadastrar
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
                {registrado ? 
                  (
                    <SuccessBar isOpen={snackbar} message='Usuario registrado com sucesso' severityOption='success' handleClose={handleSnackbarClose}/>
                  ) 
                  : (
                    <SuccessBar isOpen={snackbar} message='Erro ao criar usuario' severityOption='error' handleClose={handleSnackbarClose}/>
                  )}
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
    </ContainerMain>
    </>
  );
}