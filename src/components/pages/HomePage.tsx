import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import CorpoPadrao from '../CorpoPadrao';

const HomePage: React.FC = () => {
    return(
    <>
    <Head>
       <title>BatForms</title>
    </Head>
        <Header />
        <CorpoPadrao />
    </>
    );
}

export default HomePage;

