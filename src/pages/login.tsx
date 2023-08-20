import React from 'react';
import Login from "components/Page/Login";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const login: NextPage = () => {
  return (
        <>
          <Head>
            <title>BatSystem</title>
          </Head>
          <Login />
        </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};''
export default login;