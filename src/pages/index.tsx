import React from 'react';
import Head from 'next/head';
import HomePage from '../components/Page/Home';
import cookies from 'utils/cookies';

export default function Home() {
  console.log('token cookie', cookies.get(`${process.env.NEXT_AUTH_COOKIE_NAME}`), 'cookie name', `${process.env.NEXT_AUTH_COOKIE_NAME}`);
  return (
    <>
      <Head>
        <title>BatSystem</title>
      </Head>
      <HomePage />
    </>
  );
}
