// dependencies
import Link from "next/link";
import Head from "next/head";

// components
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import CariTiketForm from "../components/CariTiketForm/CariTiketForm";

// other

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Airtrip</title>
      </Head>
      <main>
        <Navbar transparent />
        <Hero />
        <CariTiketForm />
        <Hero />
      </main>
    </>
  );
};

export default Home;
