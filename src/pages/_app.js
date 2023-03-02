import "@/styles/globals.css";

// import { AppProps } from 'next/app';
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Layout from "@/components/layout/Layout";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>What's Your Poison?</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='icon' href='/beerIcon96.png' />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
