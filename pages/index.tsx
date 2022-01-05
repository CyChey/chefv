import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Homepage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>App title</title>
      </Head>
      <Header>Hello World</Header>
    </div>
  );
};

export default Homepage;
