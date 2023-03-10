import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/Header";
import MessageContainer from "../src/components/MessageContainer";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-dark-blue dark:text-white">
      <Head>
        <title>Arbeit Talk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MessageContainer />
    </div>
  );
};

export default Home;
