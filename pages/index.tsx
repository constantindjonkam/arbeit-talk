import type { NextPage } from "next";
import Head from "next/head";
import MessageContainer from "../src/components/MessageContainer";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-dark-blue dark:text-white">
      <Head>
        <title>Arbeit Talk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MessageContainer />
    </div>
  );
};

export default Home;
