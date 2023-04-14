import React from 'react';
import Head from 'next/head';
import HomePage from '../components/Page/Home';
export default function Home() {
  return (
    <>
      <Head>
        <title>BatForms</title>
      </Head>
      <HomePage />
    </>
  );
}
