import React from 'react';
import { AppProps } from 'next/app';
import AppContext from '../hooks/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </>
  );
};

export default MyApp;
