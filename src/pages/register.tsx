import React from 'react';
import Register from "components/Page/Register";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const register: NextPage = () => {
  return (
        <>
          <Head>
            <title> BatSystem </title>
          </Head>
          <Register />
        </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};
export default register;