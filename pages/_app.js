import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (

      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="Author: Global Insight Hub"/>
          <title>Global Insight Hub</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;