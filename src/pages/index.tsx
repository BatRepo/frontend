import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import CorpoPadrao from '../components/CorpoPadrao';

export default function Home() {
  return (
    <>
    <Head>
       <title>BatForms</title>
    </Head>
        <Header />
        <CorpoPadrao />
    </>
  );
};
