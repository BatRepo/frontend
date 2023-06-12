import Register from "components/Page/Loggued/Register";
import { useAuth } from "hooks/auth";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const register: NextPage = () => {
  const { loggued} = useAuth();
  return (
        <>
        {loggued && (
          <>
            <Head>
              <title>BatSystem</title>
            </Head>
            <Register isLoggued={loggued} />
          </>
        )}
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