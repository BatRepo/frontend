import React from 'react';
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const automation: NextPage = () => {
  return (
        <>
          <Head>
            <title>BatSystem</title>
          </Head>
          
        </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};
export default automation;