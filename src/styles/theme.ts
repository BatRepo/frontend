import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    grayForte?: string;
    grayFraco?: string;
    amarelo?: string;
    vermelho?: string;
    grayMedio?: string;
  }
  interface PaletteOptions {
    grayForte?: string;
    grayFraco?: string;
    amarelo?: string;
    vermelho?: string;
    grayMedio?: string;
  }
}

const theme = createTheme({
  palette: {
    grayForte: '#363636',
    grayFraco: '#bcbcbc',
    grayMedio: '#696969',
    amarelo: '#FFD850',
    vermelho: '#EE0000',
    primary: {
      main: '#0080ED',
      light: '#3D9DEF',
    },
    secondary: {
      main: '#ADB1BF',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  }
});

export default theme;