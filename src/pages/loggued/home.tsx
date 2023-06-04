import HomeLoggued from "components/Page/Loggued/Home";
import { GetStaticProps, NextPage } from "next";

const home: NextPage = () => {
  return (
        <>
          <HomeLoggued />
        </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};
export default home;