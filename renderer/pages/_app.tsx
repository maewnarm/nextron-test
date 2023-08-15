import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "antd/dist/antd.css";
import Layout from "../components/layout";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
