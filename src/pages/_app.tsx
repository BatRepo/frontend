import React from 'react';
import { AppProps } from 'next/app';
import AppContext from '../hooks/app';
import Head from 'next/head';
import theme from '../styles/theme';
import { ThemeProvider } from '@mui/material';
import '../styles/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <AppContext>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppContext>
    </>
  );
};

export default MyApp;
