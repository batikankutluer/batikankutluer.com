import Head from 'next/head'
import { ContextProvider } from "../components/context";

import "../styles/root.css"
import "../styles/globals.css";
import "../styles/general.css";

function MyApp({ Component, pageProps }) {

  return <ContextProvider>
    <Head>
      <title>Batıkan Kutluer</title>

      <meta charset="utf-8" />
      <meta name="description" content="Kendi websitem." />
      <meta name="author" content="Batıkan Kutluer" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />
    </Head>

    <Component {...pageProps} />
  </ContextProvider>;
}

export default MyApp;
