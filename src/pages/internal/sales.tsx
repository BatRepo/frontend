import React from 'react';
import Sales from "components/Page/Sales";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const sales: NextPage = () => {
  return (
        <>
          <Head>
            <title>BatSystem</title>
          </Head>
          <Sales />
        </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};
export default sales;